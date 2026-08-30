// Specific topic-by-topic content blueprints for Category 16 (Marketing Digital Avanzado) - Part 2: Tomos 154 al 161
// Features:
// 1. 5,000-character Deep Learning Overview & Executive Briefing per book
// 2. Step-by-step Free Google PMax, RFM Retention, PageSpeed Core Web Vitals, Programmatic Display, Neuromarketing, TikTok Live Shopping, Omnichannel Notion & Market Finder International Tutorials
// 3. Real, accessible LATAM Monetization Services & Pricing (Junior $25-$60, Mid $80-$180, Senior $220-$500 USD)
// 4. Localized copy-paste sales outreach pitches & 48h action plans
// 5. 3 rigorous exam questions per book with detailed explanations

import { SpecificBookContent } from './category1Content';

export const CATEGORY_16_PART2_BOOKS: Record<string, SpecificBookContent> = {
  // =========================================================================
  // BOOK ID: mda-9
  // =========================================================================
  'mda-9': {
    frameworkName: "Arquitectura de Grupos de Recursos de PMax (Asset Groups) & Señales de Audiencia de Primera Fuente (First-Party Audience Signals)",
    coreMetrics: [
      "Retorno del Gasto Publicitario en PMax (ROAS PMax > 5.8x)",
      "Tasa de Conversión Multicanal en Inventario de Google (> 4.2%)",
      "Calidad de los Recursos Creativos (Puntuación de Anuncio 'Excelente')",
      "Costo por Adquisición de Nuevo Cliente (New Customer CAC)",
      "Porcentaje de Tráfico Incremental desde YouTube y Discover (> 30%)"
],
    caseCompany: "Marca de Muebles de Oficina Ergonómicos & Escritorios Elevables ErgoWork (Santiago, Chile)",
    caseOutcome: "Gestionaba campañas separadas de búsqueda, shopping y display con resultados inconsistentes; consolidó su estrategia en una campaña de Google Performance Max (PMax) con 4 grupos de recursos por categoría y señales de audiencia de clientes pasados; el algoritmo de Google encontró compradores en YouTube, Gmail, Maps y Búsqueda; sus ventas crecieron un 175% con un ROAS de 6.2x.",
    pitfall: "Lanzar una campaña de Performance Max con recursos creativos incompletos o sin 'Señales de Audiencia', permitiendo que la inteligencia artificial de Google gaste el presupuesto en inventarios basura de baja conversión.",
    actionItem1: "Completar todos los recursos del 'Asset Group' de PMax: 5 titulares cortos, 5 titulares largos, 5 descripciones, 15 imágenes en diferentes formatos (horizontal, cuadrado, vertical) y 1 video de alta resolución.",
    actionItem2: "Cargar 'Señales de Audiencia de Primera Fuente' (Audience Signals): subir la lista de correos de tus mejores clientes actuales y términos de búsqueda de alta intención.",
    actionItem3: "Activar la opción de 'Adquisición de Clientes Nuevos' (New Customer Acquisition Goal) para que Google puje más fuerte por usuarios que nunca han comprado.",
    domainContext: "Performance Max es la tecnología publicitaria más avanzada de Google basada en inteligencia artificial generativa y aprendizaje automático, combinando todo el inventario de Google (Búsqueda, Shopping, YouTube, Display, Discover y Maps) en una sola campaña unificada.",
    strategicRationale: "Dominar Performance Max permite aprovechar al máximo la inteligencia artificial de Google para captar compradores en todos los puntos de contacto del ecosistema digital con máxima eficiencia operativa.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Te imaginas tener una sola campaña de inteligencia artificial que publique anuncios automáticamente en Google Search, Google Shopping, YouTube, Gmail, Google Maps y la Red de Display al mismo tiempo? ¡Eso es GOOGLE PERFORMANCE MAX (PMax)! Es la joya de la corona del marketing moderno de Google. Sin embargo, el 85% de las empresas pierden dinero en PMax porque no le dan a la IA los recursos correctos: suben 2 fotos feas y dejan que el algoritmo adivine. Si estructuras tus 'Grupos de Recursos' con las 'Señales de Audiencia' adecuadas, la IA de Google trabajará para ti como un ejército de 100 publicistas las 24 horas del día. Este tomo te enseña a dominar PMax.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Era de la Inteligencia Artificial en Publicidad: Qué es Performance Max y cómo funciona su algoritmo.\n• Capítulo 2: Los 6 Canales en 1 Sola Campaña: Búsqueda, Shopping, YouTube, Gmail, Discover y Maps.\n• Capítulo 3: La Anatomía del Grupo de Recursos (Asset Group): Los 20 elementos obligatorios para tener calificación 'Excelente'.\n• Capítulo 4: Caso de Estudio Real (ErgoWork Chile): Cómo triplicaron ventas unificando sus canales en PMax.\n• Capítulo 5: Señales de Audiencia de Primera Fuente (First-Party Data): Cómo guiar a la IA hacia tus mejores clientes.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer configuración y optimización de Google Performance Max cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Ads (ads.google.com): Configuración oficial de campañas de Performance Max y grupos de recursos.\n2. Google Sheets: Matriz Generadora de Textos, Titulares y Descripciones para Grupos de Recursos de PMax.\n3. Canva (canva.com): Plantilla con todos los formatos de imagen y banners obligatorios exigidos por Google PMax.",
    ch1CustomNarrative: [
      "La publicidad en motores de búsqueda y medios digitales ha alcanzado un punto de inflexión donde la gestión manual de ofertas y la fragmentación de campañas por canales individuales resultan obsoletas e ineficientes frente a los modelos de inteligencia artificial.",
      "Google Performance Max (PMax) representa el nuevo estándar de la publicidad algorítmica: un sistema integral que utiliza redes neuronales de aprendizaje profundo para evaluar millones de señales contextuales en tiempo real y mostrar el anuncio ideal en el canal más oportuno.",
      "Sin embargo, la inteligencia artificial no sustituye la estrategia humana; la IA es un motor potentísimo que requiere el combustible correcto: activos creativos de alta calidad, propuestas de valor persuasivas y señales de audiencia precisas que guíen su aprendizaje.",
      "Aprender a diseñar y gobernar campañas de Performance Max te permite posicionar a tu empresa a la vanguardia de la tecnología publicitaria global."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UNA CAMPAÑA DE PERFORMANCE MAX EN GOOGLE ADS GRATIS:",
      "Paso 1: Ingresa a Google Ads (ads.google.com). Crea una campaña con objetivo \"Ventas / Clientes potenciales\" y selecciona el tipo de campaña \"Performance Max\".",
      "Paso 2: En \"Estrategia de Puja\", selecciona \"Maximizar valor de las conversiones\" con un ROAS objetivo realista (ej. 450%).",
      "Paso 3: Estructura el \"Grupo de Recursos (Asset Group)\" en Google Sheets y Canva: • 5 Titulares cortos (máx. 30 caracteres). • 5 Titulares largos (máx. 90 caracteres). • 5 Descripciones (1 corta de 60 car. y 4 largas de 90 car.). • Imágenes: 5 horizontales (1200x628 px), 5 cuadradas (1200x1200 px) y 5 verticales (960x1200 px). • 1 Video vertical/horizontal en YouTube.",
      "Paso 4: Añade la \"Señal de Audiencia (Audience Signal)\": Sube una lista de correos de compradores pasados (Lista de clientes) y añade 10 términos de búsqueda de tus competidores más exitosos.",
      "Paso 5: Publica la campaña y déjala correr durante 14 días sin tocarla para que el algoritmo complete su fase de aprendizaje profundo."
],
    ch3TacticalSteps: [
      "Semana 1: Diseña los 15 formatos de imágenes y edita un video de 30 segundos en Canva para tu oferta principal.",
      "Semana 2: Redacta los 15 titulares y descripciones en Google Sheets y súbelos a tu grupo de recursos de PMax.",
      "Semana 3: Carga las señales de audiencia de primera fuente y activa la campaña de Performance Max.",
      "Semana 4: Revisa el informe de 'Estadísticas de Recursos' y reemplaza los textos e imágenes con rendimiento 'Bajo' por nuevas variaciones."
],
    ch4CaseDeepDive: [
      "ErgoWork en Santiago vendía muebles ergonómicos y tenía 4 campañas separadas (Búsqueda, Display, YouTube y Shopping) gestionadas a mano, con un ROAS irregular de 2.4x y altos costos de gestión.",
      "Unificaron todo en Google Performance Max: crearon 3 grupos de recursos específicos (Escritorios Eléctricos, Sillas Ergonómicas y Accesorios) con fotos profesionales en Canva y señales de audiencia de sus 1,200 clientes históricos.",
      "El algoritmo de Google comenzó a impactar a profesionales de tecnología en Gmail y YouTube en el momento justo antes de su decisión de compra.",
      "En 90 días sus ventas crecieron un 175%, el ROAS se elevó a 6.2x y redujeron el tiempo de gestión publicitaria en un 70%."
],
    ch5RiskMitigation: [
      "Error fatal: Lanzar PMax sin videos propios y dejar que Google genere automáticamente videos con fotos estáticas de mala calidad.",
      "Los videos autogenerados por Google suelen tener música genérica y aspecto poco profesional; sube siempre tu propio video editado en Canva o CapCut con subtítulos y locución profesional.",
      "No uses un presupuesto diario minúsculo: PMax necesita al menos el equivalente a 3 o 4 conversiones diarias de presupuesto para alimentar su algoritmo.",
      "Añade palabras clave de marca como 'Palabras clave negativas a nivel de cuenta' si no deseas que PMax gaste presupuesto en personas que ya buscan tu nombre exacto."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Configuración y Optimización Avanzada de Campañas Google Performance Max (PMax)\". Ayuda a tiendas de e-commerce, concesionarias, inmobiliarias y empresas de servicios a dominar todo el inventario de Google con IA.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por configuración de 1 grupo de recursos de PMax en Google Ads + diseño de 10 creatividades en Canva. • Nivel Intermedio (Con portafolio): $140 - $280 USD por campaña integral de Performance Max (3 grupos de recursos temáticos, señales de audiencia de primera fuente, video publicitario en Canva y optimización mensual de ROAS). • Nivel Senior / Performance Marketing Lead y Consultor de Inteligencia Artificial Publicitaria: $350 - $700 USD por arquitectura avanzada de PMax multi-categoría, integración con Google Merchant Center, exclusiones de marca y cuadros de mando de rendimiento en Looker Studio.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando las campañas de [Empresa] en Google y sé que gestionar campañas separadas de búsqueda, shopping y display suele consumir mucho tiempo y encarecer el costo por cliente. Con Google Performance Max (PMax) es posible unificar los 6 canales de Google (Búsqueda, Shopping, YouTube, Gmail, Maps y Display) en una sola campaña impulsada por inteligencia artificial que busca a los compradores con mayor probabilidad de compra en tiempo real (logrando un ROAS de más de 5x). Por solo $50 USD yo te configuro la campaña completa con todos sus recursos aprobados en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la matriz de recursos de PMax en Google Sheets y diseña los banners en Canva. Día 2: Contacta a 10 e-commerce o empresas con campañas activas de Google Ads y ofréceles una auditoría gratuita de su configuración de PMax."
],
    quizQuestions: [
      {
            "question": "¿Qué canales del ecosistema de Google abarca una sola campaña de Google Performance Max (PMax)?",
            "options": [
                  "Solo el correo de Hotmail.",
                  "Todo el inventario unificado de Google: Red de Búsqueda, Google Shopping, YouTube, Gmail, Google Discover y Google Maps.",
                  "Solo la televisión abierta.",
                  "Únicamente los periódicos impresos."
            ],
            "correctIndex": 1,
            "explanation": "PMax automatiza la presencia publicitaria en todas las propiedades digitales de Google mediante aprendizaje automático."
      },
      {
            "question": "¿Qué son las 'Señales de Audiencia' (Audience Signals) en una campaña de Performance Max?",
            "options": [
                  "Señales de tráfico en la carretera.",
                  "Pistas estratégicas y datos de primera fuente (como listas de clientes existentes o términos de búsqueda de intención) que se entregan al algoritmo de Google para guiar a la IA hacia los perfiles de usuarios más rentables.",
                  "Un semáforo digital.",
                  "Un código secreto bancario."
            ],
            "correctIndex": 1,
            "explanation": "Las señales de audiencia aceleran la fase de aprendizaje de la IA evitando que el algoritmo gaste dinero en pruebas a ciegas."
      },
      {
            "question": "¿Por qué es recomendable subir un video propio en lugar de permitir que Google genere uno automáticamente en PMax?",
            "options": [
                  "Porque Google cobra una multa por no subir videos.",
                  "Porque los videos generados automáticamente por Google suelen ser diapositivas estáticas de baja calidad visual, mientras que un video propio bien producido en Canva/CapCut transmite confianza y eleva la conversión en YouTube.",
                  "Porque los videos propios son obligatorios para pagar impuestos.",
                  "No tiene ninguna importancia, los videos automáticos son mejores."
            ],
            "correctIndex": 1,
            "explanation": "La calidad visual del video profesional protege la reputación de la marca y maximiza la retención de la audiencia."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-10
  // =========================================================================
  'mda-10': {
    frameworkName: "Matriz de Retención de Clientes & Bucles de Fidelización RFM (Recency, Frequency, Monetary Value Optimization)",
    coreMetrics: [
      "Tasa de Abandono de Clientes (Churn Rate < 3.5% mensual)",
      "Valor de Vida del Cliente (Customer Lifetime Value - LTV +50%)",
      "Tasa de Recompra a 90 Días (Repeat Purchase Rate > 35%)",
      "Porcentaje de Clientes en el Segmento 'Champions VIP' (> 15%)",
      "Puntuación Neta de Recomendación de Clientes Fieles (NPS > +75)"
],
    caseCompany: "Club de Suscripción de Café de Especialidad & Granos Gourmet CaféClub (Bogotá, Colombia)",
    caseOutcome: "El 14% de sus suscriptores cancelaba su membresía cada mes (Churn destructivo); implementó el Análisis RFM en Google Sheets para segmentar a los clientes en 4 grupos y automatizó una 'Campaña de Reactivación Pre-Churn' con regalos sorpresa al mes 3; la tasa de cancelación cayó del 14% al 3.2% mensual y el LTV promedio por cliente subió de $85 a $310 USD.",
    pitfall: "Vivir en la 'Rueda de Hámster de la Adquisición': gastar todo el presupuesto en captar nuevos clientes mientras se ignora a los clientes actuales, permitiendo que el 60% se vaya a la competencia en menos de 6 meses.",
    actionItem1: "Calcular la 'Segmentación RFM' en Google Sheets asignando una puntuación del 1 al 5 en: Recencia (cuándo compró por última vez), Frecuencia (cuántas veces ha comprado) y Valor Monetario (cuánto dinero ha gastado).",
    actionItem2: "Identificar el 'Punto Crítico de Abandono' (el mes exacto en que la mayoría de los clientes suelen cancelar o dejar de comprar) y colocar un disparador de deleite o regalo sorpresa 15 días antes.",
    actionItem3: "Diseñar un 'Programa de Lealtad VIP de 3 Niveles' en Canva (Bronce, Plata y Oro) con beneficios exclusivos no monetarios (acceso prioritario, eventos privados y asesoría personalizada).",
    domainContext: "Adquirir un cliente nuevo cuesta entre 5 y 7 veces más caro que retener a un cliente actual; el verdadero beneficio neto de una empresa se construye en la recurrencia y en el aumento del LTV.",
    strategicRationale: "Reducir la tasa de abandono en solo un 5% puede incrementar los beneficios netos de una empresa entre un 25% y un 95% gracias al efecto del interés compuesto del LTV.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que retener a un cliente que ya te compró cuesta 7 VECES MENOS que conseguir un cliente nuevo desde cero? El 90% de las empresas en América Latina están enfermas de 'Adquisi-manía': gastan fortunas en anuncios para traer clientes nuevos, pero los tratan tan mal o los olvidan tan rápido que los clientes nunca vuelven a comprar. ¡Están llenando una bañera sin poner el tapón del fondo! Con el ANÁLISIS RFM (Recencia, Frecuencia y Valor Monetario) y herramientas gratuitas como Google Sheets puedes saber con exactitud matemática qué clientes están a punto de abandonarte para reactivarlos antes de que se vayan. Este tomo te enseña a blindar la lealtad de tus clientes.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Matemática del LTV vs. Churn: Por qué el Churn alto destruye cualquier empresa a largo plazo.\n• Capítulo 2: La Metodología RFM: Clasificar clientes por Recencia (R), Frecuencia (F) y Valor Monetario (M).\n• Capítulo 3: Los 4 Segmentos Clave: Champions VIP, Clientes Leales, Clientes en Riesgo y Clientes Dormidos.\n• Capítulo 4: Caso de Estudio Real (CaféClub Bogotá): Cómo redujeron el Churn de 14% a 3.2% y triplicaron su LTV.\n• Capítulo 5: Campañas de Reactivación Pre-Churn en MailerLite y WhatsApp: El regalo sorpresa que salva cuentas.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de retención y análisis RFM cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets: Calculadora y Matriz de Segmentación RFM Automatizada con Fórmulas de Clasificación.\n2. MailerLite / Brevo: Automatizaciones de Correos de Reactivación para clientes en riesgo de abandono.\n3. Canva (canva.com): Diseño del Pasaporte VIP y Programa de Fidelización de 3 Niveles.",
    ch1CustomNarrative: [
      "En la economía digital contemporánea, la métrica que define la supervivencia y el valor de valoración de cualquier modelo de negocio no es el volumen de ventas del primer mes, sino el Valor de Vida del Cliente (Customer Lifetime Value - LTV).",
      "Muchas organizaciones operan con una mentalidad miope de cazadores: celebran con euforia la adquisición de un nuevo cliente y se desentienden de él en el segundo posterior a la transacción para salir a cazar al siguiente prospecto.",
      "Esta práctica suicida genera una tasa de cancelación o abandono (Churn Rate) devastadora que devora los márgenes comerciales y obliga a la empresa a gastar cada vez más dinero en publicidad para reponer a los clientes que se fugan continuamente.",
      "Aprender a implementar modelos de análisis RFM y diseñar sistemas de fidelización proactiva te permite transformar compradores esporádicos en defensores incondicionales que generan ingresos recurrentes y predecibles durante años."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO REALIZAR UN ANÁLISIS RFM EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Exporta el historial de compras de tus clientes en formato CSV (ID Cliente, Fecha de Última Compra, Total de Pedidos y Monto Total Gastado).",
      "Paso 2: Abre Google Sheets y calcula las 3 Puntuaciones RFM del 1 al 5 para cada cliente: • R (Recencia): 5 si compró en los últimos 15 días, 1 si hace más de 180 días que no compra. • F (Frecuencia): 5 si compró más de 5 veces, 1 si compró solo 1 vez. • M (Monetario): 5 si gastó en el 20% superior, 1 si gastó en el 20% inferior.",
      "Paso 3: Define los 4 Grupos de Acción Estratégica: • 🏆 Champions VIP (RFM 5-5-5): Trato preferencial, acceso anticipado a novedades y regalos sorpresa. • 🤝 Clientes Leales (RFM 4-4-4): Ofertas de venta cruzada y programas de puntos. • ⚠️ Clientes en Riesgo (RFM 2-4-4): Clientes que compraban mucho pero llevan 60 días inactivos -> Enviar mensaje de WhatsApp personalizado. • 💤 Clientes Dormidos (RFM 1-1-1): Campaña de descuento agresivo para liquidar stock.",
      "Paso 4: Automatiza en MailerLite o WhatsApp un flujo de trabajo para el grupo \"Clientes en Riesgo\": \"Hola [Nombre], te extrañamos en [Empresa]. Te dejamos este crédito exclusivo de $10 USD para tu próximo pedido válido por 5 días\"."
],
    ch3TacticalSteps: [
      "Semana 1: Descarga tu base de datos de clientes y calcula la tasa de Churn mensual de tu negocio en Google Sheets.",
      "Semana 2: Ejecuta la segmentación RFM e identifica a todos los clientes que se encuentran en el segmento 'En Riesgo'.",
      "Semana 3: Lanza la campaña de reactivación personalizada por WhatsApp o correo para el grupo en riesgo.",
      "Semana 4: Mide cuántos clientes reactivaron su suscripción y diseña el programa de beneficios para los Champions VIP."
],
    ch4CaseDeepDive: [
      "CaféClub en Bogotá operaba un club de suscripción de café gourmet pero sufría una tasa de cancelación del 14% mensual, lo que hacía imposible escalar la empresa.",
      "El análisis RFM reveló que el 80% de las cancelaciones ocurrían exactamente entre el día 75 y el día 90 (tercer mes) debido a la acumulación de café sobrante en casa.",
      "Diseñaron una solución preventiva: en el día 70 enviaron automáticamente un correo preguntando al cliente si deseaba pausar la entrega 15 días o cambiar el tipo de molienda, acompañado de un espumador de leche de regalo en la caja del mes 3.",
      "La tasa de abandono cayó en picada del 14% al 3.2% mensual: el LTV promedio de cada suscriptor subió de $85 a $310 USD y el negocio se volvió altamente rentable sin contratar más vendedores."
],
    ch5RiskMitigation: [
      "Error fatal: Intentar reactivar a clientes que llevan 1 año inactivos con el mismo mensaje que a clientes que se fueron hace 2 semanas.",
      "La recencia es el factor más sensible: un cliente que compró hace 30 días es 10 veces más fácil de reactivar que un cliente que lleva 12 meses inactivo; enfoca tus mayores esfuerzos en la ventana de los primeros 60 días de inactividad.",
      "No uses siempre descuentos en dinero para retener clientes: regala valor añadido, consultoría, muestras de nuevos productos o extensiones de garantía.",
      "Escucha las razones de cancelación: crea una encuesta obligatoria de 1 sola pregunta al momento de darse de baja para corregir fallos del producto."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Consultoría de Retención de Clientes (Reducción de Churn y Aumento de LTV) con Análisis RFM\". Ayuda a plataformas de suscripción, e-commerce, gimnasios, clínicas y servicios recurrentes a retener a sus clientes.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por análisis de segmentación RFM en Google Sheets + identificación del listado de clientes en riesgo de fuga. • Nivel Intermedio (Con portafolio): $140 - $280 USD por programa integral de retención (Análisis RFM completo, configuración de secuencias de reactivación pre-churn en MailerLite/WhatsApp y diseño de programa de fidelización VIP en Canva). • Nivel Senior / Retention & Lifecycle Marketing Lead: $350 - $700 USD por arquitectura integral de fidelización y reducción de Churn, análisis de cohortes de supervivencia, modelos predictivos de abandono y cuadro de mando de LTV en Looker Studio.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando el modelo de negocio de [Empresa] y sé que muchas veces captar clientes nuevos es muy caro mientras que retener a los clientes actuales cuesta hasta 7 veces menos (y un cliente que no vuelve es dinero que se escapa todos los meses). Con la metodología de Análisis RFM en Google Sheets y secuencias de reactivación es posible identificar a los clientes que están a punto de abandonar tu marca para reactivarlos a tiempo y aumentar tu LTV en más de un 40%. Por solo $50 USD yo te realizo el Análisis RFM completo de tu base de datos en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de segmentación RFM en Google Sheets con fórmulas automáticas. Día 2: Contacta a 10 gimnasios, academias, e-commerce de suscripción o clínicas en LinkedIn y ofréceles un diagnóstico gratuito de su tasa de Churn."
],
    quizQuestions: [
      {
            "question": "¿Qué significan las siglas 'RFM' en la analítica de retención de clientes?",
            "options": [
                  "Redes, Facebook y Marketing.",
                  "Recency (Recencia: cuándo fue la última compra), Frequency (Frecuencia: cuántas veces ha comprado) y Monetary Value (Valor Monetario: cuánto dinero total ha gastado el cliente).",
                  "Rendimiento Financiero Mensual.",
                  "Reembolsos, Facturas y Métricas."
            ],
            "correctIndex": 1,
            "explanation": "El análisis RFM es el modelo estándar internacional para segmentar clientes en función de su comportamiento transaccional real."
      },
      {
            "question": "¿Por qué reducir la tasa de abandono (Churn Rate) en solo un 5% puede disparar los beneficios netos de una empresa?",
            "options": [
                  "Porque el gobierno otorga créditos fiscales.",
                  "Porque los clientes retenidos no tienen costo de adquisición adicional, compran con mayor frecuencia, gastan más en cada transacción y recomiendan la empresa a otros clientes de forma orgánica.",
                  "Porque los empleados cobran menos sueldo.",
                  "No tiene ningún impacto en los beneficios."
            ],
            "correctIndex": 1,
            "explanation": "La retención de clientes genera un efecto multiplicador de rentabilidad exponencial en el flujo de caja del negocio."
      },
      {
            "question": "¿Qué acción estratégica se debe aplicar al segmento de clientes clasificados como 'En Riesgo' (alto gasto histórico pero inactivos recientemente)?",
            "options": [
                  "Bloquearles el acceso a la plataforma.",
                  "Activar de inmediato una campaña de reactivación personalizada (por WhatsApp o correo) con un incentivo de alto valor o mensaje de ayuda antes de que se olviden de la marca.",
                  "Borrar sus datos de la base de datos.",
                  "Esperar 2 años a ver si regresan solos."
            ],
            "correctIndex": 1,
            "explanation": "Intervenir proactivamente en los clientes en riesgo recupera cuentas valiosas que habrían generado pérdidas permanentes."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-11
  // =========================================================================
  'mda-11': {
    frameworkName: "Optimización de Core Web Vitals de Google (LCP, INP, CLS) & Auditoría de Rastreo Técnico y Rendimiento Web",
    coreMetrics: [
      "Largest Contentful Paint (LCP < 2.5 segundos en móvil)",
      "Interaction to Next Paint (INP < 200 milisegundos)",
      "Cumulative Layout Shift (CLS < 0.1 puntuación de estabilidad)",
      "Puntuación de Rendimiento en PageSpeed Insights (Score > 90/100)",
      "Tasa de Rastreo e Indexación Limpia (Zero Errores 5xx/4xx en Search Console)"
],
    caseCompany: "Portal de Noticias de Negocios & Finanzas Corporativas InfoEconomía (Guadalajara, México)",
    caseOutcome: "Había perdido el 45% de su tráfico orgánico en Google por tener una web lenta llena de scripts pesados (PageSpeed 28/100 y LCP de 6.2 segundos); optimizó los Core Web Vitals convirtiendo imágenes a formato WebP, habilitando compresión Gzip y eliminando saltos de pantalla (CLS); su puntuación en PageSpeed subió a 94/100; en 60 días Google restableció sus rankings y su tráfico orgánico creció un 120%.",
    pitfall: "Tener un sitio web visualmente atractivo pero técnicamente destrozado (archivos JavaScript no minificados, imágenes pesadas de 5 MB y elementos que se mueven solos mientras la página carga), provocando el abandono de los usuarios y el castigo severo del algoritmo de Google.",
    actionItem1: "Auditar las métricas de Core Web Vitals en Google PageSpeed Insights (LCP < 2.5s, INP < 200ms, CLS < 0.1) tanto en versión móvil como de escritorio.",
    actionItem2: "Comprimir y convertir todas las imágenes a formatos modernos de nueva generación como WebP o AVIF (reduciendo el peso en más de un 80% sin perder calidad).",
    actionItem3: "Definir atributos fijos de ancho y alto (width y height) en todas las imágenes y banners para erradicar el salto visual de layout (CLS = 0).",
    domainContext: "Google convirtió los Core Web Vitals en un factor oficial de clasificación SEO: los sitios web rápidos, estables y responsivos tienen prioridad absoluta en los resultados de búsqueda de smartphones.",
    strategicRationale: "Optimizar la velocidad y el SEO técnico no solo dispara el tráfico orgánico de Google, sino que mejora la experiencia de usuario y reduce la tasa de rebote en todos los canales de adquisición.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que si tu sitio web tarda más de 3 segundos en cargar en un teléfono celular, más del 53% de los usuarios se cansan de esperar y se van a la competencia? Y peor aún: Google CASTIGA a los sitios lentos mandándolos a la página 10 de resultados. En 2024, Google implementó los CORE WEB VITALS (LCP, INP y CLS): los 3 signos vitales que miden la velocidad, la capacidad de respuesta y la estabilidad visual de cualquier página web. Con herramientas oficiales y gratuitas como Google PageSpeed Insights puedes diagnosticar y acelerar cualquier sitio web en horas. Este tomo te enseña a dominar el SEO técnico avanzado.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: Los 3 Core Web Vitals Oficiales de Google: LCP (Carga), INP (Interactividad) y CLS (Estabilidad visual).\n• Capítulo 2: Diagnóstico con Google PageSpeed Insights: Cómo interpretar el reporte oficial de rendimiento.\n• Capítulo 3: Compresión de Imágenes a Formato WebP: Reducir imágenes de 4 MB a 80 KB sin perder nitidez.\n• Capítulo 4: Caso de Estudio Real (InfoEconomía México): De 28 a 94 en PageSpeed y +120% de tráfico orgánico.\n• Capítulo 5: Eliminación de Saltos Visuales (CLS): Cómo evitar que los botones se muevan solos mientras la página carga.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de SEO técnico y aceleración web cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google PageSpeed Insights (pagespeed.web.dev): Herramienta oficial de diagnóstico de velocidad y Core Web Vitals de Google.\n2. Squoosh.app / TinyPNG: Optimizador y conversor gratuito de imágenes a formato WebP/AVIF.\n3. Screaming Frog SEO Spider (Versión gratuita hasta 500 URLs): Escaneo técnico de enlaces rotos, redirecciones y etiquetas.",
    ch1CustomNarrative: [
      "En el ecosistema del desarrollo digital y el posicionamiento en motores de búsqueda, la velocidad de carga y la robustez de la infraestructura técnica han dejado de ser simples detalles de ingeniería para convertirse en determinantes comerciales directos.",
      "Google procesa miles de millones de consultas diarias y comprende que los usuarios de smartphones exigen respuestas instantáneas y experiencias de navegación fluidas sin retrasos ni elementos inestables.",
      "Los Core Web Vitals representan el estándar oficial mediante el cual los algoritmos de Google miden cuantitativamente la calidad de la experiencia técnica de una página web en condiciones reales de conectividad móvil.",
      "Aprender a diagnosticar, auditar y resolver cuellos de botella de rendimiento web te posiciona como un consultor técnico indispensable capaz de recuperar el tráfico perdido y maximizar la visibilidad de cualquier plataforma en internet."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO AUDITAR Y OPTIMIZAR CORE WEB VITALS CON PAGESPEED Y SQUOOSH GRATIS:",
      "Paso 1: Ingresa a Google PageSpeed Insights (pagespeed.web.dev). Introduce la URL de tu página web y haz clic en \"Analizar\". Revisa la pestaña \"Móvil\".",
      "Paso 2: Evalúa los 3 Core Web Vitals: • 1. LCP (Largest Contentful Paint): Debe ser menor a 2.5 segundos (mide cuándo se muestra el elemento visual principal). • 2. INP (Interaction to Next Paint): Debe ser menor a 200 ms (mide la rapidez de respuesta al hacer clic o tocar la pantalla). • 3. CLS (Cumulative Layout Shift): Debe ser menor a 0.1 (mide que el contenido no salte de lugar mientras carga).",
      "Paso 3: Optimización de Imágenes: Descarga las imágenes pesadas de tu web. Abre Squoosh.app (herramienta gratuita de Google), selecciona compresión \"WebP\" al 80% de calidad: la imagen pasará de 3.5 MB a solo 90 KB.",
      "Paso 4: Erradicación del CLS: Asegúrate de que todas las etiquetas <img> en tu código HTML o constructor web incluyan dimensiones explícitas: <img src=\"foto.webp\" width=\"800\" height=\"600\" alt=\"...\"> para que el navegador reserve el espacio exacto antes de descargar la imagen.",
      "Paso 5: Vuelve a correr el test en PageSpeed Insights y verifica que la puntuación de rendimiento supere los 90 puntos en color verde."
],
    ch3TacticalSteps: [
      "Semana 1: Analiza tu página de inicio y tus 3 páginas más visitadas en Google PageSpeed Insights.",
      "Semana 2: Convierte y reemplaza todas las imágenes principales por versiones WebP comprimidas en Squoosh.app.",
      "Semana 3: Escanea tu sitio web con Screaming Frog SEO Spider para detectar y corregir enlaces rotos (errores 404).",
      "Semana 4: Revisa en Google Search Console la pestaña 'Experiencia en la página' y comprueba la aprobación total de Core Web Vitals."
],
    ch4CaseDeepDive: [
      "InfoEconomía en Guadalajara era un portal informativo con miles de artículos pero su tráfico de Google cayó un 45% tras una actualización de algoritmo.",
      "El análisis en PageSpeed Insights reveló una puntuación desastrosa de 28/100 en móviles: el LCP tardaba 6.2 segundos por fotos gigantes sin comprimir y el CLS era de 0.42 porque los banners de publicidad empujaban el texto hacia abajo mientras el usuario intentaba leer.",
      "Implementaron un plan de choque técnico: convirtieron 2,000 imágenes a formato WebP, asignaron espacios fijos a los bloques de publicidad y activaron el almacenamiento en caché del navegador.",
      "La puntuación en móviles subió a 94/100 y el LCP bajó a 1.8 segundos: Google restableció sus posiciones en el buscador y su tráfico orgánico creció un 120% en 60 días."
],
    ch5RiskMitigation: [
      "Error fatal: Instalar 40 plugins de optimización diferentes en WordPress que entran en conflicto entre sí y rompen el diseño de la web.",
      "Utiliza una sola solución limpia de caché y optimización bien configurada; el exceso de plugins ralentiza la base de datos y genera errores técnicos graves.",
      "Haz siempre una copia de seguridad completa (Backup) antes de minificar código JavaScript o CSS para poder restaurar si un menú deja de funcionar.",
      "Prueba la web en conexiones 3G/4G lentas reales para verificar que la experiencia sea verdaderamente rápida para cualquier usuario."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de SEO Técnico, Velocidad Web y Optimización de Core Web Vitals (LCP/INP/CLS)\". Ayuda a medios de comunicación, tiendas online, clínicas y portales web a acelerar su velocidad y subir en Google.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por auditoría completa en Google PageSpeed Insights + compresión de 20 imágenes en WebP con Squoosh.app y reporte de mejoras. • Nivel Intermedio (Con portafolio): $140 - $280 USD por optimización técnica integral (Aceleración de LCP < 2.5s, eliminación de saltos CLS, configuración de caché, escaneo de enlaces rotos en Screaming Frog y validación en Search Console). • Nivel Senior / Technical SEO & Web Performance Engineer: $350 - $700 USD por reingeniería de rendimiento web a gran escala, optimización de renderizado crítico (Critical CSS), configuración de CDN global (Cloudflare Enterprise) y garantía de puntuación 90+ en PageSpeed.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando el rendimiento técnico de la página web de [Empresa] en Google PageSpeed Insights y noté que tarda más de 5 segundos en cargar en teléfonos celulares y presenta fallos en los Core Web Vitals (lo que provoca que Google penalice tu posicionamiento y que más del 50% de los visitantes se marchen antes de ver tu producto). Con una optimización de SEO Técnico y compresión WebP es posible subir la velocidad a más de 90/100 en color verde para multiplicar tu tráfico orgánico y ventas. Por solo $50 USD yo te realizo la optimización técnica completa en 48 horas. ¿Te gustaría ver el reporte gratuito de velocidad de tu web?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Analiza la velocidad de 5 sitios web locales en PageSpeed Insights y guarda capturas de los que tengan puntuación roja (< 50). Día 2: Contacta a los dueños de esos sitios en LinkedIn y ofréceles una auditoría gratuita de Core Web Vitals."
],
    quizQuestions: [
      {
            "question": "¿Cuáles son los 3 Core Web Vitals oficiales que utiliza Google para medir la experiencia técnica de una página web?",
            "options": [
                  "Colores, Fuentes y Logotipos.",
                  "Largest Contentful Paint (LCP: velocidad de carga del contenido principal), Interaction to Next Paint (INP: capacidad de respuesta táctil e interactividad) y Cumulative Layout Shift (CLS: estabilidad visual sin saltos molestos de layout).",
                  "Visitas, Seguidores y Likes.",
                  "Precio, Descuento y Envío."
            ],
            "correctIndex": 1,
            "explanation": "Los 3 Core Web Vitals miden cuantitativamente la velocidad, interactividad y estabilidad visual de la web en condiciones reales de navegación."
      },
      {
            "question": "¿Cuál es el tiempo máximo recomendado por Google para la métrica 'Largest Contentful Paint' (LCP)?",
            "options": [
                  "Menos de 2.5 segundos en dispositivos móviles para clasificarse en color verde (Bueno).",
                  "15 segundos.",
                  "1 minuto.",
                  "Cualquier tiempo mientras la computadora sea rápida."
            ],
            "correctIndex": 0,
            "explanation": "Un LCP inferior a 2.5 segundos asegura que el usuario perciba la página como casi instantánea."
      },
      {
            "question": "¿Por qué el formato de imagen 'WebP' es superior a los tradicionales JPG o PNG en diseño web?",
            "options": [
                  "Porque solo se puede ver en teléfonos de alta gama.",
                  "Porque reduce el peso del archivo entre un 60% y un 85% manteniendo una nitidez visual impecable y admitiendo transparencias, acelerando drásticamente el tiempo de carga del sitio.",
                  "Porque es un formato secreto del gobierno.",
                  "No es superior, los archivos JPG pesados son mejores."
            ],
            "correctIndex": 1,
            "explanation": "WebP optimiza la transferencia de datos y es el formato estándar de nueva generación recomendado por Google."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-12
  // =========================================================================
  'mda-12': {
    frameworkName: "Ecosistema de Compra Programática en Tiempo Real (RTB - Real Time Bidding) & Redes de Display Premium",
    coreMetrics: [
      "Visibilidad de Anuncios Programáticos (Viewability Rate > 75%)",
      "Tasa de Tráfico No Válido / Fraude Publicitario (IVT < 1.0%)",
      "Costo Efectivo por Mil Impresiones (eCPM Optimizado)",
      "Puntuación de Seguridad de Marca (Brand Safety Score 100%)",
      "Retorno del Gasto Publicitario en Campañas Programáticas (ROAS > 3.8x)"
],
    caseCompany: "Aseguradora de Salud & Planes Médicos Familiares SaludSegura (Lima, Perú)",
    caseOutcome: "Compraba banners tradicionales en portales de noticias a tarifas fijas carísimas con poco retorno; migró a la compra programática en tiempo real (RTB) con segmentación por contexto y datos de intención médica; mostró anuncios de planes de salud solo a personas que leían artículos de salud y nutrición en los 20 diarios más leídos del país; redujo su costo por impresión un 55% y captó 280 nuevas pólizas mensuales.",
    pitfall: "Comprar publicidad programática a ciegas sin configurar listas de exclusión de 'Seguridad de Marca' (Brand Safety), provocando que los anuncios de la empresa aparezcan en sitios de noticias falsas, violencia o contenido sensible que destruye la reputación corporativa.",
    actionItem1: "Comprender la mecánica de la Compra Programática: DSP (Demand Side Platform: donde compra el anunciante) conectado a SSP (Supply Side Platform: donde venden los medios) mediante subastas en tiempo real (RTB en menos de 100 milisegundos).",
    actionItem2: "Configurar una 'Lista Blanca de Medios Premium' (Whitelisting) y activar filtros estrictos de Brand Safety para proteger la imagen de la marca.",
    actionItem3: "Diseñar anuncios de display responsivos y adaptables en Canva con formatos estandarizados por la IAB (Robapáginas 300x250, Megabanner 728x90 y Half Page 300x600 px).",
    domainContext: "La publicidad programática representa más del 80% de toda la inversión en medios digitales del mundo, automatizando la compra de espacios publicitarios en millones de sitios web y aplicaciones en fracciones de segundo.",
    strategicRationale: "Dominar la compra programática permite a una empresa acceder a inventarios publicitarios prémium en los mayores medios de comunicación con hipersegmentación contextual y costos optimizados por subasta.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Cómo hacen marcas como Coca-Cola, BBVA o Samsung para que sus anuncios aparezcan exactamente en los principales periódicos de tu país, en aplicaciones de noticias y en portales financieros al mismo tiempo? ¡Eso es PUBLICIDAD PROGRAMÁTICA! Ya no se compran anuncios llamando por teléfono al director del periódico: se compran mediante robots y subastas automáticas en tiempo real (RTB) que deciden en 100 milisegundos qué usuario debe ver tu anuncio según lo que está leyendo en ese instante. Con herramientas accesibles como Google Display y plataformas de medios puedes publicitar en los mayores diarios de tu país con poco presupuesto. Este tomo te enseña el ecosistema programático.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Ecosistema de la Publicidad Programática: Qué son las DSP, SSP, Ad Exchanges y RTB.\n• Capítulo 2: La Subasta en Tiempo Real (RTB): Cómo se puja por una impresión en menos de 100 milisegundos.\n• Capítulo 3: Segmentación Contextual y Seguridad de Marca (Brand Safety): Cómo no aparecer en sitios polémicos.\n• Capítulo 4: Caso de Estudio Real (SaludSegura Lima): Cómo redujeron su costo un 55% vendiendo 280 pólizas al mes.\n• Capítulo 5: Los Formatos Estándar IAB en Canva: Robapáginas (300x250), Megabanner (728x90) y Half Page (300x600).\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer planificación y compra de medios programáticos cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Display Network / Google Ad Manager: Plataforma accesible para acceder al inventario programático global.\n2. Canva (canva.com): Plantillas Oficiales de Formatos de Banners IAB (300x250, 728x90, 300x600, 320x50 px).\n3. Google Sheets: Plan de Medios Programático y Matriz de Control de CPM y Viewability.",
    ch1CustomNarrative: [
      "La evolución histórica de la publicidad gráfica en medios digitales ha transitado desde los antiguos acuerdos manuales de inserción publicitaria entre agentes humanos hacia sistemas automatizados de subasta algorítmica en tiempo real.",
      "La Compra Programática representa la culminación tecnológica de este proceso: un ecosistema global interconectado donde las plataformas del lado de la demanda (DSP) y las plataformas del lado de la oferta (SSP) negocian miles de millones de impresiones publicitarias por segundo en base al perfil del usuario y el contexto de lectura.",
      "Este modelo elimina la ineficiencia de comprar espacios masivos estáticos y permite a las marcas pagar exclusivamente por impactos publicitarios hiperdirigidos a usuarios que coinciden con su perfil de comprador ideal.",
      "Aprender a planificar y ejecutar campañas de publicidad programática te otorga la capacidad de gestionar presupuestos de medios institucionales con los más altos estándares de visibilidad, transparencia y retorno de inversión."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO DISEÑAR UN PLAN DE MEDIOS PROGRAMÁTICO EN CANVA Y SHEETS GRATIS:",
      "Paso 1: Comprende los Actores del Ecosistema: • Anunciante -> DSP (Demand Side Platform: compra anuncios) -> Ad Exchange (Mercado de subasta RTB) -> SSP (Supply Side Platform: vende espacios de medios) -> Usuario navegando en el diario digital.",
      "Paso 2: En Canva, diseña el \"Set de Banners IAB Estándar (Display Programático)\": • Formato 1: Robapáginas / MPU (300 x 250 px - El formato más visto en artículos). • Formato 2: Half Page (300 x 600 px - Gran impacto visual lateral). • Formato 3: Leaderboard (728 x 90 px - Cabecera superior en escritorio). • Formato 4: Smartphone Banner (320 x 50 px - Barra inferior en móviles).",
      "Paso 3: Abre Google Sheets y diseña el \"Plan_De_Medios_Programatico\": Define la segmentación contextual por categorías de contenido (ej. Finanzas, Negocios, Salud, Estilo de Vida) y establece un tope de CPM máximo (ej. $1.20 USD por cada mil impresiones).",
      "Paso 4: Configuración de Brand Safety: Crea la lista negra de exclusión de palabras clave (ej. \"accidente\", \"crimen\", \"política extrema\", \"quiebra\") para que tus anuncios jamás aparezcan al lado de noticias negativas.",
      "Paso 5: Monitorea la métrica de \"Viewability (Visibilidad Real)\": Asegúrate de que más del 70% de tus impresiones hayan sido efectivamente visibles en la pantalla del usuario durante al menos 1 segundo según el estándar IAB."
],
    ch3TacticalSteps: [
      "Semana 1: Diseña los 4 formatos de banners IAB en Canva manteniendo la identidad visual de tu marca.",
      "Semana 2: Estructura tu plan de medios en Google Sheets definiendo los sitios y categorías temáticas afines a tu cliente.",
      "Semana 3: Configura los filtros de Brand Safety y exclusión de categorías sensibles en tu plataforma publicitaria.",
      "Semana 4: Lanza la campaña programática y optimiza las ubicaciones pausando los sitios con baja tasa de visibilidad."
],
    ch4CaseDeepDive: [
      "SaludSegura en Lima vendía seguros médicos y solía pagar $8,000 USD mensuales contratando banners fijos en la portada de 2 diarios digitales con escaso retorno porque la mayoría de lectores no estaban interesados.",
      "Migraron a la compra programática en tiempo real: colocaron banners en más de 30 portales de noticias pero segmentaron para mostrar los anuncios únicamente cuando el lector estuviera leyendo artículos sobre chequeos médicos, nutrición o seguros de vida.",
      "Configuraron filtros de Brand Safety para no aparecer en noticias de tragedias o accidentes.",
      "El costo por mil impresiones (CPM) cayó un 55%, alcanzaron una visibilidad del 78% y vendieron 280 pólizas de salud familiares en su primer mes con un ROAS de 4.4x."
],
    ch5RiskMitigation: [
      "Error fatal: No activar filtros de seguridad de marca (Brand Safety) y aparecer en sitios web de baja reputación o contenido violento.",
      "Revisa semanalmente el informe de ubicaciones donde se mostraron tus anuncios y añade a la lista de exclusión cualquier sitio web de dudosa procedencia o granjas de clics.",
      "Exige una tasa de visibilidad (Viewability) superior al 70%: no pagues por impresiones que quedan en el fondo de una página donde nadie hace scroll.",
      "Evita el fraude publicitario asegurándote de que tu plataforma filtre el tráfico no válido de bots (IVT)."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Planificación y Compra de Medios Digitales Programáticos (DSP/Display Premium)\". Ayuda a aseguradoras, bancos, universidades, inmobiliarias y marcas de consumo masivo a pautar en medios digitales de alto nivel.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por diseño del set de 4 banners IAB en Canva + plan de medios básico en Google Sheets. • Nivel Intermedio (Con portafolio): $140 - $280 USD por gestión completa de campaña programática en Red de Display (segmentación contextual, filtros de Brand Safety, banners responsivos y reporte de Viewability). • Nivel Senior / Programmatic Media Director y Consultor de Compra de Medios: $350 - $700 USD por arquitectura integral de compra programática en DSPs avanzadas (Display & Video 360 / The Trade Desk), acuerdos privados garantizados (PMP/Programmatic Deals) con medios de comunicación y cuadros de mando institucionales.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando la presencia publicitaria de [Empresa] y sé que pagar banners fijos tradicionales en periódicos digitales suele ser sumamente caro e ineficiente porque impacta a todo el mundo sin segmentación. Con la tecnología de Publicidad Programática en tiempo real es posible mostrar tus anuncios en los mayores diarios y portales de noticias de tu país pero solo a las personas que están leyendo artículos sobre tu sector específico (reduciendo los costos por impresión a más de la mitad y garantizando visibilidad 100% segura). Por solo $50 USD yo te diseño el Set de Banners IAB en Canva y te estructuro el Plan de Medios en 48 horas. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña un set de banners IAB en Canva para un sector demo (banca, educación o salud) y arma la plantilla de plan de medios en Sheets. Día 2: Contacta a 10 gerentes de marketing de universidades, aseguradoras o inmobiliarias en LinkedIn y ofréceles una propuesta de compra de medios programáticos."
],
    quizQuestions: [
      {
            "question": "¿Qué significa RTB (Real Time Bidding) en el ecosistema de la publicidad programática?",
            "options": [
                  "Un formato de radio tradicional.",
                  "Subasta en Tiempo Real: el proceso automatizado mediante el cual los espacios publicitarios digitales se compran y venden en una subasta instantánea que ocurre en menos de 100 milisegundos mientras la página web se carga en el navegador del usuario.",
                  "Un impuesto gubernamental sobre la publicidad.",
                  "Un software para editar videos."
            ],
            "correctIndex": 1,
            "explanation": "El RTB permite a los anunciantes pujar en milisegundos por cada impresión individual en función del valor del usuario y el contexto."
      },
      {
            "question": "¿Qué función cumple el 'Brand Safety' (Seguridad de Marca) en las campañas programáticas?",
            "options": [
                  "Asegurar el edificio de la empresa contra incendios.",
                  "Conjunto de filtros y listas de exclusión que impiden que los anuncios de una marca aparezcan junto a contenidos inapropiados, noticias violentas, tragedias o sitios web fraudulentos, protegiendo la reputación corporativa.",
                  "Poner una contraseña al sitio web.",
                  "Crear un logotipo nuevo."
            ],
            "correctIndex": 1,
            "explanation": "El Brand Safety evita crisis de reputación asegurando que los anuncios solo aparezcan en entornos mediáticos éticos y seguros."
      },
      {
            "question": "¿Cuál es uno de los tamaños de banner más utilizados y efectivos en la publicidad de display estándar IAB?",
            "options": [
                  "Robapáginas / MPU (300 x 250 píxeles), ideal para integrarse dentro del cuerpo de los artículos de noticias y blogs tanto en móvil como en escritorio.",
                  "10,000 x 10,000 píxeles.",
                  "5 x 5 centímetros.",
                  "Cualquier tamaño que no tenga imágenes."
            ],
            "correctIndex": 0,
            "explanation": "El formato 300x250 px es el tamaño universal más demandado por su adaptabilidad y alta tasa de visibilidad."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-13
  // =========================================================================
  'mda-13': {
    frameworkName: "Arquitectura de Persuasión y Sesgos Cognitivos de Kahneman y Cialdini (Escasez, Anclaje, Prueba Social y Aversión a la Pérdida)",
    coreMetrics: [
      "Incremento en Tasa de Conversión por Gatillos Psicológicos (+45%)",
      "Reducción del Tiempo de Toma de Decisión de Compra (-50%)",
      "Aumento del Ticket Medio mediante Efecto Señuelo (Decoy Effect +25%)",
      "Puntuación de Confianza y Calidez Emocional de Marca (> 90/100)",
      "Tasa de Respuesta a Ofertas de Aversión a la Pérdida (> 18%)"
],
    caseCompany: "Marca de Relojes de Madera & Accesorios de Moda Artesanal CronosWood (Medellín, Colombia)",
    caseOutcome: "Sus visitas miraban los relojes pero postergaban la compra diciendo 'lo compraré el mes que viene'; implementó 4 sesgos cognitivos en su web: Efecto Anclaje de Precios, Contador de Escasez Real de Stock (solo 3 piezas disponibles), Notificación de Prueba Social ('Santiago de Cali acaba de comprar hace 4 min') y el Efecto Señuelo en opciones de empaque; sus ventas diarias se triplicaron en 3 semanas.",
    pitfall: "Utilizar 'Sesgos Cognitivos Falsos o Tramposos' (como poner un contador de cuenta regresiva falso que se reinicia al recargar la página), destruyendo la credibilidad de la marca ante los ojos del cliente.",
    actionItem1: "Implementar el 'Efecto Anclaje de Precios (Price Anchoring)': mostrar primero la opción premium más cara para que el plan intermedio parezca una ganga irresistible.",
    actionItem2: "Activar la 'Prueba Social en Tiempo Real' mostrando el número real de personas que han comprado el producto en los últimos 7 días.",
    actionItem3: "Aplicar el 'Principio de Aversión a la Pérdida de Daniel Kahneman': el dolor humano de perder $100 es el doble de intenso que la alegría de ganar $100; enfoca los textos en lo que el cliente perderá si no actúa hoy.",
    domainContext: "El 95% de las decisiones de compra se toman en el cerebro subconsciente e intuitivo (Sistema 1 de Daniel Kahneman); el Neuromarketing alinea la comunicación con los atajos mentales evolutivos del ser humano.",
    strategicRationale: "Comprender la psicología conductual y los sesgos cognitivos permite desactivar la inercia del cliente y guiarlo éticamente hacia una decisión de compra rápida y satisfactoria.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué cuando vas al cine y ves tres tamaños de palomitas: Pequeña ($3), Mediana ($6.50) y Grande ($7), casi todo el mundo compra la Grande? Porque el cine utilizó un sesgo cognitivo llamado 'El Efecto Señuelo' (Decoy Effect) para hacer que tu cerebro elija automáticamente la opción más cara. Daniel Kahneman (Premio Nobel de Economía) y Robert Cialdini demostraron que el 95% de las decisiones de compra son subconscientes y se basan en atajos mentales: Escasez, Anclaje, Prueba Social y Aversión a la Pérdida. En este tomo aprenderás a aplicar el Neuromarketing de forma ética para triplicar tus conversiones.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Cerebro Triúnico y el Sistema 1 de Kahneman: Cómo decide el subconsciente del comprador.\n• Capítulo 2: Los 6 Principios de Influencia de Cialdini: Reciprocidad, Coherencia, Prueba Social, Autoridad, Simpatía y Escasez.\n• Capítulo 3: El Efecto Anclaje y el Efecto Señuelo (Decoy Effect): Cómo hacer que tu precio parezca regalado.\n• Capítulo 4: Caso de Estudio Real (CronosWood Medellín): Cómo triplicaron ventas con gatillos psicológicos éticos.\n• Capítulo 5: La Aversión a la Pérdida y el Costo de la Inacción: Por qué el miedo a perder vende el doble que el deseo de ganar.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de Neuromarketing y optimización persuasiva cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Docs: Plantilla Oficial del Lienzo de Auditoría de Sesgos Cognitivos y Gatillos de Persuasión.\n2. Canva (canva.com): Diseño de Badges de Escasez Real, Etiquetas de 'Más Vendido' y Tablas de Precios con Efecto Señuelo.\n3. Fomo / Nudgify (Pruebas gratuitas): Notificaciones éticas de prueba social en tiempo real.",
    ch1CustomNarrative: [
      "Durante décadas, la teoría económica clásica asumió erróneamente que los seres humanos eran agentes racionales que evaluaban fríamente los costos y beneficios de cada opción antes de tomar una decisión financiera.",
      "La psicología conductual y las neurociencias modernas han demostrado de forma concluyente lo contrario: el cerebro humano evolucionó en entornos de escasez y peligro donde la velocidad de supervivencia dependía de atajos mentales heurísticos y reacciones emocionales inmediatas.",
      "Cuando una empresa diseña su comunicación comercial ignorando estos sesgos cognitivos universales, exige al cliente un esfuerzo intelectual excesivo (fatiga cognitiva) que desemboca invariablemente en la postergación de la compra.",
      "Aprender a incorporar gatillos de Neuromarketing ético te permite conectar de forma natural con los resortes psicológicos del comprador, facilitando decisiones comerciales rápidas y placenteras."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO APLICAR SESGOS COGNITIVOS EN GOOGLE DOCS Y CANVA GRATIS:",
      "Paso 1: Abre Google Docs y audita la página de ventas aplicando los 4 Sesgos Maestros:",
      "Paso 2: • Sesgo 1: Efecto Anclaje (Anchoring): Muestra el precio regular tachado y justificado: \"Valor del programa completo: ~~$450 USD~~ -> Oferta especial de lanzamiento: $149 USD\". • Sesgo 2: Efecto Señuelo (Decoy Effect en Canva): Diseña una tabla de 3 precios: Plan Básico ($29 - Solo texto), Plan Intermedio Señuelo ($75 - Texto + Videos) y Plan Premium Estrella ($79 - Texto + Videos + Asesoría 1 a 1 de por vida): el 80% elegirá el Plan Premium porque por solo $4 más recibe todo.",
      "Paso 3: • Sesgo 3: Prueba Social Cuantificada: Inserta un badge en Canva con foto de clientes: \"⭐ 4.9/5 estrellas basado en 420 opiniones verificadas\". • Sesgo 4: Aversión a la Pérdida: Redacta el copy de advertencia: \"No actuar hoy te costará más de $500 USD en multas el próximo mes\".",
      "Paso 4: Inserta la Garantía de Riesgo Cero: \"30 días de devolución del 100% sin preguntas\": elimina el sesgo de aversión al riesgo.",
      "Paso 5: Implementa los cambios en tu web y mide el incremento inmediato en la tasa de cierre y ticket promedio."
],
    ch3TacticalSteps: [
      "Semana 1: Audita tu tabla de precios actual e introduce el Efecto Señuelo para potenciar tu producto estrella.",
      "Semana 2: Añade insignias de prueba social real (número de clientes atendidos y calificaciones) en la cabecera de tu web.",
      "Semana 3: Reescribe los llamados a la acción enfatizando lo que el cliente pierde si posterga la decisión.",
      "Semana 4: Mide la tasa de conversión y comprueba cómo el Efecto Anclaje aumenta la selección de tus planes de mayor valor."
],
    ch4CaseDeepDive: [
      "CronosWood en Medellín vendía relojes artesanales de madera pero los clientes visitaban la página y la abandonaban diciendo que lo pensarían.",
      "El análisis psicológico reveló que no había ningún incentivo para comprar en ese instante y que los clientes no percibían el valor exclusivo de la artesanía.",
      "Implementaron 4 gatillos de Neuromarketing: colocaron un anclaje de valor mostrando el costo de fabricación a mano, añadieron un indicador de stock real ('Edición limitada de 15 piezas numeradas') y diseñaron una tabla de 3 precios donde la opción con estuche de cuero de regalo era solo $10 USD más que la opción básica.",
      "El 78% de los compradores eligió la opción con estuche de cuero y las ventas totales se triplicaron en 3 semanas."
],
    ch5RiskMitigation: [
      "Error fatal: El 'Neuromarketing Engañoso' (poner un temporizador falso que dice 'La oferta expira en 10 minutos' pero nunca expira).",
      "Los consumidores reconocen las falsedades al instante y pierden todo el respeto por la marca; utiliza siempre escasez real (stock limitado genuino o fechas de cierre de inscripción reales).",
      "No abuses de 20 gatillos al mismo tiempo: satura la página y parece un sitio sospechoso; usa 3 o 4 gatillos sutiles y elegantes.",
      "Asegúrate de que la prueba social provenga de testimonios 100% reales y verificables con nombres y fotos auténticas."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de Neuromarketing Digital y Optimización de Gatillos Cognitivos de Venta\". Ayuda a e-commerce, consultores, academias y marcas digitales a rediseñar sus páginas y tablas de precios con psicología persuasiva.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por auditoría de sesgos cognitivos en Google Docs + rediseño de 1 tabla de precios con efecto señuelo en Canva. • Nivel Intermedio (Con portafolio): $140 - $280 USD por optimización integral de Neuromarketing para una página de ventas (Efecto Anclaje, insignias de prueba social, gatillos de aversión a la pérdida y redacción de garantías audaces). • Nivel Senior / Behavioral Economics & Neuromarketing Strategist: $350 - $700 USD por arquitectura completa de psicología de precios y persuasión para lanzamientos High-Ticket, pruebas A/B de sesgos conductuales y consultoría directiva.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve viendo la propuesta de precios y la página web de [Empresa] y noté que tienen un gran producto pero la presentación actual no utiliza los atajos psicológicos del cerebro humano (como el Efecto Señuelo o el Anclaje de Precios de Daniel Kahneman) que facilitan la decisión del comprador y evitan que la gente postergue la compra. Con una optimización de Neuromarketing en tu tabla de precios es posible aumentar el ticket medio y multiplicar tus conversiones en más de un 40%. Por solo $50 USD yo te realizo la auditoría y te diseño la nueva tabla de precios en 48 horas. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña una tabla de precios demo con Efecto Señuelo en Canva y prepara la plantilla de auditoría en Google Docs. Día 2: Contacta a 10 tiendas online o consultores en LinkedIn y ofréceles una revisión gratuita de la psicología de sus precios."
],
    quizQuestions: [
      {
            "question": "¿En qué consiste el 'Efecto Señuelo' (Decoy Effect) en la psicología de precios?",
            "options": [
                  "Un descuento para salir de pesca.",
                  "Introducir una tercera opción de precio diseñada estratégicamente para ser asimétricamente inferior a la opción más cara, haciendo que el cliente perciba la opción premium como una ganga evidente y la elija de forma casi unánime.",
                  "Cobrar el triple a los clientes nuevos.",
                  "Ocultar los precios en la página web."
            ],
            "correctIndex": 1,
            "explanation": "El efecto señuelo altera la comparación cognitiva guiando al cerebro a elegir la opción más rentable para el negocio."
      },
      {
            "question": "¿Qué establece el principio de 'Aversión a la Pérdida' de Daniel Kahneman?",
            "options": [
                  "Que a la gente le gusta perder dinero.",
                  "Que el dolor psicológico que experimenta una persona al perder una cantidad de dinero o beneficio es aproximadamente el doble de intenso que la alegría de ganar esa misma cantidad.",
                  "Que los bancos no deben cobrar comisiones.",
                  "Que las compras son 100% racionales."
            ],
            "correctIndex": 1,
            "explanation": "Enfocar los textos en lo que el cliente perderá si no actúa es una de las fuerzas motivadoras más poderosas de la psicología humana."
      },
      {
            "question": "¿Por qué es un grave error utilizar contadores de escasez o de tiempo falsos que se reinician al recargar la web?",
            "options": [
                  "Porque la computadora se congela.",
                  "Porque destruye la confianza y credibilidad de la marca en un segundo cuando el usuario descubre el engaño, generando rechazo moral y cancelaciones de compra.",
                  "Porque Canva no permite contadores.",
                  "No tiene ningún error, es una técnica recomendable."
            ],
            "correctIndex": 1,
            "explanation": "El neuromarketing profesional debe ser 100% ético; la falsedad destruye la reputación comercial a largo plazo."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-14
  // =========================================================================
  'mda-14': {
    frameworkName: "Metodología de Transmisión de Live Shopping de Alta Conversión (Live Stream Selling Matrix - 4 Blocks & Flash Drops)",
    coreMetrics: [
      "Ventas Brutas Generadas por Hora de Transmisión en Vivo ($/Hour GMV)",
      "Tasa de Conversión de Espectador a Comprador en Vivo (> 12%)",
      "Tiempo Medio de Retención en la Transmisión (> 18 minutos)",
      "Porcentaje de Interacción en Chat (Comentarios / Minuto > 45)",
      "Tasa de Reclamación de Ofertas Flash con Tiempo Límite (> 80%)"
],
    caseCompany: "Boutique de Ropa Femenina & Accesorios de Moda ChicTrends (Guadalajara, México)",
    caseOutcome: "Publicaba fotos de vestidos en Instagram con pocas ventas; organizó un evento de 'Live Shopping' de 90 minutos en TikTok e Instagram Live con la estructura de 4 Bloques, probándose los vestidos en vivo y lanzando 'Ofertas Flash de 5 minutos'; vendió 340 vestidos y generó $24,500 USD en solo una noche de transmisión en directo.",
    pitfall: "Hacer transmisiones en vivo improvisadas, sin iluminación adecuada, con un audio defectuoso y sin un guion estructurado con ofertas por tiempo limitado, aburriendo a los espectadores y logrando cero ventas.",
    actionItem1: "Estructurar la Transmisión en los 4 Bloques de Oro: Bloque 1: Calentamiento y bienvenida (10 min), Bloque 2: Demostración en vivo de productos (30 min), Bloque 3: Lanzamiento de Ofertas Flash con cupón en pantalla (30 min), Bloque 4: Cierre con urgencia y sorteo (20 min).",
    actionItem2: "Utilizar TikTok Live Studio o Instagram Live con una configuración técnica básica: aro de luz frontal, micrófono de solapa inalámbrico y enlaces directos de compra fijados en el chat.",
    actionItem3: "Lanzar 'Lotes Flash de Inventario Limitado' (Flash Drops): ofrecer 20 unidades exclusivas con un 25% de descuento solo para quienes compren durante los próximos 5 minutos.",
    domainContext: "El Social Commerce y el Live Shopping son el fenómeno de mayor crecimiento del comercio electrónico global (representando más de $500 billones de dólares en Asia y expandiéndose con fuerza en América Latina), combinando el entretenimiento en vivo con la compra instantánea en un solo clic.",
    strategicRationale: "El Live Shopping humaniza la marca, derriba las dudas sobre el producto en tiempo real mediante demostraciones en vivo y genera picos de facturación masiva en pocas horas.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que en Asia el 'Live Shopping' (vender en vivo por TikTok e Instagram) mueve más de $500,000 millones de dólares y que en América Latina es la tendencia más explosiva del comercio electrónico? Ya no basta con subir fotos estáticas de tus productos: la gente quiere ver cómo queda la ropa en un cuerpo real, cómo funciona un electrodoméstico en vivo y hacer preguntas por el chat que el presentador responde en el segundo. Con la 'Estructura de Transmisión de 4 Bloques' y herramientas gratuitas como TikTok Live y Canva puedes organizar una noche de ventas en vivo que facture lo de todo un mes. Este tomo te enseña a crear tu show de Live Shopping.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Boom del Social Commerce: Por qué ver un producto en video en vivo vende 10 veces más que una foto.\n• Capítulo 2: La Estructura de 4 Bloques del Live Shopping: Calentamiento -> Demostración -> Ofertas Flash -> Cierre Urgente.\n• Capítulo 3: Iluminación, Audio y Enlaces Fijados en Chat en TikTok e Instagram Live.\n• Capítulo 4: Caso de Estudio Real (ChicTrends México): Cómo vendieron 340 vestidos y $24,500 USD en 90 minutos de Live.\n• Capítulo 5: La Psicología de los 'Flash Drops': Ofertas de 5 minutos que desatan el frenesí de compra en el chat.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer producción y guionización de Live Shopping cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. TikTok Live Studio / Instagram Live: Plataformas oficiales gratuitas para emitir en directo con carrito integrado.\n2. Google Docs: Guion Minuto a Minuto del Show de Live Shopping y Lista de Disparadores de Venta.\n3. Canva (canva.com): Gráficos de Pantalla para Live Shopping (Banners de Ofertas Flash y Carteles de Precios).",
    ch1CustomNarrative: [
      "El comercio electrónico tradicional basado en catálogos estáticos de fotografías y descripciones de texto sufre de una limitación intrínseca fundamental: es una experiencia solitaria, fría e impersonal.",
      "El fenómeno del Live Shopping (o Televentas del Siglo XXI) ha revolucionado el comercio digital al recuperar el calor de la interacción humana directa y combinarlo con la inmediatez de las pasarelas de pago digitales.",
      "Durante una transmisión en vivo, el comprador puede pedirle al presentador que gire una prenda, que muestre la textura de una tela o que pruebe la potencia de una herramienta, recibiendo una demostración personalizada e interactuando con otros cientos de compradores entusiasmados en el chat.",
      "Aprender a producir y conducir eventos de Live Shopping te permite desbloquear una de las fuentes de monetización más dinámicas y rentables del comercio moderno."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO PRODUCIR UN EVENTO DE LIVE SHOPPING EN TIKTOK Y CANVA GRATIS:",
      "Paso 1: Abre Google Docs y redacta el \"Guion_Minuto_A_Minuto_LiveShopping_90Min\":",
      "Paso 2: • Bloque 1 (Min 0-15): Calentamiento y bienvenida: Saluda a los primeros conectados, anuncia el sorteo final exclusivo para quienes se queden hasta el cierre y muestra un adelanto de los 3 productos estrella. • Bloque 2 (Min 15-45): Demostración en vivo: Muestra los productos en uso real, responde preguntas del chat en vivo y fija el enlace de compra en el chat (Pin Product).",
      "Paso 3: • Bloque 3 (Min 45-75): Lanzamiento de Ofertas Flash: Muestra en Canva un cartel que diga: \"🔥 Oferta Relámpago: 25% OFF con el código LIVE25 solo durante los próximos 10 minutos (solo 30 unidades)\". Toca una campana y cuenta las unidades restantes en voz alta a medida que entran las compras. • Bloque 4 (Min 75-90): Cierre con urgencia, sorteo del regalo entre los compradores y despedida con cuenta regresiva.",
      "Paso 4: Configuración Técnica: Usa un trípode estable a la altura de los ojos, dos luces frontales suaves para iluminar el rostro y micrófono de solapa inalámbrico para un audio nítido.",
      "Paso 5: Ten a un moderador en un segundo teléfono para responder comentarios en el chat y fijar los enlaces de compra rápidamente."
],
    ch3TacticalSteps: [
      "Semana 1: Selecciona los 5 productos con mayor margen de ganancia para tu evento de Live Shopping.",
      "Semana 2: Diseña los carteles de ofertas flash en Canva y redacta el guion de 4 bloques en Google Docs.",
      "Semana 3: Promociona la fecha y hora del evento durante 7 días en historias de Instagram y videos de TikTok.",
      "Semana 4: Ejecuta la transmisión en vivo de 90 minutos y procesa los envíos de los pedidos al día siguiente."
],
    ch4CaseDeepDive: [
      "ChicTrends en Guadalajara vendía vestidos de fiesta pero sus publicaciones en redes tenían poca interacción y las clientas dudaban de cómo se veían las telas en la realidad.",
      "Organizaron su primer 'Live Shopping Fashion Night' un jueves a las 8:00 PM: la fundadora se probó 12 vestidos en directo, mostró los acabados de las costuras y respondió dudas de tallas en el chat en tiempo real.",
      "Lanzaron 3 ofertas flash de 10 minutos con descuentos exclusivos para el Live.",
      "Conectaron a más de 1,800 mujeres en vivo, vendieron 340 vestidos en 90 minutos y facturaron $24,500 USD en una sola noche, agotando el inventario de 2 meses."
],
    ch5RiskMitigation: [
      "Error fatal: Transmitir con un audio defectuoso o con eco en la habitación.",
      "Los usuarios perdonan una cámara de calidad media pero abandonan la transmisión en 10 segundos si el audio se escucha con ruido o eco; invierte en un micrófono de solapa básico de $15 USD o usa los auriculares con cable.",
      "No transmitas solo: ten siempre a un asistente al lado que lea las preguntas del chat y actualice el stock disponible.",
      "Verifica la conexión a internet por WiFi de alta velocidad antes de iniciar para evitar que la transmisión se corte en pleno clímax de ventas."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Producción, Guionización y Lanzamiento de Eventos de Live Shopping en TikTok/Instagram\". Ayuda a boutiques de ropa, marcas de cosmética, tiendas de tecnología, joyerías y calzado a vender en vivo.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por redacción del guion de 4 bloques en Google Docs + diseño de 5 carteles de ofertas flash en Canva. • Nivel Intermedio (Con portafolio): $140 - $280 USD por producción completa de evento de Live Shopping (guion técnico, moderación de chat en vivo durante la transmisión, campaña previa de expectativa de 7 días y reporte de ventas). • Nivel Senior / Live Shopping Producer y Consultor de Social Commerce: $350 - $700 USD por producción profesional multicámara con OBS Studio, entrenamiento a presentadores de marca, integración de catálogos en TikTok Shop / Meta y porcentaje sobre ventas generadas.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve viendo la tienda de [Empresa] y sé que vender productos visuales solo con fotos en redes sociales a menudo genera dudas en las clientas sobre la calidad de las telas o el tamaño real. Con la metodología de Live Shopping en TikTok e Instagram Live es posible organizar un evento en vivo interactivo de 90 minutos donde muestras los productos en directo y lanzas ofertas flash con cupón en pantalla (llegando a vender lo de todo un mes en una sola noche). Por solo $50 USD yo te redacto el guion completo y te diseño todos los gráficos de ofertas en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña los gráficos de una noche de Live Shopping demo en Canva y redacta el guion en Docs. Día 2: Contacta a 10 tiendas de ropa, cosmética o joyería en Instagram y ofréceles estructurar su primer evento de Live Shopping."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la principal ventaja comercial del 'Live Shopping' frente a la venta tradicional por fotos en e-commerce?",
            "options": [
                  "Que las transmisiones son obligatorias por ley.",
                  "Permite humanizar la marca, demostrar el producto en uso real, responder dudas del cliente en vivo por el chat y generar un frenesí de compra mediante ofertas flash por tiempo limitado.",
                  "Que no se necesita tener productos físicos.",
                  "Que el internet es gratuito durante las transmisiones."
            ],
            "correctIndex": 1,
            "explanation": "La interacción en tiempo real y la demostración física derriban las objeciones y aceleran la decisión de compra."
      },
      {
            "question": "¿Qué es un 'Flash Drop' (Lote Relámpago) durante una sesión de Live Shopping?",
            "options": [
                  "Un error técnico de la cámara.",
                  "El lanzamiento de una cantidad muy limitada de un producto con un descuento especial exclusivo que solo está disponible durante unos pocos minutos (ej. 5 o 10 minutos) para quienes compren en ese instante exacto.",
                  "Un producto que se cae al suelo.",
                  "Un sorteo gratuito sin compras."
            ],
            "correctIndex": 1,
            "explanation": "Los flash drops activan la urgencia y el miedo a quedarse por fuera (FOMO) disparando las ventas en el chat."
      },
      {
            "question": "¿Qué elemento técnico es el más crítico para la retención de los espectadores en una transmisión en vivo?",
            "options": [
                  "Tener una cámara de cine de $10,000 USD.",
                  "Un audio nítido y claro (mediante micrófono de solapa) y una iluminación frontal adecuada que permita ver el rostro del presentador y los detalles del producto con claridad.",
                  "Poner música estridente de fondo.",
                  "Transmitir en la oscuridad."
            ],
            "correctIndex": 1,
            "explanation": "El audio claro y la buena iluminación son los dos pilares técnicos indispensables para mantener a la audiencia conectada."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-15
  // =========================================================================
  'mda-15': {
    frameworkName: "Ecosistema de Experiencia Unificada (Single Customer View & Omnichannel Journey Orchestration Engine)",
    coreMetrics: [
      "Puntuación de Coherencia de Marca Omnicanal (Omnichannel CSAT > 92%)",
      "Tasa de Retención de Clientes Omnicanal (+60% vs Monocanal)",
      "Unificación de Perfiles de Clientes en CRM (Single Customer View 100%)",
      "Reducción de Tiempo de Resolución de Soporte entre Canales (-50%)",
      "Valor del Ciclo de Vida del Cliente Omnicanal (LTV +45%)"
],
    caseCompany: "Cadena de Ópticas & Salud Visual VisiónTotal (Lima, Perú)",
    caseOutcome: "Sus clientes se hacían el examen de la vista en la tienda física pero luego en la web tenían que volver a ingresar sus datos desde cero, perdiendo el 60% de las ventas de lentes; implementó una arquitectura omnicanal con un perfil único de cliente en Notion y Google Sheets: el optometrista guardaba la graduación y el cliente recibía en 5 minutos un mensaje de WhatsApp con un enlace web personalizado para elegir sus armazones desde casa; las ventas de lentes crecieron un 145% en 60 días.",
    pitfall: "Operar con 'Canales Silo' desconectados (el equipo de la tienda física no sabe qué compró el cliente en la web, y el equipo de soporte de WhatsApp no tiene acceso al historial de compras del cliente), obligando al usuario a repetir su historia 5 veces.",
    actionItem1: "Diseñar la 'Vista Única del Cliente (Single Customer View)': unificar el historial de compras físicas, digitales, graduaciones y preferencias bajo un único identificador (DNI/Teléfono) en el CRM.",
    actionItem2: "Implementar protocolos de 'Continuidad Multidispositivo': permitir que un carrito guardado en el móvil pueda ser completado en la computadora o pagado en el mostrador físico.",
    actionItem3: "Capacitar al personal comercial para que recomiende canales digitales de apoyo sin ver a la web como un 'competidor' de sus comisiones en tienda física.",
    domainContext: "La omnicanalidad no consiste en estar presente en todos los canales; consiste en ofrecer una experiencia fluida y sin costuras donde el cliente pueda saltar de la tienda física a WhatsApp y de la web a la aplicación sin perder su contexto.",
    strategicRationale: "Los clientes que interactúan con una marca a través de múltiples canales integrados tienen un LTV 30% superior y una tasa de lealtad el doble de alta que los compradores de un solo canal.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Alguna vez te ha pasado que compraste algo en una tienda física, luego escribiste al WhatsApp de la empresa para hacer una consulta y te dijeron: 'Disculpe, es que el sistema de WhatsApp no tiene acceso a las compras de las tiendas'? ¡Eso es el peor pecado comercial del mundo! Los clientes no piensan en 'canales': piensan en TU MARCA. El MARKETING OMNICANAL es la disciplina de unificar la tienda física, la página web, el WhatsApp, el correo y las redes sociales para que el cliente tenga una sola experiencia continua sin importar dónde se encuentre. Con herramientas accesibles como Notion y Google Sheets puedes construir la 'Vista Única del Cliente' gratis. Este tomo te enseña a crear omnicanalidad real.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: De la Multicanalidad al Marketing Omnicanal: La diferencia entre tener canales aislados vs. integrados.\n• Capítulo 2: La Vista Única del Cliente (Single Customer View): Unificar el historial de compras por DNI o Teléfono.\n• Capítulo 3: Mapeo de la Arquitectura Omnicanal en Miro y Notion: Diseñar los puentes entre físico y digital.\n• Capítulo 4: Caso de Estudio Real (VisiónTotal Lima): Cómo unificaron tienda física y WhatsApp para aumentar ventas un 145%.\n• Capítulo 5: Protocolos de Continuidad Multidispositivo: Empezar en móvil, probar en tienda y pagar en web.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de Marketing Omnicanal cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Notion (notion.so) / Miro: Diagrama de Arquitectura de Puntos de Contacto Omnicanal y CRM Unificado.\n2. Google Sheets: Base de Datos Maestra de Clientes con Identificador Único (DNI/WhatsApp/Email).\n3. Canva: Plantilla de Protocolos de Experiencia Omnicanal para entrenamiento del personal.",
    ch1CustomNarrative: [
      "En el mundo de los negocios tradicional, las empresas crecieron creando departamentos separados y aislados: el departamento de tiendas físicas, el departamento de comercio electrónico y el departamento de atención telefónica.",
      "Esta estructura fragmentada en 'silos' organizacionales genera una fricción inmensa para el consumidor moderno, quien interactúa con la marca como una entidad única e indivisible.",
      "Cuando un cliente visita una tienda física y el vendedor desconoce sus pedidos online anteriores, o cuando escribe por WhatsApp y tiene que volver a explicar su problema desde el principio, la confianza en la profesionalidad de la empresa se derrumba por completo.",
      "Aprender a diseñar e implementar estrategias de Marketing Omnicanal te permite unificar los flujos de datos y crear experiencias fluidas y memorables que elevan la retención y la rentabilidad del negocio a niveles insuperables."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO DISEÑAR UNA ARQUITECTURA OMNICANAL EN NOTION Y SHEETS GRATIS:",
      "Paso 1: Abre Google Sheets y crea la \"Base_Datos_Cliente_Omnicanal\": • Llave Primaria Única: Número de Teléfono con código de país (o DNI/Cédula). • Columnas: Nombre, Historial de Compras Físicas (Sucursal), Historial de Compras Online (Web), Preferencias y Talla/Graduación.",
      "Paso 2: En Notion, diseña el \"CRM_Unificado_Omnicanal\": Permite que tanto los vendedores de la tienda física como los agentes de atención de WhatsApp tengan acceso a la misma ficha del cliente en tiempo real desde una tablet o celular.",
      "Paso 3: Diseña los \"Puentes de Continuidad\": • Puente Físico a Digital: El cliente se prueba un producto en tienda física pero no está seguro de comprar -> El vendedor le envía por WhatsApp el carrito listo con 1 clic para que compre desde su casa cuando lo decida. • Puente Digital a Físico: El cliente reserva online y recoge en tienda en 1 hora.",
      "Paso 4: En Canva, diseña la \"Guía_Protocolo_Omnicanal\" para los empleados: Establece que todo vendedor físico reciba comisión incluso si el cliente finaliza la compra por la web gracias a su código de asesor.",
      "Paso 5: Mide el LTV del cliente omnicanal frente al cliente monocanal y comprueba cómo la lealtad se duplica."
],
    ch3TacticalSteps: [
      "Semana 1: Mapea todos los puntos de contacto físicos y digitales actuales de tu empresa en un diagrama de Notion/Miro.",
      "Semana 2: Unifica las bases de datos de clientes bajo el número de teléfono/WhatsApp como identificador maestro.",
      "Semana 3: Implementa el protocolo de carritos compartidos por WhatsApp para que los vendedores ayuden a comprar desde casa.",
      "Semana 4: Capacita al personal en la consulta de la ficha única del cliente antes de iniciar una atención comercial."
],
    ch4CaseDeepDive: [
      "VisiónTotal en Lima operaba 8 ópticas pero los clientes se hacían el examen de graduación visual en la tienda física y luego en la web no podían comprar lentes porque la tienda online no tenía guardada su receta médica.",
      "El 60% de los pacientes terminaban comprando sus armazones en ópticas de la competencia.",
      "Unificaron su sistema en una base de datos centralizada: al terminar el examen visual, el optometrista guardaba la receta en la ficha del paciente y el sistema le enviaba automáticamente un mensaje de WhatsApp con un enlace personalizado a un probador virtual en la web con sus lentes ya graduados.",
      "Las ventas de lentes y armazones crecieron un 145% en 60 días y el 40% de los pacientes compró un segundo par de gafas de sol desde su computadora."
],
    ch5RiskMitigation: [
      "Error fatal: Crear 'Guerra de Canales Interna' (que los vendedores de la tienda física saboteen la web porque sienten que la web les roba sus comisiones).",
      "Alinea los incentivos económicos: entrega a cada vendedor un código o enlace personalizado para que gane comisión si su cliente compra online; transforma a tus vendedores físicos en embajadores digitales.",
      "Asegúrate de que las políticas de devolución y garantía sean idénticas en la web y en las tiendas físicas (permitir devolver en tienda física un producto comprado online).",
      "Protege la privacidad de los datos de los clientes cumpliendo con las leyes locales de protección de datos personales."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño y Consultoría de Estrategias de Marketing Omnicanal para Marcas Híbridas\". Ayuda a ópticas, zapaterías, clínicas, librerías, ferreterías y tiendas departamentales a unificar su mundo físico y digital.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por mapeo de puntos de contacto omnicanal en Notion + base de datos unificada en Google Sheets. • Nivel Intermedio (Con portafolio): $140 - $280 USD por consultoría completa de omnicanalidad (diseño de la Vista Única del Cliente, protocolos de continuidad WhatsApp-Web-Tienda y manual de capacitación en Canva). • Nivel Senior / Omnichannel Customer Experience Director: $350 - $700 USD por arquitectura integral de transformación omnicanal empresarial, integración de sistemas POS físicos con plataformas de e-commerce y CRM corporativo, y programas de incentivos comerciales unificados.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando la experiencia de compra en [Empresa] y sé que muchas veces las empresas con tiendas físicas y canales digitales operan de forma desconectada (donde el equipo de la tienda no sabe qué compró el cliente en la web o el cliente no puede continuar su compra por WhatsApp sin repetir sus datos). Con una Estrategia de Marketing Omnicanal y una 'Vista Única del Cliente' en Notion y Sheets es posible conectar todos tus puntos de contacto para que tus clientes vivan una experiencia fluida y aumentes su valor de vida (LTV) en más de un 40%. Por solo $50 USD yo te diseño el mapa de arquitectura omnicanal en 48 horas. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña el diagrama de un ecosistema omnicanal demo en Notion/Miro y la base de datos en Sheets. Día 2: Contacta a 10 gerentes de cadenas minoristas o franquicias en LinkedIn y ofréceles una sesión gratuita de diagnóstico omnicanal."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la diferencia fundamental entre el enfoque 'Multicanal' y el enfoque 'Omnicanal'?",
            "options": [
                  "El multicanal es para televisión y el omnicanal para radio.",
                  "El enfoque multicanal tiene presencia en varios canales pero operan de forma aislada y desconectada (en silos), mientras que el enfoque omnicanal integra y sincroniza todos los canales para ofrecer una experiencia única, fluida y continua al cliente.",
                  "El omnicanal es más barato en impuestos.",
                  "No existe ninguna diferencia conceptual."
            ],
            "correctIndex": 1,
            "explanation": "La omnicanalidad rompe los silos departamentales y pone al cliente en el centro de una experiencia unificada."
      },
      {
            "question": "¿Qué es la 'Vista Única del Cliente' (Single Customer View) en marketing digital?",
            "options": [
                  "Tomar una fotografía del cliente.",
                  "La consolidación de todos los datos, historial de compras físicas y online, interacciones de soporte y preferencias de un cliente en un único perfil centralizado accesible por todos los departamentos de la empresa.",
                  "Una pantalla de televisión en la tienda.",
                  "Un formulario de quejas."
            ],
            "correctIndex": 1,
            "explanation": "Tener un perfil unificado permite a cualquier empleado o sistema reconocer al cliente y atenderlo con contexto completo."
      },
      {
            "question": "¿Cómo se evita el conflicto interno entre los vendedores de tiendas físicas y la tienda online?",
            "options": [
                  "Despidiendo a los vendedores físicos.",
                  "Alineando los incentivos económicos mediante comisiones atribuidas: entregar a cada vendedor un código o enlace personalizado para que gane comisión si su cliente decide completar la compra desde su casa por la web.",
                  "Cerrando el sitio web de la empresa.",
                  "Prohibiendo a los vendedores hablar de internet."
            ],
            "correctIndex": 1,
            "explanation": "Incentivar la colaboración digital transforma a la fuerza de ventas física en aliados activos de la omnicanalidad."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-16
  // =========================================================================
  'mda-16': {
    frameworkName: "Protocolo de Internacionalización Digital (Cross-Border E-commerce & SEO Multirregional Hreflang Framework)",
    coreMetrics: [
      "Tasa de Conversión Internacional por País Objetivo (> 2.8%)",
      "Porcentaje de Ventas en Moneda Local del País de Destino (100%)",
      "Tasa de Abandono en Checkout Internacional por Costos de Aduana (< 15%)",
      "Posicionamiento SEO en Buscadores Locales (Top 5 con Hreflang)",
      "Retorno del Gasto Publicitario en Nuevos Mercados (ROAS Internacional > 4.0x)"
],
    caseCompany: "Fabricante de Joyería de Plata Fina & Gemas Preciosas IncaSilver (Lima, Perú)",
    caseOutcome: "Vendía solo en Perú con un mercado saturado; implementó el Protocolo de Expansión Digital en Shopify con pasarelas multi-moneda (Stripe/PayPal), etiquetas SEO Hreflang para México, Colombia y Estados Unidos, y envíos internacionales con cálculo de aranceles prepagados en checkout; en 6 meses el 65% de sus ingresos provino del extranjero, facturando más de $85,000 USD mensuales en exportaciones digitales.",
    pitfall: "Intentar vender internacionalmente limitándose a traducir la web con Google Translate y cobrando en la moneda local del país de origen con costos de envío sorpresa en la aduana de destino, provocando que los compradores extranjeros huyan del checkout.",
    actionItem1: "Configurar la 'Localización de Moneda y Precios': mostrar los precios en la moneda local del comprador (MXN en México, COP en Colombia, USD en EE.UU.) con pasarelas de pago locales reconocidas.",
    actionItem2: "Implementar las 'Etiquetas SEO Hreflang' en la cabecera de la web (rel=\"alternate\" hreflang=\"es-MX\" / hreflang=\"es-CO\") para que Google muestre la versión correcta en cada país.",
    actionItem3: "Establecer acuerdos de logística internacional 'DDP (Delivered Duty Paid)' donde los impuestos aduaneros se calculen y cobren en el checkout sin sorpresas desagradables al entregar el paquete.",
    domainContext: "La expansión digital internacional permite a cualquier empresa de América Latina transformar un negocio local en una multinacional exportadora sin necesidad de abrir oficinas físicas en el extranjero.",
    strategicRationale: "Vender en múltiples países diversifica el riesgo macroeconómico y cambiario, accede a mercados con mayor poder adquisitivo y multiplica el tamaño del mercado direccionable (TAM) por diez.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué limitarte a vender únicamente a las personas de tu ciudad o país cuando tienes a más de 500 millones de hispanohablantes en el mundo con tarjetas de crédito listos para comprarte? El COMERCIO DIGITAL INTERNACIONAL (Cross-Border E-commerce) es la oportunidad más grande del siglo: te permite fabricar en tu país y vender en México, Estados Unidos, Colombia o España cobrando en dólares o euros. Sin embargo, muchas marcas fracasan porque cometen errores de novato con la moneda, las aduanas o el SEO. Con herramientas gratuitas como Market Finder de Google y Shopify Markets puedes abrir tu tienda al mundo en 48 horas. Este tomo final de la Categoría 16 te enseña a expandir tu negocio internacionalmente.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Oportunidad del Comercio Internacional Transfronterizo (Cross-Border): Vender en dólares desde LATAM.\n• Capítulo 2: Investigación de Mercados con Market Finder de Google: Saber qué país busca más tus productos gratis.\n• Capítulo 3: Localización de Monedas y Pasarelas de Pago: Stripe, PayPal y métodos locales (OXXO, PSE, Pix).\n• Capítulo 4: Caso de Estudio Real (IncaSilver Perú): De un taller local a exportar $85,000 USD mensuales a 5 países.\n• Capítulo 5: Logística Internacional sin Sorpresas (DDP vs DDU): Eliminar los dolores de cabeza de aduanas.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de expansión y marketing digital internacional cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Market Finder de Google (marketfinder.thinkwithgoogle.com): Herramienta oficial gratuita para identificar los mejores países para exportar tus productos.\n2. Google Trends Global (trends.google.com): Comparativa internacional de volumen de búsqueda y demanda de productos por país.\n3. Google Sheets: Matriz de Costos de Exportación Digital, Aranceles y Logística Internacional.",
    ch1CustomNarrative: [
      "En el siglo XXI, las barreras geográficas y los límites de las fronteras nacionales han dejado de ser un obstáculo insalvable para las pequeñas y medianas empresas con visión de escala global.",
      "La infraestructura digital globalizada —compuesta por pasarelas de pago multi-divisa, redes logísticas de transporte aéreo exprés y motores publicitarios con segmentación por países— permite a un taller artesanal o a un consultor independiente en América Latina competir de igual a igual en los mercados más prósperos del planeta.",
      "Sin embargo, la internacionalización exitosa no es una simple copia literal del negocio doméstico; exige un proceso riguroso de adaptación cultural, cumplimiento normativo aduanero y localización técnica de la experiencia de compra.",
      "Aprender a ejecutar estrategias de marketing digital internacional te otorga la capacidad suprema de blindar a tu empresa contra crisis locales y convertirla en una marca global de prestigio exportador."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO PLANIFICAR UNA EXPANSIÓN INTERNACIONAL CON MARKET FINDER Y SHEETS GRATIS:",
      "Paso 1: Ingresa a Google Market Finder (marketfinder.thinkwithgoogle.com). Introduce la URL de tu sitio web y tu categoría de producto (ej. \"Joyería fina de plata\").",
      "Paso 2: Analiza el reporte de mercados globales: Market Finder te mostrará los 3 países con mayor volumen de búsquedas, menor competencia y mayor facilidad de hacer negocios (ej. México, Estados Unidos y Colombia).",
      "Paso 3: Abre Google Trends (trends.google.com) y compara el interés de búsqueda de tu producto en esos 3 países en los últimos 12 meses.",
      "Paso 4: En Google Sheets, crea la \"Matriz_Costos_Logistica_Internacional\": • Costo de Producto + Costo de Envío Internacional Courier (DHL/FedEx) + Arancel Aduanero del País de Destino = Precio Final en Moneda Local con Margen Saludable.",
      "Paso 5: En tu tienda online (Shopify Markets / WooCommerce), activa la detección automática de geolocalización por IP para que el usuario de México vea precios en pesos mexicanos (MXN) y el de EE.UU. en dólares (USD), ofreciendo opciones de envío exprés DDP con entrega en 3 a 5 días."
],
    ch3TacticalSteps: [
      "Semana 1: Analiza los 3 mercados internacionales con mayor potencial para tu producto en Google Market Finder.",
      "Semana 2: Configura la visualización de precios multi-moneda y pasarelas de pago internacionales en tu tienda web.",
      "Semana 3: Negocia tarifas corporativas de exportación con un operador logístico internacional (DHL, FedEx o UPS).",
      "Semana 4: Lanza una campaña publicitaria piloto de prueba en Meta Ads segmentada exclusivamente en las ciudades con mayor poder adquisitivo del país seleccionado."
],
    ch4CaseDeepDive: [
      "IncaSilver en Lima fabricaba joyería artesanal de plata pero el mercado local estaba saturado y regateaba los precios.",
      "El fundador utilizó Market Finder de Google y descubrió que en Estados Unidos y México la búsqueda de 'plata peruana 925' tenía un volumen inmenso y los clientes estaban dispuestos a pagar 3 veces más por pieza.",
      "Localizó su tienda online: mostró precios en dólares y pesos mexicanos, integró pagos con PayPal y tarjetas internacionales, y contrató envíos exprés con aranceles incluidos.",
      "En 6 meses el 65% de su facturación total provino de compradores internacionales: exportó más de $85,000 USD mensuales a 5 países y contrató a 12 nuevos artesanos en su taller de Lima."
],
    ch5RiskMitigation: [
      "Error fatal: Enviar paquetes bajo la modalidad 'DDU' (Derechos de Aduana No Pagados), haciendo que el cliente reciba una sorpresa desagradable en la puerta de su casa teniendo que pagar impuestos adicionales imprevistos.",
      "Utiliza siempre envíos con aranceles prepagados en el checkout (DDP) o incluye el costo aduanero dentro del precio final para que la entrega sea 100% transparente y sin fricciones.",
      "Verifica las restricciones de importación de cada país (ej. regulaciones sanitarias en cosméticos o alimentos antes de enviar).",
      "Ofrece soporte al cliente en el huso horario y con modismos comprensibles del país de destino."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Plan de Expansión y Marketing Digital Internacional para E-commerce y Servicios\". Ayuda a artesanos, marcas de moda, alimentos gourmet, diseñadores y empresas de software a exportar sus productos al mundo.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por investigación de mercados internacionales en Google Market Finder + matriz de costos de exportación en Google Sheets. • Nivel Intermedio (Con portafolio): $140 - $280 USD por plan completo de internacionalización digital (configuración multi-moneda en Shopify Markets, cálculo de envíos DDP, etiquetas SEO Hreflang y campaña piloto en Meta Ads para 1 país). • Nivel Senior / Global E-commerce Director y Consultor de Expansión Internacional: $350 - $700 USD por arquitectura integral de comercio transfronterizo (Cross-Border), cumplimiento fiscal internacional (IVA/Tax), logística multi-almacén y campañas publicitarias en múltiples países y divisas.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando el gran potencial y la calidad de los productos de [Empresa] y sé que muchas marcas en nuestro país están limitadas por el tamaño del mercado local cuando podrían estar exportando y cobrando en dólares o euros en mercados como México, Estados Unidos o España con márgenes 3 veces más altos. Con el Protocolo de Expansión Internacional y herramientas como Google Market Finder es posible adaptar tu tienda online para vender en múltiples países con pasarelas de pago y envíos internacionales sin fricciones aduaneras. Por solo $50 USD yo te realizo el estudio de mercado internacional completo en 48 horas. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Realiza un estudio demo en Google Market Finder para un producto exportable (joyería, café o ropa) y arma la matriz en Sheets. Día 2: Contacta a 10 fabricantes o marcas artesanales en Instagram y ofréceles una propuesta gratuita de expansión internacional."
],
    quizQuestions: [
      {
            "question": "¿Qué es la modalidad de envío internacional 'DDP' (Delivered Duty Paid) y por qué es fundamental en el e-commerce transfronterizo?",
            "options": [
                  "Un envío que tarda 6 meses en llegar.",
                  "La modalidad donde todos los aranceles, impuestos aduaneros y costos de importación se calculan y cobran por adelantado en el checkout web, asegurando que el cliente reciba el paquete en la puerta de su casa sin ningún cobro sorpresa desagradable.",
                  "Un envío que solo se hace en barco de vela.",
                  "Un envío gratuito patrocinado por el gobierno."
            ],
            "correctIndex": 1,
            "explanation": "El modelo DDP garantiza transparencia total y evita que los clientes rechacen el paquete al llegar a su país por impuestos imprevistos."
      },
      {
            "question": "¿Qué herramienta oficial y gratuita de Google ayuda a identificar los países con mayor demanda internacional para exportar un producto?",
            "options": [
                  "Google Market Finder (marketfinder.thinkwithgoogle.com).",
                  "Calculadora de Windows.",
                  "Google Fotos.",
                  "Google Traductor."
            ],
            "correctIndex": 0,
            "explanation": "Market Finder analiza datos globales de búsqueda, facilidad comercial y comportamiento del consumidor para sugerir los mejores mercados de exportación."
      },
      {
            "question": "¿Para qué sirven las etiquetas 'SEO Hreflang' en un sitio web internacional?",
            "options": [
                  "Para cambiar el color de la página según el país.",
                  "Para indicarle a los motores de búsqueda como Google qué versión lingüística y geográfica de la página web debe mostrarse a cada usuario según su país e idioma (ej. es-MX para México, es-CO para Colombia), evitando contenido duplicado.",
                  "Para bloquear a usuarios extranjeros.",
                  "Para traducir automáticamente con faltas de ortografía."
            ],
            "correctIndex": 1,
            "explanation": "Las etiquetas Hreflang aseguran que cada visitante extranjero llegue a la versión correcta de moneda, idioma y contenido en los resultados de Google."
      }
]
  },

};
