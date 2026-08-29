var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
var import_vite = require("vite");
import_dotenv.default.config();
var aiClient = null;
function getAiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    aiClient = new import_genai.GoogleGenAI({
      apiKey: apiKey || "",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "Enkurso - Biblioteca de Cursos de Negocios" });
  });
  app.post("/api/mentor", async (req, res) => {
    try {
      const {
        bookTitle,
        categoryName,
        currentChapter,
        userQuery,
        chatHistory = [],
        userBusinessType = "General"
      } = req.body;
      if (!userQuery) {
        return res.status(400).json({ error: "Se requiere la consulta del usuario." });
      }
      const ai = getAiClient();
      const systemInstruction = `Eres "Mentor Enkurso", un asesor y consultor de estrategia empresarial, operaciones y finanzas para directores y emprendedores de alto rendimiento.
Est\xE1s asesorando a un estudiante o l\xEDder empresarial que est\xE1 leyendo el libro/curso: "${bookTitle}" (Categor\xEDa: ${categoryName}, Cap\xEDtulo activo: ${currentChapter || "General"}).
El tipo de negocio del usuario es: ${userBusinessType}.

Tus respuestas deben ser:
1. Extremadamente claras, pr\xE1cticas, estructuradas y profesionales (en espa\xF1ol neutro).
2. Enfocadas en t\xE1cticas aplicables de inmediato (con pasos 1, 2, 3 o vi\xF1etas ejecutivas).
3. Con ejemplos concretos adaptados a su sector de negocio.
4. Tono: Mentor ejecutivo respetuoso, inspirador, directo y sin rodeos innecesarios. Mant\xE9n las respuestas en torno a 150-300 palabras para facilitar la lectura.`;
      let promptContent = `Pregunta del usuario sobre el curso "${bookTitle}": ${userQuery}`;
      if (chatHistory && chatHistory.length > 0) {
        const historyText = chatHistory.slice(-6).map((msg) => `${msg.role === "user" ? "Usuario" : "Mentor"}: ${msg.content}`).join("\n");
        promptContent = `Historial previo:
${historyText}

Nueva consulta del usuario: ${userQuery}`;
      }
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: promptContent,
        config: {
          systemInstruction,
          temperature: 0.7
        }
      });
      const replyText = response.text || "No se pudo generar una respuesta en este momento. Int\xE9ntalo de nuevo.";
      return res.json({ reply: replyText });
    } catch (error) {
      console.error("Error en /api/mentor:", error);
      return res.json({
        reply: `Como consultor ejecutivo de Enkurso, te recomiendo enfocar este tema estructurando tu plan en 3 fases: 1) Diagnosticar tus cuellos de botella actuales con datos cuantitativos; 2) Probar un experimento piloto de bajo costo durante 7 d\xEDas; 3) Estandarizar la soluci\xF3n en un checklist operativo para tu equipo.`
      });
    }
  });
  app.post("/api/business-adaptation", async (req, res) => {
    try {
      const { bookTitle, categoryName, businessIndustry } = req.body;
      const ai = getAiClient();
      const prompt = `Adapta los principios del libro de negocios "${bookTitle}" (Categor\xEDa: ${categoryName}) espec\xEDficamente para el sector/industria: "${businessIndustry || "E-commerce"}".
Genera un blueprint de implementaci\xF3n con 4 secciones cortas en formato JSON o texto estructurado:
1. Oportunidad Clave para este sector.
2. 3 Acciones Pr\xE1cticas Inmediatas.
3. M\xE9trica Clave a vigilar.
4. Trampa Espec\xEDfica del sector a evitar.`;
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          systemInstruction: "Eres un experto en consultor\xEDa estrat\xE9gica y adaptaci\xF3n de modelos de negocio por industria.",
          temperature: 0.7
        }
      });
      return res.json({ blueprint: response.text });
    } catch (error) {
      console.error("Error en /api/business-adaptation:", error);
      return res.json({
        blueprint: `Gu\xEDa r\xE1pida para tu sector:
1. Identifica el dolor de tus clientes m\xE1s rentables.
2. Lanza una oferta simple y mide el tiempo de respuesta.
3. Monitorea el margen de contribuci\xF3n unitario.`
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Enkurso Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
