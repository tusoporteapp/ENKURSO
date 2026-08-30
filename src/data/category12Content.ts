// Specific topic-by-topic content blueprints for Category 12 (Sitio Web)
// Providing 100% custom, domain-accurate, highly actionable web infrastructure, SEO, performance, cybersecurity and web design literature for each of the 6 books (Tomos 110 al 115)
// Features:
// 1. 5,000-character Deep Learning Overview & Executive Briefing per book
// 2. Step-by-step Free Cloudflare Pages, Figma Mobile-First, Squoosh WebP, Carrd Landing Pages, GA4 Looker Studio & WAF Security Tools Tutorials
// 3. Real, accessible LATAM Monetization Services & Pricing (Junior $25-$60, Mid $80-$180, Senior $220-$500 USD)
// 4. Localized copy-paste sales outreach pitches & 48h action plans
// 5. 3 rigorous exam questions per book with detailed explanations

import { SpecificBookContent } from './category1Content';

export const CATEGORY_12_CUSTOM_BOOKS: Record<string, SpecificBookContent> = {
  // =========================================================================
  // BOOK ID: sw-1
  // =========================================================================
  'sw-1': {
    frameworkName: "Arquitectura de Selección de Dominios de Alta Autoridad y Despliegue de Infraestructura Web Escalable (Web Asset Foundation Matrix)",
    coreMetrics: [
      "Disponibilidad del Servidor (Uptime SLA > 99.98%)",
      "Tiempo de Respuesta del Primer Byte (TTFB < 180ms)",
      "Tasa de Retención de Marca por Facilidad de Dominio (> 85%)",
      "Latencia de Resolución DNS (< 25ms con Anycast)",
      "Costo Total de Propiedad de Infraestructura Anual"
],
    caseCompany: "Consultora de Negocios & Finanzas Corporativas Nexus Advisors (Santiago, Chile)",
    caseOutcome: "Migró de un hosting compartido saturado con caídas semanales y un dominio confuso de 28 caracteres a un dominio premium directo con CDN global e infraestructura serverless en Cloudflare Pages; redujo el TTFB en un 78%, eliminó por completo las caídas y duplicó sus solicitudes de asesoría corporativa en 60 días.",
    pitfall: "Elegir dominios largos, con guiones o extensiones oscuras difíciles de recordar, y contratar hostings compartidos ultra-baratos que provocan caídas constantes y vulnerabilidades de seguridad.",
    actionItem1: "Registrar un nombre de dominio corto (menos de 12-15 caracteres), fácil de pronunciar por teléfono, sin guiones ni números y preferiblemente con extensión .com o ccTLD de alta confianza.",
    actionItem2: "Desplegar la web sobre infraestructura moderna de distribución global (CDN perimetral tipo Cloudflare o Vercel) con certificados SSL/TLS automáticos y DNS Anycast.",
    actionItem3: "Configurar el bloqueo de transferencia de dominio (Registrar Lock), autenticación en dos factores (2FA) en el registrador y protección de privacidad WHOIS para evitar secuestros de identidad.",
    domainContext: "El dominio y el servidor constituyen los cimientos digitales de tu empresa; un dominio deficiente destruye la credibilidad antes del primer clic y un servidor lento sabotea cualquier esfuerzo comercial.",
    strategicRationale: "Invertir en una infraestructura web robusta y un dominio de alta recordación establece autoridad instantánea, garantiza disponibilidad continua y maximiza el retorno de toda la inversión en marketing.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 85% de los empresarios en América Latina cometen dos errores fatales al crear su presencia digital: eligen un nombre de dominio larguísimo y enredado que nadie puede escribir por teléfono (ej. 'mi-empresa-servicios-de-limpieza-sur.com') y contratan un 'hosting compartido barato de $3 dólares' que se cae cada vez que entran 20 personas juntas. Tu dominio es tu dirección comercial en el mundo y tu hosting es el edificio donde recibes clientes. Las plataformas modernas como Cloudflare Pages permiten alojar sitios web ultra-rápidos con SSL y CDN global 100% GRATIS. Este tomo te enseña a elegir el dominio perfecto y desplegar tu web con infraestructura de clase mundial.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Regla del 'Examen de la Radio': Cómo saber si tu dominio es memorable y fácil de deletrear.\n• Capítulo 2: Las Extensiones de Dominio: Cuándo usar .com, .org o extensiones de país (.mx, .co, .cl, .pe).\n• Capítulo 3: La Muerte del Hosting Compartido: Por qué las plataformas Serverless (Cloudflare Pages) son más rápidas, seguras y gratuitas.\n• Capítulo 4: Caso de Estudio Real (Nexus Advisors Chile): Cómo eliminaron caídas y duplicaron clientes con Cloudflare Pages.\n• Capítulo 5: Seguridad de Dominio y DNS: Blindaje con SSL/TLS, bloqueo de transferencia (Registrar Lock) y 2FA.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de dominios y despliegue de hosting serverless cobrando entre $35 y $520 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Cloudflare Pages (pages.cloudflare.com): Plataforma de alojamiento web estático ultrarrápido con CDN perimetral global y SSL gratuito.\n2. Namecheap / Cloudflare Registrar: Búsqueda y registro de dominios al costo mayorista sin cargos ocultos de renovación.\n3. DNSChecker.org: Verificación global de propagación de registros DNS (A, CNAME, MX, TXT) en más de 30 países.",
    ch1CustomNarrative: [
      "En la economía moderna, el sitio web es la sede central digital de cualquier empresa, el punto neurálgico donde confluyen todos los esfuerzos de marketing, ventas, captación de talento y atención al cliente.",
      "Sin embargo, incontables emprendedores y líderes de negocios cometen errores fundacionales irreversibles en los dos primeros pasos técnicos: eligen nombres de dominio enredados que nadie recuerda y contratan planes de alojamiento web ('hosting') de bajo costo en servidores compartidos obsoletos.",
      "Un dominio difícil de deletrear o un servidor que tarda cinco segundos en responder no son detalles técnicos menores; son barreras invisibles que ahuyentan a prospectos calificados, degradan la reputación de la marca y arruinan cualquier campaña publicitaria antes de que el usuario vea la primera propuesta de valor.",
      "Comprender los principios estratégicos de la selección de dominios y la arquitectura moderna de alojamiento web permite construir una presencia digital inquebrantable, rápida y preparada para escalar a millones de visitas sin fricciones."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO REGISTRAR UN DOMINIO Y DESPLEGAR HOSTING EN CLOUDFLARE PAGES GRATIS:",
      "Paso 1: Aplica el \"Examen de la Radio\" para tu dominio: pronúncialo por teléfono a 3 amigos. Si tienen que preguntarte '¿es con guión?', '¿con C o con S?' o '¿con número?', descarta el nombre de inmediato. Busca un nombre de máximo 12 letras en Namecheap o Cloudflare Registrar.",
      "Paso 2: Crea una cuenta gratuita en Cloudflare (cloudflare.com). Conecta los Nameservers de tu registrador de dominio a Cloudflare para activar el DNS Anycast perimetral ultra-rápido.",
      "Paso 3: Ve a Cloudflare Dashboard -> Workers & Pages -> Crear una Aplicación -> Pages. Conecta tu repositorio de GitHub o sube directamente la carpeta de tu sitio web (dist/ o public/).",
      "Paso 4: En la pestaña \"Dominios Personalizados\", añade tu dominio (ej. miempresa.com). Cloudflare generará automáticamente un certificado SSL/TLS de grado bancario con HTTPS forzado y distribución en más de 300 ciudades del mundo a costo $0 USD."
],
    ch3TacticalSteps: [
      "Día 1 a 7: Haz una lista de 5 opciones de dominio breves, pronúncialas en voz alta con 10 personas ajenas a tu empresa y verifica disponibilidad y antecedentes de spam en herramientas de historial WHOIS.",
      "Día 8 a 15: Adquiere el dominio en un registrador acreditado por ICANN que ofrezca privacidad WHOIS gratuita y autenticación 2FA por hardware o app de autenticación.",
      "Día 16 a 21: Configura el alojamiento en una plataforma de despliegue estático o servidor cloud con CDN perimetral y activa el certificado SSL/TLS con forzado automático a HTTPS.",
      "Día 22 a 30: Ejecuta pruebas de velocidad y latencia TTFB desde 5 regiones del mundo asegurando que el tiempo de respuesta inicial sea inferior a 200 milisegundos."
],
    ch4CaseDeepDive: [
      "Nexus Prime Advisors operaba bajo el dominio 'nexus-prime-financial-advisory-group.net' alojado en un plan compartido de $4 al mes que colapsaba cada vez que publicaban un informe financiero de alto tráfico.",
      "Durante las conferencias de la industria, los consultores tenían que deletrear el dominio tres veces a los prospectos, perdiendo más del 40% del tráfico directo y sufriendo una tasa de rebote del 68% debido a tiempos de carga de 4.8 segundos.",
      "La firma invirtió $1,500 en comprar el dominio directo 'nexusadvisors.com', migró su web a una arquitectura moderna en Cloudflare Pages con frontend optimizado y activó DNS Anycast ultra-rápido.",
      "El tiempo de carga bajó a 0.6 segundos, el tráfico de retorno directo creció un 140% y las solicitudes de presupuesto empresarial aumentaron un 110% en el primer trimestre post-migración."
],
    ch5RiskMitigation: [
      "Riesgo 1: Comprar un dominio con historial penalizado por Google debido a dueños anteriores que lo utilizaron para spam o prácticas deshonestas.",
      "Riesgo 2: Olvidar activar la renovación automática del dominio y perder los derechos del nombre comercial a manos de especuladores ('cybersquatters').",
      "Riesgo 3: Utilizar hostings compartidos donde un ataque o exceso de tráfico en el sitio web de otro cliente vecino degrade el rendimiento de tu propio negocio."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Consultoría de Selección de Dominios y Despliegue de Hosting Serverless Gratuito con Cloudflare Pages\". Ayuda a empresas, despachos y comercios a migrar de hostings lentos a infraestructura perimetral moderna con cero costos de servidor.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $35 - $70 USD por asesoría de naming de dominio + configuración de DNS y despliegue en Cloudflare Pages con SSL. • Nivel Intermedio (Con portafolio): $100 - $200 USD por migración completa de sitio web desde hosting compartido a Cloudflare/Vercel, configuración de correos corporativos (Google Workspace/Zoho) y optimización de velocidad. • Nivel Senior / Consultor de Infraestructura Web y DNS: $250 - $520 USD por arquitectura web corporativa de alta disponibilidad, seguridad WAF avanzada, configuración DNSSEC/SPF/DKIM/DMARC y auditoría de ciberseguridad.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve revisando el sitio web de [Empresa] y noté que está alojado en un hosting tradicional que tarda más de 4 segundos en responder y corre el riesgo de caerse ante picos de tráfico. Hoy en día es posible desplegar tu sitio web en la red global de Cloudflare Pages, logrando que cargue en menos de 1 segundo en cualquier país con certificados de seguridad de grado bancario y con $0 de costo de hosting mensual. Por solo $40 USD yo te realizo la migración completa sin interrumpir tu servicio. ¿Te gustaría que hagamos un test de velocidad de tu sitio actual?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura una cuenta de Cloudflare Pages y prueba un despliegue demo de un sitio web. Día 2: Contacta a 10 negocios locales o consultoras con webs lentas en tu ciudad y ofréceles una prueba gratuita de velocidad."
],
    quizQuestions: [
      {
            "question": "¿Qué es la 'prueba de la radio' al evaluar un nombre de dominio para una empresa?",
            "options": [
                  "Verificar si el dominio tiene un anuncio transmitido por radiofrecuencia.",
                  "Comprobar que una persona que escucha el nombre del dominio en una conversación o audio pueda deletrearlo y escribirlo en su navegador sin dudar ni equivocarse.",
                  "Medir la velocidad de conexión mediante señales de radio AM/FM.",
                  "Registrar el dominio exclusivamente con extensiones para emisoras de sonido."
            ],
            "correctIndex": 1,
            "explanation": "Un dominio que supera la prueba de la radio es memorable, fonéticamente claro y previene la pérdida de tráfico directo."
      },
      {
            "question": "¿Cuál es la principal ventaja de utilizar plataformas de despliegue estático y CDN perimetral (como Cloudflare Pages o Vercel) frente a un hosting compartido tradicional?",
            "options": [
                  "Que los sitios web se almacenan en caché en más de 300 ciudades del mundo, cargando casi al instante, con SSL gratuito y sin riesgo de colapsar por saturación del servidor.",
                  "Que el dominio se renueva gratis de por vida.",
                  "Que no se necesita tener conexión a internet para ver la página.",
                  "Que los textos se traducen automáticamente a 50 idiomas."
            ],
            "correctIndex": 0,
            "explanation": "La arquitectura perimetral descentralizada acerca el contenido al usuario final, maximizando la velocidad y la disponibilidad global."
      },
      {
            "question": "¿Por qué es crucial activar el 'Registrar Lock' y la autenticación de dos factores (2FA) en tu cuenta de dominio?",
            "options": [
                  "Para que el dominio cueste la mitad de precio.",
                  "Para impedir que ciberdelincuentes puedan secuestrar o transferir tu nombre de dominio a otra cuenta sin tu autorización, protegiendo tu activo digital más valioso.",
                  "Para que Google posicione la página en el primer lugar.",
                  "Es un requisito que solo exigen los bancos centrales."
            ],
            "correctIndex": 1,
            "explanation": "El secuestro de dominio paraliza el negocio y destruye la reputación de la marca; el bloqueo y el 2FA blindan la propiedad del activo."
      }
]
  },

  // =========================================================================
  // BOOK ID: sw-2
  // =========================================================================
  'sw-2': {
    frameworkName: "Diseño UX/UI Mobile-First, Patrones de Lectura Visual (F-Pattern & Z-Pattern) & Ergonomía Táctil",
    coreMetrics: [
      "Tasa de Conversión Móvil vs. Escritorio (> 80% de paridad)",
      "Reducción de Tasa de Rebote en Smartphone (-40%)",
      "Puntuación de Facilidad de Uso en Pruebas de Usabilidad (> 9/10)",
      "Tiempo Medio para Completar la Acción Principal (< 45 segundos)",
      "Cumplimiento de Estándares de Accesibilidad (WCAG 2.1 AA)"
],
    caseCompany: "Clínica Odontológica & Ortodoncia Estética OdontoSalud (Lima, Perú)",
    caseOutcome: "El 82% de sus visitas provenían de teléfonos móviles pero su sitio web estaba diseñado solo para computadoras de escritorio, obligando a los usuarios a hacer zoom con los dedos para leer y tocar botones minúsculos; rediseñó la experiencia con enfoque Mobile-First y navegación táctil en Figma; las reservas de citas por WhatsApp crecieron un 180% en 30 días.",
    pitfall: "Diseñar el sitio web pensando únicamente en cómo se ve en la pantalla grande de una laptop de 15 pulgadas, descuidando por completo la experiencia táctil, la velocidad y la ergonomía del 80% de los usuarios que navegan desde su teléfono móvil.",
    actionItem1: "Diseñar con el enfoque 'Mobile-First': estructurar primero la versión para smartphones (botones grandes de mínimo 48x48 px, textos de 16 px y barra de navegación inferior fija).",
    actionItem2: "Organizar el contenido siguiendo los 'Patrones de Escaneo Visual': Patrón en F para páginas de texto/artículos y Patrón en Z para páginas de aterrizaje con llamados a la acción.",
    actionItem3: "Limitar las opciones en la pantalla principal (Ley de Hick): ofrecer un solo camino claro de acción para no abrumar al visitante.",
    domainContext: "En América Latina, más del 80% del tráfico web comercial se genera desde dispositivos móviles; una web que no está optimizada ergonómicamente para el pulgar de un smartphone es un negocio que pierde el 80% de sus ventas potenciales.",
    strategicRationale: "Priorizar la experiencia de usuario móvil simplifica la navegación, elimina la fricción en formularios y dispara la tasa de conversión en todos los canales de adquisición.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que el 82% de las personas que visitan un sitio web en América Latina lo hacen desde su teléfono celular mientras viajan en transporte, caminan o descansan en el sofá? Sin embargo, el 90% de los diseñadores web siguen cometiendo el error absurdo de diseñar la web en una pantalla gigante de computadora, y luego 'achican' todo para el móvil: textos enanos que no se pueden leer, menús enredados y botones microscópicos imposibles de presionar con el pulgar. El diseño UX/UI Mobile-First crea una experiencia ergonómica impecable pensada para el dedo pulgar. Este tomo te enseña a diseñar experiencias web que convierten visitas en dinero.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Zona del Pulgar (Thumb Zone): Cómo diseñar para la ergonomía física de la mano en el smartphone.\n• Capítulo 2: Los Patrones de Lectura Visual: El Patrón en F (para textos) y el Patrón en Z (para páginas de venta).\n• Capítulo 3: La Ley de Hick y la Carga Cognitiva: Por qué menos botones multiplican las ventas.\n• Capítulo 4: Caso de Estudio Real (OdontoSalud Lima): Cómo aumentaron sus citas un 180% con diseño Mobile-First.\n• Capítulo 5: Prototipado Rápido en Figma: Cómo crear un wireframe móvil en 30 minutos sin ser diseñador gráfico.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de UX/UI y rediseño web Mobile-First cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Figma (figma.com): Herramienta líder mundial de prototipado UX/UI para diseñar interfaces móviles y de escritorio en la nube.\n2. Google Mobile-Friendly Test (Lighthouse): Diagnóstico oficial de usabilidad móvil y detección de botones demasiado juntos.\n3. Canva: Creación de mockups visuales en dispositivos reales para presentar propuestas a clientes.",
    ch1CustomNarrative: [
      "El diseño de un sitio web exitoso no tiene nada que ver con la decoración artística superficial ni con saturar la pantalla de animaciones espectaculares que solo sirven para ralentizar la carga.",
      "El verdadero diseño web es una disciplina de ingeniería psicológica y ergonomía digital cuyo único objetivo es guiar al usuario desde su punto de dolor inicial hasta la solución deseada con el mínimo esfuerzo cognitivo posible.",
      "Cuando un usuario ingresa a una página y se siente perdido, no encuentra los precios, no sabe dónde hacer clic o debe agrandar la pantalla con los dedos para leer un párrafo, su cerebro experimenta fricción y abandona el sitio en menos de cinco segundos.",
      "Aprender a diseñar interfaces centradas en el usuario con mentalidad Mobile-First te permite transformar sitios web lentos y confusos en máquinas comerciales intuitivas de alta conversión."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO PROTOTIPAR UNA EXPERIENCIA MOBILE-FIRST EN FIGMA GRATIS:",
      "Paso 1: Abre Figma (figma.com) y crea un nuevo archivo de diseño. Presiona la tecla 'F' y selecciona el marco móvil \"iPhone 15 / Android (393 x 852 px)\".",
      "Paso 2: Aplica la \"Zona del Pulgar (Thumb Zone)\": Coloca el botón principal de llamado a la acción (ej. \"Agendar por WhatsApp\") en la mitad inferior de la pantalla o fijado en una barra inferior flotante para que el usuario pueda presionarlo fácilmente con una sola mano.",
      "Paso 3: Estructura la Jerarquía Visual en Z: 1. Esquina superior izquierda: Logo de la marca. 2. Esquina superior derecha: Botón secundario o menú hamburguesa. 3. Centro de pantalla: Título con beneficio de impacto + foto real. 4. Esquina inferior: Botón de acción principal grande (mínimo 48 px de alto) con color de alto contraste.",
      "Paso 4: Tipografía y Espaciado Legible: Tamaño de texto base mínimo de 16 px para párrafos (evita letras diminutas de 12 px) e interlineado del 150% (Line height 1.5) para que la lectura sea fluida y descansada."
],
    ch3TacticalSteps: [
      "Semana 1: Audita el sitio web de tu negocio en tu propio teléfono celular e intenta completar una compra o reserva con una sola mano.",
      "Semana 2: Abre Figma y diseña el wireframe móvil de 3 pantallas clave: Portada (Home), Página de Servicio y Formulario de Contacto.",
      "Semana 3: Aumenta el tamaño de todos los botones táctiles a un mínimo de 48x48 píxeles y separa los enlaces para evitar clics accidentales.",
      "Semana 4: Ejecuta una prueba de usabilidad con 3 personas reales observando en silencio dónde dudan o se traban al navegar."
],
    ch4CaseDeepDive: [
      "OdontoSalud en Lima tenía una página web con fotos de tratamientos que se veía hermosa en pantallas de 27 pulgadas pero era ilegible en teléfonos móviles.",
      "El 82% de las personas que llegaban desde anuncios de Instagram abandonaban la página en menos de 4 segundos sin agendar nada.",
      "Rediseñaron la web con Figma bajo el estándar Mobile-First: añadieron un botón flotante verde de WhatsApp en la esquina inferior y redujeron el texto a 3 beneficios clave.",
      "La tasa de conversión móvil subió del 1.2% al 4.8%, las solicitudes de citas se multiplicaron por 2.8x en el primer mes y el costo por cita agendada se redujo en un 60%."
],
    ch5RiskMitigation: [
      "Error fatal: El 'Efecto Carrusel / Slider' (poner 5 banners gigantes que se mueven solos en la portada móvil).",
      "Los estudios de usabilidad demuestran que menos del 1% de los usuarios interactúan con el segundo o tercer banner; los sliders solo ralentizan la carga y confunden; usa una sola imagen estática de alto impacto.",
      "Evita los pop-ups gigantes e invasivos que bloquean la pantalla del celular y son difíciles de cerrar (un botón 'X' microscópico); Google penaliza el posicionamiento de webs con pop-ups intrusivos.",
      "Asegúrate de que los formularios móviles no pidan más de 3 campos esenciales (Nombre, Teléfono y Consulta)."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de Experiencia de Usuario (UX/UI) y Rediseño Web Mobile-First para PYMEs\". Ayuda a clínicas, comercios, despachos y restaurantes a rediseñar su web para smartphones y duplicar sus contactos de WhatsApp.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por auditoría de usabilidad móvil con informe en Google Docs + prototipo de página de inicio en Figma. • Nivel Intermedio (Con portafolio): $120 - $250 USD por rediseño completo de interfaz UX/UI Mobile-First (Home + Servicios + Contacto) en Figma con diseño responsive y botón de WhatsApp. • Nivel Senior / Consultor de UX/UI y Optimización de Conversión (CRO): $300 - $600 USD por arquitectura de experiencia de usuario completa, pruebas de usabilidad con usuarios reales, mapa de calor y rediseño de embudos comerciales.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve revisando la página web de [Empresa] desde mi teléfono móvil y noté que los botones son muy pequeños y los textos exigen hacer zoom para leerse, lo que hace que más del 70% de las personas que entran desde el celular se marchen sin contactar. Por solo $45 USD yo te realizo una Auditoría UX/UI y te diseño un Prototipo Mobile-First en Figma optimizado para la ergonomía del pulgar y con botón directo a WhatsApp para duplicar tus reservas de clientes. ¿Te gustaría que te envíe un video breve de 2 minutos mostrándote cómo mejorar la experiencia móvil de tu web?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura una plantilla de diseño Mobile-First en Figma y haz un mockup en Canva. Día 2: Contacta a 10 negocios con webs no adaptadas a móviles en tu ciudad y ofréceles una auditoría de usabilidad gratis en video."
],
    quizQuestions: [
      {
            "question": "¿Qué significa el principio de diseño web 'Mobile-First'?",
            "options": [
                  "Que solo se puede acceder a la web comprando un teléfono nuevo.",
                  "Diseñar y estructurar la interfaz pensando primero en la experiencia, ergonomía y velocidad del usuario en smartphones, y solo después adaptar el diseño a pantallas de computadoras de escritorio.",
                  "Vender teléfonos celulares en la página web.",
                  "Eliminar todos los textos de la página."
            ],
            "correctIndex": 1,
            "explanation": "Mobile-First prioriza el dispositivo donde navega la gran mayoría de los usuarios, obligando a simplificar el contenido y maximizar la claridad."
      },
      {
            "question": "¿Qué es la 'Zona del Pulgar' (Thumb Zone) en la ergonomía de interfaces móviles?",
            "options": [
                  "El lector de huellas dactilares del teléfono.",
                  "El área de la pantalla del smartphone a la que el dedo pulgar puede llegar de forma natural y cómoda con una sola mano; los botones de compra y acción principal deben colocarse en esta zona.",
                  "Un juego para teléfonos táctiles.",
                  "El borde superior del teléfono."
            ],
            "correctIndex": 1,
            "explanation": "Ubicar los botones clave en la zona del pulgar elimina el esfuerzo físico y acelera la tasa de conversión en móviles."
      },
      {
            "question": "¿Cuál es el tamaño mínimo recomendado para botones táctiles interactivos en pantallas móviles según los estándares de usabilidad de Google y Apple?",
            "options": [
                  "10 x 10 píxeles.",
                  "Al menos 44 a 48 píxeles de alto y ancho, con suficiente espacio alrededor para evitar toques accidentales.",
                  "500 x 500 píxeles.",
                  "Cualquier tamaño mientras sea de color rojo."
            ],
            "correctIndex": 1,
            "explanation": "Los botones de 48x48 píxeles corresponden al tamaño promedio de la yema del dedo humano, garantizando precisión al presionar."
      }
]
  },

  // =========================================================================
  // BOOK ID: sw-3
  // =========================================================================
  'sw-3': {
    frameworkName: "Optimización de Core Web Vitals (LCP, INP, CLS), Compresión WebP & Caché Perimetral (WPO Framework)",
    coreMetrics: [
      "Largest Contentful Paint (LCP < 2.5 segundos en móvil)",
      "Interaction to Next Paint (INP < 200 milisegundos)",
      "Cumulative Layout Shift (CLS < 0.1 de estabilidad visual)",
      "Puntuación de Rendimiento en Google PageSpeed Insights (> 90/100)",
      "Peso Total de la Página Web (< 1.5 MB en transferencia inicial)"
],
    caseCompany: "Tienda Online de Suplementos Nutricionales & Vitaminas NutriFit (Guadalajara, México)",
    caseOutcome: "Su tienda tardaba 6.2 segundos en cargar en smartphones debido a imágenes pesadas de 5 MB en formato PNG y scripts innecesarios; la tasa de rebote superaba el 70%; implementó el framework WPO, convirtió imágenes al formato moderno WebP y activó compresión Brotli y caché en Cloudflare; el tiempo de carga cayó a 1.2 segundos y las ventas aumentaron un 64% en 3 semanas.",
    pitfall: "Subir fotografías directamente de la cámara digital o banco de imágenes (de 4 a 8 Megabytes en formato PNG/JPG sin comprimir), destruyendo la velocidad de carga en redes móviles 4G y haciendo que el usuario se marche antes de ver la página.",
    actionItem1: "Comprimir y convertir todas las imágenes del sitio web al formato moderno WebP utilizando herramientas gratuitas como Squoosh o TinyPNG.",
    actionItem2: "Eliminar plugins o scripts de terceros innecesarios (ej. fuentes externas redundantes, widgets pesados o contadores obsoletos).",
    actionItem3: "Optimizar los 3 Core Web Vitals oficiales de Google: LCP (Carga del elemento principal < 2.5s), INP (Respuesta interactiva < 200ms) y CLS (Estabilidad visual < 0.1).",
    domainContext: "Amazon calculó que cada 100 milisegundos de retraso en la carga de su web le costaba el 1% de sus ventas totales; en el comercio electrónico moderno, la velocidad no es solo un detalle técnico, es un factor directo de facturación y posicionamiento en Google.",
    strategicRationale: "Un sitio web ultrarrápido mejora el posicionamiento SEO en Google, reduce el costo por clic en campañas publicitarias y maximiza la tasa de conversión en todos los dispositivos.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que el 53% de los usuarios móviles abandonan un sitio web si tarda más de 3 segundos en cargar? Y peor aún: Google utiliza oficialmente los 'Core Web Vitals' (métricas de velocidad y estabilidad) para decidir qué páginas aparecen en los primeros lugares de búsqueda y cuáles quedan enterradas. El 90% de las páginas lentas en América Latina sufren por un solo motivo: imágenes gigantescas de 6 MB que se suben sin comprimir. Convertir tus imágenes a formato WebP y activar caché perimetral permite que cualquier sitio web vuele en menos de 1.5 segundos. Este tomo te enseña a optimizar la velocidad web como un experto.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Economía de los Milisegundos: Por qué la lentitud destruye tus ventas y encarece tus anuncios.\n• Capítulo 2: Las 3 Métricas Oficiales de Google (Core Web Vitals): LCP (Carga), INP (Interactividad) y CLS (Estabilidad visual).\n• Capítulo 3: El Formato WebP vs. JPG/PNG: Cómo reducir el peso de las imágenes un 80% sin perder calidad visual.\n• Capítulo 4: Caso de Estudio Real (NutriFit México): Cómo redujeron su tiempo de carga de 6.2s a 1.2s y aumentaron ventas un 64%.\n• Capítulo 5: La Regla de la Caché y Compresión Brotli: Configuración gratuita en Cloudflare para acelerar la entrega de archivos.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer optimización de velocidad web (WPO) cobrando entre $45 y $650 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google PageSpeed Insights (pagespeed.web.dev): Diagnóstico oficial de Core Web Vitals y reporte de oportunidades de mejora.\n2. Squoosh (squoosh.app) / TinyPNG: Compresión y conversión masiva de imágenes a formatos modernos WebP y AVIF.\n3. Cloudflare Speed: Activación gratuita de minificación de CSS/JS, compresión Brotli y Early Hints.",
    ch1CustomNarrative: [
      "En el entorno digital contemporáneo, la paciencia del consumidor se mide en fracciones de segundo: vivimos en una cultura de inmediatez donde cualquier retraso en la pantalla genera frustración instantánea.",
      "Muchos empresarios invierten miles de dólares en anuncios publicitarios de alta calidad para atraer tráfico a sus páginas web, solo para ver cómo el 60% de los visitantes rebotan y se marchan antes de que el contenido termine de renderizarse.",
      "La optimización del rendimiento web (Web Performance Optimization - WPO) no es un lujo reservado para gigantes tecnológicos como Google o Netflix; es el requisito fundamental de supervivencia para cualquier negocio que aspire a competir con éxito en internet.",
      "Aprender a diagnosticar y acelerar la velocidad de carga de un sitio web te otorga una ventaja competitiva decisiva para dominar los rankings de búsqueda y maximizar las conversiones."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO OPTIMIZAR LA VELOCIDAD DE TU SITIO WEB CON PAGESPEED Y SQUOOSH GRATIS:",
      "Paso 1: Ingresa a PageSpeed Insights (pagespeed.web.dev) e introduce la URL de tu sitio web. Analiza la puntuación móvil (0 a 100) y las 3 métricas de Core Web Vitals: LCP (meta: verde < 2.5 seg), INP (< 200 ms) y CLS (< 0.1).",
      "Paso 2: Descarga las 5 imágenes más pesadas de tu web identificadas en el reporte. Abre Squoosh (squoosh.app) y arrastra cada imagen.",
      "Paso 3: En el panel derecho de Squoosh, selecciona el formato de compresión \"WebP\" con un nivel de calidad del 80%. Observa cómo una imagen de 3.5 MB se reduce a solo 120 KB (reducción del 96%) manteniendo una nitidez visual perfecta. Reemplaza las imágenes en tu web.",
      "Paso 4: En Cloudflare Dashboard -> Speed -> Optimización: Activa \"Compresión Brotli\", \"Auto Minify (HTML, CSS, JS)\" y \"Rocket Loader\" para acelerar la ejecución de scripts en navegadores móviles."
],
    ch3TacticalSteps: [
      "Semana 1: Ejecuta el análisis de PageSpeed Insights en la portada y en las 2 páginas de productos más visitadas de tu sitio.",
      "Semana 2: Convierte y reemplaza todas las imágenes de banners y productos al formato WebP asegurando que ninguna supere los 150 KB.",
      "Semana 3: Elimina fuentes de texto externas redundantes y utiliza fuentes del sistema o descarga las fuentes localmente.",
      "Semana 4: Repite el test de velocidad y celebra alcanzar una puntuación superior a 90/100 en la versión móvil de Google."
],
    ch4CaseDeepDive: [
      "NutriFit en Guadalajara vendía suplementos alimenticios pero su página en Shopify tardaba 6.2 segundos en cargar en teléfonos móviles debido a fotos de productos de 5 MB en formato PNG.",
      "El 72% de los usuarios que hacían clic en sus anuncios de Facebook se salían antes de ver el catálogo por la lentitud de la página.",
      "Comprimieron las 300 fotos del catálogo al formato WebP en Squoosh y activaron la caché perimetral en Cloudflare.",
      "El tiempo de carga bajó a 1.2 segundos, la tasa de rebote cayó al 28% y las ventas directas aumentaron un 64% en 3 semanas con el mismo presupuesto de publicidad."
],
    ch5RiskMitigation: [
      "Error fatal: El 'Cambio Acumulativo de Diseño (Cumulative Layout Shift - CLS)': no poner dimensiones fijas (width y height) a las imágenes.",
      "Cuando las imágenes no tienen dimensiones definidas en el código, la página da 'saltos' mientras carga, haciendo que el usuario presione botones equivocados y frustrándose; especifica siempre el ancho y alto de cada elemento.",
      "No instales decenas de plugins de optimización que se contradicen entre sí y pueden romper el diseño del sitio.",
      "Prueba siempre el sitio web en un teléfono móvil real con conexión 4G modesta después de hacer cambios de rendimiento."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Optimización de Velocidad Web (WPO) y Aceleración de Core Web Vitals para Negocios\". Ayuda a tiendas de e-commerce, sitios de WordPress y páginas corporativas a reducir su tiempo de carga a menos de 2 segundos.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por diagnóstico de PageSpeed Insights + compresión y conversión de 20 imágenes a WebP en Squoosh. • Nivel Intermedio (Con portafolio): $130 - $270 USD por optimización integral de Core Web Vitals (LCP, INP, CLS), minificación de código, activación de compresión Brotli y caché en Cloudflare. • Nivel Senior / Consultor de WPO y Rendimiento Web Avanzado: $320 - $650 USD por reingeniería de rendimiento web para tiendas de e-commerce complejas, optimización de base de datos, lazy loading avanzado y garantía de puntuación +90 en PageSpeed.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando la velocidad de tu sitio web [URL] con la herramienta oficial de Google PageSpeed Insights y arrojó una puntuación móvil de 35/100 con un tiempo de carga de más de 5 segundos (lo que provoca que más del 50% de tus visitas se marchen antes de comprar). Por solo $50 USD yo te realizo una Optimización Completa de Velocidad (WPO), convirtiendo tus imágenes a WebP y configurando la caché perimetral en Cloudflare para que tu web cargue en menos de 2 segundos y mejore tu posicionamiento en Google. ¿Te gustaría que te comparta el reporte gratuito de Google?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Analiza 10 sitios web de comercios locales en PageSpeed Insights y guarda las capturas de puntuaciones rojas. Día 2: Envía el reporte a los dueños de los negocios y ofréceles optimizar su velocidad de carga en 24 horas."
],
    quizQuestions: [
      {
            "question": "¿Cuáles son los 3 'Core Web Vitals' oficiales de Google para evaluar la experiencia de velocidad y usabilidad de un sitio web?",
            "options": [
                  "Colores, Tipografía y Logotipo.",
                  "Largest Contentful Paint (LCP - Velocidad de carga del contenido principal), Interaction to Next Paint (INP - Tiempo de respuesta interactiva) y Cumulative Layout Shift (CLS - Estabilidad visual de la página).",
                  "Precio del hosting, Nombre del dominio y Cantidad de correos.",
                  "Número de visitas, Seguidores en Instagram y Likes en Facebook."
            ],
            "correctIndex": 1,
            "explanation": "Los Core Web Vitals son los estándares técnicos que Google utiliza oficialmente para calificar la calidad de la experiencia web y rankear las páginas."
      },
      {
            "question": "¿Por qué el formato de imagen WebP es superior a los formatos tradicionales JPG y PNG en el diseño web?",
            "options": [
                  "Porque solo se puede ver en computadoras caras.",
                  "Porque reduce el peso del archivo entre un 30% y un 80% manteniendo la misma calidad visual nítida y soportando transparencias, lo que acelera radicalmente el tiempo de carga.",
                  "Porque no requiere conexión a internet.",
                  "Porque es un formato secreto de Google."
            ],
            "correctIndex": 1,
            "explanation": "WebP utiliza algoritmos modernos de compresión que reducen el consumo de datos y permiten que las páginas web carguen casi al instante."
      },
      {
            "question": "¿Qué provoca el 'Cumulative Layout Shift' (CLS) y cómo se corrige?",
            "options": [
                  "Un virus informático.",
                  "Los 'saltos' molestos en el diseño de la página mientras carga (haciendo que los botones se muevan de lugar), provocado por imágenes o anuncios sin dimensiones de ancho y alto (width y height) definidas en el código.",
                  "Que el servidor se apague.",
                  "El uso de colores oscuros."
            ],
            "correctIndex": 1,
            "explanation": "Definir siempre las dimensiones de ancho y alto en las imágenes reserva el espacio en la pantalla y evita que la página salte mientras se renderiza."
      }
]
  },

  // =========================================================================
  // BOOK ID: sw-4
  // =========================================================================
  'sw-4': {
    frameworkName: "Arquitectura de Landing Pages de Alta Conversión en 5 Bloques (High-Converting Landing Page Framework) & Cero Fugas",
    coreMetrics: [
      "Tasa de Conversión de Visita a Lead/Venta (> 12% en tráfico cualificado)",
      "Tiempo Medio en Página (> 2.5 minutos de lectura atenta)",
      "Reducción de Puntos de Fuga (Cero enlaces de menú externos salientes)",
      "Tasa de Completado de Formulario / Clic en Botón de WhatsApp (> 18%)",
      "Retorno sobre Inversión Publicitaria (ROAS > 4x)"
],
    caseCompany: "Academia de Inglés Profesional para Ejecutivos SpeakGlobal (Bogotá, Colombia)",
    caseOutcome: "Enviaba tráfico de anuncios de Google a la página de inicio ('Home') general de su sitio web con 12 menús y enlaces a redes, logrando solo un 1.4% de conversión; rediseñó una Landing Page dedicada de 1 sola página sin menú de salida en Carrd; la conversión de registros para la clase de prueba subió al 14.8% multiplicando las ventas por 10.",
    pitfall: "Enviar el tráfico de campañas publicitarias pagadas a la página de inicio ('Home') de la empresa llena de menús distractores, enlaces a redes sociales y blogs, permitiendo que el usuario se distraiga y se marche sin comprar ('Efecto Fuga de Tráfico').",
    actionItem1: "Diseñar la Landing Page con la 'Regla de 1 Solo Objetivo': eliminar toda la barra de navegación superior y todos los enlaces externos para que el usuario solo tenga dos opciones: convertir o salir.",
    actionItem2: "Estructurar los 5 Bloques de Oro: 1. Encabezado con Gancho y CTA arriba del pliegue (Above the Fold), 2. Prueba Social (Logos y testimonios reales), 3. Los 3 Beneficios Transformadores, 4. La Oferta Irresistible con Garantía, 5. Formulario simple o Botón directo a WhatsApp.",
    actionItem3: "Construir la Landing Page sin código en Carrd (carrd.co) conectada a un formulario de captación de leads en menos de 2 horas.",
    domainContext: "Una página de inicio (Home) es como un catálogo para explorar; una página de aterrizaje (Landing Page) es un vendedor enfocado diseñado con precisión quirúrgica para cerrar una sola acción específica.",
    strategicRationale: "Eliminar las distracciones y alinear el mensaje de la Landing Page con la promesa del anuncio publicitario reduce el costo de adquisición de clientes y maximiza el retorno de la pauta digital.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que el 80% del dinero invertido en anuncios de Google, Facebook o Instagram se tira a la basura porque las empresas envían a la gente a su página de inicio ('Home')? La página de inicio tiene 15 menús, enlaces a Twitter, artículos de blog y botones por todas partes: el usuario se marea, hace clic en un video y se va sin dejar sus datos. Una 'Landing Page' (Página de Aterrizaje) es una página de un solo propósito sin menús de salida donde todo está diseñado para que el cliente haga UNA sola cosa: comprar o pedir información por WhatsApp. Este tomo te enseña a construir Landing Pages que convierten como máquinas de venta.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Diferencia Vital entre 'Home Page' y 'Landing Page': Por qué la página de inicio no sirve para vender.\n• Capítulo 2: La Anatomía de los 5 Bloques de Alta Conversión: Del Gancho Above the Fold a la Oferta Irresistible.\n• Capítulo 3: La Prueba Social Incontestable: Cómo colocar testimonios, capturas de WhatsApp y fotos reales que derriban dudas.\n• Capítulo 4: Caso de Estudio Real (SpeakGlobal Bogotá): Cómo aumentaron su conversión del 1.4% al 14.8% en Carrd.\n• Capítulo 5: La Eliminación de Puntos de Fuga: La regla de cero enlaces salientes para blindar la atención.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño y construcción de Landing Pages de alta conversión cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Carrd (carrd.co) / Google Sites: Creación rápida de Landing Pages de 1 página ultra-optimizadas para móviles y sin código.\n2. Google Forms / FormSubmit: Integración de formularios directos a tu correo sin pagar software caro de automatización.\n3. Canva: Diseño de Mockups visuales de ofertas, sellos de garantía de 30 días y cajas de productos digitales.",
    ch1CustomNarrative: [
      "En el marketing digital moderno existe una ley implacable de la física comercial: a mayor cantidad de opciones y enlaces disponibles en una página, menor es la probabilidad de que el visitante realice la acción de compra deseada.",
      "Cuando un usuario hace clic en un anuncio publicitario que le prometía una solución a su problema y aterriza en una página de inicio desordenada con múltiples menús, banners en movimiento y enlaces a redes sociales, experimenta una sobrecarga cognitiva inmediata.",
      "La Landing Page efectiva es un túnel de conversión perfectamente iluminado: elimina el ruido, aísla al usuario de las distracciones y presenta una narrativa lineal y persuasiva que responde a todas sus objeciones hasta conducirlo de forma natural al cierre.",
      "Aprender a diseñar y construir páginas de destino de alta conversión te permite convertir el tráfico frío en clientes de pago con una rentabilidad asombrosa."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UNA LANDING PAGE DE ALTA CONVERSIÓN EN CARRD GRATIS:",
      "Paso 1: Ingresa a Carrd (carrd.co) y selecciona una plantilla gratuita de \"Landing Page\". Elimina completamente la barra de navegación superior (sin menú de Inicio, Nosotros o Contacto).",
      "Paso 2: Bloque 1 (Above the Fold): Encabezado con beneficio grande (ej. \"Aprende a hablar inglés fluido en reuniones de negocios en 90 días\"), subtítulo de soporte y un Botón grande y visible: \"Quiero Mi Clase de Prueba Gratis por WhatsApp\".",
      "Paso 3: Bloque 2 (Prueba Social): Inserta 3 testimonios reales con nombre, cargo y fotos de clientes felices diciendo el resultado concreto que lograron.",
      "Paso 4: Bloque 3 (Los 3 Beneficios): Utiliza viñetas con íconos explicando qué incluye el programa (sin tecnicismos). Bloque 4 (Oferta y Garantía): Muestra el precio claro con un sello de \"Garantía de 100% de Satisfacción o Devolución en 14 Días\". Bloque 5: Repite el botón de llamado a la acción al final de la página.",
      "Paso 5: Publica tu página en Carrd (ej. mievento.carrd.co) y prueba que cargue en menos de 1 segundo en tu teléfono celular."
],
    ch3TacticalSteps: [
      "Semana 1: Redacta el texto completo de tu Landing Page en Google Docs asegurando que la promesa coincida exactamente con tu anuncio.",
      "Semana 2: Monta la estructura visual en Carrd o WordPress y elimina cualquier enlace externo hacia redes sociales o páginas ajenas.",
      "Semana 3: Configura el botón de WhatsApp con un mensaje predeterminado: 'Hola, vi la oferta en la página web y quiero más información'.",
      "Semana 4: Lanza tu campaña de tráfico y mide la tasa de conversión; si la conversión es menor al 8%, prueba un nuevo titular con un gancho más contundente."
],
    ch4CaseDeepDive: [
      "SpeakGlobal en Bogotá invertía $1,500 USD al mes en Google Ads enviando a los usuarios a su página web general que tenía 14 páginas internas y enlaces a su blog.",
      "Solo el 1.4% de los visitantes completaba el formulario de contacto porque la mayoría se distraía leyendo artículos antiguos del blog.",
      "Crearon una Landing Page dedicada en Carrd centrada exclusivamente en su 'Taller de Inglés para Entrevistas de Trabajo' con testimonios y un solo botón de registro.",
      "La tasa de conversión se disparó al 14.8%, consiguieron 10 veces más prospectos calificados con el mismo presupuesto y cerraron $18,000 USD en nuevas matrículas en 30 días."
],
    ch5RiskMitigation: [
      "Error fatal: Colocar iconos de redes sociales (Facebook, Instagram, YouTube) en el pie de página de tu Landing Page.",
      "Poner enlaces a redes sociales invita al usuario a salir de tu página para ver fotos o videos en Instagram, donde se perderá en el algoritmo y nunca volverá a comprarte; elimina todos los enlaces a redes sociales de tus páginas de venta.",
      "No utilices formularios eternos de 10 campos: cada campo adicional que pides en un formulario reduce la conversión entre un 5% y un 10%.",
      "Asegúrate de que la velocidad de carga de la Landing Page sea inferior a 1.5 segundos en conexiones móviles."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño y Construcción de Landing Pages de Alta Conversión en Carrd/WordPress\". Ayuda a academias, consultores, clínicas, eventos y comercios a crear páginas de aterrizaje sin distracciones que multipliquen sus ventas.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por diseño de Landing Page de 1 página en Carrd con textos de StoryBrand y botón directo a WhatsApp. • Nivel Intermedio (Con portafolio): $120 - $250 USD por Landing Page profesional con integración de dominio personalizado, formulario automatizado con Google Sheets/Email y diseño en Canva. • Nivel Senior / Consultor de Embudos de Conversión (Funnel Builder): $300 - $600 USD por arquitectura de embudo completo (Página de Captura + Página de Gracias + Secuencia de WhatsApp automatizada + Pruebas A/B de conversión).",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve viendo los anuncios de [Empresa] y noté que al hacer clic envían al cliente a la página principal de su sitio web, donde hay muchos menús y la gente se distrae y no compra (lo que encarece mucho el costo de adquisición). Una Landing Page dedicada en Carrd de 1 sola página sin menús distractores permite concentrar al 100% la atención del cliente y multiplicar por 5 las solicitudes de compra. Por solo $45 USD yo te diseño la Landing Page completa con botón directo a tu WhatsApp lista en 48 horas. ¿Te gustaría ver un modelo de muestra?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura 2 plantillas de Landing Page en Carrd (una para servicios y otra para productos físicos). Día 2: Contacta a 10 negocios que estén pagando anuncios en Facebook o Google en tu ciudad y ofréceles una Landing Page optimizada."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la diferencia fundamental entre una 'Página de Inicio' (Home Page) y una 'Página de Destino' (Landing Page)?",
            "options": [
                  "La Landing Page es más cara de programar.",
                  "La Home Page es un catálogo general con múltiples menús para explorar, mientras que la Landing Page está diseñada con un único objetivo comercial enfocado, sin menús ni enlaces de fuga para maximizar la conversión.",
                  "La Landing Page solo funciona los fines de semana.",
                  "No existe ninguna diferencia."
            ],
            "correctIndex": 1,
            "explanation": "La landing page aísla al visitante de cualquier distracción externa, guiándolo a una sola acción de valor (comprar o registrarse)."
      },
      {
            "question": "¿Por qué se deben eliminar los enlaces a redes sociales (Instagram, Facebook) en una Landing Page de ventas?",
            "options": [
                  "Porque las redes sociales son ilegales.",
                  "Porque actúan como 'Puntos de Fuga' que invitan al usuario a abandonar la página de compra para navegar en sus redes, perdiendo la venta para siempre.",
                  "Porque aumentan el costo del hosting.",
                  "Porque hacen que la página se vea fea."
            ],
            "correctIndex": 1,
            "explanation": "Todo enlace saliente que no conduzca a la conversión del objetivo es un escape de dinero publicitario."
      },
      {
            "question": "¿Qué significa el término 'Above the Fold' (Arriba del Pliegue) en el diseño web?",
            "options": [
                  "Doblar la pantalla del teléfono por la mitad.",
                  "La primera sección visible de la pantalla que el usuario ve inmediatamente al entrar a la página sin necesidad de hacer scroll hacia abajo; debe incluir el beneficio principal y el llamado a la acción.",
                  "El menú oculto de configuración.",
                  "El pie de página con los términos legales."
            ],
            "correctIndex": 1,
            "explanation": "El área Above the Fold capta la atención en los primeros 3 segundos; si no comunica valor inmediato, el usuario se marcha."
      }
]
  },

  // =========================================================================
  // BOOK ID: sw-5
  // =========================================================================
  'sw-5': {
    frameworkName: "Cuadro de Mando de Analítica Web Orientado a Conversión (GA4 Measurement Protocol) & Embudos de Eventos",
    coreMetrics: [
      "Tasa de Conversión Global del Sitio Web (E-commerce CVR > 2.8%)",
      "Porcentaje de Tráfico por Canal de Adquisición (Orgánico, Pago, Directo, Social)",
      "Tasa de Abandono en el Embudo de Checkout / Carrito (< 65%)",
      "Valor Medio por Sesión / Visita Generada ($/sesión)",
      "Retorno del Gasto Publicitario por Canal (ROAS)"
],
    caseCompany: "Tienda de Calzado & Artículos de Cuero Artesanal CueroReal (León, México)",
    caseOutcome: "Tenía Google Analytics instalado pero el dueño nunca abría el panel porque 'no entendía los gráficos técnicos complejos'; implementó Google Analytics 4 (GA4) conectado a un Cuadro de Mando visual automatizado de 1 página en Looker Studio; descubrió que el 70% de las ventas provenían de búsquedas orgánicas de Google y que el 60% de los carritos se abandonaban en el paso de envío; optimizó el checkout y aumentó sus ventas un 52% en 45 días.",
    pitfall: "Tener instalado Google Analytics como un 'adorno digital' sin configurar el seguimiento de eventos de conversión (compras, clics en WhatsApp, formularios) y guiarse por métricas de vanidad como el número bruto de visitas.",
    actionItem1: "Configurar los 4 eventos de conversión esenciales en Google Analytics 4 (GA4): page_view, view_item, generate_lead / click_whatsapp y purchase.",
    actionItem2: "Construir un Cuadro de Mando Visual interactivo de 1 página en Google Looker Studio (gratuito) con métricas que cualquier persona sin conocimientos técnicos pueda entender en 30 segundos.",
    actionItem3: "Establecer la rutina de 'Revisión Analítica de los Lunes': analizar cuáles son las 3 páginas más visitadas y cuál es el canal de marketing más rentable para duplicar la inversión en lo que funciona.",
    domainContext: "Lo que no se mide no se puede gestionar ni mejorar; sin analítica web precisa, dirigir un negocio digital es como pilotar un avión a ciegas en medio de una tormenta.",
    strategicRationale: "Dominar la analítica web permite identificar cuellos de botella en el proceso de compra, eliminar el gasto publicitario en canales no rentables y multiplicar las ganancias con decisiones basadas en datos duros.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 90% de los dueños de negocios en América Latina entran a Google Analytics, ven 50 gráficos incomprensibles de 'sesiones y rebote', se sienten abrumados y cierran la pestaña para no volver a abrirla jamás. Saber cuántas personas visitan tu web no sirve de nada si no sabes: ¿Cuántos compraron? ¿De qué anuncio vinieron? ¿Dónde se trabaron antes de pagar? Google Analytics 4 (GA4) combinado con Google Looker Studio te permite crear un Cuadro de Mando visual y elegante de 1 sola página con semáforos de ventas y retorno de inversión 100% GRATIS. Este tomo te enseña a medir lo que realmente importa.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Muerte de las Métricas de Vanidad: Por qué el número de visitas no paga las cuentas del mes.\n• Capítulo 2: La Configuración de Eventos en Google Analytics 4 (GA4): Clics en WhatsApp, carritos y compras.\n• Capítulo 3: El Embudo de Conversión: Cómo detectar el paso exacto donde los clientes abandonan la compra.\n• Capítulo 4: Caso de Estudio Real (CueroReal México): Cómo aumentaron sus ventas un 52% con Looker Studio.\n• Capítulo 5: Creación del Cuadro de Mando en Google Looker Studio: Conectar datos en 15 minutos sin programar.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer configuración de GA4 y tableros en Looker Studio cobrando entre $45 y $650 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Analytics 4 (analytics.google.com): Plataforma oficial de medición de tráfico, eventos y comportamiento de usuarios.\n2. Google Looker Studio (lookerstudio.google.com): Herramienta gratuita de creación de cuadros de mando e informes visuales interactivos.\n3. Google Tag Manager (tagmanager.google.com): Gestión y disparo de etiquetas y eventos sin tocar el código fuente de la web.",
    ch1CustomNarrative: [
      "En el comercio tradicional físico, un tendero sabe exactamente cuántas personas entran a su local, qué productos miran, qué preguntas hacen y por qué deciden marcharse sin comprar.",
      "En el entorno digital, muchos empresarios operan con una ceguera alarmante: invierten dinero a ciegas en redes sociales y campañas publicitarias sin tener la menor idea de qué ocurre una vez que el usuario hace clic en el enlace.",
      "La analítica web moderna no es un ejercicio académico para matemáticos o programadores; es la brújula operativa indispensable para comprender el comportamiento humano y optimizar cada centavo invertido en el negocio.",
      "Aprender a interpretar los datos de Google Analytics 4 y transformarlos en cuadros de mando ejecutivos te otorga el poder supremo de tomar decisiones comerciales con certeza matemática."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONECTAR GA4 CON GOOGLE LOOKER STUDIO GRATIS:",
      "Paso 1: Ingresa a Google Analytics 4 (analytics.google.com). Ve a Administrar -> Flujos de Datos -> Web. Copia tu \"ID de Medición (G-XXXXXXXXXX)\" e insértalo en tu sitio web.",
      "Paso 2: En GA4 -> Configuración -> Eventos: Marca como \"Conversión\" los eventos clave: generate_lead (formulario completado), click_whatsapp (contacto directo) o purchase (compra exitosa).",
      "Paso 3: Abre Google Looker Studio (lookerstudio.google.com) y selecciona \"Informe en Blanco\". En Fuentes de Datos, elige \"Google Analytics\" y selecciona tu propiedad de GA4.",
      "Paso 4: Inserta 4 tarjetas de puntuación visual: 1. Total de Visitas del Mes. 2. Total de Contactos / Ventas. 3. Tasa de Conversión (%). 4. Gráfico de Pastel con las Fuentes de Tráfico (Google Orgánico, Instagram, WhatsApp, Directo).",
      "Paso 5: Haz clic en \"Compartir\" y genera un enlace de solo lectura para el cliente o tu equipo: el tablero se actualizará automáticamente todos los días en tiempo real a costo $0 USD."
],
    ch3TacticalSteps: [
      "Semana 1: Instala la etiqueta de Google Analytics 4 en tu sitio web y verifica que registre eventos en tiempo real.",
      "Semana 2: Configura el seguimiento de conversiones para cada botón de llamada o contacto de WhatsApp.",
      "Semana 3: Diseña tu Cuadro de Mando en Google Looker Studio con los 4 indicadores clave de negocio.",
      "Semana 4: Analiza el informe a fin de mes y reasigna tu presupuesto de marketing cancelando las fuentes de tráfico que no generan conversiones."
],
    ch4CaseDeepDive: [
      "CueroReal en León vendía calzado de cuero por internet pero el dueño solo miraba las visitas brutas (12,000 visitas al mes) y no entendía por qué solo vendía $2,000 USD.",
      "Al conectar GA4 con Looker Studio descubrieron el embudo de ventas: 4,000 personas añadían productos al carrito, pero el 88% abandonaba en la pantalla de envío porque el costo de flete solo se mostraba al final.",
      "Cambiaron la política a 'Envío Gratis en compras mayores a $50 USD' y mostraron el costo desde la primera pantalla.",
      "La tasa de abandono cayó a la mitad, las ventas mensuales crecieron a $6,200 USD en 45 días y el dueño comenzó a revisar su tablero de Looker Studio todos los lunes por la mañana."
],
    ch5RiskMitigation: [
      "Error común: Sufrir de 'Parálisis por Análisis' (llenar el panel de 40 gráficos complejos que nadie entiende).",
      "Mantén el tablero simple y ejecutivo: concéntrate en los 4 números que mueven la aguja del dinero (Visitas, Leads/Ventas, Tasa de Conversión y Costo por Adquisición).",
      "Asegúrate de filtrar el tráfico interno (las visitas de tus propios empleados o desarrolladores) para no falsear las estadísticas reales de clientes.",
      "Cumple con las normativas de privacidad y cookies informando al usuario sobre el uso de analítica en tu sitio web."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Configuración de Google Analytics 4 (GA4) y Tablero Automatizado en Looker Studio\". Ayuda a tiendas online, clínicas, escuelas y empresas a medir sus conversiones y visualizar sus ventas en tiempo real.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por instalación de GA4 + configuración de 3 eventos de conversión (WhatsApp/Formularios) y tablero básico en Looker Studio. • Nivel Intermedio (Con portafolio): $130 - $270 USD por configuración avanzada con Google Tag Manager, seguimiento de comercio electrónico (E-commerce tracking), embudos de conversión y panel interactivo para directivos. • Nivel Senior / Consultor de Analítica Digital y Business Intelligence: $320 - $650 USD por arquitectura de datos web completa, atribución de canales de marketing, integración de CRM con Looker Studio y sesiones mensuales de asesoría estratégica.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], sé que muchas empresas en [Sector] tienen Google Analytics instalado en su web pero nunca lo revisan porque los paneles son muy confusos y no muestran claramente de dónde vienen las ventas reales. Por solo $50 USD yo te configuro Google Analytics 4 (GA4) y te diseño un Cuadro de Mando Visual en Google Looker Studio de 1 sola página que se actualiza automáticamente y te muestra en tiempo real cuántos contactos y ventas genera cada canal. ¿Te gustaría ver un tablero de muestra?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña una plantilla de tablero de e-commerce y servicios en Google Looker Studio. Día 2: Contacta a 10 tiendas online o empresas de servicios en LinkedIn y ofréceles una auditoría gratuita de su configuración de analítica."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la diferencia entre una 'Métrica de Vanidad' y una 'Métrica de Conversión' en la analítica web?",
            "options": [
                  "La métrica de vanidad cuesta más dinero.",
                  "Las métricas de vanidad (como el número bruto de visitas o impresiones) hacen que el negocio se vea popular pero no garantizan ingresos, mientras que las métricas de conversión (compras, clics en WhatsApp, formularios completados) miden acciones reales que generan dinero.",
                  "Las métricas de conversión solo se usan en bancos.",
                  "No existe ninguna diferencia."
            ],
            "correctIndex": 1,
            "explanation": "Centrarse en las conversiones asegura que las decisiones de marketing se orienten a la rentabilidad real del negocio."
      },
      {
            "question": "¿Qué ventaja ofrece conectar Google Analytics 4 con Google Looker Studio?",
            "options": [
                  "Que los servidores consumen menos energía.",
                  "Que permite transformar datos técnicos complejos y dispersos en un informe visual, limpio e interactivo de 1 página que se actualiza automáticamente en tiempo real y que cualquier directivo puede entender sin conocimientos técnicos.",
                  "Que Looker Studio regala saldo para publicidad.",
                  "Que bloquea los virus de internet."
            ],
            "correctIndex": 1,
            "explanation": "Looker Studio democratiza el acceso a los datos, permitiendo visualizar la salud comercial del negocio de un solo vistazo."
      },
      {
            "question": "¿Qué revela el análisis de un 'Embudo de Conversión' (Funnel) en una tienda online?",
            "options": [
                  "El precio del café de los empleados.",
                  "El paso exacto del proceso de compra donde se produce la mayor pérdida o abandono de usuarios (ej. añadir al carrito, pantalla de envío o pasarela de pago), permitiendo corregir la fricción específica.",
                  "La velocidad del disco duro del servidor.",
                  "La cantidad de productos en el almacén."
            ],
            "correctIndex": 1,
            "explanation": "Identificar el punto de fuga en el embudo permite optimizar la pantalla exacta que está frenando las ventas."
      }
]
  },

  // =========================================================================
  // BOOK ID: sw-6
  // =========================================================================
  'sw-6': {
    frameworkName: "Protocolo de Ciberseguridad Web Defensiva, Blindaje SSL/TLS & Plan de Continuidad Operativa (Disaster Recovery)",
    coreMetrics: [
      "Puntuación de Seguridad Web (SecurityHeaders.com Grado A+)",
      "Tiempo de Recuperación ante Desastres (RTO < 30 minutos)",
      "Punto Objetivo de Recuperación de Datos (RPO < 24 horas de datos)",
      "Tasa de Bloqueo de Intentos de Inyección SQL y Ataques de Fuerza Bruta (100%)",
      "Frecuencia de Copias de Seguridad Automáticas (Backups Diarios Cifrados)"
],
    caseCompany: "Plataforma de Reservas & Consultoría Médica MediSalud (Guayaquil, Ecuador)",
    caseOutcome: "Sufrió un ataque de malware por falta de actualizaciones en su servidor WordPress, perdiendo el acceso a la base de datos de pacientes durante 4 días con un costo de $14,000 USD; implementó el Protocolo de Seguridad Web con Cloudflare WAF, backups automáticos en Google Drive y contraseñas 2FA; neutralizó más de 8,000 intentos de ataque mensuales y alcanzó un uptime del 99.99% sin caídas.",
    pitfall: "Asumir la peligrosa falacia de que 'mi sitio web es pequeño y nadie va a querer hackearlo', utilizando contraseñas débiles ('admin123'), plugins desactualizados y sin tener copias de seguridad de respaldo.",
    actionItem1: "Activar el Firewall de Aplicaciones Web (WAF) gratuito de Cloudflare para bloquear bots maliciosos, ataques DDoS e intentos de fuerza bruta.",
    actionItem2: "Automatizar las Copias de Seguridad Diarias (Backups) del sitio web y base de datos almacenándolas en una nube externa segura (Google Drive o AWS S3).",
    actionItem3: "Establecer la 'Regla de Contraseñas Fuertes y 2FA': forzar autenticación en dos factores en el panel de administración y actualizar plugins y software todos los meses.",
    domainContext: "La gran mayoría de los ataques informáticos en internet no son dirigidos por hackers personales, sino por robots automatizados que escanean millones de sitios web al azar buscando vulnerabilidades conocidas; la seguridad preventiva es la única defensa real.",
    strategicRationale: "Mantener una presencia digital blindada protege los datos privados de tus clientes, evita multas regulatorias, garantiza la continuidad operativa y preserva la reputación de la marca.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 80% de los sitios web hackeados en América Latina pertenecen a pequeñas y medianas empresas que creían que 'a nadie le interesa hackear mi negocio'. Los ciberdelincuentes no atacan personas: usan robots automáticos que escanean internet buscando páginas con contraseñas débiles o plugins desactualizados para secuestrar la web, robar datos de clientes o insertar virus y publicidad engañosa. Recuperar una web destruida cuesta miles de dólares. Con herramientas gratuitas como Cloudflare WAF y copias de seguridad automáticas en Google Drive puedes blindar tu sitio web al 100%. Este tomo final de la Categoría 12 te enseña el protocolo de seguridad defensiva.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Realidad de las Amenazas Web: Ataques de fuerza bruta, inyecciones SQL y malware automático.\n• Capítulo 2: Las 3 Capas de la Seguridad Web: Protección perimetral (Cloudflare), Blindaje de acceso (2FA) y Software actualizado.\n• Capítulo 3: La Regla del Backup 3-2-1: 3 copias, 2 formatos diferentes y 1 copia fuera del servidor principal.\n• Capítulo 4: Caso de Estudio Real (MediSalud Ecuador): Cómo blindaron su portal médico tras un ataque de malware.\n• Capítulo 5: Cabeceras de Seguridad HTTP (HSTS, CSP): Cómo lograr una calificación de Grado A+ en SecurityHeaders.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de seguridad web y planes de mantenimiento cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Cloudflare WAF (Web Application Firewall): Reglas de firewall gratuitas para bloquear ataques DDoS y países sospechosos.\n2. SecurityHeaders.com / Sucuri SiteCheck: Escaneo oficial de vulnerabilidades, malware y cabeceras de seguridad web.\n3. UpdraftPlus / Google Drive: Automatización de copias de seguridad diarias de archivos y base de datos sin costo.",
    ch1CustomNarrative: [
      "En el mundo digital moderno, la ciberseguridad ya no es una preocupación exclusiva de los grandes bancos o agencias gubernamentales de defensa.",
      "Cualquier sitio web conectado a internet, desde la tienda de barrio hasta el blog profesional más modesto, recibe cientos de escaneos y ataques automatizados al día por parte de redes de bots que buscan vulnerabilidades desatendidas.",
      "Un sitio web hackeado significa pérdida inmediata de ventas, desindexación y penalización en los resultados de búsqueda de Google, y un daño devastador a la reputación y confianza construida durante años con los clientes.",
      "Aprender a implementar protocolos de mantenimiento preventivo y seguridad web defensiva te permite dormir con absoluta tranquilidad sabiendo que tus activos digitales y los datos de tus clientes están completamente blindados."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO BLINDAR LA SEGURIDAD DE TU SITIO WEB CON CLOUDFLARE Y UPDRAFTPLUS GRATIS:",
      "Paso 1: Realiza un escaneo de seguridad en SecurityHeaders.com y Sucuri SiteCheck (sitecheck.sucuri.net) para identificar fallos y verificar que tu web esté libre de virus.",
      "Paso 2: En Cloudflare Dashboard -> Seguridad -> WAF -> Reglas Personalizadas: Crea una regla de bloqueo de ataques de fuerza bruta al panel de acceso (ej. bloquear accesos repetidos a /wp-login.php o requerir un desafío de verificación Managed Challenge).",
      "Paso 3: En Cloudflare -> SSL/TLS: Selecciona el modo de cifrado \"Completo (Estricto)\" y activa \"Reescrituras HTTPS Automáticas\" y \"HSTS (HTTP Strict Transport Security)\".",
      "Paso 4: Si usas WordPress u otro CMS, instala el plugin gratuito UpdraftPlus. Conéctalo a tu cuenta de Google Drive y programa: 1. Copia de seguridad diaria de la Base de Datos. 2. Copia semanal de archivos. Mantén una retención de las últimas 7 copias.",
      "Paso 5: Cambia el nombre del usuario administrador estándar (elimina el usuario 'admin') y activa la autenticación en dos factores (2FA) mediante una aplicación móvil (Google Authenticator)."
],
    ch3TacticalSteps: [
      "Semana 1: Escanea tu sitio web en SecurityHeaders.com y cambia todas las contraseñas del panel de hosting y administración.",
      "Semana 2: Activa las reglas de seguridad WAF y el forzado de HTTPS estricto en tu panel de Cloudflare.",
      "Semana 3: Configura la copia de seguridad automática diaria vinculada a Google Drive y realiza una prueba de restauración.",
      "Semana 4: Actualiza todos los plugins, temas y la versión de PHP del servidor, eliminando extensiones obsoletas o inactivas."
],
    ch4CaseDeepDive: [
      "MediSalud en Guayaquil manejaba un portal de reservas para 25 médicos pero el servidor utilizaba la contraseña 'admin2020' y tenía plugins sin actualizar desde hacía 2 años.",
      "Un ataque de ransomware cifró la base de datos de citas y redirigía a los pacientes a páginas fraudulentas; perdieron $14,000 USD en operaciones canceladas y gastos de programadores de rescate.",
      "Reconstruyeron el portal con Cloudflare WAF, autenticación 2FA obligatoria y copias de seguridad diarias en Google Drive.",
      "En los siguientes 12 meses, el sistema bloqueó más de 95,000 intentos de intrusión automatizada sin sufrir una sola interrupción ni caída de servicio."
],
    ch5RiskMitigation: [
      "Error fatal: Guardar las copias de seguridad (backups) en el mismo servidor donde está alojado el sitio web.",
      "Si el servidor es atacado o colapsa el disco duro, perderás la web y los backups al mismo tiempo; almacena siempre las copias en una nube externa independiente (Google Drive, Dropbox o AWS S3).",
      "Nunca descargues plugins o temas 'piratas / nulled' de sitios sospechosos: el 99% vienen infectados con código malicioso oculto que abre puertas traseras en tu servidor.",
      "Realiza una prueba de restauración de copia de seguridad al menos una vez cada 6 meses para comprobar que los archivos de respaldo funcionan correctamente."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de Seguridad Web, Blindaje Anti-Hackeo y Plan de Mantenimiento Preventivo\". Ayuda a empresas, tiendas online, clínicas y despachos a proteger su sitio web contra ataques, virus y pérdidas de datos.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por escaneo de seguridad en SecurityHeaders + configuración de Cloudflare WAF y backups automáticos en Google Drive. • Nivel Intermedio (Con portafolio): $120 - $250 USD por plan de mantenimiento mensual preventivo (actualizaciones de seguridad, limpieza de base de datos, monitoreo de uptime 24/7 y copias de seguridad diarias). • Nivel Senior / Consultor de Ciberseguridad Web y Continuidad Operativa: $300 - $600 USD por blindaje integral de ciberseguridad, respuesta ante incidentes, desinfección de malware, configuración HSTS/CSP de grado A+ y protocolo de recuperación ante desastres.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], sé que para negocios que dependen de su presencia digital en [Empresa] un hackeo o caída del sitio web puede costar miles de dólares en ventas perdidas y dañar la confianza de los clientes. Con herramientas como Cloudflare WAF y backups automáticos en Google Drive es posible blindar tu sitio web al 100% contra virus y ataques automatizados. Por solo $45 USD yo te realizo una Auditoría de Seguridad Web y te configuro el sistema de copias de seguridad diarias automáticas para proteger tu negocio ante cualquier emergencia. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de auditoría de seguridad y prueba las reglas de Cloudflare WAF. Día 2: Contacta a 10 negocios locales en LinkedIn o Instagram y ofréceles un informe gratuito de vulnerabilidades de su sitio web."
],
    quizQuestions: [
      {
            "question": "¿Por qué es un grave error pensar que los sitios web de pequeñas y medianas empresas no están en riesgo de ciberataques?",
            "options": [
                  "Porque los hackers solo atacan a gobiernos.",
                  "Porque la mayoría de los ataques en internet son ejecutados por redes de 'bots automáticos' que escanean millones de páginas al azar buscando vulnerabilidades conocidas y contraseñas débiles, sin importar el tamaño del negocio.",
                  "Porque los sitios pequeños son invisibles para los virus.",
                  "Porque internet es 100% seguro."
            ],
            "correctIndex": 1,
            "explanation": "Los ataques automatizados no discriminan por tamaño de empresa; cualquier sitio desprotegido es un blanco fácil para el secuestro de datos."
      },
      {
            "question": "¿Qué establece la 'Regla del Backup 3-2-1' en la seguridad y continuidad de datos?",
            "options": [
                  "Hacer 3 llamadas telefónicas antes de apagar la computadora.",
                  "Mantener 3 copias de tus datos importantes, en 2 tipos de almacenamiento diferentes (ej. servidor y disco), y al menos 1 copia guardada en una ubicación externa fuera del servidor principal (ej. Google Drive o AWS).",
                  "Guardar los datos durante 3 días solamente.",
                  "Un método para reiniciar la contraseña."
            ],
            "correctIndex": 1,
            "explanation": "Tener una copia externa asegura la recuperación total de la web incluso si el servidor principal es destruido o infectado."
      },
      {
            "question": "¿Cuál es la función del 'Web Application Firewall' (WAF) de Cloudflare?",
            "options": [
                  "Aumentar el precio del dominio.",
                  "Actuar como un escudo protector inteligente entre internet y tu servidor que filtra y bloquea automáticamente el tráfico malicioso, ataques de inyección SQL, bots de spam e intentos de fuerza bruta.",
                  "Borrar los correos electrónicos viejos.",
                  "Diseñar logotipos para la empresa."
            ],
            "correctIndex": 1,
            "explanation": "El WAF inspecciona las solicitudes entrantes y detiene las amenazas cibernéticas antes de que toquen el servidor de la empresa."
      }
]
  },

};
