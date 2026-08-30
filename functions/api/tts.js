// Cloudflare Pages Function: /api/tts
// Microsoft Neural Studio TTS with Global Edge Caching (Cloudflare CDN)
// Serves studio-grade natural Spanish voices (Jorge Neural, Dalia Neural, Álvaro Neural, etc.)
// Caches MP3 audio globally on CDN so each paragraph is generated ONCE for all users worldwide.

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const EDGE_TRUSTED_CLIENT_TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
const EDGE_WSS_URL = `wss://speech.platform.bing.com/consumer/speech/synthesize/readahead/edge/v1?TrustedClientToken=${EDGE_TRUSTED_CLIENT_TOKEN}&ConnectionId=`;

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

function generateSSML(text, voice = 'es-MX-JorgeNeural', rate = '+0%') {
  // Clean special characters for XML/SSML
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

  return `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='es-MX'><voice name='${voice}'><prosody rate='${rate}'>${escaped}</prosody></voice></speak>`;
}

function generateRequestId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Convert audio synthesis via Edge TTS WebSocket into an MP3 buffer
async function synthesizeWithEdgeTTS(text, voice = 'es-MX-JorgeNeural', rate = '+0%') {
  const reqId = generateRequestId().replace(/-/g, '');
  const url = `${EDGE_WSS_URL}${reqId}`;

  return new Promise((resolve, reject) => {
    let ws;
    try {
      ws = new WebSocket(url);
    } catch (e) {
      return reject(e);
    }

    const audioChunks = [];
    const timeout = setTimeout(() => {
      try { ws.close(); } catch (_) {}
      if (audioChunks.length > 0) {
        resolve(concatArrayBuffers(audioChunks));
      } else {
        reject(new Error('Edge TTS WebSocket timeout'));
      }
    }, 15000);

    ws.onopen = () => {
      // 1. Send speech.config
      const configMessage =
        `X-Timestamp:${new Date().toISOString()}\r\n` +
        `Content-Type:application/json; charset=utf-8\r\n` +
        `Path:speech.config\r\n\r\n` +
        `{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}`;
      ws.send(configMessage);

      // 2. Send SSML request
      const ssml = generateSSML(text, voice, rate);
      const ssmlMessage =
        `X-RequestId:${reqId}\r\n` +
        `Content-Type:application/ssml+xml\r\n` +
        `X-Timestamp:${new Date().toISOString()}Z\r\n` +
        `Path:ssml\r\n\r\n` +
        ssml;
      ws.send(ssmlMessage);
    };

    ws.onmessage = async (event) => {
      if (typeof event.data === 'string') {
        if (event.data.includes('Path:turn.end')) {
          clearTimeout(timeout);
          try { ws.close(); } catch (_) {}
          resolve(concatArrayBuffers(audioChunks));
        }
      } else if (event.data instanceof ArrayBuffer || event.data?.byteLength !== undefined) {
        const buffer = event.data instanceof ArrayBuffer ? event.data : await event.data.arrayBuffer();
        // Edge TTS audio binary messages have a 2-byte header with the length of text header
        const view = new DataView(buffer);
        if (buffer.byteLength > 2) {
          const headerLength = view.getUint16(0);
          if (buffer.byteLength > 2 + headerLength) {
            const audioData = buffer.slice(2 + headerLength);
            audioChunks.push(audioData);
          }
        }
      }
    };

    ws.onerror = (err) => {
      clearTimeout(timeout);
      if (audioChunks.length > 0) {
        resolve(concatArrayBuffers(audioChunks));
      } else {
        reject(err);
      }
    };

    ws.onclose = () => {
      clearTimeout(timeout);
      if (audioChunks.length > 0) {
        resolve(concatArrayBuffers(audioChunks));
      }
    };
  });
}

function concatArrayBuffers(buffers) {
  let totalLength = 0;
  for (const b of buffers) {
    totalLength += b.byteLength;
  }
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const b of buffers) {
    result.set(new Uint8Array(b), offset);
    offset += b.byteLength;
  }
  return result.buffer;
}

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') {
    return onRequestOptions();
  }

  try {
    let text = '';
    let voice = 'es-MX-JorgeNeural';
    let rate = '1.0';

    if (request.method === 'GET') {
      const url = new URL(request.url);
      text = url.searchParams.get('text') || '';
      voice = url.searchParams.get('voice') || 'es-MX-JorgeNeural';
      rate = url.searchParams.get('rate') || '1.0';
    } else if (request.method === 'POST') {
      const body = await request.json();
      text = body.text || '';
      voice = body.voice || 'es-MX-JorgeNeural';
      rate = String(body.rate || '1.0');
    }

    if (!text || !text.trim()) {
      return new Response(JSON.stringify({ error: 'Texto requerido' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    // Limit text per chunk to 2,000 characters
    const cleanText = text.trim().slice(0, 2000);

    // Format speech rate to SSML format: 1.0 -> "+0%", 1.25 -> "+25%", 0.9 -> "-10%"
    let ssmlRate = '+0%';
    const numRate = parseFloat(rate) || 1.0;
    if (numRate > 1.0) {
      const diff = Math.round((numRate - 1.0) * 100);
      ssmlRate = `+${diff}%`;
    } else if (numRate < 1.0) {
      const diff = Math.round((1.0 - numRate) * 100);
      ssmlRate = `-${diff}%`;
    }

    // Try Edge TTS WebSocket
    const mp3Buffer = await synthesizeWithEdgeTTS(cleanText, voice, ssmlRate);

    if (!mp3Buffer || mp3Buffer.byteLength === 0) {
      return new Response(JSON.stringify({ error: 'No se pudo sintetizar el audio.' }), {
        status: 502,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    // Return MP3 audio with 1-year Cloudflare Global CDN Cache!
    // Once generated for any user, Cloudflare CDN caches it globally for all future users.
    return new Response(mp3Buffer, {
      status: 200,
      headers: {
        ...CORS_HEADERS,
        'Content-Type': 'audio/mpeg',
        'Content-Length': String(mp3Buffer.byteLength),
        'Cache-Control': 'public, max-age=31536000, s-maxage=31536000, immutable',
        'X-Audio-Engine': 'Microsoft-Neural-CDN-Cached',
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: 'Error sintetizando audio neuronal',
        details: err?.message || String(err),
      }),
      {
        status: 500,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      }
    );
  }
}
