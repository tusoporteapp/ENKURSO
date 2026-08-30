export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const data = await context.request.json().catch(() => ({}));

    // Google Apps Script Webhook URL can be configured via environment variable or default fallback
    const webhookUrl = context.env?.GOOGLE_SHEET_WEBHOOK_URL || '';

    const payload = {
      timestamp: new Date().toLocaleString('es-ES', { timeZone: 'America/Lima' }),
      userIntent: data.userIntent === 'want_to_start' ? 'Quiero Emprender' : 'Ya tengo Emprendimiento',
      name: data.name || '',
      companyName: data.companyName || (data.userIntent === 'want_to_start' ? 'Nuevo Proyecto' : ''),
      industry: data.industry || '',
      websiteUrl: data.websiteUrl || 'N/A',
      socialHandle: data.socialHandle || 'N/A',
      challengeText: data.challengeText || 'N/A',
      goalMinutes: data.goalMinutes ? `${data.goalMinutes} min/día` : '15 min/día',
      diagnosisSummary: data.diagnosisSummary || '',
      curatedBooks: Array.isArray(data.curatedBookIds) ? data.curatedBookIds.join(', ') : '',
    };

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (webhookErr) {
        console.error('Error forwarding to Google Sheets webhook:', webhookErr);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Lead registered successfully',
        data: payload,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message || 'Error processing sync',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
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
