// Specific topic-by-topic content blueprints for Category 3 (Servicio al Cliente)
// Providing 100% custom, domain-accurate, highly actionable business literature for each of the 8 books (Tomos 25 al 32)
// Features:
// 1. 5,000-character Deep Learning Overview & Executive Briefing per book
// 2. Step-by-step Free Customer Service & CRM Tools Tutorials (WhatsApp Business, Meta Suite, Notion CRM, Google Forms/Sheets, Canva, Miro)
// 3. Real, accessible LATAM Monetization Services & Pricing (Junior $25-$60, Mid $80-$180, Senior $220-$500 USD)
// 4. Localized copy-paste sales outreach pitches & 48h action plans
// 5. 3 rigorous exam questions per book with detailed explanations

import { SpecificBookContent } from './category1Content';

export const CATEGORY_3_CUSTOM_BOOKS: Record<string, SpecificBookContent> = {
  // =========================================================================
  // BOOK ID: sc-1
  // =========================================================================
  'sc-1': {
    frameworkName: "Ecosistema de Conversión Móvil & Protocolo Conversacional Directo al Consumidor (D2C)",
    coreMetrics: [
      "Tasa de Apertura de Mensajes Móviles (> 95%)",
      "Tiempo Promedio de Primera Respuesta (< 90 segundos)",
      "Tasa de Conversión de Carrito Abandonado por Mensaje (> 22%)",
      "Costo por Adquisición Vía Canal Móvil (CAC Móvil)",
      "Índice de Retención Móvil (Opt-out Rate < 0.8%)"
],
    caseCompany: "Óptica & Visión Nova (Cadena de Salud Visual y Gafas de Sol)",
    caseOutcome: "Implementó un sistema automatizado de mensajería móvil para confirmación de citas de refracción, recordatorios de reposición de lentes de contacto y promociones segmentadas; aumentó la tasa de asistencia a consultas en un 44% y generó $38,000 USD en ventas recurrentes adicionales en el primer trimestre.",
    pitfall: "Saturar a los clientes con mensajes promocionales genéricos e impersonales a cualquier hora del día, provocando altas tasas de bajas (opt-out), bloqueos por spam y multas regulatorias.",
    actionItem1: "Establecer un protocolo de consentimiento expreso (Opt-in) con doble confirmación antes de enviar cualquier mensaje comercial a la línea móvil de un cliente.",
    actionItem2: "Segmentar la base de datos de números móviles según el historial de compras previas, intereses ópticos y frecuencia de interacción para personalizar cada notificación.",
    actionItem3: "Automatizar flujos de mensajes transaccionales de alto valor: confirmación de pedidos, alerta de despacho con enlace de seguimiento y recordatorios oportunos de reposición.",
    domainContext: "El teléfono móvil es el dispositivo más íntimo y personal de los consumidores; una estrategia de mensajería respetuosa, personalizada y de valor inmediato supera por 5x las tasas de conversión de los canales tradicionales de marketing.",
    strategicRationale: "Integrar los mensajes móviles en el embudo comercial acorta el ciclo de decisión de compra, reduce el ausentismo en citas de servicios y construye un canal de comunicación directo sin intermediación de algoritmos de redes sociales.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 95% de los mensajes que llegan a un teléfono móvil en América Latina son leídos en los primeros 3 minutos. Mientras que los correos electrónicos se pierden en la carpeta de promociones o spam, el mensaje móvil llega directo a la mano de tu cliente. Sin embargo, el 80% de los negocios usan los mensajes de forma torpe: envían cadenas masivas invasivas que enfurecen al usuario y provocan bloqueos. Este tomo te enseña a implementar un Ecosistema de Conversión Móvil profesional con confirmaciones automáticas, recuperación de ventas perdidas y recordatorios que multiplican la facturación.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Intimidad del Canal Móvil y Psicología de la Respuesta Inmediata: Por qué el comercio conversacional supera a las tiendas web tradicionales.\n• Capítulo 2: Los 4 Pilares de la Mensajería Efectiva: Captación con consentimiento, automatización por disparadores, respuestas en dos vías y horarios de respeto.\n• Capítulo 3: Protocolo Táctico de Implementación en 4 Semanas: Cómo conectar pasarelas de mensajería y configurar disparadores de carrito abandonado.\n• Capítulo 4: Caso de Estudio Real (Óptica Nova): Cómo redujeron el ausentismo del 35% al 9% y generaron $38,000 USD en ventas de reposición.\n• Capítulo 5: Mitigación de Bloqueos por Spam y Sanciones Legales: Cómo redactar enlaces transparentes y habilitar la baja voluntaria.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer el servicio de \"Sistematización de Mensajería Móvil y Recuperación de Ventas para Comercios\" cobrando entre $30 y $500 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. WhatsApp Business (Gratis): Configuración de perfil corporativo, etiquetas de clientes, mensajes de ausencia y respuestas rápidas.\n2. Google Sheets + Apps Script: Registro automático de números de clientes con consentimiento y fecha de última compra.\n3. ManyChat (Plan Gratuito): Creación de flujos de interacción automática para responder preguntas frecuentes y agendar citas.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nClínicas, ópticas, restaurantes, salones de belleza, tiendas de ropa y academias pierden ventas todos los días por no responder rápido:\n• Nivel Junior (Tus primeros 3 clientes): $30 – $60 USD por configuración de WhatsApp Business con catálogo, respuestas rápidas y etiquetas.\n• Nivel Intermedio (Con portafolio): $90 – $180 USD por automatización de flujos de recordatorio de citas y recuperación de carritos con ManyChat.\n• Nivel Senior / Consultor de Comercio Conversacional: $240 – $500 USD por estrategia integral de mensajería omnicanal, integración con CRM y campañas de reactivación mensual.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura un WhatsApp Business de demostración con 5 respuestas rápidas y 4 etiquetas de estado de pedido.\nDía 2: Contacta a 10 negocios de servicios locales (clínicas, estéticas o talleres) y ofréceles reducir sus citas canceladas en un 50%.",
    ch1CustomNarrative: [
      "El canal móvil ha dejado de ser una simple vía de soporte técnico para convertirse en el canal de ventas y fidelización más poderoso y rentable del comercio moderno.",
      "A diferencia del correo electrónico, donde las bandejas de entrada están inundadas de cientos de ofertas no solicitadas que rara vez se abren, los mensajes en dispositivos móviles disfrutan de una tasa de apertura superior al 95%, casi siempre en los primeros tres minutos tras su recepción.",
      "No obstante, esta cercanía extrema con el cliente conlleva una responsabilidad inmensa: entrar en el teléfono de una persona sin aportar valor real o con insistencia invasiva es la forma más rápida de destruir la confianza de marca.",
      "El éxito del marketing móvil no radica en el volumen de mensajes disparados, sino en la oportunidad temporal, la relevancia del contenido y la fluidez de la experiencia para el usuario."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO SISTEMATIZAR LA MENSAJERÍA MÓVIL EN WHATSAPP BUSINESS GRATIS:",
      "Paso 1: Descarga e instala WhatsApp Business en tu teléfono. Configura tu perfil de empresa: Nombre oficial, Logotipo de alta calidad, Horario de atención comercial (ej. Lunes a Sábado 9:00 a 19:00) y Dirección física con mapa.",
      "Paso 2: Ve a Herramientas de Empresa > Respuestas Rápidas. Configura atajos indispensables: /catalogo (Enlace directo a productos), /pago (Datos bancarios y enlace de pago seguro), /envio (Plazos y cobertura de entrega) y /cita (Enlace de reserva de hora).",
      "Paso 3: Crea un sistema de 4 Etiquetas de Colores para gestionar el embudo de clientes: 1. Nuevo Prospecto (Amarillo), 2. Esperando Pago (Naranja), 3. Pagado / En Preparación (Verde), 4. Entregado / Seguimiento Post-Venta (Azul).",
      "Paso 4: Configura el Mensaje de Ausencia automático para que cuando un cliente escriba fuera del horario comercial, reciba de inmediato una respuesta cortés informando cuándo será atendido y ofreciéndole el catálogo."
],
    ch3TacticalSteps: [
      "Semana 1: Integra una plataforma de mensajería empresarial vinculada a tu tienda online o sistema de punto de venta (POS).",
      "Semana 2: Diseña el formulario de registro en tu sitio web con casilla de verificación explícita para aceptar notificaciones móviles conforme a las leyes de protección de datos.",
      "Semana 3: Crea un flujo de recuperación de compras incompletas con un mensaje conciso: \"Hola [Nombre], guardamos tus productos. Completa tu pedido hoy con envío gratis usando este enlace: [Link]\".",
      "Semana 4: Mide la tasa de clics (CTR), la tasa de conversión final y la tasa de cancelaciones de suscripción para optimizar el texto y la oferta."
],
    ch4CaseDeepDive: [
      "Óptica Nova enfrentaba un 35% de inasistencias a los exámenes de la vista programados en sus 4 sucursales, lo que generaba horas muertas para sus optómetras.",
      "Implementaron un flujo de mensajes móviles en dos pasos: 24 horas antes enviaban un recordatorio con botones interactivos para confirmar o reprogramar la cita en un clic; y 2 horas antes, una indicación de ruta con mapa.",
      "Las inasistencias cayeron del 35% al 9% de inmediato.",
      "Adicionalmente, programaron un recordatorio automático a los 11 meses de la compra de lentes graduados invitando al chequeo anual preventivo, generando $38,000 USD en ventas de monturas y cristales en 90 días."
],
    ch5RiskMitigation: [
      "El riesgo de ser catalogado como Spam o recibir sanciones por violación de privacidad de datos.",
      "Mitigación: Incluye obligatoriamente en cada mensaje una instrucción clara y sencilla para darse de baja (ej. \"Responde CANCELAR para no recibir más mensajes\").",
      "Nunca compres bases de datos de números telefónicos de terceros; enviar mensajes a personas que no autorizaron el contacto destruye la reputación del dominio y de la línea telefónica.",
      "Evita el uso de enlaces acortados genéricos y sospechosos; utiliza URLs con tu propio dominio corporativo para transmitir seguridad."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Sistematización de Mensajería Móvil y Recuperación de Ventas para Comercios\". Ayuda a tiendas, clínicas, restaurantes y proveedores de servicios a organizar su canal de WhatsApp y recuperar ventas perdidas.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $30 - $60 USD por configuración de WhatsApp Business con catálogo, respuestas rápidas y etiquetas. • Nivel Intermedio (Con portafolio): $90 - $180 USD por automatización de flujos de recordatorio de citas y recuperación de carritos con ManyChat. • Nivel Senior / Consultor de Comercio Conversacional: $240 - $500 USD por estrategia integral de mensajería omnicanal, integración con CRM y campañas de reactivación mensual.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / Instagram DM): \"Hola [Nombre], noté que en [Negocio] atienden consultas por mensaje. Muchos negocios pierden hasta el 40% de sus clientes porque tardan en responder o no tienen respuestas automáticas configuradas cuando están ocupados. Por solo $35 USD yo te configuro tu WhatsApp Business con respuestas rápidas, catálogo y etiquetas de pedidos en 48 horas para que cierres más ventas en automático. ¿Te gustaría que te muestre una demo rápida?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura un WhatsApp Business de demostración con 5 respuestas rápidas y 4 etiquetas de estado de pedido. Día 2: Contacta a 10 negocios de servicios locales (clínicas, estéticas o talleres) y ofréceles reducir sus citas canceladas en un 50%."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la tasa de apertura promedio de los mensajes móviles (SMS o notificaciones directas) en comparación con el correo electrónico tradicional?",
            "options": [
                  "Menos del 5%, la gente casi nunca los revisa.",
                  "Supera habitualmente el 95%, abriéndose la inmensa mayoría dentro de los primeros 3 a 5 minutos tras su recepción.",
                  "Exactamente la misma tasa que el email marketing.",
                  "Solo se abren si la empresa regala dinero en efectivo."
            ],
            "correctIndex": 1,
            "explanation": "Los mensajes móviles ofrecen una visibilidad casi instantánea y una tasa de lectura superior a cualquier otro medio digital."
      },
      {
            "question": "¿Cuál es una práctica indispensable para evitar que una cuenta de mensajería empresarial sea bloqueada por spam?",
            "options": [
                  "Comprar bases de datos de números de teléfono en internet y enviar 10,000 mensajes diarios.",
                  "Obtener el consentimiento explícito del cliente (Opt-in) y ofrecer una opción clara y sencilla para cancelar la suscripción en cualquier momento.",
                  "Enviar mensajes a las 3 de la madrugada.",
                  "No identificarse nunca con el nombre de la empresa."
            ],
            "correctIndex": 1,
            "explanation": "El consentimiento y la opción de baja voluntaria protegen la reputación del canal y cumplen con las normativas legales de telecomunicaciones."
      },
      {
            "question": "¿Qué función cumplen las etiquetas de colores en WhatsApp Business para la gestión de clientes?",
            "options": [
                  "Hacer que la pantalla se vea más colorida.",
                  "Organizar a los clientes según la etapa en la que se encuentran en el embudo comercial (ej. nuevo prospecto, esperando pago, entregado) para no perder pedidos.",
                  "Bloquear a los clientes que hacen muchas preguntas.",
                  "Aumentar el brillo de la pantalla."
            ],
            "correctIndex": 1,
            "explanation": "Las etiquetas permiten a los agentes comerciales clasificar y dar seguimiento ordenado a decenas de conversaciones simultáneas."
      }
]
  },

  // =========================================================================
  // BOOK ID: sc-2
  // =========================================================================
  'sc-2': {
    frameworkName: "Protocolo de Atención Conversacional Ágil, Asistentes Híbridos (Bot + Humano) & Cierre en Mensajería",
    coreMetrics: [
      "Tiempo de Primera Respuesta (< 60 segundos)",
      "Tasa de Resolución en Primer Contacto (FCR > 75%)",
      "Tasa de Conversión de Chat a Venta (> 18%)",
      "Satisfacción del Cliente por Chat (CSAT > 4.6/5)",
      "Tiempo Medio de Gestión por Consulta (< 4 minutos)"
],
    caseCompany: "MundoGourmet Delivery & Tienda Especializada (Medellín, Colombia)",
    caseOutcome: "Estructuró un flujo de atención por WhatsApp y Telegram combinando un menú de opciones automáticas para pedidos frecuentes y transferencia fluida a asesores humanos para asesoría gastronómica; aumentó sus pedidos diarios de 45 a 130 y redujo las cancelaciones por demora en la atención en un 82%.",
    pitfall: "Implementar chatbots rígidos e interminables que atrapan al usuario en menús circulares sin permitir nunca hablar con un asesor humano cuando surge una duda compleja.",
    actionItem1: "Diseñar un árbol de decisiones conversacional de máximo 3 niveles para resolver las 5 preguntas más repetitivas del negocio en menos de 10 segundos.",
    actionItem2: "Incorporar un botón claro e inmediato de \"Hablar con un Asesor Humano\" en todas las ramas del menú de mensajería.",
    actionItem3: "Capacitar al equipo de atención en micro-redacción empática: respuestas breves, uso de audios cortos de cortesía y enlaces directos de pago.",
    domainContext: "Los clientes modernos prefieren chatear antes que llamar por teléfono o llenar formularios; la inmediatez y calidez de la mensajería instantánea son hoy el mayor factor de diferenciación competitiva.",
    strategicRationale: "Un canal de mensajería optimizado convierte conversaciones informales en ventas cerradas en tiempo real, mejorando la fidelidad del cliente y reduciendo los costos operativos de atención.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 73% de los consumidores latinoamericanos declaran que prefieren comprarle a un negocio con el que pueden chatear por WhatsApp que a uno donde deben llamar por teléfono o enviar un formulario web. Pero chatear mal destruye ventas: tardar 2 horas en responder un \"¿Cuánto cuesta?\" hace que el cliente le compre al competidor en 30 segundos. Este tomo te entrena en la arquitectura de Atención Conversacional Híbrida: cómo combinar respuestas instantáneas con el toque humano cálido para cerrar ventas en el chat.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Era del Comercio Conversacional: Por qué el chat es el nuevo punto de venta y la velocidad de respuesta es el rey.\n• Capítulo 2: El Modelo Híbrido Bot + Humano: Cómo automatizar el 70% de las dudas rutinarias y derivar el 30% estratégico a personas.\n• Capítulo 3: Protocolo de Respuestas Empáticas y Cierres en 3 Pasos: La técnica de validación, solución con enlace y llamada a la acción clara.\n• Capítulo 4: Caso de Estudio Real (MundoGourmet Delivery): Cómo triplicaron sus pedidos diarios en Medellín reduciendo el tiempo de espera.\n• Capítulo 5: Mitigación del Síndrome del Chatbot Frustrante: Reglas para no atrapar al cliente en bucles infinitos de opciones.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño de árboles conversacionales y guiones de venta para chat cobrando entre $25 y $450 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. WhatsApp Business Web: Herramientas de catálogo integrado, enlaces directos wa.me y respuestas pregrabadas.\n2. Meta Business Suite: Bandeja de entrada unificada para gestionar mensajes de WhatsApp, Instagram Direct y Facebook Messenger en una sola pantalla.\n3. Miro (Plan Gratuito): Diseño visual de diagramas de flujo conversacional y árboles de decisión para atención al cliente.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nCualquier tienda de ropa, pastelería, ferretería, inmobiliaria o consultorio que recibe decenas de mensajes diarios necesita optimizar su chat:\n• Nivel Junior: $25 – $50 USD por estructuración del catálogo de productos en WhatsApp Business + 10 respuestas rápidas.\n• Nivel Intermedio: $75 – $160 USD por diseño del árbol de atención al cliente en Meta Business Suite y capacitación del personal.\n• Nivel Senior / Especialista en Ventas por Chat: $200 – $450 USD por manual integral de ventas conversacionales, métricas de tiempo de respuesta y auditoría de chats.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Mapea en Miro un árbol de atención de 3 opciones (Comprar, Soporte, Horarios) y redacta los guiones de respuesta.\nDía 2: Contacta a 10 tiendas online de Instagram que tarden en responder y ofréceles optimizar sus respuestas para no perder clientes.",
    ch1CustomNarrative: [
      "La mensajería instantánea ha transformado radicalmente las expectativas del consumidor: la paciencia para esperar una respuesta por correo durante 24 horas ha desaparecido por completo.",
      "Cuando un cliente escribe por WhatsApp o mensaje directo, se encuentra en su momento de máxima intención de compra; cada minuto de retraso en la respuesta reduce drásticamente la probabilidad de cierre.",
      "No se trata únicamente de responder rápido con mensajes automáticos fríos y robóticos, sino de brindar una experiencia cercana, personalizada y resolutiva.",
      "El negocio que domina el arte de conversar y resolver en el chat se adueña de la preferencia y el bolsillo de los clientes."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO DISEÑAR UN ÁRBOL DE ATENCIÓN EN META BUSINESS SUITE GRATIS:",
      "Paso 1: Ingresa a Meta Business Suite (business.facebook.com) y ve a la sección Bandeja de Entrada > Automatizaciones.",
      "Paso 2: Activa la \"Respuesta Instantánea\" para Instagram y Facebook con el texto: \"¡Hola [Nombre]! Gracias por escribirnos a [Negocio]. ¿Cómo podemos ayudarte hoy? 1. Ver Catálogo y Precios. 2. Estado de mi Pedido. 3. Hablar con un Asesor.\"",
      "Paso 3: Configura \"Preguntas Frecuentes\": Añade las 4 preguntas más habituales (ej. Métodos de pago, Tiempos de entrega, Ubicación y Horarios) con botones de respuesta automática que incluyan fotos y enlaces directos.",
      "Paso 4: Asigna palabras clave automáticas: si el cliente escribe \"asesor\", \"humano\" o \"ayuda\", el sistema desactiva el bot y notifica al agente de turno con una alerta prioritaria en pantalla."
],
    ch3TacticalSteps: [
      "Semana 1: Analiza los últimos 100 chats recibidos y agrupa las dudas en las 5 categorías más recurrentes.",
      "Semana 2: Redacta plantillas de respuesta con tono conversacional, emojis oportunos y enlaces que faciliten la compra en un solo toque.",
      "Semana 3: Configura la bandeja unificada en Meta Business Suite para que todos los agentes atiendan desde una sola computadora.",
      "Semana 4: Mide semanalmente el tiempo promedio de primera respuesta y la tasa de conversión de prospectos a ventas cerradas."
],
    ch4CaseDeepDive: [
      "MundoGourmet en Medellín recibía más de 200 mensajes diarios por WhatsApp para pedidos de comida a domicilio, pero solo tenían a una persona contestando manualmente con un celular.",
      "Los clientes esperaban hasta 25 minutos por una respuesta y muchos cancelaban para pedir en plataformas de delivery que les cobraban 30% de comisión.",
      "Implementaron Meta Business Suite con 3 agentes conectados simultáneamente y un catálogo digital con fotos de alta calidad.",
      "El tiempo de respuesta cayó a menos de 45 segundos, aumentaron sus pedidos directos a 130 diarios y ahorraron más de $2,200 USD mensuales en comisiones de terceros."
],
    ch5RiskMitigation: [
      "Error mortal: Enviar párrafos gigantescos de texto plano que abruman al usuario en la pantalla de su teléfono.",
      "Regla de legibilidad: Divide las explicaciones en mensajes cortos de 2 a 3 líneas como máximo.",
      "Nunca dejes una conversación en visto sin una despedida cordial o confirmación de que la solicitud fue resuelta.",
      "Establece un protocolo de escalamiento rápido para clientes molestos: si un cliente expresa insatisfacción, transfiérelo de inmediato al supervisor con una llamada directa."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño de Flujos Conversacionales y Optimización de Ventas por Chat\". Ayuda a pequeños comercios y profesionales a configurar su bandeja de entrada y cerrar más ventas sin demoras.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $25 - $50 USD por estructuración del catálogo de productos en WhatsApp Business + 10 respuestas rápidas. • Nivel Intermedio (Con portafolio): $75 - $160 USD por diseño del árbol de atención al cliente en Meta Business Suite y capacitación del personal. • Nivel Senior / Especialista en Ventas por Chat: $200 - $450 USD por manual integral de ventas conversacionales, métricas de tiempo de respuesta y auditoría de chats.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / Correo): \"Hola [Nombre], sé que en [Empresa] reciben muchas consultas por redes y WhatsApp. Cuando un cliente espera más de 5 minutos por un precio, el 60% se va con la competencia. Por solo $30 USD yo te configuro un sistema de respuestas instantáneas en Meta Business Suite con catálogo y atajos para tus asesores, logrando responder en menos de 1 minuto. ¿Te gustaría que lo instalemos esta semana?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Mapea en Miro un árbol de atención de 3 opciones (Comprar, Soporte, Horarios) y redacta los guiones de respuesta. Día 2: Contacta a 10 tiendas online de Instagram que tarden en responder y ofréceles optimizar sus respuestas para no perder clientes."
],
    quizQuestions: [
      {
            "question": "¿Por qué es crucial contar con una opción visible de \"Hablar con un Asesor Humano\" en cualquier sistema de mensajería automatizada?",
            "options": [
                  "Para que los empleados no se queden sin trabajo.",
                  "Para evitar atrapar al cliente en bucles de opciones rígidas cuando tiene una consulta especial o un problema urgente que el bot no puede resolver.",
                  "Porque los bots consumen mucha batería del teléfono.",
                  "Para cobrarle una tarifa extra al cliente."
            ],
            "correctIndex": 1,
            "explanation": "La frustración con los chatbots ocurre cuando no permiten la intervención humana ante dudas no estandarizadas."
      },
      {
            "question": "¿Cuál es el formato de mensaje más efectivo para comunicar información comercial en aplicaciones de mensajería?",
            "options": [
                  "Textos extensos de 500 palabras sin espacios.",
                  "Mensajes cortos y concisos de 2 a 3 líneas con enlaces claros y llamadas a la acción directas.",
                  "Enviar únicamente emojis sin ninguna palabra.",
                  "Archivos adjuntos en formato ZIP."
            ],
            "correctIndex": 1,
            "explanation": "Los mensajes breves y bien estructurados facilitan la lectura rápida en pantallas móviles pequeñas."
      },
      {
            "question": "¿Qué ventaja operativa ofrece Meta Business Suite a un negocio que vende por redes sociales?",
            "options": [
                  "Regala seguidores falsos en Instagram.",
                  "Centraliza los mensajes de WhatsApp, Instagram Direct y Facebook Messenger en una sola bandeja de entrada multidispositivo para varios agentes.",
                  "Elimina la necesidad de tener productos en venta.",
                  "Paga las comisiones de los repartidores."
            ],
            "correctIndex": 1,
            "explanation": "La bandeja unificada agiliza la atención y evita que los mensajes de clientes se queden sin responder en diferentes aplicaciones."
      }
]
  },

  // =========================================================================
  // BOOK ID: sc-3
  // =========================================================================
  'sc-3': {
    frameworkName: "Arquitectura de CRM de Alto Rendimiento, Gestión de Pipeline de Clientes & Automatización de Seguimiento",
    coreMetrics: [
      "Tasa de Adopción del CRM por el Equipo (> 90%)",
      "Velocidad de Avance en el Pipeline (Pipeline Velocity)",
      "Tasa de Retención de Clientes (Customer Retention Rate)",
      "Valor del Ciclo de Vida del Cliente (LTV)",
      "Tasa de Pérdida de Prospectos por Falta de Seguimiento (< 5%)"
],
    caseCompany: "Consultora Contable & Tributaria AsesorPlus (Lima, Perú)",
    caseOutcome: "Migró el registro de clientes de libretas y chats individuales a un CRM gratuito en Notion y HubSpot; estandarizó un pipeline de 5 etapas con tareas automáticas de seguimiento; redujo los prospectos olvidados a cero y elevó su tasa de conversión de propuestas del 24% al 58% en 4 meses.",
    pitfall: "Comprar un software CRM corporativo costoso y complejo sin haber definido previamente los procesos de venta, resultando en que el equipo lo abandone a las dos semanas y vuelva a usar notas adhesivas.",
    actionItem1: "Mapear las 5 etapas innegociables del embudo de ventas: Contacto Inicial, Diagnóstico de Necesidades, Propuesta Enviada, Negociación y Cierre (Ganado/Perdido).",
    actionItem2: "Implementar un CRM ágil y sin costo de licencias (Notion CRM o HubSpot Free) con campos obligatorios: Nombre, Teléfono, Monto Estimado y Fecha de Próximo Contacto.",
    actionItem3: "Instaurar la regla directiva: \"Lo que no está registrado en el CRM, no existe\", auditando semanalmente los tratos estancados.",
    domainContext: "Un CRM no es una base de datos estática de teléfonos, sino el motor central que organiza las relaciones, la memoria histórica de cada cliente y el flujo de caja futuro de la empresa.",
    strategicRationale: "Sistematizar el seguimiento comercial mediante un CRM elimina la dependencia de la memoria individual de los vendedores y multiplica la tasa de cierre de ventas.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 60% de las ventas en empresas de servicios se pierden no porque el precio sea alto o el producto sea malo, sino por falta de seguimiento: el vendedor envía la cotización y nunca vuelve a llamar al cliente. Cuando la información de los clientes vive en libretas de papel, notas adhesivas o en los teléfonos personales de los empleados, el negocio es vulnerable y desordenado. Este tomo te entrena para implementar un CRM (Customer Relationship Management) ágil y gratuito para tener control total de tus prospectos y ventas.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: Por Qué las Empresas sin CRM Pierden el 40% de sus Ventas: La fuga invisible de prospectos en el proceso de seguimiento.\n• Capítulo 2: Las 5 Etapas Canónicas del Pipeline de Ventas: Prospección, Calificación, Propuesta, Negociación y Cierre.\n• Capítulo 3: Protocolo de Montaje de un CRM en Notion o HubSpot Gratis: Campos clave, alertas de seguimiento y vistas de tablero Kanban.\n• Capítulo 4: Caso de Estudio Real (AsesorPlus Consultores): Cómo pasaron del 24% al 58% de tasa de cierre en Lima con Notion CRM.\n• Capítulo 5: Mitigación de la Resistencia del Equipo al Uso del CRM: La regla de la simplicidad y auditorías de tratos activos.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de implementación de CRM para PYMEs cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Notion (notion.so): Plantilla de CRM de Ventas con vista Kanban de Pipeline, historial de interacciones y recordatorios.\n2. HubSpot CRM (Plan Gratuito): Gestión de contactos ilimitados, seguimiento de apertura de correos y programación de reuniones.\n3. Google Sheets: Base de datos de clientes normalizada lista para importar a cualquier plataforma de CRM.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nDespachos de abogados, inmobiliarias, agencias de publicidad, constructoras y distribuidoras necesitan urgentemente ordenar su proceso comercial:\n• Nivel Junior: $40 – $80 USD por diseño y personalización de un CRM en Notion con vista de Pipeline para 1 a 3 usuarios.\n• Nivel Intermedio: $120 – $250 USD por implementación completa en HubSpot Free con importación de base de datos y capacitación del equipo.\n• Nivel Senior / Consultor de Procesos Comerciales: $300 – $600 USD por reingeniería del embudo de ventas, automatización de tareas y cuadro de mando de conversión.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la plantilla de CRM en Notion con las 5 etapas del pipeline y datos de 5 clientes de muestra.\nDía 2: Contacta a 10 empresas de servicios B2B en LinkedIn y ofréceles una sesión de 30 minutos para organizar su pipeline comercial.",
    ch1CustomNarrative: [
      "El mayor activo intangible de una empresa no son sus oficinas ni su maquinaria, sino la relación de confianza y la información acumulada sobre sus clientes.",
      "Cuando un negocio depende de la memoria de sus vendedores o de libretas de apuntes desordenadas, cada vez que un colaborador renuncia se lleva consigo años de información comercial invaluable.",
      "Un CRM profesional democratiza y protege la memoria histórica de la empresa: permite saber con exactitud qué compró cada cliente, cuándo fue el último contacto y qué promesa comercial quedó pendiente.",
      "Implementar un CRM no requiere contratar consultores costosos ni pagar licencias privativas; requiere disciplina de registro y procesos claros de seguimiento."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UN CRM DE VENTAS EN NOTION GRATIS PASO A PASO:",
      "Paso 1: Abre Notion (notion.so) y crea una nueva página titulada \"CRM_Comercial_Empresa\". Crea una base de datos con vista de \"Tablero (Board View)\".",
      "Paso 2: Configura las columnas del tablero según las 5 etapas del embudo: 1. Prospecto Nuevo, 2. Diagnóstico / Reunión, 3. Propuesta Enviada, 4. En Negociación, 5. Ganado / Perdido.",
      "Paso 3: Añade propiedades esenciales a cada tarjeta: Nombre de Empresa, Contacto Principal, Teléfono WhatsApp, Monto Estimado ($ USD), Vendedor Asignado y Fecha de Próximo Seguimiento.",
      "Paso 4: Crea una vista filtrada llamada \"Seguimientos_De_Hoy\": filtra las tarjetas donde la Fecha de Próximo Seguimiento sea igual o anterior a la fecha actual, garantizando que ningún cliente quede sin contactar."
],
    ch3TacticalSteps: [
      "Semana 1: Recopila todas las bases de datos dispersas (tarjetas de visita, chats de WhatsApp, hojas de cálculo) en un solo archivo CSV normalizado.",
      "Semana 2: Importa los contactos al CRM (Notion o HubSpot) y asigna un responsable comercial a cada cuenta activa.",
      "Semana 3: Establece una reunión semanal de 20 minutos (Pipeline Review) los lunes por la mañana para revisar el avance de cada oportunidad.",
      "Semana 4: Analiza los motivos de pérdida de propuestas para identificar patrones y ajustar precios o argumentos de venta."
],
    ch4CaseDeepDive: [
      "AsesorPlus en Lima tenía 4 contadores que enviaban cotizaciones de asesoría tributaria a empresas pero no tenían un registro centralizado.",
      "El 70% de las propuestas quedaban en el olvido porque los contadores se concentraban en el trabajo operativo diario y olvidaban llamar al cliente para dar seguimiento.",
      "Implementaron Notion CRM con alertas automáticas de seguimiento a los 3 y 7 días del envío de cada propuesta.",
      "En solo 4 meses, recuperaron 18 clientes que daban por perdidos, duplicaron su tasa de cierre al 58% y sumaron $14,500 USD de facturación mensual recurrente."
],
    ch5RiskMitigation: [
      "El error más común: Exigir al equipo llenar 30 campos obligatorios en cada contacto, lo que genera rechazo y desidia.",
      "Aplica el principio de minimalismo: Solo exige los 4 datos vitales para vender (Nombre, Teléfono, Monto y Próxima Acción).",
      "Realiza copias de seguridad mensuales de tu base de datos de clientes en formato CSV.",
      "Garantiza el cumplimiento de las leyes de protección de datos personales almacenando la información en plataformas seguras con autenticación de dos factores."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Implementación de CRM y Pipeline de Ventas para PYMEs\". Ofrece este servicio a despachos, agencias, inmobiliarias y empresas de servicios B2B para organizar su seguimiento de clientes.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por diseño y personalización de un CRM en Notion con vista de Pipeline para 1 a 3 usuarios. • Nivel Intermedio (Con portafolio): $120 - $250 USD por implementación completa en HubSpot Free con importación de base de datos y capacitación del equipo. • Nivel Senior / Consultor de Procesos Comerciales: $300 - $600 USD por reingeniería del embudo de ventas, automatización de tareas y cuadro de mando de conversión.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], en empresas de servicios como [Empresa] es muy común que se envíen cotizaciones y por falta de tiempo no se haga el seguimiento a tiempo, perdiendo ventas valiosas. Por solo $45 USD yo te implemento un CRM personalizado en Notion con tablero Kanban de ventas y alertas de seguimiento en 3 días para que tu equipo no pierda ni una sola oportunidad. ¿Te gustaría ver cómo funciona la plantilla?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de CRM en Notion con las 5 etapas del pipeline y datos de 5 clientes de muestra. Día 2: Contacta a 10 empresas de servicios B2B en LinkedIn y ofréceles una sesión de 30 minutos para organizar su pipeline comercial."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la función principal de un CRM en una pequeña o mediana empresa?",
            "options": [
                  "Servir como una libreta de teléfonos estática.",
                  "Centralizar la información de los clientes, organizar el pipeline de ventas y garantizar un seguimiento sistemático en cada etapa comercial.",
                  "Calcular automáticamente los impuestos del país.",
                  "Enviar correos electrónicos sin autorización."
            ],
            "correctIndex": 1,
            "explanation": "El CRM asegura que toda la organización tenga visibilidad del estado de cada cliente y automatiza los seguimientos comerciales."
      },
      {
            "question": "¿Por qué fracasan muchas implementaciones de software CRM en empresas?",
            "options": [
                  "Porque el software funciona demasiado rápido.",
                  "Por comprar herramientas demasiado complejas con decenas de campos obligatorios que el equipo no usa por falta de simplicidad y procesos claros.",
                  "Porque a los clientes no les gusta que los atiendan bien.",
                  "Porque no se pueden usar en computadoras."
            ],
            "correctIndex": 1,
            "explanation": "La simplicidad y la alineación con el proceso real de venta son los factores críticos para que un equipo adopte el CRM con éxito."
      },
      {
            "question": "¿Qué representa una vista de \"Tablero Kanban\" en un CRM de ventas?",
            "options": [
                  "Una lista de precios de la competencia.",
                  "Una visualización gráfica por columnas de las etapas del embudo comercial (ej. prospecto, propuesta, cierre) que permite mover tarjetas con un clic.",
                  "Un balance general de pérdidas y ganancias.",
                  "Un mapa geográfico de las oficinas de la empresa."
            ],
            "correctIndex": 1,
            "explanation": "El tablero Kanban permite a los directores y vendedores ver de un vistazo el volumen y estado de todos los negocios en curso."
      }
]
  },

  // =========================================================================
  // BOOK ID: sc-4
  // =========================================================================
  'sc-4': {
    frameworkName: "Sistema de Medición de Satisfacción (CSAT / NPS), Auditoría de Voz del Cliente (VoC) & Protocolo de Cierre de Ciclo",
    coreMetrics: [
      "Net Promoter Score (NPS > +50)",
      "Índice de Satisfacción del Cliente (CSAT > 88%)",
      "Puntuación de Esfuerzo del Cliente (CES < 2.0)",
      "Tasa de Respuesta a Encuestas (> 25%)",
      "Tiempo de Cierre de Ciclo con Clientes Detractores (< 24 horas)"
],
    caseCompany: "Laboratorios Clínicos Sanitas Integrales (Guayaquil, Ecuador)",
    caseOutcome: "Implementó encuestas automáticas de CSAT de una sola pregunta por WhatsApp tras la entrega de resultados; identificó que la principal queja era la demora en la entrega de facturas electrónicas; solucionó el cuello de botella, elevó su NPS de +18 a +64 y aumentó la tasa de recomendación boca a boca en un 38%.",
    pitfall: "Enviar encuestas extensas y aburridas de 20 preguntas que nadie responde, o recopilar quejas de clientes sin tener un protocolo para contactar y solucionar los problemas de los usuarios insatisfechos.",
    actionItem1: "Diseñar una micro-encuesta CSAT de una sola pregunta con escala del 1 al 5 y un campo opcional para comentarios de texto.",
    actionItem2: "Automatizar el envío de la encuesta inmediatamente después de finalizada la experiencia de compra o servicio a través de Google Forms o WhatsApp.",
    actionItem3: "Establecer el protocolo de 'Cierre de Ciclo': llamar personalmente a cualquier cliente que califique con 1 o 2 estrellas en menos de 24 horas para resolver su inconformidad.",
    domainContext: "No puedes mejorar lo que no mides: escuchar de forma sistemática y honesta la voz del cliente es la única vacuna contra la complacencia directiva y la fuga silenciosa de mercado.",
    strategicRationale: "Medir y gestionar la satisfacción del cliente de forma proactiva reduce el costo de adquisición, convierte a clientes neutrales en promotores apasionados y blinda la reputación de la marca.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 96% de los clientes insatisfechos nunca se quejan directamente con la empresa: simplemente se van en silencio y le cuentan su mala experiencia a un promedio de 15 personas. Los directivos que creen que 'todo va bien porque nadie reclama' están sentados sobre una bomba de tiempo. Este tomo te enseña a diseñar e implementar un Sistema de Medición de Satisfacción (CSAT y NPS) ágil y automatizado para escuchar la verdad de tus clientes, corregir fallas operativas y convertirlos en promotores leales.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Costo Oculto de la Fuga Silenciosa de Clientes: Por qué los clientes que no se quejan son los más peligrosos.\n• Capítulo 2: Las Métricas Maestras de la Experiencia: CSAT (Satisfacción), NPS (Lealtad) y CES (Facilidad de uso).\n• Capítulo 3: Protocolo de Diseño de Micro-Encuestas de 1 Clic: Cómo lograr tasas de respuesta superiores al 30% sin cansar al usuario.\n• Capítulo 4: Caso de Estudio Real (Laboratorios Sanitas): Cómo subieron su NPS de +18 a +64 en Guayaquil con encuestas de 1 pregunta.\n• Capítulo 5: Protocolo de Rescate de Clientes Detractores: Cómo transformar una mala experiencia en una relación de fidelidad de por vida en 24 horas.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultorías de medición de satisfacción y experiencia del cliente cobrando entre $30 y $480 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Forms (forms.google.com): Creación de encuestas de satisfacción con diseño corporativo y escala de estrellas.\n2. Google Sheets: Tablero automatizado de cálculo de NPS y CSAT con gráficos dinámicos y alertas condicionales.\n3. Enlaces Cortos con QR (Canva / QR Code Generator): Códigos QR en mostradores y recibos para captura de opinión en el punto de venta.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nRestaurantes, laboratorios, clínicas, hoteles, tiendas y talleres mecánicos necesitan saber qué opinan sus clientes para no perderlos:\n• Nivel Junior: $30 – $60 USD por diseño de encuesta CSAT/NPS en Google Forms + plantilla de cálculo en Google Sheets.\n• Nivel Intermedio: $80 – $170 USD por implementación del sistema completo con códigos QR en local, enlaces de WhatsApp y reporte mensual de hallazgos.\n• Nivel Senior / Auditor de Experiencia de Cliente: $220 – $480 USD por auditoría integral de Voz del Cliente (VoC), diseño del protocolo de rescate y capacitación del personal.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la micro-encuesta de 1 pregunta en Google Forms y conecta las respuestas a la plantilla de Google Sheets.\nDía 2: Visita 5 comercios locales de tu zona y ofréceles instalar una prueba piloto de medición de satisfacción con código QR gratis.",
    ch1CustomNarrative: [
      "La mayoría de las empresas operan con una venda en los ojos respecto a lo que sus clientes realmente opinan y sienten sobre su servicio.",
      "Que los clientes no presenten quejas formales en el mostrador no significa que estén satisfechos; la gran mayoría prefiere no discutir y simplemente no volver nunca más.",
      "Escuchar la voz del cliente no debe ser un evento anual extraordinario, sino un pulso continuo integrado de manera natural en cada interacción comercial.",
      "Un cliente que experimenta un problema pero ve que la empresa lo resuelve con rapidez y humildad se vuelve más leal que uno que jamás tuvo ningún inconveniente."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UN SISTEMA DE MEDICIÓN CSAT / NPS CON GOOGLE FORMS Y SHEETS GRATIS:",
      "Paso 1: Abre Google Forms (forms.google.com) y crea un formulario titulado \"Tu Opinión Nos Importa - [Nombre Empresa]\". Añade solo 2 preguntas: 1. \"¿Cómo calificarías tu experiencia de hoy?\" (Escala lineal del 1 al 5 con emojis: 1=Muy Mala, 5=Excelente). 2. \"¿Qué podemos mejorar para tu próxima visita?\" (Párrafo corto opcional).",
      "Paso 2: Ve a la pestaña Respuestas > Vincular con Hojas de Cálculo. En Google Sheets, crea una pestaña llamada \"Calculadora_CSAT\".",
      "Paso 3: En la celda de CSAT %, ingresa la fórmula: =CONTAR.SI(Respuestas!B:B, \">=4\") / CONTAR(Respuestas!B:B). Aplica formato de porcentaje.",
      "Paso 4: Genera un código QR gratuito con el enlace directo del formulario usando Canva y colócalo en mostradores, mesas, firmas de correo electrónico y tickets de compra."
],
    ch3TacticalSteps: [
      "Semana 1: Diseña la micro-encuesta con la identidad visual de la empresa y prueba el flujo desde un teléfono móvil.",
      "Semana 2: Imprime material físico (stickers, acrílicos con QR) para los puntos de venta y programa el mensaje de WhatsApp post-servicio.",
      "Semana 3: Revisa diariamente las calificaciones recibidas y asigna a un responsable para contactar a cualquier usuario insatisfecho.",
      "Semana 4: Presenta al equipo operativo el informe mensual destacando las felicitaciones y los 3 puntos clave a corregir."
],
    ch4CaseDeepDive: [
      "Laboratorios Sanitas en Guayaquil atendía a más de 3,000 pacientes al mes pero su tasa de pacientes recurrentes venía cayendo un 12% anual sin motivo aparente.",
      "Implementaron una encuesta de 1 pregunta enviada por WhatsApp junto con el PDF de los resultados médicos.",
      "En el primer mes recibieron 850 respuestas y descubrieron que el 45% de las quejas se debían a que la factura electrónica tardaba 48 horas en llegar al correo de las empresas de seguros.",
      "Automatizaron la emisión instantánea de la factura al momento del cobro: el NPS saltó de +18 a +64 y la retención de pacientes aumentó un 38% en 6 meses."
],
    ch5RiskMitigation: [
      "Trampa habitual: Realizar encuestas para premiar o castigar a los empleados sin corregir las fallas estructurales del proceso.",
      "Utiliza los datos de satisfacción como una herramienta de aprendizaje y mejora continua, no como un instrumento de persecución laboral.",
      "Nunca ignores un comentario negativo: agradecer la crítica y ofrecer una disculpa sincera desarma el enojo del cliente.",
      "Protege el anonimato del cliente si la encuesta evalúa a un profesional específico para obtener respuestas 100% sinceras."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Sistema de Medición de Satisfacción al Cliente (CSAT & NPS) y Auditoría de Servicio\". Ayuda a clínicas, restaurantes, talleres, hoteles y tiendas a medir la experiencia de sus clientes de forma profesional.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $30 - $60 USD por diseño de encuesta CSAT/NPS en Google Forms + plantilla de cálculo en Google Sheets. • Nivel Intermedio (Con portafolio): $80 - $170 USD por implementación del sistema completo con códigos QR en local, enlaces de WhatsApp y reporte mensual de hallazgos. • Nivel Senior / Auditor de Experiencia de Cliente: $220 - $480 USD por auditoría integral de Voz del Cliente (VoC), diseño del protocolo de rescate y capacitación del personal.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / Presencial): \"Hola [Nombre], en negocios de tu sector el 90% de los clientes insatisfechos no se quejan, simplemente no vuelven y le hablan mal del negocio a sus conocidos. Por solo $35 USD yo te configuro un Sistema de Medición de Satisfacción con código QR en Google Forms y tablero de control en Google Sheets para que sepas en tiempo real qué piensan tus clientes y rescates a los clientes descontentos antes de que se vayan. ¿Te gustaría ver un ejemplo?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la micro-encuesta de 1 pregunta en Google Forms y conecta las respuestas a la plantilla de Google Sheets. Día 2: Visita 5 comercios locales de tu zona y ofréceles instalar una prueba piloto de medición de satisfacción con código QR gratis."
],
    quizQuestions: [
      {
            "question": "¿Qué mide el indicador CSAT (Customer Satisfaction Score)?",
            "options": [
                  "El saldo de dinero en la cuenta bancaria de la empresa.",
                  "El porcentaje de satisfacción inmediata de los clientes con respecto a una experiencia de compra o servicio específica (habitualmente medido con una escala del 1 al 5).",
                  "La velocidad del internet en las oficinas.",
                  "La cantidad de llamadas telefónicas realizadas en un día."
            ],
            "correctIndex": 1,
            "explanation": "El CSAT mide la satisfacción puntual con un producto, interacción o servicio inmediatamente después de ocurrir."
      },
      {
            "question": "¿Qué se debe hacer según el protocolo de 'Cierre de Ciclo' cuando un cliente califica un servicio con 1 o 2 estrellas (detractor)?",
            "options": [
                  "Borrar la respuesta para que no afecte el promedio.",
                  "Contactar al cliente en menos de 24 horas para escuchar su problema con empatía, ofrecer una disculpa sincera y brindarle una solución inmediata.",
                  "Bloquear al cliente en todas las redes sociales.",
                  "Culpar al cliente por no entender el producto."
            ],
            "correctIndex": 1,
            "explanation": "El cierre de ciclo rápido rescata al cliente inconforme y evita que difunda malas referencias en internet."
      },
      {
            "question": "¿Por qué las micro-encuestas de 1 o 2 preguntas tienen una tasa de respuesta mucho más alta que los formularios extensos?",
            "options": [
                  "Porque los clientes pueden responderlas en menos de 10 segundos desde su teléfono móvil sin sentir que pierden su tiempo.",
                  "Porque los formularios largos están prohibidos por la ley.",
                  "Porque los teléfonos no pueden abrir más de 2 preguntas.",
                  "Porque las micro-encuestas regalan autos nuevos."
            ],
            "correctIndex": 0,
            "explanation": "La brevedad y facilidad de respuesta aumentan drásticamente la participación de los usuarios."
      }
]
  },

  // =========================================================================
  // BOOK ID: sc-5
  // =========================================================================
  'sc-5': {
    frameworkName: "Ecosistema de Lealtad Emocional, Momentos 'Wow' & Programa de Retención Activa",
    coreMetrics: [
      "Tasa de Recompra a 90 Días (> 35%)",
      "Frecuencia Promedio de Visita Mensual",
      "Costo de Retención de Clientes (CRC)",
      "Tasa de Churn / Deserción de Clientes (< 3%)",
      "Incremento en el Ticket Promedio por Fidelización (+25%)"
],
    caseCompany: "Boutique & Café La Tostaduría Gourmet (Santiago, Chile)",
    caseOutcome: "Creó un programa de fidelización digital simple en Google Sheets y tarjetas móviles en Canva; implementó un protocolo de detalles de cortesía ('Momentos Wow') en el tercer café de cada cliente; aumentó la retención de clientes del 22% al 61% y triplicó las recomendaciones en Google Maps.",
    pitfall: "Creer que la lealtad se compra únicamente con descuentos de precios que destruyen los márgenes del negocio, en lugar de construir experiencias memorables y reconocimiento personal del cliente.",
    actionItem1: "Diseñar una tarjeta de lealtad digital en Canva con una regla simple: recompensa garantizada en la 5ª visita para acelerar el hábito de compra.",
    actionItem2: "Registrar las preferencias de los clientes frecuentes (su nombre, su producto favorito, cumpleaños) en una base de datos sencilla.",
    actionItem3: "Capacitar al personal para ejecutar un 'Momento Wow' inesperado: un detalle de cortesía o muestra gratis que supere las expectativas.",
    domainContext: "Conseguir un cliente nuevo cuesta entre 5 y 7 veces más que retener a un cliente actual; un cliente que regresa de forma habitual es el motor más rentable y predecible de cualquier empresa.",
    strategicRationale: "Fidelizar a la base de clientes existente estabiliza los ingresos mensuales, reduce la dependencia de publicidad de pago y genera un efecto multiplicador por recomendaciones espontáneas.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 80% de los presupuestos de marketing de las empresas en América Latina se gastan en conseguir clientes nuevos que compran una sola vez y nunca más regresan. Captar un cliente nuevo cuesta 6 veces más que hacer que un cliente actual vuelva a comprar. Los negocios más exitosos y rentables no son los que tienen más anuncios, sino los que convierten a compradores ocasionales en fanáticos de por vida. Este tomo te enseña a diseñar Programas de Lealtad Digitales y crear 'Momentos Wow' que multiplican la tasa de recompra sin regalar tus márgenes.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Economía de la Retención: Por qué un aumento del 5% en retención puede duplicar las ganancias netas de un negocio.\n• Capítulo 2: La Arquitectura de los Programas de Fidelización Modernos: Puntos, sellos digitales y recompensas escalonadas sin software caro.\n• Capítulo 3: Protocolo de Diseño de 'Momentos Wow': Cómo crear detalles inesperados que los clientes fotografían y comparten en redes sociales.\n• Capítulo 4: Caso de Estudio Real (La Tostaduría Café): Cómo pasaron del 22% al 61% de retención en Santiago con tarjetas móviles.\n• Capítulo 5: Mitigación de Descuentos Destructivos: Por qué premiar con valor y experiencias supera siempre a regalar descuentos en dinero.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño e implementación de programas de fidelización para comercios cobrando entre $35 y $500 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Canva (canva.com): Diseño de tarjetas de lealtad digitales (Digital Stamp Cards) listas para guardar en el móvil del cliente.\n2. Google Sheets: Sistema de control de visitas, puntos acumulados y alertas de cumpleaños de clientes.\n3. WhatsApp Business: Mensajes de felicitación personalizados con incentivo de consumo en la semana de cumpleaños.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nRestaurantes, cafeterías, peluquerías, gimnasios, veterinarias y spas necesitan que sus clientes vuelvan con más frecuencia:\n• Nivel Junior: $35 – $70 USD por diseño visual de la tarjeta de lealtad en Canva + plantilla de registro en Google Sheets.\n• Nivel Intermedio: $100 – $200 USD por diseño del programa de fidelización completo, protocolo de 'Momentos Wow' y automatización de cumpleaños.\n• Nivel Senior / Consultor de Retención de Clientes: $250 – $500 USD por estrategia integral de fidelidad, análisis de LTV y capacitación del equipo de servicio.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Diseña 2 modelos de tarjetas de fidelidad en Canva (una para cafetería y otra para peluquería) y la hoja de cálculo de puntos en Sheets.\nDía 2: Visita 5 comercios locales y ofréceles probar el sistema de sellos digitales para aumentar la frecuencia de sus clientes.",
    ch1CustomNarrative: [
      "En el mundo comercial existe una obsesión desmedida por la captación de nuevos clientes, mientras se descuida con total indiferencia a quienes ya han confiado y pagado en el negocio.",
      "Venderle a un cliente existente tiene una probabilidad de éxito del 60% al 70%, mientras que venderle a un prospecto frío apenas alcanza un 5% a 20%.",
      "Un servicio al cliente memorable no consiste en sonreír falsamente, sino en reconocer al cliente por su nombre, recordar sus preferencias y hacerle sentir valorado.",
      "Cuando creas una experiencia emocionalmente gratificante, el precio pasa a segundo plano y la lealtad se vuelve incondicional."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UN PROGRAMA DE FIDELIDAD DIGITAL EN CANVA Y GOOGLE SHEETS GRATIS:",
      "Paso 1: Abre Canva (canva.com) y busca la plantilla \"Tarjeta de Fidelidad / Loyalty Card\". Diseña una tarjeta de 8 sellos con la identidad visual del negocio. Incluye la regla: \"Por cada $10 USD de compra recibe 1 sello. Al completar 8 sellos, tu próximo consumo tiene un postre o servicio express gratis\".",
      "Paso 2: En Google Sheets, crea la hoja \"Programa_Fidelidad_Clientes\". Añade columnas: ID Cliente, Nombre Completo, WhatsApp, Fecha de Nacimiento, Total Visitas, Puntos Acumulados y Última Visita.",
      "Paso 3: Crea una columna condicional \"Alerta_Inactividad\": si la fecha de última visita supera los 45 días, la celda se ilumina en amarillo para disparar un mensaje de reactivación por WhatsApp.",
      "Paso 4: Exporta la tarjeta de Canva en formato PNG de alta calidad y configúrala para enviarla por WhatsApp al cliente al registrar su primera compra."
],
    ch3TacticalSteps: [
      "Semana 1: Define la recompensa final del programa asegurando que el costo del premio no supere el 8% del gasto total acumulado del cliente.",
      "Semana 2: Capacita a los cajeros y meseros para invitar a cada comprador a unirse al programa en menos de 15 segundos durante el pago.",
      "Semana 3: Configura una rutina semanal para enviar mensajes de cumpleaños con una cortesía válida durante todo el mes.",
      "Semana 4: Mide la tasa de retorno de los clientes inscritos en comparación con los clientes no registrados en el programa."
],
    ch4CaseDeepDive: [
      "La Tostaduría en Santiago tenía un café de especialidad de primera calidad pero el 78% de sus clientes eran personas de paso que nunca regresaban.",
      "Implementaron una tarjeta de sellos digital en WhatsApp donde el 6º café era gratis, y añadieron una galleta artesanal de cortesía personalizada en la 3ª visita de cada cliente.",
      "En 3 meses, más de 600 clientes habituales se registraron en el sistema.",
      "La tasa de retención mensual subió del 22% al 61%, el gasto promedio mensual por cliente aumentó un 34% y las reseñas positivas en Google Maps se triplicaron."
],
    ch5RiskMitigation: [
      "Error crítico: Exigir demasiados pasos o compras imposibles (ej. \"acumula 50 sellos para ganar un bolígrafo\"), lo que desmotiva al cliente.",
      "Mantén las metas cortas y alcanzables: el primer premio debe poder conseguirse en las primeras 4 a 6 compras.",
      "Evita que las recompensas pierdan validez sin aviso previo; avisa al cliente 15 días antes de cualquier vencimiento de puntos.",
      "Nunca prometas un beneficio que el personal de tienda desconozca o se niegue a validar en caja."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño e Implementación de Programas de Lealtad y Fidelización de Clientes\". Ofrece este servicio a cafeterías, restaurantes, salones de belleza, gimnasios, tiendas de ropa y clínicas veterinarias.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $35 - $70 USD por diseño visual de la tarjeta de lealtad en Canva + plantilla de registro en Google Sheets. • Nivel Intermedio (Con portafolio): $100 - $200 USD por diseño del programa de fidelización completo, protocolo de 'Momentos Wow' y automatización de cumpleaños. • Nivel Senior / Consultor de Retención de Clientes: $250 - $500 USD por estrategia integral de fidelidad, análisis de LTV y capacitación del equipo de servicio.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / Presencial): \"Hola [Nombre], en negocios como [Negocio] captar clientes nuevos en redes es cada vez más caro. La verdadera ganancia está en lograr que los clientes que ya te compraron regresen una y otra vez cada mes. Por solo $40 USD yo te diseño un Programa de Fidelización Digital en Canva con control en Google Sheets para aumentar la frecuencia de tus clientes en un 30% en 30 días. ¿Te gustaría ver un modelo que armé para negocios de tu sector?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña 2 modelos de tarjetas de fidelidad en Canva (una para cafetería y otra para peluquería) y la hoja de cálculo de puntos en Sheets. Día 2: Visita 5 comercios locales y ofréceles probar el sistema de sellos digitales para aumentar la frecuencia de sus clientes."
],
    quizQuestions: [
      {
            "question": "¿Por qué es mucho más rentable retener a un cliente existente que captar uno nuevo?",
            "options": [
                  "Porque los clientes nuevos no tienen dinero.",
                  "Porque captar un cliente nuevo cuesta entre 5 y 7 veces más en publicidad y esfuerzo comercial que motivar a un cliente satisfecho a volver a comprar.",
                  "Porque la ley obliga a las empresas a tener solo 100 clientes.",
                  "Porque los clientes antiguos nunca piden recibos."
            ],
            "correctIndex": 1,
            "explanation": "El costo de adquisición (CAC) es alto; los clientes recurrentes ya confían en la marca y compran con mayor frecuencia y margen."
      },
      {
            "question": "¿Qué caracteriza a un 'Momento Wow' en la experiencia del cliente?",
            "options": [
                  "Cobrar el doble del precio sin avisar.",
                  "Un detalle de cortesía inesperado o una atención personalizada que supera positivamente las expectativas del cliente y genera una emoción memorable.",
                  "Apagar las luces del local por sorpresa.",
                  "Exigir propinas obligatorias."
            ],
            "correctIndex": 1,
            "explanation": "Los momentos wow crean conexiones emocionales duraderas y motivan al cliente a recomendar el negocio en redes sociales y con sus amigos."
      },
      {
            "question": "¿Cuál es la cantidad de compras recomendada para otorgar el primer incentivo en una tarjeta de fidelización para mantener motivado al cliente?",
            "options": [
                  "Entre 50 y 100 visitas.",
                  "Entre 4 y 6 compras o visitas iniciales.",
                  "Únicamente tras 10 años de compras ininterrumpidas.",
                  "Nunca se deben entregar premios."
            ],
            "correctIndex": 1,
            "explanation": "Una meta cercana y accesible activa el efecto de proximidad a la meta y acelera la frecuencia de las visitas siguientes."
      }
]
  },

  // =========================================================================
  // BOOK ID: sc-6
  // =========================================================================
  'sc-6': {
    frameworkName: "Mapeo del Viaje del Cliente (Customer Journey Map), Diagnóstico de Fricción & Rediseño de Puntos de Contacto",
    coreMetrics: [
      "Puntos de Fricción Críticos Eliminados (> 80%)",
      "Tasa de Abandono entre Etapas del Embudo",
      "Tiempo Total del Ciclo de Compra",
      "Puntuación de Esfuerzo del Cliente por Fase (CES)",
      "Tasa de Conversión End-to-End"
],
    caseCompany: "Inmobiliaria & Rentas UrbanLiving (Córdoba, Argentina)",
    caseOutcome: "Mapeó el Customer Journey de los inquilinos desde la búsqueda en portal hasta la firma de contrato; identificó 4 cuellos de botella burocráticos (solicitud física de garantías y trámites notariales lentos); digitalizó la validación en 24 horas y aumentó el cierre de contratos de alquiler en un 52%.",
    pitfall: "Diseñar los procesos comerciales desde la perspectiva interna de comodidad de la empresa, ignorando los obstáculos, dudas y frustraciones que experimenta el cliente real.",
    actionItem1: "Mapear las 5 fases del viaje del cliente: Descubrimiento, Consideración, Decisión/Compra, Entrega/Uso y Recomendación.",
    actionItem2: "Identificar en cada fase: Qué hace el cliente, qué siente (emociones positivas/negativas) y cuál es el punto de dolor o fricción.",
    actionItem3: "Construir un mapa visual interactivo en Miro o Canva y priorizar las 3 mejoras de mayor impacto y menor costo de ejecución.",
    domainContext: "El Customer Journey Map es la herramienta de diseño de servicios más poderosa: revela las grietas invisibles por donde se escapan los clientes antes de comprar.",
    strategicRationale: "Eliminar la fricción innecesaria en el proceso de compra acorta los ciclos comerciales, mejora la tasa de conversión y crea una experiencia fluida que neutraliza a la competencia.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nLa mayoría de las empresas pierden clientes sin saber exactamente en qué momento los perdieron: ¿Fue porque la página web tardó en cargar? ¿Porque el vendedor no contestó el WhatsApp a tiempo? ¿O porque el método de pago exigía demasiados trámites? Cuando diseñas tus procesos pensando en la comodidad de la empresa en lugar de la comodidad del cliente, creas un camino lleno de piedras que espanta a los compradores. Este tomo te enseña a construir un Mapa del Viaje del Cliente (Customer Journey Map) profesional para diagnosticar y erradicar la fricción comercial.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Psicología de la Fricción Comercial: Cómo cada obstáculo o demora reduce la probabilidad de compra en un 20%.\n• Capítulo 2: Las 5 Etapas del Customer Journey: Descubrimiento, Evaluación, Transacción, Onboarding y Fidelización.\n• Capítulo 3: Protocolo de Construcción del Mapa en Miro o Canva: Acciones del usuario, puntos de contacto (Touchpoints), emociones y barreras.\n• Capítulo 4: Caso de Estudio Real (UrbanLiving Inmobiliaria): Cómo aumentaron sus contratos en un 52% eliminando trabas en Córdoba.\n• Capítulo 5: Mitigación de Brechas entre Departamentos: Cómo alinear a ventas, cobranzas y soporte en una experiencia unificada.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de Customer Journey y diagnóstico de fricción cobrando entre $35 y $550 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Miro / Canva (Plantillas Gratuitas): Diseño visual colaborativo del mapa de viaje del cliente con carriles de fases, puntos de dolor y oportunidades.\n2. Google Forms: Entrevistas rápidas a clientes reales para mapear sus frustraciones durante la compra.\n3. Loom / Grabadores de Pantalla: Grabación del flujo digital para auditar la experiencia de navegación del usuario.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nInmobiliarias, aseguradoras, academias, agencias de viaje, e-commerce y clínicas tienen procesos engorrosos que necesitan simplificarse:\n• Nivel Junior: $35 – $70 USD por diseño visual del Customer Journey Map en Canva/Miro a partir de la información del cliente.\n• Nivel Intermedio: $110 – $220 USD por auditoría completa de puntos de contacto, entrevistas a clientes y reporte de reducción de fricción.\n• Nivel Senior / Consultor de Service Design: $280 – $550 USD por rediseño integral de la experiencia del cliente (End-to-End) y plan de optimización operativa.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Completa una plantilla de Customer Journey Map en Miro para un proceso de compra típico (ej. reserva de hotel o compra en tienda).\nDía 2: Contacta a 10 gerentes de empresas de servicios en LinkedIn y ofréceles una auditoría gratuita de sus 3 puntos de contacto iniciales.",
    ch1CustomNarrative: [
      "Los clientes no evalúan a una empresa únicamente por la calidad del producto final, sino por la totalidad del viaje y el esfuerzo requerido para interactuar con ella.",
      "Un proceso de compra plagado de formularios interminables, tiempos de espera absurdos o información confusa provoca fatiga y abandono antes de llegar a la caja.",
      "El Customer Journey Map es una radiografía empática que permite al equipo directivo ponerse en los zapatos del cliente y experimentar el servicio desde sus propios ojos.",
      "Simplificar radicalmente el camino del cliente es la ventaja competitiva más difícil de copiar por parte de la competencia."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO DISEÑAR UN CUSTOMER JOURNEY MAP EN MIRO O CANVA GRATIS:",
      "Paso 1: Abre Miro (miro.com) o Canva y busca la plantilla \"Customer Journey Map\". Estructura 5 columnas horizontales: 1. Descubrimiento (Búsqueda inicial). 2. Evaluación (Comparación de opciones). 3. Compra (Pago y contratación). 4. Uso / Entrega (Recepción del servicio). 5. Post-Venta (Soporte y recomendación).",
      "Paso 2: En las filas verticales, añade 4 carriles de análisis: 1. Acciones del Cliente (Qué hace en cada paso). 2. Puntos de Contacto / Canales (Web, WhatsApp, Local físico, Teléfono). 3. Puntos de Dolor / Fricción (Dudas, demoras, formularios pesados). 4. Oportunidades de Mejora.",
      "Paso 3: Utiliza notas adhesivas de colores (Post-its virtuales): Notas rojas para momentos de frustración del cliente y notas verdes para soluciones ágiles.",
      "Paso 4: Exporta el mapa visual en formato PDF y presenta las 3 prioridades de mejora inmediata al equipo comercial y operativo."
],
    ch3TacticalSteps: [
      "Semana 1: Realiza el ejercicio de \"Cliente Incógnito\" (Mystery Shopper) en tu propia empresa: compra tu producto simulando ser un usuario nuevo.",
      "Semana 2: Entrevista a 5 clientes recientes y pregúntales qué parte del proceso les pareció más lenta o confusa.",
      "Semana 3: Vuelca los hallazgos en el mapa en Miro y clasifica los problemas por facilidad de solución vs. impacto en ventas.",
      "Semana 4: Elimina al menos dos pasos burocráticos innecesarios en el proceso de cotización o pago durante el primer mes."
],
    ch4CaseDeepDive: [
      "UrbanLiving en Córdoba tardaba un promedio de 14 días en cerrar un contrato de alquiler de departamentos y perdía al 40% de los interesados en el camino.",
      "Al mapear el viaje del cliente descubrieron que los postulantes se frustraban al tener que conseguir firmas físicas en escribanías y presentar recibos de sueldo en papel.",
      "Implementaron firma electrónica digital y validación crediticia en línea en menos de 24 horas a través de WhatsApp.",
      "El tiempo de cierre se redujo de 14 días a solo 48 horas y la tasa de conversión de visitas a contratos firmados aumentó un 52% en 6 meses."
],
    ch5RiskMitigation: [
      "Error metodológico: Diseñar el mapa en una sala de juntas basándose en suposiciones de los directivos sin hablar con clientes reales.",
      "Valida cada punto de contacto con datos reales: grabaciones de llamadas, tickets de soporte y métricas de navegación web.",
      "No intentes resolver todos los problemas a la vez: enfócate en el 'Momento de la Verdad' donde se produce el mayor abandono.",
      "Asegúrate de que los cambios en los procesos se comuniquen y entrenen a todo el personal de atención antes de lanzarlos al público."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Mapeo del Viaje del Cliente (Customer Journey Map) y Diagnóstico de Fricción Comercial\". Ofrece este servicio a inmobiliarias, agencias de viaje, e-commerce, aseguradoras y clínicas privadas.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $35 - $70 USD por diseño visual del Customer Journey Map en Canva/Miro a partir de la información del cliente. • Nivel Intermedio (Con portafolio): $110 - $220 USD por auditoría completa de puntos de contacto, entrevistas a clientes y reporte de reducción de fricción. • Nivel Senior / Consultor de Experiencia: $280 - $550 USD por rediseño integral de la experiencia del cliente (End-to-End) y plan de optimización operativa.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / Correo): \"Hola [Nombre], sé que en [Empresa] invierten en publicidad para atraer prospectos, pero muchas veces se pierden ventas valiosas por pequeños obstáculos o demoras en el proceso de contratación. Por solo $45 USD yo te elaboro un Customer Journey Map visual en Miro con diagnóstico de fricciones para identificar exactamente en qué punto se están cayendo tus clientes y cómo solucionarlo en 15 días. ¿Te gustaría que hagamos un diagnóstico rápido?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Completa una plantilla de Customer Journey Map en Miro para un proceso de compra típico (ej. reserva de hotel o compra en tienda). Día 2: Contacta a 10 gerentes de empresas de servicios en LinkedIn y ofréceles una auditoría gratuita de sus 3 puntos de contacto iniciales."
],
    quizQuestions: [
      {
            "question": "¿Cuál es el objetivo principal de elaborar un Customer Journey Map (Mapa del Viaje del Cliente)?",
            "options": [
                  "Calcular los impuestos del año.",
                  "Visualizar de principio a fin la experiencia, emociones y obstáculos del cliente a lo largo de todos los puntos de contacto para eliminar la fricción y aumentar las ventas.",
                  "Diseñar el organigrama interno de la empresa.",
                  "Planificar las vacaciones del personal."
            ],
            "correctIndex": 1,
            "explanation": "El mapa del viaje del cliente permite identificar cuellos de botella y frustraciones desde la perspectiva del usuario para mejorar la conversión."
      },
      {
            "question": "¿Qué es un 'Punto de Contacto' (Touchpoint) en el viaje del consumidor?",
            "options": [
                  "Cualquier interacción directa o indirecta entre el cliente y la empresa (ej. un anuncio, un chat de WhatsApp, una visita a la tienda, la factura o la llamada de soporte).",
                  "Un enchufe eléctrico en la pared de la oficina.",
                  "El apretón de manos entre dos directivos.",
                  "El contrato de arrendamiento del local."
            ],
            "correctIndex": 0,
            "explanation": "Los touchpoints son los momentos donde el cliente experimenta la marca y se forma una opinión sobre la calidad del servicio."
      },
      {
            "question": "¿Por qué es un error grave diseñar el Customer Journey basándose únicamente en la opinión de los directivos?",
            "options": [
                  "Porque los directivos no saben dibujar.",
                  "Porque los directivos conocen el proceso teórico interno, pero suelen ser ciegos a las verdaderas dudas, demoras y dificultades que sufre el cliente real en la práctica.",
                  "Porque las leyes prohíben a los directivos hacer mapas.",
                  "Porque los clientes nunca compran nada."
            ],
            "correctIndex": 1,
            "explanation": "El mapa debe validarse con entrevistas y datos empíricos de clientes reales para que refleje la verdad de la experiencia de compra."
      }
]
  },

  // =========================================================================
  // BOOK ID: sc-7
  // =========================================================================
  'sc-7': {
    frameworkName: "Matriz de Segmentación Psicográfica, Arquetipos de Buyer Persona & Matriz de Mensajería Segmentada",
    coreMetrics: [
      "Tasa de Clics por Anuncio Segmentado (CTR > 3.8%)",
      "Costo por Adquisición por Arquetipo (CAC por Persona)",
      "Tasa de Conversión de Landing Page Segmentada (> 12%)",
      "Claridad de Propuesta de Valor Percibida",
      "Retorno del Gasto Publicitario (ROAS > 4x)"
],
    caseCompany: "Academia de Idiomas & Negocios LinguaPro (Bogotá, Colombia)",
    caseOutcome: "Dejó de publicitar 'cursos de inglés generales' y creó 3 Buyer Personas específicas (El Profesional que busca ascenso internacional, El Estudiante para becas de posgrado y El Emprendedor tech); adaptó los mensajes y ofertas para cada uno; redujo su costo de adquisición en un 46% y duplicó sus matriculaciones en 90 días.",
    pitfall: "Definir al cliente con datos demográficos vacíos e impersonales (ej. 'hombres y mujeres de 25 a 50 años') sin entender sus dolores profundos, miedos, motivaciones de compra y objeciones.",
    actionItem1: "Entrevistar a 7 clientes reales de los más rentables para identificar sus motivaciones reales de compra y dolores principales.",
    actionItem2: "Construir 2 a 3 fichas de Buyer Persona con: Nombre arquetípico, Reto profesional/personal, Mayor miedo, Objeción principal y Gancho de venta.",
    actionItem3: "Adaptar los textos de anuncios, páginas web y guiones de WhatsApp específicamente para cada Buyer Persona definida.",
    domainContext: "Cuando intentas venderle a todo el mundo con un mensaje genérico, no le hablas a nadie; la hiper-personalización basada en arquetipos reales es el corazón del marketing de alta conversión.",
    strategicRationale: "Comprender la psicología profunda del comprador permite crear mensajes que resuenan emocionalmente, neutralizan objeciones de antemano y multiplican el retorno de la inversión publicitaria.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 90% del dinero invertido en publicidad en redes sociales se quema sin generar ventas por una razón fatal: mensajes genéricos. Decir 'Somos la mejor empresa, con los mejores precios y la mejor calidad' no convence a nadie en 2026. Los clientes compran cuando sienten que el mensaje fue escrito exclusivamente para ellos, describiendo su dolor exacto y la solución a su problema puntual. Este tomo te enseña a construir Arquetipos de Buyer Persona profundos y Matrices de Mensajería Segmentada para multiplicar tus ventas.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Muerte del Marketing Demográfico Genérico: Por qué 'edad y género' no explican por qué una persona compra.\n• Capítulo 2: Las 5 Dimensiones del Buyer Persona: Dolores agudos, aspiraciones secretas, barreras de compra, fuentes de información y disparadores de decisión.\n• Capítulo 3: Protocolo de Entrevistas de Empatía: Cómo hacer 5 preguntas directas a clientes reales para extraer oro comunicacional.\n• Capítulo 4: Caso de Estudio Real (LinguaPro Academia): Cómo redujeron su CAC en un 46% en Bogotá segmentando por arquetipos.\n• Capítulo 5: Matriz de Mensajería Cruzada: Cómo redactar un guion publicitario y de WhatsApp para 3 perfiles distintos.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer el servicio de \"Construcción de Buyer Personas y Matrices de Mensajes Comerciales\" cobrando entre $30 y $480 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Notion / Canva: Plantillas de Fichas de Buyer Persona con arquetipos visuales y mapas de empatía.\n2. Google Forms: Cuestionario de perfilamiento de clientes para recopilar insights cualitativos sin costo.\n3. Respuestas de Google Analytics y Meta Ads Audience Insights: Análisis gratuito de comportamiento e intereses de audiencia.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nAgencias de marketing, consultores, academias, software y marcas de producto necesitan definir a sus clientes ideales para no tirar dinero en anuncios:\n• Nivel Junior: $30 – $60 USD por creación de 2 fichas de Buyer Persona en Notion/Canva a partir del perfil del cliente.\n• Nivel Intermedio: $90 – $180 USD por investigación con entrevistas a clientes, diseño de 3 Buyer Personas y Matriz de Mensajes de Venta.\n• Nivel Senior / Estratega de Marketing: $230 – $480 USD por consultoría integral de segmentación, rediseño de ofertas comerciales y guiones publicitarios.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la plantilla de Buyer Persona en Notion y diseña una ficha de ejemplo con sus 5 dimensiones.\nDía 2: Contacta a 10 dueños de agencias o negocios que hagan publicidad y ofréceles auditar la segmentación de sus anuncios gratis.",
    ch1CustomNarrative: [
      "El mayor desperdicio de recursos en los negocios ocurre cuando se intenta ser todo para todos en lugar de ser la solución perfecta para alguien en específico.",
      "Dos personas de la misma edad, género y ciudad pueden tener motivaciones de compra completamente opuestas: una puede buscar estatus y exclusividad, mientras que la otra busca seguridad y ahorro.",
      "Un Buyer Persona no es un personaje de ficción; es un arquetipo basado en datos e investigaciones reales que sintetiza los patrones de comportamiento de tus mejores clientes.",
      "Cuando tu mensaje comercial describe el problema de tu cliente mejor de lo que él mismo puede expresarlo, el cliente asume automáticamente que tienes la solución indicada."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR FICHAS DE BUYER PERSONA EN NOTION Y CANVA GRATIS:",
      "Paso 1: Abre Canva o Notion y crea una página titulada \"Arquetipo_Buyer_Persona_Oficial\". Inserta una foto representativa y asígnale un nombre descriptivo (ej. \"Carlos, el Director Estresado\" o \"Valeria, la Emprendedora Creativa\").",
      "Paso 2: Desarrolla las 4 secciones fundamentales: 1. Perfil Profesional y Rutina Diaria. 2. Dolor Principal (¿Qué le quita el sueño en su trabajo o negocio?). 3. Meta Deseada (¿Qué transformación busca lograr en los próximos 6 meses?). 4. Objeción de Compra Más Frecuente (ej. \"No tengo tiempo para aprender\" o \"Es muy caro\").",
      "Paso 3: Añade la sección \"Mensaje Gancho / Frase Clave\": Redacta el titular exacto que capturará su atención en un anuncio o en una conversación de ventas.",
      "Paso 4: Exporta la ficha y compártela con los equipos de marketing, ventas y atención para que todos hablen el mismo lenguaje."
],
    ch3TacticalSteps: [
      "Semana 1: Selecciona a tus 5 clientes más satisfechos y rentables y coordina una llamada breve de 15 minutos para entender por qué te eligieron.",
      "Semana 2: Identifica las 3 palabras y frases exactas que los clientes repitieron para describir su problema antes de contratarte.",
      "Semana 3: Vuelca la información en las fichas de Buyer Persona y define una oferta irresistible para cada arquetipo.",
      "Semana 4: Modifica los titulares de tus páginas web y anuncios utilizando las palabras textuales que tus clientes usaron en las entrevistas."
],
    ch4CaseDeepDive: [
      "LinguaPro en Bogotá vendía cursos de inglés pero su costo por alumno matriculado era de $180 USD, dejando un margen casi nulo.",
      "Al entrevistar a sus alumnos descubrieron dos motivaciones muy diferentes: ejecutivos de tecnología que necesitaban inglés para entrevistas con empresas de EE.UU. y médicos que necesitaban leer papers científicos.",
      "Crearon dos Buyer Personas y dos ofertas separadas: \"Inglés Técnico para Desarrolladores Tech\" e \"Inglés Médico y Científico\".",
      "El costo por alumno cayó a $65 USD, la tasa de conversión en su landing page subió del 4% al 16% y llenaron 12 grupos nuevos en 90 días."
],
    ch5RiskMitigation: [
      "Error común: Crear más de 4 Buyer Personas para una pequeña empresa, dispersando el presupuesto y la energía comercial.",
      "Regla de enfoque: Concéntrate en 1 o máximo 2 Buyer Personas principales que representen el 80% de tus ingresos más rentables.",
      "Revisa y actualiza las fichas de Buyer Persona cada 6 meses: las prioridades y dolores del mercado evolucionan con la tecnología y la economía.",
      "Evita basar los arquetipos en estereotipos superficiales; fundamenta cada punto en conversaciones reales con compradores."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Construcción de Buyer Personas y Matrices de Mensajes Comerciales de Alta Conversión\". Ofrece este servicio a academias, agencias de publicidad, despachos de servicios y empresas de software.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $30 - $60 USD por creación de 2 fichas de Buyer Persona en Notion/Canva a partir del perfil del cliente. • Nivel Intermedio (Con portafolio): $90 - $180 USD por investigación con entrevistas a clientes, diseño de 3 Buyer Personas y Matriz de Mensajes de Venta. • Nivel Senior / Estratega de Marketing: $230 - $480 USD por consultoría integral de segmentación, rediseño de ofertas comerciales y guiones publicitarios.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], veo que en [Empresa] hacen publicidad para conseguir clientes. Muchas veces los anuncios no convierten bien porque los mensajes son generales y no conectan con el dolor específico del comprador. Por solo $35 USD yo realizo un perfilamiento de Buyer Personas en Notion con guiones de mensajes personalizados para que aumentes tu tasa de conversión en redes y WhatsApp. ¿Te gustaría ver un ejemplo de ficha estructurada?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de Buyer Persona en Notion y diseña una ficha de ejemplo con sus 5 dimensiones. Día 2: Contacta a 10 dueños de agencias o negocios que hagan publicidad y ofréceles auditar la segmentación de sus anuncios gratis."
],
    quizQuestions: [
      {
            "question": "¿Qué es un 'Buyer Persona' en marketing y ventas?",
            "options": [
                  "Un actor contratado para grabar un comercial de televisión.",
                  "Una representación semi-ficticia del cliente ideal basada en datos reales, motivaciones profundas, dolores, retos y comportamientos de compra.",
                  "Una lista de nombres aleatorios extraídos de la guía telefónica.",
                  "Un robot de atención al cliente."
            ],
            "correctIndex": 1,
            "explanation": "El Buyer Persona ayuda a los equipos a entender la mentalidad y necesidades del cliente para personalizar las ofertas y mensajes."
      },
      {
            "question": "¿Por qué la segmentación tradicional basada solo en datos demográficos (edad, género) resulta insuficiente hoy en día?",
            "options": [
                  "Porque la gente miente sobre su edad.",
                  "Porque dos personas con la misma edad y género pueden tener valores, problemas, presupuestos y motivos de compra radicalmente distintos.",
                  "Porque los datos demográficos ya no existen en internet.",
                  "Porque es ilegal segmentar por edad."
            ],
            "correctIndex": 1,
            "explanation": "Los factores psicográficos (dolores, aspiraciones y objeciones) son los que verdaderamente determinan la decisión de compra."
      },
      {
            "question": "¿Cuál es la mejor fuente de información para construir un Buyer Persona certero y realista?",
            "options": [
                  "Adivinar en una reunión de amigos.",
                  "Entrevistar directamente a clientes reales (tanto satisfechos como los que cancelaron) y analizar las preguntas y objeciones frecuentes en los chats de ventas.",
                  "Copiar la página web de una empresa de otro país.",
                  "Inventar datos imaginarios."
            ],
            "correctIndex": 1,
            "explanation": "Las conversaciones directas con clientes revelan las palabras y motivaciones exactas que impulsan la decisión de compra."
      }
]
  },

  // =========================================================================
  // BOOK ID: sc-8
  // =========================================================================
  'sc-8': {
    frameworkName: "Matriz de Gestión de Cuentas Clave (KAM), Protocolo de Venta Cruzada (Cross-Selling) & Up-Selling Estratégico",
    coreMetrics: [
      "Ingreso Promedio por Usuario (ARPU)",
      "Tasa de Expansión de Cuenta (Net Revenue Retention > 110%)",
      "Ratio de Cross-Selling por Cliente (> 1.8 productos)",
      "Índice de Salud de la Cuenta (Account Health Score > 85/100)",
      "Tasa de Renovación de Contratos Anuales (> 92%)"
],
    caseCompany: "Soluciones Tecnológicas & Ciberseguridad DataShield (Guadalajara, México)",
    caseOutcome: "Implementó una Matriz de Cuentas Clave en Google Sheets clasificando a sus clientes corporativos por potencial de crecimiento; creó un protocolo de Revisiones de Negocio Trimestrales (QBR) y venta cruzada de servicios de backup en la nube; aumentó su facturación con clientes existentes en un 48% sin gastar un solo dólar en publicidad.",
    pitfall: "Tratar a todos los clientes por igual, dedicando el 80% del tiempo directivo a clientes pequeños y conflictivos mientras se descuida a las cuentas clave que generan el 80% de las utilidades.",
    actionItem1: "Clasificar a los clientes mediante la regla de Pareto 80/20 en tres niveles: Clientes Platino (Cuentas Clave), Clientes Oro y Clientes Plata.",
    actionItem2: "Establecer Revisiones Trimestrales de Resultados (QBR) con los clientes Platino para presentar métricas de valor generado y nuevas oportunidades.",
    actionItem3: "Diseñar una matriz de venta cruzada (Cross-Selling) mapeando qué servicios complementarios necesita cada cliente en su siguiente etapa de madurez.",
    domainContext: "La mayor mina de oro de una empresa consolidada está en su propia base de clientes actuales: expandir las cuentas existentes es la vía más rápida, económica y segura de escalar la rentabilidad.",
    strategicRationale: "La gestión estructurada de cuentas clave blinda las relaciones corporativas contra ofertas de la competencia y maximiza el valor del ciclo de vida del cliente (LTV).",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 80% de las utilidades de casi cualquier empresa provienen de solo el 20% de sus mejores clientes. Sin embargo, la mayoría de los gerentes cometen el error garrafal de dedicar todo su tiempo a apagar fuegos con clientes pequeños que pagan poco y exigen mucho, dejando a sus mejores cuentas en abandono. Cuando un competidor se acerca a tu cliente más grande con una mejor atención, pierdes el corazón de tu negocio. Este tomo te entrena en la Gestión de Cuentas Clave (Key Account Management) y estrategias de Up-Selling y Cross-Selling para multiplicar la facturación con tus clientes actuales.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Principio de Pareto Aplicado a la Cartera: Cómo categorizar a tus clientes en Platino, Oro y Plata con rigor analítico.\n• Capítulo 2: Las Revisiones Trimestrales de Negocio (QBR): La estructura de reunión ejecutiva que asegura renovaciones y expansiones de contrato.\n• Capítulo 3: La Matriz de Venta Cruzada (Cross-Selling & Up-Selling): Cómo ofrecer productos complementarios en el momento exacto de mayor receptividad.\n• Capítulo 4: Caso de Estudio Real (DataShield Tecnologías): Cómo aumentaron sus ingresos en un 48% en Guadalajara sin gastar en nuevos anuncios.\n• Capítulo 5: Mitigación del Riesgo de Concentración de Ingresos: Cómo gestionar cuentas gigantes sin volverse rehén comercial de un solo cliente.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de Gestión de Cuentas Clave y Aumento de Ticket Promedio cobrando entre $45 y $650 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets: Matriz de Clasificación de Cuentas Clave (KAM Matrix) y Calculadora de Salud de Cuenta (Health Score).\n2. Google Slides / Canva: Plantilla de Presentación de Revisión Trimestral de Negocio (QBR) para juntas directivas de clientes.\n3. Notion: Tablero de planes de cuenta y mapa de tomadores de decisión en clientes corporativos.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nEmpresas B2B, distribuidoras, agencias, consultoras y proveedores de servicios necesitan retener y expandir sus cuentas más valiosas:\n• Nivel Junior: $45 – $90 USD por diseño de la Matriz de Clasificación de Clientes 80/20 en Google Sheets.\n• Nivel Intermedio: $130 – $270 USD por estructuración del programa de Cuentas Clave, diseño de plantillas QBR y matriz de venta cruzada.\n• Nivel Senior / Consultor de Expansión de Cuentas B2B: $320 – $650 USD por consultoría integral de retención, acompañamiento en reuniones QBR y planes de up-selling anual.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la Matriz de Clasificación de Clientes en Google Sheets con fórmulas de porcentaje acumulado de Pareto.\nDía 2: Contacta a 10 directores de empresas B2B en LinkedIn y ofréceles auditar la rentabilidad de su cartera de clientes clave.",
    ch1CustomNarrative: [
      "No todos los clientes son iguales ni aportan el mismo valor a la salud financiera y al futuro de una empresa.",
      "La ley de Pareto es implacable en el mundo corporativo: una minoría selecta de clientes representa la inmensa mayoría de las utilidades netas y la estabilidad del negocio.",
      "La Gestión de Cuentas Clave (KAM) no es simplemente brindar un buen servicio, sino convertirse en un socio estratégico indispensable para el crecimiento de tu cliente.",
      "Cuando demuestras continuamente el retorno de inversión y valor generado para tu cliente, la venta cruzada y las renovaciones de contratos ocurren de forma natural y sin fricciones."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UNA MATRIZ DE CUENTAS CLAVE EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Abre Google Sheets y crea la hoja \"Matriz_Cuentas_Clave_KAM\". Lista todos los clientes en la columna A y su Facturación Anual en la columna B.",
      "Paso 2: Ordena la tabla de mayor a menor facturación. Agrega la columna \"Porcentaje Acumulado (%)\" y clasifícalos: Nivel Platino (Los clientes que suman el primer 80% de ingresos), Nivel Oro (El siguiente 15%) y Nivel Plata (El 5% restante).",
      "Paso 3: Crea una pestaña llamada \"Matriz_Cross_Selling\": Lista los servicios de la empresa en columnas y marca con una casilla de verificación qué servicios ya tiene contratados cada cliente Platino y cuáles tienen potencial de adopción.",
      "Paso 4: Diseña en Canva o Google Slides la presentación \"Revisión Trimestral de Negocio (QBR)\" de 6 láminas: 1. Resumen de Logros del Trimestre. 2. Métricas de Impacto Generado. 3. Oportunidades de Optimización para el Siguiente Período."
],
    ch3TacticalSteps: [
      "Semana 1: Realiza el análisis de Pareto de tu facturación de los últimos 12 meses y define tu lista de los 10 clientes Platino indispensables.",
      "Semana 2: Asigna a un Ejecutivo de Cuenta dedicado (Account Manager) para cada cliente Platino con canal de comunicación prioritario.",
      "Semana 3: Agenda una reunión QBR de 30 minutos con los 3 mayores clientes para presentar el reporte de impacto y escuchar sus nuevas metas.",
      "Semana 4: Presenta una propuesta de servicio ampliado (Up-Selling) alineada directamente con los nuevos objetivos discutidos en la reunión."
],
    ch4CaseDeepDive: [
      "DataShield en Guadalajara tenía 80 clientes de soporte técnico informático pero sus márgenes se reducían por el aumento de costos salariales.",
      "Al realizar la matriz de cuentas clave descubrieron que 12 clientes corporativos generaban el 76% de sus ingresos, pero nadie los visitaba ni les ofrecía servicios adicionales.",
      "Instauraron las Revisiones Trimestrales (QBR) con esos 12 clientes y les presentaron soluciones avanzadas de prevención de ransomware y respaldo en la nube.",
      "Diez de los doce clientes contrataron los módulos adicionales: aumentaron el ticket promedio anual de $18,000 a $29,000 USD por cliente y elevaron la facturación total en un 48% sin contratar nuevos vendedores."
],
    ch5RiskMitigation: [
      "Peligro crítico: Que un solo cliente represente más del 30% de la facturación total de la empresa (vulnerabilidad extrema si decide cancelar).",
      "Estrategia de diversificación: Utiliza las utilidades generadas por la cuenta principal para acelerar la captación y crecimiento de otras 5 cuentas medianas.",
      "Nunca des por sentada una cuenta clave: la complacencia y la falta de contacto proactivo son las principales razones por las que un cliente grande se marcha a la competencia.",
      "Formaliza acuerdos comerciales a largo plazo (contratos de 12 a 24 meses con cláusulas de renovación automática)."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Estructuración de Estrategia de Cuentas Clave (KAM) y Aumento de Ticket Promedio B2B\". Ofrece este servicio a agencias, distribuidoras, empresas de tecnología, firmas contables y despachos de ingeniería.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por diseño de la Matriz de Clasificación de Clientes 80/20 en Google Sheets. • Nivel Intermedio (Con portafolio): $130 - $270 USD por estructuración del programa de Cuentas Clave, diseño de plantillas QBR y matriz de venta cruzada. • Nivel Senior / Consultor de Expansión de Cuentas B2B: $320 - $650 USD por consultoría integral de retención, acompañamiento en reuniones QBR y planes de up-selling anual.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], sé que en empresas como [Empresa] conseguir nuevos clientes B2B es costoso y toma meses. Muchas veces la forma más rápida de crecer es expandir las cuentas que ya confían en ustedes mediante venta cruzada y revisiones estratégicas de valor. Por solo $50 USD yo te elaboro una Matriz de Cuentas Clave en Google Sheets y una plantilla de reunión ejecutiva QBR para aumentar la facturación con tus clientes actuales en un 25% este trimestre. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la Matriz de Clasificación de Clientes en Google Sheets con fórmulas de porcentaje acumulado de Pareto. Día 2: Contacta a 10 directores de empresas B2B en LinkedIn y ofréceles auditar la rentabilidad de su cartera de clientes clave."
],
    quizQuestions: [
      {
            "question": "¿Qué establece el Principio de Pareto (Regla 80/20) aplicado a la cartera de clientes de una empresa?",
            "options": [
                  "Que el 80% de los clientes pagan con tarjeta y el 20% en efectivo.",
                  "Que aproximadamente el 80% de los ingresos y utilidades de la empresa suelen ser generados por el 20% de sus mejores clientes (Cuentas Clave).",
                  "Que la empresa debe despedir al 80% de sus trabajadores.",
                  "Que los productos tienen un 20% de descuento obligatorio."
            ],
            "correctIndex": 1,
            "explanation": "Identificar al 20% de clientes clave permite concentrar el tiempo y la atención estratégica en las relaciones más rentables."
      },
      {
            "question": "¿Qué es una Reunión de Revisión Trimestral de Negocio (QBR - Quarterly Business Review)?",
            "options": [
                  "Una fiesta informal de fin de año.",
                  "Una sesión ejecutiva estructurada con un cliente clave para revisar los resultados e impacto logrados en el trimestre, alinear metas futuras e identificar oportunidades de mejora y expansión de servicios.",
                  "Una llamada telefónica de cobro de facturas vencidas.",
                  "Una auditoría tributaria del gobierno."
            ],
            "correctIndex": 1,
            "explanation": "Las reuniones QBR posicionan a la empresa como un socio estratégico indispensable y abren la puerta a ventas adicionales de alto valor."
      },
      {
            "question": "¿Cuál es la diferencia entre 'Cross-Selling' (Venta Cruzada) y 'Up-Selling' (Venta Incremental)?",
            "options": [
                  "Cross-selling es vender productos complementarios (ej. vender el servicio de backup a quien compró soporte informático), mientras que Up-selling es ofrecer una versión superior o de mayor capacidad del mismo producto.",
                  "Cross-selling es vender en la calle y Up-selling vender por internet.",
                  "No hay diferencia, son palabras sinónimas.",
                  "Cross-selling es vender con pérdidas y Up-selling vender con ganancias."
            ],
            "correctIndex": 0,
            "explanation": "Ambas técnicas aumentan el valor del ciclo de vida del cliente ofreciendo soluciones relevantes a sus necesidades."
      }
]
  },

};
