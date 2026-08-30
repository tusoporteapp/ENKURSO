// Specific topic-by-topic content blueprints for Category 22 (Investigación de Mercado)
// Providing 100% custom, domain-accurate, highly actionable business literature for all 10 books (Tomos 203 al 212)
// Features:
// 1. 5,000-character Deep Learning Overview & Executive Briefing per book
// 2. Step-by-step Free A/B Testing & Friction Analysis (Clarity/Evan Miller), Validation & PMF Surveys (Google Forms/Tally), Jobs-to-be-Done Switch Interviews (Google Meet/Notion), Competitor Benchmarking (Similarweb/Meta Ad Library), Demand Forecasting (Google Trends 5-Year), Negative Review Mining (Amazon 1-Star), Data-Driven Buyer Personas (GA4/Canva), Virtual Focus Groups (Miro/Forms), Market Sizing TAM/SAM/SOM (Sheets/Censuses) & Market Intelligence Dashboards (Looker Studio/Alerts) Tutorials
// 3. Real, accessible LATAM Monetization Services & Pricing (Junior $25-$60, Mid $80-$180, Senior $220-$500 USD)
// 4. Localized copy-paste sales outreach pitches & 48h action plans
// 5. 3 rigorous exam questions per book with detailed explanations

import { SpecificBookContent } from './category1Content';

export const CATEGORY_22_CUSTOM_BOOKS: Record<string, SpecificBookContent> = {
  // =========================================================================
  // BOOK ID: inm-1
  // =========================================================================
  'inm-1': {
    frameworkName: "Framework de Experimentación A/B Rigurosa, Inferencia Bayesiana y Significancia Estadística (Statistical A/B Testing Engine)",
    coreMetrics: [
      "Nivel de Significancia Estadística y Confianza (Statistical Significance p < 0.05 / 95%)",
      "Poder Estadístico de la Prueba (Statistical Power 1 - β > 80%)",
      "Incremento Porcentual en Tasa de Conversión (Conversion Rate Lift > +18%)",
      "Tasa de Decisión Basada en Evidencia vs. Juicio de Opinión (Data-Driven Decision Rate > 90%)",
      "Impacto en Ingresos por Visitante (Revenue Per Visitor - RPV Lift)"
],
    caseCompany: "Plataforma de Suscripción de Cursos Profesionales MasterSkills (Bogotá, Colombia)",
    caseOutcome: "El comité directivo quería rediseñar toda la web gastando $15,000 USD porque creían que el diseño era 'feo'; el especialista instaló Microsoft Clarity gratis y descubrió que el 70% de los usuarios dudaban en el botón de pago por miedo a cargos ocultos; ejecutó un Test A/B con la calculadora de Evan Miller cambiando solo una línea de texto de garantía debajo del botón de compra; la Variante B logró una significancia del 99.2% y aumentó las ventas un 33.9%, generando $180,000 USD extras al año sin gastar en rediseños.",
    pitfall: "Tomar decisiones de diseño basadas en la 'Opinión de la Persona Mejor Pagada' (HiPPO) o detener las pruebas A/B a los 3 días ante un resultado positivo transitorio (Peeking Problem) sin alcanzar significancia estadística matemática.",
    actionItem1: "Instalar la herramienta oficial gratuita Microsoft Clarity (clarity.microsoft.com) para analizar mapas de calor y grabaciones reales de sesiones de usuarios sin pagar nada.",
    actionItem2: "Formular hipótesis de cambio falsables (Causa -> Efecto -> Razón Psicológica) y aislar una sola variable por prueba (univariada).",
    actionItem3: "Calcular la significancia estadística matemática en la Calculadora Gratuita de Evan Miller (evanmiller.org) asegurando un nivel de confianza mínimo del 95% y una duración de 14 días ininterrumpidos.",
    domainContext: "La intuición humana suele fallar estrepitosamente al predecir el comportamiento real del consumidor; las pruebas A/B científicas permiten que los clientes voten con sus acciones y compras reales.",
    strategicRationale: "Implementar una cultura de experimentación A/B controlada protege a las empresas contra rediseños desastrosos y multiplica la rentabilidad de cada visita web a costo cero.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que más del 75% de las ideas que propone un jefe o diseñador para 'mejorar una página web' en realidad REDUCEN LAS VENTAS? En los negocios digitales mandar por corazonadas es tirar el dinero. El TEST A/B CIENTÍFICO es la metodología que usan Amazon, Netflix y Booking para tomar decisiones: consiste en mostrar la Versión A (original) al 50% de las visitas y la Versión B (con un cambio específico) al otro 50%, midiendo cuál genera más dinero con rigor matemático. Con herramientas 100% GRATUITAS como Microsoft Clarity (mapas de calor ilimitados) y la calculadora de Evan Miller podrás validar cambios con certeza científica sin saber programar. Este tomo te enseña a experimentar como los gigantes tecnológicos.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Mito de la Corazonada (HiPPO): Por qué las opiniones de los directivos destruyen conversiones.\n• Capítulo 2: Diagnóstico con Mapas de Calor en Microsoft Clarity Gratis: Detectar dónde se traban los usuarios.\n• Capítulo 3: Formulación de Hipótesis Científicas y Aislamiento de Variables Univariadas.\n• Capítulo 4: Caso de Estudio Real (MasterSkills Bogotá): Cómo generaron $180,000 USD extras cambiando una línea de texto.\n• Capítulo 5: La Calculadora de Evan Miller: Cómo comprobar la significancia del 95% y evitar falsos positivos.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de fricción y experimentos A/B cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Microsoft Clarity (clarity.microsoft.com): Plataforma oficial gratuita de mapas de calor, clics de rabia (Rage Clicks) y grabaciones de pantalla.\n2. Calculadora de Significancia Evan Miller (evanmiller.org/ab-testing/chi-squared.html): Validador matemático gratuito de pruebas A/B.\n3. Google Sheets: Plantilla del Repositorio de Hipótesis y Registro de Experimentos de Conversión.",
    ch1CustomNarrative: [
      "En el mundo de los negocios digitales existe una trampa recurrente conocida como la 'Opinión de la Persona Mejor Pagada' (HiPPO, Highest Paid Person’s Opinion).",
      "Cuando surge la duda sobre cómo rediseñar una página de precios, qué mensaje utilizar en un anuncio o cómo estructurar una oferta, la decisión suele tomarse en base a la corazonada del director general o del diseñador en jefe.",
      "La realidad empírica demuestra que más del 75% de las corazonadas sobre preferencias de los usuarios son incorrectas: lo que a un comité directivo le parece estéticamente elegante puede generar desconfianza en el cliente real, mientras que un cambio sutil que parecía insignificante puede duplicar las ventas.",
      "El Test A/B científico sustituye la arrogancia de la opinión por la humildad de los datos: consiste en dividir de manera aleatoria y simultánea el tráfico entrante entre dos versiones de una misma experiencia (Control A vs Variante B), midiendo cuál genera un comportamiento comercial superior con significancia estadística comprobable."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO DETECTAR FRICCIÓN Y VALIDAR UN TEST A/B CON CLARITY Y EVAN MILLER GRATIS:",
      "Paso 1: Instala Microsoft Clarity (clarity.microsoft.com) gratis en tu sitio web pegando el código de seguimiento en tu cabecera HTML o Google Tag Manager.",
      "Paso 2: Diagnóstico Visual de Fricción: Entra al panel de Clarity -> Filtra por \"Clics de Rabia (Rage Clicks)\" y revisa las grabaciones de usuarios: identifica dónde hacen clics frustrados, dónde se quedan atascados o qué textos ignoran por completo.",
      "Paso 3: Redacta la Hipótesis Científica en Google Sheets: \"Creemos que al agregar un sello de 'Cancelación en 1 Clic sin Compromiso' debajo del botón de compra (Variante B), los usuarios sentirán menor riesgo financiero, lo que incrementará la tasa de conversión en un 15%\".",
      "Paso 4: Implementa la Variante B cambiando ÚNICAMENTE esa variable (deja intacto el resto de la página).",
      "Paso 5: Mantén la prueba activa durante al menos 14 días ininterrumpidos para registrar patrones de compra de días laborales y fines de semana.",
      "Paso 6: Abre la Calculadora de Evan Miller (evanmiller.org/ab-testing/chi-squared.html): Introduce los Visitantes y Conversiones de la Versión A y la Versión B. Si la herramienta marca \"Statistically Significant (p < 0.05 / 95% Confidence)\", habrás demostrado matemáticamente que la Variante B es superior y puedes adoptarla como la nueva versión oficial."
],
    ch3TacticalSteps: [
      "Semana 1: Instala Microsoft Clarity y recopila grabaciones de al menos 500 sesiones de usuarios en tu embudo.",
      "Semana 2: Identifica el mayor punto de fuga y formula tu hipótesis de cambio univariada en Google Sheets.",
      "Semana 3: Lanza la Variante B dividiendo el tráfico 50/50 y no toques nada durante 14 días (sin mirar antes).",
      "Semana 4: Introduce los datos finales en la Calculadora de Evan Miller e implementa la versión ganadora."
],
    ch4CaseDeepDive: [
      "MasterSkills en Bogotá ofrecía cursos profesionales pero su página de pago tenía una conversión baja del 2.8% y los directivos querían rediseñar todo el portal gastando miles de dólares.",
      "El especialista analizó las grabaciones de Microsoft Clarity y detectó que los usuarios se quedaban parados 40 segundos en el botón de pago moviendo el mouse con dudas.",
      "Formuló una hipótesis simple: los clientes temían cargos ocultos automáticos recurrentes.",
      "Creó la Variante B añadiendo solo un candado y el texto: 'Cancela con 1 clic en cualquier momento. 30 días de garantía sin preguntas'.",
      "El test corrió durante 18 días con 42,000 visitantes por rama: la calculadora de Evan Miller arrojó un 99.2% de significancia estadística.",
      "La conversión subió del 2.8% al 3.75% (+33.9% de incremento relativo), generando $180,000 USD extras al año en suscripciones sin gastar un solo peso en rediseños."
],
    ch5RiskMitigation: [
      "Error fatal: El 'Problema de Mirar Antes de Tiempo (Peeking Problem)': detener el test al día 3 porque la Variante B va ganando por casualidad.",
      "Los primeros días están dominados por el ruido estadístico; debes esperar siempre a que se complete el tamaño muestral y transcurran al menos 14 días completos antes de declarar un ganador.",
      "No cambies 5 cosas a la vez en la Variante B (ej. cambiar el color, el texto, el precio y la imagen al mismo tiempo), porque nunca sabrás qué cambio causó el éxito o el fracaso.",
      "Supervisa siempre una métrica guardiana (como la tasa de devoluciones) para asegurarte de que el aumento de ventas no traiga clientes insatisfechos."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de Fricción Web y Diseño de Experimentos A/B Científicos\". Ayuda a tiendas online, empresas de software, academias, inmobiliarias y servicios a descubrir por qué no venden y multiplicar sus conversiones.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por instalación de Microsoft Clarity + reporte de 5 puntos de fuga con grabaciones y redacción de 2 hipótesis de prueba A/B. • Nivel Intermedio (Con portafolio): $140 - $280 USD por optimización de embudo mediante experimentación A/B (diseño de Variante B en landing page, monitoreo de 14 días, cálculo de significancia estadística en Evan Miller y reporte de incremento de ingresos). • Nivel Senior / Conversion Rate Optimization (CRO) Lead y Director de Experimentación Digital: $350 - $700 USD por programa integral de experimentación continua para empresas con alto volumen de tráfico, pruebas multivariadas, optimización de checkout y cuadro de mando de ingresos incrementales.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando el flujo de compra en el sitio web de [Empresa] y noté que tienen un excelente tráfico pero es muy probable que estén perdiendo más del 60% de sus ventas potenciales por pequeños puntos de fricción o dudas de confianza en su página de pago (que a simple vista no se ven). Con la instalación gratuita de Microsoft Clarity y la metodología de Pruebas A/B Científicas con validación estadística es posible detectar exactamente dónde dudan sus clientes y validar cambios que incrementan las ventas entre un 15% y un 35% sin gastar en costosos rediseños. Por solo $50 USD yo les realizo la auditoría de fricción y les entrego el diseño de su primer experimento en 48 horas. ¿Les gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Instala Microsoft Clarity en un sitio web de prueba y practica evaluando mapas de calor y la calculadora de Evan Miller. Día 2: Contacta a 10 e-commerce o academias online en LinkedIn y ofréceles una auditoría gratuita de fricción web con Clarity."
],
    quizQuestions: [
      {
            "question": "¿Por qué es peligroso tomar decisiones de rediseño web basándose en la 'Opinión de la Persona Mejor Pagada' (HiPPO)?",
            "options": [
                  "Porque los jefes siempre tienen la razón.",
                  "Porque la evidencia demuestra que más del 75% de las corazonadas subjetivas sobre el comportamiento de los clientes son erróneas, mientras que las pruebas A/B científicas permiten validar los cambios con el comportamiento y compras reales de los usuarios.",
                  "Porque la ley prohíbe las opiniones.",
                  "Para ahorrar tinta de impresora."
            ],
            "correctIndex": 1,
            "explanation": "El método científico sustituye las suposiciones subjetivas por datos de comportamiento real y validación estadística."
      },
      {
            "question": "¿Qué evalúa la herramienta oficial gratuita 'Microsoft Clarity' (clarity.microsoft.com)?",
            "options": [
                  "El clima en la ciudad.",
                  "Genera mapas de calor visuales, mapas de desplazamiento y grabaciones reales de sesiones de usuarios, permitiendo identificar clics de frustración (Rage Clicks) y puntos exactos donde los clientes abandonan la web.",
                  "El precio del dólar.",
                  "La velocidad del procesador."
            ],
            "correctIndex": 1,
            "explanation": "Microsoft Clarity permite visualizar el comportamiento real de los usuarios en pantalla de forma 100% gratuita e ilimitada."
      },
      {
            "question": "¿Qué representa un 'Nivel de Significancia Estadística del 95%' (p < 0.05) en una prueba A/B?",
            "options": [
                  "Que el 95% de los empleados votaron a favor.",
                  "Que existe un 95% de certeza matemática de que la diferencia de ventas entre la Versión A y la Versión B es real y causada por el cambio implementado, y no por una simple casualidad o ruido del azar.",
                  "Que el experimento tardará 95 días.",
                  "Que el producto tiene un 95% de descuento."
            ],
            "correctIndex": 1,
            "explanation": "El 95% de confianza es el estándar de rigor estadístico para tomar decisiones de negocio seguras."
      }
]
  },

  // =========================================================================
  // BOOK ID: inm-2
  // =========================================================================
  'inm-2': {
    frameworkName: "Protocolo de Encuestas de Validación de Demanda y El 'Test de Sean Ellis' de Product-Market Fit (The 40% PMF & Micro-Survey Engine)",
    coreMetrics: [
      "Puntuación del Test de Sean Ellis (Must-Have Score > 40% 'Muy Decepcionado')",
      "Tasa de Finalización de la Encuesta (Survey Completion Rate > 65%)",
      "Net Promoter Score Validado (NPS > +50)",
      "Claridad de la Objeción Principal del No-Comprador (Score 10/10)",
      "Disposición a Pagar Cuantificada (Van Westendorp Price Sensitivity)"
],
    caseCompany: "Plataforma SaaS de Facturación Electrónica & Nómina para Restaurantes FacturaChef (Guadalajara, México)",
    caseOutcome: "Iba a gastar $20,000 USD desarrollando un módulo complejo de inventarios con inteligencia artificial que nadie le había pedido; aplicó la Micro-Encuesta de Validación de 4 preguntas en Google Forms / Tally a 200 dueños de restaurantes y corrió el Test de Sean Ellis; descubrió que el 72% no quería IA sino conexión directa con terminales bancarias inalámbricas; reorientó el desarrollo, lanzó la función correcta y el 44% de los usuarios dijo que estaría 'muy decepcionado' si el producto desapareciera, alcanzando Product-Market Fit y triplicando sus suscripciones.",
    pitfall: "Hacer encuestas largas y aburridas de 40 preguntas que nadie termina, o hacer preguntas sesgadas y complacientes ('¿Te gusta mi idea de negocio?') que provocan respuestas amables falsas de amigos que luego nunca compran.",
    actionItem1: "Diseñar 'Micro-Encuestas de 4 a 5 Preguntas' en Google Forms (forms.google.com) o Tally (tally.so) que se respondan en menos de 2 minutos desde el teléfono móvil.",
    actionItem2: "Aplicar la Pregunta Sagrada de Sean Ellis para medir Product-Market Fit: '¿Cómo te sentirías si ya no pudieras usar [Producto]? a) Muy decepcionado, b) Algo decepcionado, c) No me importaría'. (Si 'Muy decepcionado' supera el 40%, tienes un producto ganador).",
    actionItem3: "Preguntar siempre por 'Comportamientos Pasados Reales' (ej. '¿Cuánto gastaste el mes pasado para resolver este problema?') en lugar de intenciones futuras hipotéticas ('¿Comprarías esto algún día?').",
    domainContext: "Preguntar a la gente si le gusta tu idea no sirve de nada porque la gente suele mentir por educación; las encuestas científicas investigan el dolor real, el dinero ya gastado y la decepción ante la pérdida.",
    strategicRationale: "Validar la demanda con encuestas rigurosas antes de escribir una sola línea de código o fabricar un producto ahorra decenas de miles de dólares en desarrollos inútiles y asegura el éxito comercial.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que el 42% de las empresas y startups fracasan por una sola razón: CONSTRUYEN ALGO QUE NADIE QUIERE NI NECESITA? La mayoría comete el error de preguntarle a sus amigos '¿Qué te parece mi idea?' y todos dicen '¡Está genial!', pero cuando lanzan el producto nadie saca la tarjeta de crédito. 'El Protocolo de Encuestas de Validación y el Test de Sean Ellis' te enseña a crear micro-encuestas científicas de 4 preguntas en Google Forms y Tally para medir si tienes un producto ganador (Product-Market Fit) antes de gastar dinero. Si más del 40% de tus usuarios dice que estaría 'muy decepcionado' si tu producto desapareciera, tienes una mina de oro. Este tomo te enseña a validar ideas sin sesgos.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Trampa de la Pregunta Complaciente: Por qué la gente te miente cuando preguntas si les gusta tu idea.\n• Capítulo 2: El Famoso Test de Sean Ellis: La métrica del 40% que predijo el éxito de Dropbox y Slack.\n• Capítulo 3: Creación de Micro-Encuestas en Google Forms y Tally Gratis en 10 minutos.\n• Capítulo 4: Caso de Estudio Real (FacturaChef México): Cómo se ahorraron $20,000 USD en funciones inútiles con 4 preguntas.\n• Capítulo 5: Medición de Sensibilidad de Precios: Descubrir cuánto está dispuesto a pagar tu cliente sin asustarlo.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño y análisis de encuestas de validación cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Forms (forms.google.com): Herramienta oficial gratuita para crear formularios ilimitados con gráficos automáticos.\n2. Tally (tally.so): Plataforma moderna y elegante para crear encuestas interactivas estilo Typeform 100% gratis.\n3. Google Sheets: Matriz de Análisis de Respuestas, Cálculo del Score de Sean Ellis y Tabla Dinámica de Objeciones.",
    ch1CustomNarrative: [
      "En el ecosistema del emprendimiento y la innovación corporativa, la causa primordial de fracaso no es la falta de capital ni las deficiencias técnicas de ingeniería, sino la construcción sistemática de productos o servicios que el mercado no necesita ni está dispuesto a pagar.",
      "Muchos fundadores intentan validar sus hipótesis consultando a amigos, familiares o prospectos mediante preguntas complacientes como '¿Te parece una buena idea este proyecto?' o '¿Comprarías una app que hiciera esto?'.",
      "La psicología conductual demuestra que las personas tienden a responder de forma afirmativa y cortés para no herir los sentimientos del emprendedor, generando una ilusión de demanda que se desvanece de inmediato cuando se exige una transacción económica real.",
      "El diseño metodológico de micro-encuestas estructuradas y la aplicación del Test de Product-Market Fit de Sean Ellis permiten penetrar el velo de la cortesía social para extraer datos duros sobre el dolor real, el comportamiento de compra previo y el grado de indispensabilidad de la solución."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UNA MICRO-ENCUESTA DE VALIDACIÓN Y PMF EN TALLY Y FORMS GRATIS:",
      "Paso 1: Entra a Tally (tally.so) o Google Forms (forms.google.com) y crea una encuesta de máximo 4 preguntas.",
      "Paso 2: Pregunta 1 (El Test de Sean Ellis): \"¿Cómo te sentirías si ya no pudieras utilizar [Nombre del Producto/Servicio]?\" • Opción A: Muy decepcionado (Must-have) • Opción B: Algo decepcionado (Nice-to-have) • Opción C: No me importaría / No lo uso mucho.",
      "Paso 3: Pregunta 2 (El Beneficio Principal): \"¿Cuál es el beneficio principal que obtienes al usar [Producto]?\" (Respuesta abierta: te dirá con las palabras exactas del cliente por qué te compran).",
      "Paso 4: Pregunta 3 (El Perfil de Usuario Ideal): \"¿Qué tipo de persona crees que se beneficiaría más de este servicio?\" (Te describirá a tu Buyer Persona real).",
      "Paso 5: Pregunta 4 (La Alternativa): \"¿Qué herramienta o método utilizabas para resolver este problema antes de conocernos?\" (Te revelará a tu competencia real).",
      "Paso 6: Conecta las respuestas a Google Sheets: calcula el porcentaje de personas que respondieron \"Muy decepcionado\". Si el resultado supera el 40%, tienes Product-Market Fit validado y puedes invertir con total seguridad en escalar el marketing de la empresa."
],
    ch3TacticalSteps: [
      "Semana 1: Diseña la micro-encuesta de 4 preguntas en Tally con diseño limpio y compatible con celulares.",
      "Semana 2: Envía la encuesta por WhatsApp y correo a tus últimos 100 clientes o usuarios registrados.",
      "Semana 3: Analiza las respuestas en Google Sheets y calcula el porcentaje de la métrica de Sean Ellis.",
      "Semana 4: Extrae las frases textuales de los clientes que respondieron 'Muy decepcionado' y úsalas como los nuevos titulares de tu página web."
],
    ch4CaseDeepDive: [
      "FacturaChef en Guadalajara era un software para restaurantes cuyos socios planeaban invertir $20,000 USD en desarrollar un complejo sistema de compras con IA que creían revolucionario.",
      "El líder de producto detuvo el gasto y envió la micro-encuesta de 4 preguntas por WhatsApp a 200 dueños de restaurantes clientes.",
      "El resultado fue revelador: solo el 3% mencionó la IA; el 72% de los hosteleros exigía la integración con terminales de pago portátiles para no tener que cobrar en la caja registradora.",
      "Desarrollaron la integración con terminales en solo 2 semanas gastando menos de $1,000 USD.",
      "Al volver a correr el test de Sean Ellis, el 44% de los restaurantes respondió que estaría 'Muy decepcionado' si les quitaban el sistema: las suscripciones anuales se triplicaron en 60 días alcanzando Product-Market Fit indiscutible."
],
    ch5RiskMitigation: [
      "Error fatal: Enviar encuestas eternas de 20 preguntas con textos obligatorios largos.",
      "Las encuestas largas sufren una tasa de abandono del 85% y solo las terminan personas aburridas; mantén la encuesta siempre entre 3 y 5 preguntas para asegurar tasas de respuesta superiores al 60%.",
      "No ofrezcas regalos caros (como rifar un iPhone) por contestar: la gente responderá cualquier cosa sin pensar solo por ganar el premio, arruinando la calidad de tus datos.",
      "Segmenta el análisis: concéntrate exclusivamente en el feedback de los usuarios que dijeron estar 'Muy decepcionados'; ignorar a los que no les importa tu producto te ahorrará desviar tu propuesta de valor."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño y Análisis de Encuestas de Validación de Mercado y Satisfacción (PMF Test)\". Ayuda a emprendedores, restaurantes, clínicas, SaaS, academias y comercios a validar sus productos antes de gastar dinero.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por diseño de micro-encuesta de 4 preguntas en Tally/Google Forms + recolección y reporte de satisfacción en PDF. • Nivel Intermedio (Con portafolio): $120 - $250 USD por estudio completo de validación de Product-Market Fit (diseño de encuesta de Sean Ellis, análisis de 200 respuestas en Google Sheets, cálculo de NPS, mapa de competidores y recomendaciones estratégicas de producto). • Nivel Senior / Product Discovery Strategist y Consultor de Validación de Mercado: $300 - $600 USD por programa integral de investigación de clientes continuos para empresas consolidadas, pruebas de sensibilidad de precios Van Westendorp, y diseño de hojas de ruta de producto basadas en evidencia.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve viendo los planes de expansión de [Empresa] y sé que muchas veces las empresas invierten miles de dólares en desarrollar nuevos productos o servicios basándose en suposiciones que luego el mercado no compra (lo que representa una enorme pérdida de dinero y tiempo). Con el Protocolo de Encuestas de Validación y el Test de Sean Ellis en Tally es posible medir con exactitud si tu producto tiene Product-Market Fit (validando qué funciones específicas están dispuestos a pagar tus clientes antes de fabricarlas). Por solo $45 USD yo te diseño la encuesta completa y te entrego el informe de resultados en 48 horas. ¿Te gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña una encuesta de validación demo en Tally con el Test de Sean Ellis para un negocio local. Día 2: Contacta a 10 fundadores o gerentes de producto en LinkedIn y ofréceles auditar gratis el Product-Market Fit de su empresa."
],
    quizQuestions: [
      {
            "question": "¿Cuál es el umbral porcentual mínimo en el 'Test de Sean Ellis' para considerar que un producto ha alcanzado 'Product-Market Fit' (PMF)?",
            "options": [
                  "100% de aprobación obligatoria.",
                  "40% o más de los usuarios encuestados respondiendo que estarían 'Muy decepcionados' si el producto o servicio dejara de existir en el mercado.",
                  "5% de los usuarios.",
                  "No existe ningún porcentaje."
            ],
            "correctIndex": 1,
            "explanation": "El umbral del 40% de Sean Ellis es el estándar empírico que predijo el éxito de empresas como Dropbox, Slack y Superhuman."
      },
      {
            "question": "¿Por qué las encuestas de validación deben preguntar por 'comportamientos pasados' en lugar de 'intenciones futuras'?",
            "options": [
                  "Porque el futuro no existe en el calendario.",
                  "Porque la gente suele ser complaciente y sobrestimar lo que compraría en el futuro ('Sí, seguro lo compraría'), mientras que los comportamientos pasados (lo que realmente pagó y usó en los últimos 3 meses) revelan la verdad inalterable de sus hábitos de compra.",
                  "Porque es obligatorio por ley.",
                  "Para que la encuesta sea más rápida."
            ],
            "correctIndex": 1,
            "explanation": "El comportamiento pasado cuantificado es el único predictor fiable de la disposición real a pagar."
      },
      {
            "question": "¿Por qué no se recomienda regalar premios caros (ej. rifar una laptop) a cambio de responder una encuesta de mercado?",
            "options": [
                  "Porque los premios son caros.",
                  "Porque atrae a cazadores de premios que responden cualquier opción al azar a toda velocidad sin leer las preguntas, contaminando y destruyendo la validez de los datos de investigación.",
                  "Porque los servidores de Google se saturan.",
                  "Para ahorrar espacio en el formulario."
            ],
            "correctIndex": 1,
            "explanation": "El incentivo desmedido sesga la muestra atrayendo respuestas falsas y poco comprometidas."
      }
]
  },

  // =========================================================================
  // BOOK ID: inm-3
  // =========================================================================
  'inm-3': {
    frameworkName: "El Marco de Entrevista Jobs-to-be-Done (The JTBD Switch Interview: Forces of Progress, Anxieties & Habitual Triggers)",
    coreMetrics: [
      "Identificación del Trabajo Principal a Realizar (Core Functional & Emotional Job 100%)",
      "Precisión en Mapeo de las 4 Fuerzas de Progreso (Push, Pull, Anxiety, Inertia)",
      "Tasa de Detección del Evento Disparador Inicial (Trigger Event Discovery > 90%)",
      "Puntuación de Comprensión del Lenguaje Textual del Cliente (Voice of Customer Score > 9.5/10)",
      "Tasa de Éxito en Rediseño de Mensajes Comerciales Basados en JTBD (+55%)"
],
    caseCompany: "Cadena de Gimnasios & Centros de Acondicionamiento Físico FitLife (Santiago, Chile)",
    caseOutcome: "Promocionaba sus gimnasios con fotos de máquinas de pesas y cuerpos musculosos con baja captación; realizó 10 entrevistas Jobs-to-be-Done (JTBD) de 25 minutos a clientes recién inscritos; descubrió que el 'Trabajo' real por el que pagaban no era 'hacer músculos', sino 'aliviar el dolor de espalda por trabajar 10 horas sentado y tener energía para jugar con sus hijos el fin de semana'; cambió sus anuncios y propuestas hacia la salud postural y energía familiar: sus inscripciones crecieron un 140% en 90 días.",
    pitfall: "Creer que la gente compra productos por sus características demográficas (ej. 'Mujer de 35 años') en lugar de entender que la gente 'contrata' un producto para hacer un trabajo de progreso específico en sus vidas cotidianas.",
    actionItem1: "Realizar 'Entrevistas de Cambio (Switch Interviews)' de 25 minutos a clientes que acaban de comprar tu producto o que acaban de cancelar el servicio de la competencia.",
    actionItem2: "Mapear las '4 Fuerzas del Progreso': 1. El Empuje (Push del dolor actual), 2. La Atracción (Pull de la nueva solución), 3. La Ansiedad (Miedos al cambio), 4. La Inercia (Hábitos y comodidad del pasado).",
    actionItem3: "Extraer las 'Citas Textuales Exactas' (Voice of the Customer) para utilizarlas literalmente en los titulares de tu página web, anuncios y correos de venta.",
    domainContext: "Como enseñaba Clayton Christensen de Harvard: los clientes no compran un taladro de un cuarto de pulgada; compran un agujero en la pared de un cuarto de pulgada para colgar la foto de su familia.",
    strategicRationale: "Dominar las entrevistas Jobs-to-be-Done revela las motivaciones emocionales profundas que impulsan las compras, permitiendo diseñar ofertas irresistibles que conectan con la psicología real del cliente.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué la gente compra un café de $5 dólares en Starbucks si puede prepararse uno en su casa por $0.20 centavos? ¡Porque no están comprando café: están 'contratando' a Starbucks para tener una oficina temporal tranquila donde trabajar sin que los interrumpan! Esa es la teoría revolucionaria de 'JOBS-TO-BE-DONE (JTBD)' creada por el legendario profesor Clayton Christensen de la Universidad de Harvard. La gente no compra productos: 'contrata' productos para hacer un trabajo de progreso en su vida. Con este método aprenderás a hacer entrevistas de 20 minutos por Google Meet para descubrir la verdadera razón oculta por la que tus clientes te eligen. Este tomo te enseña a leer la mente de tu comprador.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Teoría de los Batidos de McDonald's: Por qué la demografía tradicional ya no sirve para vender.\n• Capítulo 2: Las 4 Fuerzas del Progreso: El Empuje del dolor, La Atracción de la promesa, La Ansiedad y La Inercia.\n• Capítulo 3: El Guion de Entrevista de Cambio (Switch Interview) paso a paso en Google Meet.\n• Capítulo 4: Caso de Estudio Real (FitLife Chile): De promocionar pesas a vender alivio de espalda duplicando clientes.\n• Capítulo 5: La Matriz de Fuerzas en Notion: Cómo organizar las respuestas de las entrevistas.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer investigación cualitativa de clientes y JTBD cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Meet / Zoom: Plataforma oficial para grabar entrevistas cualitativas remotas de 20 minutos.\n2. Google Docs (Herramienta de Dictado / Transcripción): Transcripción automática gratuita de la voz del cliente.\n3. Notion (notion.so): Plantilla Oficial de la Matriz de las 4 Fuerzas del Progreso y Banco de Citas del Cliente.",
    ch1CustomNarrative: [
      "Durante décadas, la investigación de mercado tradicional segmentó a los consumidores a través de atributos demográficos estáticos: género, edad, nivel socioeconómico y ubicación geográfica.",
      "Sin embargo, el célebre teórico de innovación de la Escuela de Negocios de Harvard, Clayton Christensen, demostró la insuficiencia de este paradigma a través del famoso caso de los batidos de McDonald's.",
      "La cadena intentaba aumentar las ventas de batidos mejorando sabores según el perfil demográfico, sin ningún éxito; al investigar el contexto situacional real descubrieron que casi la mitad de los batidos se vendían antes de las 8:30 AM a personas solitarias que conducían hacia su trabajo.",
      "El cliente no compraba un batido por ser hombre de 35 años; lo 'contrataba' para resolver un trabajo específico: entretenerse en el tráfico durante un trayecto aburrido de 45 minutos y saciar el hambre hasta el almuerzo con una bebida densa que no ensuciara su ropa en el automóvil.",
      "El marco Jobs-to-be-Done (JTBD) redefine la investigación de mercado al centrarse no en quién es el cliente, sino en qué transformación y progreso situacional busca alcanzar cuando decide comprar."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO HACER UNA ENTREVISTA JOBS-TO-BE-DONE EN GOOGLE MEET Y NOTION GRATIS:",
      "Paso 1: Selecciona a 5 clientes que hayan comprado tu producto en los últimos 30 días y agenda una llamada de 20 minutos por Google Meet.",
      "Paso 2: La Pregunta del Disparador Inicial (The Trigger Event): \"Recuerda el día exacto en que decidiste comprar [Producto]. ¿Dónde estabas, qué hora era y qué acababa de ocurrir que te hizo decir: 'tengo que solucionar esto hoy mismo'?\".",
      "Paso 3: Mapeo de las 4 Fuerzas en Notion:",
      "Paso 4: • Fuerza 1 (El Empuje / Push): ¿Qué te frustraba de lo que usabas antes? (El dolor actual). • Fuerza 2 (La Atracción / Pull): ¿Qué te imaginaste que podrías lograr con nuestra solución? (El futuro deseado). • Fuerza 3 (La Ansiedad / Anxiety): ¿Qué dudas o miedos tuviste justo antes de pasar tu tarjeta de crédito? (Fricciones de compra). • Fuerza 4 (La Inercia / Habit): ¿Qué hábitos o costumbres viejas te costó dejar atrás?.",
      "Paso 5: Activa el dictado de voz en Google Docs para transcribir la conversación completa de forma gratuita.",
      "Paso 6: Extrae las \"Frases Textuales de Oro\": Identifica las palabras exactas que usó el cliente para describir su dolor (ej. \"sentía que me ahogaba en papeles\") y cópialas directamente en tus anuncios y página web para que tu mensaje resuene como si leyeras su mente."
],
    ch3TacticalSteps: [
      "Semana 1: Diseña el guion de preguntas JTBD en Google Docs y recluta a 5 clientes recientes.",
      "Semana 2: Graba las 5 entrevistas en Google Meet y transcribe las respuestas en Notion.",
      "Semana 3: Llena la Matriz de las 4 Fuerzas del Progreso e identifica el Trabajo Principal a Realizar.",
      "Semana 4: Reescribe la propuesta de valor y los titulares de tu sitio web utilizando el lenguaje literal extraído."
],
    ch4CaseDeepDive: [
      "FitLife en Santiago era una cadena de gimnasios que invertía miles de dólares en anuncios mostrando fotos de fisicoculturistas levantando pesas pero sus suscripciones estaban estancadas.",
      "El consultor realizó 8 entrevistas JTBD a personas que se habían inscrito en el último mes.",
      "Descubrió que el 80% de los nuevos miembros eran oficinistas que nunca habían tocado una pesa y que su verdadero 'Trabajo' era: 'Dejar de sentir dolor de espalda por trabajar encorvado y tener resistencia para jugar con sus hijos pequeños el domingo'.",
      "Las fotos de fisicoculturistas musculosos en realidad les daban miedo y vergüenza de sentirse juzgados.",
      "FitLife cambió radicalmente su comunicación: sustituyó las fotos de pesas por personas normales sonrientes con el titular: 'Recupera tu energía y dile adiós al dolor de espalda en 30 minutos al día'. Sus inscripciones crecieron un 140% en 3 meses."
],
    ch5RiskMitigation: [
      "Error fatal: Guiar al entrevistado o poner palabras en su boca (ej. '¿Verdad que compraste porque nuestro precio es el más barato?').",
      "Mantén silencio y haz preguntas abiertas y neutras; deja que el cliente hable el 80% del tiempo y profundice en sus recuerdos emocionales.",
      "No hagas entrevistas a personas que compraron hace más de 6 meses porque ya habrán olvidado los detalles y emociones del momento de la compra.",
      "Pide siempre permiso al inicio para grabar la llamada con fines exclusivos de mejora interna de servicio."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Investigación Cualitativa de Clientes y Entrevistas Jobs-to-be-Done (JTBD)\". Ayuda a gimnasios, clínicas, software, inmobiliarias, escuelas y consultoras a descubrir las motivaciones ocultas de sus clientes.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por ejecución de 3 entrevistas JTBD de 20 min en Google Meet + transcripción y matriz de 4 fuerzas en Notion. • Nivel Intermedio (Con portafolio): $140 - $280 USD por estudio cualitativo completo de clientes (ejecución de 6 a 8 entrevistas JTBD, mapeo de eventos disparadores, informe de Voz del Cliente y nuevo guion de ventas/landing page). • Nivel Senior / JTBD Research Lead y Consultor de Innovación Centrada en el Usuario: $350 - $700 USD por investigación estratégica profunda para corporaciones, rediseño integral de portafolio de productos basado en JTBD, y talleres ejecutivos de alineación estratégica.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando la comunicación comercial de [Empresa] y sé que muchas veces las empresas promocionan las características técnicas de sus productos pero les cuesta conectar con la motivación emocional real por la que los clientes deciden comprar (lo que hace que los anuncios tengan bajo impacto y se compita solo por precio). Con el Marco de Entrevistas Jobs-to-be-Done (JTBD) desarrollado en Harvard es posible descubrir exactamente el 'trabajo de progreso' y los disparadores por los que tus clientes te eligen, extrayendo las frases textuales para duplicar la efectividad de tus ventas y páginas web. Por solo $50 USD yo les realizo las primeras 3 entrevistas y les entrego el informe en 48 horas. ¿Les gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña la plantilla de guion de entrevista JTBD en Notion con la matriz de 4 fuerzas. Día 2: Contacta a 10 directores de marketing o dueños de negocios en LinkedIn y ofréceles una demostración gratuita de investigación JTBD con 2 de sus clientes."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la premisa fundamental del marco 'Jobs-to-be-Done' (JTBD) creado por Clayton Christensen?",
            "options": [
                  "Que los clientes compran productos por su signo zodiacal.",
                  "Que las personas no compran productos ni servicios por sus atributos demográficos, sino que los 'contratan' para hacer un trabajo de progreso específico y resolver un problema en una circunstancia de su vida.",
                  "Que todos los productos deben costar $1 dólar.",
                  "Que el marketing solo funciona en televisión."
            ],
            "correctIndex": 1,
            "explanation": "El enfoque JTBD se centra en la transformación y progreso situacional que busca el cliente al comprar."
      },
      {
            "question": "¿Cuáles son las '4 Fuerzas del Progreso' que intervienen en la decisión de compra según el marco JTBD?",
            "options": [
                  "Tierra, Agua, Fuego y Aire.",
                  "1. El Empuje (Push del dolor actual), 2. La Atracción (Pull de la nueva solución), 3. La Ansiedad (Miedos al cambio) y 4. La Inercia (Hábitos arraigados del pasado).",
                  "Norte, Sur, Este y Oeste.",
                  "Precio, Plazo, Peso y Punto."
            ],
            "correctIndex": 1,
            "explanation": "Estas 4 fuerzas psicológicas opuestas determinan si un usuario decide cambiar a un nuevo producto o quedarse como está."
      },
      {
            "question": "¿Por qué se recomienda utilizar las 'Frases Textuales de Oro' del cliente en los anuncios y páginas web?",
            "options": [
                  "Para que el diseñador no tenga que pensar.",
                  "Porque cuando un prospecto lee en tu página web exactamente las mismas palabras y frases que él utiliza para describir su frustración cotidiana, siente una conexión instantánea de confianza y percibe que comprendes su dolor mejor que nadie.",
                  "Porque es obligatorio por normas ortográficas.",
                  "Para ahorrar espacio en la base de datos."
            ],
            "correctIndex": 1,
            "explanation": "El lenguaje auténtico del cliente (Voice of Customer) genera máxima empatía y derriba las barreras de escepticismo."
      }
]
  },

  // =========================================================================
  // BOOK ID: inm-4
  // =========================================================================
  'inm-4': {
    frameworkName: "Matriz de Benchmarking Competitivo Digital y Espionaje Ético de Fuentes de Tráfico (The Similarweb Traffic & Channel Blueprint)",
    coreMetrics: [
      "Precisión en Estimación de Tráfico del Competidor (Traffic Accuracy Index > 85%)",
      "Desglose de Canales de Adquisición (Direct, Organic Search, Paid, Social, Referral)",
      "Descubrimiento de Anuncios Activos del Competidor en Meta Ad Library (100% visibilidad)",
      "Identificación de Palabras Clave Principales del Competidor (Top Keywords Gap)",
      "Tiempo de Detección de Nuevos Movimientos Competitivos (< 24 horas)"
],
    caseCompany: "Tienda Online de Muebles Ergonómicos & Sillas de Oficina SillasPro (Bogotá, Colombia)",
    caseOutcome: "Invertía $2,000 USD al mes en Google Ads sin rentabilidad porque competía a ciegas contra grandes marcas; realizó un Benchmarking Digital con la extensión gratuita de Similarweb y la Biblioteca de Anuncios de Meta; descubrió que su principal competidor obtenía el 65% de sus ventas a través de tráfico de referencia en blogs de teletrabajo y anuncios de video en Facebook mostrando el dolor de ciática; replicó la estrategia cerrando acuerdos con los mismos blogs y lanzó videos similares: sus ventas se triplicaron en 60 días con un ROAS de 4.2x.",
    pitfall: "Operar tu negocio a ciegas sin analizar qué canales de tráfico, palabras clave y anuncios publicitarios le están funcionando con éxito a tus competidores directos en este preciso momento.",
    actionItem1: "Instalar la extensión oficial gratuita de 'Similarweb' en Google Chrome para auditar en 1 clic el volumen de visitas, fuentes de tráfico y países de cualquier sitio web competidor.",
    actionItem2: "Utilizar la herramienta pública y gratuita 'Meta Ad Library (Biblioteca de Anuncios de Meta)' (facebook.com/ads/library) para ver todos los anuncios de video, imágenes y ofertas que tus competidores tienen activos.",
    actionItem3: "Construir la 'Matriz de Benchmarking Digital' en Google Sheets mapeando los 3 competidores líderes: Canales de Tráfico dominantes, Ganchos de Anuncios, Precios y Brechas de Oportunidad que están descuidando.",
    domainContext: "En el mundo digital no existen secretos: las herramientas de inteligencia competitiva permiten auditar legal y éticamente las fuentes de tráfico y estrategias publicitarias de cualquier empresa en el mundo.",
    strategicRationale: "Ejecutar benchmarking competitivo continuo evita reinventar la rueda, ahorra miles de dólares en pruebas fallidas y permite capitalizar de inmediato las debilidades y vacíos de mercado de tus rivales.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Te gustaría poder ver exactamente cuántas visitas tiene la página web de tu mayor competidor, de dónde saca sus clientes (si de Google, Facebook o correos) y qué anuncios publicitarios tiene activos en este preciso instante? ¡Eso no es ciencia ficción ni espionaje ilegal, es INTELIGENCIA COMPETITIVA DIGITAL! Con herramientas 100% GRATUITAS como la extensión de Similarweb y la Biblioteca de Anuncios de Meta puedes auditar a cualquier empresa del mundo en 5 minutos y descubrir su estrategia exacta. En lugar de adivinar qué funciona, analizas a los líderes de tu sector y aplicas lo mejor superando sus debilidades. Este tomo te enseña a hacer benchmarking como un consultor de élite.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Fin de la Ceguera Comercial: Por qué operar sin auditar a la competencia es un suicidio empresarial.\n• Capítulo 2: Auditoría de Tráfico en 1 Clic con la Extensión Gratuita de Similarweb.\n• Capítulo 3: Espionaje Ético de Anuncios en Meta Ad Library: Ver ofertas, textos y videos activos gratis.\n• Capítulo 4: Caso de Estudio Real (SillasPro Bogotá): Cómo triplicaron ventas descubriendo la fuente secreta de su rival.\n• Capítulo 5: La Matriz de Benchmarking en Google Sheets: Comparar Canales, Palabras Clave y Brechas de Mercado.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de benchmarking y espionaje de competidores cobrando entre $45 y $650 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Similarweb (Extensión oficial de Chrome / similarweb.com): Auditoría gratuita de tráfico web, fuentes de adquisición y engagement.\n2. Meta Ad Library (facebook.com/ads/library): Buscador oficial gratuito y público de anuncios activos en Facebook e Instagram.\n3. Google Sheets: Plantilla Oficial de la Matriz de Benchmarking Competitivo y Mapa de Brechas de Mercado.",
    ch1CustomNarrative: [
      "En el entorno de negocios contemporáneo, emprender o gestionar una estrategia de marketing digital sin realizar un análisis exhaustivo del panorama competitivo equivale a navegar en aguas turbulentas con los ojos vendados.",
      "Muchas pequeñas y medianas empresas malgastan miles de dólares en canales publicitarios inadecuados o cometen errores estratégicos elementales que sus competidores ya experimentaron, sufrieron y corrigieron años atrás.",
      "La digitalización ha democratizado la inteligencia de mercado: hoy en día, las barreras de información se han disuelto por completo.",
      "Mediante plataformas de análisis de tráfico web como Similarweb y repositorios de transparencia publicitaria como Meta Ad Library, cualquier analista puede auditar de forma ética, pública y legal el comportamiento digital de sus rivales, identificando sus fuentes primarias de clientes, sus ofertas más exitosas y los nichos desatendidos que dejan al descubierto."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO AUDITAR A TU COMPETENCIA CON SIMILARWEB Y META AD LIBRARY GRATIS:",
      "Paso 1: Instala la extensión gratuita de Similarweb en Google Chrome.",
      "Paso 2: Entra al sitio web de tu competidor principal y haz clic en el icono de Similarweb en tu navegador: analiza el \"Global Rank\", \"Visitas Mensuales Totales\", \"Duración Media de la Visita\" y el gráfico de \"Fuentes de Tráfico (Traffic Sources)\" (descubre si su tráfico viene de Búsqueda Orgánica, Anuncios de Pago, Redes Sociales o Referencias).",
      "Paso 3: Espionaje de Anuncios en Meta Ad Library: Ingresa a facebook.com/ads/library -> Selecciona tu país y categoría \"Todos los anuncios\" -> Escribe el nombre de la página de Facebook de tu competidor.",
      "Paso 4: Analiza todos sus anuncios activos: Identifica cuáles anuncios llevan más de 3 meses activos (si un competidor gasta dinero en mantener un anuncio activo durante meses, significa que ese anuncio es ALTAMENTE RENTABLE y le genera ventas continuas).",
      "Paso 5: En Google Sheets, crea la \"Matriz_Benchmarking_Competidores\": Registra: 1. Estimación de Tráfico, 2. Canal Estrella, 3. Gancho de Anuncio Principal, 4. Oferta de Precio y 5. Punto Débil / Qué no están haciendo.",
      "Paso 6: Diseña tu estrategia comercial capitalizando las brechas detectadas (ej. si tu rival solo vende con fotos estáticas en Meta, lanza anuncios de video dinámicos resolviendo las dudas que ellos ignoran)."
],
    ch3TacticalSteps: [
      "Semana 1: Identifica a tus 3 principales competidores locales e internacionales e instala Similarweb en Chrome.",
      "Semana 2: Audita sus fuentes de tráfico y exporta el desglose porcentual de canales a Google Sheets.",
      "Semana 3: Analiza todos sus anuncios en Meta Ad Library y documenta los ganchos y ofertas con mayor antigüedad.",
      "Semana 4: Lanza tu campaña comercial optimizada atacando los canales y ángulos que tus rivales tienen descuidados."
],
    ch4CaseDeepDive: [
      "SillasPro en Bogotá vendía sillas de oficina ergonómicas e invertía $2,000 USD al mes en Google Ads compitiendo contra gigantes del retail con costos por clic carísimos que no dejaban rentabilidad.",
      "El especialista analizó al competidor líder en Similarweb: descubrió que no dependían de Google Ads, sino que el 65% de su tráfico venía de enlaces en blogs de productividad y teletrabajo.",
      "Además, en Meta Ad Library descubrió que tenían un anuncio de video activo desde hacía 6 meses con el gancho: 'Si te duele la espalda baja a las 3 PM, tu silla actual te está lesionando'.",
      "SillasPro cerró acuerdos de recomendación con los mismos blogs de teletrabajo y grabó un video propio mostrando la anatomía de soporte lumbar de sus sillas.",
      "En 60 días sus ventas se triplicaron, su costo de adquisición bajó un 55% y lograron un ROAS de 4.2x imitando la estrategia ganadora de su rival."
],
    ch5RiskMitigation: [
      "Error fatal: Copiar literalmente los textos o imágenes del competidor de forma idéntica.",
      "El benchmarking no es plagio: copiar anuncios idénticos destruye tu identidad de marca y puede generar demandas legales; el objetivo es modelar la estrategia, el canal y el ángulo psicológico, pero creando siempre contenido propio, superior y con tu propia voz de marca.",
      "Similarweb entrega estimaciones basadas en paneles estadísticos: utilízalo como referencia comparativa porcentual y de tendencias, no como un dato contable exacto al milímetro.",
      "Audita a tus competidores una vez al mes para detectar lanzamientos de nuevos productos o promociones estacionales a tiempo."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de Benchmarking de Competidores y Análisis de Fuentes de Tráfico Digital\". Ayuda a e-commerce, marcas de retail, clínicas, bufetes, academias y empresas a descubrir qué hacen sus rivales para ganarles clientes.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por auditoría de 2 competidores con Similarweb + informe de anuncios activos en Meta Ad Library en Google Docs. • Nivel Intermedio (Con portafolio): $130 - $270 USD por estudio completo de Benchmarking Competitivo Digital (análisis de 4 competidores en Similarweb, desglose de canales de adquisición, biblioteca de ganchos de anuncios, matriz comparativa de precios y hoja de ruta de oportunidades en Sheets). • Nivel Senior / Competitive Intelligence Lead y Estratega de Posicionamiento de Mercado: $320 - $650 USD por sistema integral de monitoreo continuo de inteligencia competitiva para medianas y grandes empresas, análisis de brechas SEO/SEM, mapas de posicionamiento estratégico y asesoría directiva.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando el mercado digital del sector de [Industria] y sé que muchas veces las empresas invierten en publicidad a ciegas sin saber de dónde están sacando clientes sus principales competidores ni qué anuncios les están funcionando con éxito (lo que hace que gasten presupuesto en pruebas innecesarias). Con herramientas oficiales de inteligencia competitiva como Similarweb y Meta Ad Library es posible auditar las fuentes de tráfico exactas de sus 3 mayores rivales y ver todos sus anuncios rentables activos para modelar lo que funciona y encontrar vacíos de mercado donde ganarles clientes. Por solo $50 USD yo les entrego la auditoría competitiva completa en 48 horas. ¿Les gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Audita a 2 competidores reconocidos de tu país con Similarweb y Meta Ad Library y organiza los datos en una plantilla demo de Google Sheets. Día 2: Contacta a 10 tiendas de e-commerce o empresas en LinkedIn y ofréceles un reporte gratuito de espionaje ético de su mayor competidor."
],
    quizQuestions: [
      {
            "question": "¿Qué información clave entrega la extensión gratuita de 'Similarweb' al auditar un sitio web competidor?",
            "options": [
                  "Las contraseñas del servidor.",
                  "Una estimación del volumen total de visitas mensuales, tiempo de permanencia, países principales de la audiencia y el desglose porcentual de sus fuentes de adquisición de tráfico (Búsqueda Orgánica, Pago, Redes, Referencias y Directo).",
                  "Los estados de cuenta bancarios.",
                  "El sueldo de los programadores."
            ],
            "correctIndex": 1,
            "explanation": "Similarweb revela el mapa de canales de adquisición permitiendo entender la estrategia de distribución del competidor."
      },
      {
            "question": "¿Por qué un anuncio que lleva más de 3 o 6 meses activo ininterrumpidamente en 'Meta Ad Library' es una mina de oro para un analista?",
            "options": [
                  "Porque a la empresa se le olvidó apagar el anuncio.",
                  "Porque ninguna empresa gasta dinero pagando publicidad durante meses en un anuncio que no genera dinero; su larga permanencia demuestra que es un anuncio altamente rentable y validado por el mercado que vale la pena analizar y modelar.",
                  "Porque Facebook no permite borrar anuncios viejos.",
                  "Para cumplir con festivos oficiales."
            ],
            "correctIndex": 1,
            "explanation": "La longevidad de un anuncio publicitario de pago es la prueba indiscutible de su retorno económico positivo."
      },
      {
            "question": "¿Cuál es la diferencia fundamental entre el 'Benchmarking Competitivo' ético y el plagio ilegal?",
            "options": [
                  "Que el benchmarking se hace de noche.",
                  "El benchmarking analiza y modela las estrategias, canales y ángulos psicológicos exitosos para crear propuestas propias y superiores con identidad única, mientras que el plagio es copiar y pegar ilegalmente los textos e imágenes idénticas de otro.",
                  "Que el plagio no cuesta dinero.",
                  "No hay ninguna diferencia, es lo mismo."
            ],
            "correctIndex": 1,
            "explanation": "El benchmarking aprende de las mejores prácticas de la industria respetando la propiedad intelectual y la autenticidad de marca."
      }
]
  },

  // =========================================================================
  // BOOK ID: inm-5
  // =========================================================================
  'inm-5': {
    frameworkName: "Protocolo de Detección de Olas de Demanda y Estacionalidad Predictiva (The Google Trends Macro-Wave Model)",
    coreMetrics: [
      "Identificación de Tendencias en Crecimiento (Breakout Topics > +500% de búsqueda)",
      "Precisión en Mapeo de Picos Estacionales (Seasonal Peak Prediction 100%)",
      "Diferenciación entre Modas Pasajeras vs Tendencias Estables (> 5 años de datos)",
      "Segmentación Geográfica por Regiones/Ciudades de Mayor Demanda",
      "Anticipación a Lanzamiento de Productos (Lead Time > 60 días antes del pico)"
],
    caseCompany: "Fabricante & Distribuidor de Artículos de Climatización & Aire Acondicionado ClimaFácil (Guadalajara, México)",
    caseOutcome: "Invertía en publicidad y compraba inventario tarde cuando el calor ya estaba terminando en julio con pérdidas por stock sobrante; analizó Google Trends con datos históricos de 5 años y descubrió que las búsquedas de 'aire acondicionado portátil' en el norte de México comienzan a dispararse exactamente la primera semana de marzo y alcanzan su pico en mayo; adelantó sus compras de stock e inició campañas de preventa en marzo: agotó 3,500 unidades en 45 días y aumentó sus utilidades netas un 85%.",
    pitfall: "Lanzar productos o campañas publicitarias a destiempo por guiarse por la intuición en lugar de analizar las curvas de estacionalidad y tendencias de búsqueda reales en Google Trends, quedando con inventario estancado.",
    actionItem1: "Utilizar la herramienta oficial gratuita 'Google Trends' (trends.google.com) configurando el filtro de 5 años para distinguir tendencias sostenidas de modas efímeras.",
    actionItem2: "Identificar los 'Temas y Consultas en Aumento (Breakout / En Aumento)' que crecen más del 500% para lanzar ofertas antes de que la competencia se entere.",
    actionItem3: "Mapear la 'Estacionalidad Predictiva': identificar el mes exacto del valle de búsquedas para negociar precios bajos con proveedores e iniciar la preventa 45 días antes del pico máximo anual.",
    domainContext: "Google Trends es el sismógrafo de la mente del consumidor global: registra en tiempo real qué necesidades, deseos y miedos están creciendo o muriendo en cada ciudad del mundo.",
    strategicRationale: "Dominar Google Trends permite a los directores anticipar la demanda del mercado, optimizar la compra de inventarios y surfear las olas de interés comercial con máxima rentabilidad.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que Google registra más de 8,500 millones de búsquedas al día y que puedes ver GRATIS exactamente qué productos y servicios están explotando en popularidad en tu país antes de que nadie más lo sepa? ¡Ese es el poder de GOOGLE TRENDS! La mayoría de los negocios compran inventario o lanzan promociones tarde, cuando la temporada ya se acabó. 'El Protocolo de Detección de Olas y Estacionalidad' te enseña a leer las gráficas de Google Trends a 5 años para predecir con exactitud quirúrgica cuándo empezará a buscar la gente, en qué ciudades hay más demanda y cuáles son los términos 'En Aumento (+500%)' para lanzar productos ganadores. Este tomo te enseña a anticiparte al mercado.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Sismógrafo del Consumidor: Por qué Google Trends es la bola de cristal del comercio moderno.\n• Capítulo 2: Moda Pasajera vs Tendencia Sostenible: El filtro de 5 años para no perder dinero.\n• Capítulo 3: El Tesoro de las 'Consultas en Aumento (Breakout)': Encontrar nichos vírgenes en segundos.\n• Capítulo 4: Caso de Estudio Real (ClimaFácil México): Cómo agotaron 3,500 unidades adelantándose 60 días al calor.\n• Capítulo 5: Desglose por Ciudades y Regiones: Saber exactamente dónde pautar tus anuncios de pago.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de tendencias y estacionalidad cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Trends (trends.google.com): Plataforma oficial gratuita de análisis de volumen relativo de búsqueda y tendencias globales.\n2. Google Sheets: Matriz de Estacionalidad Mensual y Calendario Predictivo de Demanda Comercial.\n3. Canva: Plantilla Oficial de Informe Ejecutivo de Tendencias de Mercado para Clientes.",
    ch1CustomNarrative: [
      "En la economía moderna, el tiempo (Timing) representa una de las variables más críticas y menos comprendidas en la supervivencia y rentabilidad de cualquier proyecto comercial.",
      "Llegar al mercado con una propuesta brillante demasiado temprano —cuando el público aún no comprende la necesidad— o demasiado tarde —cuando la moda ha pasado y el mercado está saturado de competidores en guerra de precios— conduce invariablemente a la destrucción de capital.",
      "Durante décadas, la anticipación de la demanda requería de costosos estudios de mercado elaborados por agencias especializadas que tardaban meses en entregar conclusiones que nacían obsoletas.",
      "Google Trends democratizó esta disciplina: al recopilar y normalizar el comportamiento de miles de millones de consultas en tiempo real, permite a cualquier emprendedor o directivo observar con precisión matemática el nacimiento, madurez y declive de cualquier categoría comercial, anticipando las olas de demanda antes de que se reflejen en las ventas tradicionales."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO DETECTAR TENDENCIAS Y ESTACIONALIDAD EN GOOGLE TRENDS GRATIS:",
      "Paso 1: Entra a Google Trends (trends.google.com) -> Selecciona tu país (ej. \"México\", \"Colombia\" o \"Chile\").",
      "Paso 2: Introduce el término de tu producto o servicio (ej. \"aire acondicionado portátil\"). Configura el rango de tiempo en \"Últimos 5 años\": observa el patrón repetitivo de olas para identificar el mes exacto donde inician las búsquedas (ej. febrero/marzo) y el mes donde alcanzan su punto máximo (mayo).",
      "Paso 3: Identifica la Salud de la Tendencia: Si la gráfica tiene una pendiente ascendente a lo largo de los 5 años, es una \"Tendencia Sólida en Crecimiento\"; si tuvo un pico vertical gigante un solo año y luego cayó a cero, fue una \"Moda Efímera\" en la que no debes invertir a largo plazo.",
      "Paso 4: Analiza el \"Interés por Subregión\": Revisa el mapa de calor de tu país: descubre en qué 3 ciudades o estados específicos se concentra el mayor volumen de interés relativo para enfocar allí tu publicidad local.",
      "Paso 5: Descubre Oportunidades Ocultas en \"Consultas Relacionadas\": Filtra por \"En aumento (Breakout)\": identifica los términos que crecen más de +500% (ej. \"aire acondicionado portátil bajo consumo inverter\").",
      "Paso 6: En Google Sheets, crea el \"Calendario_Predictivo_Comercial\": Fija la compra de inventario 60 días antes del inicio de la curva y el lanzamiento de campañas publicitarias 15 días antes del despegue."
],
    ch3TacticalSteps: [
      "Semana 1: Analiza en Google Trends los últimos 5 años de los 3 productos principales de tu empresa.",
      "Semana 2: Mapea los meses de valle y pico de búsqueda en tu calendario comercial de Google Sheets.",
      "Semana 3: Extrae las 5 consultas 'En aumento (+500%)' y diseña ofertas o contenidos específicos para esos términos.",
      "Semana 4: Segmenta tus campañas de anuncios geográficamente en las 3 ciudades con mayor volumen de búsqueda."
],
    ch4CaseDeepDive: [
      "ClimaFácil en Guadalajara vendía equipos de climatización pero sus dueños solían comprar inventario en mayo cuando sentían calor y lanzaban anuncios en junio, quedándose con stock sin vender en julio cuando comenzaban las lluvias.",
      "El especialista analizó Google Trends a 5 años: demostró con gráficas que la gente en el norte y occidente de México comienza a buscar soluciones de climatización desde la primera semana de marzo y las compras se cierran en abril y mayo.",
      "La empresa negoció compras de inventario con descuento a fabricantes en enero y lanzó sus campañas de preventa 'Prepara tu verano con 20% OFF' el 1 de marzo en las ciudades con mayor índice de búsqueda de Google Trends.",
      "Agotaron las 3,500 unidades para mediados de mayo antes de que su competencia empezara a anunciarse, aumentando sus utilidades netas un 85% y eliminando los costos de almacenamiento de stock muerto."
],
    ch5RiskMitigation: [
      "Error fatal: Confundir una 'Moda Pasajera Viral' (ej. un juguete que dura 2 meses) con una 'Macrotendencia Estructural' (ej. vehículos eléctricos o alimentos veganos).",
      "Usa siempre la vista de 5 años: no tomes decisiones de compra de inventario masivo basándote solo en una gráfica de los últimos 30 días.",
      "Recuerda que Google Trends mide el 'Interés Relativo' en una escala de 0 a 100, no el volumen absoluto exacto de búsquedas; úsalo para entender la dirección y estacionalidad del mercado.",
      "Valida las tendencias con datos de ventas reales y precios de proveedores antes de comprometer capital."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de Tendencias de Mercado, Validación de Demanda y Análisis Estacional con Google Trends\". Ayuda a importadores, comercios, agencias, franquicias y fabricantes a planificar sus compras y promociones a tiempo.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por análisis de 3 palabras clave en Google Trends a 5 años + reporte de estacionalidad y ciudades top en PDF. • Nivel Intermedio (Con portafolio): $120 - $250 USD por estudio completo de tendencias de mercado (análisis de categoría a 5 años, mapeo de consultas 'Breakout +500%', segmentación geográfica para pauta publicitaria y calendario predictivo en Sheets). • Nivel Senior / Market Demand Forecasting Lead y Consultor de Planificación Comercial: $300 - $600 USD por arquitectura de pronóstico de demanda anual para cadenas de retail y distribuidores, modelos predictivos de abastecimiento estacional, y diseño de hojas de ruta de lanzamiento de nuevos productos.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando el comportamiento de la demanda en el sector de [Industria] y sé que muchas empresas lanzan sus campañas o compran inventario tarde guiándose por la intuición (lo que hace que pierdan las semanas más rentables del año o se queden con stock estancado). Con el análisis avanzado de Google Trends a 5 años es posible predecir con exactitud matemática el mes en que despega el interés de los compradores, en qué ciudades específicas están buscando más y qué términos 'En Aumento (+500%)' están desatendidos para lanzar campañas antes que nadie. Por solo $45 USD yo les entrego el informe de tendencias y calendario estacional en 48 horas. ¿Les gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Realiza un análisis demo en Google Trends para un sector estacional (ej. útiles escolares, turismo o moda) y genera un informe en Canva. Día 2: Contacta a 10 distribuidores, importadores o marcas en LinkedIn y ofréceles una auditoría gratuita de estacionalidad de su producto estrella."
],
    quizQuestions: [
      {
            "question": "¿Qué representa una consulta catalogada como 'En aumento / Breakout' (+500%) en Google Trends?",
            "options": [
                  "Que el servidor de Google se rompió.",
                  "Que el término de búsqueda ha experimentado un crecimiento explosivo superior al 500% en comparación con el período anterior, señalando una necesidad o tendencia emergente urgente en el mercado.",
                  "Que la búsqueda está bloqueada.",
                  "Que la palabra tiene un error ortográfico."
            ],
            "correctIndex": 1,
            "explanation": "Las consultas Breakout son minas de oro para detectar nichos emergentes antes de que se vuelvan hiper-competitivos."
      },
      {
            "question": "¿Por qué es crucial analizar Google Trends con una ventana temporal de 'Últimos 5 años' en lugar de solo 30 días?",
            "options": [
                  "Porque los datos viejos son más baratos.",
                  "Permite distinguir con claridad entre una moda pasajera efímera y una macrotendencia estructural en crecimiento, así como identificar los patrones y meses exactos de estacionalidad anual repetitiva.",
                  "Porque Google borra los datos de menos de 1 año.",
                  "Para que la computadora no se caliente."
            ],
            "correctIndex": 1,
            "explanation": "El análisis a 5 años revela los ciclos estacionales anuales y la salud a largo plazo de la categoría comercial."
      },
      {
            "question": "¿En qué escala numérica presenta Google Trends los datos de interés de búsqueda?",
            "options": [
                  "En dólares exactos.",
                  "En una escala de interés relativo normalizada de 0 a 100, donde 100 representa el punto de máxima popularidad de búsqueda del término en el tiempo y región seleccionados.",
                  "En millones de personas físicas.",
                  "En grados de temperatura."
            ],
            "correctIndex": 1,
            "explanation": "La normalización de 0 a 100 permite comparar la popularidad relativa independientemente del tamaño demográfico total."
      }
]
  },

  // =========================================================================
  // BOOK ID: inm-6
  // =========================================================================
  'inm-6': {
    frameworkName: "Metodología de Minería de Reseñas de 1 y 2 Estrellas (The Amazon & Google Maps 1-Star Goldmine Framework)",
    coreMetrics: [
      "Extracción de Frustraciones No Resueltas de Competidores (Unmet Needs 100%)",
      "Puntuación de Detección de Defectos Críticos de Producto (Flaw Detection Score > 95%)",
      "Tasa de Conversión de Clientes Decepcionados de la Competencia (+40%)",
      "Precisión en Diseño de Propuestas de Valor Anti-Fricción (Score 10/10)",
      "Reducción de Devoluciones al Corregir Errores de la Industria (-60%)"
],
    caseCompany: "Marca de Almohadas Ortopédicas de Espuma Viscoelástica SueñoErgo (Bogotá, Colombia)",
    caseOutcome: "Iba a lanzar una almohada común compitiendo por precio contra marcas chinas baratas en MercadoLibre y Amazon; analizó 250 reseñas de 1 y 2 estrellas de las 5 almohadas más vendidas; descubrió que el 85% de las quejas eran: 'desprende un olor químico a plástico insoportable los primeros 15 días' y 'la funda da mucho calor'; lanzó la almohada 'SueñoErgo Bamboo': tratada sin olor y con funda de bambú transpirable; usó esas ventajas como gancho principal y vendió más de 4,000 unidades en 90 días con una calificación perfecta de 4.9 estrellas.",
    pitfall: "Lanzar un producto o servicio copiando a los líderes de la industria sin revisar sus reseñas negativas, cometiendo los mismos errores de calidad y servicio que ya tienen furiosos a miles de compradores.",
    actionItem1: "Buscar a los 5 competidores más vendidos de tu categoría en Amazon, MercadoLibre o Google Maps y filtrar sus reseñas exclusivamente por '1 Estrella' y '2 Estrellas'.",
    actionItem2: "Construir la 'Matriz de Frustraciones Críticas' en Google Docs clasificando las quejas en 3 categorías: 1. Defectos de Calidad de Producto, 2. Mal Servicio/Atención al Cliente, 3. Promesas Publicitarias Engañosas.",
    actionItem3: "Diseñar tu producto y mensaje comercial como el 'Antídoto Exacto': destacar en tu titular principal que tu producto NO tiene el defecto que los clientes odian de tus competidores.",
    domainContext: "Las reseñas de 1 estrella de tus competidores son el mayor estudio de mercado gratuito del planeta: los clientes decepcionados escriben con lujo de detalles exactamente qué falló y qué desearían que existiera.",
    strategicRationale: "Aplicar minería de opiniones negativas permite construir productos blindados contra fallos, diseñar ofertas irresistibles que atacan las heridas abiertas del mercado y captar clientes desencantados de la competencia.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que miles de clientes decepcionados le están diciendo a tus competidores exactamente qué odian de sus productos y nadie les hace caso? ¡Las reseñas de 1 y 2 estrellas en Amazon, MercadoLibre y Google Maps son la mina de oro más valiosa del mundo para crear un negocio millonario! Cuando una persona está furiosa con una empresa, escribe un párrafo detallado explicando exactamente qué falló ('el producto huele a plástico', 'la costura se rompe a los 3 días', 'el soporte nunca contesta'). Si tú lees esas quejas y creas un producto que resuelva ese dolor específico, el mercado será tuyo. Este tomo te enseña a hacer minería de reseñas para crear ofertas perfectas.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Oro Oculto en las 1 Estrella: Por qué las quejas de tus rivales son tu mayor ventaja competitiva.\n• Capítulo 2: Filtrado y Minería de Opiniones en Amazon, MercadoLibre y Google Maps en 15 minutos.\n• Capítulo 3: La Matriz de Frustraciones en Google Docs: Clasificar dolores de producto, servicio y precio.\n• Capítulo 4: Caso de Estudio Real (SueñoErgo Bogotá): Cómo crearon una almohada de $120,000 USD resolviendo 2 quejas.\n• Capítulo 5: Redacción de Ofertas 'Antídoto': Usar las quejas de los rivales como el titular de tu producto.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer minería de reseñas y diseño de ofertas anti-fricción cobrando entre $45 y $650 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Amazon / MercadoLibre (Filtro oficial gratuito de reseñas de 1 y 2 estrellas): Plataformas oficiales de minería de producto físico.\n2. Google Maps Reviews: Herramienta oficial gratuita para auditar quejas de negocios locales, clínicas, restaurantes y talleres.\n3. Google Docs: Plantilla Oficial de la Matriz de Minería de Reseñas y Banco de Argumentarios Anti-Fricción.",
    ch1CustomNarrative: [
      "En la investigación de mercado tradicional, uno de los procesos más complejos y costosos consiste en identificar las brechas de insatisfacción (Unmet Needs) que los productos y servicios existentes en el mercado no logran resolver de forma satisfactoria.",
      "Los focus groups convencionales y las encuestas genéricas suelen fallar al capturar la intensidad emocional del dolor del consumidor.",
      "Sin embargo, en el entorno del comercio electrónico contemporáneo, los propios usuarios insatisfechos publican voluntariamente auditorías implacables de los fallos de la industria a través de los sistemas de calificación pública en plataformas como Amazon, MercadoLibre, TripAdvisor y Google Maps.",
      "Cuando un cliente experimenta una frustración severa, invierte su tiempo en redactar una reseña de una o dos estrellas detallando con precisión quirúrgica qué falló, qué prometía la publicidad y qué alternativa desearía haber encontrado: analizar sistemáticamente estos testimonios constituye el mecanismo más rápido y certero para concebir productos superiores que capturen la demanda insatisfecha."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO MINAR RESEÑAS DE 1 ESTRELLA EN AMAZON Y GOOGLE MAPS GRATIS:",
      "Paso 1: Identifica a los 3 productos o negocios líderes en ventas de tu categoría en Amazon, MercadoLibre o Google Maps.",
      "Paso 2: Ve a la sección de opiniones del producto -> Haz clic en el filtro: \"Filtrar por: 1 Estrella y 2 Estrellas\".",
      "Paso 3: Abre Google Docs y crea la \"Matriz_Minería_Reseñas_Competencia\": Lee 50 reseñas negativas y copia los patrones repetitivos en 3 columnas: • Columna 1 (El Fallo de Producto): \"La cremallera se rompe en 2 semanas\" / \"La batería dura solo 2 horas\". • Columna 2 (La Frustración Emocional): \"Me dejó tirado en medio de un viaje de trabajo y pasé vergüenza\". • Columna 3 (La Expectativa No Cumplida): \"Pensé que traía cable largo pero es de 20 cm\".",
      "Paso 4: Identifica el \"Dolor Dominante (The 80/20 Pain Point)\": Aquella queja que se repite en más del 60% de los comentarios negativos de la categoría.",
      "Paso 5: Diseña la \"Propuesta de Valor Antídoto\": Asegúrate de que tu producto elimine ese fallo específico y colócalo en letras gigantes en tu empaque, página web y anuncios (ej. \"La única mochila ejecutiva con cremalleras reforzadas de grado militar que NUNCA se atascan\").",
      "Paso 6: Tu mensaje comercial resonará de inmediato con los miles de clientes que han sufrido ese problema con otras marcas."
],
    ch3TacticalSteps: [
      "Semana 1: Selecciona a 3 competidores líderes y extrae 50 reseñas de 1 estrella en Google Docs.",
      "Semana 2: Clasifica los fallos e identifica las 2 quejas más repetidas de toda la categoría.",
      "Semana 3: Ajusta las características de tu producto o servicio para erradicar esos 2 defectos de raíz.",
      "Semana 4: Lanza tu campaña publicitaria utilizando el 'Antídoto' como el gancho principal de venta."
],
    ch4CaseDeepDive: [
      "SueñoErgo en Bogotá planeaba fabricar una almohada viscoelástica compitiendo contra cientos de marcas genéricas importadas que se vendían en Amazon y MercadoLibre.",
      "El fundador minó 250 reseñas de 1 y 2 estrellas de las 5 marcas más vendidas: el 85% de los compradores enfadados se quejaban de dos cosas: 1. 'Desprende un olor químico tóxico a plástico que no se quita en 2 semanas' y 2. 'La funda sintética da un calor insoportable en la noche'.",
      "SueñoErgo diseñó su almohada sometiéndola a un proceso de desgasificación térmica sin olor e incluyó una funda de fibra de bambú hipoalergénica y fresca.",
      "En su portada colocaron el titular: 'La primera almohada ortopédica que NO huele a plástico y se mantiene fresca toda la noche'.",
      "Vendieron más de 4,000 unidades en los primeros 90 días con una calificación récord de 4.9 estrellas, captando a los clientes decepcionados de sus competidores."
],
    ch5RiskMitigation: [
      "Error fatal: Enfocarse en quejas aisladas sobre 'retrasos de paquetería' en lugar de defectos del producto.",
      "Ignora las reseñas que se quejan de la empresa de transporte o de cajas golpeadas; concéntrate exclusivamente en los fallos intrínsecos de calidad, diseño, usabilidad y durabilidad del producto.",
      "No critiques a los competidores por su nombre en tu publicidad: muestra tu solución de forma positiva como el estándar superior de la industria.",
      "Verifica con tu equipo de manufactura o servicio que efectivamente puedes cumplir la promesa anti-fricción para no recibir tú mismo reseñas de 1 estrella."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Minería de Reseñas Negativas de Competidores y Diseño de Ofertas Superiores\". Ayuda a marcas de e-commerce, fabricantes, restaurantes, hoteles, clínicas y talleres a crear productos que superen a sus rivales.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por minería de 100 reseñas negativas de 2 competidores en Amazon/Google Maps + reporte de frustraciones en Google Docs. • Nivel Intermedio (Con portafolio): $130 - $270 USD por estudio completo de brechas de satisfacción (análisis de 250 reseñas de 4 competidores, categorización de fallos, matriz de propuesta de valor 'Antídoto' y redacción de 5 ganchos de anuncios). • Nivel Senior / Product Differentiation Strategist y Consultor de Experiencia del Consumidor: $320 - $650 USD por rediseño integral de portafolio de productos y servicios basado en minería masiva de opiniones, auditoría de reputación de marca y estrategia de captación de clientes de la competencia.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando las opiniones de los clientes en el mercado de [Industria/Producto] y sé que muchas veces las empresas compiten solo por precio sin saber qué defectos y quejas tienen insatisfechos a los clientes de sus principales rivales (lo que representa una oportunidad de oro para diferenciarse). Con la Metodología de Minería de Reseñas de 1 Estrella en Amazon y Google Maps es posible extraer exactamente qué odian los compradores de otras marcas para crear una propuesta de valor superior que resuelva ese dolor de raíz y multiplique tus ventas. Por solo $50 USD yo les entrego la auditoría de quejas y la matriz de propuesta anti-fricción en 48 horas. ¿Les gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Mina 50 reseñas de 1 estrella de un producto popular en Amazon y crea una matriz de frustraciones demo en Google Docs. Día 2: Contacta a 10 vendedores de e-commerce o marcas locales en LinkedIn/Instagram y ofréceles un informe gratuito de fallos de su competencia."
],
    quizQuestions: [
      {
            "question": "¿Por qué las reseñas de '1 y 2 Estrellas' de los competidores en Amazon o Google Maps son consideradas una 'Mina de Oro' para la investigación de mercado?",
            "options": [
                  "Porque Amazon regala puntos por leerlas.",
                  "Porque revelan con exactitud emocional y técnica cuáles son los defectos de producto, fallos de servicio y promesas incumplidas que tienen furiosos a los clientes de la industria, permitiendo crear soluciones que resuelvan ese dolor específico.",
                  "Porque están escritas en código secreto.",
                  "Para denunciar a los competidores ante la policía."
            ],
            "correctIndex": 1,
            "explanation": "Las quejas detalladas de clientes reales exponen las necesidades insatisfechas del mercado de forma 100% gratuita."
      },
      {
            "question": "¿En qué consiste una 'Propuesta de Valor Antídoto' derivada de la minería de reseñas?",
            "options": [
                  "En vender medicamentos con receta.",
                  "En diseñar el mensaje comercial y las características del producto posicionándolo explícitamente como la solución que NO tiene el defecto más odiado y criticado de los productos competidores.",
                  "En ofrecer el producto con el doble de precio.",
                  "En no entregar garantías al cliente."
            ],
            "correctIndex": 1,
            "explanation": "El antídoto ataca la herida abierta del consumidor prometiendo y cumpliendo la solución al fallo que otros cometen."
      },
      {
            "question": "¿Qué tipo de reseñas negativas se deben ignorar durante la minería de opiniones de producto?",
            "options": [
                  "Las quejas sobre calidad del material.",
                  "Las quejas externas ajenas al producto en sí, tales como retrasos puntuales de la empresa de paquetería o cajas de cartón maltratadas por el repartidor.",
                  "Las quejas que tienen fotos.",
                  "Las reseñas de clientes verificados."
            ],
            "correctIndex": 1,
            "explanation": "Filtrar los problemas logísticos externos permite concentrarse en los fallos reales de diseño y valor del producto."
      }
]
  },

  // =========================================================================
  // BOOK ID: inm-7
  // =========================================================================
  'inm-7': {
    frameworkName: "La Ficha de Arquetipo de Cliente Cuantitativo y Mapa de Empatía Basado en Datos (The Data-Driven Buyer Persona Blueprint)",
    coreMetrics: [
      "Precisión en Atributos Basados en Datos vs Suposiciones Ficticias (100% verificado)",
      "Mapeo de las 6 Dimensiones del Mapa de Empatía (Piensa, Siente, Ve, Oye, Dice/Hace, Dolores)",
      "Alineación del Equipo de Ventas y Marketing en el Perfil Ideal (Score 10/10)",
      "Reducción del Costo por Adquisición al Pautar a la Audiencia Exacta (-40%)",
      "Tasa de Conversión de Campañas Personalizadas por Arquetipo (+35%)"
],
    caseCompany: "Plataforma de Software de Gestión Odontológica & Clínicas Dentales DentalSoft (Santiago, Chile)",
    caseOutcome: "Tenía un 'Buyer Persona' ficticio inventado en una reunión ('Dentista Daniel de 40 años que le gusta el golf') con el que creaban anuncios genéricos que nadie convertía; reconstruyó su Buyer Persona basándose en datos reales de Google Analytics 4, encuestas y entrevistas: descubrió que el 70% de los compradores reales eran 'Administradoras de Clínicas Dentales de 28 a 45 años' cuyo mayor dolor era el cuadre de caja de fin de mes y el ausentismo de pacientes; cambiaron sus campañas hacia este arquetipo real y sus demostraciones comerciales aumentaron un 180% en 60 días.",
    pitfall: "Crear 'Buyer Personas de Fantasía' inventados en una sala de reuniones basados en estereotipos cómicos ('Le gusta pasear perros y tomar té') que no guardan relación con el dolor de negocio ni con los datos reales de compra.",
    actionItem1: "Extraer los datos demográficos y de intereses reales de tus clientes en Google Analytics 4 (Informes de Audiencia) y en tu base de datos de compradores.",
    actionItem2: "Construir la 'Ficha de Buyer Persona Cuantitativa' en Canva con 4 Cuadrantes: 1. Contexto y Rol Operativo, 2. Dolores Principales de Negocio, 3. Objeciones de Compra y 4. Disparadores de Decisión.",
    actionItem3: "Mapear el 'Mapa de Empatía Basado en Datos': ¿Qué piensa y siente?, ¿Qué ve en su entorno?, ¿Qué oye de sus colegas?, ¿Qué dolores le quitan el sueño? y ¿Qué resultados anhela?",
    domainContext: "Un Buyer Persona no es un personaje de ficción; es un arquetipo basado en evidencia que sintetiza los patrones de comportamiento, dolores y motivaciones de tus mejores clientes reales.",
    strategicRationale: "Definir Buyer Personas con datos reales alinea a los equipos de marketing y ventas, erradica el gasto publicitario en audiencias equivocadas y multiplica la efectividad de cada mensaje comercial.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué tantas empresas crean un 'Buyer Persona' que dice 'Le gusta salir a correr los domingos y tiene 2 gatos' y luego se preguntan por qué sus anuncios no venden? ¡Porque inventar arquetipos de fantasía es una pérdida de tiempo! Un BUYER PERSONA PROFESIONAL no se inventa con la imaginación: se construye con DATOS REALES de Google Analytics 4, encuestas y entrevistas a compradores reales. El 'Mapa de Empatía Basado en Datos' te enseña a plasmar en una sola ficha visual en Canva qué le duele a tu cliente en su trabajo, qué le quita el sueño a las 2 AM y qué palabras exactas necesita escuchar para comprarte. Este tomo te enseña a crear arquetipos que venden.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Farsa del Buyer Persona Inventado: Por qué los estereotipos ficticios destruyen el presupuesto publicitario.\n• Capítulo 2: Extracción de Datos Demográficos y Comportamiento Real en Google Analytics 4.\n• Capítulo 3: El Mapa de Empatía de 6 Dimensiones: Qué piensa, siente, ve, oye, dice y sufre tu cliente.\n• Capítulo 4: Caso de Estudio Real (DentalSoft Chile): Cómo aumentaron un 180% sus ventas cambiando de arquetipo.\n• Capítulo 5: Diseño de la Ficha Ejecutiva en Canva: Crear un One-Pager visual en PDF para todo el equipo de ventas.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer definición de Buyer Personas basados en datos cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Analytics 4 (analytics.google.com): Informes oficiales de Audiencia (Edad, Género, Ciudad, Dispositivos e Intereses).\n2. Canva (canva.com): Plantilla Oficial de Buyer Persona y Mapa de Empatía en formato PDF ejecutivo descargable.\n3. Google Sheets: Matriz de Consolidación de Datos de Clientes y Agrupación de Arquetipos.",
    ch1CustomNarrative: [
      "En la práctica contemporánea del marketing estratégico, pocas herramientas han sido tan ampliamente difundidas y, a la vez, tan profundamente desvirtuadas como el concepto de 'Buyer Persona'.",
      "En innumerables organizaciones, el ejercicio de definición de arquetipos de cliente se reduce a una sesión informal de lluvia de ideas donde el equipo inventa un personaje ficticio cargado de estereotipos irrelevantes: se le asigna un nombre ficticio, hobbies genéricos y preferencias de ocio que no guardan la menor correlación con los factores que determinan una decisión de compra real.",
      "Estos 'personajes de fantasía' resultan completamente inútiles para la toma de decisiones comerciales y publicitarias.",
      "El Buyer Persona profesional moderno es una representación arquetípica rigurosamente sustentada en datos cuantitativos extraídos de la analítica digital (GA4), los registros transaccionales del CRM y la evidencia cualitativa de entrevistas estructuradas, capturando con exactitud los dolores operativos, las barreras psicológicas y los criterios de valor del comprador."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UN BUYER PERSONA BASADO EN DATOS EN GA4 Y CANVA GRATIS:",
      "Paso 1: Extracción Cuantitativa en Google Analytics 4: Ve a GA4 -> Informes -> Datos Demográficos: Identifica el rango de edad dominante (ej. 25-34 años), género, ciudades principales y tecnología (móvil vs escritorio).",
      "Paso 2: En Google Sheets, cruza los datos con tus 20 mejores clientes del CRM para responder: ¿Quién toma la decisión final de compra? ¿Qué cargo tiene en la empresa?.",
      "Paso 3: Estructura las 6 Dimensiones del Mapa de Empatía: • 1. ¿Qué piensa y siente?: Sus preocupaciones ocultas y aspiraciones profesionales. • 2. ¿Qué ve?: Su entorno de trabajo y qué ofrece la competencia. • 3. ¿Qué oye?: Qué dicen sus colegas y directivos. • 4. ¿Qué dice y hace?: Su comportamiento cotidiano. • 5. Dolores (Pains): Sus mayores frustraciones operativas y miedos a equivocarse. • 6. Necesidades (Gains): Qué resultado medible necesita para ser felicitado por su jefe.",
      "Paso 4: En Canva (canva.com), busca la plantilla \"Buyer Persona / Empathy Map\": Inserta una foto profesional realista, el nombre del arquetipo (ej. \"Laura, Administradora de Clínica Dental\"), y plasma los 4 cuadrantes con tipografía limpia.",
      "Paso 5: Añade la sección \"Objeciones de Venta Innegociables\": Lista los 3 frenos que siempre menciona antes de comprar (ej. \"Teme que el software sea difícil de aprender para su equipo\").",
      "Paso 6: Descarga la ficha en PDF y distribúyela a tus equipos de marketing, redactores y vendedores para que toda la comunicación hable exactamente al mismo arquetipo validado."
],
    ch3TacticalSteps: [
      "Semana 1: Extrae los datos demográficos y de comportamiento de tus clientes en Google Analytics 4 y CRM.",
      "Semana 2: Realiza el ejercicio del Mapa de Empatía de 6 dimensiones consolidando los dolores en Google Sheets.",
      "Semana 3: Diseña la ficha visual de Buyer Persona en Canva en formato PDF de 1 página.",
      "Semana 4: Alinea tus anuncios de Meta/Google Ads y tus correos de prospección con las objeciones y dolores de la ficha."
],
    ch4CaseDeepDive: [
      "DentalSoft en Santiago vendía software para dentistas pero sus anuncios mostraban a 'Daniel Dentista de 45 años jugando golf', logrando un costo por lead carísimo y bajas ventas.",
      "El equipo analizó GA4 y las llamadas de ventas: descubrieron que los odontólogos dueños casi nunca compraban el software directamente, sino que delegaban la decisión en sus 'Administradoras de Clínica' (mujeres de 28 a 40 años).",
      "Su mayor dolor no era la técnica dental, sino el caos de las citas canceladas a última hora y pasar 4 horas cuadrando los pagos de los doctores los sábados por la tarde.",
      "DentalSoft rediseñó su Buyer Persona en Canva llamándolo 'Claudia, Administradora Eficiente' y lanzó anuncios con el mensaje: 'Deja de cuadrar cajas a mano los sábados: DentalSoft automatiza las comisiones de tus doctores en 1 clic'.",
      "Las solicitudes de demostración se dispararon un 180% en 60 días y el costo de adquisición de clientes se redujo un 40%."
],
    ch5RiskMitigation: [
      "Error fatal: Crear más de 5 Buyer Personas para una empresa pequeña o mediana, dispersando el enfoque.",
      "Concéntrate en 1 o máximo 2 Buyer Personas primarios que representen al 80% de tus ingresos más rentables.",
      "No asumas que el 'Usuario' del producto es siempre el 'Comprador' (ej. el software lo usan los empleados pero lo aprueba el director financiero; define al que tiene el poder de compra).",
      "Actualiza la ficha de Buyer Persona cada año para incorporar nuevos hábitos y tecnologías del mercado."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Definición de Buyer Personas Basados en Datos y Mapas de Empatía Ejecutivos\". Ayuda a empresas de software, consultoras, clínicas, escuelas, e-commerce e inmobiliarias a alinear su marketing con sus compradores reales.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por extracción de datos en GA4 + diseño de 1 Ficha de Buyer Persona y Mapa de Empatía en Canva en PDF. • Nivel Intermedio (Con portafolio): $120 - $250 USD por estudio completo de arquetipos de cliente (análisis cuantitativo de base de datos, 2 Fichas de Buyer Personas primario y secundario, mapa de objeciones de venta y recomendaciones para anuncios en Sheets/Canva). • Nivel Senior / Customer Persona Lead y Consultor de Estrategia de Audiencias: $300 - $600 USD por arquitectura integral de segmentación de audiencias para empresas B2B, manual de alineación de ventas y marketing (Smarketing), y optimización de embudos por arquetipos.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando las campañas publicitarias de [Empresa] y sé que muchas veces las empresas gastan miles de dólares en anuncios genéricos que no convierten porque no tienen definido a su Buyer Persona con datos reales de comportamiento y objeciones de compra (lo que hace que el mensaje no resuene con el tomador de decisiones real). Con la metodología de Buyer Personas Basados en Datos de GA4 y Mapas de Empatía en Canva es posible identificar con precisión quién es tu comprador más rentable y qué dolores específicos necesita escuchar para cerrar la venta (reduciendo el costo de adquisición hasta en un 40%). Por solo $45 USD yo les construyo su ficha ejecutiva de Buyer Persona en 48 horas. ¿Les gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña una ficha demo de Buyer Persona y Mapa de Empatía en Canva para un negocio de servicios B2B. Día 2: Contacta a 10 gerentes de marketing o dueños de empresas en LinkedIn y ofréceles auditar gratis si sus anuncios le están hablando al perfil de cliente correcto."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la diferencia fundamental entre un 'Buyer Persona Profesional' y un personaje ficticio tradicional?",
            "options": [
                  "Que el profesional tiene un nombre en inglés.",
                  "El Buyer Persona profesional se construye con evidencia y datos reales cuantitativos (GA4, CRM) y cualitativos (entrevistas), capturando dolores operativos, objeciones y disparadores de compra reales, mientras que el tradicional se basa en suposiciones y estereotipos inventados.",
                  "Que los Buyer Personas tradicionales solo se usan en televisión.",
                  "No hay ninguna diferencia, es lo mismo."
            ],
            "correctIndex": 1,
            "explanation": "La fundamentación en datos reales garantiza que las campañas publicitarias apunten a los verdaderos motivadores de compra del mercado."
      },
      {
            "question": "¿Por qué es crucial diferenciar entre el 'Usuario Final' y el 'Tomador de Decisión / Comprador' al definir un Buyer Persona B2B?",
            "options": [
                  "Porque los usuarios no tienen correo electrónico.",
                  "Porque muchas veces quien utiliza el producto cotidianamente (ej. un empleado o enfermera) no es quien tiene el presupuesto ni aprueba la compra (ej. el director administrativo o financiero), y los mensajes de venta deben dirigirse a quien firma el cheque.",
                  "Porque la ley prohíbe hablar con los empleados.",
                  "Para que el archivo en Canva sea más grande."
            ],
            "correctIndex": 1,
            "explanation": "Comprender quién tiene la autoridad financiera asegura que los argumentos comerciales resuelvan los dolores del comprador real."
      },
      {
            "question": "¿Qué representa el 'Mapa de Empatía' en la investigación de clientes?",
            "options": [
                  "Un mapa geográfico de carreteras.",
                  "Una herramienta visual que sintetiza las 6 dimensiones psicológicas del cliente: qué piensa y siente, qué ve en su entorno, qué oye de sus pares, qué dice/hace, cuáles son sus dolores frustrantes y qué beneficios concretos anhela alcanzar.",
                  "Un contrato de trabajo legal.",
                  "Un examen médico."
            ],
            "correctIndex": 1,
            "explanation": "El mapa de empatía profundiza en el contexto emocional y situacional del cliente para crear mensajes hiper-relevantes."
      }
]
  },

  // =========================================================================
  // BOOK ID: inm-8
  // =========================================================================
  'inm-8': {
    frameworkName: "Protocolo de Focus Group Virtual Moderado y Validación de Prototipos Rápidos (The Lean Virtual Focus Group & Concept Testing Engine)",
    coreMetrics: [
      "Tasa de Participación Activa de Panelistas (Panelist Engagement Rate > 85%)",
      "Puntuación de Aceptación de Concepto de Producto (Concept Acceptance Score > 75%)",
      "Identificación de Objeciones Ocultas de Prototipo (Flaw Uncovering 100%)",
      "Costo de Ejecución Virtual vs Focus Group Tradicional Presencial (-90% ahorro)",
      "Tiempo de Generación de Informe de Hallazgos (< 48 horas post-sesión)"
],
    caseCompany: "Marca de Bebidas Saludables & Snacks Funcionales VivaOrganics (Lima, Perú)",
    caseOutcome: "Iba a gastar $12,000 USD en alquilar una sala de focus group con cámara Gesell para validar el empaque y sabor de una nueva bebida energética natural; organizó 2 Focus Groups Virtuales de 60 minutos por Google Meet con 8 consumidores calificados usando pizarras de Miro y votaciones en Google Forms por menos de $150 USD de costo total; descubrió que el empaque verde oscuro parecía 'detergente de cocina' y que el claim 'Sin azúcar' generaba dudas sobre el sabor; rediseñó la etiqueta a colores frutales vibrantes: su lanzamiento agotó el primer lote en supermercados en 3 semanas.",
    pitfall: "Gastar fortunas en salas de focus groups presenciales con catering y espejos espías, o permitir que un participante dominante e intimidante sesgue las opiniones de todo el grupo sin usar votaciones anónimas.",
    actionItem1: "Reclutar de 6 a 8 participantes calificados que encajen estrictamente con el Buyer Persona y convocarlos a una sesión de 60 minutos en Google Meet o Zoom.",
    actionItem2: "Utilizar 'Votaciones Anónimas y Pizarras Interactivas' en Google Forms o Miro (miro.com) para evitar el 'Efecto Manada' (Groupthink) y que los tímidos expresen su opinión real.",
    actionItem3: "Estructurar la sesión en 4 Bloques: 1. Rompehielos y contexto de consumo, 2. Revelación del Prototipo/Concepto visual, 3. Votación anónima de intención de compra y precio, 4. Debate abierto de objeciones y mejoras.",
    domainContext: "Los focus groups virtuales eliminan las barreras geográficas y de costo de la investigación tradicional, permitiendo testear prototipos, logos y precios con consumidores de todo el país en una sola tarde.",
    strategicRationale: "Ejecutar pruebas de concepto y focus groups virtuales minimiza el riesgo de lanzamientos fallidos, valida la percepción estética y funcional del producto y ahorra miles de dólares en desarrollo.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué las agencias de investigación tradicionales cobran entre $5,000 y $15,000 dólares por hacer un 'Focus Group' en una sala con espejo espía para mostrarle un empaque a 8 personas? ¡Eso es cosa del pasado! Hoy puedes organizar un FOCUS GROUP VIRTUAL de élite por Google Meet o Zoom con consumidores reales de cualquier ciudad por una fracción microscópica de ese costo. Con herramientas 100% GRATUITAS como Miro (pizarras interactivas) y Google Forms (para votaciones anónimas y secretas) lograrás que la gente te diga con total honestidad qué opina de tu nuevo producto, tu logo o tu precio antes de fabricarlo. Este tomo te enseña a moderar focus groups virtuales como un profesional.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Revolución del Focus Group Virtual: Cómo ahorrar el 90% del costo tradicional sin perder rigor.\n• Capítulo 2: Reclutamiento de Panelistas Calificados: El formulario filtro para elegir al Buyer Persona exacto.\n• Capítulo 3: Dinámicas Interactivas con Miro y Votaciones Anónimas en Google Forms para evitar el efecto manada.\n• Capítulo 4: Caso de Estudio Real (VivaOrganics Perú): Cómo evitaron un desastre de empaque en una sesión de 60 minutos.\n• Capítulo 5: El Guion del Moderador Neutral: Técnicas para hacer hablar a los tímidos y neutralizar a los dominantes.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer organización y moderación de Focus Groups Virtuales cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Meet / Zoom: Plataforma oficial para realizar y grabar la sesión virtual en alta definición.\n2. Miro (miro.com) / Canva Whiteboards: Pizarras interactivas gratuitas para que los participantes peguen post-its y voten.\n3. Google Forms: Votación secreta de intención de compra y valoración de precio en tiempo real.",
    ch1CustomNarrative: [
      "Durante más de medio siglo, las sesiones de grupo focalizadas (Focus Groups) constituyeron la metodología reina de la investigación cualitativa de mercados para evaluar la reacción emocional del público ante nuevos productos, campañas publicitarias o rediseños de marca.",
      "Sin embargo, el formato presencial tradicional conllevaba enormes barreras operativas: requería el alquiler de instalaciones costosas equipadas con cámaras Gesell (espejos unidireccionales), catering y complejos incentivos económicos que elevaban los presupuestos por encima de los diez mil dólares, reservando esta herramienta únicamente a grandes corporaciones multinacionales.",
      "Asimismo, las sesiones presenciales sufrían de sesgos psicológicos severos, como la tiranía del participante extrovertido o el conformismo social (Groupthink), donde las opiniones disidentes eran silenciadas por la presión del grupo.",
      "El Focus Group Virtual democratiza y perfecciona esta disciplina: al operar a través de videoconferencia remota con votaciones anónimas y pizarras interactivas digitales, permite capturar retroalimentación honesta, representativa y geográficamente diversa en tiempo récord y a costos marginales mínimos."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO MODERAR UN FOCUS GROUP VIRTUAL EN GOOGLE MEET Y MIRO GRATIS:",
      "Paso 1: Reclutamiento con Formulario Filtro en Google Forms: Publica una convocatoria en redes buscando a personas que cumplan tu perfil exacto (ej. \"Madres de 25 a 40 años que compren snacks saludables al menos 2 veces por semana\"). Selecciona a 8 participantes y ofréceles una tarjeta de regalo digital o un lote de producto como agradecimiento.",
      "Paso 2: Prepara la Pizarra en Miro (miro.com): Sube las imágenes de tus 2 prototipos de producto, logotipos o conceptos visuales.",
      "Paso 3: Conéctate en Google Meet y ejecuta la Sesión de 60 Minutos en 4 Bloques: • Bloque 1 (10 min): Bienvenida cálida, reglas de sinceridad total (\"aquí no hay respuestas correctas ni incorrectas\") y rompehielos.",
      "Paso 4: • Bloque 2 (20 min): Presentación del Prototipo: Muestra el concepto visual en Miro y pide a cada participante que pegue un post-it digital anónimo con: \"Lo que más me gustó\" y \"Lo que me generó desconfianza\".",
      "Paso 5: • Bloque 3 (15 min): Votación Secreta en Google Forms: Envía un enlace en el chat con 2 preguntas: \"¿Comprarías este producto? (Sí/No)\" y \"¿Cuánto pagarías por él en el supermercado? ($)\"; la votación anónima garantiza que nadie copie la opinión de los demás.",
      "Paso 6: • Bloque 4 (15 min): Debate de Cierre y Agradecimiento: Discute los resultados de la votación en vivo y profundiza en las dudas.",
      "Paso 7: Con la grabación de Google Meet y las respuestas de Forms, redacta el Informe Ejecutivo de Hallazgos en 2 páginas en Google Docs."
],
    ch3TacticalSteps: [
      "Semana 1: Diseña el formulario de filtro en Google Forms y recluta a los 8 panelistas calificados.",
      "Semana 2: Prepara la pizarra de Miro con las imágenes del prototipo y el formulario de votación secreta.",
      "Semana 3: Modera la sesión de 60 minutos en Google Meet aplicando la neutralidad de moderador.",
      "Semana 4: Consolida los aprendizajes en un informe ejecutivo de 2 páginas con recomendaciones directas de diseño."
],
    ch4CaseDeepDive: [
      "VivaOrganics en Lima era una marca de bebidas saludables que planeaba lanzar un energizante natural y una agencia tradicional le cotizó $12,000 USD por 2 focus groups presenciales en salas de lujo.",
      "La fundadora decidió ejecutar 2 Focus Groups Virtuales por Google Meet utilizando Miro y Google Forms con 16 consumidores jóvenes de Lima, Arequipa y Trujillo con un presupuesto total de solo $150 USD en incentivos.",
      "Durante la votación anónima, el 80% de los panelistas confesó que el empaque verde oscuro les recordaba a un envase de detergente para platos y que la frase '0% Azúcar' les hacía pensar que tendría un sabor amargo a medicina.",
      "VivaOrganics rediseñó el empaque en Canva usando tonos naranja y morado brillante con la frase: 'Sabor Frutas Tropicales con Guaraná Natural'.",
      "Lanzaron la bebida en cadenas de supermercados y agotaron las primeras 10,000 unidades en solo 3 semanas gracias a las correcciones del focus group virtual."
],
    ch5RiskMitigation: [
      "Error fatal: El 'Sesgo del Moderador' (defender tu producto o discutir con un participante que critica el prototipo).",
      "El moderador debe ser 100% neutral y agradecer todas las críticas negativas con una sonrisa: 'Muchas gracias por tu sinceridad, eso es exactamente lo que necesitamos saber'.",
      "Nunca hagas la votación de precios o compra 'a mano alzada en cámara': los participantes se copian entre sí; usa siempre el formulario de Google Forms anónimo para obtener la verdad.",
      "Limita el grupo a máximo 8 personas: con más de 8 personas la sesión se vuelve caótica y los más tímidos no participan."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Organización y Moderación de Focus Groups Virtuales y Pruebas de Concepto\". Ayuda a marcas de alimentos, e-commerce, moda, apps, cosmética y clínicas a testear sus productos antes de producirlos.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por organización y moderación de 1 Focus Group Virtual de 45 min en Google Meet + informe de conclusiones en Google Docs. • Nivel Intermedio (Con portafolio): $140 - $280 USD por estudio completo de validación de concepto (reclutamiento con formulario filtro, preparación de pizarra interactiva en Miro, moderación de 2 sesiones virtuales con votación anónima y reporte ejecutivo en PDF). • Nivel Senior / Qualitative Research Lead y Moderador de Pruebas de Concepto: $350 - $700 USD por programa integral de investigación cualitativa para marcas consolidadas, pruebas de concepto multiplataforma, análisis psicológico de percepción y recomendaciones de packaging/pricing.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve viendo el desarrollo del nuevo producto/concepto de [Empresa] y sé que muchas veces las empresas lanzan empaques, marcas o precios al mercado basándose solo en opiniones internas de la oficina (lo que puede generar rechazo en los clientes y pérdidas de miles de dólares en inventario). Con la metodología de Focus Groups Virtuales en Google Meet y pizarras interactivas de Miro es posible reunir a 8 consumidores reales de su Buyer Persona en una sesión de 60 minutos para evaluar su prototipo con votaciones anónimas y honestas antes de fabricarlo. Por solo $50 USD yo les organizo y modero su primer focus group virtual en 48 horas. ¿Les gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña una pizarra demo de Focus Group en Miro y un formulario de votación en Google Forms para un producto de prueba. Día 2: Contacta a 10 marcas de productos físicos, alimentos o apps en LinkedIn y ofréceles moderar gratis una sesión de prueba de concepto con consumidores."
],
    quizQuestions: [
      {
            "question": "¿Por qué se deben utilizar 'Votaciones Anónimas' (en Google Forms) durante un Focus Group Virtual en lugar de preguntar en voz alta?",
            "options": [
                  "Para que la reunión sea en silencio.",
                  "Para erradicar el efecto de conformidad social y pensamiento de grupo (Groupthink), garantizando que los participantes expresen su intención de compra y disposición a pagar real y honesta sin sentirse intimidados por las opiniones de los demás.",
                  "Porque la ley prohíbe hablar de precios.",
                  "Para ahorrar batería en la computadora."
            ],
            "correctIndex": 1,
            "explanation": "El anonimato en las votaciones protege la sinceridad individual eliminando la presión social de complacer al grupo."
      },
      {
            "question": "¿Cuál es el tamaño de grupo óptimo para un Focus Group Virtual en Google Meet o Zoom?",
            "options": [
                  "100 personas conectadas al mismo tiempo.",
                  "Entre 6 y 8 participantes calificados, lo que permite una conversación fluida, participación equilibrada y tiempo suficiente para profundizar en las percepciones de cada uno.",
                  "1 sola persona.",
                  "No hay límite."
            ],
            "correctIndex": 1,
            "explanation": "Un grupo de 6 a 8 panelistas es el estándar de oro para mantener dinamismo sin saturar los tiempos de palabra."
      },
      {
            "question": "¿Cuál debe ser la postura del moderador ante un participante que critica duramente el prototipo presentado?",
            "options": [
                  "Expulsarlo de la videollamada de inmediato.",
                  "Mantener una neutralidad absoluta, agradecer sinceramente la crítica y pedirle que explique con más detalle el motivo de su frustración, ya que las opiniones negativas revelan los defectos que salvarán al negocio del fracaso.",
                  "Discutir con el participante y defender la empresa.",
                  "Decirle que no sabe nada de diseño."
            ],
            "correctIndex": 1,
            "explanation": "El moderador profesional busca la verdad no filtrada del mercado sin sesgar ni juzgar las opiniones de los usuarios."
      }
]
  },

  // =========================================================================
  // BOOK ID: inm-9
  // =========================================================================
  'inm-9': {
    frameworkName: "La Ecuación Tripartita de Estimación de Mercado de Arriba hacia Abajo y de Abajo hacia Arriba (TAM, SAM, SOM Top-Down & Bottom-Up Model)",
    coreMetrics: [
      "Precisión en Estimación del TAM (Total Addressable Market en $ USD)",
      "Precisión en Delimitación del SAM (Serviceable Addressable Market en $ USD)",
      "Factibilidad Cuantificada del SOM a 3 Años (Serviceable Obtainable Market en $ USD)",
      "Cálculo Bottom-Up (Nº Clientes Potenciales x Gasto Medio Anual - ACV)",
      "Puntuación de Rigor Estadístico ante Fondos de Inversión y Bancos (Score 10/10)"
],
    caseCompany: "Plataforma de Software Veterinario & Telemedicina para Mascotas VetCloud (Bogotá, Colombia)",
    caseOutcome: "Presentaba a inversionistas un mercado inventado diciendo que 'si capturamos el 1% del mercado mundial de mascotas de $200 mil millones seremos millonarios' siendo rechazado por todos los fondos; estructuró el modelo TAM, SAM y SOM con el método Bottom-Up en Google Sheets basándose en datos del censo oficial: TAM (45,000 veterinarias en LATAM = $54M USD), SAM (8,200 veterinarias digitalizadas en Colombia y México = $9.8M USD), SOM (Capturar el 12% del SAM en 3 años = 984 clínicas = $1.18M USD en ARR); cerró una ronda de inversión de $250,000 USD en 6 semanas.",
    pitfall: "Cometer el error infantil de la 'Falacia del 1%': multiplicar el PIB o el mercado mundial total por el 1% sin demostrar cómo se llegará físicamente a esos clientes, destruyendo la credibilidad ante bancos e inversores.",
    actionItem1: "Dominar la Tríada de Dimensionamiento: 1. TAM (Mercado Total Direccionable mundial), 2. SAM (Mercado Disponible que tu modelo puede atender geográficamente), 3. SOM (Mercado Real Obtenible a 3-5 años con tu capacidad comercial).",
    actionItem2: "Construir la Estimación 'Bottom-Up (De Abajo hacia Arriba)': SOM = (Número Real de Clientes Alcanzables en tu Región) x (Precio Promedio Anual de tu Producto - ACV).",
    actionItem3: "Validar los datos demográficos utilizando fuentes oficiales públicas y gratuitas de censos e institutos de estadística de tu país (INEGI en México, DANE en Colombia, INE en Chile).",
    domainContext: "Dimensionar el mercado no es un ejercicio de adivinación; es una modelación matemática que demuestra la viabilidad económica y el techo máximo de ingresos de un proyecto empresarial.",
    strategicRationale: "Calcular con precisión el TAM, SAM y SOM otorga solidez indiscutible a cualquier plan de negocio, evita perseguir mercados demasiado pequeños para ser rentables y abre las puertas del financiamiento de capital.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Sabías que cuando un emprendedor le dice a un banco o inversionista 'nuestro mercado es de 500 mil millones y solo necesitamos el 1% para ser ricos', los inversores se ríen y rechazan el proyecto al instante? ¡Eso se llama 'La Falacia del 1%' y es el error más común de los novatos! El verdadero dimensionamiento de mercado se calcula mediante la fórmula 'TAM, SAM y SOM' usando el método 'Bottom-Up' (de abajo hacia arriba): calculando cuántos clientes existen físicamente en tu ciudad o país y multiplicándolo por cuánto dinero te pagarán al año. Con una plantilla en Google Sheets podrás calcular el tamaño exacto de cualquier negocio en minutos con rigor financiero. Este tomo te enseña a calcular el tamaño del mercado como un banquero de inversión.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Falacia del 1%: Por qué los inversores rechazan los números inflados de fantasía.\n• Capítulo 2: La Tríada TAM, SAM y SOM explicada con manzanas: Del mundo entero a tu mercado real.\n• Capítulo 3: El Método Bottom-Up (De Abajo hacia Arriba): Nº de clientes reales x Gasto anual (ACV).\n• Capítulo 4: Caso de Estudio Real (VetCloud Bogotá): Cómo levantaron $250,000 USD con un modelo Bottom-Up.\n• Capítulo 5: Fuentes Públicas y Gratuitas: INEGI, DANE, INE y Banco Mundial para respaldar tus datos.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer estudios de dimensionamiento de mercado cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets: Calculadora Maestra Financiera de TAM, SAM y SOM con gráficos de círculos concéntricos.\n2. Portales Oficiales de Estadística (INEGI México / DANE Colombia / INE Chile): Fuentes oficiales gratuitas de censos económicos.\n3. Canva: Plantilla Oficial de Diapositiva de TAM/SAM/SOM para Pitch Decks y Planes de Negocio ejecutivos.",
    ch1CustomNarrative: [
      "En la evaluación financiera de nuevos proyectos empresariales y rondas de levantamiento de capital, uno de los errores más recurrentes y destructores de credibilidad es la incapacidad del fundador para dimensionar con rigor el tamaño del mercado al que aspira ingresar.",
      "La manifestación más común de este problema es la denominada 'Falacia del 1%' (The 1% Fallacy), en la que un emprendedor cita una estadística macroeconómica colosal (ej. 'La industria alimentaria mueve 2 billones de dólares') y sostiene ingenuamente que 'capturando apenas el 1% del mercado global alcanzará el éxito financiero inmediato'.",
      "Los inversionistas experimentados, directores financieros y comités bancarios descartan automáticamente este razonamiento por carecer de rigor operativo: ignora las barreras de distribución geográfica, las limitaciones regulatorias, la competencia local y la capacidad finita de ventas de la empresa.",
      "El modelo de dimensionamiento estructurado TAM, SAM y SOM mediante aproximaciones 'Bottom-Up' (de abajo hacia arriba) sustituye las ilusiones macroeconómicas por una modelación matemática granular sustentada en censos económicos reales y valor medio de transacción anual."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CALCULAR TAM, SAM Y SOM EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Abre Google Sheets y define la Tríada de Dimensionamiento:",
      "Paso 2: • TAM (Total Addressable Market / Mercado Total): Demanda total mundial o regional del 100% de la categoría sin límites geográficos. Fórmula: [Nº Total de Clientes Potenciales en el Mundo] x [Precio Promedio Anual (ACV)]. (Ej. 45,000 clínicas veterinarias en LATAM x $1,200 USD/año = $54,000,000 USD).",
      "Paso 3: • SAM (Serviceable Addressable Market / Mercado Disponible): El segmento del TAM al que puedes llegar con tu modelo de negocio, tecnología y presencia geográfica actual. (Ej. 8,200 clínicas veterinarias formalmente digitalizadas en Colombia y México x $1,200 USD/año = $9,840,000 USD).",
      "Paso 4: • SOM (Serviceable Obtainable Market / Mercado Real Obtenible a 3 Años): La porción del SAM que puedes capturar de forma realista considerando tu equipo de ventas, presupuesto de marketing y competencia. (Ej. Capturar el 12% del SAM en 3 años = 984 clínicas x $1,200 USD/año = $1,180,800 USD en ingresos anuales recurrentes - ARR).",
      "Paso 5: En Google Sheets, usa las funciones de censos oficiales (ej. DANE / INEGI) para citar las fuentes públicas exactas de cada número.",
      "Paso 6: En Canva, traslada los resultados a un diagrama visual de 3 círculos concéntricos (TAM grande, SAM mediano y SOM en el centro destacado en color oro) para incluirlo en tu plan de negocios o presentación de ventas."
],
    ch3TacticalSteps: [
      "Semana 1: Investiga en el portal de estadísticas oficial de tu país el número exacto de empresas o personas de tu nicho.",
      "Semana 2: Define el Precio Promedio Anual (ACV) de tu producto o servicio en Google Sheets.",
      "Semana 3: Calcula el TAM, SAM y SOM aplicando las fórmulas de arriba hacia abajo y de abajo hacia arriba.",
      "Semana 4: Diseña la diapositiva ejecutiva de círculos concéntricos en Canva lista para inversores o bancos."
],
    ch4CaseDeepDive: [
      "VetCloud en Bogotá era un software de gestión clínica para veterinarias cuyos fundadores intentaban levantar inversión diciendo que 'el mercado global de mascotas es de $200 mil millones y solo queremos el 0.1%', siendo rechazados por 12 fondos de capital.",
      "Reestructuraron su modelo aplicando el cálculo Bottom-Up en Google Sheets: utilizaron los datos del censo del DANE e INEGI para demostrar que existían 8,200 veterinarias con internet en sus países foco (SAM de $9.8M USD).",
      "Demostraron que contratando a 3 ejecutivos de venta podían cerrar 32 clínicas al mes, capturando el 12% del SAM en 3 años (SOM de $1.18M USD anuales con nombre y apellido de los clientes).",
      "Presentaron la diapositiva en Canva con la justificación financiera paso a paso.",
      "Un fondo de capital privado les otorgó una ronda semilla de $250,000 USD en solo 6 semanas felicitándolos por la claridad y realismo de sus números."
],
    ch5RiskMitigation: [
      "Error fatal: Presentar un SOM que represente el '80% o 100% del mercado' en los primeros 3 años.",
      "En mercados competitivos, capturar entre el 5% y el 15% del SAM en un horizonte de 3 a 5 años es una meta ambiciosa, creíble y altamente rentable; metas del 80% del mercado denotan falta de madurez comercial.",
      "Cita siempre las fuentes primarias de tus datos demográficos (institutos de estadística oficiales o reportes de cámaras de comercio) en el pie de página de la hoja de cálculo.",
      "Ajusta el precio promedio anual (ACV) considerando posibles descuentos o cancelaciones (Churn) para no sobrestimar los ingresos futuros."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Estudio de Dimensionamiento de Mercado (TAM, SAM, SOM) para Planes de Negocio e Inversores\". Ayuda a startups, franquicias, inmobiliarias, importadores y emprendedores a validar la viabilidad financiera de sus proyectos.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por cálculo básico de TAM, SAM y SOM en Google Sheets + fuentes de censos oficiales en PDF. • Nivel Intermedio (Con portafolio): $140 - $280 USD por estudio completo de dimensionamiento de mercado (cálculo Bottom-Up y Top-Down, análisis demográfico del DANE/INEGI, diapositiva ejecutiva en Canva para Pitch Deck e informe financiero en Sheets). • Nivel Senior / Market Sizing Lead y Consultor de Modelación Financiera para Startups: $350 - $700 USD por modelo financiero integral a 5 años para levantamiento de capital, proyecciones de penetración de mercado de SOM, análisis de sensibilidad y asesoría en rondas de inversión.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando el proyecto de expansión de [Empresa/Startup] y sé que cuando se busca financiamiento con bancos o inversionistas una de las mayores exigencias es demostrar con exactitud matemática el tamaño real del mercado mediante el modelo TAM, SAM y SOM con enfoque Bottom-Up (y que los números basados en suposiciones genéricas suelen ser rechazados de inmediato). Con nuestra Calculadora Maestra en Google Sheets y datos de censos económicos oficiales es posible estructurar el dimensionamiento financiero exacto de tu negocio para defenderlo con autoridad ante cualquier comité de inversión. Por solo $50 USD yo les realizo el estudio completo de TAM/SAM/SOM en 48 horas. ¿Les gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Modela el TAM, SAM y SOM demo en Google Sheets para una franquicia o software con fuentes del INEGI/DANE. Día 2: Contacta a 10 fundadores de startups o emprendedores en LinkedIn y ofréceles auditar gratis la diapositiva de tamaño de mercado de su pitch deck."
],
    quizQuestions: [
      {
            "question": "¿Qué significan las siglas TAM, SAM y SOM en el dimensionamiento financiero de mercado?",
            "options": [
                  "Texto, Audio, Música y Sonido.",
                  "TAM (Total Addressable Market / Mercado Total Mundial), SAM (Serviceable Addressable Market / Mercado Disponible que puedes atender) y SOM (Serviceable Obtainable Market / Mercado Real Obtenible a 3-5 años con tu capacidad operativa).",
                  "Tasa, Activo, Margen y Saldo.",
                  "Son formatos de archivos de computadora."
            ],
            "correctIndex": 1,
            "explanation": "La tríada TAM-SAM-SOM desglosa el mercado desde el límite teórico global hasta el objetivo comercial alcanzable a corto plazo."
      },
      {
            "question": "¿Por qué el método 'Bottom-Up' (De Abajo hacia Arriba) es el más confiable y respetado por inversionistas?",
            "options": [
                  "Porque usa números al azar.",
                  "Porque calcula el tamaño del mercado multiplicando el número real de clientes alcanzables físicamente (según censos y datos empíricos) por el gasto o precio promedio anual real que pagará cada cliente, en lugar de aplicar porcentajes inventados a cifras astronómicas.",
                  "Porque no utiliza matemáticas.",
                  "Para que el archivo pese menos."
            ],
            "correctIndex": 1,
            "explanation": "El método Bottom-Up demuestra viabilidad operativa real conectando clientes individuales con transacciones concretas."
      },
      {
            "question": "¿En qué consiste la denominada 'Falacia del 1%' al presentar un plan de negocios?",
            "options": [
                  "En cobrar el 1% de comisión bancaria.",
                  "En citar un mercado mundial gigante de miles de millones de dólares y afirmar que con solo capturar el 1% la empresa será exitosa, sin explicar cómo se adquirirán operativamente esos clientes ni considerar las barreras locales de competencia.",
                  "En tener solo el 1% de batería en el celular.",
                  "En ofrecer un 1% de descuento a los clientes."
            ],
            "correctIndex": 1,
            "explanation": "La falacia del 1% es una ilusión teórica que carece de plan de distribución y rigor comercial."
      }
]
  },

  // =========================================================================
  // BOOK ID: inm-10
  // =========================================================================
  'inm-10': {
    frameworkName: "El Cuadro de Mando de Inteligencia de Mercado y Alertas Tempranas (The Market Radar & Competitive Dashboard)",
    coreMetrics: [
      "Tiempo de Detección de Cambios de Precios y Ofertas de Competidores (< 12 horas)",
      "Puntuación de Cobertura de Alertas de Mercado en Google Alerts (100% eventos clave)",
      "Centralización de Métricas en Looker Studio (Visitas, Cuota de Búsqueda y Menciones)",
      "Alineación Directiva en Decisiones de Mercado en Tiempo Real (Score 10/10)",
      "Reducción del Tiempo de Análisis Manual de Mercado (-85% horas al mes)"
],
    caseCompany: "Cadena de Tiendas de Tecnología & Electrónica de Consumo TecnoPlaza (Guadalajara, México)",
    caseOutcome: "Se enteraba de las promociones y bajas de precios de sus competidores 3 semanas tarde cuando los clientes ya habían comprado en otra tienda; implementó un Sistema de Inteligencia de Mercado en Google Looker Studio integrado con Google Alerts automáticas ('Nuevos productos de competidor', 'Cambios normativos de importación') y monitoreo semanal de precios en Google Sheets; comenzó a recibir alertas en su correo al instante ante cada movimiento de sus rivales y pudo igualar ofertas en menos de 24 horas, aumentando su retención de clientes en un 42% y ganando $85,000 USD extras en ventas anuales.",
    pitfall: "Hacer un estudio de mercado una sola vez al año y guardarlo en un cajón olvidado, operando los siguientes 364 días completamente a ciegas ante los cambios de precios, nuevos productos y promociones agresivas de la competencia.",
    actionItem1: "Configurar 'Google Alerts' (google.com/alerts) 100% gratis con los nombres de tus 5 principales competidores, directores y palabras clave críticas de la industria para recibir notificaciones automáticas en tiempo real.",
    actionItem2: "Construir un 'Cuadro de Mando Ejecutivo en Google Looker Studio' (lookerstudio.google.com) conectando fuentes de Google Search Console, Google Trends y hojas de cálculo de precios de competidores en una sola pantalla visual.",
    actionItem3: "Establecer la 'Rutina del Radar de los Lunes': dedicar 15 minutos al inicio de la semana para revisar el panel de Looker Studio y ajustar precios, inventarios o mensajes publicitarios ante los movimientos del mercado.",
    domainContext: "La investigación de mercado no es un evento estático que se realiza una sola vez; es un sistema continuo de vigilancia e inteligencia que protege a la empresa y detecta oportunidades antes que nadie.",
    strategicRationale: "Implementar un cuadro de mando de inteligencia de mercado continuo transforma la toma de decisiones directiva de reactiva a proactiva, garantizando la supremacía comercial de la organización.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\n¿Por qué tantas empresas hacen un 'Estudio de Mercado' cuando abren el negocio y nunca más vuelven a investigar, quedándose dormidas mientras sus competidores bajan precios, lanzan mejores productos y les quitan a sus mejores clientes? ¡El mercado cambia todos los días! La investigación de mercado profesional no es un informe estático en PDF: es un 'SISTEMA DE INTELIGENCIA Y ALERTAS CONTINUO'. Con herramientas 100% GRATUITAS como Google Alerts (para recibir avisos cuando tu competidor lance algo nuevo) y Google Looker Studio (para tener un panel ejecutivo con gráficos en vivo) tendrás el control total de tu sector en una sola pantalla. Este tomo final te enseña a construir tu radar de mercado permanente.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Muerte del Estudio de Mercado Estático: Por qué investigar 1 vez al año ya no sirve.\n• Capítulo 2: Configuración de Alertas Tempranas con Google Alerts Gratis: Espiar menciones y lanzamientos en tiempo real.\n• Capítulo 3: Construcción del Tablero de Inteligencia de Mercado en Google Looker Studio sin programar.\n• Capítulo 4: Caso de Estudio Real (TecnoPlaza México): Cómo retuvieron $85,000 USD en ventas reaccionando en 24 horas.\n• Capítulo 5: La Rutina del Radar de los Lunes: 15 minutos a la semana para tomar decisiones estratégicas.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer implementación de tableros de inteligencia competitiva cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Looker Studio (lookerstudio.google.com): Plataforma oficial gratuita de cuadros de mando y dashboards ejecutivos en vivo.\n2. Google Alerts (google.com/alerts): Monitor oficial gratuito de menciones de marcas, competidores y noticias de la industria.\n3. Google Sheets: Base de datos centralizada de seguimiento de precios, promociones y cuota de mercado.",
    ch1CustomNarrative: [
      "En el entorno de negocios del siglo XXI, caracterizado por la velocidad de la digitalización, la volatilidad de los precios y la agresividad competitiva, considerar la investigación de mercado como un evento puntual y esporádico constituye una negligencia estratégica de primer orden.",
      "Muchas compañías cometen el error de encargar un estudio de mercado exhaustivo únicamente durante la fase de fundación o rediseño corporativo, para luego archivar el documento en una carpeta digital y operar durante años bajo supuestos fijos e inmutables.",
      "Mientras tanto, el mercado muta continuamente: emergen nuevos competidores con modelos de suscripción, los precios de los insumos fluctúan, las preferencias de los consumidores evolucionan y los competidores tradicionales despliegan campañas agresivas.",
      "El modelo contemporáneo de 'Inteligencia de Mercado Continua' sustituye el informe estático por un ecosistema vivo de radares, alertas tempranas automatizadas y cuadros de mando visuales en Looker Studio que monitorean el pulso del mercado en tiempo real, dotando a la directiva de una capacidad de reacción instantánea y ventaja competitiva sostenida."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UN RADAR DE MERCADO EN GOOGLE ALERTS Y LOOKER STUDIO GRATIS:",
      "Paso 1: Configura tus Radares en Google Alerts (google.com/alerts): Crea 5 alertas gratuitas: • Alerta 1: [\"Nombre de Competidor 1\"] • Alerta 2: [\"Nombre de Competidor 2\"] • Alerta 3: [\"Nombre de tu Empresa\"] • Alerta 4: [\"Regulación / Ley de tu Sector\"] • Alerta 5: [\"Nuevos productos en [Tu Categoría]\"]. Configura la frecuencia en \"En el momento en que se produzca\" o \"Resumen diario\".",
      "Paso 2: En Google Sheets, crea la hoja \"Registro_Precios_Competencia\": Pon las columnas: Fecha, Competidor, Producto, Precio Actual y Promoción Vigente.",
      "Paso 3: Entra a Google Looker Studio (lookerstudio.google.com) y crea un informe en blanco.",
      "Paso 4: Conecta tus Fuentes Gratuitas: Conecta la hoja de Google Sheets de precios, tu cuenta de Google Search Console (para ver impresiones y clics de búsqueda) y Google Analytics 4.",
      "Paso 5: Diseña el Tablero Ejecutivo Visual: Inserta 3 gráficos clave: • Gráfico 1: Comparativa de Precios de la Categoría a lo largo del tiempo. • Gráfico 2: Cuota de Búsqueda de tu Marca vs Competidores en Google. • Gráfico 3: Tabla de Alertas y Novedades del Mercado.",
      "Paso 6: Comparte el enlace interactivo con los directores de la empresa y programa el envío automático de un resumen en PDF todos los lunes a las 8:00 AM; el equipo directivo tendrá la inteligencia de todo el mercado en su bandeja de entrada sin esfuerzo."
],
    ch3TacticalSteps: [
      "Semana 1: Configura las alertas de tus competidores y sector en Google Alerts vinculadas a tu correo.",
      "Semana 2: Diseña la hoja de seguimiento de precios y promociones de la categoría en Google Sheets.",
      "Semana 3: Construye el panel visual interactivo en Google Looker Studio con gráficos en vivo.",
      "Semana 4: Establece la reunión de 15 minutos de los lunes para revisar el radar y ajustar estrategias comerciales."
],
    ch4CaseDeepDive: [
      "TecnoPlaza en Guadalajara era una cadena de tiendas de electrónica cuyos gerentes se enteraban de las promociones y rebajas de precios de sus competidores semanas después cuando las ventas de sus locales caían.",
      "Implementaron el Radar de Mercado en Looker Studio y Google Alerts: configuraron alertas para las páginas de sus rivales y crearon un dashboard en Looker Studio que comparaba precios de los 20 productos más vendidos.",
      "A las dos semanas, una cadena competidora lanzó un descuento relámpago del 25% en laptops gamer: Google Alerts notificó a TecnoPlaza en menos de 4 horas.",
      "TecnoPlaza activó una contra-promoción inmediata con entrega express gratuita ese mismo día en redes sociales.",
      "Neutralizaron el ataque comercial de su rival, retuvieron a sus clientes habituales y generaron más de $85,000 USD extras en ventas anuales gracias a la velocidad de respuesta de su radar."
],
    ch5RiskMitigation: [
      "Error fatal: Crear 'alertas demasiado genéricas' en Google Alerts (ej. poner la palabra 'tecnología' que te enviará 500 correos basura al día).",
      "Usa siempre comillas para buscar frases exactas (ej. \"Nombre Exacto de la Empresa\") para recibir únicamente notificaciones relevantes y libres de spam.",
      "No obsesionarse con la competencia hasta descuidar la innovación propia: el radar es para estar informado y reaccionar, no para copiar ciegamente todo lo que hacen los demás.",
      "Asegúrate de que los permisos del enlace de Looker Studio estén configurados solo para personas autorizadas de tu empresa para proteger tus análisis estratégicos."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Implementación de Tableros de Inteligencia Competitiva en Looker Studio y Alertas Automáticas\". Ayuda a cadenas de retail, importadores, concesionarias, agencias, franquicias y directores a monitorear su mercado en tiempo real.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por configuración de 5 Google Alerts + plantilla de seguimiento de precios en Google Sheets. • Nivel Intermedio (Con portafolio): $140 - $280 USD por sistema completo de inteligencia competitiva (configuración de alertas, diseño de Dashboard interactivo en Google Looker Studio con gráficos en vivo de precios y búsqueda, y capacitación de uso). • Nivel Senior / Chief Market Intelligence Architect y Consultor de Vigilancia Estratégica: $350 - $700 USD por centro de comando corporativo de inteligencia de mercado para grandes empresas, integración multi-fuente de APIs de monitoreo, informes ejecutivos mensuales para comités de dirección y protocolos de reacción rápida.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], estuve analizando la dinámica comercial en el mercado de [Industria] y sé que muchas empresas operan con estudios de mercado estáticos de hace años sin tener visibilidad en tiempo real de cuándo sus competidores bajan precios, lanzan promociones o sacan nuevos productos (lo que hace que se enteren tarde cuando ya perdieron clientes). Con un Tablero de Inteligencia de Mercado en Google Looker Studio y Alertas Automáticas en Google Alerts es posible monitorear a toda la competencia en una sola pantalla visual y recibir notificaciones en menos de 12 horas ante cualquier movimiento comercial para reaccionar antes que nadie. Por solo $50 USD yo les configuro el radar y el tablero en 48 horas. ¿Les gustaría agendar una llamada breve de 20 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña un dashboard demo de inteligencia de mercado en Google Looker Studio con datos de precios y búsqueda de un sector específico. Día 2: Contacta a 10 gerentes comerciales o directores de empresas en LinkedIn y ofréceles una demostración en vivo de su nuevo radar de mercado."
],
    quizQuestions: [
      {
            "question": "¿Por qué un 'Cuadro de Mando de Inteligencia de Mercado Continuo' en Looker Studio es superior a un informe tradicional de investigación en PDF?",
            "options": [
                  "Porque el PDF no se puede imprimir.",
                  "Porque los informes en PDF nacen obsoletos y quedan guardados en cajones, mientras que un cuadro de mando en Looker Studio se actualiza continuamente en tiempo real, permitiendo a los directores detectar cambios de precios, tendencias y movimientos de rivales al instante.",
                  "Porque Looker Studio regala dinero a los usuarios.",
                  "Para ahorrar espacio en la oficina."
            ],
            "correctIndex": 1,
            "explanation": "La visualización continua de datos en tiempo real transforma la inteligencia de mercado en una ventaja competitiva ágil y permanente."
      },
      {
            "question": "¿Cómo se configura una búsqueda exacta en 'Google Alerts' para evitar recibir correos basura con noticias irrelevantes?",
            "options": [
                  "Escribiendo la palabra en mayúsculas.",
                  "Colocando el nombre del competidor o término clave entre comillas dobles (ej. \"Nombre Exacto del Competidor\"), lo que le indica al motor de alertas que solo envíe notificaciones cuando aparezca la frase exacta y literal.",
                  "Borrando la cuenta de correo.",
                  "Enviando una carta a Google."
            ],
            "correctIndex": 1,
            "explanation": "El uso de comillas dobles filtra las coincidencias exactas garantizando alertas de alta relevancia sin ruido."
      },
      {
            "question": "¿Qué beneficio operativo aporta 'La Rutina del Radar de los Lunes' a un equipo comercial?",
            "options": [
                  "Permite no trabajar los lunes.",
                  "Dedicar 15 minutos al inicio de cada semana para revisar el panel de inteligencia de mercado y las alertas de la competencia, ajustando precios, ofertas y mensajes publicitarios de forma proactiva antes de que los rivales ganen cuota.",
                  "Hacer reuniones de 5 horas sin agenda.",
                  "Comprar café para la oficina."
            ],
            "correctIndex": 1,
            "explanation": "Una breve revisión semanal disciplinada mantiene a la empresa siempre un paso por delante de la competencia."
      }
]
  },

};
