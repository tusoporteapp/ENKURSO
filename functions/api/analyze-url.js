export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await context.request.json().catch(() => ({}));
    const rawUrl = body.url ? body.url.trim() : '';
    const socialHandle = body.socialHandle ? body.socialHandle.trim() : '';

    if (!rawUrl && !socialHandle) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'No URL or social handle provided',
        }),
        { headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    let extractedTitle = '';
    let extractedDescription = '';
    let targetUrl = rawUrl;

    if (targetUrl) {
      if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
        targetUrl = 'https://' + targetUrl;
      }

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        const response = await fetch(targetUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; EnKursoBot/1.0; +https://enkurso.org)',
            'Accept': 'text/html,application/xhtml+xml',
          },
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const html = await response.text();
          
          // Extract <title>
          const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
          if (titleMatch && titleMatch[1]) {
            extractedTitle = titleMatch[1].trim().slice(0, 150);
          }

          // Extract meta description
          const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i)
            || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i)
            || html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i);
          if (descMatch && descMatch[1]) {
            extractedDescription = descMatch[1].trim().slice(0, 300);
          }
        }
      } catch (fetchErr) {
        // Fallback gracefully on fetch error
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          url: targetUrl,
          socialHandle,
          extractedTitle,
          extractedDescription,
        },
      }),
      { headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message || 'Analysis error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
