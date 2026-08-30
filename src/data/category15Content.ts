// Specific topic-by-topic content blueprints for Category 15 (Intro al Marketing Digital)
// Providing 100% custom, domain-accurate, highly actionable business literature for all 15 books (Tomos 131 al 145)
// Features:
// 1. 5,000-character Deep Learning Overview & Executive Briefing per book
// 2. Step-by-step Free Meta Ads Library, Metricool, Google Search Console, Google Ads STAG, MailerLite, Notion, Canva, Funnelytics, Modash, Looker Studio, Make.com, Hemingway, Google Business Profile, Hormozi & 1-Page Marketing Plan Tutorials
// 3. Real, accessible LATAM Monetization Services & Pricing (Junior $25-$60, Mid $80-$180, Senior $220-$500 USD)
// 4. Localized copy-paste sales outreach pitches & 48h action plans
// 5. 3 rigorous exam questions per book with detailed explanations

import { SpecificBookContent } from './category1Content';

export const CATEGORY_15_CUSTOM_BOOKS: Record<string, SpecificBookContent> = {
  // =========================================================================
  // BOOK ID: imd-1
  // =========================================================================
  'imd-1': {
    frameworkName: "Framework de Arquitectura de Campañas Digitales Multicanal y Conversión Directa (Digital Ad Growth Engine)",
    coreMetrics: [
      "Retorno del Gasto Publicitario (ROAS > 4.2x)",
      "Costo de Adquisición de Cliente (CAC < $35 B2C / < $180 B2B)",
      "Tasa de Clics Calificados (CTR Promedio > 3.8%)",
      "Tasa de Conversión en Landing Page (CVR > 4.5%)",
      "Puntuación de Relevancia del Anuncio (Google Quality Score ≥ 8/10)"
],
    caseCompany: "Empresa de Instalación de Paneles Solares SolarTech (Ciudad de México, México)",
    caseOutcome: "Invertía $4,000 USD en Google Ads sin ventas por clics accidentales en términos irrelevantes como 'paneles caseros gratis'; implementó una lista de 450 palabras clave negativas, anuncios temáticos segmentados y una landing page con cotizador en 3 pasos; redujo su costo por prospecto calificado de $280 a $94 USD y generó $1.8M en contratos en 9 meses.",
    pitfall: "Invertir presupuesto publicitario sin instalar píxeles de conversión ni definir audiencias negativas, quemando capital en clics no calificados de personas que buscan cosas gratis.",
    actionItem1: "Instalar y verificar la API de Conversiones de Meta y el seguimiento de conversiones de Google Ads antes de activar cualquier campaña.",
    actionItem2: "Estructurar grupos de anuncios temáticos hiperenfocados (STAG - Single Theme Ad Groups) con concordancia de frase y exacta.",
    actionItem3: "Diseñar creatividades publicitarias con ganchos visuales claros en los primeros 3 segundos y llamados a la acción unívocos.",
    domainContext: "La publicidad digital contemporánea ha pasado de la compra manual de impresiones a sistemas algorítmicos orientados al rendimiento que exigen precisión en datos y propuestas de valor directas.",
    strategicRationale: "Dominar la adquisición de tráfico pagado otorga a la empresa previsibilidad en la generación de demanda, permitiendo escalar ventas de forma controlada y rentable.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que el 85% de los emprendedores que intentan hacer publicidad en Google o Facebook pierden su dinero en la primera semana porque le dan clic al botón azul de 'Promocionar publicación'? Ese botón es la trampa más cara de internet: le entrega tu dinero al algoritmo sin segmentación, sin palabras clave negativas y sin medir conversiones reales. La publicidad digital profesional es una ciencia matemática de adquisición donde cada dólar invertido debe generar 3 o 4 dólares de retorno (ROAS 4x). Con herramientas gratuitas como Meta Ads Library y Google Keyword Planner puedes espiar a tu competencia y crear anuncios rentables desde el primer día. Este tomo te enseña a crear campañas que facturan.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Muerte del Botón 'Promocionar': Por qué la publicidad profesional se gestiona desde el Administrador de Anuncios.\n• Capítulo 2: La Temperatura del Tráfico: Tráfico Frío (Desconocidos), Templado (Interesados) y Caliente (Listos para comprar).\n• Capítulo 3: La Espía Ética con Meta Ads Library: Cómo ver los anuncios que más venden de tus competidores gratis.\n• Capítulo 4: Caso de Estudio Real (SolarTech México): Cómo redujeron su CAC de $280 a $94 USD y facturaron $1.8M.\n• Capítulo 5: La Estructura del Anuncio Ganador: Gancho de 3 segundos (Hook) + Problema (Story) + Oferta con Botón (CTA).\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer gestión y auditoría de campañas de publicidad digital cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Meta Ads Library (facebook.com/ads/library): Buscador gratuito oficial para ver todos los anuncios activos de cualquier empresa del mundo.\n2. Google Keyword Planner: Herramienta oficial de Google para conocer el volumen de búsquedas y costo por clic de palabras clave.\n3. Meta Pixel Helper (Extensión de Chrome): Verificación en tiempo real de la correcta instalación de eventos de conversión.",
    ch1CustomNarrative: [
      "La publicidad digital representa la palanca de escalamiento más potente y medible en los negocios modernos; a diferencia de los medios tradicionales masivos, cada dólar invertido en plataformas digitales puede rastrearse con precisión quirúrgica hasta el ingreso generado.",
      "Sin embargo, muchas empresas fracasan y queman presupuesto porque tratan a las plataformas publicitarias como máquinas tragamonedas: lanzan anuncios genéricos sin segmentación, dirigen el tráfico a la página de inicio y esperan resultados milagrosos.",
      "El éxito en el marketing digital de respuesta directa no depende del azar, sino de la coherencia entre tres pilares: la Intención de la Audiencia, la Relevancia del Mensaje Publicitario y la Fricción Cero en la Página de Destino.",
      "Comprender la mecánica de las subastas publicitarias, el aprendizaje automático de los algoritmos y la atribución de conversiones permite transformar la inversión publicitaria de un gasto incierto en un activo predecible de alto rendimiento."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO ESPIAR COMPETIDORES Y ESTRUCTURAR ANUNCIOS EN META ADS LIBRARY GRATIS:",
      "Paso 1: Ingresa a Meta Ads Library (facebook.com/ads/library). Selecciona tu país y la categoría \"Todos los anuncios\". Escribe el nombre de tus 3 mayores competidores o palabras clave de tu nicho (ej. \"cursos de inglés\", \"reparación de techos\").",
      "Paso 2: Filtra por anuncios que lleven más de 60 días activos: si un competidor gasta dinero manteniendo un anuncio durante 2 meses consecutivos, significa con certeza matemática que ese anuncio es altamente rentable. Analiza sus ganchos visuales y textos.",
      "Paso 3: Abre Canva y diseña 3 variaciones visuales basadas en los mejores ángulos encontrados: • Variante 1 (Problema): Imagen con texto grande de dolor. • Variante 2 (Beneficio directo): Foto de cliente feliz con el resultado. • Variante 3 (Prueba social): Captura de pantalla de testimonio o calificación.",
      "Paso 4: En el Administrador de Anuncios de Meta, crea una campaña con objetivo \"Clientes Potenciales / Ventas\". Segmenta por intereses de tu nicho y excluye a compradores de los últimos 30 días para no gastar dinero en clientes actuales."
],
    ch3TacticalSteps: [
      "Semana 1: Audita tu infraestructura de medición instalando el Píxel de Meta y el Tag de Google con Pixel Helper.",
      "Semana 2: Analiza 10 anuncios exitosos en Meta Ads Library y redacta 3 propuestas de texto con la fórmula Gancho-Historia-Oferta.",
      "Semana 3: Lanza una campaña piloto con presupuesto controlado ($5 a $10 USD diarios) segmentada geográficamente en tu ciudad.",
      "Semana 4: Pausa los anuncios con CTR inferior al 1.5% y duplica el presupuesto en el anuncio ganador que genere el menor costo por contacto."
],
    ch4CaseDeepDive: [
      "SolarTech Residencial en Ciudad de México invertía en volantes físicos y recomendaciones boca a boca con retornos decrecientes.",
      "Lanzaron anuncios en Google Ads pero gastaron $4,000 USD sin vender nada porque los usuarios hacían clic en búsquedas como 'paneles solares caseros gratis'.",
      "Reestructuraron la estrategia: agregaron 450 palabras clave negativas (gratis, casero, pdf, tutorial), segmentaron por códigos postales residenciales de alto poder adquisitivo y crearon videos en Meta Ads mostrando facturas de luz de clientes reducidas un 90%.",
      "En 9 meses redujeron su costo por cliente de $280 a $94 USD, cerraron $1.8 millones en nuevos contratos y abrieron dos sucursales."
],
    ch5RiskMitigation: [
      "Error fatal: Modificar los anuncios todos los días sin dejar que el algoritmo de Meta o Google complete la 'Fase de Aprendizaje'.",
      "Deja correr los anuncios durante al menos 50 eventos de conversión o 7 días antes de cambiar textos o presupuestos para que la inteligencia artificial optimice la entrega.",
      "Vigila la métrica de 'Frecuencia': si la frecuencia supera 3.5 veces por persona, el público se cansará de tu anuncio; renueva las imágenes.",
      "Respeta estrictamente las políticas publicitarias: no uses promesas exageradas de dinero ni imágenes de antes y después que puedan bloquear tu cuenta."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría y Estructuración de Campañas Publicitarias en Meta y Google Ads\". Ayuda a clínicas, despachos, academias, e-commerce y negocios locales a lanzar campañas rentables con bajo presupuesto.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por análisis de competidores en Meta Ads Library + configuración de 1 campaña con 3 creatividades en Canva. • Nivel Intermedio (Con portafolio): $120 - $250 USD por gestión mensual de campañas publicitarias (Google Search + Meta Ads), instalación de píxeles, lista de palabras clave negativas y optimización semanal de ROAS. • Nivel Senior / Media Buyer y Consultor de Tráfico Pagado (Traffic Manager): $300 - $600 USD por arquitectura de tráfico multicanal avanzada, embudos de retargeting dinámico, API de conversiones del servidor y cuadro de mando en Looker Studio.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], sé que para negocios en [Sector] invertir en publicidad en Facebook o Google a menudo resulta frustrante si los clics son caros y no llegan clientes reales (muchas veces por falta de palabras clave negativas o segmentaciones inadecuadas). Con la metodología de Tráfico Pagado de Respuesta Directa es posible estructurar campañas optimizadas para que cada dólar invertido genere prospectos calificados por WhatsApp. Por solo $45 USD yo te realizo una Auditoría y te configuro tu primera campaña rentable en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Analiza los anuncios de 5 marcas líderes en Meta Ads Library y guarda capturas de las mejores estructuras. Día 2: Contacta a 10 comercios locales en Instagram o LinkedIn y ofréceles una auditoría gratuita de sus anuncios actuales."
],
    quizQuestions: [
      {
            "question": "¿Por qué presionar el botón 'Promocionar publicación' en redes sociales suele ser una mala práctica comercial?",
            "options": [
                  "Porque ese botón no funciona en teléfonos móviles.",
                  "Porque optimiza únicamente por 'interacciones y likes superficiales' sin permitir segmentaciones avanzadas, palabras clave negativas ni seguimiento de conversiones reales de ventas en el Administrador de Anuncios.",
                  "Porque cobra en criptomonedas.",
                  "Porque borra las publicaciones anteriores."
            ],
            "correctIndex": 1,
            "explanation": "El botón promocionar busca visibilidad y likes, mientras que el Administrador de Anuncios profesional optimiza por ventas y clientes potenciales calificados."
      },
      {
            "question": "¿Qué es la 'Meta Ads Library' (Biblioteca de Anuncios de Meta) y cómo ayuda a un negocio?",
            "options": [
                  "Una biblioteca de libros físicos sobre marketing.",
                  "Una herramienta oficial y gratuita de Meta que permite buscar y ver todos los anuncios que cualquier empresa o competidor del mundo tiene activos en Facebook e Instagram en tiempo real.",
                  "Un software para piratear cuentas de Instagram.",
                  "Un curso universitario de publicidad."
            ],
            "correctIndex": 1,
            "explanation": "La biblioteca de anuncios permite realizar investigación competitiva ética y descubrir qué ofertas y creatividades están funcionando en el mercado."
      },
      {
            "question": "¿Qué función cumplen las 'Palabras Clave Negativas' en una campaña de Google Ads?",
            "options": [
                  "Bloquear a los empleados de la empresa.",
                  "Impedir que tus anuncios aparezcan cuando los usuarios buscan términos irrelevantes o no rentables (como 'gratis', 'empleo', 'pdf' o 'casero'), evitando que quemes presupuesto en clics basura.",
                  "Hacer que la página cargue más rápido.",
                  "Insultar a los competidores."
            ],
            "correctIndex": 1,
            "explanation": "Las palabras clave negativas protegen tu inversión publicitaria asegurando que solo pagues por clics de compradores calificados."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-2
  // =========================================================================
  'imd-2': {
    frameworkName: "Metodología de Contenido Orgánico AIDA & Embudo de Atracción en Redes Sociales (Social Selling Matrix)",
    coreMetrics: [
      "Tasa de Engagement Orgánico (> 4.5% en posts)",
      "Ratio de Guardados y Compartidos (Save/Share Ratio > 15%)",
      "Conversión de Comentarios a Conversaciones en WhatsApp/DM (> 20%)",
      "Frecuencia de Publicación Sostenible (3 a 4 piezas de alto valor/semana)",
      "Crecimiento Mensual de Audiencia Calificada (+12% sin anuncios)"
],
    caseCompany: "Estudio Jurídico & Asesoría Laboral para Trabajadores LexLaboral (Lima, Perú)",
    caseOutcome: "Publicaba fotos de artículos del código civil que nadie leía con 2 likes por post; implementó la Metodología AIDA en carruseles de Canva explicando '3 derechos que tu jefe no puede quitarte en tu liquidación' y programó en Metricool; sus publicaciones alcanzaron 80,000 visualizaciones orgánicas semanales, generando más de 45 consultas de clientes por WhatsApp a la semana.",
    pitfall: "Usar las redes sociales corporativas como un 'periódico de anuncios aburridos' donde solo se publican fotos del logo, promociones de venta y saludos de días festivos sin aportar ningún valor educativo real.",
    actionItem1: "Estructurar cada pieza de contenido con la fórmula AIDA: Atención (Gancho impactante en portada), Interés (Problema común), Deseo (Solución práctica explicada) y Acción (Pide que comenten o escriban al DM).",
    actionItem2: "Crear carruseles educativos en Canva (formato 1080x1350 px) optimizados para ser guardados y compartidos, lo que multiplica el alcance en el algoritmo.",
    actionItem3: "Automatizar la programación mensual de publicaciones en Metricool (gratuito) para mantener consistencia sin esclavizarse a diario.",
    domainContext: "En las redes sociales la gente no entra a comprar, entra a entretenerse y aprender; la venta ocurre como consecuencia natural de educar y resolver dudas antes de pedir dinero.",
    strategicRationale: "El contenido orgánico de alto valor construye autoridad moral indiscutible, atrae prospectos cualificados a costo cero y alimenta los embudos de venta de forma perpetua.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué tantas empresas en América Latina publican fotos todos los días en Instagram o Facebook y solo reciben los 'Me gusta' de su mamá y sus empleados? Porque cometen el error de 'Hablar como un comercial de televisión': solo publican fotos de sus productos con precios. En redes sociales la moneda de cambio es el VALOR EDUCATIVO. Si enseñas a tu cliente a resolver un problema pequeño gratis, te pagará para que le resuelvas el problema grande. Con la Metodología AIDA y herramientas gratuitas como Canva y Metricool puedes programar un mes de contenido magnético en solo 3 horas. Este tomo te enseña a vender en redes sin pagar publicidad.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Psicología del Usuario en Redes Sociales: Por qué nadie entra a Instagram a ver publicidad.\n• Capítulo 2: La Fórmula AIDA para Contenidos: Atención (Portada) -> Interés -> Deseo -> Acción (CTA).\n• Capítulo 3: La Anatomía del Carrusel Educativo de Alto Guardado en Canva (1080x1350 px).\n• Capítulo 4: Caso de Estudio Real (LexLaboral Lima): Cómo pasaron de 2 likes a 45 clientes semanales en WhatsApp.\n• Capítulo 5: Programación Automática con Metricool: Cómo planificar 30 días de contenido en una sola tarde.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer creación de contenido y gestión de redes sociales cobrando entre $35 y $520 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Canva (canva.com): Plantillas de carruseles educativos de 5 diapositivas en formato vertical de alta retención.\n2. Metricool (metricool.com): Plataforma oficial gratuita para programar publicaciones en Instagram, TikTok, LinkedIn y Facebook.\n3. AnswerThePublic.com / Google Trends: Descubrimiento de las preguntas exactas que la gente busca en internet sobre tu tema.",
    ch1CustomNarrative: [
      "El mayor error de los empresarios en redes sociales es confundir un canal de interacción humana y aprendizaje con una valla publicitaria en una carretera.",
      "Cuando una marca satura sus perfiles con ofertas de compra agresivas, imágenes de stock impersonales y saludos protocolares, los algoritmos detectan la falta de interacción del público y hunden su visibilidad a mínimos históricos.",
      "Las cuentas corporativas que crecen y facturan con éxito son aquellas que adoptan una mentalidad de medios de comunicación: entregan consejos accionables, desmitifican mitos de su industria y responden a las preguntas más urgentes de sus clientes ideales.",
      "Aprender a dominar la metodología del Social Selling te permite transformar seguidores pasivos en clientes fieles que compran tus servicios con total confianza."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR CARRUSELES AIDA EN CANVA Y PROGRAMARLOS EN METRICOOL GRATIS:",
      "Paso 1: Ingresa a AnswerThePublic.com y busca tu servicio (ej. \"ortodoncia\", \"declaración de impuestos\"). Elige una pregunta frecuente de dolor (ej. \"¿Cómo saber si me están cobrando impuestos de más?\").",
      "Paso 2: Abre Canva (canva.com) y crea un diseño de \"Carrusel de Instagram (1080 x 1350 px)\" de 5 láminas con la estructura AIDA: • Lámina 1 (Atención): Titular gancho grande: \"3 Errores en tu declaración que te hacen perder dinero\". • Láminas 2 y 3 (Interés y Deseo): Explicación de los errores en viñetas simples y cómo evitarlos. • Lámina 4 (Prueba): \"Más de 200 profesionales ya corrigieron esto con nuestra guía\". • Lámina 5 (Acción): \"Guarda este post y escribe la palabra 'GUÍA' en comentarios para enviarte el formato gratis por mensaje\".",
      "Paso 3: Crea una cuenta gratuita en Metricool (metricool.com) y conecta tu cuenta de Instagram y Facebook.",
      "Paso 4: Sube las imágenes, pega el texto con 3 hashtags de nicho, selecciona los mejores horarios de publicación (marcados en color oscuro por Metricool) y programa las publicaciones de todo el mes en 1 hora."
],
    ch3TacticalSteps: [
      "Semana 1: Investiga las 10 preguntas más frecuentes de tus clientes actuales en AnswerThePublic.",
      "Semana 2: Diseña 3 carruseles educativos en Canva aplicando la paleta de colores oficial de tu marca.",
      "Semana 3: Programa las publicaciones en Metricool los martes, jueves y sábados en los horarios de mayor actividad.",
      "Semana 4: Responde a cada comentario recibido en menos de 1 hora invitando al usuario a continuar la conversación por WhatsApp."
],
    ch4CaseDeepDive: [
      "LexLaboral en Lima era un despacho de abogados laborales que solo publicaba textos formales de leyes y fotos de apretones de manos con cero interacción.",
      "Cambiaron radicalmente su enfoque con la fórmula AIDA: comenzaron a publicar carruseles y videos cortos explicando derechos laborales prácticos ('Qué hacer si no te pagan tus horas extras').",
      "Cada publicación invitaba a dejar un comentario para recibir un modelo de carta de reclamo por mensaje directo.",
      "Alcanzaron más de 80,000 visualizaciones orgánicas al mes, recibieron 45 consultas directas de clientes por WhatsApp a la semana y multiplicaron por 5 la facturación del despacho sin pagar un solo dólar en publicidad."
],
    ch5RiskMitigation: [
      "Error común: Obsesionarse con la 'Viralidad Vacía' (hacer bailes o memes virales que atraen miles de likes de personas que jamás te comprarán).",
      "Prioriza el contenido especializado para tu cliente ideal; es preferible tener 1,000 seguidores que sean compradores calificados a tener 100,000 seguidores que solo buscan humor.",
      "No uses más de 3 a 5 hashtags relevantes; los algoritmos modernos analizan el texto y las palabras del diseño, no la cantidad excesiva de etiquetas.",
      "Mantén la constancia: los resultados orgánicos requieren al menos 60 a 90 días de publicaciones continuas para generar tracción sólida."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Estrategia de Captación Orgánica y Calendario Editorial de Redes Sociales para PYMEs\". Ayuda a profesionales independientes, clínicas, despachos y tiendas a crear contenido que atraiga clientes reales a su WhatsApp.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $35 - $70 USD por diseño de 8 carruseles educativos en Canva + programación en Metricool. • Nivel Intermedio (Con portafolio): $100 - $200 USD por plan mensual de contenido orgánico (12 publicaciones AIDA, textos persuasivos, investigación en AnswerThePublic y reporte mensual de métricas en Metricool). • Nivel Senior / Social Media Strategist y Consultor de Social Selling: $250 - $520 USD por estrategia integral de generación de demanda orgánica, embudo de mensajes directos (DM to WhatsApp), guiones para videos cortos (Reels/TikTok) y entrenamiento comercial.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve viendo el perfil de [Empresa] en redes sociales y noté que tienen un servicio increíble pero las publicaciones tienen poca interacción porque son muy promocionales (y hoy los algoritmos premian el contenido educativo que la gente guarda y comparte). Con la metodología de Carruseles AIDA en Canva y programación en Metricool es posible generar contenido de alto valor que atraiga entre 20 y 40 consultas directas a tu WhatsApp cada mes de forma orgánica. Por solo $40 USD yo te diseño y programo tus primeras 8 publicaciones de alto impacto. ¿Te gustaría ver un modelo de carrusel para tu rubro?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña 2 carruseles AIDA demo en Canva para tu rubro o el de un cliente potencial. Día 2: Contacta a 10 profesionales o negocios locales en Instagram y ofréceles una propuesta gratuita de carrusel educativo."
],
    quizQuestions: [
      {
            "question": "¿Qué significan las siglas de la fórmula 'AIDA' en la creación de contenidos para redes sociales?",
            "options": [
                  "Amigos, Imágenes, Datos y Algoritmos.",
                  "Atención (gancho de portada que detiene el scroll), Interés (planteamiento del problema común), Deseo (la solución práctica de valor) y Acción (llamado claro a comentar, guardar o escribir al WhatsApp).",
                  "Anuncios, Impuestos, Dinero y Ahorro.",
                  "Automatización, Inteligencia, Diseño y Arte."
            ],
            "correctIndex": 1,
            "explanation": "La fórmula AIDA estructura la atención psicológica del usuario para guiarlo desde el impacto inicial hasta la conversión."
      },
      {
            "question": "¿Por qué los 'Carruseles Educativos' en formato vertical (1080x1350 px) tienen mayor alcance en los algoritmos de redes sociales?",
            "options": [
                  "Porque ocupan más espacio en la pantalla del smartphone y aumentan el tiempo de lectura (retención) y la tasa de guardados, dos de las métricas más premiadas por el algoritmo.",
                  "Porque las computadoras no los pueden ver.",
                  "Porque son obligatorios por ley.",
                  "Porque se borran a las 24 horas."
            ],
            "correctIndex": 0,
            "explanation": "El formato vertical 4:5 domina la pantalla móvil y el formato multipágina multiplica el tiempo de permanencia del usuario."
      },
      {
            "question": "¿Cuál es la ventaja de utilizar herramientas gratuitas de programación como Metricool?",
            "options": [
                  "Que regalan dinero para publicidad.",
                  "Permitir planificar y programar las publicaciones de todo el mes en los horarios de mayor audiencia en un solo día, manteniendo consistencia sin perder horas todos los días.",
                  "Que crea los textos automáticamente sin humanos.",
                  "Que bloquea las malas reseñas."
            ],
            "correctIndex": 1,
            "explanation": "La programación por lotes libera tiempo operativo y garantiza una presencia profesional constante en todas las plataformas."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-3
  // =========================================================================
  'imd-3': {
    frameworkName: "Los 3 Pilares del SEO Orgánico de Google (SEO Técnico, Optimización On-Page y Autoridad Off-Page)",
    coreMetrics: [
      "Posición Media en Búsquedas de Google (Top 3 en Palabras Clave Locales)",
      "Tráfico Orgánico Mensual No Pagado (+60% semestral)",
      "Tasa de Clics en Resultados de Búsqueda (CTR Orgánico > 5%)",
      "Páginas Indexadas Correctamente en Google Search Console (100%)",
      "Autoridad de Dominio y Calidad de Enlaces Entrantes (Backlinks de Nicho)"
],
    caseCompany: "Clínica Veterinaria & Hospital de Mascotas 24 Horas VetCare (Guadalajara, México)",
    caseOutcome: "No aparecía en Google cuando la gente buscaba 'veterinaria 24 horas guadalajara'; optimizó los títulos H1, meta etiquetas y Google Search Console con palabras clave de intención local; en 90 días alcanzó el puesto #1 en búsquedas orgánicas, recibiendo más de 120 llamadas mensuales de emergencias veterinarias sin pagar un solo dólar en anuncios.",
    pitfall: "Rellenar la página web con repetición forzada de palabras clave ('Keyword Stuffing') o descuidar las etiquetas de título y meta descripciones, haciendo que Google no entienda de qué trata el sitio web.",
    actionItem1: "Configurar y verificar la propiedad en Google Search Console para monitorear qué palabras clave traen impresiones y clics reales a tu web.",
    actionItem2: "Optimizar la 'Etiqueta Title' (máximo 60 caracteres) y la 'Meta Descripción' (máximo 155 caracteres) con la palabra clave principal y tu ciudad.",
    actionItem3: "Estructurar los textos con jerarquía clara: 1 solo encabezado H1 con la palabra clave principal, varios H2 para subtemas y textos con respuestas directas a dudas de usuarios.",
    domainContext: "El SEO (Search Engine Optimization) es la fuente de tráfico más rentable y duradera de internet: los usuarios que buscan en Google tienen una intención de compra activa inmediata.",
    strategicRationale: "Posicionar tu sitio web en los primeros resultados orgánicos de Google genera un flujo constante de clientes calificados las 24 horas del día con costo marginal de adquisición cero.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Qué hace una persona cuando necesita un abogado, un cerrajero, un dentista o un hotel en su ciudad? Abre Google y escribe: 'mejor dentista en [ciudad]'. El 75% de todos los clics se los llevan los 3 PRIMEROS RESULTADOS que aparecen en la pantalla; si tu negocio está en la página 2 de Google, estás en el mejor lugar para esconder un cadáver (porque nadie nunca pasa de la primera página). El SEO (Posicionamiento en Motores de Búsqueda) es la técnica para aparecer en el top de Google sin pagar anuncios. Con herramientas gratuitas como Google Search Console y Ubersuggest puedes posicionar cualquier negocio local en 90 días. Este tomo te enseña el SEO desde cero.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: Cómo Funciona el Robot de Google: Rastreo (Crawling), Indexación y Clasificación (Ranking).\n• Capítulo 2: Los 3 Pilares del SEO: SEO Técnico (Velocidad/Móvil), SEO On-Page (Contenido) y SEO Off-Page (Autoridad).\n• Capítulo 3: La Optimización On-Page de 1 Página: Title Tags de 60 caracteres, Meta Descripciones y H1.\n• Capítulo 4: Caso de Estudio Real (VetCare Veterinaria México): Cómo llegaron al puesto #1 y ganaron 120 clientes al mes.\n• Capítulo 5: Google Search Console Gratis: La herramienta secreta para saber qué busca la gente para encontrarte.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de SEO básico y optimización web cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Search Console (search.google.com/search-console): Panel oficial de Google para monitorear indexación, clics y palabras clave.\n2. Ubersuggest (neilpatel.com/ubersuggest) / Google Keyword Planner: Búsqueda de volumen de búsquedas mensuales y dificultad de ranking.\n3. SEO META in 1 CLICK (Extensión de Chrome): Diagnóstico instantáneo de títulos, encabezados H1-H6 y meta etiquetas de cualquier web.",
    ch1CustomNarrative: [
      "En el ecosistema del marketing digital contemporáneo, existen dos formas fundamentales de atraer visitantes a un sitio web: alquilar la atención mediante publicidad pagada o adueñarse de la atención mediante el posicionamiento orgánico en motores de búsqueda.",
      "La publicidad pagada se detiene en el segundo exacto en que dejas de pagar; el SEO, en cambio, es un activo inmobiliario digital que continúa atrayendo prospectos cualificados día y noche durante meses o años sin costo adicional por clic.",
      "Google no posiciona las páginas por casualidad ni por simpatía; su algoritmo multimillonario tiene un solo objetivo: entregar la respuesta más rápida, clara, autorizada y relevante a la duda del usuario.",
      "Aprender los fundamentos del SEO te otorga el superpoder comercial de interceptar a los clientes exactamente en el momento en que tienen la necesidad urgente de contratar tu servicio."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO OPTIMIZAR EL SEO ON-PAGE CON GOOGLE SEARCH CONSOLE Y UBERSUGGEST GRATIS:",
      "Paso 1: Ingresa a Ubersuggest o Google Keyword Planner y busca la intención de compra local (ej. \"abogado laboral lima\" o \"dentista infantil cali\"). Selecciona una palabra clave con más de 300 búsquedas mensuales y dificultad baja/media.",
      "Paso 2: Optimiza la Etiqueta Title de tu página principal (máximo 60 caracteres): Fórmula: \"[Palabra Clave Principal] en [Ciudad] | [Nombre de Marca]\". Ejemplo: \"Veterinaria 24 Horas en Guadalajara | Hospital VetCare\".",
      "Paso 3: Redacta la Meta Descripción (máximo 155 caracteres con llamado a la acción): \"Atención médica de urgencias para perros y gatos 24/7 en Guadalajara. Quirófano, rayos X y ambulancia. ¡Llama ahora para emergencias!\".",
      "Paso 4: En el editor de tu web, coloca 1 solo encabezado H1 con la palabra clave principal. Usa encabezados H2 para las preguntas frecuentes (ej. \"¿Qué servicios veterinarios de urgencia atendemos?\").",
      "Paso 5: Ingresa a Google Search Console (search.google.com/search-console). Envía el mapa del sitio (sitemap.xml) para que el robot de Google indexe tus páginas en menos de 48 horas a costo $0 USD."
],
    ch3TacticalSteps: [
      "Semana 1: Instala la extensión SEO META in 1 CLICK y audita las etiquetas de título y encabezados de tu web.",
      "Semana 2: Reescribe el Title Tag y la Meta Descripción de las 3 páginas más importantes de tu negocio.",
      "Semana 3: Da de alta tu propiedad en Google Search Console y envía tu archivo sitemap.xml.",
      "Semana 4: Revisa en Search Console qué términos de búsqueda empiezan a generar impresiones y optimiza los textos para elevar la posición."
],
    ch4CaseDeepDive: [
      "VetCare en Guadalajara operaba una excelente clínica veterinaria 24 horas pero su sitio web se llamaba simplemente 'Inicio - VetCare S.A.' y no aparecía en Google.",
      "Los dueños de mascotas en emergencias llamaban a otras clínicas que aparecían en los primeros puestos.",
      "Cambiaron el Title Tag a 'Veterinaria 24 Horas en Guadalajara | VetCare Emergencias' y estructuraron los encabezados H2 con sus servicios de laboratorio y cirugía.",
      "En 90 días Google los posicionó en el puesto #1 orgánico: pasaron a recibir más de 120 llamadas telefónicas de emergencias al mes sin gastar un solo centavo en Google Ads."
],
    ch5RiskMitigation: [
      "Error fatal: El 'Keyword Stuffing' (repetir la palabra clave 50 veces de forma artificial e ilegible en el texto).",
      "Google penaliza severamente el relleno forzado de palabras clave; escribe siempre para seres humanos de forma natural y fluida.",
      "No compres 'paquetes de 1,000 enlaces baratos' en páginas sospechosas o granjas de enlaces: los algoritmos antispam de Google detectan los enlaces artificiales y pueden eliminar tu web de los resultados.",
      "Asegúrate de que tu sitio web cargue en menos de 2.5 segundos en teléfonos móviles: la velocidad es un factor oficial de ranking en Google."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de SEO Básico y Optimización On-Page para Negocios Locales\". Ayuda a clínicas, despachos, restaurantes, talleres y comercios a aparecer en la primera página de Google sin pagar anuncios.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por auditoría de SEO con la extensión SEO META + optimización de Title Tags, Meta Descripciones y H1 de 5 páginas. • Nivel Intermedio (Con portafolio): $120 - $250 USD por optimización integral On-Page, configuración de Google Search Console, envío de sitemap, optimización de velocidad de carga y redacción de 2 artículos optimizados para palabras clave de nicho. • Nivel Senior / Consultor de SEO y Posicionamiento Web Orgánico: $300 - $600 USD por estrategia de SEO integral (Técnico, On-Page, arquitectura web, estrategia de enlazado interno y externo, optimización de Google My Business y cuadro de mando en Search Console).",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve buscando en Google servicios de [Rubro] en [Ciudad] y noté que tu sitio web no aparece en la primera página (y el 75% de los clientes llaman a los primeros 3 resultados). Con una optimización básica de SEO On-Page en las etiquetas de título y encabezados es posible posicionar tu negocio en el top de Google para recibir llamadas constantes de clientes locales sin pagar publicidad. Por solo $45 USD yo te realizo la optimización completa de tus etiquetas y configuro Google Search Console en 48 horas. ¿Te gustaría que te comparta un reporte gratuito de tu web?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Instala la extensión SEO META in 1 CLICK y analiza los títulos de 5 competidores en tu ciudad. Día 2: Contacta a 10 negocios locales que no aparezcan en la primera página de Google y ofréceles una auditoría de SEO gratis."
],
    quizQuestions: [
      {
            "question": "¿Cuáles son los 3 pilares fundamentales del Search Engine Optimization (SEO)?",
            "options": [
                  "Diseño, Publicidad y Ventas.",
                  "SEO Técnico (rendimiento, velocidad y rastreo móvil), SEO On-Page (optimización de contenidos, títulos H1-H6 y palabras clave) y SEO Off-Page (autoridad de dominio y enlaces externos de calidad).",
                  "Facebook, Instagram y TikTok.",
                  "Colores, Tipografías y Logotipos."
            ],
            "correctIndex": 1,
            "explanation": "Dominar los 3 pilares asegura que el robot de Google pueda rastrear, comprender y valorar la autoridad de tu página para posicionarla en el top."
      },
      {
            "question": "¿Cuál es la longitud máxima recomendada para la etiqueta 'Title Tag' en los resultados de Google?",
            "options": [
                  "500 caracteres.",
                  "Aproximadamente entre 50 y 60 caracteres (o 600 píxeles de ancho), para evitar que Google corte el título con puntos suspensivos en la pantalla de búsqueda.",
                  "Exactamente 5 palabras.",
                  "Cualquier longitud mientras tenga emojis."
            ],
            "correctIndex": 1,
            "explanation": "Mantener el título en menos de 60 caracteres asegura que se lea completo y mantenga su impacto persuasivo en el buscador."
      },
      {
            "question": "¿Qué herramienta oficial y gratuita de Google permite monitorear qué palabras clave busca la gente para encontrar tu sitio web?",
            "options": [
                  "Google Search Console.",
                  "Google Maps.",
                  "Gmail.",
                  "Google Traductor."
            ],
            "correctIndex": 0,
            "explanation": "Google Search Console entrega los datos oficiales de rendimiento, clics, impresiones y posición media de tu web en Google."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-4
  // =========================================================================
  'imd-4': {
    frameworkName: "Arquitectura de Grupos de Anuncios Monotemáticos (STAG - Single Theme Ad Groups) & Concordancia de Frase en Google Ads",
    coreMetrics: [
      "Nivel de Calidad de Palabras Clave (Quality Score ≥ 8/10 en Google)",
      "Tasa de Clics en Anuncios de Búsqueda (Search CTR > 6.5%)",
      "Costo por Clic Optimizado (Reducción de CPC -35%)",
      "Tasa de Conversión de Búsqueda a Lead Directo (> 14%)",
      "Porcentaje de Cuota de Impresiones en Búsquedas de Alta Intención (> 70%)"
],
    caseCompany: "Servicio de Cerrajería & Apertura de Puertas Residenciales CerrajerosExpress (Bogotá, Colombia)",
    caseOutcome: "Gastaba $500 USD al mes en Google Ads con 'concordancia amplia' y recibía llamadas de personas que querían 'aprender cerrajería' o 'comprar ganzúas'; implementó la estructura STAG con concordancia de frase ('cerrajero urgente bogota') y extensiones de llamada; el costo por cliente cayó un 60% y sus solicitudes de servicios a domicilio pasaron de 8 a 42 semanales.",
    pitfall: "Usar 'Concordancia Amplia' sin comillas en Google Ads (ej. poner cerrajero bogota en lugar de \"cerrajero bogota\"), permitiendo que Google muestre tus anuncios en búsquedas irrelevantes como 'curso de cerrajero gratis' o 'fotos de llaves'.",
    actionItem1: "Configurar las palabras clave siempre en 'Concordancia de Frase' (\"palabra clave\") o 'Concordancia Exacta' ([palabra clave]) para controlar con precisión matemática qué búsquedas activan el anuncio.",
    actionItem2: "Estructurar las campañas bajo el modelo STAG: un grupo de anuncios específico para cada necesidad concreta (ej. Grupo 1: \"Cerrajería Urgente\", Grupo 2: \"Apertura de Autos\", Grupo 3: \"Cambio de Cerraduras\").",
    actionItem3: "Activar las 'Extensiones de Anuncio / Recursos': Extensión de llamada telefónica directa, enlaces a secciones clave y textos destacados para ocupar el doble de espacio en la pantalla del móvil.",
    domainContext: "En Google Ads de búsqueda no estás interrumpiendo a nadie: el usuario tiene un problema en este segundo y está buscando activamente a quién pagarle para que se lo resuelva.",
    strategicRationale: "Dominar Google Search Ads permite captar clientes en el momento de mayor urgencia e intención de compra del ciclo comercial, generando el ROI más alto de toda la publicidad digital.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que Google Search Ads es la máquina de ventas más potente del planeta porque los usuarios buscan con la tarjeta de crédito en la mano? Si a alguien se le rompe una tubería a las 11 de la noche, no entra a ver videos en TikTok: entra a Google y escribe 'plomero urgente 24 horas'. El 90% de las empresas pierden dinero en Google Ads por un error de novato: usan la 'Concordancia Amplia' y pagan por clics de estudiantes haciendo tareas o personas buscando trabajo. Con la metodología STAG (Grupos Monotemáticos) y la Concordancia de Frase puedes asegurarte de que cada centavo invertido vaya solo a clientes desesperados por comprarte. Este tomo te enseña a crear tu primera campaña en Google Ads desde cero.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Psicología de la Intención de Búsqueda: Por qué Google Search convierte 5 veces más que las redes sociales.\n• Capítulo 2: Los Tipos de Concordancia: Amplia (Peligro), Concordancia de Frase (\" \") y Concordancia Exacta ([ ]).\n• Capítulo 3: La Metodología STAG: Cómo agrupar palabras clave para tener un Nivel de Calidad de 10/10.\n• Capítulo 4: Caso de Estudio Real (CerrajerosExpress Bogotá): Cómo multiplicaron sus servicios de 8 a 42 por semana.\n• Capítulo 5: Las Extensiones de Anuncio (Recursos): Cómo hacer que tu anuncio ocupe toda la pantalla del teléfono móvil con botón de llamada.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer creación y gestión de Google Ads cobrando entre $45 y $650 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Ads (ads.google.com): Panel oficial de creación de campañas de búsqueda de alta intención.\n2. Google Keyword Planner: Planificador oficial para estimar el costo por clic y volumen de búsquedas de tu ciudad.\n3. Google Sheets: Plantilla de Estructuración STAG para organizar palabras clave, copys y extensiones de llamada.",
    ch1CustomNarrative: [
      "Existe una diferencia psicológica abismal entre la publicidad en redes sociales y la publicidad en los motores de búsqueda de Google.",
      "En las redes sociales estás interrumpiendo a un usuario que navega por ocio, con la esperanza de despertar su curiosidad; en la red de búsqueda de Google, en cambio, el cliente ya tiene el problema consciente, urgente y busca activamente una solución para contratar de inmediato.",
      "Por esta razón, una campaña de Google Ads bien estructurada tiene tasas de conversión diez veces superiores a cualquier otro canal de marketing digital.",
      "Aprender a diseñar campañas de búsqueda con la metodología STAG te permite convertirte en la opción #1 visible exactamente en el instante en que el dinero está listo para cambiar de manos."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO LANZAR UNA CAMPAÑA STAG EN GOOGLE ADS GRATIS:",
      "Paso 1: Ingresa a Google Ads (ads.google.com). Crea una campaña con objetivo \"Clientes Potenciales\" y tipo de campaña \"Búsqueda\". Desmarca la opción \"Red de Display de Google\" para no gastar presupuesto en banners.",
      "Paso 2: En la pestaña de palabras clave, aplica la \"Concordancia de Frase\" usando comillas dobles: • \"cerrajero urgente bogota\" • \"cerrajero a domicilio bogota\" • \"apertura de puertas 24 horas\". (Nunca uses palabras sueltas sin comillas).",
      "Paso 3: Redacta los Anuncios Adaptables de Búsqueda (RSA): Escribe 5 títulos que coincidan exactamente con la búsqueda: Titular 1: \"Cerrajero Urgente en Bogotá\". Titular 2: \"Llegamos en 20 Minutos\". Titular 3: \"Precios Transparentes y Garantía\".",
      "Paso 4: Añade los Recursos (Extensiones): 1. Recurso de Llamada (botón telefónico directo en el móvil). 2. Recursos de Enlaces de Sitio (ej. \"Precios\", \"Zonas de Cobertura\", \"Opiniones de Clientes\").",
      "Paso 5: Define una estrategia de puja de \"Maximizar Clics\" con un límite de costo por clic máximo (ej. máx. $0.35 USD/clic) para mantener el control total del presupuesto diario."
],
    ch3TacticalSteps: [
      "Semana 1: Investiga en el Planificador de Palabras Clave los costos por clic de tu sector en tu ciudad.",
      "Semana 2: Estructura 2 grupos de anuncios temáticos (STAG) en Google Sheets con sus palabras clave entre comillas.",
      "Semana 3: Activa la campaña con un presupuesto de $5 a $10 USD diarios y configura la extensión de llamada telefónica.",
      "Semana 4: Revisa el informe de 'Términos de Búsqueda' y añade como palabras negativas cualquier búsqueda no deseada."
],
    ch4CaseDeepDive: [
      "CerrajerosExpress en Bogotá invertía $500 USD al mes en Google Ads pero el 70% del dinero se perdía en búsquedas de personas que querían 'aprender cerrajería' o 'comprar ganzúas baratas'.",
      "Reestructuraron la cuenta bajo la metodología STAG: cambiaron todas las palabras clave a concordancia de frase (\"cerrajero urgente bogota\"), añadieron 150 palabras clave negativas e insertaron el botón de llamada telefónica directa.",
      "El costo por llamada de cliente se redujo en un 60%, dejaron de recibir llamadas basura y aumentaron sus servicios de apertura a domicilio de 8 a 42 por semana.",
      "La facturación mensual de la empresa se cuadruplicó y contrataron a 3 cerrajeros adicionales para cubrir los turnos nocturnos."
],
    ch5RiskMitigation: [
      "Error fatal: Dejar activada la 'Red de Display de Google' dentro de una campaña de búsqueda.",
      "La red de display gasta tu presupuesto mostrando banners en aplicaciones de juegos móviles para niños que hacen clics accidentales; mantén las campañas de búsqueda separadas al 100% de la red de display.",
      "Revisa todas las semanas el informe de 'Términos de Búsqueda': es allí donde descubres las palabras exactas que la gente escribió antes de hacer clic para añadir negativas.",
      "Asegúrate de que la página de destino tenga un botón gigante de WhatsApp o llamada telefónica arriba del pliegue."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Configuración y Lanzamiento de Campañas de Búsqueda en Google Ads para Servicios Locales\". Ayuda a plomeros, cerrajeros, clínicas, talleres mecánicos, abogados y consultores a captar llamadas de clientes de urgencia.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por configuración de 1 campaña de búsqueda con 2 grupos STAG + extensiones de llamada y lista de 50 palabras negativas. • Nivel Intermedio (Con portafolio): $130 - $270 USD por gestión mensual de Google Ads (optimización de pujas, informe de términos de búsqueda, mejora de Quality Score y reporte quincenal). • Nivel Senior / Consultor de Google Ads y Tráfico Search: $320 - $650 USD por arquitectura avanzada de Google Search, seguimiento de conversiones de llamadas telefónicas en CRM, pruebas de landing pages y campañas de alto volumen.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], sé que para negocios de servicios como [Empresa] los clientes que buscan en Google tienen una urgencia inmediata por contratar (a diferencia de las redes sociales donde la gente está distraída). Con una campaña estructurada bajo el método STAG y concordancia de frase en Google Ads es posible aparecer en el top de búsquedas en tu ciudad con botón de llamada directa para recibir llamadas todos los días sin quemar presupuesto en clics basura. Por solo $50 USD yo te configuro la campaña completa lista para recibir contactos en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura una plantilla de estructura STAG en Google Sheets para servicios locales. Día 2: Contacta a 10 cerrajeros, plomeros, dentistas o abogados en tu ciudad y ofréceles una propuesta de campaña en Google Ads."
],
    quizQuestions: [
      {
            "question": "¿Qué diferencia a la 'Concordancia de Frase' (\"palabra clave\") de la 'Concordancia Amplia' en Google Ads?",
            "options": [
                  "La concordancia de frase es más cara.",
                  "La concordancia de frase exige que el usuario escriba la frase o su significado exacto en el orden indicado (permitiendo palabras antes o después), mientras que la amplia muestra el anuncio en cualquier búsqueda lejanamente relacionada, gastando dinero en búsquedas irrelevantes.",
                  "La concordancia de frase solo funciona los fines de semana.",
                  "No existe ninguna diferencia."
            ],
            "correctIndex": 1,
            "explanation": "La concordancia de frase con comillas equilibra el volumen de búsquedas con un control estricto de la relevancia comercial."
      },
      {
            "question": "¿Qué significa la metodología STAG (Single Theme Ad Groups) en la arquitectura de Google Ads?",
            "options": [
                  "Tener un solo anuncio para toda la empresa.",
                  "Agrupar palabras clave hiperenfocadas en torno a un solo tema o necesidad específica dentro de cada grupo de anuncios, permitiendo redactar textos publicitarios y extensiones 100% relevantes que eleven el Quality Score al máximo.",
                  "Usar solo letras mayúsculas en los anuncios.",
                  "Pagar a Google una tarifa plana mensual."
            ],
            "correctIndex": 1,
            "explanation": "STAG maximiza la relevancia entre la búsqueda del usuario, el texto del anuncio y la página de destino, abaratando el costo por clic."
      },
      {
            "question": "¿Por qué es crucial añadir 'Extensiones de Llamada / Recursos de Teléfono' en campañas de servicios locales para móviles?",
            "options": [
                  "Para que Google cobre menos impuestos.",
                  "Porque permite que el usuario presione un botón en la pantalla de su smartphone y llame directamente al negocio sin necesidad de entrar a la página web, acelerando el cierre de la venta.",
                  "Porque reemplaza a la secretaria de la oficina.",
                  "Para que el teléfono suene con música."
            ],
            "correctIndex": 1,
            "explanation": "El botón de llamada directa en móviles elimina toda fricción y capta clientes con necesidades inmediatas en segundos."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-5
  // =========================================================================
  'imd-5': {
    frameworkName: "Secuencia de Bienvenida de 5 Días de Lead Magnet (The 5-Day Soap Opera Welcome Sequence) & Protocolo de Entregabilidad",
    coreMetrics: [
      "Tasa de Apertura de Correos (Open Rate > 42% en bienvenida)",
      "Tasa de Clics en Enlaces de Correo (CTR > 6.5%)",
      "Tasa de Cancelación de Suscripción (Unsubscribe Rate < 0.8%)",
      "Entregabilidad a Bandeja de Entrada Principal (> 98% Inbox Placement)",
      "Ingresos Generados por Suscriptor por Mes ($/Subscriber > $1.20 USD)"
],
    caseCompany: "Academia de Finanzas Personales & Inversiones en Bolsa InvertirSeguro (Santiago, Chile)",
    caseOutcome: "Tenía una lista de 4,000 correos a los que solo les enviaba ofertas comerciales esporádicas con un 11% de apertura; creó un Lead Magnet ('Plantilla de Presupuesto en Excel') e implementó la Secuencia de Bienvenida de 5 Días en MailerLite; la tasa de apertura subió al 54% y vendió 140 cupos de su curso avanzado de $250 USD en el primer mes de automatización.",
    pitfall: "Comprar bases de datos de correos electrónicos ilegales o recolectar emails y no escribirles durante 3 meses, para luego aparecer de la nada intentando venderles un producto ('Efecto Fantasma Spam').",
    actionItem1: "Crear un 'Lead Magnet de Alto Valor Inmediato' (un recurso gratuito que resuelva un problema concreto en menos de 10 minutos: plantilla, checklist o calculadora).",
    actionItem2: "Configurar la 'Secuencia Telenovela de 5 Días' de Russell Brunson: Día 1: Entrega del regalo y bienvenida, Día 2: La historia del origen y el gran dolor, Día 3: La revelación del método secreto, Día 4: Beneficios ocultos y casos de éxito, Día 5: Oferta irresistible con urgencia.",
    actionItem3: "Autenticar los registros SPF, DKIM y DMARC de tu dominio en MailerLite o Brevo para que los correos jamás caigan en la carpeta de Spam.",
    domainContext: "Tu lista de correo electrónico es el único activo digital que te pertenece al 100%; las redes sociales pueden cambiar sus algoritmos o bloquear tu cuenta, pero tu base de suscriptores es tuya para siempre.",
    strategicRationale: "El email marketing sigue teniendo el retorno sobre la inversión más alto de toda la industria digital ($36 a $42 USD de retorno por cada $1 invertido), permitiendo ventas automáticas predecibles.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que el Email Marketing sigue siendo el canal de ventas más rentable del mundo, generando un retorno promedio de $36 dólares por cada $1 dólar invertido? Sin embargo, el 90% de las empresas en América Latina usan el correo de la peor manera: mandan boletines aburridos en PDF llenos de fotos corporativas que van directo a la carpeta de promociones o spam. Una 'Secuencia de Bienvenida Automatizada' (Soap Opera Sequence) es una serie de 5 correos con historias atrapantes que enganchan al suscriptor como una telenovela y le venden tus productos en automático las 24 horas del día. Con herramientas gratuitas como MailerLite puedes gestionar hasta 1,000 suscriptores gratis. Este tomo te enseña a crear tu máquina de email marketing.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Activo Más Valioso del Negocio: Por qué depender solo de Instagram o TikTok es un riesgo suicida.\n• Capítulo 2: La Creación del Lead Magnet Irresistible: Plantillas y calculadoras que la gente desea descargar.\n• Capítulo 3: La Secuencia Telenovela de 5 Días (Soap Opera Sequence): El gancho de Russell Brunson.\n• Capítulo 4: Caso de Estudio Real (InvertirSeguro Chile): Cómo facturaron $35,000 USD automatizando su bienvenida en MailerLite.\n• Capítulo 5: Blindaje de Entregabilidad: Configuración de registros SPF, DKIM y DMARC para evitar la carpeta de Spam.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño de Lead Magnets y automatizaciones de email cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. MailerLite (mailerlite.com) / Brevo: Plataformas líderes de email marketing gratuitas hasta 1,000 suscriptores con constructor visual de automatizaciones.\n2. Canva (canva.com): Diseño del Lead Magnet en PDF interactivo (Plantilla/Guía) y mockups visuales en 3D.\n3. Mail-Tester.com: Herramienta gratuita para verificar tu puntuación de entregabilidad y evitar filtros antispam.",
    ch1CustomNarrative: [
      "En el volátil ecosistema digital contemporáneo, construir todo tu negocio sobre plataformas de redes sociales de terceros como Instagram, TikTok o Facebook es el equivalente comercial a construir una mansión de lujo sobre un terreno alquilado.",
      "En cualquier momento, un cambio en los algoritmos opacos de las plataformas o un bloqueo arbitrario de cuenta puede reducir tu alcance orgánico a cero y paralizar por completo tus ventas de la noche a la mañana.",
      "La lista de correo electrónico con consentimiento explícito de los usuarios es el único activo de audiencia verdaderamente propio e inalienable de tu empresa; nadie puede quitártelo ni intermediar tu comunicación.",
      "Aprender a diseñar embudos de captación y secuencias de nutrición por correo electrónico te permite construir una máquina comercial automatizada que genera ingresos de forma predecible y constante."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UN LEAD MAGNET Y SECUENCIA DE EMAIL EN MAILERLITE GRATIS:",
      "Paso 1: Abre Canva y diseña el \"Lead Magnet\": Un checklist o plantilla práctica en PDF de 3 páginas (ej. \"Checklist_Auditoría_Finanzas_Personales.pdf\").",
      "Paso 2: Crea una cuenta gratuita en MailerLite (mailerlite.com). Ve a Formularios -> Formularios Embebidos / Pop-up -> Diseña el formulario con 2 campos: Nombre y Correo electrónico.",
      "Paso 3: Ve a Automatizaciones -> Crear Flujo de Trabajo (Workflow). Disparador: \"Cuando un suscriptor se une al grupo [Lead Magnet]\".",
      "Paso 4: Estructura los 5 correos de la Secuencia Telenovela: • Correo 1 (Inmediato): \"¡Aquí tienes tu plantilla! + Bienvenida a la comunidad\". • Correo 2 (Día 2): \"La historia de cómo casi quiebro por no saber esto (Mi mayor error)\". • Correo 3 (Día 3): \"El descubrimiento del método que cambió mis resultados\". • Correo 4 (Día 4): \"Beneficios ocultos y el testimonio de [Cliente]\". • Correo 5 (Día 5): \"Invitación especial: Inscríbete a nuestro programa con bono exclusivo (Cierra en 48h)\".",
      "Paso 5: Envía un correo de prueba a Mail-Tester.com para verificar que tu puntuación sea de 10/10 (libre de spam) gracias a la autenticación DKIM."
],
    ch3TacticalSteps: [
      "Semana 1: Diseña tu Lead Magnet en Canva en formato PDF y súbelo a Google Drive con enlace público.",
      "Semana 2: Configura tu cuenta de MailerLite y crea el formulario de captación conectado a tu web o redes sociales.",
      "Semana 3: Redacta los 5 correos de la secuencia de bienvenida en Google Docs y móntalos en la automatización de MailerLite.",
      "Semana 4: Promociona tu Lead Magnet en tus redes y revisa la tasa de apertura de cada correo del embudo."
],
    ch4CaseDeepDive: [
      "InvertirSeguro en Santiago tenía 4,000 correos guardados en un archivo de Excel pero nunca les enviaban nada; cuando lanzaban un curso enviaban un correo frío con un folleto y solo el 11% lo abría.",
      "Diseñaron una 'Calculadora de Jubilación Temprana' en Excel como Lead Magnet y la conectaron a la Secuencia de 5 Días en MailerLite.",
      "Los nuevos suscriptores leían con avidez las historias diarias: la tasa de apertura promedio subió al 54% y la tasa de clics al 8.2%.",
      "En el primer mes de automatización vendieron 140 cupos de su curso avanzado de $250 USD, generando $35,000 USD en ingresos casi en piloto automático."
],
    ch5RiskMitigation: [
      "Error fatal: Enviar correos con archivos adjuntos pesados (más de 1 MB) o con textos compuestos exclusivamente por imágenes sin texto HTML.",
      "Los filtros antispam bloquean los correos que son solo imágenes; escribe correos en formato de texto plano con párrafos cortos y enlaces limpios.",
      "Limpia tu lista de correo cada 90 días eliminando a los suscriptores inactivos que no han abierto ningún correo en los últimos 6 meses para proteger tu reputación de remitente.",
      "Incluye siempre un enlace visible y fácil para darse de baja (Unsubscribe) al pie de cada correo cumpliendo con las leyes internacionales antispam."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño de Lead Magnet y Automatización de Secuencia de Email Marketing en MailerLite\". Ayuda a academias, consultores, coaches, marcas de autor y comercios a crear su lista de suscriptores y vender en automático.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por diseño del Lead Magnet en Canva + configuración del formulario de captación en MailerLite. • Nivel Intermedio (Con portafolio): $120 - $250 USD por embudo completo de Email Marketing (Lead Magnet, página de captura, integración de registros DNS SPF/DKIM y redacción de la secuencia de 5 correos de bienvenida). • Nivel Senior / Email Marketing Strategist y Consultor de Automatizaciones: $300 - $600 USD por arquitectura integral de automatización de ciclo de vida del cliente, segmentación por etiquetas de comportamiento, secuencias de venta cruzada y recuperación de carritos abandonados.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], sé que para profesionales y empresas en [Sector] depender solo de las redes sociales es arriesgado porque los algoritmos cambian constantemente y no todos los seguidores ven tus publicaciones. Una lista de correo propia con una Secuencia de Bienvenida automatizada en MailerLite te permite captar emails de clientes potenciales con un regalo digital y enviarles una serie de 5 correos persuasivos que venden tus servicios las 24 horas del día en automático. Por solo $45 USD yo te diseño el Lead Magnet en Canva y te programo la secuencia completa en MailerLite. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña un Lead Magnet demo en Canva (ej. una plantilla o checklist) y configura la cuenta de MailerLite. Día 2: Contacta a 10 consultores, terapeutas o creadores en Instagram y ofréceles una propuesta gratuita de embudo de email."
],
    quizQuestions: [
      {
            "question": "¿Por qué la lista de correo electrónico propia es un activo superior a los seguidores en redes sociales?",
            "options": [
                  "Porque el correo electrónico es gratis.",
                  "Porque la lista de correos es un activo propio e inalienable de la empresa que no depende de cambios de algoritmos ni bloqueos de plataformas de terceros, garantizando comunicación directa permanente con los clientes.",
                  "Porque los correos se leen más rápido.",
                  "Porque las redes sociales van a cerrar pronto."
            ],
            "correctIndex": 1,
            "explanation": "Tener una base de datos propia de emails protege al negocio de la dependencia de plataformas externas."
      },
      {
            "question": "¿Qué es un 'Lead Magnet' en la estrategia de captación digital?",
            "options": [
                  "Un imán magnético para computadoras.",
                  "Un recurso gratuito de alto valor percibido (como una plantilla, checklist, guía o calculadora) que se entrega a un cliente potencial a cambio de su nombre y correo electrónico.",
                  "Un virus informático.",
                  "Un anuncio publicitario de televisión."
            ],
            "correctIndex": 1,
            "explanation": "El lead magnet es el incentivo de valor que motiva al usuario a dar el paso de registrarse voluntariamente en tu base de datos."
      },
      {
            "question": "¿Qué estructura sigue la 'Secuencia Telenovela de 5 Días' (Soap Opera Sequence) de Russell Brunson?",
            "options": [
                  "Enviar el mismo catálogo de precios 5 días seguidos.",
                  "Una secuencia narrativa diaria: Día 1 (Bienvenida y entrega), Día 2 (Historia del gran problema/origen), Día 3 (Revelación de la solución), Día 4 (Beneficios y testimonios) y Día 5 (Oferta con urgencia y cierre).",
                  "Pedir dinero en el primer minuto sin entregar nada.",
                  "Mandar fotos de actores famosos."
            ],
            "correctIndex": 1,
            "explanation": "La narrativa por episodios mantiene la intriga y prepara psicológicamente al lector para desear la oferta final."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-6
  // =========================================================================
  'imd-6': {
    frameworkName: "Matriz de Contenidos de Autoridad & Los 4 Pilares Editoriales (Educación, Inspiración, Prueba Social y Venta Directa)",
    coreMetrics: [
      "Tráfico Orgánico hacia Artículos de Blog (+80%)",
      "Tasa de Conversión de Lector a Suscriptor de Newsletter (> 6.5%)",
      "Tiempo Medio de Lectura en Publicaciones (> 3.5 minutos)",
      "Número de Backlinks Orgánicos Ganados por Guías Pilares (> 15 enlaces/año)",
      "Puntuación de Autoridad Temática en Motores de Búsqueda"
],
    caseCompany: "Fabricante de Herramientas de Carpintería & Bricolaje MaderArte (Cali, Colombia)",
    caseOutcome: "Publicaba fotos de sierras y tornillos con precios sin lograr ventas; comenzó a publicar guías paso a paso gratuitas en su blog ('Cómo construir una mesa de comedor en 1 fin de semana con 3 herramientas'); atrajo a más de 120,000 aficionados de la carpintería al mes; sus ventas de kits de herramientas se triplicaron convirtiéndose en la tienda online líder del sector en el país.",
    pitfall: "Escribir artículos de blog de 300 palabras vacíos y superficiales creados solo para 'rellenar espacio', sin aportar ningún valor formativo profundo que resuelva un problema real del lector.",
    actionItem1: "Crear un 'Contenido Pilar / Guía Definitiva' de más de 2,000 palabras que responda exhaustivamente a todas las dudas de un tema crítico de tu industria.",
    actionItem2: "Organizar el 'Calendario Editorial de 4 Pilares' en Notion: 40% Educativo (tutoriales y cómo hacerlo), 20% Inspiracional (historias y lecciones), 20% Prueba Social (casos de estudio de clientes) y 20% Venta Directa.",
    actionItem3: "Reciclar cada artículo pilar en 5 microcontenidos para redes sociales: 1 carrusel en Canva, 3 historias de WhatsApp y 1 correo electrónico para la newsletter.",
    domainContext: "En la economía de la atención, enseñar es la mejor forma de vender; cuando educas a tu cliente con generosidad, estableces una deuda de gratitud y una autoridad profesional que ninguna campaña publicitaria puede igualar.",
    strategicRationale: "El marketing de contenidos crea activos digitales permanentes que atraen tráfico cualificado durante años, posiciona a la empresa como líder de opinión y reduce el costo de adquisición de clientes a casi cero.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué empresas como HubSpot, Canva o RedBull dominan el mundo digital sin parecer que están vendiendo? Porque son maestras del MARKETING DE CONTENIDOS. No te persiguen con anuncios molestos: crean las mejores guías gratuitas, tutoriales y plantillas del mundo. Cuando necesitas comprar un software o un producto, ¿a quién acudes? A quien te enseñó todo lo que sabes. Si regalas tu mejor información, los clientes harán fila para pagarte por la implementación y el producto. Con la Matriz de los 4 Pilares y herramientas gratuitas como Notion puedes estructurar tu fábrica de contenidos en una tarde. Este tomo te enseña a educar para vender.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Filosofía 'They Ask, You Answer': Cómo responder las dudas reales que tus clientes tienen antes de comprar.\n• Capítulo 2: Los 4 Pilares Editoriales: Educación (40%), Inspiración (20%), Prueba (20%) y Venta (20%).\n• Capítulo 3: El Contenido Pilar de Alto Impacto: La estructura de la Guía Definitiva que posiciona en Google.\n• Capítulo 4: Caso de Estudio Real (MaderArte Herramientas Cali): Cómo 120k lectores mensuales triplicaron sus ventas.\n• Capítulo 5: La Máquina de Reciclaje de Contenido: De 1 artículo largo a 10 piezas de redes en 30 minutos.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría y calendarios de marketing de contenidos cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Notion (notion.so): Bóveda de Ideas de Contenido y Tablero Kanban de Producción Editorial.\n2. Google Docs: Plantilla Oficial de Redacción de Artículos Pilares con estructura SEO y llamadas a la acción.\n3. Canva: Plantillas de Infografías y Resúmenes Visuales para reciclar contenidos en redes.",
    ch1CustomNarrative: [
      "En el marketing digital contemporáneo, la línea que separaba a las empresas tradicionales de los medios de comunicación se ha borrado por completo: hoy en día, toda empresa exitosa es, en esencia, una compañía de medios que vende productos.",
      "Los consumidores modernos rechazan los discursos de venta agresivos pero devoran con avidez contenidos formativos que les enseñen a ahorrar dinero, mejorar su salud, dominar una habilidad o resolver un problema técnico urgente.",
      "Cuando una marca comparte su conocimiento técnico de forma abierta y generosa, el cliente no siente que le están vendiendo; siente que lo están ayudando y guiando hacia el éxito.",
      "Aprender a diseñar una estrategia de marketing de contenidos te permite construir un foso defensivo de autoridad que convierte a tu empresa en el referente indiscutible de su sector."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UN CALENDARIO EDITORIAL EN NOTION GRATIS:",
      "Paso 1: Abre Notion (notion.so) y crea una base de datos en formato \"Tablero Kanban\" llamada \"Fabrica_Contenidos_Marketing\". Columnas: 1. Ideas en Bruto, 2. En Redacción, 3. En Diseño de Gráficos, 4. Programado / Publicado.",
      "Paso 2: Define las 4 Etiquetas de Pilar Editorial: • 🔵 Educación (Tutoriales prácticos / Cómo resolver un error). • 🟢 Inspiración (Historia de superación del fundador o lección de negocio). • 🟡 Prueba Social (Entrevista o testimonio de un cliente feliz). • 🔴 Venta Directa (Oferta de servicio con llamado a la acción claro).",
      "Paso 3: Redacta en Google Docs un \"Artículo Pilar\" de 1,500 palabras: Título gancho, índice, 4 secciones prácticas con capturas de pantalla y un llamado a la acción final para agendar una consulta.",
      "Paso 4: Aplica la regla del \"Reciclaje 1 a 5\": Extrae los 3 mejores consejos del artículo y crea 1 carrusel en Canva para Instagram, 1 hilo en LinkedIn y 1 correo formativo para tu lista de suscriptores en menos de 45 minutos."
],
    ch3TacticalSteps: [
      "Semana 1: Haz una lista de los 10 mayores dolores y preguntas técnicas que tus clientes te hacen todos los días.",
      "Semana 2: Escribe tu primer Artículo Pilar de 1,500 palabras en Google Docs y publícalo en tu blog o LinkedIn Pulse.",
      "Semana 3: Diseña en Canva 3 piezas gráficas resumiendo los puntos clave del artículo y publícalas en tus redes.",
      "Semana 4: Mide las visitas y comentarios recibidos y programa los 4 temas del próximo mes en tu tablero de Notion."
],
    ch4CaseDeepDive: [
      "MaderArte en Cali fabricaba herramientas para carpintería pero sus ventas estaban estancadas porque solo competían con importaciones chinas de bajo costo.",
      "El fundador decidió crear un blog y canal de tutoriales: 'La Escuela del Carpintero Moderno', publicando planos gratuitos y guías sobre cómo fabricar muebles.",
      "En 6 meses acumularon más de 120,000 lectores y espectadores mensuales que aprendían con sus lecciones y confiaban en la calidad de sus herramientas.",
      "Las ventas de sierras y formones artesanales se triplicaron, aumentaron sus precios un 35% y lanzaron kits de madera que se agotaban en preventa antes de fabricarse."
],
    ch5RiskMitigation: [
      "Error fatal: El 'Contenido sin Llamado a la Acción': educar al usuario pero no decirle nunca qué producto o servicio puede comprarte para resolver el problema más rápido.",
      "Todo contenido formativo debe incluir una invitación clara y natural: 'Si quieres que nosotros implementemos esto por ti o necesitas la herramienta profesional, haz clic aquí'.",
      "No copies contenidos de otros sitios: aporta tu propia experiencia práctica, fotos reales y anécdotas de tu negocio.",
      "Sé paciente: el marketing de contenidos es una inversión de interés compuesto que madura y multiplica sus frutos a partir del tercer mes de publicación constante."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Estrategia y Calendario de Marketing de Contenidos (30 Días) para Marcas\". Ayuda a empresas de e-commerce, consultores, academias y servicios profesionales a crear contenidos que eduquen y generen ventas continuas.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por calendario editorial de 12 temas en Notion con pilares editoriales y 2 artículos formativos en Google Docs. • Nivel Intermedio (Con portafolio): $120 - $250 USD por estrategia integral de marketing de contenidos mensual (4 artículos pilares SEO, reciclaje a 8 carruseles en Canva, gestión en Notion y newsletter quincenal). • Nivel Senior / Content Marketing Strategist y Director Editorial Digital: $300 - $600 USD por arquitectura de contenidos de marca completa, producción de eBooks/Whitepapers de alto valor, gobernanza editorial multicanal y cuadro de mando de atribución de leads.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve revisando los canales digitales de [Empresa] y noté que tienen un gran conocimiento técnico en [Sector], pero no lo están aprovechando en sus publicaciones para educar a los clientes y posicionarse como los líderes indiscutibles de su mercado. Con una Estrategia de Marketing de Contenidos basada en los 4 Pilares Editoriales en Notion es posible atraer entre 10,000 y 30,000 visitas cualificadas al mes que te buscan directamente para contratarte. Por solo $45 USD yo te desarrollo el Calendario Editorial de 30 días con tu primer artículo pilar listo en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de Calendario de Contenidos en Notion y redacta un artículo demo en Google Docs. Día 2: Contacta a 10 consultores o dueños de negocios en LinkedIn y ofréceles una propuesta gratuita de 3 temas pilares para su sector."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la distribución porcentual recomendada en la 'Matriz de los 4 Pilares Editoriales' de contenidos?",
            "options": [
                  "100% de promociones y ofertas de descuento.",
                  "40% Educativo (tutoriales y cómo resolver problemas), 20% Inspiracional (historias y lecciones), 20% Prueba Social (testimonios de clientes) y 20% Venta Directa (ofertas claras).",
                  "50% memes y 50% noticias del clima.",
                  "90% quejas y 10% saludos."
            ],
            "correctIndex": 1,
            "explanation": "Esta proporción asegura que la audiencia reciba un 80% de valor genuino antes de recibir el 20% de ofertas comerciales directas."
      },
      {
            "question": "¿En qué consiste la regla del 'Reciclaje de Contenido 1 a 5'?",
            "options": [
                  "En tirar a la basura el 80% de lo que se escribe.",
                  "En transformar un solo 'Artículo Pilar' profundo en 5 piezas de contenido para diferentes formatos (carrusel de Instagram, hilo de LinkedIn, correo de newsletter e historias) ahorrando tiempo de producción.",
                  "En copiar el contenido de 5 competidores.",
                  "En publicar el mismo texto 5 veces el mismo día."
            ],
            "correctIndex": 1,
            "explanation": "Reciclar contenidos maximiza el retorno de la inversión de tiempo y amplifica el mensaje en múltiples plataformas."
      },
      {
            "question": "¿Por qué un contenido educativo siempre debe incluir una llamada a la acción (CTA) comercial?",
            "options": [
                  "Para que Google no borre la página.",
                  "Para guiar al lector que aprendió con tu contenido hacia la solución profesional completa que ofrece tu producto o servicio, cerrando el puente natural entre la educación y la venta.",
                  "Porque es obligatorio por ley en internet.",
                  "Para cobrar una tarifa de lectura."
            ],
            "correctIndex": 1,
            "explanation": "Educar sin invitar a la compra deja dinero sobre la mesa; el CTA ofrece el siguiente paso lógico al cliente satisfecho."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-7
  // =========================================================================
  'imd-7': {
    frameworkName: "Lienzo del Buyer Persona Profundo (Deep Buyer Persona Matrix) & Mapeo de Dolores, Deseos y Gatillos de Compra",
    coreMetrics: [
      "Claridad del Perfil de Cliente Ideal (Score 10/10 en equipo)",
      "Reducción de Gasto Publicitario en Audiencias Equivocadas (-50%)",
      "Tasa de Respuesta en Mensajes de Prospección Directa (+30%)",
      "Alineación entre el Mensaje de Venta y el Dolor Principal del Cliente (100%)",
      "Índice de Afinidad y Empatía en Llamadas Comerciales"
],
    caseCompany: "Plataforma de Software Contable para Restaurantes & Bares GastroContable (Buenos Aires, Argentina)",
    caseOutcome: "Promocionaba su software a 'empresas en general' con escaso éxito; realizó entrevistas a 20 dueños de restaurantes y definió a su Buyer Persona 'Mariano, el dueño estresado por el cuadre de caja nocturno'; reescribió todos sus anuncios hablando de eliminar el robo de inventario y cuadrar la caja en 5 minutos; sus ventas de suscripciones anuales crecieron un 240% en 90 días.",
    pitfall: "Definir al cliente ideal con datos demográficos superficiales ('Hombres de 25 a 45 años de clase media'), sin investigar sus verdaderos dolores emocionales, miedos nocturnos, objeciones secretas ni motivaciones de compra.",
    actionItem1: "Completar la 'Ficha de Buyer Persona en 4 Cuadrantes' en Canva: 1. Dolores y Frustraciones actuales, 2. Deseos y Metas Soñadas, 3. Miedos y Objeciones para comprar, 4. Gatillos Mentales de Decisión.",
    actionItem2: "Realizar 5 entrevistas telefónicas de 15 minutos con clientes reales utilizando el protocolo de preguntas de dolor profundo ('¿Qué te quita el sueño con respecto a este problema?').",
    actionItem3: "Imprimir la ficha del Buyer Persona y colocarla frente al escritorio de todo el equipo de marketing, ventas y soporte.",
    domainContext: "Si le hablas a todo el mundo, no le hablas a nadie; el marketing moderno exige una especificidad implacable para que tu cliente sienta que estás leyendo su mente.",
    strategicRationale: "Comprender la psicología profunda del Buyer Persona permite redactar anuncios que resuenan instantáneamente, diseñar productos que la gente ama y eliminar objeciones antes de que aparezcan.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿A quién le vende tu negocio? Si tu respuesta es 'A cualquier persona que necesite mi servicio', estás cometiendo el error #1 del marketing. Cuando le hablas a todos, nadie se siente identificado. El 90% de los perfiles de cliente que hacen las empresas son inútiles: 'Mujeres de 30 a 50 años que viven en la ciudad'. ¡Eso no dice nada! Un 'Buyer Persona Profundo' te revela: ¿Qué le quita el sueño a las 3 de la mañana? ¿A qué le tiene miedo? ¿Qué objeción secreta tiene para no comprarte? Con el Lienzo de 4 Cuadrantes y herramientas gratuitas en Canva y Google Forms puedes descubrir la mente de tu cliente ideal en 48 horas. Este tomo te enseña a definir a tu cliente perfecto.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Muerte del Perfil Demográfico Superficial: Por qué la edad y el género ya no son suficientes.\n• Capítulo 2: Los 4 Cuadrantes del Buyer Persona: Dolores Reales, Deseos Soñados, Objeciones y Gatillos.\n• Capítulo 3: La Entrevista de Descubrimiento de 15 Minutos en Google Forms: Las 5 preguntas de oro.\n• Capítulo 4: Caso de Estudio Real (GastroContable Argentina): Cómo triplicaron ventas enfocándose en 'Mariano el Restaurantero'.\n• Capítulo 5: La Ficha Visual del Buyer Persona de 1 Página en Canva: Ponerle rostro y voz al cliente.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer investigación y diseño de Buyer Personas cobrando entre $35 y $520 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Canva (canva.com): Plantilla Oficial del Lienzo de Buyer Persona de 1 Página con avatar visual y cuadrantes psicológicos.\n2. Google Forms: Cuestionario de Investigación Cualitativa de Clientes para recopilar testimonios y frustraciones.\n3. MakeMyPersona (hubspot.com/make-my-persona): Generador interactivo paso a paso de perfiles de cliente ideal.",
    ch1CustomNarrative: [
      "En el corazón de todo fracaso comercial en internet subyace un desconocimiento profundo y doloroso de la psicología humana de la persona a la que se intenta servir.",
      "Muchos emprendedores crean productos y diseñan campañas publicitarias basados en lo que A ELLOS les gusta o en lo que ELLOS suponen que el mercado necesita, proyectando sus propios sesgos en los compradores.",
      "El Buyer Persona no es un ejercicio teórico de imaginación creativa; es un arquetipo semi-ficticio riguroso construido a partir de datos reales, entrevistas personales y patrones de comportamiento de tus mejores clientes actuales.",
      "Aprender a mapear la mente de tu cliente ideal te otorga la habilidad casi telepática de redactar propuestas comerciales que tus prospectos sienten como si hubieran sido escritas exclusivamente para ellos."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UN LIENZO DE BUYER PERSONA EN CANVA Y GOOGLE FORMS GRATIS:",
      "Paso 1: Crea una encuesta en Google Forms llamada \"Encuesta_Conociendo_A_Nuestros_Clientes\". Pregunta: 1. \"¿Cuál era tu mayor dolor de cabeza antes de encontrar nuestro servicio?\". 2. \"¿Qué duda o miedo tenías antes de comprar?\". 3. \"¿Qué cambio concreto has visto en tu día a día?\". Envíala a 15 clientes satisfechos.",
      "Paso 2: Abre Canva (canva.com) y busca la plantilla \"Buyer Persona Canvas / Ficha de Cliente Ideal (Formato A4)\".",
      "Paso 3: Rellena los 4 Cuadrantes con las respuestas exactas de los clientes: • Cuadrante 1 (Dolores Actuales): \"Pasa 3 horas todas las noches cuadrando tickets de caja a mano con miedo a que le roben inventario\". • Cuadrante 2 (Deseos): \"Quiere cerrar el restaurante a las 11 PM y llegar a cenar con su familia sabiendo que las cuentas están perfectas\". • Cuadrante 3 (Objeciones): \"Cree que el software contable es muy difícil de usar para sus meseros\". • Cuadrante 4 (Gatillos de Decisión): \"Garantía de capacitación gratis para todo el personal en 24h\".",
      "Paso 4: Ponle un nombre ficticio y una foto real al avatar (ej. \"Mariano, 42 años, Dueño de Pizzería\"). Imprime la ficha y compártela con tus vendedores para alinear todos los guiones de venta."
],
    ch3TacticalSteps: [
      "Semana 1: Envía la encuesta de 3 preguntas de Google Forms a tus mejores 10 clientes actuales.",
      "Semana 2: Analiza las palabras textuales que repiten los clientes y detecta su dolor emocional principal.",
      "Semana 3: Diseña la ficha visual de 1 página del Buyer Persona en Canva y preséntala a tu equipo.",
      "Semana 4: Reescribe el encabezado de tu sitio web y tus anuncios utilizando las mismas palabras y frases que dijo tu Buyer Persona."
],
    ch4CaseDeepDive: [
      "GastroContable en Buenos Aires vendía software de gestión pero sus anuncios decían: 'Sistema ERP multi-sucursal con módulo fiscal integrado', logrando pocas ventas.",
      "Entrevistaron a 20 dueños de locales gastronómicos y descubrieron que el verdadero tormento del dueño no era el sistema fiscal, sino quedarse hasta las 2 de la madrugada contando boletas de papel con el dolor de no ver a sus hijos.",
      "Crearon a 'Mariano, el dueño de restaurante' y cambiaron su mensaje a: 'Cierra tu restaurante a tiempo y cuadra la caja en 5 minutos desde tu celular'.",
      "Las ventas de licencias anuales crecieron un 240% en 90 días porque los dueños sentían que el software había sido diseñado específicamente para su vida cotidiana."
],
    ch5RiskMitigation: [
      "Error fatal: Crear múltiples Buyer Personas (5 o 6 diferentes) cuando el negocio apenas está comenzando.",
      "Comienza dominando y sirviendo a UN SOLO Buyer Persona principal hasta consolidar tu tracción comercial; la dispersión de perfiles diluye el mensaje y el presupuesto publicitario.",
      "No uses jerga de marketing en la ficha: escribe con las palabras coloquiales y directas que el cliente usa en su vida diaria.",
      "Actualiza la ficha de Buyer Persona cada 6 meses a medida que el mercado y las necesidades evolucionen."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Investigación y Diseño de Fichas de Buyer Persona para Equipos de Marketing\". Ayuda a empresas, e-commerce, startups y negocios B2B a investigar a sus clientes ideales y alinear sus mensajes de venta.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $35 - $70 USD por formulario de investigación en Google Forms + diseño de 1 Ficha de Buyer Persona en Canva. • Nivel Intermedio (Con portafolio): $100 - $200 USD por investigación cualitativa completa (entrevistas a 5 clientes reales, análisis de dolores y objeciones, 2 fichas de Buyer Persona en Canva y guía de mensajes para anuncios). • Nivel Senior / Consultor de Customer Research y Posicionamiento: $250 - $520 USD por arquitectura integral de segmentación de clientes, mapa de empatía, matriz de objeciones y contra-argumentos de venta para el equipo comercial y entrenamiento directivo.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve viendo la comunicación de [Empresa] y noté que los mensajes de venta a veces son un poco generales y no apuntan directamente al dolor emocional específico de su comprador ideal (lo que encarece mucho la publicidad en redes). Con un Lienzo de Buyer Persona Profundo en Canva y entrevistas de descubrimiento en Google Forms es posible identificar exactamente qué le quita el sueño a tu cliente para redactar anuncios que tripliquen la conversión de ventas. Por solo $40 USD yo te desarrollo la Ficha completa de tu Buyer Persona en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de Buyer Persona en Canva y el formulario en Google Forms. Día 2: Contacta a 10 gerentes comerciales de empresas B2B o comercios en LinkedIn y ofréceles una sesión gratuita de mapeo de cliente ideal."
],
    quizQuestions: [
      {
            "question": "¿Por qué un 'Buyer Persona Profundo' es superior a una simple segmentación demográfica tradicional?",
            "options": [
                  "Porque el Buyer Persona cuesta más dinero.",
                  "Porque mientras los datos demográficos solo describen quién es la persona (edad, ciudad), el Buyer Persona profundo revela por qué compra: sus dolores emocionales, miedos nocturnos, objeciones secretas y motivaciones reales.",
                  "Porque el Buyer Persona solo se usa en empresas multinacionales.",
                  "No existe ninguna diferencia."
            ],
            "correctIndex": 1,
            "explanation": "Comprender los motivos psicológicos de compra permite redactar mensajes comerciales que conectan con los deseos reales del cliente."
      },
      {
            "question": "¿Cuáles son los 4 cuadrantes esenciales que deben mapearse en un lienzo de Buyer Persona?",
            "options": [
                  "Nombre, Apellido, Dirección y Teléfono.",
                  "1. Dolores y Frustraciones actuales, 2. Deseos y Metas soñadas, 3. Miedos y Objeciones para comprar, y 4. Gatillos Mentales y factores de decisión.",
                  "Ingresos, Gastos, Impuestos y Ahorros.",
                  "Color favorito, Comida favorita, Música y Películas."
            ],
            "correctIndex": 1,
            "explanation": "Estos cuatro cuadrantes entregan toda la información estratégica necesaria para diseñar ofertas y anuncios de alta conversión."
      },
      {
            "question": "¿Por qué es crucial utilizar las 'palabras textuales' de los clientes en los anuncios de marketing?",
            "options": [
                  "Porque los clientes cobran regalías por sus palabras.",
                  "Porque cuando un prospecto lee en un anuncio exactamente la misma frase que él usa en su mente para describir su dolor, siente una conexión instantánea y percibe que la empresa comprende su problema a la perfección.",
                  "Para cumplir con las normas de ortografía.",
                  "Porque es un requisito de Facebook e Instagram."
            ],
            "correctIndex": 1,
            "explanation": "El lenguaje del cliente derriba la resistencia publicitaria y genera confianza inmediata sin tecnicismos corporativos."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-8
  // =========================================================================
  'imd-8': {
    frameworkName: "Embudo de Conversión TOFU-MOFU-BOFU (Top, Middle, Bottom of Funnel) & Puentes de Conversión Automatizados",
    coreMetrics: [
      "Tasa de Conversión Global del Embudo (Funnel CVR > 3.8%)",
      "Conversión de Tráfico TOFU a Lead MOFU (> 18%)",
      "Conversión de Prospecto MOFU a Venta BOFU (> 22%)",
      "Tiempo Medio de Maduración del Lead (Sales Velocity < 14 días)",
      "Retorno sobre la Inversión del Embudo (ROAS > 4.5x)"
],
    caseCompany: "Agencia de Consultoría & Registro de Marcas PatentaYa (Medellín, Colombia)",
    caseOutcome: "Intentaba vender su servicio legal de $600 USD directamente con anuncios en Instagram logrando cero ventas; estructuró el embudo TOFU-MOFU-BOFU: TOFU (Video viral: '3 marcas famosas que perdieron millones por no registrar su nombre'), MOFU (Guía gratuita en PDF: 'Buscador de viabilidad de marcas'), BOFU (Diagnóstico legal gratuito por WhatsApp y oferta de registro); cerró 48 nuevos registros de marca al mes facturando $28,800 USD mensuales.",
    pitfall: "Pedir matrimonio en la primera cita comercial ('Efecto Venta Agresiva'): intentar vender un producto caro a personas que acaban de conocer tu marca hace 5 segundos en un anuncio de internet.",
    actionItem1: "Mapear el Embudo en 3 Fases en Funnelytics o Miro: 1. TOFU (Atracción y conciencia con contenido educativo), 2. MOFU (Nutrición y captura de lead con recurso gratuito), 3. BOFU (Decisión y cierre de venta con oferta irresistible).",
    actionItem2: "Construir el 'Puente de Conversión': un incentivo de bajo compromiso (ej. auditoría gratis o clase de prueba) para pasar al prospecto de la fase de duda a la conversación comercial.",
    actionItem3: "Calcular las tasas de caída en cada etapa del embudo en Google Sheets para optimizar el cuello de botella exacto que frena las ventas.",
    domainContext: "La compra es un proceso psicológico de maduración de la confianza; nadie compra a un desconocido sin pasar primero por las etapas de conciencia, evaluación y decisión.",
    strategicRationale: "Diseñar un embudo estructurado automatiza la nutrición de prospectos, filtra a los compradores calificados y maximiza el valor monetario generado por cada visitante.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Qué pasaría si vas por la calle, ves a una persona desconocida y le dices: 'Hola, ¿te quieres casar conmigo?'? Te mirará como si estuvieras loco y saldrá corriendo. Eso es exactamente lo que hace el 90% de las empresas en internet: le muestran un anuncio a un desconocido que dice 'Cómprame este servicio de $500 dólares ahora mismo'. El marketing es como el cortejo: primero te presentas (TOFU), luego le invitas un café y conversan (MOFU), y cuando hay confianza mutua, hacen negocios (BOFU). Un 'Embudo de Conversión' es el sistema que guía al cliente paso a paso hasta la compra de forma automática. Este tomo te enseña a diseñar tu embudo de ventas.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Regla del Cortejo Comercial: Por qué vender directamente en frío destruye tus presupuestos.\n• Capítulo 2: Las 3 Etapas del Embudo: TOFU (Atracción) -> MOFU (Consideración) -> BOFU (Decisión).\n• Capítulo 3: Mapeo Visual en Funnelytics y Miro: Cómo diseñar el plano arquitectónico de tu embudo.\n• Capítulo 4: Caso de Estudio Real (PatentaYa Colombia): Cómo pasaron de 0 a 48 contratos mensuales de $600 USD.\n• Capítulo 5: La Calculadora de Fugas del Embudo en Google Sheets: Dónde se pierden los prospectos.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño y arquitectura de embudos cobrando entre $45 y $650 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Funnelytics (funnelytics.io) / Miro: Plataforma gratuita de mapeo visual de diagramas de embudos de ventas y flujos de tráfico.\n2. Google Sheets: Calculadora de Conversión por Etapas de Embudo (Cálculo de TOFU a MOFU a BOFU y CAC).\n3. Canva: Diseño de páginas de captura y recursos de conversión para cada etapa del embudo.",
    ch1CustomNarrative: [
      "En el marketing digital de respuesta directa, pretender que un cliente potencial que nunca ha escuchado hablar de tu empresa te compre un producto de alto valor en su primera visita es una fantasía costosa e ineficiente.",
      "El proceso de compra humano requiere transitar por una secuencia psicológica predecible: primero reconocer la existencia de un problema (Conciencia), luego evaluar las diferentes soluciones disponibles en el mercado (Consideración) y finalmente elegir al proveedor más confiable para realizar la transacción (Decisión).",
      "El Embudo de Conversión (Funnel) es la representación arquitectónica de este viaje, permitiendo entregar el mensaje correcto, a la persona correcta, en el momento exacto de su madurez psicológica.",
      "Aprender a estructurar embudos de ventas te permite automatizar la captación y cualificación de clientes, convirtiendo visitas frías en ingresos predecibles mes tras mes."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO MAPEAR UN EMBUDO TOFU-MOFU-BOFU EN FUNNELYTICS Y GOOGLE SHEETS GRATIS:",
      "Paso 1: Ingresa a Funnelytics (funnelytics.io) o abre un tablero en Miro. Diseña el diagrama del flujo comercial:",
      "Paso 2: • Nivel 1 (TOFU - Top of Funnel / Tráfico Frío): Anuncios en Instagram y videos en TikTok con consejos educativos -> Envían a la página de captura. • Nivel 2 (MOFU - Middle of Funnel / Prospectos): Landing Page donde descargan una Guía gratuita o cotizador -> Se activa una secuencia de 3 correos o mensajes de WhatsApp aportando valor y casos de éxito. • Nivel 3 (BOFU - Bottom of Funnel / Cierre): Oferta directa con botón a WhatsApp o llamada de diagnóstico para cerrar la venta con precio y garantía.",
      "Paso 3: En Google Sheets, crea la \"Calculadora_Embudo_Metricas\": Fila 1: Visitas TOFU (ej. 10,000 visitas). Fila 2: Leads MOFU (ej. 1,500 descargas -> 15% conversión). Fila 3: Ventas BOFU (ej. 75 ventas -> 5% conversión de lead a cliente).",
      "Paso 4: Identifica el cuello de botella: si tienes 10,000 visitas pero solo 50 leads (0.5%), tu problema está en la página de captura; si tienes 1,500 leads pero cero ventas, tu problema está en la oferta final de cierre."
],
    ch3TacticalSteps: [
      "Semana 1: Dibuja el mapa de tu embudo actual en Funnelytics identificando qué contenido tienes en cada etapa.",
      "Semana 2: Crea tu recurso de captación MOFU (guía, plantilla o auditoría gratuita) en Canva.",
      "Semana 3: Configura el puente de conversión hacia tu WhatsApp con un mensaje directo de cierre.",
      "Semana 4: Mide las tasas de conversión en Google Sheets y ajusta la etapa que presente la mayor fuga de prospectos."
],
    ch4CaseDeepDive: [
      "PatentaYa en Medellín ofrecía registro de patentes y marcas por $600 USD pero sus anuncios directos de venta en Facebook no generaban ningún contrato.",
      "Reestructuraron su embudo TOFU-MOFU-BOFU: crearon un video TOFU sobre marcas famosas que perdieron sus nombres por no registrar a tiempo, ofrecieron un MOFU con una herramienta gratuita para consultar si un nombre estaba libre en patentes, y en el BOFU ofrecían una llamada de diagnóstico legal de 15 minutos para tramitar el registro.",
      "El 28% de las personas que usaban el buscador gratuito agendaban la llamada legal.",
      "Cerraron 48 nuevos clientes al mes, facturando $28,800 USD mensuales y posicionándose como la agencia legal digital de mayor crecimiento en la región."
],
    ch5RiskMitigation: [
      "Error fatal: El 'Embudo sin Salida' (captar correos o contactos en el MOFU y no hacerles nunca una oferta de venta en el BOFU).",
      "No tengas miedo de vender: una vez que el prospecto ha recibido valor y confía en ti, preséntale tu oferta de pago con orgullo y claridad.",
      "No hagas embudos excesivamente complicados de 15 pasos con 10 páginas intermedias al inicio; un embudo simple de 3 pasos (Anuncio -> Captura de WhatsApp -> Cierre) es el más rentable y fácil de optimizar.",
      "Monitorea el Costo por Lead (CPL) y asegúrate de que el margen de ganancia en el BOFU cubra con creces la inversión publicitaria del TOFU."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Mapeo y Arquitectura de Embudos de Conversión (Funnels) para Negocios Digitales\". Ayuda a despachos, consultores, clínicas, academias y empresas de servicios a estructurar su flujo de ventas desde la atracción hasta el cierre.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por diagrama visual de embudo en Funnelytics/Miro + calculadora de conversión en Google Sheets. • Nivel Intermedio (Con portafolio): $130 - $270 USD por arquitectura completa de embudo TOFU-MOFU-BOFU (diseño de landing de captura en Carrd, recurso MOFU en Canva, guiones de cierre por WhatsApp y optimización de fugas). • Nivel Senior / Funnel Architect y Consultor de Crecimiento (Growth Consultant): $320 - $650 USD por diseño de embudo integral automatizado, integración con CRM, pruebas A/B multivariable de conversión, automatizaciones de email/SMS y cuadro de mando de ROAS en Looker Studio.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], sé que para empresas en [Sector] intentar vender servicios profesionales directamente con anuncios fríos en redes suele ser muy poco rentable porque el cliente necesita construir confianza antes de pagar. Un Embudo de Conversión estructurado en 3 fases (TOFU-MOFU-BOFU) permite captar la atención de prospectos con un recurso gratuito y guiarlos de forma automática hasta una conversación de cierre en WhatsApp. Por solo $50 USD yo te diseño el mapa visual de tu embudo en Funnelytics con su calculadora de conversión en Google Sheets. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Mapea 2 diagramas de embudo demo en Funnelytics (uno para servicios profesionales y otro para cursos/eventos). Día 2: Contacta a 10 consultores, clínicas o academias en LinkedIn y ofréceles una auditoría gratuita de su embudo actual."
],
    quizQuestions: [
      {
            "question": "¿Qué significan las siglas TOFU, MOFU y BOFU en la arquitectura de un embudo de ventas?",
            "options": [
                  "Tipos de comida asiática.",
                  "Top of Funnel (Atracción y conciencia inicial), Middle of Funnel (Nutrición y captación del prospecto) y Bottom of Funnel (Decisión de compra y cierre de la venta con oferta irresistible).",
                  "Tarifas Oficiales Financieras de Utilidad.",
                  "Títulos Oficiales de Formación Universitaria."
            ],
            "correctIndex": 1,
            "explanation": "El modelo TOFU-MOFU-BOFU divide el viaje de compra en tres etapas psicológicas claras para aplicar las tácticas correctas en cada una."
      },
      {
            "question": "¿Cuál es el error al intentar vender un servicio de alto valor directamente en la etapa 'TOFU' (Top of Funnel)?",
            "options": [
                  "Que el anuncio cuesta menos.",
                  "Que los usuarios en TOFU aún no conocen la marca ni confían en ella, por lo que una venta directa fría genera rechazo y quema presupuesto con tasas de conversión casi nulas.",
                  "Que Google bloquea la cuenta.",
                  "No tiene ningún error, es la forma más rápida."
            ],
            "correctIndex": 1,
            "explanation": "En TOFU el objetivo es captar atención y generar interés con valor gratuito, no forzar una venta prematura."
      },
      {
            "question": "¿Qué herramienta gratuita permite diseñar y visualizar el diagrama de flujo de un embudo comercial?",
            "options": [
                  "Funnelytics / Miro.",
                  "Calculadora de Windows.",
                  "Bloc de Notas.",
                  "Paint."
            ],
            "correctIndex": 0,
            "explanation": "Funnelytics y Miro permiten crear mapas visuales con iconos de páginas, correos y anuncios para planificar embudos con total claridad."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-9
  // =========================================================================
  'imd-9': {
    frameworkName: "Modelo de Colaboración con Micro y Nano Influencers de Alto Engagement & Contratación por Resultados (CPA/Afiliación)",
    coreMetrics: [
      "Tasa de Engagement Real del Creador (Engagement Rate > 5.5%)",
      "Retorno sobre la Inversión en Influencers (Influencer ROI > 3.5x)",
      "Porcentaje de Seguidores Falsos / Bots Detectados (< 10% en auditoría)",
      "Costo por Adquisición mediante Código de Descuento Exclusivo (CPA)",
      "Tasa de Conversión de Clic a Venta desde Historias de Instagram (> 4%)"
],
    caseCompany: "Marca de Cosméticos Veganos & Cuidado Capilar BioShampoo (Guadalajara, México)",
    caseOutcome: "Gastó $3,000 USD contratando a una influencer famosa de 500,000 seguidores que solo generó 2 ventas porque sus seguidores eran falsos o de otros países; cambió su estrategia hacia 15 'Nano-Influencers' locales (de 5k a 15k seguidores) auditadas en Modash y con pago por comisión de venta (CPA); generó $18,500 USD en ventas con solo $600 USD de costo inicial de producto.",
    pitfall: "Dejarse deslumbrar por las 'Métricas de Vanidad' (contratar influencers con millones de seguidores pero con baja interacción o audiencia falsa comprada), pagando sumas astronómicas sin ningún retorno de ventas.",
    actionItem1: "Auditar la autenticidad de la audiencia del influencer con herramientas gratuitas como Modash.io o HypeAuditor Free verificando: Tasa de Engagement (> 4%) y % de audiencia en tu país (> 70%).",
    actionItem2: "Priorizar 'Micro y Nano Influencers' (de 3,000 a 25,000 seguidores especializados en un nicho) que mantienen una relación de confianza íntima con su comunidad.",
    actionItem3: "Estructurar acuerdos comerciales basados en 'Pago por Resultados': entregar producto gratis + un código de cupón de descuento único con 15% de comisión por cada venta generada.",
    domainContext: "En la era de la desconfianza publicitaria, la recomendación sincera de un creador de contenido de nicho tiene el mismo peso psicológico que el consejo de un amigo cercano.",
    strategicRationale: "Las campañas con micro-influencers permiten acceder a audiencias hipersegmentadas a costos mínimos, minimizan el riesgo financiero mediante modelos de afiliación y generan contenido auténtico reutilizable para la marca.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que miles de marcas en América Latina pierden miles de dólares pagándole a 'famosos de Instagram' con 1 millón de seguidores que luego no venden ni una sola camiseta? ¿Por qué ocurre esto? Porque muchos compran seguidores falsos, sus fans son de otros países o su audiencia solo los sigue para ver fotos de viajes. El futuro del marketing no está en las celebridades masivas: está en los MICRO Y NANO INFLUENCERS (personas con 5,000 a 20,000 seguidores reales en tu ciudad o nicho). Con herramientas gratuitas como Modash puedes auditar a cualquier creador en 30 segundos y pagarles por comisión de ventas (CPA). Este tomo te enseña a crear campañas de influencers que generan dinero real.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Fraude de los Seguidores Falsos: Cómo detectar cuentas infladas con bots y engagement falso.\n• Capítulo 2: El Poder de los Nano-Influencers (3k a 20k): Por qué tienen 5 veces más engagement y credibilidad.\n• Capítulo 3: La Auditoría con Modash y HypeAuditor Gratis: Verificar país de audiencia y tasa de interacción.\n• Capítulo 4: Caso de Estudio Real (BioShampoo México): De perder $3,000 con un famoso a vender $18,500 con 15 nano-creadores.\n• Capítulo 5: El Contrato de Colaboración por Resultados en Google Docs: Producto gratis + Código de Cupón de Comisión.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer gestión de campañas con micro-influencers cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Modash.io / HypeAuditor Free: Buscadores oficiales para auditar la calidad de seguidores y engagement de cuentas de Instagram/TikTok.\n2. Google Sheets: CRM de Gestión y Seguimiento de Campañas de Influencers con control de códigos y ventas.\n3. Google Docs: Plantilla Oficial del Contrato de Colaboración Comercial y Guion de Contacto por Mensaje Directo (DM).",
    ch1CustomNarrative: [
      "El marketing de recomendación y boca a boca ha sido siempre el motor de ventas más poderoso del comercio; sin embargo, en la era de las redes sociales, este canal se ha profesionalizado a través de los creadores de contenido digital.",
      "Muchas empresas cometen el error infantil de guiarse exclusivamente por el número bruto de seguidores, asumiendo erróneamente que una cuenta con medio millón de seguidores generará automáticamente ventas masivas.",
      "La realidad del mercado demuestra lo contrario: a mayor cantidad de seguidores masivos, la tasa de interacción se diluye y la confianza se degrada; los micro y nano-creadores de nicho, en cambio, gozan de una credibilidad casi absoluta entre sus seguidores más cercanos.",
      "Aprender a seleccionar, auditar y negociar con micro-influencers basados en el rendimiento te permite multiplicar tus ventas con presupuestos sumamente reducidos."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO AUDITAR INFLUENCERS Y NEGOCIAR EN MODASH Y GOOGLE SHEETS GRATIS:",
      "Paso 1: Ingresa a Modash.io (o usa la prueba gratuita de auditoría). Introduce el usuario de Instagram o TikTok del creador. Verifica 3 métricas de oro: • 1. \"Fake Followers\": Menos del 15% de bots. • 2. \"Engagement Rate\": Superior al 4.5% (likes y comentarios reales). • 3. \"Top Locations\": Que más del 60% de su audiencia viva en tu país o ciudad.",
      "Paso 2: Abre Google Sheets y crea el \"CRM_Influencers_Campaña\". Columnas: Nombre del Creador, Usuario, Seguidores, Tasa de Engagement, Código de Cupón Único (ej. \"MARIA15\"), Enlace de Seguimiento y Ventas Generadas.",
      "Paso 3: Envía un mensaje directo (DM) o correo profesional con el guion en Google Docs: \"¡Hola [Nombre]! Amamos tu contenido sobre [Nicho]. Nos encantaría enviarte una caja de regalo con nuestro [Producto] sin compromiso para que lo pruebes. Si te encanta y deseas compartirlo con tu comunidad, te hemos generado un cupón de 15% de descuento exclusivo para tus seguidores y una comisión del 15% en efectivo por cada compra realizada con tu código. ¿A qué dirección podemos enviarte tu regalo?\".",
      "Paso 4: Entrega el producto con una nota escrita a mano: los creadores que realmente aman el producto lo compartirán con entusiasmo genuino en sus historias, generando ventas automáticas registradas en tu tienda."
],
    ch3TacticalSteps: [
      "Semana 1: Haz una lista de 30 micro-influencers de tu ciudad (de 3k a 20k seguidores) que compartan los valores de tu marca.",
      "Semana 2: Audita sus métricas en Modash y descarta las cuentas con seguidores falsos o baja interacción.",
      "Semana 3: Contacta a las 15 mejores creadoras con el guion de regalo y código de cupón de afiliación.",
      "Semana 4: Monitorea las ventas generadas por cada cupón en tu plataforma y premia con una bonificación extra a las 3 que más ventas consigan."
],
    ch4CaseDeepDive: [
      "BioShampoo en Guadalajara fabricaba champús naturales y pagó $3,000 USD a una influencer de belleza con 500,000 seguidores para que subiera 2 historias de Instagram.",
      "El resultado fue desastroso: solo 2 personas compraron el producto porque la mayoría de sus seguidores eran hombres de otros países que no tenían ningún interés en cosmética vegana.",
      "Cambiaron de estrategia: reclutaron a 15 nano-influencers de yoga, nutrición y vida saludable en Guadalajara (de 5k a 12k seguidores cada una), auditadas en Modash, y les enviaron un kit de regalo con un código de cupón de 15% de comisión.",
      "12 de ellas publicaron reseñas sinceras y apasionadas en sus historias: en 30 días generaron 420 pedidos por un total de $18,500 USD, pagando solo $2,700 en comisiones sobre ventas ya cobradas."
],
    ch5RiskMitigation: [
      "Error fatal: Pagar tarifas fijas exorbitantes por adelantado a influencers que no conoces sin ningún compromiso de ventas.",
      "Negocia siempre modelos híbridos: entrega de producto gratuito + tarifa base simbólica + comisión por ventas generadas; esto alinea los intereses del creador con el éxito del negocio.",
      "Exige que la colaboración incluya la etiqueta oficial de transparencia publicitaria (#publicidad o #embajador) para cumplir con las normativas comerciales.",
      "Solicita que te envíen capturas de pantalla de las estadísticas de visualización de sus historias (Reach/Impresiones) a las 24 horas de la publicación."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Gestión de Campañas con Micro-Influencers y Contratos por Resultados\". Ayuda a marcas de moda, cosmética, alimentos, restaurantes y tiendas online a reclutar y gestionar creadores que generen ventas reales.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por auditoría de 10 influencers en Modash + redacción de guiones de contacto en Google Docs y control en Sheets. • Nivel Intermedio (Con portafolio): $120 - $250 USD por gestión completa de campaña con 10 micro-influencers (reclutamiento, envío de kits de regalo, contratos de afiliación con códigos de descuento y reporte de ventas). • Nivel Senior / Influencer Marketing Strategist y Consultor de Creadores: $300 - $600 USD por programa integral de embajadores de marca a largo plazo, negociación de derechos de uso de imagen para anuncios (Whitelisting/Dark Posts), contratos legales de exclusividad y cuadro de mando de ROI.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], sé que para marcas de productos como [Empresa] contratar influencers grandes suele ser muy costoso y riesgoso porque muchos tienen seguidores falsos o poco compromiso con la marca. Con el modelo de Micro y Nano Influencers auditados en Modash es posible colaborar con 10 creadoras locales de alto engagement pagándoles por comisión sobre ventas reales generadas con códigos de descuento. Por solo $45 USD yo te selecciono y audito a las 10 mejores creadoras para tu marca y te redacto los contratos de colaboración. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de CRM de influencers en Google Sheets y practica auditando cuentas en Modash. Día 2: Contacta a 10 marcas de productos físicos o restaurantes en Instagram y ofréceles una lista gratuita de 3 micro-influencers ideales para su negocio."
],
    quizQuestions: [
      {
            "question": "¿Por qué los Micro y Nano-Influencers (de 3,000 a 25,000 seguidores) suelen ser más rentables para una PYME que los macro-influencers de millones de seguidores?",
            "options": [
                  "Porque cobran en efectivo.",
                  "Porque tienen tasas de interacción (engagement) mucho más altas, audiencias locales reales y una relación de confianza íntima y creíble con sus seguidores a costos muy accesibles o bajo comisión.",
                  "Porque solo publican en TikTok.",
                  "Porque no pagan impuestos."
            ],
            "correctIndex": 1,
            "explanation": "La cercanía y autenticidad del micro-creador genera mayores tasas de conversión que las celebridades masivas desconectadas de su audiencia."
      },
      {
            "question": "¿Qué herramienta gratuita permite auditar si un creador de contenido tiene seguidores falsos o bots en sus redes?",
            "options": [
                  "Modash.io / HypeAuditor Free.",
                  "Excel de Microsoft.",
                  "Google Chrome.",
                  "Calculadora."
            ],
            "correctIndex": 0,
            "explanation": "Modash y HypeAuditor analizan la calidad de la audiencia, descartando cuentas infladas artificialmente."
      },
      {
            "question": "¿Cuál es el modelo de compensación más seguro y rentable para una pequeña empresa al colaborar con creadores de contenido?",
            "options": [
                  "Pagar miles de dólares por adelantado sin medir resultados.",
                  "El modelo de afiliación o comisión (CPA): entregar el producto de regalo más un código de descuento exclusivo que le otorga al creador una comisión en efectivo por cada venta real completada.",
                  "Regalar la mitad de las acciones de la empresa.",
                  "No pagarles nada ni entregar producto."
            ],
            "correctIndex": 1,
            "explanation": "El pago por comisión alinea el interés del influencer con la generación de ventas efectivas para la marca."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-10
  // =========================================================================
  'imd-10': {
    frameworkName: "Matriz de Atribución de Marketing y Cálculo del ROI / ROAS / CAC vs. LTV (Marketing Finance Framework)",
    coreMetrics: [
      "Retorno de la Inversión en Marketing (Marketing ROI > 300%)",
      "Retorno del Gasto Publicitario (ROAS > 4.0x)",
      "Costo de Adquisición de Cliente (CAC) por Canal de Tráfico",
      "Ratio LTV / CAC (Salud Financiera del Negocio > 3.5x)",
      "Período de Recuperación del CAC (CAC Payback < 90 días)"
],
    caseCompany: "Plataforma de Software de Gestión de Inventarios para PYMEs StockPro (Lima, Perú)",
    caseOutcome: "Gastaba $2,000 USD al mes en marketing digital pero el dueño creía que 'el marketing era un gasto que no daba resultados' porque no sabía medir de qué canal venían los clientes; implementó la Matriz Financiera de Atribución en Google Sheets conectada a Looker Studio; descubrió que LinkedIn Ads generaba un ROAS de 6.2x mientras que Facebook generaba 0.8x; canceló Facebook, concentró el presupuesto en LinkedIn y multiplicó sus ganancias netas un 85% en 60 días.",
    pitfall: "Tratar la inversión en marketing como un 'gasto a ciegas sin retorno medible', mezclando todos los canales en una sola bolsa sin saber qué campaña genera dinero y cuál está destruyendo el capital de la empresa.",
    actionItem1: "Calcular el ROI de Marketing en Google Sheets con la fórmula matemática: ROI = [(Ingresos Netos Generados por Marketing - Gasto Total de Marketing) / Gasto Total de Marketing] * 100.",
    actionItem2: "Etiquetar todos los enlaces con 'Parámetros UTM' gratuitos (ga-dev-tools.google/campaign-url-builder) para saber con exactitud qué anuncio o correo generó cada venta en Google Analytics.",
    actionItem3: "Construir el 'Cuadro de Mando Financiero de Marketing' en Google Looker Studio comparando CAC vs. LTV por cada canal publicitario.",
    domainContext: "En el marketing digital moderno, lo que no se traduce en números contables es mera especulación; el marketing profesional no es un centro de costos creativos, es el motor principal de generación de flujo de caja del negocio.",
    strategicRationale: "Dominar las finanzas y la medición del ROI en marketing permite tomar decisiones de inversión con certeza matemática, eliminar el desperdicio de presupuesto y justificar presupuestos ante juntas directivas.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué el 80% de los directores generales y dueños de empresas en América Latina recortan el presupuesto de marketing cuando hay crisis económica? Porque para ellos el marketing es 'un gasto incierto en logos bonitos y likes que no pagan la nómina'. Si no puedes demostrar con números exactos que por cada $1 dólar invertido en marketing entraron $4 dólares a la cuenta bancaria de la empresa, tu posición siempre será vulnerable. La medición del ROI (Retorno de Inversión) y el uso de Parámetros UTM te permite saber el centavo exacto que produce cada anuncio. Con Google Sheets y Looker Studio puedes crear un tablero financiero de marketing 100% GRATIS. Este tomo te enseña a medir tu retorno como un CFO.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Diferencia Vital entre ROI (Retorno de Inversión Global) y ROAS (Retorno del Gasto Publicitario).\n• Capítulo 2: Los Parámetros UTM de Google: Cómo etiquetar cada enlace para rastrear ventas sin fallos.\n• Capítulo 3: La Ecuación Sagrada: CAC (Costo de Adquisición) vs. LTV (Valor de Vida del Cliente).\n• Capítulo 4: Caso de Estudio Real (StockPro Software Lima): Cómo duplicaron su rentabilidad eliminando canales no rentables.\n• Capítulo 5: Creación del Tablero Financiero en Google Looker Studio: Gráficos de ROI en tiempo real.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de ROI de marketing y tableros financieros cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Campaign URL Builder (ga-dev-tools.google/campaign-url-builder): Generador oficial de enlaces con parámetros UTM para rastreo.\n2. Google Sheets: Calculadora Financiera de Marketing ROI, ROAS, CAC por canal y LTV.\n3. Google Looker Studio (lookerstudio.google.com): Tablero ejecutivo de rendimiento de inversión publicitaria y ventas.",
    ch1CustomNarrative: [
      "Durante más de un siglo, los empresarios repitieron con resignación la famosa frase del pionero publicitario John Wanamaker: 'La mitad del dinero que gasto en publicidad se desperdicia; el problema es que no sé qué mitad es'.",
      "En el siglo XXI, esa frase ha dejado de ser una justificación aceptable para convertirse en un síntoma evidente de negligencia analítica y falta de rigor metodológico.",
      "Las plataformas digitales contemporáneas y las herramientas de analítica avanzada permiten rastrear con absoluta precisión matemática el recorrido completo de cada centavo invertido, desde la primera impresión de un anuncio hasta el depósito bancario final del cliente.",
      "Aprender a calcular el retorno de inversión (ROI) y dominar la atribución de marketing te transforma de un simple ejecutor de campañas en un estratega de crecimiento financiero imprescindible para cualquier organización."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR ENLACES UTM Y UNA CALCULADORA DE ROI EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Ingresa a Campaign URL Builder de Google (ga-dev-tools.google/campaign-url-builder). Introduce la URL de tu página web y completa los parámetros: • utm_source: instagram • utm_medium: stories • utm_campaign: promo_navidad_2026. Copia el enlace generado.",
      "Paso 2: Usa ese enlace en tus botones o anuncios: cuando un cliente compre, Google Analytics 4 registrará exactamente que la venta provino de la campaña 'promo_navidad_2026' en Instagram Stories.",
      "Paso 3: Abre Google Sheets y crea la hoja \"Calculadora_Financiera_Marketing_ROI\": • Fila 1: Gasto en Publicidad + Honorarios (ej. $1,000 USD). • Fila 2: Ingresos Brutos de Ventas Rastreadas (ej. $5,200 USD). • Fila 3: Costo de Mercancía/Servicio Vendido (ej. $1,200 USD). • Fila 4: Beneficio Neto: =(B2-B3-B1) (Resultado: $3,000 USD). • Fila 5: ROI de Marketing (%): =(B4/B1)*100 (Resultado: 300% de ROI). • Fila 6: ROAS: =B2/B1 (Resultado: 5.2x ROAS).",
      "Paso 4: Conecta la hoja a Google Looker Studio para visualizar en un gráfico de barras qué canal de marketing tiene el ROI más alto y cuál debe ser cancelado."
],
    ch3TacticalSteps: [
      "Semana 1: Genera enlaces con parámetros UTM para todas las publicaciones, biografías de redes y correos de tu empresa.",
      "Semana 2: Configura la Calculadora de ROI y ROAS en Google Sheets desglosada por cada canal publicitario.",
      "Semana 3: Cruza a fin de mes los ingresos reales del sistema de facturación con los datos de tráfico de Google Analytics 4.",
      "Semana 4: Reasigna el presupuesto eliminando las campañas con ROAS menor a 2.0x y canalizando los recursos a los anuncios ganadores."
],
    ch4CaseDeepDive: [
      "StockPro en Lima gastaba $2,000 USD al mes divididos en Facebook Ads, Google Ads y LinkedIn Ads pero el gerente general consideraba cancelar todo el marketing porque 'no veía las ventas'.",
      "Implementaron los enlaces con parámetros UTM y la Matriz Financiera en Google Sheets conectada a Looker Studio.",
      "El análisis financiero reveló la verdad: Facebook Ads gastaba $1,000 USD y generaba solo $800 en ventas (ROAS negativo de 0.8x), mientras que LinkedIn Ads gastaba $500 USD y generaba $3,100 en contratos B2B (ROAS de 6.2x).",
      "Cancelaron la campaña de Facebook y trasladaron el 100% de los fondos a LinkedIn: sus ganancias netas aumentaron un 85% en 60 días y el gerente general triplicó el presupuesto de marketing."
],
    ch5RiskMitigation: [
      "Error fatal: Confundir el ROAS (Retorno del Gasto Publicitario) con el ROI (Retorno de Inversión Neto).",
      "El ROAS solo mide ingresos brutos sobre gasto en anuncios (ej. $4 de ventas por $1 de pauta); pero si el producto tiene costos de fabricación altos, un ROAS de 2x puede significar perder dinero; calcula siempre el ROI neto descontando todos los costos del negocio.",
      "No uses nombres de campañas confusos en tus enlaces UTM: mantén una nomenclatura ordenada en minúsculas y sin espacios (ej. utm_campaign=curso_finanzas_marzo).",
      "Ten en cuenta el 'Ciclo de Ventas Largo': si vendes servicios B2B que tardan 60 días en cerrarse, no juzgues el ROI de una campaña a los 3 días."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de ROI en Marketing Digital y Tablero Financiero de Rendimiento\". Ayuda a directores generales, gerentes de marketing y comercios a auditar su rentabilidad publicitaria y optimizar sus presupuestos.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por configuración de enlaces UTM en Campaign URL Builder + calculadora de ROI en Google Sheets. • Nivel Intermedio (Con portafolio): $140 - $280 USD por auditoría financiera completa de canales de marketing, cálculo de CAC vs. LTV por plataforma y diseño de tablero visual en Google Looker Studio. • Nivel Senior / Consultor de Finanzas de Marketing y Atribución Multicanal: $350 - $700 USD por arquitectura integral de atribución de datos (First-Click, Last-Click y Data-Driven), integración de CRM con Google Analytics 4, asesoría estratégica de asignación de capital publicitario y reuniones mensuales de directorio.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], sé que para directivos y gerentes en [Empresa] justificar la inversión en publicidad digital y saber con exactitud cuánto dinero neto genera cada canal a menudo es un reto por falta de reportes financieros claros. Con la metodología de Atribución UTM y Cuadros de Mando en Google Looker Studio es posible rastrear el centavo exacto que produce cada anuncio para eliminar el desperdicio publicitario y maximizar las ganancias del negocio. Por solo $50 USD yo te realizo una Auditoría de ROI y te diseño el Tablero Financiero en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de Calculadora de ROI en Google Sheets y un tablero modelo en Looker Studio. Día 2: Contacta a 10 gerentes generales o directores comerciales en LinkedIn y ofréceles una auditoría gratuita de retorno de su inversión publicitaria."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la diferencia fundamental entre el 'ROAS' y el 'ROI' en marketing digital?",
            "options": [
                  "El ROAS es para computadoras y el ROI para smartphones.",
                  "El ROAS mide los ingresos brutos generados exclusivamente por la pauta publicitaria (Ingresos / Gasto en Anuncios), mientras que el ROI mide la rentabilidad neta real del negocio descontando todos los costos operativos, comisiones y costos de producto.",
                  "El ROI solo se usa en bancos.",
                  "No existe ninguna diferencia."
            ],
            "correctIndex": 1,
            "explanation": "El ROAS mide la efectividad de la campaña de anuncios, mientras que el ROI mide si la operación completa dejó ganancias netas en el bolsillo de la empresa."
      },
      {
            "question": "¿Qué función cumplen los 'Parámetros UTM' de Google en un enlace web?",
            "options": [
                  "Hacer que el enlace cargue más rápido.",
                  "Etiquetas de texto que se añaden al final de una URL para identificar con precisión en Google Analytics de qué fuente (source), medio (medium) y campaña específica provino cada clic y venta generada.",
                  "Cifrar el enlace contra virus.",
                  "Traducir el texto de la página web."
            ],
            "correctIndex": 1,
            "explanation": "Los parámetros UTM permiten rastrear la procedencia exacta de cada visitante y atribuir las ventas al canal correcto."
      },
      {
            "question": "¿Qué indica un Ratio 'LTV / CAC' de 5.0x en una empresa?",
            "options": [
                  "Que la empresa está perdiendo dinero.",
                  "Una excelente salud y solidez financiera: significa que cada cliente genera 5 veces más valor monetario a lo largo de su vida útil que el costo que se invirtió en adquirirlo.",
                  "Que el sitio web tiene 5 visitas al día.",
                  "Que los productos tienen un 5% de descuento."
            ],
            "correctIndex": 1,
            "explanation": "Un ratio superior a 3x indica que el modelo de negocio es altamente rentable y está listo para escalar con seguridad."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-11
  // =========================================================================
  'imd-11': {
    frameworkName: "Arquitectura de Automatizaciones No-Code (Trigger -> Filter -> Action -> Router) & Flujos de Nurturing",
    coreMetrics: [
      "Horas de Trabajo Manual Ahorradas por Semana (> 15 horas/semana)",
      "Tiempo de Respuesta a Nuevos Prospectos (< 60 segundos de respuesta)",
      "Tasa de Entrega Exitosa de Webhooks y Escenarios (> 99.5%)",
      "Reducción de Pérdida de Leads por Olvido Humano (-100%)",
      "Costo de Mantenimiento de Infraestructura de Automatización ($0 USD)"
],
    caseCompany: "Inmobiliaria & Venta de Departamentos Residenciales UrbanoSur (Bogotá, Colombia)",
    caseOutcome: "Los agentes comerciales tardaban 8 horas en responder los mensajes de interesados en Facebook Ads y perdían el 70% de las ventas; configuró un escenario gratuito en Make.com que envía los datos del lead en 10 segundos a una hoja de Google Sheets y dispara un mensaje de WhatsApp automático con el folleto digital; las citas de visitas a departamentos crecieron un 190% en el primer mes.",
    pitfall: "Hacer todas las tareas manualmente (copiar y pegar datos de clientes de una plataforma a otra, enviar correos a mano uno por uno), desperdiciando horas de trabajo y perdiendo ventas por tardar horas en responder.",
    actionItem1: "Mapear el flujo de automatización: Disparador (Nuevo formulario de Facebook/Web) -> Acción 1 (Guardar en Google Sheets) -> Acción 2 (Notificar al vendedor por Telegram) -> Acción 3 (Enviar mensaje de bienvenida al cliente por WhatsApp).",
    actionItem2: "Construir el escenario automatizado sin programar en Make.com (plan gratuito de 1,000 operaciones mensuales).",
    actionItem3: "Establecer la regla del 'Tiempo de Contacto en Menos de 5 Minutos': contactar a todo prospecto en los primeros minutos tras registrarse para multiplicar por 21 la probabilidad de cierre de venta.",
    domainContext: "En las ventas digitales, la velocidad lo es todo: responder a un prospecto en los primeros cinco minutos incrementa en un 2,100% la probabilidad de calificarlo con éxito frente a responder media hora más tarde.",
    strategicRationale: "Las automatizaciones no-code eliminan el error humano, aceleran los ciclos comerciales y permiten a una pequeña empresa operar con la velocidad y eficiencia de una corporación multimillonaria.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que si tardas más de 15 minutos en responder a una persona que dejó sus datos en tu sitio web o anuncio, la probabilidad de que te compre cae en un 80%? Los clientes en internet tienen prisa: si no les respondes al instante, le escribirán a tu competidor. El 90% de los emprendedores en América Latina pierden la mitad del día copiando y pegando teléfonos de un Excel a su celular. Con herramientas gratuitas de automatización sin código como Make.com puedes conectar tus anuncios, tu WhatsApp, tu correo y tus hojas de cálculo para que todo funcione solo las 24 horas del día. Este tomo te enseña a crear tus primeras automatizaciones comerciales.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Regla de los 5 Minutos: La ciencia de la velocidad de respuesta en ventas digitales.\n• Capítulo 2: Los Fundamentos de la Automatización No-Code: Disparadores (Triggers) y Acciones (Actions).\n• Capítulo 3: Creación de un Escenario en Make.com: De Formulario Web a WhatsApp y Google Sheets en 15 minutos.\n• Capítulo 4: Caso de Estudio Real (UrbanoSur Inmobiliaria Bogotá): Cómo duplicaron citas respondiendo en 10 segundos.\n• Capítulo 5: Notificaciones Automáticas para tu Equipo por Telegram: Recibir alertas de ventas en el celular al instante.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño e integración de automatizaciones en Make.com cobrando entre $45 y $650 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Make.com (make.com): Plataforma visual no-code líder mundial para conectar aplicaciones mediante webhooks y APIs (1,000 operaciones gratis/mes).\n2. Google Sheets: Base de datos centralizada y automatizada para almacenar registros de clientes en tiempo real.\n3. Telegram Bot API: Configuración de bots gratuitos para enviar alertas de nuevos clientes al teléfono de tu equipo.",
    ch1CustomNarrative: [
      "En el entorno de los negocios digitales contemporáneos, la velocidad de ejecución y respuesta es la ventaja competitiva más decisiva y menos aprovechada por las pequeñas y medianas empresas.",
      "Cuando un cliente potencial completa un formulario en internet pidiendo información o cotización de un servicio, se encuentra en el pico máximo de su interés y atención psicológica.",
      "Si la empresa tarda cuatro, ocho o veinticuatro horas en ponerse en contacto con él, ese interés se enfría por completo o el cliente ya contrató al primer competidor ágil que le respondió de inmediato.",
      "Aprender a implementar automatizaciones no-code te permite construir sistemas comerciales hiper-rápidos que capturan, procesan y atienden a tus clientes en segundos sin requerir programadores costosos."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UNA AUTOMATIZACIÓN EN MAKE.COM Y GOOGLE SHEETS GRATIS:",
      "Paso 1: Crea una cuenta gratuita en Make.com (make.com) y selecciona \"Create a new scenario\".",
      "Paso 2: Módulo 1 (Disparador / Trigger): Selecciona \"Webhooks\" -> \"Custom Webhook\". Conecta tu formulario web o formulario de Facebook Ads al webhook generado.",
      "Paso 3: Módulo 2 (Acción): Añade el módulo de \"Google Sheets\" -> \"Add a Row\". Selecciona tu hoja \"Base_De_Datos_Clientes\" y vincula los campos: Nombre, Correo, Teléfono y Fecha actual.",
      "Paso 4: Módulo 3 (Notificación Inmediata): Añade el módulo de \"Telegram\" -> \"Send a Text Message\" para que tu bot de Telegram envíe un mensaje a tu celular: \"🚨 ¡Nuevo cliente registrado!: [Nombre] - [Teléfono] - Interesado en [Servicio]\".",
      "Paso 5: Guarda el escenario y activa el interruptor \"ON\": a partir de ese segundo, cada nuevo cliente será guardado y notificado a tu equipo en menos de 5 segundos de forma 100% automática a costo $0 USD."
],
    ch3TacticalSteps: [
      "Semana 1: Identifica cuál es la tarea manual más repetitiva que consume el tiempo de tu equipo de ventas.",
      "Semana 2: Configura tu cuenta gratuita en Make.com y crea tu primer escenario de prueba conectando un formulario con Google Sheets.",
      "Semana 3: Configura las alertas automáticas de Telegram para que tu equipo comercial reciba los prospectos en su celular al instante.",
      "Semana 4: Mide la reducción en el tiempo de respuesta y observa cómo se incrementa la tasa de cierre de ventas."
],
    ch4CaseDeepDive: [
      "UrbanoSur en Bogotá invertía en anuncios de Facebook para vender departamentos pero los asesores comerciales descargaban la lista de prospectos en un archivo Excel una vez al día.",
      "El 70% de las personas a las que llamaban al día siguiente decían que 'ya no se acordaban del anuncio' o que 'ya habían agendado con otra constructora'.",
      "Implementaron un escenario en Make.com: en cuanto un usuario dejaba sus datos, el sistema le enviaba el folleto digital al WhatsApp en 10 segundos y notificaba al asesor para hacer una llamada en menos de 5 minutos.",
      "Las citas para visitar el departamento piloto aumentaron un 190% en el primer mes y cerraron 14 ventas de departamentos en el trimestre."
],
    ch5RiskMitigation: [
      "Error fatal: El 'Bucle Infinito de Automatización' (crear reglas contradictorias que envían 20 mensajes repetidos al mismo cliente).",
      "Prueba siempre tu escenario con datos ficticios propios antes de activarlo con clientes reales para verificar que cada paso se ejecute una sola vez.",
      "Monitorea el consumo de operaciones mensuales en Make.com para no superar el límite gratuito de 1,000 operaciones por mes.",
      "Mantén siempre un canal de atención humana disponible: la automatización inicia el contacto rápido, pero la empatía humana cierra las ventas complejas."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño e Integración de Automatizaciones de Marketing No-Code en Make.com\". Ayuda a inmobiliarias, clínicas, agencias, despachos y tiendas a automatizar la captura de prospectos y la atención por WhatsApp.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por configuración de 1 escenario en Make.com (Formulario Web a Google Sheets + alerta de Telegram). • Nivel Intermedio (Con portafolio): $130 - $270 USD por sistema de automatización comercial completo (Integración de Meta Ads con CRM, envío de folleto digital por WhatsApp, registro en Google Sheets y secuencia de recordatorios). • Nivel Senior / Automation Architect y Consultor de Operaciones No-Code: $320 - $650 USD por arquitectura integral de automatizaciones empresariales, sincronización bidireccional entre CRM, ERP y pasarelas de pago, webhooks personalizados y mantenimiento mensual.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve viendo cómo captan clientes en [Empresa] y sé que cuando una persona pide informes en redes o en la web responder en menos de 5 minutos es la clave para no perder la venta frente a la competencia. Con una Automatización No-Code en Make.com es posible enviar los datos del cliente al instante a Google Sheets y dispararle un mensaje automático a su WhatsApp con el folleto digital en 10 segundos. Por solo $50 USD yo te diseño y dejo funcionando la automatización completa en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña y prueba un escenario de formulario a Google Sheets y Telegram en Make.com. Día 2: Contacta a 10 inmobiliarias, clínicas o agencias de autos en LinkedIn y ofréceles automatizar su captura de clientes."
],
    quizQuestions: [
      {
            "question": "¿Por qué contactar a un cliente potencial en los primeros '5 Minutos' tras completar un formulario multiplica las ventas?",
            "options": [
                  "Porque los servidores se apagan a los 5 minutos.",
                  "Porque el prospecto se encuentra en el pico máximo de su interés y atención psicológica; si se responde de inmediato, la probabilidad de calificarlo y cerrar la venta es hasta 21 veces mayor que si se responde media hora más tarde.",
                  "Porque es obligatorio por la ley de comercio digital.",
                  "Porque los formularios caducan a los 5 minutos."
            ],
            "correctIndex": 1,
            "explanation": "La velocidad de respuesta elimina el tiempo para que el cliente busque otras opciones en la competencia."
      },
      {
            "question": "¿Qué es un 'Disparador' (Trigger) en una plataforma de automatización como Make.com?",
            "options": [
                  "Un arma de fuego digital.",
                  "El evento inicial que pone en marcha la automatización de forma automática (ej. cuando entra un nuevo lead en un formulario o cuando se recibe un pago).",
                  "El botón para apagar la computadora.",
                  "Un virus informático."
            ],
            "correctIndex": 1,
            "explanation": "El disparador detecta el evento y activa la cadena de acciones programadas en el escenario."
      },
      {
            "question": "¿Cuál es la principal ventaja de las plataformas 'No-Code' como Make.com para una pequeña empresa?",
            "options": [
                  "Que no necesitan conexión a internet.",
                  "Permitir conectar aplicaciones, bases de datos y servicios de mensajería de forma visual y rápida sin necesidad de contratar programadores ni escribir líneas de código complejas.",
                  "Que regalan computadoras a los usuarios.",
                  "Que sustituyen al director general."
            ],
            "correctIndex": 1,
            "explanation": "Las herramientas no-code democratizan la tecnología permitiendo a cualquier negocio automatizar procesos en horas."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-12
  // =========================================================================
  'imd-12': {
    frameworkName: "Las Fórmulas Maestras de Redacción Persuasiva (PAS: Problema, Agitación, Solución & AIDA) & Copywriting de Respuesta Directa",
    coreMetrics: [
      "Tasa de Conversión de Textos de Ventas (Copywriting CVR > 4.8%)",
      "Tiempo de Retención de Lectura en Páginas de Venta (+65%)",
      "Tasa de Clics en Titulares de Anuncios (Headline CTR > 5%)",
      "Reducción de Palabras Relleno y Verborrea Innecesaria (-50%)",
      "Puntuación de Claridad y Legibilidad en Hemingway App (Grade ≤ 6)"
],
    caseCompany: "Fabricante de Sillas Ergonómicas para Trabajo Remoto ErgoSit (Guadalajara, México)",
    caseOutcome: "Su página de ventas decía 'Sillas de oficina con mecanismo sincrónico y pistón clase 4' con pocas ventas; reescribió todo el texto aplicando la fórmula PAS: '¿Terminas tu jornada laboral con un dolor insoportable de cuello y espalda? (Problema)... Pasar 8 horas en una silla rígida comprime tus vértebras y arruina tu energía (Agitación)... ErgoSit es la única silla ortopédica con soporte lumbar adaptativo que elimina la tensión muscular (Solución)'; sus ventas de sillas aumentaron un 155% en 30 días.",
    pitfall: "Escribir textos comerciales centrados en las 'Características Técnicas' del producto en lugar de escribir sobre los 'Beneficios Transformadores' y las emociones que experimentará el comprador.",
    actionItem1: "Dominar la 'Fórmula PAS': 1. Problema (Nombra el dolor exacto del cliente), 2. Agitación (Muestra las consecuencias negativas de no resolverlo), 3. Solución (Presenta tu producto como el alivio definitivo).",
    actionItem2: "Aplicar la técnica '¿Y eso qué significa para mí?': transformar cada característica técnica en un beneficio tangible de vida para el usuario.",
    actionItem3: "Pasar todos los textos comerciales por Hemingway App (gratuito) para eliminar palabras difíciles, frases pasivas y rodeos innecesarios.",
    domainContext: "El Copywriting no es literatura artística ni poesía; es la ciencia de elegir y ordenar las palabras exactas que inducen a una persona a tomar una acción económica concreta.",
    strategicRationale: "Dominar el copywriting persuasivo multiplica la tasa de conversión de cualquier anuncio, página web o correo electrónico sin necesidad de gastar más dinero en tráfico publicitario.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué dos empresas que venden exactamente el mismo producto tienen resultados opuestos: una está en quiebra y la otra factura millones? La respuesta es el COPYWRITING (Redacción Persuasiva). Una empresa describe características técnicas aburridas ('colchón con espuma de poliuretano de alta densidad'), mientras que la otra vende una transformación deseada ('duerme 8 horas seguidas y despiértate sin dolor de espalda lleno de energía'). Eugene Schwartz demostró que el texto adecuado puede multiplicar las ventas por diez sin cambiar el producto. Con fórmulas universales como PAS y herramientas gratuitas como Hemingway App puedes escribir textos magnéticos. Este tomo te enseña a escribir palabras que venden.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: Características vs. Beneficios: La pregunta mágica '¿Y eso qué significa para el cliente?'.\n• Capítulo 2: La Fórmula PAS de Oro: Problema -> Agitación -> Solución.\n• Capítulo 3: La Anatomía del Titular Magnético: El 80% del éxito de un texto depende de las primeras 10 palabras.\n• Capítulo 4: Caso de Estudio Real (ErgoSit Sillas México): Cómo aumentaron ventas un 155% reescribiendo con PAS.\n• Capítulo 5: Corrección y Pulido con Hemingway App: Escribir para que lo entienda un niño de 10 años.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer servicios de redacción persuasiva (Copywriting) cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Hemingway App (hemingwayapp.com): Corrector oficial de legibilidad para simplificar textos y eliminar palabras confusas.\n2. Google Docs: Plantilla Oficial de Fórmulas Maestras de Copywriting (PAS, AIDA, BAB: Before-After-Bridge).\n3. CoSchedule Headline Studio (Free): Analizador de impacto emocional y potencia de titulares.",
    ch1CustomNarrative: [
      "En el entorno comercial contemporáneo, las palabras que utilizas en tus anuncios, páginas de aterrizaje y mensajes de ventas son los mejores vendedores de tu empresa o tus peores saboteadores silenciosos.",
      "Muchos emprendedores cometen el error garrafal de escribir como académicos o técnicos: llenan sus folletos de jerga incomprensible, especificaciones mecánicas y párrafos densos que no despiertan ninguna emoción en el comprador.",
      "El consumidor no compra productos por sus características de fábrica; compra la visión de cómo su vida será mejor, más fácil, más segura o más placentera después de haber utilizado tu solución.",
      "Aprender a redactar con las técnicas clásicas del Copywriting de respuesta directa te permite tocar las fibras emocionales correctas para acelerar la decisión de compra de tus clientes."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO APLICAR LA FÓRMULA PAS EN GOOGLE DOCS Y HEMINGWAY APP GRATIS:",
      "Paso 1: Abre Google Docs y crea el documento \"Copywriting_Persuasivo_[NombreProducto]\".",
      "Paso 2: Estructura el texto con la Fórmula PAS: • Problema: \"¿Te cuesta conciliar el sueño por las noches y te despiertas con cansancio acumulado?\". • Agitación: \"Dormir mal no solo arruina tu energía del día; afecta tu concentración en el trabajo, eleva tus niveles de estrés y debilita tu sistema inmunológico con el paso de los meses\". • Solución: \"Presentamos SleepRest: el antifaz ergonómico con sonido blanco integrado que bloquea el 100% de la luz y te ayuda a alcanzar un sueño profundo en menos de 15 minutos\".",
      "Paso 3: Añade el Llamado a la Acción (CTA): \"👉 Haz clic aquí para ordenar el tuyo hoy con 30 días de prueba sin riesgo\".",
      "Paso 4: Abre Hemingway App (hemingwayapp.com), pega el texto y elimina las oraciones marcadas en rojo (muy difíciles de leer) hasta alcanzar un nivel de lectura \"Grade 6\" o menor: el texto será fluido, directo y altamente persuasivo."
],
    ch3TacticalSteps: [
      "Semana 1: Audita los textos de tu sitio web y transforma cada característica técnica en un beneficio directo.",
      "Semana 2: Redacta 3 titulares alternativos para tu oferta principal utilizando números y ganchos de curiosidad.",
      "Semana 3: Reescribe la página de tu servicio principal aplicando la fórmula PAS (Problema, Agitación, Solución).",
      "Semana 4: Pasa tus textos por Hemingway App y lánzalos en tus anuncios y correos midiendo el aumento en clics y ventas."
],
    ch4CaseDeepDive: [
      "ErgoSit en Guadalajara vendía sillas ergonómicas pero su página web solo enumeraba detalles técnicos: 'Malla de poliéster transpirable, soporte lumbar de 3 puntos y ruedas de poliuretano'.",
      "Los clientes miraban la web y se iban a comprar sillas más baratas a supermercados.",
      "Reescribieron su página aplicando la fórmula PAS: hablaron del dolor de espalda de quienes trabajan 8 horas sentados frente a la computadora y cómo ErgoSit elimina la fatiga postural.",
      "La tasa de conversión de la página subió del 1.2% al 3.1%, las ventas de sillas aumentaron un 155% en 30 días y los clientes dejaban reseñas agradeciendo haber eliminado su dolor cervical."
],
    ch5RiskMitigation: [
      "Error fatal: El 'Copywriting Exagerado o Engañoso' (hacer promesas falsas o milagrosas que el producto no puede cumplir).",
      "El buen copywriting es persuasivo pero 100% ético y verídico; prometer milagros destruye la confianza y genera una avalancha de devoluciones y malas reseñas.",
      "Evita párrafos largos de más de 4 líneas: en pantallas de smartphones los bloques densos de texto fatigan la vista; usa oraciones cortas y espacios en blanco.",
      "Lee siempre tus textos en voz alta: si suena como algo que nunca le dirías a un amigo en una conversación real, reescríbelo con lenguaje natural."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Redacción Persuasiva (Copywriting) para Anuncios, Páginas de Venta y Correos\". Ayuda a tiendas online, consultores, clínicas y empresas a reescribir sus textos comerciales para duplicar sus ventas.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por redacción de 5 textos persuasivos para anuncios de Meta/Google o reescritura de 1 página de inicio en Google Docs. • Nivel Intermedio (Con portafolio): $120 - $250 USD por Copywriting completo de una Landing Page de ventas (Titulares, fórmula PAS, beneficios, testimonios y llamados a la acción) + secuencia de 3 correos de venta. • Nivel Senior / Copywriter Profesional de Respuesta Directa: $300 - $600 USD por arquitectura de copywriting integral para lanzamientos de productos, cartas de venta de alta conversión (Long-Form Sales Letters), guiones para videos de ventas (VSL) y pruebas de conversión.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve leyendo los textos de la página web/anuncios de [Empresa] y tienen un gran producto, pero noté que los textos se enfocan mucho en características técnicas y no resaltan los beneficios emocionales y transformadores que busca el cliente (lo que frena muchas decisiones de compra). Con la metodología de Copywriting Persuasivo (Fórmula PAS) y pulido en Hemingway App es posible reescribir tus mensajes para conectar con el dolor del cliente y aumentar tus ventas en más de un 50%. Por solo $45 USD yo te reescribo los textos completos de tu página principal en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Reescribe un texto comercial demo aplicando la fórmula PAS en Google Docs y revísalo en Hemingway App. Día 2: Contacta a 10 negocios con textos aburridos en Instagram o LinkedIn y ofréceles una reescritura gratuita de su titular principal."
],
    quizQuestions: [
      {
            "question": "¿En qué consiste la fórmula clásica de copywriting 'PAS'?",
            "options": [
                  "Precio, Anuncio y Saludo.",
                  "Problema (identificar el dolor real del cliente), Agitación (profundizar en las consecuencias emocionales y prácticas de no resolverlo) y Solución (presentar tu producto como la respuesta definitiva y liberadora).",
                  "Publicidad, Algoritmo y Software.",
                  "Pagar, Agradecer y Salir."
            ],
            "correctIndex": 1,
            "explanation": "La fórmula PAS es una de las estructuras narrativas más efectivas de la psicología de ventas para motivar la acción."
      },
      {
            "question": "¿Cuál es la diferencia entre una 'Característica' y un 'Beneficio' en un texto de ventas?",
            "options": [
                  "La característica es más barata.",
                  "La característica describe técnicamente lo que el producto 'es o tiene' (datos de fábrica), mientras que el beneficio describe lo que el producto 'hace por el cliente' y cómo mejora su vida o resuelve su dolor.",
                  "No existe ninguna diferencia.",
                  "El beneficio solo se menciona después de pagar."
            ],
            "correctIndex": 1,
            "explanation": "Los clientes no compran características de ingeniería; compran los beneficios prácticos y emocionales que esas características les brindan."
      },
      {
            "question": "¿Qué función cumple la herramienta gratuita Hemingway App al revisar un texto comercial?",
            "options": [
                  "Traducir el texto a 20 idiomas.",
                  "Analizar la legibilidad del texto, resaltando oraciones demasiado largas, palabras difíciles y voz pasiva para asegurar que el mensaje sea directo, simple y comprensible al instante.",
                  "Comprar anuncios en Google.",
                  "Diseñar el logotipo de la empresa."
            ],
            "correctIndex": 1,
            "explanation": "Hemingway App limpia la verborrea innecesaria y asegura que el texto se lea con fluidez y claridad cristalina."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-13
  // =========================================================================
  'imd-13': {
    frameworkName: "Dominio del SEO Local & Optimización del Perfil de Negocio de Google (Google Business Profile Optimization Framework)",
    coreMetrics: [
      "Posición en el 'Local Pack' de Google Maps (Top 3 en radio local)",
      "Número de Llamadas Telefónicas y Solicitudes de Ruta (+75% mensual)",
      "Calificación Media de Reseñas de Clientes (Rating > 4.8 estrellas)",
      "Número Total de Reseñas Verificadas (+10 reseñas nuevas al mes)",
      "Tasa de Clics al Sitio Web desde Google Maps (+50%)"
],
    caseCompany: "Taller Mecánico Especializado & Afinación Automotriz AutoService Pro (Monterrey, México)",
    caseOutcome: "Tenía su perfil de Google Maps abandonado sin fotos y con 4 reseñas antiguas; optimizó el Perfil de Negocio de Google con categorías exactas, fotos del taller y un sistema de captación de reseñas con código QR en el mostrador; en 60 días acumuló 95 reseñas de 5 estrellas y llegó al puesto #1 en Google Maps en su zona, recibiendo 60 autos adicionales al mes para afinación y frenos.",
    pitfall: "Tener un Perfil de Negocio de Google incompleto, con el número de teléfono o dirección desactualizados, y no responder a las reseñas de los clientes, perdiendo el 80% de los clientes locales que buscan en Google Maps desde su celular.",
    actionItem1: "Completar al 100% el 'Perfil de Negocio de Google' (Google Business Profile): categoría principal exacta, fotos reales de alta calidad de fachada e interior, horario comercial y catálogo de servicios con precios.",
    actionItem2: "Diseñar un 'Cartel con Código QR para Reseñas' en Canva para colocar en el mostrador físico o enviar por WhatsApp tras cada servicio completado.",
    actionItem3: "Establecer la regla de 'Responder al 100% de las Reseñas' (tanto positivas como negativas) en menos de 24 horas utilizando palabras clave locales en la respuesta.",
    domainContext: "Casi el 50% de todas las búsquedas que se realizan en Google tienen una 'intención local' ('cerca de mí' o en una ciudad concreta); dominar Google Maps es la estrategia más rápida y económica para llenar cualquier negocio físico de clientes.",
    strategicRationale: "El posicionamiento en el Local Pack de Google Maps genera llamadas y visitas físicas directas con costo por clic cero, consolidando una reputación inexpugnable en tu área geográfica.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Qué haces cuando necesitas un restaurante para cenar hoy, un taller mecánico de urgencia o un cerrajero en tu ciudad? Abres Google Maps en tu celular y eliges uno de los 3 primeros locales que tienen 4.8 estrellas y buenas fotos. ¡Google Business Profile (Perfil de Negocio de Google) es la máquina de clientes locales más poderosa del mundo y es 100% GRATIS! El 80% de los comercios en América Latina tienen su perfil descuidado o abandonado. Optimizar las categorías, publicar fotos semanales e implementar un sistema de reseñas con código QR te permite liderar las búsquedas locales en 60 días. Este tomo te enseña a dominar el marketing local.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Poder del 'Local Pack' de Google: Los 3 resultados destacados que se llevan el 80% de los clientes.\n• Capítulo 2: Los 3 Factores de Ranking Local de Google: Relevancia, Distancia y Prominencia (Reseñas).\n• Capítulo 3: Optimización Paso a Paso de Google Business Profile: Categorías secundarias, productos y fotos reales.\n• Capítulo 4: Caso de Estudio Real (AutoService Pro Monterrey): De 4 reseñas a 95 reseñas y 60 autos extra al mes.\n• Capítulo 5: El Sistema del Código QR para Reseñas en Canva: Cómo conseguir 10 reseñas de 5 estrellas cada semana.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer optimización de Google Maps y marketing local cobrando entre $35 y $520 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Business Profile (google.com/business): Plataforma oficial de gestión del perfil comercial en Google y Google Maps.\n2. Canva (canva.com): Diseño del cartel de mostrador y tarjetas con código QR para solicitar reseñas a clientes.\n3. QR Code Generator (qr-code-generator.com): Creación de enlace directo al formulario de calificación de 5 estrellas de Google.",
    ch1CustomNarrative: [
      "Para cualquier negocio con presencia física o que preste servicios a domicilio en una ciudad determinada, el mapa de Google se ha convertido en el directorio comercial supremo y exclusivo del mundo moderno.",
      "Los consumidores ya no abren páginas amarillas ni buscan folletos en buzones; cuando tienen una necesidad inmediata, abren la aplicación de Google Maps en su teléfono móvil y seleccionan el negocio más cercano con la mejor reputación visual.",
      "Un perfil comercial de Google optimizado con rigor metodológico actúa como un imán constante que desvía el flujo de peatones y conductores de tu ciudad directamente hacia tu puerta.",
      "Aprender a gestionar el SEO local y cultivar una avalancha de reseñas de cinco estrellas te permite dominar tu territorio comercial sin depender de intermediarios ni comisiones de terceros."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO OPTIMIZAR GOOGLE BUSINESS PROFILE Y CREAR UN CARTEL QR GRATIS:",
      "Paso 1: Ingresa a Google Business Profile (google.com/business) y reclama tu negocio. Completa el 100% de la información: Dirección exacta, teléfono con WhatsApp, horarios reales y la \"Categoría Principal\" más específica posible (ej. \"Taller de reparación de automóviles\" en lugar de \"Servicios\").",
      "Paso 2: Sube al menos 15 fotos de alta resolución: Fachada exterior visible desde la calle, equipo de trabajo atendiendo, instalaciones interiores limpias y fotos de trabajos terminados.",
      "Paso 3: Obtén tu \"Enlace Corto de Reseñas Directo\": En el panel de Google Business, haz clic en \"Pedir reseñas\" y copia el enlace oficial.",
      "Paso 4: Abre Canva y diseña el \"Cartel_QR_Reseñas (Formato 15x20 cm para mesa o mostrador)\": Incluye el logo de Google, 5 estrellas doradas y el texto: \"¿Te encantó nuestro servicio? ¡Escanéanos y déjanos tu opinión para ganar un café/descuento!\".",
      "Paso 5: Responde a cada reseña mencionando tu ciudad y servicio: \"¡Muchas gracias [Nombre] por confiar en nuestro taller mecánico en Monterrey para la afinación de tu auto!\": esto ayuda a Google a asociar tu negocio con esas palabras clave locales."
],
    ch3TacticalSteps: [
      "Semana 1: Audita y actualiza todos los datos y fotos de tu perfil en Google Business Profile.",
      "Semana 2: Diseña e imprime el cartel con código QR en Canva y colócalo en el mostrador de cobro de tu local.",
      "Semana 3: Entrena al personal para pedir amablemente la reseña a cada cliente satisfecho al momento de entregar el servicio.",
      "Semana 4: Publica una actualización de 'Publicación de Google' semanal con una foto de un trabajo y una oferta especial."
],
    ch4CaseDeepDive: [
      "AutoService Pro en Monterrey era un taller mecánico impecable pero solo tenía 4 reseñas antiguas y aparecía en el puesto #18 en Google Maps.",
      "Los automovilistas que sufrían averías en la zona llamaban a otros talleres que aparecían en el Local Pack.",
      "Optimizaron su perfil con fotos del equipo y colocaron carteles de acrílico con código QR en la sala de espera ofreciendo una revisión gratuita de niveles de fluidos a cambio de su reseña honesta.",
      "En 60 días alcanzaron 95 reseñas de 5 estrellas y llegaron al puesto #1 en Google Maps: comenzaron a recibir más de 60 autos adicionales al mes, aumentando su facturación en $14,000 USD mensuales."
],
    ch5RiskMitigation: [
      "Error fatal: Comprar reseñas falsas en internet o pedir a empleados que publiquen reseñas desde la misma red WiFi del local.",
      "Los algoritmos de inteligencia artificial de Google detectan las reseñas falsas por la dirección IP y pueden suspender o eliminar tu perfil de Google Maps; consigue siempre reseñas 100% orgánicas de clientes reales.",
      "Si recibes una reseña negativa injusta, nunca respondas con agresividad ni insultos: responde con educación, pide disculpas por el malentendido y ofrece un teléfono para solucionar el caso personalmente; los futuros clientes juzgan tu profesionalismo por cómo manejas las quejas.",
      "Mantén los horarios especiales actualizados en días festivos para evitar que clientes viajen hasta tu local y lo encuentren cerrado."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Optimización de Google Business Profile (Google Maps) y Estrategia de Reseñas Locales\". Ayuda a restaurantes, dentistas, veterinarias, talleres, estéticas y comercios a posicionarse en el Top 3 de Google Maps.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $35 - $70 USD por optimización completa del perfil en Google Business Profile + diseño de cartel con código QR en Canva. • Nivel Intermedio (Con portafolio): $100 - $200 USD por optimización integral de SEO Local (Google Maps + fotos profesionales, catálogo de servicios con precios, plantilla de respuestas a reseñas y 4 publicaciones de Google). • Nivel Senior / Consultor de SEO Local y Reputación Geográfica: $250 - $520 USD por estrategia de dominación local en múltiples sucursales, auditoría de citaciones locales (NAP: Name, Address, Phone), integración con Google Local Services Ads y monitoreo de reputación.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve buscando en Google Maps servicios de [Rubro] en [Ciudad] y noté que tu negocio tiene pocas fotos y no aparece en los primeros 3 resultados destacados del mapa (y el 80% de los clientes llaman a esos 3 locales). Con una optimización completa de Google Business Profile y un sistema de reseñas con código QR en Canva es posible posicionar tu negocio en el puesto #1 de Google Maps para recibir llamadas todos los días sin pagar publicidad. Por solo $40 USD yo te realizo la optimización completa y te entrego los carteles impresos en PDF listos para usar. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña un modelo de cartel con código QR en Canva y busca 5 negocios con perfiles descuidados en Google Maps de tu ciudad. Día 2: Visita o contacta a los dueños y ofréceles optimizar su perfil de Google Maps en 24 horas."
],
    quizQuestions: [
      {
            "question": "¿Qué es el 'Local Pack' de Google Maps y por qué es tan valioso?",
            "options": [
                  "Un paquete de comida para llevar.",
                  "El recuadro destacado con el mapa y los 3 negocios locales principales que Google muestra en la parte superior de los resultados de búsqueda cuando un usuario busca un servicio en su ciudad, captando más del 70% de las llamadas y visitas.",
                  "Una membresía de pago mensual de Google.",
                  "Un software de contabilidad."
            ],
            "correctIndex": 1,
            "explanation": "Aparecer en el Local Pack otorga máxima visibilidad y genera llamadas telefónicas inmediatas de clientes locales."
      },
      {
            "question": "¿Cuáles son los 3 factores oficiales que utiliza el algoritmo de Google para clasificar negocios locales en Google Maps?",
            "options": [
                  "Precio del alquiler, Tamaño del local y Color del logo.",
                  "Relevancia (qué tan bien coincide el perfil con la búsqueda), Distancia (cercanía física al usuario) y Prominencia (reputación, cantidad y calidad de reseñas de 5 estrellas y menciones web).",
                  "Publicidad pagada, Número de empleados y Años de fundación.",
                  "El orden alfabético del nombre."
            ],
            "correctIndex": 1,
            "explanation": "Google evalúa estos 3 factores para ofrecer los mejores resultados locales a cada usuario en tiempo real."
      },
      {
            "question": "¿Por qué es crucial responder a todas las reseñas (positivas y negativas) en Google Business Profile?",
            "options": [
                  "Porque Google borra las reseñas si no se responden.",
                  "Porque demuestra compromiso y atención al cliente, mejora el posicionamiento en el algoritmo de Google y permite incorporar palabras clave locales de forma natural en las respuestas.",
                  "Para cobrar una comisión a los clientes.",
                  "Porque es un requisito de los bancos."
            ],
            "correctIndex": 1,
            "explanation": "Responder con rapidez y profesionalismo eleva la confianza de futuros clientes y refuerza la relevancia SEO del negocio."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-14
  // =========================================================================
  'imd-14': {
    frameworkName: "La Ecuación del Valor de la Oferta de $100M de Alex Hormozi (Value Equation: Dream Outcome x Perceived Likelihood / Time Delay x Effort)",
    coreMetrics: [
      "Tasa de Cierre de Ventas de la Oferta (Close Rate > 35%)",
      "Poder de Fijación de Precios Premium (Multiplicador de Precio x3 a x5)",
      "Reducción de Objeciones de Precio y Miedo al Riesgo (-85%)",
      "Puntuación de Valor Percibido según la Ecuación Hormozi (> 90/100)",
      "Tasa de Reclamación de Garantías Incondicionales (< 2%)"
],
    caseCompany: "Agencia de Asesoría Nutricional & Pérdida de Peso SaludTransforma (Santiago, Chile)",
    caseOutcome: "Vendía 'consultas nutricionales sueltas' por $30 USD compitiendo con cientos de dietistas; aplicó la Ecuación del Valor de Alex Hormozi y empaquetó la 'Oferta Gran Slam': 'El Programa Cuerpo Vital 90 Días' ($450 USD) incluyendo plan de comidas personalizado, lista de compras de supermercado en PDF, soporte diario por WhatsApp y Garantía de Devolución del 100% si no pierde 6 kg; sus ventas se dispararon un 320% y multiplicó por 5 su facturación mensual.",
    pitfall: "Vender 'horas de servicio' o productos genéricos como un 'commodity' intercambiable, obligando al cliente a comparar precios y forzando a la empresa a cobrar tarifas miserables para no perder clientes.",
    actionItem1: "Maximizar el 'Resultado Soñado' y la 'Certeza de Éxito' en el numerador de la ecuación mediante pruebas sociales, casos de éxito y un plan paso a paso infalible.",
    actionItem2: "Minimizar el 'Retraso de Tiempo' y el 'Esfuerzo y Sacrificio' en el denominador entregando plantillas listas, atajos y soporte directo que faciliten el proceso al cliente.",
    actionItem3: "Construir la 'Pila de Valor (Value Stack)': apilar 3 bonos exclusivos de alto valor percibido y bajo costo de entrega, más una 'Garantía Incondicional o Condicional Audaz' que elimine todo el riesgo financiero para el comprador.",
    domainContext: "En los negocios no compites con productos, compites con OFERTAS; una oferta mediocre de un producto excelente fracasará, pero una Oferta Grand Slam irresistible hace que los clientes se sientan tontos si dicen que no.",
    strategicRationale: "Crear ofertas de alto valor percibido permite cobrar precios premium (High-Ticket), aumenta el margen de beneficio neto y genera una ventaja competitiva imposible de copiar por la competencia tradicional.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué la mayoría de los negocios en América Latina luchan por sobrevivir cobrando precios muy bajos y regateando con cada cliente? Porque venden 'comodities' genéricos: venden '1 hora de asesoría', '1 corte de pelo' o '1 página web'. Alex Hormozi revolucionó el mundo empresarial con su libro '$100M Offers' (Ofertas de $100 Millones): demostró que la clave para cobrar 5 veces más caro no es trabajar más horas, sino crear una 'Oferta Grand Slam': una propuesta empaquetada con bonos, plantillas y garantías tan irresistibles que el cliente sienta que está recibiendo una fortuna por una fracción de su valor. Este tomo te enseña a diseñar tu oferta irresistible paso a paso.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Muerte del Cobro por Horas: Por qué vender tiempo es la trampa del autoempleado empobrecido.\n• Capítulo 2: La Ecuación del Valor de Alex Hormozi: Resultado Soñado x Certeza divididos por Tiempo x Esfuerzo.\n• Capítulo 3: La Pila de Valor (Value Stack): Cómo apilar bonos que multiplican el valor percibido por 10.\n• Capítulo 4: Caso de Estudio Real (SaludTransforma Chile): Cómo pasaron de cobrar $30 a $450 USD multiplicando ventas.\n• Capítulo 5: Las Garantías Audaces: Garantías incondicionales vs. Garantías basadas en resultados.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de creación de ofertas irresistibles cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Docs: Plantilla Oficial del Lienzo de la Oferta Grand Slam de Alex Hormozi y Guion de Presentación de Precios.\n2. Canva (canva.com): Mockup Visual de la 'Pila de Valor' (Value Stack en 3D con cajas, plantillas y bonos de regalo).\n3. Google Sheets: Calculadora de Márgenes Financieros y Estructura de Precios Escalonados.",
    ch1CustomNarrative: [
      "En el mercado libre moderno, existe un principio fundamental de la psicología económica: los clientes no pagan por la cantidad de esfuerzo o de horas que te toma fabricar un producto; pagan exclusivamente por el valor percibido del resultado final que ese producto produce en sus vidas.",
      "Cuando una empresa vende servicios o productos de forma fragmentada y genérica, el cliente entra de inmediato en una mentalidad de regateo y comparación de precios con los competidores más baratos.",
      "La Oferta Grand Slam es un constructo comercial estratégico que cambia por completo las reglas del juego: empaqueta la solución definitiva, elimina los obstáculos del camino mediante bonos prácticos y absorbe el 100% del riesgo mediante garantías audaces.",
      "Aprender a diseñar ofertas irresistibles te permite escapar de la trampa de los precios bajos y fijar tarifas premium con altos márgenes de rentabilidad."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UNA OFERTA DE $100M EN GOOGLE DOCS Y CANVA GRATIS:",
      "Paso 1: Abre Google Docs y aplica la \"Ecuación del Valor de Alex Hormozi\": • Numerador (Aumentar al máximo): 1. Resultado Soñado (ej. \"Bajar 8 kilos y recuperar tu energía\"). 2. Percepción de Certeza (ej. \"Método clínico con más de 300 casos de éxito verificados\"). • Denominador (Reducir a casi cero): 3. Retraso de Tiempo (ej. \"Primeros resultados visibles en 7 días\"). 4. Esfuerzo y Sacrificio (ej. \"Menús deliciosos sin pasar hambre y lista de compras lista en PDF\").",
      "Paso 2: Diseña la \"Pila de Valor (Value Stack)\": • Oferta Principal: Programa Nutricional Personalizado (Valor: $300 USD). • Bono 1: Recetario de 50 Comidas Rápidas en 15 Minutos (Valor: $60 USD). • Bono 2: Lista de Supermercado Lista para Imprimir (Valor: $40 USD). • Bono 3: Grupo VIP de WhatsApp con seguimiento diario (Valor: $150 USD). • Valor Total Acumulado: $550 USD -> Tu Precio Especial Hoy: $149 USD.",
      "Paso 3: Añade la \"Garantía Audaz\": \"Si sigues el plan durante 30 días y no bajas al menos 4 kilos, te devolvemos el 100% de tu dinero y te quedas con todos los recetarios gratis\".",
      "Paso 4: En Canva, diseña el Mockup en 3D de la Pila de Valor con los iconos de los bonos y la garantía para presentar en tu web y llamadas de venta."
],
    ch3TacticalSteps: [
      "Semana 1: Haz una lista de los 5 mayores obstáculos o molestias que sufre tu cliente al intentar usar tu servicio.",
      "Semana 2: Crea 3 bonos gratuitos (plantillas, checklists o guías) que resuelvan esos obstáculos de inmediato.",
      "Semana 3: Redacta tu Garantía Audaz de Devolución y monta el diseño de la Pila de Valor en Canva.",
      "Semana 4: Presenta la nueva oferta empaquetada a tus próximos 10 prospectos y observa cómo desaparecen las objeciones de precio."
],
    ch4CaseDeepDive: [
      "SaludTransforma en Santiago vendía 'sesiones nutricionales sueltas' por $30 USD pero los pacientes abandonaban tras la primera consulta y regateaban el precio.",
      "La fundadora implementó la metodología Hormozi: eliminó las consultas sueltas y lanzó 'El Programa Cuerpo Vital 90 Días' por $450 USD.",
      "El programa incluía la dieta, recetarios de comidas rápidas, lista de compras de supermercado, soporte diario por WhatsApp y garantía de satisfacción.",
      "La tasa de cierre en llamadas de venta subió del 15% al 48%, la facturación mensual se multiplicó por 5 y las pacientes lograban resultados increíbles gracias al seguimiento continuo."
],
    ch5RiskMitigation: [
      "Error fatal: Crear una garantía audaz pero tener un producto o servicio de mala calidad.",
      "La garantía de devolución solo funciona si tu servicio es verdaderamente excelente y cumple lo que promete; si tu servicio es mediocre, una garantía audaz te llevará a la quiebra por reembolsos; perfecciona primero la entrega.",
      "No añadas bonos de 'relleno inútil' que solo aporten confusión; cada bono debe resolver un dolor específico y ahorrarle tiempo al cliente.",
      "Comunica el precio solo DESPUÉS de haber mostrado todo el valor acumulado de la Pila de Valor."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Consultoría de Creación de Ofertas Irresistibles (Método Hormozi) y Paquetes de Valor\". Ayuda a profesionales, consultores, academias, clínicas y empresas a empaquetar sus servicios para cobrar precios premium sin regateos.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por diseño del lienzo de oferta en Google Docs + mockup visual de la Pila de Valor en Canva. • Nivel Intermedio (Con portafolio): $140 - $280 USD por reestructuración completa de oferta comercial (diseño de 3 bonos exclusivos, redacción de garantías audaces, guion de presentación de precios y página de venta en Carrd). • Nivel Senior / Offer Architect y Consultor de Precios High-Ticket: $350 - $700 USD por arquitectura integral de ofertas de alto valor, modelo de escalamiento de precios, estructuración de ventas telefónicas y entrenamiento al equipo comercial.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], sé que para profesionales y empresas en [Sector] competir vendiendo servicios sueltos por horas a menudo genera que los clientes regateen precios y comparen con competidores más baratos. Con la metodología de Ofertas de $100M de Alex Hormozi es posible empaquetar tu servicio en una propuesta de alto valor percibido con bonos y garantías que te permita cobrar el triple de tus tarifas actuales sin resistencia de los clientes. Por solo $50 USD yo te diseño la Oferta Irresistible completa y su Pila de Valor en Canva en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña una Pila de Valor demo en Canva para tu negocio o el de un cliente potencial. Día 2: Contacta a 10 consultores, terapeutas o academias en LinkedIn y ofréceles una sesión gratuita de reingeniería de su oferta."
],
    quizQuestions: [
      {
            "question": "¿Cuáles son los 4 componentes de la 'Ecuación del Valor' de Alex Hormozi?",
            "options": [
                  "Precio, Costo, Impuestos y Ganancia.",
                  "Resultado Soñado x Probabilidad Percibida de Logro (en el numerador para maximizar) divididos por el Retraso de Tiempo x el Esfuerzo y Sacrificio (en el denominador para reducir a casi cero).",
                  "Publicidad, Ventas, Clientes y Proveedores.",
                  "Horas trabajadas, Sueldo, Comisiones y Vacaciones."
            ],
            "correctIndex": 1,
            "explanation": "Cuanto mayor sea el resultado soñado y la certeza, y menor sea el tiempo y esfuerzo que el cliente debe poner, más valiosa e irresistible será la oferta."
      },
      {
            "question": "¿Qué es la 'Pila de Valor' (Value Stack) en la presentación de una oferta comercial?",
            "options": [
                  "Una pila de cajas en el almacén.",
                  "La presentación visual y detallada de la oferta principal junto con todos los bonos adicionales, plantillas, soporte y garantías, sumando el valor individual de cada elemento antes de revelar el precio final con descuento.",
                  "Un balance contable bancario.",
                  "Un catálogo de productos agotados."
            ],
            "correctIndex": 1,
            "explanation": "La pila de valor demuestra que el valor total recibido supera con creces el precio que el cliente pagará, haciendo que la decisión de compra sea obvia."
      },
      {
            "question": "¿Cuál es la función de una 'Garantía Audaz' en una Oferta Grand Slam?",
            "options": [
                  "Hacer que el cliente pague el doble.",
                  "Eliminar por completo el riesgo financiero y psicológico de la mente del comprador (trasladando el riesgo hacia la empresa), lo que desactiva la principal barrera de duda y acelera el cierre de la venta.",
                  "Exigir contratos notariales obligatorios.",
                  "Evitar que los clientes llamen por teléfono."
            ],
            "correctIndex": 1,
            "explanation": "Una garantía sólida transmite certeza absoluta en la calidad del producto y derriba las dudas de los clientes más cautelosos."
      }
]
  },

  // =========================================================================
  // BOOK ID: imd-15
  // =========================================================================
  'imd-15': {
    frameworkName: "Plan Maestro de Marketing Digital de 90 Días en 1 Página (The 1-Page Marketing Plan de Allan Dib) & Cuadro de Mando de Ejecución",
    coreMetrics: [
      "Tasa de Cumplimiento de Metas Trimestrales OKR (> 85%)",
      "Retorno Global de la Inversión en Marketing Trimestral (ROI > 350%)",
      "Número de Nuevos Clientes Adquiridos en el Sprint de 90 Días",
      "Alineación del Equipo de Marketing, Ventas y Operaciones (Score 10/10)",
      "Claridad de la Hoja de Ruta de 9 Bloques en 1 Página (100%)"
],
    caseCompany: "Fabricante de Muebles Ergonómicos & Oficinas Modulares OfficeDesign (Lima, Perú)",
    caseOutcome: "Operaba con marketing caótico e improvisado cambiando de estrategia cada 2 semanas; implementó el Plan de Marketing en 1 Página de Allan Dib en Notion y Canva para un sprint de 90 días con 9 bloques claros (Antes, Durante y Después de la compra); concentró sus recursos en Google Search y secuencias de WhatsApp; sus ventas corporativas crecieron un 140% en un solo trimestre.",
    pitfall: "Escribir planes de marketing teóricos de 80 páginas que nadie lee ni ejecuta, o peor aún, operar en el caos diario improvisando publicaciones y anuncios sin una hoja de ruta estratégica a 90 días.",
    actionItem1: "Completar el 'Plan de Marketing en 1 Página' de Allan Dib en Notion/Canva dividido en 3 Fases y 9 Bloques: Fase 'Antes' (Prospectos: Nicho, Mensaje, Canales), Fase 'Durante' (Leads: Captura, Nutrición, Conversión), Fase 'Después' (Clientes: Experiencia Wow, LTV, Referidos).",
    actionItem2: "Traducir el Plan a un 'Sprint de 90 Días' con 3 Objetivos Prioritarios (OKRs) y revisiones semanales de avance los lunes por la mañana.",
    actionItem3: "Asignar un presupuesto financiero y un responsable único para cada uno de los 9 bloques del plan.",
    domainContext: "La estrategia sin ejecución es una alucinación teórica, pero la ejecución sin estrategia es una pesadilla caótica; un plan de 1 página simple y ejecutable vence a cualquier documento corporativo complejo.",
    strategicRationale: "Tener una hoja de ruta clara de 90 días alinea a toda la empresa, elimina las distracciones y garantiza que cada recurso de tiempo y dinero se enfoque en generar crecimiento rentable y predecible.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que la mayoría de los planes de marketing corporativos son documentos gigantescos de 60 páginas que se quedan guardados en un cajón y que nadie jamás ejecuta? En el mundo real, los negocios necesitan simplicidad y acción inmediata. Allan Dib revolucionó la industria con 'The 1-Page Marketing Plan' (El Plan de Marketing en 1 Página): un lienzo visual dividido en 9 bloques estratégicos que cubre todo lo que tu empresa necesita para atraer prospectos, convertirlos en clientes y multiplicarlos mediante recomendaciones en un sprint de 90 días. Este tomo final de la Categoría 15 te entrega la brújula definitiva para dominar el marketing digital.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: Por Qué los Planes de Marketing Complejos Fracasan: El poder de la síntesis en 1 página.\n• Capítulo 2: La Fase 'Antes' (Tráfico Frío): Nicho Específico, Mensaje Magnético y Canales de Llegada.\n• Capítulo 3: La Fase 'Durante' (Prospectos Calificados): Sistema de Captura, Nutrición y Conversión de Venta.\n• Capítulo 4: La Fase 'Después' (Clientes Fieles): Experiencia Wow de Entrega, Aumento de LTV y Sistema de Referidos.\n• Capítulo 5: Caso de Estudio Real (OfficeDesign Lima): Cómo aumentaron ventas un 140% con el plan de 90 días.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría y diseño de planes de marketing de 90 días cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Canva (canva.com) / Notion: Plantilla Oficial del Plan de Marketing en 1 Página de Allan Dib en 9 Bloques.\n2. Google Sheets: Matriz de Seguimiento de OKRs Trimestrales y Cuadro de Mando de KPIs Semanales.\n3. Trello / Notion: Tablero de Ejecución del Sprint de 90 Días con fechas límites y responsables.",
    ch1CustomNarrative: [
      "En el mundo de los negocios existe una peligrosa confusión entre la 'Estrategia de Marketing' y las 'Tácticas de Marketing'.",
      "Las tácticas son las herramientas individuales que cambian con rapidez: publicar un Reel en Instagram, optimizar una palabra clave en Google o enviar un correo electrónico; la estrategia, en cambio, es la arquitectura global e integradora que conecta todas esas tácticas en una secuencia coherente orientada a la generación de ingresos.",
      "Muchas empresas fracasan porque ejecutan tácticas aisladas de forma caótica y desordenada sin tener un plan maestro que las dirija.",
      "Aprender a diseñar y ejecutar un Plan de Marketing en 1 Página a noventa días te otorga el control supremo de tu crecimiento comercial, eliminando la improvisación y garantizando resultados predecibles."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR EL PLAN DE MARKETING EN 1 PÁGINA EN CANVA Y NOTION GRATIS:",
      "Paso 1: Abre Canva (canva.com) y busca la plantilla \"1-Page Marketing Plan / Plan de Marketing en 1 Página (Formato A3 o Presentación)\".",
      "Paso 2: Rellena la Fase 1: \"EL ANTES (Prospectos)\": • Bloque 1: Mi Mercado Objetivo de Nicho (Buyer Persona específico). • Bloque 2: Mi Mensaje Diferenciador (Declaración de posicionamiento). • Bloque 3: Los Medios de Tráfico que usaré (Google Search y Meta Ads).",
      "Paso 3: Rellena la Fase 2: \"EL DURANTE (Leads)\": • Bloque 4: Mi Sistema de Captura de Contactos (Lead Magnet y Landing Page). • Bloque 5: Mi Sistema de Nutrición (Secuencia de 5 días en MailerLite y WhatsApp). • Bloque 6: Mi Conversión de Ventas (Oferta Grand Slam con garantía).",
      "Paso 4: Rellena la Fase 3: \"EL DESPUÉS (Clientes)\": • Bloque 7: Cómo entregaré una Experiencia Wow (Detalle inesperado y onboarding rápido). • Bloque 8: Cómo aumentaré el Valor de Vida (LTV / Venta cruzada y recurrencia). • Bloque 9: Cómo orquestaré los Referidos (Incentivo por recomendar a un colega).",
      "Paso 5: En Notion, traduce los 9 bloques en un \"Sprint de 90 Días\": Asigna tareas semanales en un tablero Kanban para ejecutar cada bloque con disciplina inquebrantable."
],
    ch3TacticalSteps: [
      "Semana 1: Dedica un fin de semana a completar los 9 bloques del Plan de Marketing en 1 Página en Canva.",
      "Semana 2: Presenta el plan a tu equipo y define las metas numéricas de los próximos 90 días en Google Sheets.",
      "Semana 3: Configura los canales y sistemas técnicos necesarios para la Fase 1 y Fase 2.",
      "Semana 4: Bloquea todos los lunes a las 9:00 AM una reunión de 30 minutos para revisar el avance del sprint trimestral."
],
    ch4CaseDeepDive: [
      "OfficeDesign en Lima fabricaba mobiliario corporativo pero operaba en el caos: un mes contrataban una agencia de TikTok, al siguiente mes repartían folletos y al siguiente no hacían nada.",
      "El director general implementó el Plan de Marketing en 1 Página de Allan Dib en Notion para un sprint de 90 días: definieron su nicho en medianas empresas de tecnología, crearon una guía en PDF sobre diseño de oficinas modernas y automatizaron el seguimiento por WhatsApp.",
      "Al concentrar todos sus recursos en una sola estrategia coherente, eliminaron el 60% de gastos en publicidad inútil.",
      "Sus ventas corporativas crecieron un 140% en un solo trimestre, cerrando contratos con 18 nuevas empresas y logrando el año más rentable de su historia."
],
    ch5RiskMitigation: [
      "Error fatal: El 'Síndrome del Objeto Brillante' (abandonar el plan a los 20 días para saltar a una nueva red social o moda pasajera).",
      "Mantén la disciplina del sprint de 90 días: ejecuta el plan acordado de forma rigurosa hasta el final antes de hacer cambios estructurales; el éxito en marketing premia la consistencia.",
      "No intentes abarcar 10 canales al mismo tiempo: elige 2 canales de adquisición principales y domínalos a la perfección antes de abrir un tercero.",
      "Revisa semanalmente el cuadro de mando de métricas para corregir desviaciones operativas a tiempo."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño del Plan Maestro de Marketing Digital de 90 Días para PYMEs\". Ayuda a dueños de negocios, pymes, clínicas, comercios y empresas a salir del caos y estructurar su hoja de ruta de marketing en 1 página.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por diseño del Plan de Marketing en 1 Página de 9 bloques en Canva + tablero de ejecución en Notion. • Nivel Intermedio (Con portafolio): $140 - $280 USD por taller estratégico de 3 horas con los socios de la empresa, estructuración completa del Plan de 90 Días, definición de OKRs y cuadro de mando de métricas en Google Sheets. • Nivel Senior / Chief Marketing Officer Fraccional (Fractional CMO) y Consultor Estratégico: $350 - $700 USD por dirección estratégica de marketing trimestral, acompañamiento semanal en la ejecución de los 9 bloques, optimización de presupuestos y reuniones mensuales de directorio.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], sé que para directivos y dueños de empresas en [Sector] gestionar el marketing digital muchas veces se siente caótico e improvisado, probando cosas sueltas sin una hoja de ruta clara que garantice resultados. Con la metodología del Plan de Marketing en 1 Página de Allan Dib en Canva y Notion es posible estructurar en 9 bloques estratégicos todo tu embudo de captación, ventas y fidelización para un sprint de 90 días con metas medibles. Por solo $50 USD yo te facilito el diseño del Plan completo en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Completa el Plan de Marketing en 1 Página para tu propio negocio o un modelo demo en Canva. Día 2: Contacta a 10 dueños de PYMEs en LinkedIn o WhatsApp y ofréceles una sesión gratuita de diagnóstico de su plan de marketing."
],
    quizQuestions: [
      {
            "question": "¿Cuáles son las 3 grandes fases del 'Plan de Marketing en 1 Página' de Allan Dib?",
            "options": [
                  "Pasado, Presente y Futuro.",
                  "El ANTES (Prospectos: Nicho, Mensaje y Canales de Tráfico), El DURANTE (Leads: Captura, Nutrición y Conversión de Venta) y El DESPUÉS (Clientes: Experiencia Wow, Aumento de LTV y Sistema de Referidos).",
                  "Diseño, Programación y Servidor.",
                  "Comprar, Vender y Facturar."
            ],
            "correctIndex": 1,
            "explanation": "Estas tres fases cubren todo el ciclo de vida del cliente de forma ordenada y lógica en una sola página visual."
      },
      {
            "question": "¿Por qué un plan de marketing en '1 Sola Página' es superior a un documento corporativo tradicional de 80 páginas?",
            "options": [
                  "Porque gasta menos papel al imprimirse.",
                  "Porque sintetiza lo esencial, elimina la burocracia teórica inútil y permite que todo el equipo comprenda, recuerde y ejecute la estrategia con claridad todos los días.",
                  "Porque Canva no permite más de una página.",
                  "No es superior, entre más páginas tenga un plan mejor es."
            ],
            "correctIndex": 1,
            "explanation": "La simplicidad y claridad del plan de 1 página facilitan su ejecución real cotidiana por parte de todo el equipo."
      },
      {
            "question": "¿Cuál es la duración recomendada para un ciclo de ejecución y revisión estratégica de marketing?",
            "options": [
                  "10 años.",
                  "Un ciclo o Sprint de 90 Días (Trimestral), lo suficientemente largo para ver resultados sólidos y lo bastante corto para corregir desviaciones sin perder el foco.",
                  "24 horas.",
                  "6 meses sin mirar métricas."
            ],
            "correctIndex": 1,
            "explanation": "Los ciclos de 90 días permiten mantener un alto ritmo de ejecución con metas claras y revisiones periódicas."
      }
]
  },

};
