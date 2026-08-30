// Specific topic-by-topic content blueprints for Category 14 (Experiencia del Usuario)
// Providing 100% custom, domain-accurate, highly actionable business literature for all 6 books (Tomos 125 al 130)
// Features:
// 1. 5,000-character Deep Learning Overview & Executive Briefing per book
// 2. Step-by-step Free Axe DevTools WCAG, Figma Microinteractions, One-Page Checkout, FigJam Card Sorting, Customer Journey Map & Steve Krug Usability Testing Tools Tutorials
// 3. Real, accessible LATAM Monetization Services & Pricing (Junior $25-$60, Mid $80-$180, Senior $220-$500 USD)
// 4. Localized copy-paste sales outreach pitches & 48h action plans
// 5. 3 rigorous exam questions per book with detailed explanations

import { SpecificBookContent } from './category1Content';

export const CATEGORY_14_CUSTOM_BOOKS: Record<string, SpecificBookContent> = {
  // =========================================================================
  // BOOK ID: ux-1
  // =========================================================================
  'ux-1': {
    frameworkName: "Framework de Auditoría y Diseño de Accesibilidad Web Universal (WCAG 2.2 AA Compliance Engine)",
    coreMetrics: [
      "Puntuación de Cumplimiento WCAG 2.2 nivel AA (> 98%)",
      "Ratio de Contraste Cromático de Texto y Controles (Mínimo 4.5:1 / 3:1)",
      "Navegabilidad 100% por Teclado (Zero Keyboard Traps)",
      "Tiempo de Resolución de Formularios con Lectores de Pantalla (< 5 min)",
      "Tasa de Abandono de Usuarios con Discapacidad (< 8%)"
],
    caseCompany: "Fintech de Microcréditos y Cuentas de Ahorro BancaDigital Inclusiva (Bogotá, Colombia)",
    caseOutcome: "Rediseñó sus flujos transaccionales aplicando estándares WCAG 2.2 AA con pruebas automatizadas en Axe DevTools y validación con usuarios con baja visión; redujo el tiempo de solicitud de crédito de 18 a 6 minutos para personas mayores y captó $4.2 millones de USD adicionales en colocaciones anuales con cero demandas por discriminación digital.",
    pitfall: "Considerar la accesibilidad como un 'widget flotante de pago' o plugin genérico que arruina la semántica HTML nativa y no soluciona las barreras reales para los lectores de pantalla.",
    actionItem1: "Ejecutar un escaneo automatizado con la extensión gratuita Axe DevTools en Google Chrome para detectar fallos críticos de contraste, jerarquía de encabezados (H1-H6) y etiquetas 'alt' faltantes.",
    actionItem2: "Desconectar el mouse y completar el embudo principal de compra únicamente usando las teclas Tab, Shift+Tab, Enter, Espacio y Flechas.",
    actionItem3: "Verificar con WebAIM Contrast Checker que todo texto normal tenga un ratio de contraste mínimo de 4.5:1 contra su color de fondo.",
    domainContext: "La accesibilidad digital no es un favor caritativo ni un añadido opcional; es un imperativo ético, legal y comercial que expande el mercado direccionable a más del 15% de la población mundial que vive con alguna discapacidad permanente, temporal o situacional.",
    strategicRationale: "Construir plataformas universalmente accesibles mejora automáticamente el posicionamiento SEO en Google, acelera los tiempos de carga, eleva la usabilidad para todos los usuarios y blinda a la empresa contra litigios legales.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que más de 1,000 millones de personas en el mundo (el 15% de la población) viven con alguna discapacidad visual, auditiva o motriz, y que el 90% de los sitios web en América Latina son completamente inaccesibles para ellos? Además, la accesibilidad beneficia a todos: personas que navegan bajo la luz del sol, personas mayores o usuarios con una mano ocupada. Diseñar bajo el estándar internacional WCAG 2.2 AA no requiere software caro: herramientas gratuitas como Axe DevTools y WebAIM te permiten auditar y corregir cualquier página web en minutos. Este tomo te enseña a convertir tu web en un espacio universalmente accesible e inclusivo.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: Los 4 Principios de la Accesibilidad Web (POUR): Perceptible, Operable, Comprensible y Robusto.\n• Capítulo 2: El Ratio de Contraste Matemático 4.5:1: Cómo garantizar que personas mayores y con baja visión lean sin esfuerzo.\n• Capítulo 3: La Navegación 100% por Teclado: Cómo eliminar las 'Trampas de Teclado' en menús y modales.\n• Capítulo 4: Caso de Estudio Real (BancaDigital Bogotá): Cómo captaron $4.2M USD adicionales rediseñando con WCAG.\n• Capítulo 5: La Auditoría con Axe DevTools y Lectores de Pantalla: El escaneo gratuito en Google Chrome.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de accesibilidad web (WCAG) cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Axe DevTools (Extensión gratuita de Chrome): Escaneo automatizado oficial para detectar violaciones de accesibilidad WCAG.\n2. WebAIM Contrast Checker (webaim.org): Calculadora matemática de ratio de contraste entre colores de texto y fondo.\n3. NVDA / VoiceOver: Pruebas con lectores de pantalla reales integrados gratuitamente en Windows y macOS.",
    ch1CustomNarrative: [
      "En la economía digital contemporánea, millones de usuarios navegan diariamente por plataformas web utilizando lectores de pantalla, pulsadores adaptativos, lupas de aumento o navegación exclusiva mediante teclado.",
      "Cuando un sitio web carece de estructura semántica o utiliza contrastes deficientes, levanta un muro digital insalvable para potenciales clientes.",
      "El concepto de discapacidad en diseño UX ha evolucionado: ya no se define como una condición médica individual, sino como el resultado de una interacción fallida entre las capacidades humanas y un entorno digital mal diseñado.",
      "Ignorar estos principios no solo destruye la reputación de la marca y aliena a un segmento con billones de dólares en poder adquisitivo global, sino que expone a la organización a demandas judiciales severas por incumplimiento de leyes de igualdad de acceso."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO AUDITAR Y CORREGIR LA ACCESIBILIDAD CON AXE DEVTOOLS Y WEBAIM GRATIS:",
      "Paso 1: Instala la extensión gratuita \"Axe DevTools\" en Google Chrome. Abre tu sitio web, presiona F12 (Herramientas de Desarrollador) -> pestaña \"Axe DevTools\" -> clic en \"Scan FULL Page\".",
      "Paso 2: Revisa las violaciones críticas: 1. \"Color Contrast\": Textos con contraste insuficiente. 2. \"Images must have alternate text\": Imágenes sin atributo alt=\"\". 3. \"Form elements must have labels\": Campos de formulario sin etiqueta visible.",
      "Paso 3: Abre WebAIM Contrast Checker (webaim.org/resources/contrastchecker). Ingresa el código HEX del texto y del fondo: asegúrate de que el resultado marque \"Pass WCAG AA\" (mínimo 4.5:1 para texto normal y 3:1 para botones e iconos).",
      "Paso 4: Prueba la Navegación por Teclado: Navega por tu web usando únicamente la tecla Tabulador. Cada botón o enlace interactivo debe mostrar un recuadro de foco visible y de alto contraste (:focus-visible) para que el usuario sepa exactamente dónde está situado sin usar el ratón."
],
    ch3TacticalSteps: [
      "Semana 1: Instala Axe DevTools y genera el informe de accesibilidad de la página de inicio y el formulario de contacto.",
      "Semana 2: Corrige todos los ratios de contraste de color en botones y textos en tu código o editor web.",
      "Semana 3: Añade etiquetas descriptivas a todos los campos de formulario y textos alternativos 'alt' a todas las imágenes con valor informativo.",
      "Semana 4: Navega por todo el proceso de compra utilizando únicamente el teclado y comprueba que no existan bloqueos."
],
    ch4CaseDeepDive: [
      "BancaDigital Inclusiva en Bogotá operaba una plataforma de microcréditos pero los usuarios mayores de 50 años y personas con problemas de visión abandonaban el formulario de solicitud en el 78% de los casos.",
      "La auditoría reveló que los textos explicativos eran de color gris claro sobre fondo blanco (ratio 1.8:1) y que los mensajes de error solo aparecían como una línea roja que los daltónicos no podían percibir.",
      "Rediseñaron la plataforma bajo el estándar WCAG 2.2 AA: elevaron el contraste a 7:1, añadieron textos de ayuda explícitos y permitieron agrandar la letra hasta un 200% sin desconfigurar la pantalla.",
      "El tiempo de completado bajó de 18 a 6 minutos, las quejas de clientes cayeron un 84% y la fintech colocó $4.2 millones de USD en nuevos créditos en el primer año."
],
    ch5RiskMitigation: [
      "Riesgo 1: Instalar 'widgets flotantes mágicos de accesibilidad' de pago que prometen solucionar todo con un botón.",
      "La comunidad internacional de accesibilidad y las cortes de justicia han demostrado que estos plugins son inútiles y a menudo interfieren negativamente con los lectores de pantalla; la accesibilidad se construye en el código nativo HTML y CSS.",
      "No uses el color como único indicador de estado (ej. poner un campo en rojo para indicar error sin añadir un texto que diga 'Por favor ingrese un correo válido').",
      "Asegúrate de que los videos tengan subtítulos sincronizados para usuarios sordos o con problemas auditivos."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de Accesibilidad Web (WCAG 2.2 AA) y Certificación Inclusiva para Plataformas Digitales\". Ayuda a universidades, bancos, clínicas, e-commerce y empresas de software a cumplir con normativas de inclusión y multiplicar sus conversiones.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por escaneo automatizado con Axe DevTools + reporte de fallos de contraste en WebAIM y plan de correcciones en Google Docs. • Nivel Intermedio (Con portafolio): $120 - $250 USD por auditoría completa de accesibilidad (POUR), corrección de código HTML/CSS en formularios y botones, y pruebas de navegación por teclado. • Nivel Senior / Consultor de Accesibilidad Digital y Cumplimiento Normativo: $300 - $600 USD por programa integral de accesibilidad corporativa, certificación WCAG 2.2 AA, pruebas con usuarios con discapacidad y redacción de la Declaración de Accesibilidad oficial.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando el sitio web de [Empresa] y noté que varios textos y botones tienen poco contraste de color y no son navegables por teclado, lo que excluye a más del 15% de usuarios potenciales (personas mayores o con baja visión) y perjudica el posicionamiento SEO en Google. Con una Auditoría bajo el estándar internacional WCAG 2.2 AA es posible corregir estas barreras y asegurar que cualquier cliente pueda comprar en tu plataforma. Por solo $45 USD yo te realizo el escaneo con Axe DevTools y te entrego el informe de mejoras en 48 horas. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Instala Axe DevTools y escanea 3 sitios web de universidades o bancos en tu país. Día 2: Contacta a 10 directores de tecnología o marketing en LinkedIn y ofréceles un informe gratuito de accesibilidad de su portada."
],
    quizQuestions: [
      {
            "question": "¿Cuáles son los 4 principios fundamentales de las Pautas de Accesibilidad para el Contenido Web (WCAG - POUR)?",
            "options": [
                  "Precio, Oferta, Utilidad y Rendimiento.",
                  "Perceptible (el contenido debe poder ser percibido por los sentidos), Operable (la interfaz debe poder usarse con teclado o ratón), Comprensible (el lenguaje y navegación deben ser claros) y Robusto (compatible con tecnologías asistivas presentes y futuras).",
                  "Publicidad, Optimización, Usabilidad y Redes.",
                  "Pantallas, Ordenadores, Usuarios y Redes."
            ],
            "correctIndex": 1,
            "explanation": "El acrónimo POUR define los 4 pilares universales sobre los que se evalúa la accesibilidad digital de cualquier producto."
      },
      {
            "question": "¿Cuál es el ratio de contraste cromático mínimo exigido por WCAG 2.2 nivel AA para texto de tamaño normal?",
            "options": [
                  "1.5 a 1.",
                  "Al menos 4.5 a 1 (4.5:1) entre el color del texto y el color de fondo, asegurando que personas con baja visión o bajo el sol puedan leerlo con claridad.",
                  "100 a 1.",
                  "Cualquier contraste mientras el fondo sea blanco."
            ],
            "correctIndex": 1,
            "explanation": "El ratio 4.5:1 garantiza una legibilidad óptima para la gran mayoría de la población según la ciencia óptica."
      },
      {
            "question": "¿Por qué los plugins flotantes automáticos ('overlay widgets') no solucionan la accesibilidad web real?",
            "options": [
                  "Porque son gratuitos.",
                  "Porque no modifican la estructura profunda del código HTML subyacente, interfieren con los lectores de pantalla nativos de los usuarios y no eximen a la empresa de demandas legales.",
                  "Porque hacen que la computadora se apague.",
                  "Porque cambian el idioma de la página."
            ],
            "correctIndex": 1,
            "explanation": "La verdadera accesibilidad requiere una arquitectura semántica limpia en el código fuente, no parches visuales superficiales."
      }
]
  },

  // =========================================================================
  // BOOK ID: ux-2
  // =========================================================================
  'ux-2': {
    frameworkName: "Arquitectura de Microinteracciones de Dan Saffer (Triggers, Rules, Feedback, Loops & Modes) & Microcopia de Deleite",
    coreMetrics: [
      "Tasa de Éxito en Completado de Tareas Digitales (> 94%)",
      "Reducción de Errores por Falta de Confirmación Visual (-85%)",
      "Puntuación de Deleite y Satisfacción de Interfaz (SUS > 88/100)",
      "Tiempo de Carga de Animaciones Lottie (< 50 milisegundos)",
      "Tasa de Retención de Usuarios Activos en la Aplicación (+25%)"
],
    caseCompany: "Billetera Digital & Aplicación de Pagos Móviles PayFast (Buenos Aires, Argentina)",
    caseOutcome: "Los usuarios dudaban si su dinero había sido enviado porque la pantalla se congelaba 2 segundos sin dar respuesta; implementó la arquitectura de microinteracciones en Figma con animaciones de éxito Lottie (check verde animado y sonido sutil); redujo las transacciones duplicadas por ansiedad en un 92% y aumentó la puntuación en Google Play de 3.4 a 4.8 estrellas.",
    pitfall: "Dejar al usuario en la incertidumbre tras presionar un botón (pantallas estáticas sin indicador de carga ni confirmación háptica o visual), provocando clics repetidos, compras duplicadas y frustración extrema.",
    actionItem1: "Diseñar los 4 Componentes de Dan Saffer para cada acción clave: 1. Disparador (Trigger: clic o deslizamiento), 2. Reglas (qué ocurre detrás), 3. Feedback Visual/Háptico (animación inmediata), 4. Bucles y Modos (estado final).",
    actionItem2: "Incorporar estados interactivos completos en Figma: Default, Hover (al pasar el ratón), Active/Pressed (al presionar), Loading (cargando) y Success (éxito animado).",
    actionItem3: "Integrar animaciones vectoriales ultraligeras en formato JSON con LottieFiles (menos de 30 KB) para celebrar hitos como completar un pago o enviar un mensaje.",
    domainContext: "La diferencia entre un producto digital promedio y un producto que la gente ama no reside en las grandes funciones, sino en los pequeños detalles: las microinteracciones que comunican estado, guían al usuario y provocan una sonrisa.",
    strategicRationale: "Las microinteracciones reducen la carga cognitiva, eliminan la ansiedad del usuario durante transacciones críticas y elevan la percepción de calidad y refinamiento tecnológico de la plataforma.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué se siente tan satisfactorio presionar el botón de 'Me Gusta' en Instagram (con su corazón que late y salta), deslizar para actualizar en Twitter o ver el check verde animado cuando envías dinero por una app bancaria? Eso se llama MICROINTERACCIÓN. Dan Saffer demostró en Silicon Valley que los grandes productos digitales triunfan gracias a los detalles invisibles: pequeñas animaciones, transiciones suaves y mensajes de confirmación que le dicen al cerebro humano 'tu acción fue exitosa'. En este tomo aprenderás a diseñar microinteracciones y feedback visual que enamoren a tus usuarios usando herramientas gratuitas como Figma y LottieFiles.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Psicología del Feedback Inmediato: Cómo eliminar la ansiedad digital en menos de 100 milisegundos.\n• Capítulo 2: Los 4 Elementos de Dan Saffer: Disparador -> Reglas -> Feedback -> Bucles y Modos.\n• Capítulo 3: Los 5 Estados de un Botón Interactivo en Figma: Normal, Hover, Presionado, Cargando y Éxito.\n• Capítulo 4: Caso de Estudio Real (PayFast Argentina): Cómo eliminaron compras duplicadas con animaciones de éxito.\n• Capítulo 5: Integración de Animaciones LottieFiles en Web: Animaciones JSON de 20 KB que no ralentizan la carga.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño de microinteracciones y prototipos interactivos cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Figma (figma.com): Prototipado interactivo avanzado con Smart Animate y Componentes con Variantes.\n2. LottieFiles (lottiefiles.com): Biblioteca de animaciones vectoriales interactivas gratuitas en formato JSON ultraligero.\n3. Lordicon.com: Colección de iconos animados interactivos con disparadores de hover y clic para sitios web.",
    ch1CustomNarrative: [
      "En el diseño de experiencias digitales contemporáneas, los usuarios no juzgan una aplicación o plataforma web por la complejidad de su código de backend, sino por la fluidez táctil y la respuesta inmediata de cada elemento visual que tocan.",
      "Cuando un usuario presiona un botón para pagar o enviar un formulario y la pantalla permanece estática sin responder durante dos segundos, experimenta una punzada instantánea de ansiedad: ¿se procesó el pago?, ¿se colgó la página?, ¿debo volver a presionar?.",
      "Esta falta de retroalimentación sensorial genera comportamientos erráticos, pagos duplicados y una profunda desconfianza hacia la robustez técnica de la empresa.",
      "Aprender a diseñar microinteracciones elegantes transforma una interfaz fría y mecánica en una experiencia viva, comunicativa y sumamente placentera."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO PROTOTIPAR MICROINTERACCIONES EN FIGMA Y LOTTIEFILES GRATIS:",
      "Paso 1: Abre Figma (figma.com). Diseña un botón de compra y crea un \"Component Set\" con 4 variantes: 1. Estado \"Default\" (Azul: \"Pagar $25 USD\"). 2. Estado \"Hover\" (Azul oscuro + escala 1.02). 3. Estado \"Loading\" (Gris con spinner circular giratorio). 4. Estado \"Success\" (Verde con icono de check).",
      "Paso 2: Conecta los estados en la pestaña \"Prototype\": • De Default a Hover: \"While hovering\" -> Smart Animate (Ease out 200ms). • De Hover a Loading: \"On click\" -> Smart Animate. • De Loading a Success: \"After delay of 800ms\" -> Smart Animate (Bouncy 300ms).",
      "Paso 3: Ingresa a LottieFiles.com y busca \"Success Checkmark\". Descarga el archivo de animación en formato JSON o copia el código iframe/Lottie-Player gratuito.",
      "Paso 4: Inserta la animación Lottie en tu sitio web: la animación pesa solo 15 KB (frente a 2 MB de un GIF tradicional) y escala a cualquier resolución sin pixelarse, ofreciendo un deleite visual impecable."
],
    ch3TacticalSteps: [
      "Semana 1: Audita los 3 botones más importantes de tu web o app y verifica si ofrecen feedback visual instantáneo al presionarse.",
      "Semana 2: Diseña en Figma el flujo de estados interactivos para tu botón de compra o formulario de contacto.",
      "Semana 3: Descarga 2 animaciones de éxito ligeras en LottieFiles para la pantalla de confirmación post-compra.",
      "Semana 4: Prueba la interacción con 5 usuarios y observa cómo la animación de confirmación genera sonrisas y tranquilidad."
],
    ch4CaseDeepDive: [
      "PayFast en Buenos Aires operaba una billetera móvil pero recibía más de 1,200 reclamos semanales por 'pagos duplicados': los usuarios presionaban el botón de transferir 3 o 4 veces seguidas porque la app no mostraba ningún cambio visual durante los 2 segundos que tardaba la transacción bancaria.",
      "Implementaron el protocolo de microinteracciones: al tocar el botón, este cambiaba de inmediato a estado 'Procesando...' con un spinner y una vibración táctil suave, culminando en un check verde animado de Lottie.",
      "Las transacciones duplicadas por ansiedad cayeron un 92%, el costo de soporte al cliente se redujo en $18,000 USD mensuales y la calificación en la tienda de aplicaciones subió a 4.8 estrellas."
],
    ch5RiskMitigation: [
      "Error fatal: El 'Exceso de Animaciones y Pirotecnia Visual' (animar cada palabra, botón y foto de la pantalla).",
      "Las microinteracciones deben ser sutiles, rápidas (entre 200 y 400 milisegundos) y funcionales; una animación que dura más de 500 ms hace que el usuario sienta que la plataforma es lenta y pesada.",
      "Respeta la preferencia de accesibilidad 'Prefers-Reduced-Motion' en CSS para usuarios que sufren de mareo o epilepsia visual.",
      "Asegúrate de que las animaciones Lottie se ejecuten de forma asíncrona sin bloquear la carga del contenido principal."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño de Microinteracciones y Feedback Visual Interactivo en Figma/Lottie\". Ayuda a empresas de software (SaaS), aplicaciones móviles y tiendas de e-commerce a mejorar la experiencia de usuario y eliminar transacciones fallidas.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por diseño de estados de botones interactivos en Figma + integración de 2 animaciones Lottie en la pantalla de gracias. • Nivel Intermedio (Con portafolio): $120 - $250 USD por sistema completo de microinteracciones para una app o sitio web (animaciones de carga, validación de formularios en tiempo real, menús desplegables y modales en Figma con Smart Animate). • Nivel Senior / Diseñador UX de Interacción y Motion Design: $300 - $600 USD por arquitectura integral de microinteracciones para productos digitales complejos, integración con librerías de React/CSS, diseño háptico para móviles y optimización de conversión.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve probando el flujo de compra de la app/web de [Empresa] y noté que cuando el usuario presiona el botón de envío la pantalla tarda en dar respuesta visual, lo que genera dudas en el cliente y puede provocar abandonos o clics repetidos. Con microinteracciones interactivas y animaciones Lottie de 15 KB es posible darle feedback instantáneo al usuario, eliminar la ansiedad y transmitir una sensación de modernidad y fluidez de primer nivel. Por solo $45 USD yo te diseño el prototipo interactivo en Figma listo para implementar. ¿Te gustaría que te comparta una demostración en video?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña un set de 3 botones interactivos con Smart Animate en Figma y añade una animación de Lottie. Día 2: Contacta a 10 fundadores de aplicaciones o tiendas de Shopify en LinkedIn y ofréceles una mejora gratuita de sus microinteracciones."
],
    quizQuestions: [
      {
            "question": "¿Cuáles son los 4 componentes de una 'Microinteracción' según el modelo de Dan Saffer?",
            "options": [
                  "Diseño, Código, Servidor y Base de Datos.",
                  "Disparador (Trigger: el inicio de la acción), Reglas (qué ocurre lógicamente), Feedback (la respuesta visual, sonora o háptica que confirma la acción) y Bucles/Modos (la duración y estado posterior).",
                  "Publicidad, Clic, Venta y Reembolso.",
                  "Texto, Imagen, Video y Audio."
            ],
            "correctIndex": 1,
            "explanation": "Comprender estos 4 elementos permite diseñar interacciones completas que guían y tranquilizan al usuario en cada paso."
      },
      {
            "question": "¿Cuál es la duración temporal óptima para una microinteracción de interfaz?",
            "options": [
                  "Entre 5 y 10 segundos.",
                  "Entre 200 y 400 milisegundos (0.2 a 0.4 segundos), lo suficientemente rápida para sentirse instantánea pero lo bastante perceptible para ser procesada por el cerebro humano.",
                  "Exactamente 1 minuto.",
                  "Cero milisegundos, no debe verse."
            ],
            "correctIndex": 1,
            "explanation": "Las animaciones de 200 a 400 ms ofrecen feedback visual placentero sin hacer que la interfaz se sienta lenta."
      },
      {
            "question": "¿Por qué las animaciones vectoriales en formato Lottie (JSON) son superiores a los archivos GIF en desarrollo web?",
            "options": [
                  "Porque los GIF son ilegales.",
                  "Porque los archivos Lottie pesan entre un 80% y un 95% menos (unos pocos Kilobytes), son vectoriales (no se pixelan en ninguna pantalla) y consumen mínima memoria del dispositivo.",
                  "Porque los GIF solo funcionan en computadoras viejas.",
                  "No son superiores, los GIF son mejores."
            ],
            "correctIndex": 1,
            "explanation": "Lottie permite animaciones fluidas y nítidas de calidad cinematográfica con un impacto casi nulo en la velocidad de carga de la web."
      }
]
  },

  // =========================================================================
  // BOOK ID: ux-3
  // =========================================================================
  'ux-3': {
    frameworkName: "Embudo de Checkout sin Fricción en 3 Pasos (One-Page Frictionless Checkout Framework) & Cero Distracciones",
    coreMetrics: [
      "Tasa de Abandono de Carrito de Compras (Cart Abandonment < 55%)",
      "Tasa de Conversión de Checkout a Compra Exitosa (> 40%)",
      "Tiempo Medio para Completar el Pago (< 90 segundos)",
      "Porcentaje de Pagos con Métodos Rápidos (Apple Pay, Google Pay, Pix, Mercado Pago > 60%)",
      "Reducción de Campos Innecesarios en Formulario (-60% de inputs)"
],
    caseCompany: "Tienda Online de Café de Especialidad & Cafeteras Artesanales TostadoDirecto (Lima, Perú)",
    caseOutcome: "El 76% de sus clientes abandonaba el carrito de compras porque el proceso exigía registrarse con contraseña obligatoria y rellenar 18 campos en 4 pantallas diferentes; implementó el Checkout sin Fricción en 1 Página en Google Sheets y Shopify, habilitó compra como invitado y pagos rápidos en 1 clic; la tasa de conversión subió del 1.8% al 5.4%, triplicando las ventas mensuales.",
    pitfall: "Obligar al usuario a crear una cuenta con contraseña antes de comprar y solicitar datos innecesarios (como teléfono fijo o dos direcciones), levantando barreras que provocan que el 70% de los compradores huyan antes de pagar.",
    actionItem1: "Habilitar la opción de 'Compra como Invitado' (Guest Checkout) sin requerir registro previo de cuenta con contraseña.",
    actionItem2: "Eliminar campos de formulario redundantes: reducir el checkout a solo 4 datos esenciales (Nombre, Teléfono/WhatsApp, Dirección y Medio de Pago).",
    actionItem3: "Integrar botones de 'Pago Express en 1 Clic' (Google Pay, Apple Pay, Mercado Pago Checkout Pro o Pix) para saltarse el llenado manual de tarjetas.",
    domainContext: "El carrito de compras es el momento de máxima vulnerabilidad psicológica del cliente: cualquier duda, lentitud, costo oculto o campo innecesario reactiva el dolor de pagar y cancela la transacción.",
    strategicRationale: "Optimizar el embudo de checkout reduce radicalmente el abandono de carritos, multiplica la rentabilidad del tráfico existente y maximiza las ventas sin necesidad de gastar más dinero en publicidad.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que el 70% de las personas que añaden un producto al carrito de compras en una tienda online lo abandonan antes de pagar? ¡Eso significa que por cada 10 personas que quieren darte su dinero, 7 se marchan con las manos vacías! El Instituto Baymard analizó millones de compras y demostró que la causa #1 de abandono son los formularios eternos y la obligación de crear una cuenta con contraseña. Un 'Checkout sin Fricción' de 1 sola página con botones de pago rápido en 1 clic permite triplicar las ventas de cualquier tienda sin gastar un centavo extra en anuncios. Este tomo te enseña a diseñar el checkout perfecto.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Psicología del Momento del Pago: El dolor neurológico de pagar y cómo neutralizarlo.\n• Capítulo 2: Las 5 Causas Fatales del Abandono de Carrito según Baymard Institute.\n• Capítulo 3: El Checkout en 1 Sola Página (One-Page Checkout): Los únicos 4 campos que necesitas pedir.\n• Capítulo 4: Caso de Estudio Real (TostadoDirecto Lima): Cómo triplicaron su conversión eliminando el registro obligatorio.\n• Capítulo 5: La Integración de Pagos Rápidos: Apple Pay, Google Pay, Mercado Pago y métodos locales.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías y optimización de checkout cobrando entre $45 y $650 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets: Matriz de Auditoría de Fricciones en Checkout y Calculadora de Ingresos Perdidos por Carrito Abandonado.\n2. Figma (figma.com): Prototipo de Checkout Mobile-First de 1 Página con diseño ergonómico de teclado numérico.\n3. Baymard Institute Checkout Benchmark: Base de datos gratuita de mejores prácticas globales de usabilidad de pago.",
    ch1CustomNarrative: [
      "En el proceso de compra de comercio electrónico, el trayecto que recorre un usuario desde que presiona 'Añadir al Carrito' hasta que introduce los datos de su tarjeta es la zona más peligrosa y crítica de todo el negocio.",
      "Los estudios de neuroeconomía demuestran que el acto de pagar activa en el cerebro humano las mismas zonas asociadas con el dolor físico.",
      "Cuando una tienda virtual interpone obstáculos innecesarios en ese instante crítico (como forzar la creación de contraseñas complejas, ocultar los costos de envío hasta el último segundo o presentar formularios interminables), el cerebro del cliente aprovecha cualquier excusa para cancelar la compra y huir de la página.",
      "Aprender a diseñar un flujo de pago sin fricción te permite convertir la intención de compra en ventas consumadas con una fluidez y eficiencia asombrosas."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO AUDITAR Y OPTIMIZAR UN CHECKOUT EN GOOGLE SHEETS Y FIGMA GRATIS:",
      "Paso 1: Abre Google Sheets y crea la hoja \"Auditoria_Friccion_Checkout\". Califica del 1 al 5 en tu tienda: 1. ¿Permite comprar como invitado sin crear contraseña? (Obligatorio Sí). 2. ¿Muestra el costo de envío desde el inicio? (Evitar sorpresas). 3. ¿El formulario tiene menos de 6 campos? 4. ¿Ofrece métodos de pago en 1 clic (Mercado Pago, Apple Pay)? 5. ¿El teclado del móvil cambia a teclado numérico al escribir el teléfono o tarjeta?.",
      "Paso 2: En Figma, diseña la estructura del \"One_Page_Checkout_Mobile (393 x 852 px)\": • Bloque 1: Resumen visual de la compra (foto, nombre del producto y precio total visible en todo momento). • Bloque 2: Datos de Entrega: Nombre, WhatsApp y Dirección con autocompletado de Google Maps. • Bloque 3: Método de Pago con sellos de seguridad SSL visibles.",
      "Paso 3: Botón de Compra Gigante: Texto claro: \"Pagar $45 USD Ahora con Envío Seguro\" con color verde de alto contraste.",
      "Paso 4: Inserta microcopia tranquilizadora justo debajo del botón: \"🔒 Tus datos están 100% cifrados con seguridad bancaria | Garantía de devolución en 30 días\"."
],
    ch3TacticalSteps: [
      "Semana 1: Realiza una compra de prueba en tu propia tienda móvil desde un smartphone y cronometra cuántos segundos tardas en pagar.",
      "Semana 2: Activa la opción 'Comprar como Invitado' y desactiva todos los campos de formulario innecesarios en la configuración de tu plataforma.",
      "Semana 3: Configura pasarelas de pago rápido (Mercado Pago, Apple Pay o Pix) para reducir el proceso a 1 solo toque.",
      "Semana 4: Mide la tasa de carritos abandonados durante 14 días y celebra la reducción de abandonos y el aumento de facturación."
],
    ch4CaseDeepDive: [
      "TostadoDirecto en Lima vendía café en grano pero el 76% de las personas que iniciaban el checkout se iban sin comprar.",
      "El análisis reveló que el sistema exigía crear una contraseña con mayúsculas y números, pedía DNI y teléfono fijo, y solo al final revelaba un costo de envío sorpresa de $5 USD.",
      "Cambiaron a un Checkout de 1 Página en Shopify: eliminaron el registro de cuenta, redujeron los campos a 4, mostraron el costo de envío desde la primera pantalla e integraron pagos con billeteras móviles.",
      "La tasa de conversión global de la tienda subió del 1.8% al 5.4%, recuperaron $22,000 USD mensuales en ventas que antes se perdían y los clientes destacaban la rapidez para comprar en solo 40 segundos."
],
    ch5RiskMitigation: [
      "Error fatal: Ocultar los costos de envío o impuestos hasta la última pantalla del proceso de pago.",
      "El costo oculto de envío es la causa #1 de abandono de carritos en el mundo; sé transparente desde la ficha de producto o implementa 'Envío Gratis a partir de $X monto'.",
      "No utilices pasarelas de pago externas que redirigen al usuario a páginas externas sospechosas o lentas que parecen de otro sitio; mantén el pago integrado dentro de tu propia web.",
      "Asegúrate de que los campos de tarjeta y teléfono activen el teclado numérico nativo en smartphones (type=\"tel\" y type=\"number\")."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría y Optimización de Checkout para Tiendas Online (Reducción de Carritos Abandonados)\". Ayuda a tiendas de Shopify, WooCommerce, Tiendanube y marcas de e-commerce a rediseñar su pasarela de pago y duplicar sus ventas.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por auditoría de fricciones en Google Sheets + configuración de compra como invitado y eliminación de campos innecesarios en la plataforma. • Nivel Intermedio (Con portafolio): $130 - $270 USD por rediseño completo de embudo de checkout en 1 página, integración de pasarelas de pago express (Mercado Pago / Apple Pay), configuración de teclado numérico móvil y microcopia de confianza. • Nivel Senior / Consultor de Optimización de Checkout y CRO: $320 - $650 USD por reingeniería completa de experiencia de compra, análisis de grabaciones de usuarios en Hotjar, secuencias automatizadas de recuperación de carritos por WhatsApp y garantía de reducción de abandono.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve haciendo una prueba de compra en la tienda online de [Empresa] y noté que el proceso de pago exige muchos pasos y campos obligatorios, lo que según los estudios de Baymard Institute hace que más del 70% de los clientes abandonen el carrito antes de pagar. Con un Checkout optimizado en 1 página y pagos rápidos es posible reducir los abandonos a la mitad y duplicar la facturación con el mismo tráfico que ya tienes. Por solo $50 USD yo te realizo una Auditoría de Fricciones y te configuro la compra en 1 página. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la matriz de auditoría de checkout en Google Sheets y haz una prueba en 3 tiendas locales. Día 2: Contacta a 10 dueños de e-commerce en Instagram o LinkedIn y ofréceles un informe gratuito de fricciones de su checkout."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la causa #1 de abandono de carritos de compra en el comercio electrónico según los estudios globales de Baymard Institute?",
            "options": [
                  "Que los colores de la web no combinan.",
                  "Costos adicionales ocultos e inesperados (como envíos caros o impuestos revelados al final) y la obligación de crear una cuenta con contraseña antes de poder pagar.",
                  "Que los clientes no tienen dinero.",
                  "Que las tiendas cierran de noche."
            ],
            "correctIndex": 1,
            "explanation": "La falta de transparencia en costos y la fricción de exigir registro previo destruyen la intención de compra en el último segundo."
      },
      {
            "question": "¿Qué es la opción de 'Compra como Invitado' (Guest Checkout) y por qué dispara las conversiones?",
            "options": [
                  "Una opción para regalar productos a personas desconocidas.",
                  "Permitir que el cliente complete su compra ingresando solo sus datos de envío y pago sin obligarlo a registrar un usuario ni inventar una contraseña, eliminando la principal barrera psicológica de salida.",
                  "Un pase para entrar a eventos exclusivos.",
                  "Una membresía de suscripción mensual."
            ],
            "correctIndex": 1,
            "explanation": "El Guest Checkout respeta la prisa del comprador y permite cerrar ventas en menos de 60 segundos."
      },
      {
            "question": "¿Por qué es crucial que los campos de teléfono o tarjeta activen el teclado numérico en smartphones?",
            "options": [
                  "Porque el teclado numérico consume menos batería.",
                  "Porque evita que el usuario tenga que cambiar manualmente entre letras y números en la pantalla táctil, reduciendo errores de tipeo y acelerando el pago.",
                  "Porque es una exigencia legal de Google.",
                  "No tiene ninguna importancia."
            ],
            "correctIndex": 1,
            "explanation": "Mostrar el teclado numérico por defecto (type='tel' o inputmode='numeric') mejora la ergonomía y reduce la fricción táctil en móviles."
      }
]
  },

  // =========================================================================
  // BOOK ID: ux-4
  // =========================================================================
  'ux-4': {
    frameworkName: "Metodología de Card Sorting Abierto/Cerrado & Árbol de Navegación de 3 Niveles (Information Architecture Matrix)",
    coreMetrics: [
      "Tasa de Éxito en Búsqueda de Contenidos (Findability Score > 88%)",
      "Profundidad de Navegación Máxima (Regla de los 3 Clics: < 3 clics)",
      "Reducción de Elementos en Menú Principal (Máximo 7 ítems - Ley de Miller)",
      "Tiempo Medio para Encontrar un Producto/Servicio (< 25 segundos)",
      "Tasa de Uso Exitoso de la Barra de Búsqueda Interna (> 80%)"
],
    caseCompany: "Distribuidora de Ferretería & Materiales de Construcción FerreRed (Santiago, Chile)",
    caseOutcome: "Tenía un catálogo web de 12,000 productos con un menú caótico de 40 categorías desordenadas donde los clientes no encontraban nada; ejecutó una sesión de Card Sorting con 30 clientes en FigJam y reestructuró la arquitectura en 6 macrocategorías claras; la tasa de éxito de búsqueda subió del 38% al 91% y las ventas digitales se duplicaron en 60 días.",
    pitfall: "Organizar el menú del sitio web según el organigrama interno de los departamentos de la empresa ('Gerencia A', 'División B'), en lugar de organizarlo según los modelos mentales y necesidades cotidianas del cliente.",
    actionItem1: "Aplicar la 'Ley de Miller (7 ± 2)': limitar la barra de navegación principal a un máximo de 5 a 7 categorías esenciales para no sobrecargar la memoria de trabajo del usuario.",
    actionItem2: "Realizar una dinámica de 'Card Sorting Abierto' en FigJam o Miro con 10 clientes para que agrupen tus productos o servicios según su propia lógica natural.",
    actionItem3: "Implementar la 'Regla de los 3 Clics': asegurar que cualquier producto, precio o dato de contacto se encuentre a un máximo de 3 clics desde la portada.",
    domainContext: "La mejor información o el producto más extraordinario del mundo carecen de valor si el usuario no puede encontrarlos en menos de treinta segundos en tu plataforma web.",
    strategicRationale: "Una arquitectura de información intuitiva reduce la frustración del usuario, minimiza las consultas de soporte repetitivas y acelera el camino natural hacia la conversión de ventas.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Alguna vez has entrado a un sitio web o aplicación y te sentiste completamente perdido porque el menú tenía 25 pestañas con nombres confusos y submenús interminables? El 80% de los sitios web corporativos sufren de 'Arquitectura Caótica': organizaron la web según los departamentos internos de la empresa y no según cómo piensa el cliente. El 'Card Sorting' (Clasificación de Tarjetas) es la metodología científica de UX que permite descubrir el modelo mental del usuario para diseñar menús donde todo se encuentra en menos de 3 clics. Este tomo te enseña a estructurar la arquitectura de información de cualquier producto digital.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: Los Modelos Mentales del Usuario: Por qué tu cliente piensa de forma diferente a los ingenieros de tu empresa.\n• Capítulo 2: La Ley de Miller (7 ± 2): El límite biológico de la memoria humana y la simplificación de menús.\n• Capítulo 3: Card Sorting Abierto vs. Cerrado en FigJam/Miro: Cómo hacer pruebas colaborativas gratuitas.\n• Capítulo 4: Caso de Estudio Real (FerreRed Chile): Cómo duplicaron ventas reestructurando 12,000 productos con Card Sorting.\n• Capítulo 5: La Regla de los 3 Clics y Migas de Pan (Breadcrumbs): Guías de orientación visual para nunca perderse.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de arquitectura de información y Card Sorting cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. FigJam (figma.com/figjam) / Miro: Tableros colaborativos gratuitos con notas adhesivas digitales para sesiones de Card Sorting.\n2. Notion (notion.so): Documentación del Árbol Jerárquico del Mapa del Sitio (Sitemap) y Taxonomía de Categorías.\n3. Octolux / GlooMaps: Generadores visuales de mapas de sitio y diagramas de flujo de navegación en 1 clic.",
    ch1CustomNarrative: [
      "En el diseño de interfaces y productos digitales, existe un principio axiomático fundamental: si el usuario no puede encontrar un contenido o producto de forma rápida e intuitiva, para todos los efectos prácticos ese contenido simplemente no existe.",
      "Incontables plataformas web fracasan no por falta de catálogo o calidad en sus servicios, sino porque presentan laberintos de menús desordenados, categorías ambiguas y enlaces rotos que frustran la búsqueda del consumidor.",
      "La Arquitectura de la Información (AI) es la disciplina encargada de categorizar, jerarquizar y rotular los contenidos para que navegar por una web sea tan natural y fluido como caminar por un supermercado perfectamente señalizado.",
      "Aprender a estructurar la información con rigor metodológico te permite eliminar la fricción de navegación y multiplicar la retención de usuarios en tu plataforma."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO EJECUTAR UNA SESIÓN DE CARD SORTING EN FIGJAM Y NOTION GRATIS:",
      "Paso 1: Abre FigJam (figma.com/figjam) y crea un tablero nuevo. Escribe en 30 notas adhesivas (stickers) los nombres de todos los productos, servicios o páginas de tu web.",
      "Paso 2: Invita a 5 clientes reales por videollamada y pídeles: \"Agrupen estas tarjetas en las categorías que a ustedes les parezcan lógicas y pónganle un nombre a cada grupo (Card Sorting Abierto)\".",
      "Paso 3: Analiza los patrones: Observa qué nombres eligen los clientes (ej. los clientes prefieren \"Cuidado Facial\" en lugar del término técnico corporativo \"Dermatocosmética Tópica\").",
      "Paso 4: En Notion, diseña el \"Árbol_De_Navegacion_3_Niveles\": • Nivel 1 (Barra Principal): Máximo 5 macrocategorías (ej. Inicio, Productos, Servicios, Casos de Éxito, Contacto). • Nivel 2 (Subcategorías): 3 a 4 opciones por bloque. • Nivel 3: Páginas finales de producto.",
      "Paso 5: Añade 'Migas de Pan' (Breadcrumbs: ej. Inicio > Herramientas > Taladros) en la parte superior de cada página para que el usuario siempre sepa en qué lugar exacto del sitio se encuentra y pueda retroceder en 1 clic."
],
    ch3TacticalSteps: [
      "Semana 1: Haz una lista completa de todas las páginas y categorías actuales de tu web en una hoja de Notion.",
      "Semana 2: Ejecuta una prueba de Card Sorting con 5 usuarios en FigJam y anota sus conclusiones.",
      "Semana 3: Reduce los elementos del menú principal a un máximo de 6 opciones claras y añade una barra de búsqueda destacada.",
      "Semana 4: Mide el tiempo que tardan nuevos usuarios en encontrar un producto específico y verifica que la regla de los 3 clics se cumpla al 100%."
],
    ch4CaseDeepDive: [
      "FerreRed en Santiago distribuía 12,000 artículos de ferretería en su web pero los clientes llamaban por teléfono frustrados porque no encontraban los productos en el catálogo digital.",
      "El menú tenía 40 categorías ordenadas alfabéticamente por códigos de proveedor internos que nadie entendía.",
      "Realizaron una sesión de Card Sorting en FigJam con 30 maestros de obra y electricistas: simplificaron el catálogo en 6 macrocategorías basadas en proyectos (Electricidad, Pintura, Plomería, Herramientas, Seguridad y Construcción).",
      "La tasa de éxito de búsqueda subió del 38% al 91%, las llamadas de quejas cayeron un 75% y las compras completadas en la web se duplicaron en solo 60 días."
],
    ch5RiskMitigation: [
      "Error fatal: Utilizar términos 'creativos' o poéticos para los nombres del menú que nadie comprende (ej. llamar 'Nuestra Esencia' a la página de 'Servicios').",
      "En navegación web la claridad aplasta a la creatividad: utiliza nombres estándar y directos ('Servicios', 'Precios', 'Contacto', 'Tienda') para no confundir al usuario.",
      "No crees menús desplegables (Megamenús) gigantescos en teléfonos móviles: en pantallas táctiles los menús deben ser acordeones verticales limpios y fáciles de tocar.",
      "Asegúrate de que la función de búsqueda interna tolere errores ortográficos y ofrezca sugerencias automáticas de autocompletado."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de Arquitectura de Información (IA), Card Sorting y Reestructuración de Menús Web\". Ayuda a empresas con catálogos amplios, tiendas online, portales educativos y despachos a ordenar su información y duplicar sus ventas.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por sesión de Card Sorting en FigJam + mapa de sitio simplificado en Notion bajo la regla de los 3 clics. • Nivel Intermedio (Con portafolio): $120 - $250 USD por reestructuración completa de la arquitectura de información de un catálogo o sitio web corporativo, taxonomía de contenidos, diseño de megamenú responsive y optimización de buscador interno. • Nivel Senior / Consultor de Arquitectura de Información y UX Research: $300 - $600 USD por arquitectura de información para plataformas complejas (SaaS o e-commerce de +10,000 SKUs), pruebas de árbol (Tree Testing), mapas de navegación interactivos y consultoría de diseño de experiencia.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve navegando en el sitio web de [Empresa] y noté que tienen una gran cantidad de productos y servicios excelentes, pero el menú tiene muchas opciones y categorías que pueden hacer que un cliente nuevo se sienta desorientado y abandone la página sin comprar. Con la metodología de Card Sorting en FigJam es posible rediseñar la estructura para que cualquier producto se encuentre en menos de 3 clics. Por solo $45 USD yo te realizo la auditoría de Arquitectura de Información y te entrego el nuevo mapa de sitio en Notion en 48 horas. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura una plantilla de Card Sorting en FigJam y practica agrupando las secciones de 3 sitios conocidos. Día 2: Contacta a 10 tiendas online o despachos con menús desordenados en LinkedIn y ofréceles una propuesta gratuita de simplificación de menú."
],
    quizQuestions: [
      {
            "question": "¿En qué consiste la técnica de 'Card Sorting' (Clasificación de Tarjetas) en el diseño de experiencia de usuario?",
            "options": [
                  "Un juego de naipes de mesa.",
                  "Una metodología de investigación donde usuarios reales agrupan y nombran conceptos, productos o páginas de una empresa en categorías que tienen sentido para ellos, revelando sus modelos mentales naturales para diseñar menús intuitivos.",
                  "Un método para ordenar las tarjetas de crédito de los clientes.",
                  "Un examen de memoria para empleados."
            ],
            "correctIndex": 1,
            "explanation": "El Card Sorting asegura que la navegación web se base en la lógica del usuario y no en la burocracia interna de la empresa."
      },
      {
            "question": "¿Qué establece la 'Ley de Miller' (7 ± 2) en la usabilidad de interfaces?",
            "options": [
                  "Que los sitios web deben tener 7 páginas en total.",
                  "Que la memoria de trabajo humana a corto plazo solo puede retener entre 5 y 9 elementos a la vez; por lo tanto, los menús de navegación deben limitarse a un máximo de 5 a 7 opciones principales para evitar sobrecarga mental.",
                  "Que los proyectos deben durar 7 semanas.",
                  "Que los colores deben cambiarse cada 7 días."
            ],
            "correctIndex": 1,
            "explanation": "Limitar el menú a 5-7 ítems facilita la toma de decisiones y evita la parálisis por exceso de opciones."
      },
      {
            "question": "¿Qué es la 'Regla de los 3 Clics' en la arquitectura de información?",
            "options": [
                  "Hacer clic 3 veces para encender la pantalla.",
                  "El principio de usabilidad que sugiere que cualquier usuario debe poder encontrar la información, producto o dato de contacto que busca en un máximo de tres clics desde la página de inicio.",
                  "Comprar 3 productos para obtener un descuento.",
                  "Un atajo de teclado para cerrar ventanas."
            ],
            "correctIndex": 1,
            "explanation": "Mantener la profundidad de navegación en 3 clics o menos reduce la fricción y acelera la conversión de clientes."
      }
]
  },

  // =========================================================================
  // BOOK ID: ux-5
  // =========================================================================
  'ux-5': {
    frameworkName: "Mapa de Experiencia y Puntos de Contacto Omnicanal (Customer Journey Mapping Framework - 5 Fases) & Curva Emocional",
    coreMetrics: [
      "Identificación de Puntos de Fricción Críticos (Pain Points mapeados)",
      "Puntuación de Experiencia del Cliente en Puntos de Contacto (CSAT > 90%)",
      "Reducción de Caídas entre Etapas del Embudo (-45%)",
      "Tiempo Total del Ciclo de Experiencia del Cliente (Lead Time to Value)",
      "Nivel de Alineación Interdepartamental en torno al Viaje del Cliente (100%)"
],
    caseCompany: "Clínica de Medicina Preventiva & Diagnóstico Integral Vitalis (Guadalajara, México)",
    caseOutcome: "Los pacientes se quejaban de largas esperas y mala atención a pesar de la excelencia de los médicos; diseñó el Customer Journey Map en Canva con 5 fases (Descubrimiento, Agendamiento, Consulta, Resultados y Seguimiento post-tratamiento); descubrió que el mayor punto de dolor era la entrega de resultados en papel que tardaba 5 días; digitalizó los resultados por WhatsApp en 2 horas; el NPS subió de +18 a +76 puntos.",
    pitfall: "Analizar la experiencia del cliente como 'momentos aislados e inconexos' (atención telefónica separada de la web y de la entrega física), sin tener una visión integral de extremo a extremo de todo el viaje emocional del usuario.",
    actionItem1: "Estructurar las 5 Fases del Customer Journey Map: 1. Descubrimiento / Atracción, 2. Evaluación / Consideración, 3. Compra / Onboarding, 4. Uso / Entrega del Servicio, 5. Fidelización y Recomendación.",
    actionItem2: "Mapear para cada fase: Los objetivos del cliente, Los puntos de contacto (Touchpoints), La Curva Emocional (Sonrisas / Frustración) y Los Puntos de Dolor (Pain Points).",
    actionItem3: "Identificar el 'Momento de Máxima Fricción' de tu negocio y diseñar una solución inmediata en menos de 48 horas.",
    domainContext: "El cliente no evalúa a tu empresa por tu mejor anuncio o por la amabilidad de un vendedor aislado; evalúa la totalidad acumulada de su experiencia en cada interacción, desde el primer clic en redes hasta el servicio postventa.",
    strategicRationale: "Diseñar y monitorear el Customer Journey Map alinea a todos los departamentos de la empresa hacia la satisfacción del cliente, elimina cuellos de botella y transforma compradores ocasionales en promotores leales.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué tantas empresas en América Latina tienen excelentes productos pero clientes insatisfechos que dejan malas reseñas en Google? Porque sufren de 'Puntos Ciegos': el producto es bueno, pero agendar la cita fue una pesadilla, la entrega se retrasó 3 días o el soporte por WhatsApp tardó 24 horas en responder. Un 'Customer Journey Map' (Mapa del Viaje del Cliente) es la radiografía visual de extremo a extremo de todo lo que experimenta el cliente antes, durante y después de comprar. Te permite ver exactamente dónde siente frustración y dónde siente alegría. Este tomo te enseña a diseñar mapas de viaje que transformen tu servicio.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Visión de Extremo a Extremo (End-to-End): Por qué evaluar momentos aislados es un error fatal.\n• Capítulo 2: Las 5 Fases del Viaje del Cliente: Del Descubrimiento a la Lealtad y Recomendación.\n• Capítulo 3: La Curva Emocional y los Puntos de Dolor (Pain Points): Cómo graficar la felicidad vs. la frustración.\n• Capítulo 4: Caso de Estudio Real (Vitalis Salud México): Cómo elevaron su NPS de +18 a +76 digitalizando resultados.\n• Capítulo 5: La Matriz de Oportunidades en Canva: Convertir fricciones operativas en ventajas comerciales.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño y facilitación de Customer Journey Maps cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Canva (canva.com) / Miro: Plantilla Oficial del Customer Journey Map visual de 5 Fases con curva emocional y emojis.\n2. Google Forms: Encuestas breves de satisfacción en cada punto de contacto para obtener datos cuantitativos reales.\n3. Google Sheets: Matriz de Priorización de Mejoras de Experiencia según Impacto vs. Esfuerzo.",
    ch1CustomNarrative: [
      "En el panorama comercial moderno, la experiencia del cliente (Customer Experience - CX) se ha consolidado como el campo de batalla definitivo donde se ganan o pierden las empresas.",
      "Muchos directivos cometen el grave error de evaluar su negocio en compartimentos estancos: el equipo de marketing celebra el éxito de sus anuncios, el equipo de ventas festeja los contratos firmados y el equipo de soporte responde quejas como puede, sin que nadie tenga una visión panorámica de la experiencia completa del comprador.",
      "El Customer Journey Map es la herramienta de alineación estratégica por excelencia: un lienzo visual que documenta las emociones, pensamientos, obstáculos y expectativas del cliente a lo largo de cada etapa de su relación con la marca.",
      "Aprender a mapear y optimizar el viaje del cliente te permite identificar fricciones invisibles y diseñar momentos de deleite memorables que blindan la lealtad de tus clientes."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UN CUSTOMER JOURNEY MAP EN CANVA Y SHEETS GRATIS:",
      "Paso 1: Abre Canva (canva.com) y busca la plantilla \"Customer Journey Map / Mapa del Viaje del Cliente (Formato A3 o Presentación)\".",
      "Paso 2: Define las 5 Columnas (Fases): 1. Descubrimiento (Ve un anuncio en redes). 2. Evaluación (Revisa el sitio web y cotiza). 3. Compra (Paga en la pasarela o mostrador). 4. Servicio / Entrega (Recibe el producto). 5. Postventa (Soporte y recomendación).",
      "Paso 3: Rellena las 4 Filas para cada fase: • Fila 1: Acciones que hace el cliente (ej. \"Escribe un mensaje de WhatsApp preguntando precio\"). • Fila 2: Puntos de Contacto (WhatsApp, Web, Empaque físico, Factura). • Fila 3: Curva Emocional (Línea gráfica que sube con emociones positivas 😊 y baja en puntos de dolor 😠). • Fila 4: Puntos de Dolor (ej. \"Tardan 4 horas en responder el mensaje\").",
      "Paso 4: En Google Sheets, crea la \"Matriz_Mejoras_Experiencia\": Prioriza las soluciones en 4 cuadrantes (Alto Impacto / Bajo Esfuerzo) y asigna un responsable y fecha límite de 7 días para corregir el punto de dolor más crítico."
],
    ch3TacticalSteps: [
      "Semana 1: Entrevista a 5 clientes recientes y haz un recorrido cronológico de cada paso de su compra.",
      "Semana 2: Dibuja el Customer Journey Map completo en Canva identificando los 3 valles de mayor frustración emocional.",
      "Semana 3: Reúne a tu equipo operativo y presenta el mapa para definir quién solucionará el punto de dolor principal.",
      "Semana 4: Implementa la mejora y envía una encuesta breve de satisfacción por WhatsApp para medir el cambio emocional."
],
    ch4CaseDeepDive: [
      "Clínica Vitalis en Guadalajara ofrecía chequeos médicos integrales con tecnología de punta pero su calificación en Google Maps era de 3.2 estrellas por quejas continuas.",
      "El mapa del viaje del paciente reveló que mientras la consulta médica tenía una calificación de 10/10 (emoción máxima), la entrega de resultados caía a 2/10 (valle de frustración extrema) porque exigían al paciente volver físicamente a la clínica y hacer fila durante 45 minutos solo para recoger un sobre de papel.",
      "Diseñaron una solución de bajo esfuerzo: crearon un sistema de envío automático de resultados en PDF cifrado por WhatsApp en menos de 2 horas.",
      "La satisfacción de los pacientes se disparó, el NPS subió de +18 a +76 puntos y la clínica duplicó sus recomendaciones de boca a boca en 4 meses."
],
    ch5RiskMitigation: [
      "Error fatal: Diseñar el mapa del cliente basado en las 'suposiciones o fantasías' del equipo interno sin entrevistar a clientes reales.",
      "El mapa debe construirse con datos y testimonios reales de compradores; haz preguntas abiertas y escucha las quejas con humildad sin ponerte a la defensiva.",
      "No crees un mapa para dejarlo guardado en un cajón como adorno: el mapa es un documento operativo vivo que debe generar planes de acción semanales.",
      "Asegúrate de incluir en el viaje las etapas postventa: el servicio no termina cuando el cliente paga, termina cuando logra el resultado que deseaba."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño y Facilitación de Customer Journey Maps (CJM) para PYMEs y Startups\". Ayuda a clínicas, hoteles, restaurantes, e-commerce y empresas de servicios a mapear la experiencia de sus clientes y eliminar cuellos de botella.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por diseño de Customer Journey Map de 5 fases en Canva + matriz de priorización de mejoras en Google Sheets. • Nivel Intermedio (Con portafolio): $140 - $280 USD por taller de 3 horas de facilitación con el equipo de la empresa, entrevistas a 5 clientes reales, mapa de experiencia omnicanal y plan de choque de 30 días. • Nivel Senior / Consultor de Experiencia del Cliente (CX Strategy): $350 - $700 USD por programa integral de transformación de Customer Experience, gobernanza de puntos de contacto, cuadro de mando de satisfacción CSAT/NPS y rediseño de protocolos operativos.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando las opiniones de clientes de [Empresa] y noté que tienen un producto de gran calidad pero a veces se presentan fricciones en los tiempos de respuesta o en la entrega que afectan la percepción del cliente. Un Customer Journey Map (Mapa del Viaje del Cliente) en Canva permite visualizar cada punto de contacto de extremo a extremo para detectar exactamente dónde se producen las molestias y corregirlas antes de que se conviertan en quejas o cancelaciones. Por solo $50 USD yo te facilito el diseño del mapa completo con plan de acción en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de Customer Journey Map en Canva y la matriz en Sheets. Día 2: Contacta a 10 gerentes de clínicas, hoteles o empresas de servicios en LinkedIn y ofréceles una sesión gratuita de diagnóstico del viaje del cliente."
],
    quizQuestions: [
      {
            "question": "¿Cuál es el propósito fundamental de un 'Customer Journey Map' (Mapa del Viaje del Cliente)?",
            "options": [
                  "Calcular los impuestos de importación.",
                  "Visualizar de extremo a extremo todas las etapas, interacciones, emociones y puntos de fricción que experimenta un cliente en su relación con la empresa, permitiendo identificar oportunidades de mejora operativa y comercial.",
                  "Rastrear la ubicación física del cliente por satélite.",
                  "Un organigrama de sueldos de la empresa."
            ],
            "correctIndex": 1,
            "explanation": "El mapa del viaje del cliente ofrece una radiografía completa de la experiencia del usuario, unificando la visión de todos los departamentos."
      },
      {
            "question": "¿Qué representa la 'Curva Emocional' dentro de un Customer Journey Map?",
            "options": [
                  "El balance contable de fin de año.",
                  "La representación gráfica de los altibajos en el estado anímico y satisfacción del cliente (desde la alegría hasta la frustración) a medida que interactúa con los distintos puntos de contacto de la marca.",
                  "La velocidad de internet del usuario.",
                  "El ritmo cardíaco de los vendedores."
            ],
            "correctIndex": 1,
            "explanation": "La curva emocional revela visualmente los 'valles de dolor' que requieren una intervención y corrección inmediata."
      },
      {
            "question": "¿Por qué es un error grave construir un Customer Journey Map basándose únicamente en opiniones internas de la oficina?",
            "options": [
                  "Porque los empleados cobran más por opinar.",
                  "Porque genera 'Puntos Ciegos' y suposiciones falsas; el mapa debe construirse a partir de entrevistas y datos reales de clientes para reflejar sus verdaderos dolores y expectativas.",
                  "Porque Canva no permite escribir opiniones internas.",
                  "No es ningún error, las opiniones internas son 100% exactas."
            ],
            "correctIndex": 1,
            "explanation": "La retroalimentación directa y honesta del cliente es la única fuente de verdad para optimizar la experiencia de usuario."
      }
]
  },

  // =========================================================================
  // BOOK ID: ux-6
  // =========================================================================
  'ux-6': {
    frameworkName: "Protocolo de Pruebas de Usabilidad de Guerrilla de Steve Krug (Don't Make Me Think Usability Testing) & Protocolo de Pensar en Voz Alta",
    coreMetrics: [
      "Tasa de Detección de Errores Críticos de Usabilidad (> 85% con solo 5 usuarios)",
      "Tiempo Medio de Finalización de Tareas de Prueba (< 2 minutos)",
      "System Usability Scale Score (SUS > 80/100)",
      "Reducción de Puntos de Confusión en la Interfaz (-70%)",
      "Retorno de Inversión del Test de Usabilidad (ROI > 10x)"
],
    caseCompany: "Plataforma de Cursos Online & Certificaciones Profesionales AprendeDigital (Lima, Perú)",
    caseOutcome: "Los estudiantes se inscribían a cursos pero el 65% nunca lograba ver la primera clase y pedía reembolso diciendo que 'la plataforma era confusa'; ejecutó el protocolo de pruebas de usabilidad de guerrilla con 5 usuarios en Google Meet; descubrió que el botón de 'Iniciar Lección' estaba oculto debajo de un banner informativo; cambió el botón a la parte superior; los reembolsos cayeron a cero y las finalizaciones de cursos aumentaron un 140%.",
    pitfall: "Creer que hacer pruebas con usuarios reales es 'demasiado caro, complejo y solo para multinacionales con laboratorios de vidrio', lanzando productos digitales basados en la intuición del diseñador sin validar con personas de carne y hueso.",
    actionItem1: "Aplicar la 'Regla de los 5 Usuarios de Jakob Nielsen': con solo 5 pruebas de usabilidad individuales se descubren más del 85% de los fallos graves de un sitio web o aplicación.",
    actionItem2: "Ejecutar el 'Protocolo de Pensar en Voz Alta (Think-Aloud Protocol)': pedir al usuario que comparta su pantalla y exprese en voz alta todo lo que piensa, duda o siente mientras intenta completar una tarea específica.",
    actionItem3: "Filmar o grabar la sesión de 20 minutos en Google Meet o Loom para compartir las evidencias irrefutables con el equipo de desarrollo.",
    domainContext: "Steve Krug demostró en su obra maestra 'Don't Make Me Think' (No me hagas pensar) que los usuarios no leen las pantallas web, las hojean rápidamente; cualquier segundo de duda o confusión es un segundo que acerca al usuario al botón de salir.",
    strategicRationale: "Las pruebas de usabilidad de guerrilla son el método más económico y de mayor retorno de inversión en el diseño digital, permitiendo resolver en 1 hora problemas que costarían meses de debate estéril en reuniones.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué los diseñadores y programadores a menudo crean plataformas que a ellos les parecen 'obvias y sencillas', pero cuando las usa una persona real no sabe dónde hacer clic y se equivoca en todo? Porque sufren de 'La Maldición del Conocimiento': ellos conocen el sistema de memoria, pero el cliente lo ve por primera vez. Steve Krug revolucionó el mundo digital con 'Don't Make Me Think' (No me hagas pensar): demostró que con solo 5 usuarios reales y una videollamada de 15 minutos en Google Meet puedes descubrir el 85% de los fallos que están destruyendo tus ventas. Este tomo final de la Categoría 14 te enseña a ejecutar pruebas de usabilidad de guerrilla.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Regla de Oro de Steve Krug: 'No me hagas pensar' (El diseño autoexplicativo).\n• Capítulo 2: La Ley de Jakob Nielsen de los 5 Usuarios: Por qué 5 pruebas son suficientes para encontrar el 85% de los errores.\n• Capítulo 3: El Protocolo de Pensar en Voz Alta (Think-Aloud): Cómo guiar la sesión sin inducir las respuestas.\n• Capítulo 4: Caso de Estudio Real (AprendeDigital Lima): Cómo eliminaron reembolsos con 5 pruebas de guerrilla.\n• Capítulo 5: La Grabación de Sesiones en Google Meet / Loom: Cómo crear videos de evidencia para comités directivos.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer pruebas de usabilidad con usuarios reales cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Meet / Zoom / Loom: Grabación gratuita de sesiones de usabilidad con pantalla compartida y audio en vivo.\n2. Google Docs: Guion Oficial de Facilitación de Pruebas de Usabilidad de Steve Krug y Lista de Tareas.\n3. Google Sheets: Matriz de Registro de Errores de Usabilidad y Cálculo de la Escala SUS (System Usability Scale).",
    ch1CustomNarrative: [
      "En las empresas de tecnología y negocios digitales se gastan incontables horas en reuniones de comités directivos donde diseñadores, gerentes y programadores debaten acaloradamente sobre si un botón debe ser azul o verde, o si el formulario debe ir a la derecha o a la izquierda.",
      "Estos debates basados en opiniones personales son completamente inútiles: la única opinión que importa en los negocios es la del usuario real que intenta utilizar la plataforma para resolver un problema.",
      "El autor Steve Krug demostró que no se necesitan laboratorios sofisticados ni cámaras ocultas para hacer investigación de usabilidad de clase mundial; una simple sesión de quince minutos donde observas en silencio a un usuario común interactuar con tu producto revela verdades contundentes que transforman el negocio.",
      "Aprender a ejecutar pruebas de usabilidad de guerrilla te permite erradicar la incertidumbre y tomar decisiones de diseño con la certeza absoluta de los datos observacionales."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO EJECUTAR UNA PRUEBA DE USABILIDAD DE GUERRILLA EN GOOGLE MEET Y DOCS GRATIS:",
      "Paso 1: Abre Google Docs y redacta el \"Guion_Prueba_Usabilidad_Steve_Krug\": • Bienvenida (2 min): \"Hola [Nombre], gracias por ayudarnos. Queremos probar el sitio web, no a ti; no hay respuestas incorrectas y cualquier duda que tengas es un fallo del diseño, no tuyo\". • Petición de Pensar en Voz Alta: \"Por favor di en voz alta todo lo que vayas pensando y sintiendo mientras navegas\".",
      "Paso 2: Define 3 Tareas Concretas: • Tarea 1: \"Imagina que necesitas cotizar el servicio X; encuentra el precio y dinos cuánto cuesta\". • Tarea 2: \"Completa el formulario de reserva con datos de prueba\". • Tarea 3: \"Encuentra la política de devoluciones\".",
      "Paso 3: Abre Google Meet (meet.google.com), inicia la llamada con el usuario, pídele que comparta su pantalla y presiona \"Grabar reunión\".",
      "Paso 4: La Regla del Silencio Absoluto: Guarda silencio mientras el usuario navega. Si se queda callado o dudando, pregunta suavemente: \"¿Qué estás pensando en este momento?\", pero NUNCA le digas dónde debe hacer clic.",
      "Paso 5: En Google Sheets, anota: Tarea lograda (Sí/No), Tiempo empleado y Comentario de confusión del usuario. Repite con 5 usuarios y exporta el reporte de mejoras."
],
    ch3TacticalSteps: [
      "Semana 1: Redacta tu guion de 3 tareas de usabilidad en Google Docs enfocado en tu flujo principal de ventas.",
      "Semana 2: Recluta a 5 personas que coincidan con el perfil de tu cliente ideal (pueden ser amigos o conocidos que nunca hayan visto tu web).",
      "Semana 3: Ejecuta las 5 pruebas de 20 minutos por Google Meet y graba las sesiones con su consentimiento.",
      "Semana 4: Edita un video resumen de 3 minutos con los 3 tropiezos más graves y reúne a tu equipo para corregirlos en 48 horas."
],
    ch4CaseDeepDive: [
      "AprendeDigital en Lima vendía cursos de marketing pero el 65% de los compradores pedía la devolución de su dinero en los primeros 2 días diciendo que 'no encontraban las clases'.",
      "Los programadores aseguraban que la plataforma era facilísima de usar.",
      "El director ejecutó el test de guerrilla con 5 profesionales en Google Meet: descubrió con asombro que los 5 usuarios hacían clic en el banner superior y se quedaban esperando, sin darse cuenta de que debían hacer scroll hacia abajo para ver el botón de 'Ver Lección 1'.",
      "Subieron el botón al encabezado principal: las quejas de reembolso cayeron a cero en 24 horas y la tasa de finalización de cursos subió un 140%."
],
    ch5RiskMitigation: [
      "Error fatal: El 'Efecto Inducción' (guiar o ayudar al usuario diciéndole: 'haz clic en el botón azul de la derecha').",
      "Si ayudas al usuario invalidas por completo la prueba; tu objetivo es ver dónde tropieza de forma natural cuando nadie lo está mirando.",
      "No defiendas tu diseño si el usuario se queja: toma notas con agradecimiento y serenidad; cada confusión del usuario es una oportunidad de oro para aumentar tus ventas.",
      "No necesitas 50 usuarios: con 5 usuarios individuales identificarás los errores más graves sin gastar tiempo excesivo."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Pruebas de Usabilidad con Usuarios Reales (Test de Guerrilla) y Reporte de Mejoras CRO\". Ayuda a plataformas de cursos, e-commerce, apps móviles y sitios web corporativos a descubrir los fallos que frenan sus ventas.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por ejecución de 3 pruebas de usabilidad grabadas en Google Meet + informe de los 5 errores críticos en Google Docs. • Nivel Intermedio (Con portafolio): $140 - $280 USD por protocolo completo de usabilidad con 5 usuarios reales, transcripción de comentarios clave, video de evidencia de 3 minutos y recomendaciones de rediseño UX en Figma. • Nivel Senior / Consultor de UX Research y Optimización de Conversión: $350 - $700 USD por programa integral de pruebas de usabilidad cuantitativas y cualitativas (Escala SUS, tiempo por tarea, mapa de calor en Hotjar), rediseño de interfaz y pruebas A/B de validación comercial.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve revisando la plataforma web/app de [Empresa] y sé que muchas veces los equipos de desarrollo pasan meses debatiendo cambios sin saber exactamente qué confunde a los clientes reales. Con el protocolo de Pruebas de Usabilidad de Guerrilla de Steve Krug (Don't Make Me Think) es posible observar a 5 usuarios reales navegando por tu plataforma y descubrir en solo 48 horas el 85% de las trabas que están frenando tus ventas. Por solo $50 USD yo te realizo las pruebas grabadas y te entrego el informe de mejoras accionables. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura el guion de prueba de Steve Krug en Google Docs y practica con un colega. Día 2: Contacta a 10 fundadores de aplicaciones o tiendas online en LinkedIn y ofréceles una prueba de usabilidad gratuita de 1 usuario con video de muestra."
],
    quizQuestions: [
      {
            "question": "¿Por qué según la investigación de Jakob Nielsen solo se necesitan '5 Usuarios' en una prueba de usabilidad cualitativa?",
            "options": [
                  "Porque el software solo permite 5 conexiones.",
                  "Porque con 5 usuarios individuales se descubren más del 85% de los problemas de usabilidad críticos de una interfaz; después del quinto usuario los mismos errores se repiten con rendimientos decrecientes.",
                  "Porque 5 es el número de la suerte en Silicon Valley.",
                  "Porque los usuarios cobran por hora."
            ],
            "correctIndex": 1,
            "explanation": "Hacer pruebas frecuentes con 5 usuarios permite corregir errores rápidamente e iterar con un costo y tiempo mínimos."
      },
      {
            "question": "¿En qué consiste el 'Protocolo de Pensar en Voz Alta' (Think-Aloud Protocol) de Steve Krug?",
            "options": [
                  "En hablar por un megáfono.",
                  "En pedirle al usuario que exprese verbalmente en tiempo real todo lo que pasa por su mente (lo que ve, lo que busca, lo que le confunde y lo que espera que suceda) mientras navega por la interfaz.",
                  "En memorizar el manual de la empresa.",
                  "En leer el texto de la pantalla en voz alta."
            ],
            "correctIndex": 1,
            "explanation": "Pensar en voz alta permite al evaluador 'escuchar los pensamientos' del usuario y detectar exactamente dónde se produce la confusión."
      },
      {
            "question": "¿Cuál es la regla fundamental que debe seguir el facilitador de una prueba de usabilidad mientras el usuario navega?",
            "options": [
                  "Interrumpir al usuario cada 10 segundos para explicarle cómo funciona la web.",
                  "Guardar silencio respetuoso, no ayudar ni inducir las respuestas del usuario, y limitarse a preguntar suavemente '¿Qué estás pensando en este momento?' cuando haya dudas.",
                  "Comer bocadillos ruidosos.",
                  "Apagar la pantalla si el usuario comete un error."
            ],
            "correctIndex": 1,
            "explanation": "El facilitador no debe intervenir para permitir que el usuario experimente la plataforma en condiciones naturales y sin sesgos."
      }
]
  },

};
