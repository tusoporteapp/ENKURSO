// Cloudflare Pages Function: /api/auth
// Proxy Serverless para Registro, Inicio de Sesión y Sincronización de Historial

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbwAah9S4HhbdSCEC12AxAX-TEFEjuewqkvazxGTZ6apYnAONgGeze44pHxZLf0eR40/exec';

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({
      success: true,
      message: 'Operación procesada.',
    }));

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Error en el servidor de autenticación',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
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
