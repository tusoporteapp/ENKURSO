import { BookCourse } from '../types';

/**
 * Generates a comprehensive, specialized Master Executive Prompt for any book,
 * ready to be pasted into ChatGPT, Claude, Gemini, or DeepSeek to produce
 * an exportable PDF/Executive Plan.
 */
export function generateExecutivePdfPrompt(book: BookCourse): string {
  const chapterTitles = (book.chapters || []).map((ch, i) => `  - Capítulo ${i + 1}: ${ch.title}`).join('\n');
  const takeaways = (book.keyTakeaways || []).slice(0, 3).map((t) => `  • ${t}`).join('\n');

  return `====================================================================
PROMPT MAESTRO EJECUTIVO: GENERADOR DE DOCUMENTO / PLAN EN PDF
Metodología: "${book.title}" (Categoría: ${book.categoryName})
Plataforma: EnKurso (EnKurso.org)
====================================================================

# INSTRUCCIONES PARA LA IA:
Actúa como un Director de Estrategia Empresarial y Consultor Senior de Negocios de nivel Fortune 500, especialista en ${book.categoryName}. Tu objetivo es redactar un DOCUMENTO EJECUTIVO INTEGRAL, formal y exhaustivo (listo para ser exportado a PDF o presentado a socios, inversores y equipo de trabajo), implementando la metodología del Tomo "${book.title}".

--------------------------------------------------------------------
[RELLENA ESTOS DATOS DE TU EMPRESA ANTES DE ENVIAR EL PROMPT]
--------------------------------------------------------------------
- Nombre de mi Empresa / Proyecto: [ESCRIBE EL NOMBRE AQUÍ]
- Industria o Sector Comercial: [EJ: E-COMMERCE, B2B, SAAS, RESTAURANTE, ETC.]
- Producto o Servicio Principal: [DESCRIBE QUÉ VENDES O QUÉ PROBLEMA RESUELVES]
- Desafío Estratégico Principal: [EJ: ESCALAR VENTAS, REDUCIR COSTOS, RETENCIÓN, EXPANDIRSE]
- Presupuesto o Recursos Disponibles: [EJ: $2,000 USD / EQUIPO DE 3 PERSONAS / FASE SEMILLA]
- Plazo Deseado de Implementación: [EJ: 30 DÍAS / 60 DÍAS / 90 DÍAS]
--------------------------------------------------------------------

# PILARES TEÓRICOS Y APRENDIZAJES CLAVE DEL TOMO QUE DEBES INTEGRAR:
${chapterTitles}

Principios Clave del Marco de Trabajo:
${takeaways}

--------------------------------------------------------------------
# ESTRUCTURA OBLIGATORIA DEL DOCUMENTO QUE DEBES GENERAR:
--------------------------------------------------------------------

1. RESUMEN EJECUTIVO Y DIAGNÓSTICO ESTRATÉGICO
   - Diagnóstico del modelo de negocio según los principios de "${book.title}".
   - Tesis de crecimiento y ventaja competitiva defendible para la empresa.

2. MARCO METODOLÓGICO Y PROTOCOLO OPERATIVO
   - Adaptación de los frameworks del libro al sector específico del negocio.
   - Definición de roles, responsabilidades y herramientas recomendadas.

3. PLAN DE ACCIÓN CRONOLÓGICO (CRONOGRAMA SEMANAL DE 30 A 60 DÍAS)
   - Tabla estructurada por semanas (Semana 1 a 4) con objetivos, tareas tácticas y entregables medibles.

4. MATRIZ DE GESTIÓN DE RIESGOS Y MITIGACIÓN
   - Identificación de los 3 errores fatales más frecuentes en esta área y sus protocolos de contingencia inmediatos.

5. CUADRO DE MANDO INTEGRAL Y KPIS DE RENDIMIENTO
   - Tabla de métricas cuantitativas clave (ROI, CAC, LTV, Conversión, Retención o Margen Operativo) con metas numéricas sugeridas.

6. CHECKLIST DE DESPLIEGUE RÁPIDO (PRIMERAS 48 HORAS)
   - Lista de 5 acciones tácticas de impacto inmediato que el equipo puede ejecutar hoy mismo sin fricción.

--------------------------------------------------------------------
# REQUISITOS DE FORMATO DE SALIDA:
--------------------------------------------------------------------
- Escribe en un tono formal, ejecutivo, inspirador y altamente profesional.
- Utiliza formato Markdown limpio con encabezados jerárquicos (#, ##, ###), listas con viñetas y tablas comparativas para que tenga una presentación impecable al imprimir o convertir a PDF.
- Personaliza cada número, ejemplo y estrategia con los datos que te proporcioné arriba.`;
}
