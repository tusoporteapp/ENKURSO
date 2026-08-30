import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    aiClient = new GoogleGenAI({
      apiKey: apiKey || '',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', app: 'Enkurso - Biblioteca de Cursos de Negocios' });
  });

  // AI Executive Mentor Endpoint
  app.post('/api/mentor', async (req, res) => {
    try {
      const {
        bookTitle,
        categoryName,
        currentChapter,
        userQuery,
        chatHistory = [],
        userBusinessType = 'General'
      } = req.body;

      if (!userQuery) {
        return res.status(400).json({ error: 'Se requiere la consulta del usuario.' });
      }

      const ai = getAiClient();
      const systemInstruction = `Eres "Mentor Enkurso", un asesor y consultor de estrategia empresarial, operaciones y finanzas para directores y emprendedores de alto rendimiento.
Estás asesorando a un estudiante o líder empresarial que está leyendo el libro/curso: "${bookTitle}" (Categoría: ${categoryName}, Capítulo activo: ${currentChapter || 'General'}).
El tipo de negocio del usuario es: ${userBusinessType}.

Tus respuestas deben ser:
1. Extremadamente claras, prácticas, estructuradas y profesionales (en español neutro).
2. Enfocadas en tácticas aplicables de inmediato (con pasos 1, 2, 3 o viñetas ejecutivas).
3. Con ejemplos concretos adaptados a su sector de negocio.
4. Tono: Mentor ejecutivo respetuoso, inspirador, directo y sin rodeos innecesarios. Mantén las respuestas en torno a 150-300 palabras para facilitar la lectura.`;

      // Build contents from history
      let promptContent = `Pregunta del usuario sobre el curso "${bookTitle}": ${userQuery}`;
      if (chatHistory && chatHistory.length > 0) {
        const historyText = chatHistory
          .slice(-6)
          .map((msg: { role: string; content: string }) => `${msg.role === 'user' ? 'Usuario' : 'Mentor'}: ${msg.content}`)
          .join('\n');
        promptContent = `Historial previo:\n${historyText}\n\nNueva consulta del usuario: ${userQuery}`;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: promptContent,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || 'No se pudo generar una respuesta en este momento. Inténtalo de nuevo.';
      return res.json({ reply: replyText });
    } catch (error: any) {
      console.error('Error en /api/mentor:', error);
      // Graceful fallback response if API key is missing or errored
      return res.json({
        reply: `Como consultor ejecutivo de Enkurso, te recomiendo enfocar este tema estructurando tu plan en 3 fases: 1) Diagnosticar tus cuellos de botella actuales con datos cuantitativos; 2) Probar un experimento piloto de bajo costo durante 7 días; 3) Estandarizar la solución en un checklist operativo para tu equipo.`
      });
    }
  });

  // Business Sector Blueprint Customizer
  app.post('/api/business-adaptation', async (req, res) => {
    try {
      const { bookTitle, categoryName, businessIndustry } = req.body;
      const ai = getAiClient();

      const prompt = `Adapta los principios del libro de negocios "${bookTitle}" (Categoría: ${categoryName}) específicamente para el sector/industria: "${businessIndustry || 'E-commerce'}".
Genera un blueprint de implementación con 4 secciones cortas en formato JSON o texto estructurado:
1. Oportunidad Clave para este sector.
2. 3 Acciones Prácticas Inmediatas.
3. Métrica Clave a vigilar.
4. Trampa Específica del sector a evitar.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: prompt,
        config: {
          systemInstruction: 'Eres un experto en consultoría estratégica y adaptación de modelos de negocio por industria.',
          temperature: 0.7,
        },
      });

      return res.json({ blueprint: response.text });
    } catch (error) {
      console.error('Error en /api/business-adaptation:', error);
      return res.json({
        blueprint: `Guía rápida para tu sector:\n1. Identifica el dolor de tus clientes más rentables.\n2. Lanza una oferta simple y mide el tiempo de respuesta.\n3. Monitorea el margen de contribución unitario.`
      });
    }
  });

  // Vite middleware for development vs static production build
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Enkurso Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
