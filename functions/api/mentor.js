// Cloudflare Pages Function: /api/mentor
// Powered by Cloudflare Workers AI with Meta Llama 3.3 70B Instruct

const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const {
      bookTitle = 'Estrategia Empresarial',
      categoryName = 'Negocios',
      currentChapter = 'General',
      userQuery,
      chatHistory = [],
      userBusinessType = 'General',
    } = body;

    if (!userQuery || typeof userQuery !== 'string' || !userQuery.trim()) {
      return new Response(
        JSON.stringify({ error: 'Se requiere la consulta del usuario.' }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    // Check if Cloudflare Workers AI binding is available
    if (!env || !env.AI) {
      return new Response(
        JSON.stringify({
          reply: Como consultor ejecutivo de EnKurso para tu negocio de ****, te sugiero enfocar este tema de "" en 3 pasos: 1) Diagnosticar tus cuellos de botella actuales con datos cuantitativos; 2) Probar un experimento piloto de bajo costo durante 7 días; 3) Estandarizar la solución en un checklist operativo para tu equipo.
        }),
        { headers: CORS_HEADERS }
      );
    }

    const systemPrompt = Eres "Mentor EnKurso", un asesor de alto nivel y consultor de estrategia empresarial, finanzas y operaciones para directores, ejecutivos y emprendedores.
Estás asesorando a un líder empresarial que está estudiando el libro/curso: "" (Categoría: , Capítulo activo: ).
El sector o modelo de negocio del usuario es: "".

Directrices estrictas para tus respuestas:
1. Extremadamente claras, prácticas, estructuradas y profesionales (en español neutro).
2. Enfocadas en tácticas ejecutables de inmediato (utiliza pasos 1, 2, 3 o viñetas ejecutivas con indicadores medibles).
3. Adapta siempre los ejemplos y métricas al sector de negocio del usuario ("").
4. Tono: Mentor ejecutivo respetuoso, inspirador, directo y sin rodeos teóricos innecesarios. Mantén las respuestas en torno a 150-350 palabras para una lectura ágil en móviles.;

    // Build message history
    const formattedHistory = [];
    if (Array.isArray(chatHistory)) {
      for (const msg of chatHistory.slice(-6)) {
        if (msg.role && msg.content) {
          formattedHistory.push({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content,
          });
        }
      }
    }

    const messages = [
      { role: 'system', content: systemPrompt },
      ...formattedHistory,
      { role: 'user', content: userQuery.trim() },
    ];

    let aiResult;
    try {
      // Primary model: Llama 3.3 70B Instruct FP8 Fast
      aiResult = await env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
        messages,
        temperature: 0.7,
        max_tokens: 800,
      });
    } catch (primaryError) {
      console.warn('Fallback to Llama 3.1 70B / 8B:', primaryError);
      try {
        aiResult = await env.AI.run('@cf/meta/llama-3.1-70b-instruct', {
          messages,
          temperature: 0.7,
          max_tokens: 800,
        });
      } catch (secondaryError) {
        aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages,
          temperature: 0.7,
          max_tokens: 800,
        });
      }
    }

    const reply = aiResult?.response || 'No se pudo generar una respuesta en este momento. Por favor intenta de nuevo.';

    return new Response(
      JSON.stringify({ reply }),
      { headers: CORS_HEADERS }
    );
  } catch (error) {
    console.error('Error en Pages Function /api/mentor:', error);
    return new Response(
      JSON.stringify({
        reply: Como consultor ejecutivo de EnKurso, te recomiendo enfocar este reto estructurando tu plan en 3 fases inmediatas: 1) Medir el impacto en margen y tiempo operativo; 2) Diseñar un protocolo simple de ejecución para 14 días; 3) Auditar los resultados semanales con tu equipo.
      }),
      { headers: CORS_HEADERS }
    );
  }
}
