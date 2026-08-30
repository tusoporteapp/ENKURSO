// Specific topic-by-topic content blueprints for Category 16 (Marketing Digital Avanzado) - Part 1: Tomos 146 al 153
// Features:
// 1. 5,000-character Deep Learning Overview & Executive Briefing per book
// 2. Step-by-step Free GoAffPro, Google Merchant Center, Microsoft Clarity, Meta Retargeting, Meta Commerce, LinkedIn ABM, Growth Hacking ICE & Server-Side GA4 Tutorials
// 3. Real, accessible LATAM Monetization Services & Pricing (Junior $25-$60, Mid $80-$180, Senior $220-$500 USD)
// 4. Localized copy-paste sales outreach pitches & 48h action plans
// 5. 3 rigorous exam questions per book with detailed explanations

import { SpecificBookContent } from './category1Content';

export const CATEGORY_16_PART1_BOOKS: Record<string, SpecificBookContent> = {
  // =========================================================================
  // BOOK ID: mda-1
  // =========================================================================
  'mda-1': {
    frameworkName: "Framework de Redes de Afiliación de Alto Rendimiento y Modelos CPA / CPL Escalables",
    coreMetrics: [
      "Ingresos Atribuidos a Afiliados (% del GMV Total > 22%)",
      "Costo Efectivo de Adquisición por Afiliado (eCPA vs CPA Directo)",
      "Tasa de Activación de Afiliados Registrados (> 18% activos)",
      "Tasa de Fraude y Tráfico No Válido (IVT < 1.2%)",
      "Retorno sobre Gasto de Comisión (ROAS de Afiliación > 6.5x)"
],
    caseCompany: "Marca de Suplementos Deportivos & Proteínas Krono Athletics (Bogotá, Colombia)",
    caseOutcome: "Dependía solo de Meta Ads con costos crecientes; lanzó su programa de afiliados en GoAffPro con 350 entrenadores personales y nutricionistas ofreciendo 15% de comisión por venta; generó $420,000 USD en ventas mensuales con un costo de adquisición 45% menor al de pauta pagada tradicional y cero riesgo financiero.",
    pitfall: "Lanzar un programa de afiliados sin filtros de admisión ni tecnología de atribución anti-fraude, permitiendo que sitios de cupones parásitos se roben comisiones por clientes que ya iban a comprar.",
    actionItem1: "Definir una política legal que prohíba estrictamente a los afiliados pujar por palabras clave de marca en Google Ads (Brand Bidding).",
    actionItem2: "Integrar un software de gestión de afiliados gratuito como GoAffPro o Affiliatly en Shopify, WooCommerce o Tiendanube.",
    actionItem3: "Crear un kit de recursos para afiliados en Canva con banners, copys para WhatsApp, historias listas y enlaces de seguimiento personalizados.",
    domainContext: "El marketing de afiliados profesional trasciende el simple reparto de cupones; es una fuerza de ventas externa y descentralizada donde la marca solo paga comisiones tras la verificación de una transacción legítima.",
    strategicRationale: "Escalar un programa de afiliados convierte los costos fijos de adquisición en costos variables garantizados, reduciendo drásticamente el riesgo de flujo de caja.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Qué pasaría si tuvieras a 200 personas recomendando tus productos todos los días en internet y solo les pagaras una comisión cuando el dinero ya esté en tu cuenta bancaria? Eso es el MARKETING DE AFILIADOS. Gigantes como Amazon, Hotmart y Shopify crecieron gracias a ejércitos de afiliados. Sin embargo, el 90% de las empresas cometen el error de no poner reglas y terminan pagando comisiones a páginas de cupones falsos. Con software gratuito como GoAffPro puedes crear tu propio portal de afiliados con enlaces únicos, panel de control y pagos automáticos en minutos. Este tomo te enseña a crear tu red de afiliados escalable.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Economía de la Afiliación: Cómo transformar a creadores y clientes en una fuerza comercial sin sueldo fijo.\n• Capítulo 2: Modelado Financiero de Comisiones: Cuánto porcentaje pagar según margen bruto (10% al 30%).\n• Capítulo 3: Configuración de GoAffPro Gratis: Enlaces de seguimiento, cookies de 30 días y portal personalizado.\n• Capítulo 4: Caso de Estudio Real (Krono Athletics Bogotá): Cómo 350 entrenadores generaron $420,000 USD al mes.\n• Capítulo 5: Blindaje Anti-Fraude: Cómo bloquear el Brand Bidding y las extensiones de cupones piratas.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño y gestión de programas de afiliados cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. GoAffPro (goaffpro.com): Plataforma oficial de gestión de afiliados con plan gratuito ilimitado para e-commerce.\n2. Canva (canva.com): Kit de Herramientas de Marketing para Afiliados (Banners, historias y copys de WhatsApp).\n3. Google Sheets: Matriz de Control Financiero de Comisiones, Pagos y Detección de Fraude.",
    ch1CustomNarrative: [
      "El marketing de afiliados se ha transformado en uno de los motores de adquisición más rentables y escalables para empresas en fase de crecimiento acelerado.",
      "En su núcleo, permite transformar a creadores de contenido, medios especializados y clientes leales en una fuerza de ventas externa que cobra exclusivamente por resultados verificados.",
      "Sin embargo, la mayoría de los programas corporativos fracasan porque cometen el error de abrir registros masivos sin supervisión: esto atrae a sitios de códigos de descuento parásitos que se apropian del último clic segundos antes del checkout, destruyendo el margen comercial sin aportar demanda incremental.",
      "Dominar la gestión de afiliados otorga a la organización una ventaja distributiva masiva: la capacidad de multiplicar la presencia en cientos de nichos de mercado con costo financiero cero hasta que la venta se materializa."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UN PROGRAMA DE AFILIADOS CON GOAFFPRO Y CANVA GRATIS:",
      "Paso 1: Instala la aplicación gratuita \"GoAffPro\" en tu tienda online (Shopify, WooCommerce, PrestaShop o Tiendanube).",
      "Paso 2: Configura las Reglas de Comisión: • Comisión Estándar: 15% en efectivo por cada venta neta referida. • Duración de la Cookie de Seguimiento: 30 días (si el cliente compra en los próximos 30 días, el afiliado cobra su comisión). • Política Anti-Brand Bidding: Cláusula obligatoria que prohíbe pagar anuncios con el nombre de tu marca.",
      "Paso 3: Personaliza el \"Portal de Registro de Afiliados\": Sube tu logo, define los campos de registro (Nombre, Instagram, Cuenta Bancaria/PayPal) y activa la aprobación manual.",
      "Paso 4: En Canva, diseña el \"Kit_De_Marketing_Afiliados\": 5 imágenes para historias de Instagram, 3 banners horizontales y un documento en PDF con 5 textos listos para copiar y pegar en grupos de WhatsApp.",
      "Paso 5: Invita a tus 30 clientes más fieles y a micro-influencers de tu nicho a unirse a tu portal para comenzar a generar comisiones compartiendo su enlace único."
],
    ch3TacticalSteps: [
      "Semana 1: Calcula el margen de ganancia de tus productos y define el porcentaje de comisión para tus afiliados.",
      "Semana 2: Configura GoAffPro en tu tienda virtual y publica los términos y condiciones legales del programa.",
      "Semana 3: Diseña el Kit de Recursos Promocionales en Canva y súbelo al panel de afiliados.",
      "Semana 4: Recluta a tus primeros 15 afiliados de nicho y realiza una sesión de bienvenida por videollamada para motivarlos."
],
    ch4CaseDeepDive: [
      "Krono Athletics en Bogotá vendía suplementos pero sus márgenes se reducían por el costo de la publicidad en Meta Ads.",
      "Lanzaron su programa de afiliados en GoAffPro dirigido exclusivamente a entrenadores de gimnasios y nutricionistas deportivos.",
      "A cada afiliado le entregaron un kit digital de Canva y muestras de producto: los entrenadores recomendaban la proteína a sus alumnos entregándoles un cupón del 10% de descuento y ganando un 15% de comisión en efectivo.",
      "En 8 meses reclutaron a 350 entrenadores activos, generaron más de $420,000 USD mensuales en ventas recurrentes y redujeron su costo de adquisición un 45% frente a los anuncios tradicionales."
],
    ch5RiskMitigation: [
      "Error fatal: Dejar el registro de afiliados en 'Aprobación Automática' sin revisar quién entra.",
      "Revisa y aprueba manualmente a cada afiliado para asegurar que sean personas o creadores reales y no bots de spam.",
      "Establece un periodo de retención de pagos de 30 días antes de liquidar comisiones para cubrir posibles cancelaciones o devoluciones de productos.",
      "Verifica que las comisiones se calculen sobre el subtotal sin incluir los costos de envío ni impuestos."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño y Lanzamiento de Programa de Afiliados y Fuerza de Ventas por Comisión\". Ayuda a marcas de e-commerce, academias de cursos online y empresas de software a crear su canal de afiliados para vender a comisión.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por configuración de GoAffPro en Shopify/WooCommerce + kit básico de recursos en Canva. • Nivel Intermedio (Con portafolio): $140 - $280 USD por programa de afiliados integral (reglas de comisión, términos legales anti-fraude, portal personalizado, kit completo de creatividades y prospección de 20 afiliados iniciales). • Nivel Senior / Affiliate Program Manager y Consultor de Alianzas Comerciales: $350 - $700 USD por arquitectura de redes de afiliación a gran escala, integración de software empresarial (Impact / PartnerStack), reclutamiento masivo de creadores y cuadro de mando de ROAS.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando la tienda online de [Empresa] y sé que con los costos actuales de publicidad en Facebook e Instagram muchas marcas sufren para mantener márgenes saludables. Con un Programa de Afiliados propio en GoAffPro es posible reclutar a decenas de creadores, clientes y profesionales de tu sector para que promocionen tus productos ganando una comisión solo cuando la venta se concrete (cero riesgo publicitario). Por solo $50 USD yo te configuro el portal completo y el kit de marketing para afiliados en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura una tienda demo con GoAffPro y diseña el kit de afiliados en Canva. Día 2: Contacta a 10 marcas de moda, cosmética o suplementos en Instagram y ofréceles lanzar su programa de afiliados."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la principal ventaja financiera del Marketing de Afiliados para una empresa?",
            "options": [
                  "Que los productos son gratis.",
                  "Que transforma los costos fijos de publicidad incierta en costos variables garantizados: la empresa solo paga una comisión cuando la venta legítima ya fue cobrada y verificada.",
                  "Que no se necesita tener página web.",
                  "Que el gobierno subsidia las ventas."
            ],
            "correctIndex": 1,
            "explanation": "El modelo por comisión (CPA) traslada el riesgo de inversión y garantiza rentabilidad positiva en cada transacción."
      },
      {
            "question": "¿Por qué es fundamental prohibir el 'Brand Bidding' (pujar por la marca) en las reglas de un programa de afiliados?",
            "options": [
                  "Porque Google borra la cuenta de la empresa.",
                  "Porque evita que los afiliados compren anuncios con el nombre de tu propia marca para cobrar comisiones por clientes que ya iban a buscarte directamente en Google de forma orgánica.",
                  "Porque el nombre de la empresa no se puede escribir en internet.",
                  "Para que los afiliados no paguen impuestos."
            ],
            "correctIndex": 1,
            "explanation": "Prohibir el Brand Bidding evita la canibalización de ventas orgánicas y protege el margen de la empresa."
      },
      {
            "question": "¿Qué función cumple una 'Cookie de Seguimiento de 30 Días' en un enlace de afiliado?",
            "options": [
                  "Un postre que se entrega al cliente.",
                  "Un código digital que se guarda en el navegador del usuario para registrar y pagar la comisión al afiliado correspondiente aunque el cliente decida comprar varios días después de hacer clic.",
                  "Un virus informático.",
                  "Un descuento del 30% en comida."
            ],
            "correctIndex": 1,
            "explanation": "La duración de la cookie recompensa justamente la labor de recomendación del afiliado dentro de la ventana de compra del cliente."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-2
  // =========================================================================
  'mda-2': {
    frameworkName: "Arquitectura de Feeds de Productos en Google Merchant Center & Optimización de Títulos y Fotos de Google Shopping",
    coreMetrics: [
      "Retorno del Gasto Publicitario en Shopping (ROAS Shopping > 5.5x)",
      "Porcentaje de Aprobación de Productos en Merchant Center (100% Zero Disapprovals)",
      "Tasa de Clics en Fichas de Shopping (Shopping CTR > 2.8%)",
      "Costo por Clic Promedio en Shopping (CPC -30% vs Búsqueda Tradicional)",
      "Tasa de Conversión de Visita de Producto a Compra Directa (> 3.5%)"
],
    caseCompany: "Tienda Online de Iluminación LED & Lámparas de Diseño DecoLuz (Lima, Perú)",
    caseOutcome: "Tenía 800 productos en su catálogo pero Google Merchant Center le rechazaba el 60% por errores de feed; optimizó los atributos de producto (GTIN, marca, títulos con palabras clave y fotos con fondo blanco puro) en Google Sheets y Merchant Center; sus productos aparecieron en la pestaña de compras gratuitas y de pago de Google; las ventas de lámparas crecieron un 210% con un ROAS de 6.8x.",
    pitfall: "Subir feeds de productos con títulos genéricos ('Lámpara 01'), sin códigos GTIN/EAN y con fotos con marcas de agua o texto promocional, provocando el rechazo masivo y la suspensión de la cuenta de Google Merchant Center.",
    actionItem1: "Vincular Google Merchant Center con Google Ads y con tu plataforma de comercio electrónico (Shopify / WooCommerce).",
    actionItem2: "Estructurar los 'Títulos de Producto para Shopping' con la fórmula de oro: Marca + Tipo de Producto + Característica Principal + Color/Material + Tamaño (ej. \"Philips Foco LED Inteligente WiFi Luz Cálida 9W E27\").",
    actionItem3: "Subir imágenes con fondo blanco puro (formato 1:1 de 1000x1000 px) sin logotipos, bordes ni textos superpuestos.",
    domainContext: "Google Shopping es el canal de compra visual con mayor intención de internet: el cliente ve la foto del producto, el precio exacto y el nombre de la tienda antes de hacer clic, asegurando clics de compradores 100% decididos.",
    strategicRationale: "Dominar Google Merchant Center permite acceder tanto a las fichas gratuitas de Google Shopping (tráfico gratis) como a las campañas de Shopping de alto retorno comercial.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Qué haces cuando buscas 'comprar zapatillas nike air' o 'taladro percutor de 600w' en Google? En la parte superior de la pantalla aparecen las fotos de los productos con sus precios y tiendas. ¡Eso es GOOGLE SHOPPING! Es el escaparate más grande y vendedor de internet porque el cliente ya vio la foto y el precio antes de hacer clic. Además, Google te permite listar todos tus productos de forma 100% GRATUITA en la pestaña de 'Shopping'. Sin embargo, miles de tiendas son rechazadas por no saber estructurar su 'Feed de Productos' en Google Merchant Center. Este tomo te enseña a dominar Google Shopping desde cero.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Magia de Google Shopping: Por qué convierte 3 veces más que los anuncios de texto tradicionales.\n• Capítulo 2: Fichas Gratuitas de Google Shopping: Cómo conseguir tráfico orgánico de compras a costo cero.\n• Capítulo 3: Creación del Feed de Productos en Google Sheets: Títulos con fórmula SEO, GTIN y categorías de Google.\n• Capítulo 4: Caso de Estudio Real (DecoLuz Lima): Cómo pasaron de cuentas suspendidas a un ROAS de 6.8x y +210% en ventas.\n• Capítulo 5: Corrección de Errores en Merchant Center: Eliminar políticas de marcas de agua y problemas de stock.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer configuración de Google Shopping y Merchant Center cobrando entre $45 y $650 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Merchant Center (merchants.google.com): Panel oficial gratuito de Google para alojar y sincronizar feeds de productos.\n2. Google Sheets: Plantilla Oficial de Feed de Productos para Google Shopping con validación de atributos.\n3. PhotoRoom / Canva: Eliminador de fondos para crear imágenes con fondo blanco puro exigidas por Google.",
    ch1CustomNarrative: [
      "En el ecosistema del comercio electrónico contemporáneo, Google Shopping representa el canal de venta visual con mayor nivel de intención de compra de toda la red.",
      "A diferencia de los anuncios de texto de búsqueda donde el usuario debe imaginar el producto, en Google Shopping el comprador tiene frente a sus ojos la fotografía real, el precio exacto en su moneda local, la calificación de estrellas y el nombre de la tienda antes de efectuar un solo clic.",
      "Esto filtra de inmediato a los curiosos: quien hace clic en una ficha de Shopping ya conoce el aspecto del producto y su costo, ingresando a la tienda con una predisposición casi total a comprar.",
      "Aprender a gestionar Google Merchant Center y optimizar los feeds de datos te permite posicionar tu catálogo en el centro comercial más concurrido de internet."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONFIGURAR GOOGLE MERCHANT CENTER EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Ingresa a Google Merchant Center (merchants.google.com). Crea tu cuenta, verifica el dominio de tu tienda y configura los datos de envíos e impuestos de tu país.",
      "Paso 2: Ve a Productos -> Feeds -> Añadir Feed Principal -> Selecciona \"Hojas de cálculo de Google\" como método de subida.",
      "Paso 3: Completa los 8 Atributos Obligatorios en Google Sheets: • id (SKU único). • title (Fórmula: Marca + Producto + Detalle clave + Color/Talla). • description (Descripción clara de beneficios). • link (URL directa al producto). • image_link (Foto con fondo blanco puro de 1000x1000 px). • price (Precio con moneda, ej. \"45.00 PEN\"). • availability (in_stock). • gtin / brand (Código de barras o marca).",
      "Paso 4: Programa la sincronización automática diaria en Merchant Center para que los precios y stock se actualicen solos.",
      "Paso 5: Activa el programa gratuito \"Fichas de producto gratuitas\" para que tu catálogo aparezca en la pestaña Google Shopping sin pagar un solo dólar en publicidad."
],
    ch3TacticalSteps: [
      "Semana 1: Crea tu cuenta en Google Merchant Center y verifica la propiedad de tu tienda online.",
      "Semana 2: Prepara las fotos de tus 20 productos principales con fondo blanco limpio en Canva o PhotoRoom.",
      "Semana 3: Rellena el Feed de Productos en Google Sheets aplicando la fórmula de títulos optimizados.",
      "Semana 4: Revisa la pestaña de diagnóstico en Merchant Center para asegurarte de tener 100% de productos aprobados."
],
    ch4CaseDeepDive: [
      "DecoLuz en Lima vendía lámparas de diseño pero sus campañas en Google Ads no eran rentables porque sus títulos eran genéricos como 'Lámpara Mod. 45' y sus fotos tenían fondos oscuros.",
      "Google Merchant Center suspendió su cuenta por datos incompletos.",
      "Reestructuraron el catálogo en Google Sheets: reescribieron los títulos a 'DecoLuz Lámpara Colgante Nórdica Madera y Metal para Comedor E27', subieron fotos con fondo blanco puro y agregaron los códigos GTIN.",
      "Merchant Center aprobó el 100% del catálogo: aparecieron en el top de Google Shopping y sus ventas digitales crecieron un 210% en 90 días con un ROAS de 6.8x."
],
    ch5RiskMitigation: [
      "Error fatal: Subir fotos con marcas de agua, textos de promociones ('-20% Descuento') o bordes decorativos.",
      "Google prohíbe estrictamente cualquier texto promocional sobre las fotos en Shopping y suspenderá los productos infractores; usa siempre fotos limpias del producto sobre fondo blanco.",
      "Asegúrate de que el precio del feed coincida exactamente con el precio final en la página web; las discrepancias de precio provocan suspensiones de cuenta.",
      "Mantén las políticas de reembolso y términos de servicio claramente visibles en el pie de página de tu tienda online."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Configuración de Google Merchant Center y Campañas de Google Shopping para E-commerce\". Ayuda a tiendas de ropa, calzado, ferretería, tecnología, muebles y cosméticos a vender en Google Shopping.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por configuración de Google Merchant Center + subida de feed de 25 productos en Google Sheets con fotos optimizadas. • Nivel Intermedio (Con portafolio): $130 - $270 USD por configuración completa de Merchant Center (hasta 150 productos, corrección de errores de diagnóstico, sincronización automática diaria y activación de fichas gratuitas y de pago). • Nivel Senior / Google Shopping Specialist y Consultor de E-commerce: $320 - $650 USD por gestión avanzada de feeds multicountry, optimización continua de títulos y atributos con IA, campañas de Performance Max Shopping y cuadro de mando de ROAS.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve buscando en Google productos similares a los de la tienda [Empresa] y noté que no están apareciendo en Google Shopping (donde los clientes ven la foto y el precio directamente antes de hacer clic, lo que genera las tasas de compra más altas de internet). Con una configuración profesional de Google Merchant Center en Google Sheets es posible listar todo tu catálogo e incluso acceder a las Fichas Gratuitas de Google sin pagar publicidad. Por solo $50 USD yo te configuro Merchant Center y te subo tus primeros 25 productos aprobados en 48 horas. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de Feed de Shopping en Google Sheets y practica con 5 productos. Día 2: Contacta a 10 tiendas online de tu país en Instagram o Shopify y ofréceles auditar su presencia en Google Shopping."
],
    quizQuestions: [
      {
            "question": "¿Por qué los anuncios de Google Shopping tienen una tasa de conversión más alta que los anuncios de texto tradicionales?",
            "options": [
                  "Porque Google regala cupones de compra.",
                  "Porque muestran visualmente la fotografía del producto, su precio exacto y la tienda antes de hacer clic, asegurando que el visitante ya conozca los detalles clave y esté listo para comprar.",
                  "Porque solo aparecen en computadoras caras.",
                  "Porque los anuncios de texto no funcionan."
            ],
            "correctIndex": 1,
            "explanation": "La transparencia visual y de precios de Google Shopping califica previamente al comprador antes de que la empresa pague por el clic."
      },
      {
            "question": "¿Cuál es la fórmula recomendada para redactar los títulos de producto en el feed de Google Shopping?",
            "options": [
                  "Escribir solo el código interno de la fábrica.",
                  "Marca + Tipo de Producto + Característica Principal / Beneficio + Color / Material + Tamaño o Especificación clave.",
                  "Escribir 'COMPRA AHORA BARATO' en mayúsculas.",
                  "Dejar el título en blanco."
            ],
            "correctIndex": 1,
            "explanation": "Esta estructura permite que el algoritmo de Google entienda exactamente qué es el producto y lo muestre en las búsquedas más relevantes."
      },
      {
            "question": "¿Qué requisito fotográfico es obligatorio en Google Merchant Center para evitar el rechazo de productos?",
            "options": [
                  "Tener fotos con marcos dorados.",
                  "Imágenes nítidas del producto sobre fondo blanco o neutro puro, sin marcas de agua, textos promocionales ni logotipos superpuestos.",
                  "Fotos tomadas únicamente de noche.",
                  "Subir fotos en blanco y negro."
            ],
            "correctIndex": 1,
            "explanation": "Google exige imágenes limpias y profesionales para mantener la uniformidad y calidad visual de su escaparate de compras."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-3
  // =========================================================================
  'mda-3': {
    frameworkName: "Metodología Científica de CRO (Conversion Rate Optimization) & Pruebas A/B con Significancia Estadística",
    coreMetrics: [
      "Incremento en Tasa de Conversión Web (Lift CVR > +35%)",
      "Nivel de Confianza Estadística en Pruebas A/B (p-value < 0.05 / 95% Confianza)",
      "Reducción de Puntos de Fricción en Mapas de Calor (-60% rage clicks)",
      "Aumento del Ingreso Medio por Visitante (RPV - Revenue Per Visitor +40%)",
      "Tasa de Finalización de Formularios Transaccionales (> 65%)"
],
    caseCompany: "Plataforma de Reservas de Hoteles Boutique & Cabañas Rústicas EscapadasTop (Santiago, Chile)",
    caseOutcome: "Tenía 50,000 visitas al mes pero solo el 0.9% reservaba; instaló Microsoft Clarity gratis y descubrió que los usuarios hacían 'clics de rabia' (rage clicks) en fotos pequeñas que no se agrandaban y que el botón de reserva estaba oculto al final de la página; diseñó una prueba A/B en Figma con fotos ampliadas y botón flotante en móviles; la conversión subió del 0.9% al 2.4%, generando más de $58,000 USD adicionales en reservas mensuales.",
    pitfall: "Hacer cambios en el diseño web basados en 'la opinión estética subjetiva del jefe' sin analizar datos de mapas de calor ni validar mediante pruebas A/B con significancia estadística.",
    actionItem1: "Instalar la herramienta gratuita Microsoft Clarity en tu web para registrar mapas de calor (Heatmaps) de clics, scroll y grabaciones de sesiones de usuarios en video.",
    actionItem2: "Identificar los 'Rage Clicks' (clics de frustración) y los 'Dead Clicks' (clics en elementos que no responden) para detectar fallos de diseño urgentes.",
    actionItem3: "Diseñar una 'Hipótesis Científica de CRO': \"Si cambiamos [Elemento X] por [Elemento Y], esperamos un aumento del [Z]% en conversiones porque [Razón observada en Clarity]\".",
    domainContext: "El CRO (Conversion Rate Optimization) es la forma más rápida y económica de duplicar las ventas de un negocio sin gastar un solo centavo extra en publicidad: duplica la conversión de tu tráfico actual y duplicarás tus ingresos.",
    strategicRationale: "Optimizar la conversión maximiza la rentabilidad del tráfico existente, abarata el CAC relativo y otorga una ventaja insuperable para superar las ofertas de la competencia en las subastas publicitarias.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Qué prefieres: gastar $2,000 dólares más en publicidad para atraer el doble de visitas a tu web, o duplicar las ventas con las mismas visitas que ya tienes totalmente gratis? Eso es lo que hace el CRO (Optimización de la Tasa de Conversión). Si tu web tiene una conversión del 1% y la subes al 2%, ¡acabas de duplicar la facturación de tu empresa sin gastar un centavo más en anuncios! Con herramientas 100% gratuitas e ilimitadas como Microsoft Clarity puedes ver grabaciones en video de lo que hacen los usuarios en tu página y mapas de calor de dónde hacen clic. Este tomo te enseña a hacer CRO científico.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Matemática del CRO: Por qué duplicar la conversión es 10 veces más rentable que duplicar el tráfico.\n• Capítulo 2: Instalación de Microsoft Clarity Gratis: Mapas de calor (Heatmaps), scroll y grabaciones ilimitadas.\n• Capítulo 3: Detección de Fricciones: Rage Clicks (clics de rabia), Dead Clicks y abandono de formularios.\n• Capítulo 4: Caso de Estudio Real (EscapadasTop Chile): Cómo subieron la conversión de 0.9% a 2.4% ganando $58k USD extra al mes.\n• Capítulo 5: La Metodología de Pruebas A/B: Cómo formular hipótesis científicas y medir significancia estadística (95%).\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de CRO y pruebas A/B cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Microsoft Clarity (clarity.microsoft.com): Plataforma oficial de mapas de calor y grabaciones de usuarios 100% gratuita de por vida.\n2. AB Tasty / Evan Miller A/B Calculator: Calculadora matemática de significancia estadística para pruebas A/B.\n3. Figma (figma.com): Diseño visual de la 'Variante B' optimizada para contrastar con la versión de control.",
    ch1CustomNarrative: [
      "En el marketing digital moderno, la obsesión casi exclusiva por el volumen de tráfico genera una ceguera comercial sumamente costosa en la mayoría de las organizaciones.",
      "Las empresas invierten miles de dólares mensuales en atraer visitantes a sus sitios web, ignorando que el 98% de esas personas se marchan sin realizar ninguna acción porque la plataforma tiene fricciones invisibles, textos confusos o botones difíciles de presionar en teléfonos móviles.",
      "El CRO (Conversion Rate Optimization) es la disciplina científica que combina la psicología conductual, el diseño de interfaces y el análisis estadístico para transformar a un mayor porcentaje de los visitantes actuales en compradores de pago.",
      "Aprender a ejecutar proyectos de optimización de conversión te permite desbloquear ríos de facturación oculta en cualquier sitio web sin incrementar el presupuesto publicitario."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO INSTALAR MICROSOFT CLARITY Y AUDITAR LA CONVERSIÓN GRATIS:",
      "Paso 1: Ingresa a Microsoft Clarity (clarity.microsoft.com). Crea tu cuenta gratuita y genera tu código de seguimiento (o instálalo en 1 clic con Google Tag Manager / WordPress / Shopify).",
      "Paso 2: Espera 48 horas para recopilar datos de navegación. Ve a la pestaña \"Dashboard\" y revisa 3 métricas críticas: • Rage Clicks: Usuarios que hacen clic repetidamente con frustración en un elemento roto. • Dead Clicks: Usuarios que hacen clic en un texto o foto pensando que es un botón. • Excessive Scrolling: Usuarios desorientados buscando información básica.",
      "Paso 3: Ve a la pestaña \"Heatmaps (Mapas de Calor)\": Revisa el mapa de scroll en dispositivos móviles para ver cuántos usuarios llegan al botón de compra (si solo el 30% llega al botón, muévelo a la parte superior).",
      "Paso 4: Mira 10 \"Grabaciones de Sesión (Recordings)\" de carritos abandonados para ver en qué campo exacto del formulario los usuarios se rinden y cierran la página.",
      "Paso 5: Diseña en Figma la \"Variante B\" corrigiendo las fallas encontradas y lánzala midiendo la significancia estadística con la calculadora gratuita de Evan Miller."
],
    ch3TacticalSteps: [
      "Semana 1: Instala Microsoft Clarity en tu sitio web y verifica que esté grabando sesiones correctamente.",
      "Semana 2: Analiza los mapas de calor de tu página de producto y anota los 3 puntos de mayor fricción observados.",
      "Semana 3: Diseña la versión optimizada en Figma con botones más visibles y menos campos en el formulario.",
      "Semana 4: Implementa el cambio y compara las tasas de conversión durante 14 días con la calculadora de significancia."
],
    ch4CaseDeepDive: [
      "EscapadasTop en Santiago ofrecía reservas de cabañas con 50,000 visitas al mes pero su tasa de conversión era de solo 0.9%.",
      "Instalaron Microsoft Clarity: las grabaciones revelaron que los usuarios en teléfonos móviles tocaban las fotos pequeñas intentando ampliarlas para ver los baños y dormitorios, y al no poder ampliarlas se frustraban y abandonaban la web.",
      "Además, el botón de 'Reservar Cabaña' estaba al final de un texto largo y solo el 22% de los usuarios hacía scroll hasta allí.",
      "Rediseñaron la página: añadieron una galería de fotos táctil deslizable a pantalla completa y un botón de reserva fijo flotante en la parte inferior del móvil.",
      "La tasa de conversión subió al 2.4% (un incremento del +166%), generando $58,000 USD adicionales en reservas en su primer mes."
],
    ch5RiskMitigation: [
      "Error fatal: Detener una prueba A/B a los 2 días porque 'la nueva versión va ganando' sin tener significancia estadística.",
      "Nunca tomes decisiones con muestras pequeñas de datos: espera a tener al menos 100 conversiones por variante y un 95% de confianza estadística (p-value < 0.05) para asegurar que el resultado no sea fruto del azar.",
      "No cambies 15 cosas a la vez en una misma prueba A/B si tienes poco tráfico: prueba un cambio estructural principal para saber con certeza qué causó la mejora.",
      "Asegúrate de que la prueba se ejecute en todos los navegadores y dispositivos sin desconfigurar la pantalla."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de Conversión Web (CRO), Mapas de Calor en Microsoft Clarity y Pruebas A/B\". Ayuda a e-commerce, plataformas SaaS, clínicas y negocios digitales a duplicar sus ventas optimizando su sitio web actual.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por instalación de Microsoft Clarity + reporte de 5 puntos de fricción detectados en mapas de calor con video en Loom. • Nivel Intermedio (Con portafolio): $140 - $280 USD por auditoría completa de CRO (análisis heurístico de usabilidad, mapas de calor, grabaciones de usuarios, diseño de Variante B en Figma y cálculo de significancia estadística). • Nivel Senior / CRO Lead y Consultor de Optimización de Conversión: $350 - $700 USD por programa continuo de optimización de conversión mensual, pruebas A/B multivariables en Google Tag Manager, personalización de experiencias web y garantía de incremento de ventas.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando la página web de [Empresa] y noté que tienen un excelente tráfico y producto, pero es muy probable que estén perdiendo más del 70% de las ventas por pequeñas fricciones invisibles en el formulario o en la versión móvil (que solo se descubren mirando grabaciones de usuarios reales). Con una Auditoría de CRO usando Microsoft Clarity es posible ver exactamente dónde se atascan los clientes para corregirlo y duplicar tus conversiones sin gastar un solo centavo extra en publicidad. Por solo $50 USD yo te instalo la herramienta y te entrego el informe de mejoras en 48 horas. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Instala Microsoft Clarity en tu propia web o en un sitio demo y familiarízate con los mapas de calor. Día 2: Contacta a 10 tiendas online o plataformas de cursos en LinkedIn y ofréceles una auditoría gratuita de conversión de su página de producto."
],
    quizQuestions: [
      {
            "question": "¿Qué es un 'Rage Click' (Clic de Rabia) en las herramientas de analítica visual como Microsoft Clarity?",
            "options": [
                  "Un clic que borra la base de datos.",
                  "Cuando un usuario hace clic repetidamente y con rapidez en el mismo lugar de la pantalla por frustración porque un botón no responde, un enlace está roto o una imagen no se amplía.",
                  "Un sonido de notificación de la computadora.",
                  "Un clic para cerrar la sesión."
            ],
            "correctIndex": 1,
            "explanation": "Los rage clicks son una de las señales más claras de fricción y error de diseño en una interfaz digital."
      },
      {
            "question": "¿Por qué es tan rentable optimizar la tasa de conversión (CRO) antes de aumentar el gasto en publicidad?",
            "options": [
                  "Porque los anuncios están prohibidos.",
                  "Porque multiplicar la tasa de conversión duplica los ingresos generados por cada visitante existente a costo publicitario cero, haciendo que cualquier inversión futura en pauta sea mucho más rentable.",
                  "Porque el CRO es obligatorio por ley.",
                  "Porque las pruebas A/B regalan dinero en efectivo."
            ],
            "correctIndex": 1,
            "explanation": "El CRO repara las 'fugas del cubo' de ventas antes de verter más agua (tráfico pagado) en el embudo."
      },
      {
            "question": "¿Qué nivel de 'Confianza Estadística' se exige en una prueba A/B para declarar una variante como ganadora legítima?",
            "options": [
                  "Al menos un 95% de nivel de confianza estadística (p-value < 0.05), asegurando matemáticamente que la mejora en ventas no fue un golpe de suerte o azar temporal.",
                  "10%.",
                  "50% (lanzar una moneda al aire).",
                  "Cualquier porcentaje mientras el jefe esté contento."
            ],
            "correctIndex": 0,
            "explanation": "El 95% de confianza estadística es el estándar científico internacional para validar experimentos de negocio."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-4
  // =========================================================================
  'mda-4': {
    frameworkName: "Secuencia de Retargeting Dinámico Escalonado de 3 Fases (Dynamic Omnichannel Retargeting Engine) & Ventanas de Frecuencia",
    coreMetrics: [
      "Retorno del Gasto Publicitario en Retargeting (ROAS Retargeting > 8.0x)",
      "Tasa de Recuperación de Carritos Abandonados (> 28%)",
      "Costo por Adquisición en Audiencias Tibias (CPA -65% vs Tráfico Frío)",
      "Control de Frecuencia de Anuncios (Máximo 2.5 impresiones/día)",
      "Tasa de Clics en Anuncios de Retargeting (CTR Retargeting > 4.5%)"
],
    caseCompany: "Marca de Ropa & Calzado Urbano Sostenible EcoSneakers (Guadalajara, México)",
    caseOutcome: "El 72% de los usuarios que añadían zapatillas al carrito abandonaban la web sin comprar; implementó la Secuencia de Retargeting Escalonado en Meta Ads y Google Display: Días 1-3 (Recordatorio con urgencia), Días 4-7 (Testimonios y fotos de clientes reales), Días 8-14 (Cupón de 10% de descuento por tiempo limitado); recuperó el 31% de los carritos abandonados generando $46,000 USD extra al mes con un ROAS de 9.4x.",
    pitfall: "Mostrar el mismo anuncio genérico de retargeting 40 veces al día durante 3 meses al usuario que ya visitó la web ('Acoso Publicitario'), saturándolo y generando rechazo hacia la marca sin ofrecer incentivos nuevos.",
    actionItem1: "Crear audiencias personalizadas segmentadas por tiempo de recencia en Meta Ads y Google Ads: 1. Visitantes de los últimos 3 días, 2. Visitantes de 4 a 7 días, 3. Visitantes de 8 a 14 días.",
    actionItem2: "Excluir siempre a los compradores de los últimos 30 días de todas las campañas de retargeting para no malgastar presupuesto publicitario en clientes que ya pagaron.",
    actionItem3: "Diseñar creatividades de retargeting diferenciadas en Canva: Día 1-3: \"¿Olvidaste algo en tu carrito?\", Día 4-7: Reseñas de 5 estrellas de clientes, Día 8-14: Cupón exclusivo con caducidad en 48h.",
    domainContext: "Más del 95% de las personas no compran en su primera visita a una web; el retargeting es el sistema que mantiene la conversación abierta y acompaña al cliente hasta que toma la decisión de compra.",
    strategicRationale: "El retargeting convierte el tráfico que ya pagaste por atraer en clientes reales, generando el retorno sobre inversión (ROAS) más alto de todo el ecosistema publicitario.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Alguna vez has visto un par de zapatos o un curso en internet, te fuiste sin comprar y luego ese producto comenzó a aparecer en tu Instagram, en tus noticias y en YouTube como por arte de magia? Eso se llama RETARGETING (o Remarketing). Es la técnica publicitaria más rentable del mundo porque le habla a personas que YA te conocen y que estuvieron a un clic de comprarte. Sin embargo, muchas marcas hacen retargeting de la peor manera: persiguen al usuario con el mismo anuncio aburrido hasta que lo odia. Con la 'Secuencia Escalonada de 3 Fases' y herramientas gratuitas como Meta Audiences y Canva puedes recuperar hasta el 30% de las ventas perdidas. Este tomo te enseña a crear retargeting profesional.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Psicología de la Decisión Postergada: Por qué la gente no compra en la primera visita.\n• Capítulo 2: Las 3 Fases del Retargeting Escalonado: Días 1-3 (Urgencia) -> Días 4-7 (Prueba Social) -> Días 8-14 (Oferta Final).\n• Capítulo 3: Configuración de Audiencias Personalizadas en Meta y Google: Segmentar por días y excluir compradores.\n• Capítulo 4: Caso de Estudio Real (EcoSneakers México): Cómo recuperaron el 31% de carritos con un ROAS de 9.4x.\n• Capítulo 5: Control de Frecuencia y 'Fatiga del Anuncio': Cómo no quemar la paciencia del cliente.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño y configuración de campañas de retargeting cobrando entre $45 y $650 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Meta Ads Manager Audiences: Creación de audiencias personalizadas basadas en tráfico web y eventos de carrito.\n2. Canva (canva.com): Diseño del kit visual de 3 anuncios de retargeting (Recordatorio, Testimonio y Cupón).\n3. Google Ads Audience Manager: Configuración de listas de remarketing dinámico para la Red de Display y YouTube.",
    ch1CustomNarrative: [
      "En el comercio electrónico y la venta de servicios digitales, la inmensa mayoría de las transacciones no ocurren en el primer contacto.",
      "El consumidor moderno vive en un estado continuo de distracción: recibe un mensaje de WhatsApp mientras navega, entra una llamada telefónica o simplemente decide comparar opciones antes de sacar su tarjeta de crédito de la billetera.",
      "Si una empresa no cuenta con una estrategia estructurada de retargeting para volver a conectar con ese usuario interesado, ese cliente potencial se pierde para siempre y la inversión publicitaria realizada para atraerlo se desperdicia por completo.",
      "Aprender a implementar secuencias de retargeting omnicanal te permite acompañar al cliente a lo largo de su proceso de deliberación psicológica, cerrando ventas con una eficiencia de capital asombrosa."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UNA SECUENCIA DE RETARGETING EN META ADS Y CANVA GRATIS:",
      "Paso 1: En el Administrador de Anuncios de Meta, ve a \"Públicos / Audiencias\" -> Crear Audiencia Personalizada -> Sitio Web.",
      "Paso 2: Crea 3 Audiencias Segmentadas por Recencia: • Audiencia 1: Personas que vieron producto o añadieron al carrito en los últimos 3 días. • Audiencia 2: Personas que visitaron la web entre el día 4 y el día 7 (excluyendo a los de 3 días). • Audiencia 3: Personas que visitaron la web entre el día 8 y el día 14 (excluyendo a los de 7 días). • Audiencia de Exclusión Obligatoria: Compradores de los últimos 30 días.",
      "Paso 3: En Canva, diseña los 3 Anuncios Específicos: • Anuncio 1 (Días 1-3): Imagen del producto: \"¿Olvidaste algo? Tu carrito te está esperando antes de que se agote el stock\". • Anuncio 2 (Días 4-7): Carrusel con 3 testimonios de clientes reales con 5 estrellas doradas. • Anuncio 3 (Días 8-14): Imagen con código de descuento: \"Última oportunidad: Usa el código VUELVE10 y obtén 10% OFF solo por 48 horas\".",
      "Paso 4: En la campaña de anuncios, asigna un presupuesto bajo ($2 a $5 USD/día) y limita la frecuencia a máximo 2 impresiones diarias por persona para no saturar al usuario."
],
    ch3TacticalSteps: [
      "Semana 1: Verifica que tu Píxel de Meta y etiqueta de Google estén capturando eventos de 'AddToCart' y 'PageView'.",
      "Semana 2: Crea las 3 audiencias personalizadas por recencia y la audiencia de exclusión de compradores.",
      "Semana 3: Diseña los 3 creativos de la secuencia escalonada en Canva y activa la campaña de retargeting.",
      "Semana 4: Mide el ROAS de la campaña de retargeting y comprueba la reducción en carritos abandonados."
],
    ch4CaseDeepDive: [
      "EcoSneakers en Guadalajara vendía calzado ecológico pero el 72% de los usuarios que iniciaban el checkout se iban sin comprar.",
      "Antes mostraban un solo anuncio genérico de retargeting que se repetía durante meses, logrando un ROAS mediocre de 1.9x.",
      "Implementaron la Secuencia de 3 Fases: recordatorio de stock los primeros 3 días, testimonios de comodidad los días 4 al 7, y cupón de descuento con límite de 48 horas los días 8 al 14.",
      "El 31% de los carritos abandonados fueron recuperados en los primeros 7 días: la empresa generó $46,000 USD adicionales al mes con un ROAS récord de 9.4x."
],
    ch5RiskMitigation: [
      "Error fatal: Olvidar excluir a las personas que ya compraron el producto.",
      "No hay nada más frustrante para un cliente que comprar un producto y que la marca le siga mostrando anuncios de ese mismo producto durante las próximas 3 semanas; añade siempre la audiencia de exclusión 'Purchase - Últimos 30 días'.",
      "Controla la frecuencia publicitaria: una frecuencia superior a 3 impresiones diarias por usuario genera fatiga y enfado.",
      "Establece una fecha límite estricta de 14 a 30 días: si un usuario no compró tras un mes de retargeting, suspende los anuncios para no quemar presupuesto."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Estructuración de Campañas de Retargeting Omnicanal para Recuperación de Carritos y Prospectos\". Ayuda a tiendas de e-commerce, inmobiliarias, academias y empresas de servicios a recuperar clientes perdidos.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por configuración de audiencias personalizadas en Meta Ads + diseño de 3 creatividades de retargeting en Canva. • Nivel Intermedio (Con portafolio): $130 - $270 USD por secuencia completa de retargeting omnicanal escalonado (Meta Ads + Google Display), exclusión de compradores, limitador de frecuencia y reporte de carritos recuperados. • Nivel Senior / Media Buyer Especialista en Retargeting y Lifecycle Marketing: $320 - $650 USD por arquitectura de retargeting dinámico multi-catálogo (DPA), secuencias automatizadas de retargeting por SMS/WhatsApp, atribución multi-toque y optimización continua de ROAS.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve viendo la tienda online de [Empresa] y noté que tienen una gran cantidad de visitas pero como ocurre en el 90% de los e-commerce más del 70% de los carritos se quedan abandonados sin comprar. Con una Secuencia de Retargeting Escalonado en Meta Ads y Google es posible recuperar entre el 20% y el 35% de esas ventas perdidas mostrándoles anuncios con testimonios y cupones solo a las personas que ya estuvieron a punto de pagar (con un ROAS superior a 8x). Por solo $50 USD yo te configuro la campaña completa de recuperación en 48 horas. ¿Te gustaría agendar una llamada de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura las 3 audiencias de retargeting demo en Meta Ads y diseña las imágenes en Canva. Día 2: Contacta a 10 tiendas online en Instagram o Shopify y ofréceles una propuesta gratuita de recuperación de carritos."
],
    quizQuestions: [
      {
            "question": "¿Por qué es crucial 'Excluir a los Compradores Recientes' de las campañas de retargeting publicitario?",
            "options": [
                  "Porque los compradores ya no tienen tarjetas de crédito.",
                  "Para evitar malgastar presupuesto publicitario mostrando anuncios de un producto a alguien que ya lo compró, lo que además genera frustración y una mala experiencia de usuario.",
                  "Porque Facebook cobra una multa por mostrar anuncios a clientes.",
                  "No se deben excluir, hay que mostrarles más anuncios del mismo producto."
            ],
            "correctIndex": 1,
            "explanation": "Excluir compradores protege la inversión publicitaria y respeta la experiencia del cliente tras la compra."
      },
      {
            "question": "¿Cuál es la estructura recomendada en una 'Secuencia de Retargeting Escalonado' de 3 Fases?",
            "options": [
                  "Mostrar el mismo anuncio durante 1 año.",
                  "Días 1 a 3 (Recordatorio del producto con urgencia sutil), Días 4 a 7 (Prueba social con testimonios y opiniones reales) y Días 8 a 14 (Oferta final o cupón de descuento con tiempo límite).",
                  "Pedir que borren su cuenta de internet.",
                  "Llamar por teléfono a las 3 de la mañana."
            ],
            "correctIndex": 1,
            "explanation": "Variar el mensaje según los días transcurridos ataca diferentes ángulos psicológicos sin agotar la paciencia del cliente."
      },
      {
            "question": "¿Por qué las campañas de Retargeting suelen tener un ROAS (Retorno del Gasto Publicitario) mucho más alto que el tráfico frío?",
            "options": [
                  "Porque los anuncios de retargeting son más baratos.",
                  "Porque se dirigen exclusivamente a personas que ya conocen la marca, han mostrado interés activo y estuvieron a punto de comprar, reduciendo drásticamente la resistencia comercial.",
                  "Porque Google regala los clics de retargeting.",
                  "Porque los algoritmos hacen magia."
            ],
            "correctIndex": 1,
            "explanation": "Impactar a audiencias tibias y altamente interesadas maximiza la probabilidad de conversión a una fracción del costo."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-5
  // =========================================================================
  'mda-5': {
    frameworkName: "Arquitectura de Retail Media Omnicanal (Catálogo Dinámico DPA + Anuncios de Inventario Local LIA)",
    coreMetrics: [
      "Retorno de la Inversión en Retail Media (ROAS Omnicanal > 6.0x)",
      "Tasa de Tráfico Físico a Tienda Atribuido (Store Visits Attribution +40%)",
      "Porcentaje de Sincronización de Stock en Tiempo Real (> 99.8%)",
      "Costo por Adquisición de Cliente de Comercio Minorista (eCPA)",
      "Ticket Promedio de Compra Omnicanal (AOV +35% vs Canal Único)"
],
    caseCompany: "Cadena de Tiendas de Calzado & Ropa Deportiva SportZone (Bogotá, Colombia)",
    caseOutcome: "Tenía 12 tiendas físicas y una tienda online desarticuladas; implementó Meta Commerce Manager y Anuncios de Inventario Local de Google (LIA) mostrando a los usuarios de la zona qué modelos y tallas estaban disponibles en la tienda física más cercana a 2 km; incrementó las visitas a tiendas físicas un 85% y las ventas digitales un 130% en 90 días.",
    pitfall: "Gestionar el stock de las tiendas físicas y la tienda online de forma separada, mostrando anuncios de productos agotados o perdiendo ventas locales por no informar al cliente que puede recoger el producto en tienda en 1 hora.",
    actionItem1: "Configurar el catálogo dinámico en Meta Commerce Manager vinculando el feed de inventario para activar tiendas de Instagram y anuncios de colección.",
    actionItem2: "Habilitar los Anuncios de Inventario Local (Local Inventory Ads - LIA) en Google Merchant Center para mostrar stock disponible en tienda física.",
    actionItem3: "Implementar la opción de compra omnicanal 'Click & Collect' (Comprar online y retirar gratis en tienda física en 2 horas).",
    domainContext: "El Retail Media es la convergencia definitiva entre el comercio físico y digital: los consumidores investigan en sus celulares mientras caminan por la calle y compran donde sea más rápido y cómodo.",
    strategicRationale: "Dominar el Retail Media permite a las cadenas minoristas rentabilizar su inventario físico, reducir costos logísticos de envío y multiplicar la frecuencia de compra del consumidor local.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que el 80% de las personas que van a comprar a una tienda física primero revisaron el producto en su celular mientras iban en el transporte público? Las empresas minoristas que solo hacen publicidad digital para envíos a domicilio están perdiendo la mitad de su negocio. El RETAIL MEDIA y los Anuncios de Inventario Local de Google y Meta permiten mostrarle a un usuario en su teléfono exactamente qué productos, tallas y ofertas tienes disponibles en la sucursal física que le queda a 5 cuadras. Con Meta Commerce Manager y Google Merchant Center puedes sincronizar todo tu catálogo gratis. Este tomo te enseña a fusionar tus tiendas físicas con el mundo digital.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Revolución del Retail Media: Cómo competir contra Amazon unificando tiendas físicas y digitales.\n• Capítulo 2: Catálogo Dinámico en Meta Commerce Manager: Tienda en Instagram y anuncios de catálogo para moda y retail.\n• Capítulo 3: Anuncios de Inventario Local de Google (LIA): Mostrar productos disponibles en tienda física en Google Maps.\n• Capítulo 4: Caso de Estudio Real (SportZone Bogotá): Cómo 12 sucursales aumentaron visitas un 85% y ventas un 130%.\n• Capítulo 5: El Modelo 'Click & Collect' (Retiro en Tienda): Cómo ahorrar costos de envío y generar compras por impulso.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer integración de Retail Media y catálogos dinámicos cobrando entre $45 y $650 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Meta Commerce Manager (business.facebook.com/commerce): Panel oficial para gestionar catálogos de productos en Facebook e Instagram.\n2. Google Local Inventory Ads (LIA): Configuración gratuita de stock en tienda física dentro de Google Merchant Center.\n3. Google Sheets: Plantilla Oficial de Feed de Inventario Local Multitienda.",
    ch1CustomNarrative: [
      "En la era del comercio hiperconectado, la vieja dicotomía entre 'tienda física' y 'tienda virtual' ha quedado completamente obsoleta.",
      "El consumidor contemporáneo no reconoce fronteras entre canales: descubre un producto en un anuncio dinámico de Instagram mientras viaja en el metro, verifica en Google si la tienda física cercana tiene su talla disponible, y decide pasar a recogerlo en persona para no esperar tres días de envío.",
      "Las cadenas minoristas que no integran su inventario físico con sus canales publicitarios sufren un doble castigo: queman presupuesto promocionando productos agotados y pierden a los clientes locales que buscan inmediatez.",
      "Aprender a implementar estrategias de Retail Media y anuncios dinámicos de inventario local te permite transformar cada tienda física en un centro logístico inteligente y un imán de ventas de alta rentabilidad."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO SINCRONIZAR METÁ COMMERCE Y GOOGLE LOCAL INVENTORY ADS GRATIS:",
      "Paso 1: Ingresa a Meta Commerce Manager (business.facebook.com/commerce). Crea tu Catálogo de Retail y sube tu feed de productos desde Google Sheets.",
      "Paso 2: Activa las \"Tiendas en Instagram y Facebook\": Configura las etiquetas de producto en tus publicaciones e historias para que los usuarios puedan tocar una prenda y ver el precio y stock en 1 toque.",
      "Paso 3: En el Administrador de Anuncios de Meta, crea una campaña con objetivo \"Ventas del Catálogo\": Selecciona \"Anuncios Dinámicos de Colección (DPA)\" para que el algoritmo muestre automáticamente a cada usuario los productos que estuvo mirando.",
      "Paso 4: En Google Merchant Center, activa el programa \"Anuncios de Inventario Local (LIA)\": Sube la hoja de Google Sheets con el stock por sucursal física (Store Code, SKU, Cantidad y Precio).",
      "Paso 5: Vincula tu perfil de Google Business Profile: Cuando un usuario busque un producto en Google, verá la etiqueta: \"En stock en la tienda de [Tu Sucursal] a 1.5 km\"."
],
    ch3TacticalSteps: [
      "Semana 1: Sube y valida tu catálogo de productos en Meta Commerce Manager en formato Google Sheets.",
      "Semana 2: Activa el etiquetado de productos en tus publicaciones de Instagram y Facebook.",
      "Semana 3: Habilita el feed de inventario local en Google Merchant Center vinculado a tus sucursales de Google Maps.",
      "Semana 4: Lanza tu primera campaña de Anuncios Dinámicos de Catálogo (DPA) con un radio de 5 km alrededor de tus tiendas."
],
    ch4CaseDeepDive: [
      "SportZone en Bogotá contaba con 12 tiendas físicas de calzado deportivo pero sus ventas en mostrador caían porque la gente compraba online en otras plataformas.",
      "Configuraron Meta Commerce Manager y los Anuncios de Inventario Local en Google: los corredores de Bogotá veían anuncios en sus celulares de las zapatillas exactas que estaban en la sucursal de su barrio listas para entrega inmediata.",
      "Implementaron el botón 'Comprar online y retirar en 1 hora en la tienda de Chapinero'.",
      "Las visitas a tiendas físicas aumentaron un 85%, el 42% de los compradores online que retiraban en tienda compraban calcetines o accesorios adicionales en mostrador, y las ventas totales crecieron un 130% en 90 días."
],
    ch5RiskMitigation: [
      "Error fatal: No actualizar el stock en tiempo real y permitir que un cliente compre online un producto que ya se vendió en la tienda física.",
      "Programa la sincronización automática de inventario al menos una vez al día o cada 4 horas para evitar cancelaciones de pedidos por falta de stock.",
      "Asegúrate de que los precios en tienda física y tienda online sean transparentes y no tengan discrepancias inexplicables.",
      "Capacita al personal de la tienda física para atender con amabilidad y rapidez a los clientes que llegan a retirar pedidos de 'Click & Collect'."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Integración de Catálogos de Retail Media en Meta Commerce y Google Local Ads\". Ayuda a tiendas de ropa, calzado, muebles, ferreterías, librerías y comercios multitienda a sincronizar sus inventarios y vender localmente.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por configuración de catálogo en Meta Commerce Manager + activación de tienda en Instagram y etiquetado de 30 productos. • Nivel Intermedio (Con portafolio): $130 - $270 USD por integración completa de Retail Media (Catálogo dinámico en Meta DPA, configuración de Google Local Inventory Ads en Merchant Center y plantilla de inventario en Sheets). • Nivel Senior / Retail Media Strategist y Consultor de Omnicanalidad: $320 - $650 USD por arquitectura integral de comercio unificado para cadenas minoristas (sincronización multi-sucursal con ERP/POS, atribución de visitas a tiendas físicas en Google Ads y optimización de ROAS).",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve viendo los productos de [Empresa] y sé que para comercios minoristas con tiendas físicas competir contra gigantes online es difícil si el cliente no sabe qué productos tienen disponibles en su tienda más cercana. Con la tecnología de Retail Media y Anuncios de Inventario Local en Meta y Google es posible mostrar en el celular de los clientes de tu zona el catálogo en tiempo real con opción de comprar y retirar en 1 hora en tu local físico. Por solo $50 USD yo te configuro el catálogo y la tienda en Instagram en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura un catálogo demo en Meta Commerce Manager y practica creando una tienda en Instagram. Día 2: Contacta a 10 tiendas de ropa, calzado o decoración en tu ciudad y ofréceles una propuesta de catálogo dinámico."
],
    quizQuestions: [
      {
            "question": "¿Qué son los Anuncios de Inventario Local (Local Inventory Ads - LIA) de Google?",
            "options": [
                  "Anuncios que solo se ven en televisión.",
                  "Anuncios visuales de Google que muestran a los usuarios que buscan en su celular qué productos, precios y cantidades exactas están disponibles en la tienda física más cercana a su ubicación actual.",
                  "Folletos de papel repartidos en la calle.",
                  "Un software para cobrar impuestos."
            ],
            "correctIndex": 1,
            "explanation": "Los LIA conectan la búsqueda digital con la compra física inmediata en el establecimiento comercial más cercano."
      },
      {
            "question": "¿Qué ventaja tiene el modelo omnicanal 'Click & Collect' (Comprar online y retirar en tienda)?",
            "options": [
                  "Que los productos son gratuitos.",
                  "Elimina los costos de envío para el cliente, le entrega el producto de inmediato en pocas horas y atrae tráfico físico a la tienda donde el cliente suele realizar compras adicionales por impulso.",
                  "Que no se necesita tener empleados.",
                  "Que cierra la tienda física."
            ],
            "correctIndex": 1,
            "explanation": "El Click & Collect ahorra gastos logísticos y genera ventas cruzadas adicionales en el punto de venta."
      },
      {
            "question": "¿Qué herramienta oficial gratuita permite gestionar tiendas y catálogos de productos en Facebook e Instagram?",
            "options": [
                  "Meta Commerce Manager.",
                  "Bloc de Notas.",
                  "Paint de Windows.",
                  "Calculadora."
            ],
            "correctIndex": 0,
            "explanation": "Meta Commerce Manager es el panel centralizado para gestionar inventarios, etiquetar productos y crear tiendas en redes sociales."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-6
  // =========================================================================
  'mda-6': {
    frameworkName: "Metodología de Account-Based Marketing (ABM) de 3 Capas & Prospección Quirúrgica en LinkedIn B2B",
    coreMetrics: [
      "Tasa de Respuesta en Cuentas Clave Objetivo (ABM Response Rate > 32%)",
      "Valor Promedio de Contrato B2B (ACV - Annual Contract Value > $15,000 USD)",
      "Tiempo de Cierre de Ciclo Comercial B2B (Reducción de Ciclo -40%)",
      "Nivel de Cobertura de Comités de Compra (Decision-Maker Coverage > 4 contactos/cuenta)",
      "Tasa de Éxito en Oportunidades Calificadas a Contrato Ganado (> 38%)"
],
    caseCompany: "Empresa de Ciberseguridad & Protección de Datos Corporativos CyberShield (Santiago, Chile)",
    caseOutcome: "Enviaba correos masivos impersonales a miles de empresas logrando cero reuniones; adoptó la metodología ABM seleccionando a las 40 empresas bancarias y de seguros más grandes de Chile; investigó a sus directores de TI (CIOs) en LinkedIn y les envió informes de vulnerabilidad personalizados de 1 página con un video privado en Loom; cerró 8 contratos corporativos de más de $35,000 USD cada uno en 6 meses.",
    pitfall: "Hacer 'Marketing Masivo de Escopeta' para vender servicios corporativos B2B de alto valor, quemando presupuesto en anuncios genéricos para empresas que no tienen el presupuesto ni el tamaño necesario.",
    actionItem1: "Crear la 'Lista de Cuentas Estratégicas (Target Account List - TAL)' en Notion: seleccionar a las 30 a 50 empresas de tus sueños a las que deseas vender.",
    actionItem2: "Mapear el 'Comité de Compra' de cada cuenta en LinkedIn (identificar a los 3 roles clave: El Usuario del servicio, El Evaluador Técnico y El Aprobador Financiero / CFO).",
    actionItem3: "Diseñar 'Campañas 1 a 1 Hiper-Personalizadas': crear un reporte de auditoría gratuita de 1 página o video en Loom exclusivo para el director general de esa empresa.",
    domainContext: "En el marketing B2B corporativo (servicios de más de $5,000 USD), no le vendes a 'audiencias masivas': le vendes a cuentas empresariales específicas y a personas con nombre y apellido dentro de comités de compra.",
    strategicRationale: "El ABM (Account-Based Marketing) concentra el 100% de los recursos de marketing y ventas en las cuentas con mayor potencial de ingresos, maximizando la tasa de éxito y el valor por contrato.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Intentas vender software corporativo, consultoría empresarial, maquinaria pesada o servicios legales de $10,000 dólares con anuncios en Facebook? ¡Estás tirando tu dinero a la basura! En el mundo empresarial B2B nadie compra servicios caros por un anuncio en redes sociales. Las grandes ventas corporativas se ganan con ACCOUNT-BASED MARKETING (ABM): la técnica de pesca con arpón en lugar de pesca con red. Eliges a las 30 empresas de tus sueños, investigas a sus directores en LinkedIn y les envías propuestas personalizadas que resuelven sus problemas específicos. Con herramientas como LinkedIn y Notion puedes cerrar contratos millonarios. Este tomo te enseña a hacer ABM corporativo.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Muerte del Marketing Masivo en B2B: Pesca con red vs. Pesca con arpón.\n• Capítulo 2: Las 3 Capas del ABM: Estratégico (1 a 1), Escala Selectiva (1 a Pocos) y Programático (1 a Muchos).\n• Capítulo 3: Mapeo del Comité de Compra en LinkedIn: Quién decide, quién evalúa y quién firma el cheque.\n• Capítulo 4: Caso de Estudio Real (CyberShield Chile): Cómo cerraron 8 contratos de $35,000 USD con ABM.\n• Capítulo 5: La Auditoría Personalizada de 1 Página en Canva/Loom: El caballo de Troya que abre reuniones.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría y campañas de Account-Based Marketing cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. LinkedIn (linkedin.com): Búsqueda avanzada gratuita de ejecutivos de comités de compra por cargo y empresa.\n2. Notion (notion.so): CRM de Cuentas Clave ABM y Matriz de Seguimiento de Comités de Decisión.\n3. Loom (loom.com): Grabación de videos ejecutivos personalizados de 3 minutos para directivos.",
    ch1CustomNarrative: [
      "En los modelos de negocio entre empresas (B2B) donde los contratos superan los miles o cientos de miles de dólares, las reglas del marketing digital tradicional cambian de forma radical.",
      "Pretender captar a directores generales de bancos, gerentes de logística de navieras o directores de tecnología de aseguradoras mediante anuncios masivos o publicaciones virales es una ilusión ineficiente.",
      "En el sector corporativo, las decisiones de compra no las toma un individuo impulsivo: las delibera un 'Comité de Compra' compuesto por ingenieros, abogados y directores financieros que analizan el riesgo operativo con extrema cautela.",
      "El Account-Based Marketing (ABM) trata a cada empresa objetivo como si fuera un mercado individual completo, alineando la investigación profunda, el contenido a medida y la prospección ejecutiva para derribar objeciones y cerrar acuerdos de alto valor.",
      "Aprender a ejecutar campañas de ABM te posiciona como un asesor estratégico de primer nivel capaz de abrir las puertas de las empresas más exclusivas de tu país."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UNA ESTRATEGIA ABM EN LINKEDIN Y NOTION GRATIS:",
      "Paso 1: Abre Notion (notion.so) y crea la base de datos \"Target_Account_List_ABM\". Selecciona tus 30 empresas soñadas en tu ciudad o país (ej. \"Las 30 principales cadenas de farmacias\").",
      "Paso 2: En LinkedIn, busca a los 3 integrantes del Comité de Compra de cada empresa: • 1. El Champion / Usuario (ej. Gerente de Operaciones). • 2. El Evaluador Técnico (ej. Director de TI). • 3. El Aprobador Económico (ej. Director Financiero / CFO).",
      "Paso 3: Crea el \"Caballo de Troya de Alto Valor\": Diseña en Canva un reporte de 1 página llamado \"Diagnóstico_Eficiencia_[NombreEmpresa].pdf\" analizando una oportunidad de ahorro o mejora real de su negocio.",
      "Paso 4: Graba un video en Loom (loom.com) de 3 minutos compartiendo la pantalla: \"Hola [Nombre], preparé este análisis exclusivo para [Empresa] donde identificamos 3 puntos donde están perdiendo tiempo en logística y cómo solucionarlo en 15 días\".",
      "Paso 5: Envía el mensaje personalizado por LinkedIn o correo ejecutivo: la tasa de respuesta en ABM supera el 30% porque el directivo ve que invertiste tiempo en investigar su negocio específico."
],
    ch3TacticalSteps: [
      "Semana 1: Selecciona a tus 30 cuentas objetivo ideales (empresas con más de 50 empleados o alta facturación).",
      "Semana 2: Mapea en Notion a los 3 contactos clave de cada una de las 30 empresas en LinkedIn.",
      "Semana 3: Graba 5 videos personalizados en Loom a la semana con diagnósticos reales de alto valor.",
      "Semana 4: Realiza seguimiento comercial a las respuestas recibidas y agenda demostraciones ejecutivas."
],
    ch4CaseDeepDive: [
      "CyberShield en Santiago vendía servicios de ciberseguridad corporativa por $35,000 USD pero sus correos masivos a listas compradas iban directo a la papelera de reciclaje.",
      "Adoptaron la metodología ABM: seleccionaron a 40 directores de TI de instituciones financieras y de salud.",
      "En lugar de intentar venderles, el equipo técnico analizó públicamente los certificados de seguridad de sus páginas y les envió un reporte privado de 1 página alertándoles de una fuga potencial de datos.",
      "14 de los 40 directores respondieron agradeciendo el aviso y agendaron una llamada de emergencia; la empresa cerró 8 contratos corporativos en 6 meses facturando $280,000 USD con una inversión en herramientas de cero dólares."
],
    ch5RiskMitigation: [
      "Error fatal: Enviar mensajes 'personalizados falsos' que son plantillas genéricas automatizadas donde solo se cambia el nombre.",
      "Los directores corporativos detectan las plantillas automatizadas en 2 segundos; el verdadero ABM requiere investigación genuina y aportes de valor específicos para esa empresa particular.",
      "No contactes a un solo directivo: si contactas solo al Gerente de TI y este renuncia, la oportunidad se muere; contacta a múltiples miembros del comité.",
      "Ten paciencia: los ciclos de venta B2B de alto valor tardan entre 60 y 180 días; mantén el contacto aportando informes de valor mensuales."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Estrategia y Ejecución de Campañas de Account-Based Marketing (ABM) B2B\". Ayuda a empresas de software, consultoría, ingeniería, logística y servicios corporativos a cerrar clientes de alto valor.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por mapeo de 20 cuentas objetivo y comités de compra en LinkedIn + base de datos en Notion. • Nivel Intermedio (Con portafolio): $140 - $280 USD por campaña integral de ABM para 30 cuentas estratégicas (investigación de comités, redacción de 5 reportes personalizados de 1 página en Canva y secuencias de prospección en Loom). • Nivel Senior / Consultor de ABM y Ventas Complejas B2B: $350 - $700 USD por programa de transformación comercial ABM, alineación de marketing y ventas (Smarketing), personalización de contenidos para cuentas Enterprise y gobernanza de CRM.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], sé que para empresas de servicios B2B como [Empresa] hacer publicidad masiva en redes suele traer prospectos pequeños o curiosos sin presupuesto. Con la metodología de Account-Based Marketing (ABM) en LinkedIn y Notion es posible seleccionar a las 30 empresas más grandes de tu país e investigarlas para abrir reuniones directamente con sus directores generales y cerrar contratos corporativos de alto valor. Por solo $50 USD yo te selecciono las 30 cuentas clave y te mapeo sus comités de decisión en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de cuentas ABM en Notion y practica mapeando 5 empresas en LinkedIn. Día 2: Contacta a 10 gerentes de empresas B2B en LinkedIn y ofréceles una lista gratuita de 10 cuentas estratégicas para su nicho."
],
    quizQuestions: [
      {
            "question": "¿En qué se diferencia el Account-Based Marketing (ABM) del marketing digital tradicional masivo?",
            "options": [
                  "El ABM es más barato en impuestos.",
                  "El marketing tradicional lanza mensajes genéricos a audiencias masivas esperando que alguien compre, mientras que el ABM trata a un grupo seleccionado de empresas clave como mercados individuales, hiper-personalizando la investigación y el mensaje para su comité de compra.",
                  "El ABM solo funciona los fines de semana.",
                  "El marketing tradicional no usa internet."
            ],
            "correctIndex": 1,
            "explanation": "El ABM sustituye la 'pesca con red' masiva por la 'pesca con arpón' de alta precisión en cuentas de gran valor."
      },
      {
            "question": "¿Qué es un 'Comité de Compra' en las ventas corporativas B2B?",
            "options": [
                  "Un grupo de amigos que salen de compras.",
                  "El grupo multidisciplinario de directivos dentro de una empresa (Usuario, Evaluador Técnico y Aprobador Financiero / CFO) que evalúan y aprueban de forma conjunta una compra de alto valor.",
                  "El sindicato de trabajadores de una fábrica.",
                  "Un departamento del gobierno."
            ],
            "correctIndex": 1,
            "explanation": "En ventas B2B complejas, cerrar un contrato requiere convencer a todos los miembros clave del comité de decisión."
      },
      {
            "question": "¿Por qué un video personalizado de 3 minutos en Loom es tan efectivo para contactar a directivos en ABM?",
            "options": [
                  "Porque Loom es una red social de entretenimiento.",
                  "Porque demuestra que el remitente dedicó tiempo real y exclusivo a investigar la empresa del directivo, aportando un diagnóstico visual concreto que genera curiosidad y respeto profesional inmediato.",
                  "Porque los videos de Loom se borran solos.",
                  "Porque es obligatorio enviar videos por ley."
            ],
            "correctIndex": 1,
            "explanation": "La personalización genuina en video rompe los filtros ejecutivos y genera tasas de respuesta muy superiores a los correos fríos."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-7
  // =========================================================================
  'mda-7': {
    frameworkName: "El Embudo Pirata AARRR (Acquisition, Activation, Retention, Referral, Revenue) & Bucles Virales de Growth Hacking",
    coreMetrics: [
      "Coeficiente Viral del Producto (K-Factor > 1.2 Crecimiento Exponencial)",
      "Tasa de Activación del 'Momento Ajá' (Time to Aha! Moment < 5 minutos)",
      "Tasa de Retención de Cohortes a 30 Días (Retention Curve > 45%)",
      "Velocidad de Experimentación de Growth (Mínimo 3 experimentos/semana)",
      "Puntuación de Priorización de Experimentos (Score ICE > 8.0)"
],
    caseCompany: "Plataforma de Clases de Idiomas en Vivo por Suscripción HablaFácil (Medellín, Colombia)",
    caseOutcome: "Gastaba $5,000 USD mensuales en anuncios con un costo de adquisición muy alto; aplicó el Embudo Pirata AARRR: redujo el tiempo del 'Momento Ajá' permitiendo una clase de prueba de 10 minutos sin pedir tarjeta de crédito, e implementó un 'Bucle Viral de Referidos' (1 mes gratis por invitar a 2 amigos); el 38% de los nuevos alumnos llegaron por recomendación orgánica y su base de usuarios creció de 400 a 4,500 estudiantes en 5 meses.",
    pitfall: "Confundir el Growth Hacking con 'trucos mágicos o spam ilegal', o gastar todo el dinero en Adquisición de nuevos usuarios cuando el producto tiene una fuga masiva en Retención (los usuarios se van a los 3 días).",
    actionItem1: "Mapear las 5 Etapas del Embudo Pirata AARRR en Miro o Notion: Adquisición, Activación, Retención, Referidos e Ingresos.",
    actionItem2: "Identificar y optimizar el 'Momento Ajá' (el instante exacto en que el usuario experimenta por primera vez el valor real del producto en menos de 5 minutos).",
    actionItem3: "Priorizar los experimentos de crecimiento utilizando la 'Matriz ICE' en Google Sheets (Impacto x Confianza x Facilidad de Ejecución).",
    domainContext: "El Growth Hacking es la intersección entre el marketing, la analítica de datos y la ingeniería de producto; su objetivo es encontrar las palancas de mayor apalancamiento para crecer de forma exponencial y sostenible con recursos limitados.",
    strategicRationale: "Implementar bucles virales y optimizar la retención crea un motor de crecimiento auto-sostenible donde cada cliente adquirido atrae orgánicamente a nuevos clientes, reduciendo el CAC a casi cero.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Cómo empresas como Dropbox, Airbnb o Uber pasaron de ser pequeños proyectos de garaje a gigantes mundiales multimillonarios sin gastar presupuestos millonarios en publicidad tradicional? La respuesta es el GROWTH HACKING. No hicieron anuncios de televisión: crearon sistemas de crecimiento dentro del propio producto (como Dropbox regalando 500 MB de espacio gratis por invitar a un amigo). Sean Ellis creó la metodología del 'Embudo Pirata AARRR' y la 'Matriz ICE' para probar experimentos rápidos de bajo costo cada semana. Con herramientas gratuitas como Miro y Google Sheets puedes aplicar Growth Hacking a cualquier PYME. Este tomo te enseña a hackear tu crecimiento.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Filosofía del Growth Hacking: Por qué el marketing tradicional es demasiado lento y caro.\n• Capítulo 2: El Embudo Pirata AARRR: Adquisición -> Activación (Momento Ajá) -> Retención -> Referidos -> Ingresos.\n• Capítulo 3: El 'Momento Ajá' (Aha! Moment): Cómo hacer que el cliente se enamore de tu producto en menos de 5 minutos.\n• Capítulo 4: Caso de Estudio Real (HablaFácil Medellín): Cómo pasaron de 400 a 4,500 alumnos con bucles de referidos.\n• Capítulo 5: La Matriz ICE en Google Sheets: Cómo priorizar 10 ideas de crecimiento por Impacto, Confianza y Facilidad.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría y sprints de Growth Hacking cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Notion (notion.so) / Miro: Tablero Oficial de Experimentos de Growth Hacking y Embudo Pirata AARRR.\n2. Google Sheets: Plantilla Oficial de la Matriz de Priorización ICE (Impact, Confidence, Ease).\n3. Viral Loops / ReferralCandy (Pruebas gratuitas): Diseño de mecánicas de bucles de referidos.",
    ch1CustomNarrative: [
      "En el vertiginoso ecosistema de las startups y los negocios de alto crecimiento, las viejas metodologías del marketing corporativo tradicional resultan demasiado lentas, burocráticas y costosas.",
      "El término Growth Hacking, acuñado por Sean Ellis, surgió de una necesidad imperiosa: ¿cómo puede una empresa con presupuestos limitados superar a competidores gigantescos que gastan millones en publicidad?.",
      "La respuesta no reside en gastar más dinero, sino en experimentar más rápido: someter a prueba hipótesis comerciales continuas a lo largo de todo el embudo del producto, utilizando la creatividad, la automatización y los datos para descubrir canales de tracción no convencionales.",
      "Aprender a pensar como un Growth Hacker te permite transformar las restricciones presupuestarias en una ventaja competitiva brutal basada en la agilidad y el aprendizaje continuo."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UN SISTEMA DE GROWTH HACKING EN NOTION Y SHEETS GRATIS:",
      "Paso 1: Abre Notion (notion.so) y diseña el \"Tablero_Embudo_Pirata_AARRR\": • A (Adquisición): ¿Cómo nos descubren? (Meta Ads, SEO, TikTok). • A (Activación): ¿Cuándo sienten el valor por primera vez? (Completar su primer reporte o clase demo en < 5 min). • R (Retención): ¿Por qué vuelven la próxima semana? (Notificaciones y valor acumulado). • R (Referidos): ¿Cómo invitan a sus amigos? (Bono por invitar a un colega). • R (Revenue/Ingresos): ¿Cuándo y cómo pagan?.",
      "Paso 2: En Google Sheets, crea la \"Matriz_Priorizacion_ICE\": Columnas: Idea de Experimento, Impacto (1 al 10), Confianza (1 al 10), Facilidad de Implementación (1 al 10) y Puntuación ICE Media: =(Impacto+Confianza+Facilidad)/3.",
      "Paso 3: Selecciona cada semana las 2 ideas con mayor puntuación ICE (ej. \"Añadir botón de invitar a un colega al terminar el examen con 1 mes gratis\").",
      "Paso 4: Ejecuta el experimento durante 7 días: mide las métricas antes y después; si funciona, conviértelo en una función permanente del negocio; si fracasa, descártalo sin costo y pasa a la siguiente idea."
],
    ch3TacticalSteps: [
      "Semana 1: Mapea tu embudo AARRR actual e identifica cuál de las 5 fases tiene el peor rendimiento.",
      "Semana 2: Haz una lluvia de ideas de 10 experimentos de bajo costo y califícalos en tu Matriz ICE en Google Sheets.",
      "Semana 3: Implementa el experimento con mayor puntuación ICE (ej. optimizar la pantalla de activación).",
      "Semana 4: Analiza los resultados del sprint semanal de crecimiento y documenta el aprendizaje en Notion."
],
    ch4CaseDeepDive: [
      "HablaFácil en Medellín ofrecía clases de idiomas por internet pero gastaba $5,000 USD al mes en anuncios y los nuevos estudiantes se daban de baja tras el primer mes.",
      "Un análisis del embudo AARRR reveló que el problema estaba en la Activación: exigían al usuario descargar una app pesada y llenar un test de 40 preguntas antes de ver a un profesor.",
      "Hackearon el proceso: eliminaron el test y permitieron entrar a una videollamada de 10 minutos con un profesor nativo en 1 clic desde el navegador (Momento Ajá inmediato).",
      "Además, implementaron un bucle de referidos: 'Regala una clase gratis a un amigo y gana 1 mes con 50% de descuento'.",
      "El coeficiente viral subió a 1.3, su costo de adquisición cayó un 60% y crecieron de 400 a 4,500 suscriptores en solo 5 meses."
],
    ch5RiskMitigation: [
      "Error fatal: Enfocarse en la Adquisición cuando el producto no tiene Retención ('Llenar un cubo con agujeros en el fondo').",
      "Si los usuarios que llegan a tu web o app la abandonan y no regresan nunca, ningún hack de adquisición salvará el negocio; arregla primero la activación y la satisfacción del producto antes de pisar el acelerador publicitario.",
      "No hagas experimentos que tarden 3 meses en implementarse: los experimentos de growth hacking deben poder lanzarse en menos de 48 a 72 horas.",
      "Mantén la ética: no uses 'Dark Patterns' (patrones engañosos o cargos ocultos) que dañen la reputación de la marca."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Consultoría de Growth Hacking y Diseño de Bucles Virales para Startups/PYMEs\". Ayuda a plataformas de suscripción, e-commerce, apps móviles y negocios digitales a acelerar su crecimiento sin quemar capital.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por mapeo del Embudo Pirata AARRR en Notion + diseño de Matriz ICE con 10 experimentos en Google Sheets. • Nivel Intermedio (Con portafolio): $140 - $280 USD por sprint mensual de Growth Hacking (optimización del Momento Ajá de activación, diseño de mecánica de bucle viral de referidos y ejecución de 4 experimentos rápidos). • Nivel Senior / Head of Growth y Consultor de Escalamiento Acelerado: $350 - $700 USD por programa integral de Growth Engineering, optimización de retención de cohortes, arquitectura de programas de referidos gamificados y dirección de equipos de experimentación.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando el modelo de crecimiento de [Empresa] y sé que muchas veces las empresas dependen exclusivamente de gastar más dinero en publicidad pagada para crecer (lo que encarece los costos a medida que el negocio escala). Con la metodología de Growth Hacking y el Embudo Pirata AARRR en Notion y Sheets es posible identificar palancas de bajo costo dentro de tu propio producto (como la optimización del 'Momento Ajá' y bucles de referidos) para multiplicar tus usuarios orgánicos. Por solo $50 USD yo te mapeo tu embudo AARRR y te entrego la Matriz ICE con 10 experimentos priorizados en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de la Matriz ICE en Google Sheets y el tablero AARRR en Notion. Día 2: Contacta a 10 fundadores de startups o plataformas digitales en LinkedIn y ofréceles una sesión gratuita de mapeo de crecimiento."
],
    quizQuestions: [
      {
            "question": "¿Cuáles son las 5 etapas del 'Embudo Pirata AARRR' de Sean Ellis en Growth Hacking?",
            "options": [
                  "Aprender, Analizar, Resolver, Revisar y Repetir.",
                  "Adquisición (cómo te conocen), Activación (primera experiencia de valor o Momento Ajá), Retención (por qué regresan), Referidos (cómo recomiendan a otros) e Ingresos / Revenue (cómo monetizas).",
                  "Anuncios, Algoritmos, Redes, Robots y Rendimiento.",
                  "Abrir, Atender, Registrar, Reclamar y Recaudar."
            ],
            "correctIndex": 1,
            "explanation": "El acrónimo AARRR mapea todas las palancas de crecimiento de un producto digital desde el descubrimiento hasta la recomendación viral."
      },
      {
            "question": "¿Qué es el 'Momento Ajá' (Aha! Moment) dentro de la etapa de Activación de un producto?",
            "options": [
                  "Cuando el usuario se sorprende por un precio caro.",
                  "El instante exacto en que un nuevo usuario experimenta por primera vez y de forma intuitiva el valor y beneficio real del producto, sintiendo la revelación de por qué lo necesita en su vida.",
                  "El sonido de error de la computadora.",
                  "Un concurso de televisión."
            ],
            "correctIndex": 1,
            "explanation": "Llevar al usuario al Momento Ajá en el menor tiempo posible es el secreto para maximizar la activación y evitar el abandono prematuro."
      },
      {
            "question": "¿Qué evalúa la 'Matriz ICE' para priorizar experimentos de crecimiento en una empresa?",
            "options": [
                  "El consumo de electricidad de las computadoras.",
                  "Impacto (cuánto aumentará las ventas), Confianza (qué tan seguros estamos de que funcionará) y Facilidad / Ease (qué tan rápido y sencillo es de implementar en horas de trabajo).",
                  "Impuestos, Contabilidad y Empleados.",
                  "Inglés, Computación y Economía."
            ],
            "correctIndex": 1,
            "explanation": "La puntuación ICE permite ordenar objetivamente decenas de ideas creativas para ejecutar primero las más rápidas y rentables."
      }
]
  },

  // =========================================================================
  // BOOK ID: mda-8
  // =========================================================================
  'mda-8': {
    frameworkName: "Modelos de Atribución Basados en Datos (Data-Driven Attribution) & Seguimiento del Lado del Servidor (Server-Side GTM)",
    coreMetrics: [
      "Precisión de Captura de Eventos de Conversión (> 98.5% post-bloqueadores)",
      "Reducción de Discrepancias entre CRM y Plataformas Publicitarias (< 5%)",
      "Modelado de Atribución Multi-Toque (Data-Driven Attribution en GA4)",
      "Puntuación de Coincidencia de Clientes de la API de Meta (EMQ > 8.5/10)",
      "Optimización de Presupuesto Publicitario gracias a Datos Reales (+25% ROAS)"
],
    caseCompany: "Plataforma de Educación Financiera & Cursos Certificados FinanzasPro (Lima, Perú)",
    caseOutcome: "Con los bloqueadores de cookies de iOS y Chrome perdía el 35% de los datos de ventas en Google y Meta, lo que hacía que los algoritmos optimizaran a ciegas; implementó Server-Side Tag Manager y la API de Conversiones de Meta vinculada a Google Analytics 4; recuperó el 100% de la atribución de ventas; el algoritmo de Meta identificó a compradores reales y su ROAS aumentó de 2.2x a 4.6x.",
    pitfall: "Confiar exclusivamente en el seguimiento tradicional del navegador ('Client-Side Pixel'), perdiendo más del 30% de los datos de conversión debido a bloqueadores de anuncios (AdBlockers), restricciones de cookies de terceros y normativas de privacidad.",
    actionItem1: "Configurar Google Analytics 4 utilizando el modelo oficial de 'Atribución Basada en Datos (Data-Driven)' que asigna crédito fraccional a cada punto de contacto del viaje del cliente.",
    actionItem2: "Implementar la API de Conversiones de Meta (CAPI) y Google Enhanced Conversions mediante Server-Side Google Tag Manager.",
    actionItem3: "Verificar en el Administrador de Eventos que la 'Calidad de Coincidencia de Eventos' (Event Match Quality - EMQ) de Meta supere los 8.0 puntos sobre 10.",
    domainContext: "En la era post-cookies y de máxima privacidad digital, la ventaja competitiva en publicidad ya no reside en los trucos de segmentación, sino en la calidad y precisión de los datos que alimentan a los algoritmos de inteligencia artificial.",
    strategicRationale: "El seguimiento del lado del servidor blinda la medición de la empresa contra bloqueadores de cookies, alimenta a los algoritmos con datos limpios y maximiza el retorno de la inversión publicitaria.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que debido a las actualizaciones de privacidad de Apple (iOS) y a los bloqueadores de anuncios (AdBlock), más del 30% de las ventas que ocurren en tu sitio web NUNCA son registradas por Facebook ni por Google Ads? Esto significa que los algoritmos de publicidad están optimizando 'a ciegas', gastando tu dinero en prospectos equivocados porque no saben quién compró realmente. El SEGUIMIENTO DEL LADO DEL SERVIDOR (Server-Side Tracking) y la Atribución Basada en Datos en Google Analytics 4 envían la información directamente desde tu servidor web sin pasar por el navegador del usuario, recuperando el 100% de la precisión de datos. Este tomo te enseña la analítica más avanzada.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Muerte de las Cookies de Terceros: Por qué los píxeles tradicionales del navegador ya no son suficientes.\n• Capítulo 2: Los Modelos de Atribución: Último Clic vs. Primer Clic vs. Atribución Basada en Datos (Data-Driven).\n• Capítulo 3: Configuración de Server-Side Tracking en Google Tag Manager y Meta CAPI Gratis.\n• Capítulo 4: Caso de Estudio Real (FinanzasPro Lima): Cómo recuperar el 100% de datos duplicó su ROAS a 4.6x.\n• Capítulo 5: La Puntuación EMQ de Meta: Cómo enviar datos hash cifrados para tener una calidad de 9/10.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer implementación de Server-Side Tracking y GA4 cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Analytics 4 (analytics.google.com): Plataforma oficial con modelo de Atribución Basada en Datos gratuito.\n2. Google Tag Manager (tagmanager.google.com): Contenedor Server-Side y Web para gestión avanzada de etiquetas.\n3. Meta Conversions API (CAPI Gateway / Integración de Socios): Conexión directa del servidor para envío de eventos seguros.",
    ch1CustomNarrative: [
      "El ecosistema del marketing digital ha experimentado su mayor transformación estructural en la última década debido al endurecimiento de las regulaciones de privacidad global y al bloqueo masivo de cookies de terceros por parte de los principales navegadores y sistemas operativos.",
      "Las empresas que continúan dependiendo exclusivamente de scripts de seguimiento tradicionales ejecutados en el navegador del cliente (Client-Side Tracking) operan con una pérdida sistemática de más de un tercio de sus datos comerciales.",
      "Cuando las plataformas publicitarias como Meta Ads o Google Ads no reciben los datos de las transacciones reales, sus motores de aprendizaje automático se descalibran y comienzan a mostrar anuncios a audiencias irrelevantes, elevando drásticamente el costo de adquisición.",
      "Aprender a implementar arquitecturas de seguimiento del lado del servidor (Server-Side Tracking) y dominar la atribución algorítmica multitáctil te posiciona en la élite técnica del marketing digital contemporáneo."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONFIGURAR ATRIBUCIÓN DATA-DRIVEN Y SERVER-SIDE EN GA4 Y GTM GRATIS:",
      "Paso 1: Ingresa a Google Analytics 4 (analytics.google.com). Ve a Administrar -> Visualización de Datos -> Configuración de Atribución -> Selecciona \"Modelo de Atribución Basado en Datos (Data-Driven)\" como modelo predeterminado de informes.",
      "Paso 2: En GA4, ve a \"Conversiones / Eventos clave\" y marca el evento \"purchase\" o \"generate_lead\" como evento clave oficial.",
      "Paso 3: En Meta Business Manager, ve al Administrador de Eventos -> Configuración -> \"API de Conversiones (CAPI)\" -> Selecciona \"Configurar con integración de socios (Shopify / WordPress / WooCommerce)\".",
      "Paso 4: Activa la \"Coincidencia Avanzada Automática\": Esto envía de forma segura y cifrada (SHA-256) el correo electrónico y teléfono del comprador directamente desde el servidor.",
      "Paso 5: Verifica que la \"Calidad de Coincidencia de Eventos (EMQ)\" supere los 8.5 puntos sobre 10: el algoritmo de Meta optimizará la entrega de tus anuncios con precisión matemática absoluta."
],
    ch3TacticalSteps: [
      "Semana 1: Revisa en Google Analytics 4 que tu modelo de atribución esté configurado en 'Basado en Datos'.",
      "Semana 2: Activa la API de Conversiones de Meta (CAPI) a través de la integración de socio de tu plataforma web.",
      "Semana 3: Configura Google Enhanced Conversions (Conversiones Mejoradas) en Google Ads para recuperar datos de búsqueda.",
      "Semana 4: Compara a fin de mes las ventas reportadas en tu CRM con las registradas en GA4 y verifica una discrepancia menor al 5%."
],
    ch4CaseDeepDive: [
      "FinanzasPro en Lima vendía cursos de inversión online pero sus campañas de Meta Ads tenían un ROAS estancado en 2.2x porque los bloqueadores de anuncios de los navegadores ocultaban el 35% de las compras.",
      "El algoritmo de Meta creía erróneamente que los anuncios no estaban vendiendo y subía el costo por clic.",
      "Implementaron Server-Side Tracking y la API de Conversiones de Meta junto con la Atribución Basada en Datos de GA4.",
      "La tasa de eventos capturados subió al 99.2% y la puntuación de coincidencia EMQ llegó a 9.1/10: el algoritmo de Meta aprendió exactamente qué perfiles compraban y reorientó la pauta publicitaria.",
      "En 60 días su ROAS se disparó de 2.2x a 4.6x, duplicando la rentabilidad neta de la academia con el mismo presupuesto publicitario."
],
    ch5RiskMitigation: [
      "Error fatal: Enviar eventos duplicados (recibir el evento por el navegador y por el servidor sin deduplicación).",
      "Configura siempre el parámetro 'event_id' único tanto en el píxel del navegador como en la API de conversiones del servidor para que Meta y Google eliminen los duplicados y cuenten cada compra una sola vez.",
      "Cumple estrictamente con las normativas de privacidad: no envíes datos personales sin cifrado hash SHA-256.",
      "Revisa semanalmente el Administrador de Eventos para detectar posibles caídas de conexión de la API del servidor."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Implementación de Modelos de Atribución en GA4 y Server-Side Tracking con GTM\". Ayuda a empresas de e-commerce, academias, agencias de viajes y plataformas digitales a blindar su medición publicitaria.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por configuración de GA4 con Atribución Data-Driven + activación básica de Meta CAPI en Shopify/WooCommerce. • Nivel Intermedio (Con portafolio): $140 - $280 USD por arquitectura completa de medición avanzada (Google Enhanced Conversions en Google Ads, Meta Conversions API con deduplicación por event_id, auditoría de EMQ > 8.0 y eventos personalizados en GTM). • Nivel Senior / Tracking Specialist y Consultor de Analítica Avanzada: $350 - $700 USD por despliegue de contenedor Server-Side en Google Cloud Platform (GCP), modelos de atribución multicanal personalizados, gobierno de datos y cuadro de mando en Looker Studio.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando la configuración de medición digital de [Empresa] y sé que con las restricciones recientes de iOS y bloqueadores de cookies más del 30% de las ventas web no están llegando a los algoritmos de Facebook y Google Ads (lo que encarece los costos de tus anuncios porque las plataformas optimizan a ciegas). Con una implementación de Server-Side Tracking y la API de Conversiones de Meta es posible recuperar el 100% de la precisión de datos para que los algoritmos encuentren a los mejores compradores y dupliquen tu ROAS. Por solo $50 USD yo te configuro la API de Conversiones y GA4 Data-Driven en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la API de Conversiones demo en una tienda de Shopify/WordPress y verifica la puntuación EMQ. Día 2: Contacta a 10 e-commerce o academias online en LinkedIn y ofréceles una auditoría gratuita de su calidad de eventos de píxel."
],
    quizQuestions: [
      {
            "question": "¿Por qué el 'Seguimiento del Lado del Servidor' (Server-Side Tracking / CAPI) es superior al píxel tradicional del navegador?",
            "options": [
                  "Porque el servidor es más barato.",
                  "Porque envía los datos de conversión directamente desde el servidor web hacia las plataformas publicitarias, evitando bloqueadores de anuncios (AdBlockers) y restricciones de cookies del navegador para recuperar el 100% de la precisión de datos.",
                  "Porque reemplaza a los programadores.",
                  "Porque borra el historial de navegación."
            ],
            "correctIndex": 1,
            "explanation": "El seguimiento por servidor blinda la medición contra bloqueos y entrega datos limpios y completos a los algoritmos de pauta."
      },
      {
            "question": "¿Qué es el 'Modelo de Atribución Basado en Datos' (Data-Driven Attribution) en Google Analytics 4?",
            "options": [
                  "Un modelo que inventa los datos.",
                  "Un modelo algorítmico avanzado que analiza todos los puntos de contacto que recorrió el usuario antes de comprar y asigna un crédito proporcional y justo a cada canal en función de su impacto real en la conversión final.",
                  "Un modelo que solo le da crédito al primer anuncio que vio el cliente.",
                  "Un modelo exclusivo para bancos."
            ],
            "correctIndex": 1,
            "explanation": "Data-Driven Attribution supera al simplista 'último clic' reconociendo la contribución de todo el embudo de marketing."
      },
      {
            "question": "¿Qué función cumple el parámetro 'event_id' al combinar el píxel del navegador con la API de Conversiones de Meta?",
            "options": [
                  "Pagar impuestos automáticamente.",
                  "Permitir que Meta deduplique los eventos: si recibe la misma compra tanto por el navegador como por el servidor, reconoce el mismo event_id y cuenta la transacción una sola vez sin inflar las estadísticas.",
                  "Crear una contraseña para el usuario.",
                  "Hacer que el anuncio se reproduzca más rápido."
            ],
            "correctIndex": 1,
            "explanation": "La deduplicación mediante event_id evita registrar compras duplicadas manteniendo la fidelidad absoluta de las métricas."
      }
]
  },

};
