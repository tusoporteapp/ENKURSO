// Cloudflare Pages Function: /api/business-adaptation
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
    const { bookTitle = 'Negocios', categoryName = 'General', businessIndustry = 'E-commerce' } = body;

    if (!env || !env.AI) {
      return new Response(
        JSON.stringify({
          blueprint: `Guía rápida para ${businessIndustry}:\n1. Identifica el dolor de tus clientes más rentables.\n2. Lanza una oferta simple y mide el tiempo de respuesta.\n3. Monitorea el margen de contribución unitario.`
        }),
        { headers: CORS_HEADERS }
      );
    }

    const prompt = `Adapta los principios del libro de negocios "${bookTitle}" (Categoría: ${categoryName}) específicamente para el sector o industria: "${businessIndustry}".
Genera un blueprint de implementación ejecutiva con 4 secciones cortas:
1. Oportunidad Clave para este sector.
2. 3 Acciones Prácticas Inmediatas (Paso 1, 2 y 3).
3. Métrica Clave a vigilar (KPI principal).
4. Trampa Específica del sector a evitar.`;

    const messages = [
      {
        role: 'system',
        content: 'Eres un consultor senior en estrategia de negocios y adaptación de modelos empresariales por industria. Responde en español neutro, directo y estructurado.',
      },
      { role: 'user', content: prompt }
    ];

    let aiResult;
    try {
      aiResult = await env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
        messages,
        temperature: 0.7,
        max_tokens: 700,
      });
    } catch {
      aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
        messages,
        temperature: 0.7,
        max_tokens: 700,
      });
    }

    return new Response(
      JSON.stringify({ blueprint: aiResult?.response || 'Blueprint generado para ' + businessIndustry }),
      { headers: CORS_HEADERS }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
