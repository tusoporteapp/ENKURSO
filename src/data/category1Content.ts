// Specific topic-by-topic content blueprints for Category 1 (Planeación de Negocios)
// 100% custom, domain-accurate, highly actionable business literature with:
// 1. 5,000-character Deep Learning Overview & Executive Briefing
// 2. Step-by-step Free Tools Tutorials (No cost to start)
// 3. High-income Monetization Guides for Latin America (Realistic, accessible local prices)
// 4. Calibrated USD Pricing Ranges based on LATAM economy (Junior $25-$75, Mid $80-$200, Senior $220-$600+)
// 5. Copy-paste Sales Outreach Pitches and 48h Action Plans

export interface SpecificBookContent {
  frameworkName: string;
  coreMetrics: string[];
  caseCompany: string;
  caseOutcome: string;
  pitfall: string;
  actionItem1: string;
  actionItem2: string;
  actionItem3: string;
  domainContext: string;
  strategicRationale: string;
  learningOverview?: string;
  ch1CustomNarrative: string[];
  ch2MethodologyDetails: string[];
  ch3TacticalSteps: string[];
  ch4CaseDeepDive: string[];
  ch5RiskMitigation: string[];
  ch6ActionSummary: string[];
  quizQuestions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export const CATEGORY_1_CUSTOM_BOOKS: Record<string, SpecificBookContent> = {
  // =========================================================================
  // TOMO 1: Encuentra una idea Comercial adecuada para ti (pn-1)
  // =========================================================================
  'pn-1': {
    frameworkName: 'Matriz Ikigai de Negocios & Protocolo de Validación The Mom Test',
    coreMetrics: ['Índice de Tracción Temprana', 'Disposición Real a Pagar (Willingness to Pay)', 'Costo de Validación por Hipótesis (< $5 USD)', 'Tamaño de Mercado Accesible (SOM)', 'Nivel de Dolor del Cliente (Escala 1 al 10)'],
    caseCompany: 'EcoPack Solutions (Empaques Biodegradables para Gastronomía en LATAM)',
    caseOutcome: 'Validó la demanda real de empaques sostenibles en 14 días entrevistando a 45 dueños de restaurantes locales con Google Forms, logró 18 cartas de intención de compra anticipada y facturó $4,500 USD en su primer mes sin haber comprado maquinaria propia.',
    pitfall: 'Enamorarse de una idea abstracta o producto sin haber verificado si existe un cliente real dispuesto a pagar dinero por resolver un problema urgente.',
    actionItem1: 'Mapear en una matriz de 4 cuadrantes tus habilidades técnicas, tus pasiones genuinas, los problemas que la gente sufre y lo que actualmente están pagando.',
    actionItem2: 'Conducir 10 entrevistas diagnósticas sin mencionar tu producto aplicando la técnica The Mom Test para descubrir el dolor real del cliente.',
    actionItem3: 'Crear una prueba de humo (landing page simple o publicación directa) para medir cuántos prospectos dejan sus datos o intentan comprar antes del desarrollo.',
    domainContext: 'Una gran idea comercial no surge de una inspiración mágica, sino de la intersección metódica entre una necesidad desatendida del mercado, la capacidad de ejecutarla con excelencia y la disposición genuina de los clientes a pagar por ella.',
    strategicRationale: 'Filtrar las ideas de negocio mediante validación empírica temprana ahorra miles de horas de trabajo y capital financiero que de otro modo se desperdiciarían en proyectos no viables.',
    learningOverview: `🎯 SINOPSIS EJECUTIVA & IMPACTO:
El 74% de las empresas y emprendimientos que se crean en América Latina cierran antes de cumplir sus dos primeros años de vida. La causa principal de este fracaso masivo no es la falta de capital ni la falta de esfuerzo del fundador, sino el llamado "error de la idea ciega": invertir tiempo, ahorros y energía en desarrollar productos o servicios que nadie en el mercado necesita con urgencia suficiente como para pagar por ellos. Este tomo te entrena para erradicar la improvisación y adoptar el método científico de selección y validación de ideas comerciales rentables.

📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:
• Capítulo 1: Fundamentos y Matriz Ikigai de Negocios: Cómo evaluar la intersección entre lo que te apasiona, tus ventajas competitivas injustas y lo que el mercado ya está pagando hoy.
• Capítulo 2: Metodología The Mom Test y Protocolo de Entrevistas: Cómo conversar con clientes potenciales sin hacerles preguntas hipotéticas ni recibir cumplidos falsos que te engañen.
• Capítulo 3: Guía de Implementación Táctica en 14 Días: Plan cronológico para filtrar 5 ideas, elegir las 2 más prometedoras y correr pruebas de humo artesanales.
• Capítulo 4: Caso de Estudio Real (EcoPack Solutions): Cómo una emprendedora facturó $4,500 USD en su primer mes de empaques sostenibles sin haber comprado maquinaria previa.
• Capítulo 5: Trampas Fatales y Matriz de Riesgo: El peligro del sesgo de confirmación y cómo blindar tu economía antes de renunciar a un empleo.
• Capítulo 6: Monetización y Negocio en LATAM: Cómo empaquetar esta habilidad en un micro-servicio de validación accesible para PYMEs y cobrar entre $25 y $350 USD por proyecto.

🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:
1. Google Forms (forms.google.com): Creación de formularios diagnósticos no sesgados con lógica condicional para detectar dolores agudos en clientes potenciales.
2. Google Sheets (sheets.google.com): Tabulación de puntuaciones de urgencia del dolor (1-10) y filtrado automático de compradores de alta prioridad.
3. Notion (notion.so): Tablero Kanban de hipótesis de demanda, análisis de competidores sustitutos y matriz de disposición a pagar.

💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):
Puedes ofrecer el servicio de "Validación Rápida de Ideas y Test de Demanda" a personas que quieren emprender, a dueños de negocios locales o profesionales independientes con precios accesibles que cualquiera puede pagar:
• Nivel Junior (Tus primeros 3 clientes): $25 – $45 USD por informe de validación con 10 entrevistas analizadas.
• Nivel Intermedio (Con portafolio): $60 – $140 USD por validación completa + diseño de propuesta de valor + encuesta a 30 prospectos.
• Nivel Senior / Consultor: $180 – $350 USD por programa integral de validación de modelo de negocio y acompañamiento en el lanzamiento del PMV.

⚡ PLAN DE ACCIÓN DE 48 HORAS:
Día 1: Configura tu plantilla de encuesta en Google Forms y tu matriz en Notion con un ejemplo de muestra.
Día 2: Envía el guion de prospección a 15 personas en LinkedIn o Instagram que hablen de emprender y agenda tus primeras 3 llamadas diagnósticas.`,
    ch1CustomNarrative: [
      'Iniciar un proyecto empresarial sin contrastar la idea con el mercado es la causa número uno de quiebra en América Latina. El 74% de los nuevos emprendimientos cierran antes de los dos años por falta de clientes reales.',
      'El mito del emprendedor genial que diseña un producto en secreto durante un año para luego presentarlo al mundo casi siempre termina en desilusión y pérdida total de ahorros.',
      'Para encontrar una idea comercial verdaderamente adecuada, es imperativo evaluar tres factores innegociables: tu afinidad y conocimiento del sector, el tamaño y capacidad de pago del mercado objetivo, y la existencia de una fricción o problema que las alternativas actuales resuelven deficientemente.',
      'Cuando estos tres elementos se alinean, la venta deja de ser una lucha agotadora de convencimiento y se convierte en la oferta de una solución deseada con urgencia por tus clientes.'
    ],
    ch2MethodologyDetails: [
      '🛠️ TUTORIAL PRÁCTICO: CÓMO USAR GOOGLE FORMS + NOTION GRATIS PARA VALIDAR IDEAS PASO A PASO:',
      'Paso 1: Abre Google Forms (forms.google.com) con tu cuenta de Gmail gratuita. Crea un formulario titulado "Estudio Sectorial de Desafíos Operativos". Diseña solo 5 preguntas enfocadas en el pasado: 1. ¿Cuál es el mayor dolor que enfrentas en [Tu Nicho]? 2. ¿Cuándo fue la última vez que te ocurrió? 3. ¿Cómo lo resolviste y qué herramienta usaste? 4. ¿Cuánto dinero o tiempo te costó esa solución? 5. ¿Qué fue lo más frustrante de ese proceso?',
      'Paso 2: Exporta los datos a Google Sheets con un solo clic presionando el icono verde "Vincular con Hojas de Cálculo". Configura una columna calculada de "Nivel de Urgencia (1-10)" y filtra únicamente a los prospectos que hayan calificado el problema con 8 o más.',
      'Paso 3: Abre Notion (notion.so) en su plan gratuito. Crea un tablero Kanban con tres columnas: "Dolor Detectado", "Solución Alternativa Actual" y "Disposición a Pagar Comprobada". Centraliza allí las respuestas de las 10 mejores entrevistas.',
      'Paso 4: Crea una propuesta de valor en formato de una sola frase: "Ayudo a [Nicho Específico] a lograr [Beneficio Medible] sin [Dolor Principal]".'
    ],
    ch3TacticalSteps: [
      'Día 1-2: Redacta una lista de 5 problemas graves que hayas experimentado personalmente o que escuches frecuentemente en tu industria en tu ciudad o país.',
      'Día 3-4: Selecciona los 2 problemas con mayor urgencia y define el perfil exacto de la persona o empresa que los padece (Buyer Persona).',
      'Día 5-7: Realiza 5 llamadas o reuniones con personas de ese perfil preguntando: "¿Cómo resuelves esto hoy?", "¿Cuánto tiempo/dinero te cuesta?" y "¿Qué es lo más frustrante de las soluciones actuales?".',
      'Día 8-10: Diseña una propuesta de valor de una sola frase y un prototipo manual (servicio de conserjería).',
      'Día 11-14: Ofrece la solución de manera manual a 3 clientes antes de invertir en software o infraestructura automatizada.'
    ],
    ch4CaseDeepDive: [
      'El caso de EcoPack Solutions demuestra la efectividad de la validación artesanal con herramientas de costo cero.',
      'La fundadora identificó que los restaurantes de comida saludable en Bogotá y Lima querían eliminar el plástico pero los empaques ecológicos importados eran excesivamente costosos y tardaban semanas en llegar.',
      'En lugar de construir una fábrica de empaques o endeudarse con un banco, diseñó un catálogo en PDF en Canva gratuito, contactó a pequeños productores locales de fibra de caña y visitó 45 restaurantes de su zona.',
      'Al presentar opciones con entrega en 24 horas y precios competitivos, cerró contratos de suministro con 18 restaurantes antes de realizar el primer pedido grande al fabricante, autofinanciando toda la operación.'
    ],
    ch5RiskMitigation: [
      'El mayor riesgo al elegir una idea es el "sesgo del falso positivo": creer que a la gente le gusta tu idea solo porque amigos o familiares te felicitan por cortesía.',
      'Regla de oro: El único cumplido válido en los negocios es una tarjeta de crédito, una transferencia bancaria o una carta formal de intención de compra firmada.',
      'Evita mercados donde los clientes no tengan presupuesto para pagar o donde la toma de decisión involucre burocracias de más de 12 meses si eres un emprendedor que necesita flujo de caja rápido.',
      'Diseña siempre un plan de salida o pivote si después de 20 conversaciones con clientes ideales nadie muestra intención real de pago.'
    ],
    ch6ActionSummary: [
      '💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:',
      '1. Servicio Comercial Empaquetado: "Auditoría de Validación Rápida de Ideas y Test de Demanda". Puedes ofrecer este servicio a profesionales, emprendedores que quieren iniciar un negocio o tiendas locales que quieren lanzar un nuevo producto.',
      '2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $25 - $45 USD por informe de validación con 10 entrevistas analizadas. • Nivel Intermedio (Con portafolio): $60 - $140 USD por validación integral + diseño de propuesta de valor + encuesta a 30 prospectos. • Nivel Senior / Consultor: $180 - $350 USD por programa completo de validación de modelo de negocio y acompañamiento en el lanzamiento del PMV.',
      '3. Guion de Venta Listo para Copiar (WhatsApp / LinkedIn): "Hola [Nombre], veo que estás pensando en lanzar tu nuevo proyecto de [Nicho]. En nuestra región la mayoría de negocios pierden dinero por invertir capital antes de comprobar la demanda real. Yo ayudo a emprendedores a validar si su idea tiene clientes reales dispuestos a pagar por solo $35 USD en un informe de 5 días antes de gastar en inventario o desarrollo. ¿Te gustaría que hagamos un test rápido para tu proyecto?"',
      '4. Plan de Acción de 48 Horas: Día 1: Crea tu plantilla de validación en Notion y Google Forms con un ejemplo ficticio para mostrar como muestra. Día 2: Contacta a 15 personas en LinkedIn o Instagram que hablen de emprender y ofréceles auditar su idea con tu guion.'
    ],
    quizQuestions: [
      {
        question: '¿Cuál es la forma más confiable de validar si una idea comercial tiene futuro antes de invertir grandes sumas de dinero?',
        options: [
          'Pedir la opinión de amigos y familiares cercanos en una reunión informal.',
          'Conducir entrevistas estructuradas sobre comportamientos pasados de compra y conseguir compromisos reales de pago o cartas de intención.',
          'Alquilar un local comercial y comprar inventario para ver si la gente entra por casualidad.',
          'Pagar una campaña publicitaria costosa sin tener clara la propuesta de valor.'
        ],
        correctIndex: 1,
        explanation: 'La validación real exige verificar que clientes desconocidos tengan un dolor agudo y estén dispuestos a pagar dinero por la solución.'
      },
      {
        question: 'Según la metodología The Mom Test, ¿qué tipo de preguntas debes evitar al hablar con clientes potenciales?',
        options: [
          'Preguntas sobre cuánto dinero y tiempo gastan actualmente en el problema.',
          'Preguntas hipotéticas de futuro como "¿Comprarías una app que hiciera X cosa?".',
          'Preguntas sobre las fallas de los proveedores actuales.',
          'Preguntas sobre cómo es su flujo de trabajo cotidiano.'
        ],
        correctIndex: 1,
        explanation: 'Las preguntas hipotéticas sobre el futuro suelen generar respuestas falsamente optimistas que no reflejan el comportamiento real de compra.'
      },
      {
        question: '¿Cuánto es un precio justo y realista para cobrar en Latinoamérica por un micro-servicio de validación inicial de ideas?',
        options: [
          'Más de $5,000 USD obligatoriamente.',
          'Entre $25 y $45 USD para nivel inicial, permitiendo cerrar clientes fácilmente en el mercado local.',
          'No se puede cobrar dinero.',
          'Solo se cobra en intercambio de productos.'
        ],
        correctIndex: 1,
        explanation: 'Una tarifa de $25 a $45 USD es accesible para cualquier emprendedor o microempresa en LATAM y permite al prestador del servicio generar ingresos rápidos y acumular testimonios.'
      }
    ]
  },

  // =========================================================================
  // TOMO 2: Cómo Elegir el Socio Adecuado (pn-2)
  // =========================================================================
  'pn-2': {
    frameworkName: 'Marco de Evaluación de Co-fundadores, Matriz RACI y Pacto de Socios con Vesting',
    coreMetrics: ['Alineación de Valores Troncales (100%)', 'Complementariedad de Habilidades Técnicas vs. Comerciales', 'Compromiso de Tiempo Semanal Garantizado (Horas/Semana)', 'Período de Vesting Acordado (4 años con 1 año Cliff)', 'Mecanismo de Desempate en Decisiones'],
    caseCompany: 'Apex Software & Hardware Labs (Medellín, Colombia)',
    caseOutcome: 'Estructuró un pacto de socios formal con cláusulas de vesting y salida limpia para 3 fundadores; cuando uno de ellos decidió abandonar la empresa a los 8 meses, la compañía conservó el 100% del capital accionario y continuó operando sin litigios legales ni parálisis societaria.',
    pitfall: 'Repartir el 50% de las acciones en una servilleta el primer día con un amigo sin definir responsabilidades, dedicación horaria ni mecanismos de salida legal protegida.',
    actionItem1: 'Completar individualmente una lista de las 10 conversaciones difíciles (dinero, dedicación, toma de decisiones, salida) antes de firmar cualquier sociedad.',
    actionItem2: 'Mapear la matriz de competencias: asegurar que un socio domine el producto/tecnología y el otro domine las ventas/distribución comercial.',
    actionItem3: 'Redactar un Acuerdo de Socios (Partnership Agreement) con cláusula de asignación gradual de acciones (Vesting) a 4 años con un año de prueba (Cliff).',
    domainContext: 'Elegir un socio de negocios es una de las decisiones más determinantes en la vida de una empresa; las desavenencias entre fundadores son responsables de más del 65% de los fracasos de startups prometedoras en América Latina.',
    strategicRationale: 'Una estructura societaria blindada protege el patrimonio de la empresa, evita la parálisis en la toma de decisiones y crea un entorno de confianza propicio para la inversión.',
    learningOverview: `🎯 SINOPSIS EJECUTIVA & IMPACTO:
Asociarse con la persona equivocada o hacerlo sin reglas claras es el equivalente corporativo a un divorcio destructivo. En América Latina, más del 65% de las empresas que quiebran en su etapa temprana lo hacen por disputas internas entre socios sobre el dinero, la carga de trabajo y el reparto accionario. Este tomo te entrega el protocolo exacto para evaluar la compatibilidad de un cofundador, estructurar pactos de socios legales y proteger el patrimonio de la empresa desde el día uno.

📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:
• Capítulo 1: Psicología del Co-fundador y Peligros de la Homogeneidad: Por qué buscar a alguien idéntico a ti destruye la empresa y cómo identificar perfiles complementarios (Creador + Vendedor).
• Capítulo 2: Gobernanza y Estructuración de Pactos de Socios: Redacción paso a paso de acuerdos de fundadores con cláusulas de Vesting (4 años con 1 año Cliff) y salida limpia (Good/Bad Leaver).
• Capítulo 3: Cronograma de Formalización en 4 Semanas: Cómo auditar expectativas de sueldo, dedicación horaria semanal y mecanismos de desempate en votaciones de directorio.
• Capítulo 4: Caso de Estudio Real (Apex Software Labs): Cómo blindaron el 100% de las acciones cuando un socio renunció a los 8 meses sin pagar litigios ni diluir el capital.
• Capítulo 5: Mitigación de Conflictos y Separación de Sueldos vs. Dividendos: Cómo evitar que un socio inactivo cobre dividendos o sueldos que desmotiven al equipo operativo.
• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de mediación y armado de pactos de socios para nuevos emprendimientos cobrando entre $30 y $450 USD.

🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:
1. Google Docs (docs.google.com): Plantilla abierta de "Pacto de Fundadores y Matriz de Gobernanza" lista para personalizar en 45 minutos.
2. Notion (notion.so): Matriz RACI interactiva para mapear quién es el Responsable, Autoridad, Consultado e Informado en cada departamento.
3. Smallpdf / DocuSign Free: Protocolo de firma digital certificada para acuerdos privados de confidencialidad y gobernanza.

💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):
La gran mayoría de startups y nuevos negocios en LATAM se fundan entre amigos que temen tener conversaciones difíciles sobre dinero. Tu rol es actuar como facilitador estratégico neutral con precios ajustados al mercado local:
• Nivel Junior: $30 – $60 USD por sesión de facilitación de 1.5 horas + entrega de plantilla de pacto de socios.
• Nivel Intermedio: $80 – $180 USD por estructuración completa de gobernanza, matriz RACI y esquema de vesting.
• Nivel Senior: $200 – $450 USD por asesoría societaria integral con acompañamiento notarial o de registro.

⚡ PLAN DE ACCIÓN DE 48 HORAS:
Día 1: Descarga y personaliza tu plantilla modelo de Acuerdo de Socios en Google Docs.
Día 2: Busca en grupos de Facebook o comunidades de emprendedores publicaciones de personas buscando cofundadores y envíales tu propuesta de facilitación.`,
    ch1CustomNarrative: [
      'Un socio no es un amigo con el que te diviertes conversando de negocios; es un cónyuge comercial con el que compartirás responsabilidades legales, financieras y operativas de máxima presión.',
      'El error más extendido entre fundadores en Latinoamérica es buscar a alguien idéntico a ellos mismos: dos programadores o dos vendedores que comparten las mismas fortalezas y sufren de las mismas carencias.',
      'La verdadera fuerza de una sociedad reside en la complementariedad asimétrica de competencias unida a una identidad inquebrantable de valores éticos y metas a largo plazo.',
      'Si ambos socios piensan exactamente lo mismo sobre todos los temas, uno de los dos es redundante para el negocio.'
    ],
    ch2MethodologyDetails: [
      '🛠️ TUTORIAL PRÁCTICO: CÓMO ESTRUCTURAR UN PACTO DE SOCIOS Y MATRIZ DE ROLES EN GOOGLE DOCS GRATIS:',
      'Paso 1: Abre Google Docs (docs.google.com) y crea un documento titulado "Acuerdo de Fundadores y Gobernanza Inicial". Inserta una tabla de 3 columnas: "Área de Decisión", "Socio Responsable Final (Voto Dirimente)" y "Socio Consultado". Asigna con claridad quién decide en Finanzas/Ventas y quién en Producto/Operaciones.',
      'Paso 2: Redacta la Cláusula de Vesting Estándar: Las acciones de los fundadores no se entregan completas el día 1, sino que se consolidan mensualmente a lo largo de 48 meses (4 años), con un período de gracia inicial (Cliff) de 12 meses. Si un socio renuncia antes del mes 12, se retira con 0% de acciones.',
      'Paso 3: Incorpora el Protocolo de Salida Limpia (Good Leaver vs. Bad Leaver): Define a qué precio la empresa recomprará las acciones consolidadas si un socio debe retirarse por motivos de salud (Good Leaver) o por incumplimiento grave de funciones (Bad Leaver).',
      'Paso 4: Exporta el documento en PDF con firmas digitales (puedes usar herramientas gratuitas como DocuSign free tier o Smallpdf) para que tenga validez de compromiso privado entre las partes.'
    ],
    ch3TacticalSteps: [
      'Semana 1: Realicen una auditoría mutua de expectativas financieras: ¿cuál es el salario mínimo que cada uno necesita para vivir? ¿cuánto capital aportará cada parte?',
      'Semana 2: Establezcan el horario y dedicación: ¿es a tiempo completo o parcial? ¿qué sucede si uno trabaja 60 horas y el otro solo 20?',
      'Semana 3: Definan el mecanismo de desempate en votaciones de la junta directiva (ej. mediador externo o voto dirimente del CEO).',
      'Semana 4: Redacten y firmen el Acuerdo de Fundadores con cláusula de recompra de acciones si alguien abandona el proyecto.'
    ],
    ch4CaseDeepDive: [
      'Apex Software nació con 3 ingenieros amigos de la universidad en Medellín que se repartieron las acciones equitativamente (33.3% cada uno).',
      'Aconsejado por un mentor, el equipo redactó un pacto de socios con esquema de vesting a 4 años con cliff de 12 meses antes de comenzar el desarrollo.',
      'A los 8 meses, el socio responsable de operaciones recibió una oferta de empleo corporativa en el extranjero y decidió renunciar al emprendimiento.',
      'Gracias a la cláusula cliff, sus acciones no consolidadas retornaron a la tesorería de la empresa sin costo, permitiendo al equipo restante contratar a un director de operaciones senior con ese paquete accionario sin diluir a los fundadores activos ni pagar litigios.'
    ],
    ch5RiskMitigation: [
      'Peligro crítico: El socio que no produce resultados pero exige igualdad salarial y de dividendos.',
      'Solución: Separar claramente el rol de accionista (dueño del capital) del rol de empleado directivo (sueldo por funciones). Un socio solo cobra sueldo si desempeña una labor operativa indispensable en la empresa.',
      'Incorporar cláusulas de resolución de empates: si hay dos socios 50/50 y discrepan, designar a un asesor o mentor imparcial de confianza cuyo voto desbloquee la decisión.',
      'Nunca otorgar poderes bancarios mancomunados sin límites claros de monto para evitar extracciones no autorizadas de capital.'
    ],
    ch6ActionSummary: [
      '💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:',
      '1. Servicio Comercial Empaquetado: "Facilitación de Pactos de Socios y Estructuración de Gobernanza para Startups y PYMEs". La mayoría de nuevos negocios se crean entre amigos que evitan tener conversaciones incómodas. Tu labor es actuar como mediador estratégico neutral que estructura su acuerdo.',
      '2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior: $30 - $60 USD por sesión de facilitación de 1.5 horas + entrega de plantilla de pacto de socios personalizada. • Nivel Intermedio: $80 - $180 USD por estructuración completa de gobernanza, matriz RACI y esquema de vesting. • Nivel Senior / Consultor: $200 - $450 USD por asesoría societaria completa con acompañamiento notarial o de registro.',
      '3. Guion de Venta Listo para Copiar (WhatsApp / LinkedIn): "Hola [Nombre], felicitaciones por iniciar [Proyecto] junto a tus socios. El 65% de las empresas en nuestra región fracasan por desacuerdos entre fundadores al no fijar reglas claras al inicio. Por solo $45 USD les ayudo en una sesión guiada de 90 minutos a estructurar su Pacto de Socios profesional con roles, dedicación y cláusulas de protección. ¿Les gustaría agendar una llamada esta semana para blindar su sociedad?"',
      '4. Plan de Acción de 48 Horas: Día 1: Descarga y personaliza tu plantilla modelo de Acuerdo de Socios en Google Docs. Día 2: Busca en grupos de Facebook o comunidades de emprendedores publicaciones de personas buscando cofundadores y envíales tu propuesta de facilitación.'
    ],
    quizQuestions: [
      {
        question: '¿Qué es una cláusula de "Vesting" con "Cliff" de un año en un acuerdo de fundadores?',
        options: [
          'Una penalización económica que se paga al Estado por cambiar de socios.',
          'Un mecanismo donde las acciones se ganan progresivamente con el tiempo (ej. 4 años) y no se consolida ninguna acción si el socio se va antes del primer año.',
          'Un seguro de vida que cubre los gastos médicos de los directivos.',
          'Un préstamo bancario que se otorga a los socios para comprar acciones.'
        ],
        correctIndex: 1,
        explanation: 'El vesting protege a la empresa asegurando que los socios obtengan su participación accionaria solo si permanecen y aportan valor a lo largo del tiempo convenido.'
      },
      {
        question: '¿Por qué se debe separar el salario del reparto de dividendos en una sociedad de socios activos?',
        options: [
          'Porque los socios no tienen derecho a cobrar ningún sueldo durante 10 años.',
          'Porque el salario remunera el trabajo diario y responsabilidades operativas en el presente, mientras que los dividendos premian el riesgo del capital invertido si hay ganancias netas.',
          'Para pagar menos impuestos de manera ilegal.',
          'Porque los empleados no deben saber quiénes son los dueños.'
        ],
        correctIndex: 1,
        explanation: 'Separar sueldo de dividendos evita resentimientos cuando un socio trabaja más horas o tiene mayores responsabilidades operativas que otro.'
      },
      {
        question: '¿Cuál es un rango de precio competitivo y accesible para ofrecer la facilitación de pactos de socios en LATAM?',
        options: [
          'Más de $10,000 USD.',
          'Entre $30 y $60 USD en nivel inicial, facilitando que pequeños socios puedan pagarlo sin dudar.',
          'No se puede cobrar.',
          'Solo se cobra en acciones de la empresa.'
        ],
        correctIndex: 1,
        explanation: 'Una tarifa de $30 a $60 USD por sesión es muy atractiva para emprendedores locales y permite al facilitador cerrar varios clientes al mes.'
      }
    ]
  },

  // =========================================================================
  // TOMO 3: Ponlo por escrito: Cómo Redactar tu Plan de Negocio (pn-3)
  // =========================================================================
  'pn-3': {
    frameworkName: 'Estructura Lean Business Plan de 4 Páginas & Proyección Financiera Operativa',
    coreMetrics: ['Tiempo de Lectura Ejecutiva (< 5 minutos)', 'Margen de Contribución Unitario Proyectado', 'Punto de Equilibrio en Unidades (Break-Even)', 'Período de Retorno de Inversión (Payback)', 'Costo de Adquisición vs. Valor de Vida (CAC vs. LTV)'],
    caseCompany: 'Urban Fresh Logistics (Santiago de Chile)',
    caseOutcome: 'Sustituyó un plan tradicional de 75 páginas por un documento ejecutivo ágil de 4 páginas con modelo financiero dinámico en Google Sheets; presentó la propuesta ante 3 entidades de microfinanciamiento y cerró una línea de capital de trabajo por $15,000 USD en 2 semanas.',
    pitfall: 'Escribir documentos enciclopédicos llenos de literatura decorativa y proyecciones de ingresos millonarios a 5 años que nadie lee ni se cumplen en la realidad.',
    actionItem1: 'Condensar la propuesta de valor, público meta, canales y fuentes de ingreso en un formato de Business Model Canvas de una sola hoja.',
    actionItem2: 'Calcular el punto de equilibrio exacto: cuántos productos o servicios debes vender al mes para pagar todos los costos fijos sin perder dinero.',
    actionItem3: 'Redactar un Resumen Ejecutivo de 1 página que responda con precisión: qué problema resuelves, por qué tu solución es superior, cuánto capital requieres y en qué se invertirá cada dólar.',
    domainContext: 'Un plan de negocios moderno no es un documento inmutable para archivar en una gaveta; es una herramienta viva de navegación estratégica y comunicación con socios, bancos e inversionistas.',
    strategicRationale: 'La claridad conceptual y la coherencia en los números reducen la incertidumbre del emprendimiento y demuestran disciplina directiva ante cualquier entidad financiera.',
    learningOverview: `🎯 SINOPSIS EJECUTIVA & IMPACTO:
La mayoría de planes de negocio redactados en Latinoamérica son documentos teóricos de 80 páginas que nadie lee y que quedan obsoletos al mes de redactados. Sin embargo, cuando una empresa necesita solicitar un crédito bancario, postular a un fondo de fomento estatal (como Corfo, Innpulsa, Fondos Semilla) o convencer a inversionistas ángeles, la ausencia de un plan ejecutivo profesional causa el rechazo inmediato del 85% de las solicitudes. Este tomo te enseña a redactar un Plan de Negocio Ágil de 4 páginas con modelo financiero dinámico y punto de equilibrio exacto.

📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:
• Capítulo 1: La Psicología del Inversionista y Evaluador de Crédito: Qué miran en los primeros 3 minutos de lectura y por qué la brevedad genera credibilidad.
• Capítulo 2: Las 6 Secciones Clave del Plan Ejecutivo: Resumen directivo, diagnóstico de cliente, propuesta de valor, canales comerciales, estructura operativa y modelo financiero.
• Capítulo 3: Protocolo de Modelado Financiero en 4 Fases: Cálculo de costos fijos, variables unitarios, punto de equilibrio y 3 escenarios (Pesimista, Base, Optimista).
• Capítulo 4: Caso de Estudio Real (Urban Fresh Logistics): Cómo cerraron una línea de crédito de $15,000 USD en 2 semanas con un dossier ejecutivo de 4 páginas.
• Capítulo 5: Mitigación de Riesgos Financieros y Capital de Trabajo: Cómo calcular el colchón de liquidez para no quebrar mientras se cobran las facturas a 30 o 60 días.
• Capítulo 6: Monetización y Negocio en LATAM: Cómo cobrar entre $40 y $650 USD redactando planes de negocio profesionales para empresas y postulantes a créditos.

🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:
1. Google Sheets (sheets.google.com): Plantilla financiera con fórmulas automáticas de punto de equilibrio, margen de contribución y flujo de caja a 12 meses.
2. Google Docs (docs.google.com): Redacción ejecutiva con tipografía sobria y estructura aprobada por evaluadores bancarios.
3. Canva (canva.com): Maquetación visual de portada, gráficos financieros y exportación en PDF de alta resolución ligero (<3MB).

💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):
Existe una demanda constante de emprendedores y PYMEs que necesitan financiamiento pero no saben cómo traducir sus números a un plan formal:
• Nivel Junior (Tus primeros 3 planes): $40 – $80 USD por plan ejecutivo de 4 páginas con corrida financiera básica.
• Nivel Intermedio: $100 – $220 USD por plan completo con proyecciones a 12 meses, punto de equilibrio y PDF corporativo.
• Nivel Senior: $300 – $650 USD por plan bancario integral con asesoría y acompañamiento en postulaciones a fondos de gobierno.

⚡ PLAN DE ACCIÓN DE 48 HORAS:
Día 1: Diseña un plan de negocios demo en Canva y Google Sheets de una cafetería o e-commerce de muestra.
Día 2: Contacta a 20 PYMEs locales o postulantes a fondos de fomento y ofréceles estructurar su plan con tu guion.`,
    ch1CustomNarrative: [
      'Escribir tu plan de negocio tiene un beneficio fundamental antes de mostrárselo a terceros: te obliga a ti mismo a pensar con rigor y descubrir los agujeros lógicos de tu propuesta.',
      'Cuando las ideas solo están en la cabeza, todo parece viable y rentable; cuando trasladas los costos reales de alquiler, nómina, impuestos, pasarelas de pago y publicidad a una hoja de cálculo, la realidad emerge con claridad.',
      'El propósito de un plan de negocio no es predecir el futuro con exactitud milimétrica, sino definir las variables clave del negocio, los riesgos principales y el camino más rápido hacia la rentabilidad.',
      'Un buen plan de negocio es conciso, fundamentado en hechos del mercado y fácil de actualizar a medida que recibes retroalimentación de las ventas reales.'
    ],
    ch2MethodologyDetails: [
      '🛠️ TUTORIAL PRÁCTICO: CÓMO ARMAR UN PLAN DE NEGOCIO EJECUTIVO CON GOOGLE DOCS + SHEETS + CANVA GRATIS:',
      'Paso 1: En Google Sheets (sheets.google.com), crea una hoja llamada "Modelo Financiero y Punto de Equilibrio". Divide los costos en dos columnas: Costos Fijos Mensuales (Alquiler, sueldos básicos, internet, software) y Costos Variables por Unidad (Materia prima, empaque, comisión bancaria). Ingresa la fórmula de Punto de Equilibrio: =SUMA(Costos_Fijos)/(Precio_Venta - Costo_Variable). La celda te indicará exactamente el número mínimo de ventas que el negocio necesita para no quebrar.',
      'Paso 2: En Google Docs (docs.google.com), redacta la estructura de 4 páginas: 1. Resumen Ejecutivo (300 palabras). 2. Diagnóstico del Cliente y Problema. 3. Propuesta de Solución y Diferenciador. 4. Plan de Ventas y Proyección a 12 meses.',
      'Paso 3: Abre Canva (canva.com) en su plan gratuito. Busca la plantilla "Business Proposal" o "Executive Report A4". Pega el contenido redactado, inserta los gráficos del punto de equilibrio y aplica los colores corporativos de la marca.',
      'Paso 4: Descarga el archivo en formato "PDF Estándar" para enviarlo por correo o WhatsApp con un peso ligero menor a 3MB.'
    ],
    ch3TacticalSteps: [
      'Fase 1: Completa el lienzo Canvas respondiendo a las 9 casillas estratégicas sin exceder 2 párrafos por bloque.',
      'Fase 2: Cotiza con 3 proveedores reales todos los costos fijos (servicios, licencias, seguros, contabilidad) y variables (materia prima, empaque, comisiones).',
      'Fase 3: Elabora la tabla de punto de equilibrio con la fórmula: Costos Fijos Totales / (Precio de Venta Unitario - Costo Variable Unitario).',
      'Fase 4: Diseña 3 escenarios financieros: Pesimista (50% de ventas estimadas), Base (100%) y Optimista (150%) para evaluar el colchón de liquidez necesario.'
    ],
    ch4CaseDeepDive: [
      'Urban Fresh Logistics en Santiago inició intentando levantar capital con un dossier extenso de 75 páginas que los bancos rechazaban por falta de claridad.',
      'Al reformular su plan en un "Memo Ejecutivo de Inversión" de 4 páginas centrado en métricas unitarias (costo por despacho, margen bruto por ruta y punto de equilibrio), los evaluadores de crédito entendieron el retorno en 10 minutos.',
      'El documento demostraba con números exactos que con 120 despachos diarios alcanzaban el punto de equilibrio operativo, eliminando la percepción de alto riesgo.',
      'La claridad del plan les permitió asegurar una línea de crédito de $15,000 USD para adquirir dos vehículos de reparto.'
    ],
    ch5RiskMitigation: [
      'El error financiero número uno en los planes de negocio es subestimar el ciclo de cobro y el capital de trabajo necesario.',
      'Regla de prudencia para LATAM: Multiplica tus costos proyectados por 1.25 (margen de contingencia del 25%) y divide tus estimaciones iniciales de ingresos por 1.5.',
      'Asegúrate de que tu modelo financiero demuestre viabilidad económica incluso en el escenario conservador antes de comprometer ahorros de vida.',
      'Mantén tu plan de negocio en formato digital editable y revísalo al cierre de cada mes para comparar las cifras presupuestadas contra los estados de cuenta reales.'
    ],
    ch6ActionSummary: [
      '💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:',
      '1. Servicio Comercial Empaquetado: "Elaboración de Planes de Negocio Profesionales para Bancos, Subsidios de Gobierno o Inversionistas". Miles de emprendedores y PYMEs en México, Colombia, Perú, Chile o Argentina necesitan un plan formal para solicitar créditos o fondos de fomento pero no saben redactarlo ni calcular finanzas.',
      '2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 planes): $40 - $80 USD por plan ejecutivo de 4 páginas con corrida financiera básica. • Nivel Intermedio (Con experiencia): $100 - $220 USD por plan completo de negocio con proyecciones a 12 meses, punto de equilibrio y presentación en PDF de alto impacto. • Nivel Senior / Consultor Financiero: $300 - $650 USD por plan bancario integral con asesoría en la postulación a fondos o créditos.',
      '3. Guion de Venta Listo para Copiar (WhatsApp / LinkedIn): "Hola [Nombre], sé que estás gestionando financiamiento para hacer crecer a [Nombre de Empresa]. Los evaluadores bancarios descartan la mayoría de proyectos por no incluir un modelo financiero claro con punto de equilibrio. Por solo $50 USD yo te estructuro tu Plan de Negocio Ejecutivo con corridas en Google Sheets listo para presentar en 4 días. ¿Te gustaría que revisemos tu proyecto esta semana?"',
      '4. Plan de Acción de 48 Horas: Día 1: Arma un plan de negocios demo en Canva y Google Sheets de una cafetería o tienda online como muestra de tu portafolio. Día 2: Contacta a 20 dueños de negocios locales o postulantes a fondos de emprendimiento y ofréceles tu servicio.'
    ],
    quizQuestions: [
      {
        question: '¿Cuál es la fórmula para calcular el Punto de Equilibrio en unidades que debe incluir todo plan financiero?',
        options: [
          'Ventas Totales divididas entre el número de empleados.',
          'Costos Fijos Totales divididos entre (Precio de Venta Unitario - Costo Variable Unitario).',
          'Impuestos pagados multiplicados por la tasa de interés bancaria.',
          'Capital inicial dividido entre el número de meses del año.'
        ],
        correctIndex: 1,
        explanation: 'El punto de equilibrio indica exactamente cuántas unidades debes comercializar para cubrir todos los costos operativos sin generar pérdidas ni ganancias.'
      },
      {
        question: '¿Cuál es la sección más importante de un plan de negocio para un evaluador o inversionista ocupado?',
        options: [
          'El índice y la dedicatoria inicial.',
          'El Resumen Ejecutivo de 1 a 2 páginas que condensa la propuesta de valor, los números clave y los requerimientos de capital.',
          'La biografía extensa de todos los miembros de la empresa.',
          'Las fotos del local comercial proyectado.'
        ],
        correctIndex: 1,
        explanation: 'El Resumen Ejecutivo permite a los tomadores de decisiones comprender la viabilidad, el retorno y el riesgo del proyecto en pocos minutos.'
      },
      {
        question: '¿Cuánto es un precio justo y realista para cobrar por redactar un Plan de Negocio profesional en Latinoamérica?',
        options: [
          'Más de $10,000 USD obligatoriamente.',
          'Entre $40 y $80 USD en nivel inicial, y entre $100 y $220 USD para planes completos con corrida financiera.',
          'Es un servicio gratuito por ley.',
          'Solo se cobra en comida.'
        ],
        correctIndex: 1,
        explanation: 'Cobrar entre $40 y $220 USD es un rango realista y muy atractivo para PYMEs locales en LATAM, permitiendo al profesional generar ingresos continuos.'
      }
    ]
  },

  // =========================================================================
  // TOMO 4: Mantén Contentos a Tus Clientes con Productos y Servicios de Calidad (pn-4)
  // =========================================================================
  'pn-4': {
    frameworkName: 'Gestión de Calidad Total (TQM), SLA de Servicio y Bucles de Mejora Continua (Kaizen)',
    coreMetrics: ['Tasa de Retención de Clientes (CRR > 85%)', 'Net Promoter Score (NPS > +60)', 'Tasa de Devoluciones o Reclamos (< 1%)', 'Tiempo de Respuesta a Garantías (< 24h)', 'Customer Effort Score (CES)'],
    caseCompany: 'Altos Gourmet Café & Tostaduría (Guadalajara, México)',
    caseOutcome: 'Estandarizó sus recetas de tueste y protocolos de entrega con checklists digitales en Trello gratuito, reduciendo las incidencias de producto de un 6.8% al 0.2%, logrando un 92% de pedidos recurrentes mensuales y duplicando la rentabilidad operativa.',
    pitfall: 'Enfocar todo el presupuesto en conseguir clientes nuevos mientras se descuida la calidad de entrega a los clientes actuales, generando un "balde pinchado" de cancelaciones.',
    actionItem1: 'Mapear todos los pasos que experimenta el cliente desde que paga hasta que recibe y usa el producto, identificando los 3 puntos con mayor riesgo de falla.',
    actionItem2: 'Establecer Procedimientos Operativos Estandarizados (SOPs) con listas de verificación visuales obligatorias antes de cualquier despacho o entrega.',
    actionItem3: 'Implementar una política de garantía incondicional de satisfacción ("si no te encanta, lo corregimos en 24h o te devolvemos tu dinero") para generar máxima confianza.',
    domainContext: 'La calidad no es un accidente, es el resultado de procesos estandarizados; un cliente satisfecho compra más veces, tolera mejores precios y atrae a nuevos clientes sin costo publicitario.',
    strategicRationale: 'Retener a un cliente existente es entre 5 y 7 veces más económico que adquirir uno nuevo; la consistencia en el servicio es la mayor ventaja competitiva de una PYME.',
    learningOverview: `🎯 SINOPSIS EJECUTIVA & IMPACTO:
El mayor drenaje de dinero en los negocios de América Latina es el "síndrome del balde pinchado": invertir grandes sumas en publicidad para atraer clientes nuevos mientras los clientes existentes se van insatisfechos por inconsistencias en la calidad o lentitud en el servicio. La causa raíz casi nunca es mala intención del personal, sino la falta de Procedimientos Operativos Estandarizados (SOPs) y listas de control de calidad. Este tomo te enseña a blindar la experiencia de cliente, estandarizar procesos para delegar con tranquilidad y multiplicar la recompra orgánica.

📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:
• Capítulo 1: Economía de la Retención y Reputación Online: Por qué un cliente fiel genera el 80% de las ganancias y cómo las reseñas públicas determinan el éxito comercial.
• Capítulo 2: Métodos TQM y Estandarización Visual: Cómo redactar SOPs de 1 página con fotos de referencia y checklists obligatorios antes de cada despacho.
• Capítulo 3: Protocolo Kaizen en 4 Días: Diagnóstico de puntos de fricción, redacción de estándares, capacitación de equipo y lanzamiento de garantías de satisfacción.
• Capítulo 4: Caso de Estudio Real (Altos Gourmet Café): Cómo redujeron sus errores de despacho del 6.8% al 0.2% con tableros de Trello y duplicaron sus contratos corporativos.
• Capítulo 5: Protocolo ante Quejas y Resolución en 24h: Cómo transformar una queja amarga en el cliente más fiel mediante la fórmula Agradecer + Resolver + Compensar.
• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de experiencia de cliente y manuales de SOPs a negocios locales cobrando entre $30 y $500 USD.

🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:
1. Trello (trello.com): Tableros Kanban de control de calidad con checklists bloqueantes que impiden mover una orden a "Entregado" sin verificación.
2. Google Forms (forms.google.com): Encuestas automatizadas de NPS y CSAT enviadas por WhatsApp 24 horas después de la compra.
3. Google Maps Business: Protocolo de derivación de clientes satisfechos (NPS 9-10) hacia reseñas públicas de 5 estrellas.

💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):
Restaurantes, clínicas dentales, tiendas online, talleres y empresas de servicios sufren de desorden operativo cuando el dueño no está presente físicamente:
• Nivel Junior: $30 – $60 USD por diseño de checklists de control de calidad + sistema de medición NPS en WhatsApp.
• Nivel Intermedio: $80 – $180 USD por manual completo de Procedimientos Operativos Estandarizados (SOPs) y capacitación del personal.
• Nivel Senior: $220 – $500 USD por reingeniería completa de la experiencia de cliente y protocolo de fidelización.

⚡ PLAN DE ACCIÓN DE 48 HORAS:
Día 1: Diseña el flujo de calidad y checklists en Trello de un negocio de muestra (ej. cafetería o e-commerce).
Día 2: Visita o contacta a 10 comercios de tu ciudad con reseñas de 3 estrellas en Google Maps y ofréceles tu sistema de estandarización.`,
    ch1CustomNarrative: [
      'En la era de las redes sociales y las reseñas públicas en Google, la calidad de tu producto o servicio es tu verdadera estrategia de marketing.',
      'Una mala experiencia de cliente no solo te cuesta la pérdida de ese comprador, sino la de decenas de prospectos que leerán su queja pública.',
      'La mayoría de dueños de negocios en América Latina sufren porque dependen de que ellos mismos estén presentes físicamente para que las cosas salgan bien; en cuanto delegan, la calidad se desploma.',
      'La solución no es trabajar 16 horas al día supervisando todo, sino crear Procedimientos Operativos Estandarizados (SOPs) y listas de verificación a prueba de errores humanos.'
    ],
    ch2MethodologyDetails: [
      '🛠️ TUTORIAL PRÁCTICO: CÓMO SISTEMATIZAR LA CALIDAD Y EL NPS CON TRELLO + GOOGLE FORMS GRATIS:',
      'Paso 1: Abre Trello (trello.com) en su plan gratuito. Crea un tablero llamado "Control de Calidad y Entregas". Configura 4 listas: 1. Pedidos Nuevos. 2. En Producción / Preparación. 3. Control de Calidad (Checklist Obligatorio). 4. Entregado con Éxito.',
      'Paso 2: Dentro de cada tarjeta de Trello, activa la función "Checklist" e incluye los 5 puntos críticos de verificación (ej: 1. Empaque sellado correctamente. 2. Factura incluida. 3. Producto probado/revisado. 4. Regalo de cortesía incluido. 5. Foto de control guardada). El personal no puede mover la tarjeta a "Entregado" sin marcar los 5 checks.',
      'Paso 3: En Google Forms, crea una micro-encuesta de 2 preguntas enviada por WhatsApp automáticamente 24 horas después de la entrega: "¿Del 0 al 10 qué tan probable es que nos recomiendes con un colega?" (NPS) y "¿Qué podemos mejorar?".',
      'Paso 4: Si la calificación es 9 o 10, envíale un enlace directo a tus Reseñas de Google Maps para multiplicar tus 5 estrellas orgánicas.'
    ],
    ch3TacticalSteps: [
      'Día 1: Mapea el flujo de entrega de tu negocio e identifica los 3 errores más comunes que provocan quejas de clientes.',
      'Día 2: Redacta un Procedimiento Operativo Estandarizado (SOP) de una sola página para cada una de las 3 tareas más críticas.',
      'Día 3: Imprime o digitaliza las listas de verificación (Checklists) y capacita a tu equipo en su uso obligatorio.',
      'Día 4: Lanza la garantía incondicional de satisfacción y hazla visible en todas tus propuestas y redes sociales.'
    ],
    ch4CaseDeepDive: [
      'Altos Gourmet Café en Guadalajara enfrentaba un problema común: cuando el dueño tostaba el café, los clientes estaban fascinados; cuando delegaba en sus empleados, el café a veces salía sobretostado o los pedidos se enviaban incompletos.',
      'Implementaron un tablero de Trello con fotos de referencia del color exacto del grano y un checklist de 4 pasos antes de sellar cada bolsa.',
      'En 30 días, los errores en pedidos se redujeron de un 6.8% a un 0.2%. Los clientes corporativos comenzaron a firmar contratos de suscripción mensual al comprobar que la calidad era 100% predecible y constante.',
      'La empresa duplicó su facturación sin que el dueño tuviera que estar presente en la tostaduría.'
    ],
    ch5RiskMitigation: [
      'Riesgo crítico: Tratar las quejas de clientes como un ataque personal en lugar de oro en polvo para mejorar el sistema.',
      'Protocolo ante reclamos: Aplica la regla "Agradecer + Resolver en 24h + Compensar con creces". Un cliente al que se le resuelve un problema con rapidez se vuelve más leal que uno que nunca tuvo inconvenientes.',
      'Nunca culpes a un empleado sin revisar primero si el procedimiento estaba documentado con claridad en un checklist accesible.',
      'Audita de forma aleatoria el 10% de tus entregas cada semana para asegurar que los estándares se mantengan en el tiempo.'
    ],
    ch6ActionSummary: [
      '💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:',
      '1. Servicio Comercial Empaquetado: "Auditoría de Experiencia de Cliente y Manual de Estandarización de Calidad (SOPs)". Puedes vender este servicio a restaurantes, clínicas, tiendas de comercio electrónico, agencias de servicios y talleres que sufren por desorden operativo y quejas de clientes.',
      '2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior: $30 - $60 USD por diseño de checklists de control de calidad + sistema de medición NPS en WhatsApp. • Nivel Intermedio: $80 - $180 USD por manual completo de Procedimientos Operativos Estandarizados (SOPs) y capacitación de personal. • Nivel Senior / Consultor: $220 - $500 USD por reingeniería completa de la experiencia de cliente y protocolo de fidelización.',
      '3. Guion de Venta Listo para Copiar (WhatsApp / Instagram): "Hola [Nombre], sé que en [Nombre del Negocio] la calidad es fundamental. Muchos dueños de negocio sufren porque cuando no están supervisando todo personalmente, los empleados cometen errores en la entrega que molestan a los clientes. Por solo $35 USD yo ayudo a negocios de tu sector a estandarizar sus procesos con checklists simples en Trello para que tu negocio funcione con excelencia incluso cuando tú no estés presente. ¿Te gustaría que hagamos una auditoría rápida esta semana?"',
      '4. Plan de Acción de 48 Horas: Día 1: Documenta el proceso de atención y entrega de un restaurante o tienda ficticia en Trello como portafolio. Día 2: Visita o contacta a 10 comercios de tu ciudad que tengan malas reseñas en Google Maps por retrasos y ofréceles tu sistema de estandarización.'
    ],
    quizQuestions: [
      {
        question: '¿Qué es un SOP (Procedimiento Operativo Estandarizado) y para qué sirve en una PYME?',
        options: [
          'Un software muy costoso que reemplaza a todos los empleados.',
          'Un documento simple y visual que describe paso a paso cómo ejecutar una tarea crítica para garantizar la misma calidad siempre.',
          'Una multa legal impuesta por el gobierno.',
          'Un tipo de factura electrónica.'
        ],
        correctIndex: 1,
        explanation: 'Los SOPs permiten que cualquier colaborador ejecute una tarea con el mismo nivel de excelencia que el fundador del negocio.'
      },
      {
        question: '¿Cuál es la regla de oro para convertir un reclamo de un cliente insatisfecho en una oportunidad de fidelización?',
        options: [
          'Ignorar el mensaje en redes sociales para que nadie se entere.',
          'Agradecer la retroalimentación, resolver el problema en menos de 24 horas y compensar al cliente.',
          'Discutir con el cliente demostrándole que la culpa fue de él.',
          'Bloquear al usuario inmediatamente.'
        ],
        correctIndex: 1,
        explanation: 'Resolver con rapidez y generosidad una queja transforma a un cliente enojado en un defensor leal de tu marca.'
      },
      {
        question: '¿A qué tipo de negocios en Latinoamérica puedes venderles el servicio de estandarización y manuales de calidad?',
        options: [
          'Únicamente a empresas con más de 10,000 empleados.',
          'A restaurantes, clínicas, tiendas online, talleres y empresas de servicios locales que sufren de desorden operativo.',
          'Solo a entidades gubernamentales.',
          'A nadie, no es un servicio comercial.'
        ],
        correctIndex: 1,
        explanation: 'Las PYMEs locales y negocios de servicios son los clientes más necesitados y dispuestos a pagar por liberarse del caos operativo.'
      }
    ]
  },

  // =========================================================================
  // TOMO 5: Expande tu Negocio: Ingresa a un Mercado Internacional (pn-5)
  // =========================================================================
  'pn-5': {
    frameworkName: 'Protocolo de Internacionalización Ágil, Arbitraje Geográfico y Cross-Border E-Commerce',
    coreMetrics: ['Margen Neto en Divisa Fuerte (USD/EUR)', 'Costo Logístico Internacional sobre Venta (< 18%)', 'Tasa de Conversión Transfronteriza', 'Tiempo de Tránsito Aduanero', 'Cumplimiento Arancelario & Fiscal'],
    caseCompany: 'Andean Gourmet Organics (Lima, Perú)',
    caseOutcome: 'Utilizó herramientas gratuitas de inteligencia comercial para identificar demanda no satisfecha de superalimentos en EE.UU. y México; comenzó exportando lotes pequeños mediante envíos courier B2B y alcanzó $45,000 USD en facturación internacional en su primer año.',
    pitfall: 'Intentar exportar a 5 países simultáneamente sin entender la regulación aduanera local, los costos ocultos de envío y las preferencias culturales del comprador.',
    actionItem1: 'Utilizar Google Market Finder y Trade Map para identificar los 2 países con mayor demanda y menores barreras de entrada para tu producto o servicio.',
    actionItem2: 'Adaptar tu oferta digital habilitando cobros internacionales en dólares (mediante Stripe, PayPal, Payoneer o transferencias bancarias internacionales).',
    actionItem3: 'Probar la exportación de servicios o productos en formato de prueba piloto con un solo distribuidor o cliente corporativo antes de invertir en registros masivos.',
    domainContext: 'La digitalización ha democratizado el comercio exterior; hoy una pequeña empresa o profesional independiente desde cualquier rincón de América Latina puede vender servicios y productos de alto valor a clientes en todo el mundo cobrando en moneda dura.',
    strategicRationale: 'Diversificar los ingresos en divisas fuertes protege al negocio contra las devaluaciones de las monedas locales y amplía el mercado potencial por diez.',
    learningOverview: `🎯 SINOPSIS EJECUTIVA & IMPACTO:
Operar exclusivamente en moneda local en economías con inflación y devaluación constante es una vulnerabilidad directiva grave. La globalización digital permite que cualquier profesional independiente o PYME en América Latina aplique el "arbitraje geográfico": mantener sus costos fijos en moneda local mientras genera ingresos recurrentes facturando en dólares o euros a clientes en Estados Unidos, México, España o la región. Este tomo desmitifica la exportación y te enseña el protocolo paso a paso para vender productos y servicios internacionalmente con costo cero de software.

📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:
• Capítulo 1: Arbitraje Geográfico y Comercio Transfronterizo: Cómo monetizar el talento y los productos latinoamericanos en economías de alto poder adquisitivo.
• Capítulo 2: Inteligencia Arancelaria y Demanda Global: Uso de bases de datos de Naciones Unidas y Google para hallar mercados con tratados de libre comercio (TLC) y arancel 0%.
• Capítulo 3: Ruta de Despliegue en 4 Semanas: Pasarelas de cobro en USD, adaptación de propuestas sin modismos locales y prospección internacional.
• Capítulo 4: Caso de Estudio Real (Andean Gourmet Organics): Cómo pasaron de vender a $1.20 USD localmente a exportar a $3.80 USD por unidad en EE.UU. facturando $45,000 USD.
• Capítulo 5: Blindaje Aduanero y Cobros Seguros: Certificados sanitarios, contratos con cláusula de jurisdicción y regla del 50% de anticipo obligatorio.
• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de internacionalización y prospección transfronteriza cobrando entre $45 y $800 USD por cliente.

🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:
1. Trade Map (trademap.org): Base de datos gratuita de la ONU para consultar volúmenes de importación mundial y aranceles exactos por partida arancelaria.
2. Google Market Finder (marketfinder.thinkwithgoogle.com): Algoritmo de Google para descubrir qué países tienen mayor volumen de búsquedas de compra para tu nicho.
3. Payoneer / Wise / Stripe: Configuración de cuentas receptoras en dólares para cobrar a clientes internacionales sin comisiones abusivas.

💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):
Cientos de fabricantes, productores y empresas de servicios locales sueñan con exportar pero no tienen idea de cómo investigar aranceles ni cómo prospectar clientes afuera:
• Nivel Junior: $45 – $90 USD por reporte de inteligencia comercial comparando 2 mercados internacionales.
• Nivel Intermedio: $120 – $280 USD por plan de internacionalización completo (investigación de mercado + logística + pasarelas + estrategia de entrada).
• Nivel Senior: $350 – $800 USD por gestión integral de expansión y cierre de distribuidores en el extranjero.

⚡ PLAN DE ACCIÓN DE 48 HORAS:
Día 1: Genera un reporte demo de exportación con Trade Map de un producto de tu país (ej. café, artesanía, calzado o software).
Día 2: Contacta a 15 gerentes de empresas locales en LinkedIn y ofréceles tu estudio de factibilidad internacional.`,
    ch1CustomNarrative: [
      'Limitar tu mercado a tu ciudad o país natal en el siglo XXI es dejar el 95% de tus ingresos potenciales sobre la mesa.',
      'Si vendes servicios profesionales (diseño, programación, consultoría, marketing, traducción) o productos de nicho de alto valor, el arbitraje geográfico es tu mayor ventaja: tus costos operativos están en moneda local mientras que tus ingresos se generan en dólares o euros.',
      'Exportar ya no exige burocracias de contenedores marítimos gigantescos ni oficinas comerciales en el extranjero.',
      'Con las herramientas digitales actuales, puedes identificar nichos con alta disposición a pagar en mercados desarrollados y cerrar contratos desde tu computadora personal.'
    ],
    ch2MethodologyDetails: [
      '🛠️ TUTORIAL PRÁCTICO: CÓMO INVESTIGAR MERCADOS INTERNACIONALES CON TRADE MAP Y GOOGLE MARKET FINDER GRATIS:',
      'Paso 1: Entra a Google Market Finder (marketfinder.thinkwithgoogle.com) sin costo. Ingresa el enlace de tu sitio web o categoría de servicio. La herramienta analizará automáticamente las tendencias globales de búsqueda y te listará los 3 países con mayor volumen de compradores calificados.',
      'Paso 2: Accede a Trade Map (trademap.org) de las Naciones Unidas (registro 100% gratuito). Busca la partida arancelaria de tu producto para ver qué países importan más volumen desde tu región y cuáles tienen arancel cero por tratados de libre comercio (TLC).',
      'Paso 3: Abre una cuenta receptora de pagos en dólares internacionales (puedes usar plataformas como Payoneer, Stripe Atlas, Wise o PayPal comercial con retiro a cuenta bancaria local).',
      'Paso 4: Adapta tus propuestas comerciales cotizando en USD netos e indicando los términos internacionales de entrega (Incoterms básicos como DAP o DDP para producto físico, o entregables digitales con contrato de confidencialidad NDA para servicios).'
    ],
    ch3TacticalSteps: [
      'Semana 1: Investiga la demanda y aranceles de los 3 países más atractivos utilizando Google Market Finder y Trade Map.',
      'Semana 2: Configura tu pasarela de cobro internacional en dólares y redacta tus contratos de prestación de servicios con cláusulas de jurisdicción internacional.',
      'Semana 3: Adapta tu perfil de LinkedIn y página web eliminando modismos locales y enfocando los beneficios en el mercado objetivo.',
      'Semana 4: Lanza una campaña de prospección directa contactando a 25 empresas en el país destino seleccionadas por su perfil ideal.'
    ],
    ch4CaseDeepDive: [
      'Andean Gourmet Organics en Lima producía snacks de quinua y cacao de alta calidad pero el mercado local estaba saturado y con márgenes muy ajustados.',
      'Utilizando Trade Map, descubrieron que en Texas y California había una creciente demanda de snacks orgánicos libres de gluten y que Perú contaba con arancel cero por tratado de libre comercio.',
      'En lugar de contratar costosos intermediarios, enviaron muestras por courier internacional a 20 tiendas especializadas y cerraron un acuerdo con una cadena regional de tiendas naturistas para abastecer 5 tiendas piloto.',
      'La empresa pasó de vender a $1.20 USD la unidad en el mercado local a exportar a $3.80 USD por unidad, triplicando su margen neto de ganancia.'
    ],
    ch5RiskMitigation: [
      'Peligro común: Retención de mercancía en aduanas por falta de certificados de origen, registros sanitarios (FDA en EE.UU., COFEPRIS en México) o etiquetado inadecuado.',
      'Solución: Antes de realizar cualquier envío comercial, contrata una consulta técnica de 1 hora con un agente aduanal local o con la agencia de promoción de exportaciones de tu país (ej. ProMéxico, ProColombia, PromPerú, ProChile).',
      'En exportación de servicios, exige siempre un anticipo del 50% antes de comenzar cualquier trabajo y el 50% restante contra entrega de entregables protegidos.',
      'Contrata un seguro de transporte internacional para cubrir cualquier pérdida o daño de carga en tránsito.'
    ],
    ch6ActionSummary: [
      '💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:',
      '1. Servicio Comercial Empaquetado: "Estudio de Factibilidad y Plan de Entrada a Mercados Internacionales". Miles de fabricantes locales y empresas de servicios quieren vender en EE.UU., México, España o países vecinos pero no saben cómo investigar la demanda, los aranceles ni la logística.',
      '2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior: $45 - $90 USD por reporte de inteligencia comercial comparando 2 mercados internacionales potenciales. • Nivel Intermedio: $120 - $280 USD por plan de internacionalización completo (investigación de mercado + logística + pasarelas de pago + estrategia de entrada). • Nivel Senior / Consultor: $350 - $800 USD por gestión integral de expansión y cierre de distribuidores internacionales.',
      '3. Guion de Venta Listo para Copiar (LinkedIn / Correo): "Hola [Nombre], felicidades por la calidad de los productos de [Nombre de Empresa]. En mercados como EE.UU. o México existe una alta demanda por tu tipo de oferta con precios en dólares más rentables. Por $60 USD yo te entrego un estudio de factibilidad internacional con datos arancelarios de Trade Map y canales de entrada en 5 días. ¿Te interesaría que analicemos qué países ofrecen las mejores oportunidades para tu negocio en una llamada de 15 minutos?"',
      '4. Plan de Acción de 48 Horas: Día 1: Realiza un estudio de mercado de muestra con Trade Map de un producto típico (ej: café especial, calzado de cuero o software B2B) y compártelo en un PDF de 3 páginas. Día 2: Contacta a 15 exportadores potenciales en LinkedIn ofreciéndoles tu auditoría de mercados internacionales.'
    ],
    quizQuestions: [
      {
        question: '¿Qué herramienta gratuita de las Naciones Unidas permite consultar volúmenes de importación y aranceles por partida arancelaria?',
        options: [
          'Wikipedia.',
          'Trade Map (trademap.org).',
          'Google Maps.',
          'Instagram Shopping.'
        ],
        correctIndex: 1,
        explanation: 'Trade Map es la base de datos oficial más completa y gratuita para analizar el comercio exterior y la demanda arancelaria internacional.'
      },
      {
        question: '¿Por qué la exportación de servicios desde Latinoamérica representa una gran ventaja financiera (arbitraje geográfico)?',
        options: [
          'Porque no se pagan impuestos en ningún país.',
          'Porque tus costos operativos se mantienen en moneda local mientras que facturas y cobras en divisas fuertes (USD o EUR) de mayor poder adquisitivo.',
          'Porque los clientes internacionales nunca exigen calidad.',
          'Porque no se requiere internet para trabajar.'
        ],
        correctIndex: 1,
        explanation: 'El arbitraje geográfico permite a profesionales y empresas de LATAM maximizar su margen neto vendiendo a mercados con mayores presupuestos.'
      },
      {
        question: '¿Cuánto es un precio justo y realista para cobrar por un reporte de inteligencia comercial internacional en LATAM?',
        options: [
          'Entre $45 y $90 USD para un reporte inicial, y entre $120 y $280 USD para un plan completo de internacionalización.',
          'Más de $20,000 USD.',
          'Solo $2 USD.',
          'No tiene valor comercial.'
        ],
        correctIndex: 0,
        explanation: 'Una tarifa de $45 a $90 USD permite a cualquier productor local acceder al estudio, facilitando al consultor conseguir múltiples proyectos mensuales.'
      }
    ]
  },

  // =========================================================================
  // TOMO 6: Planifica para el Éxito con una Carta de Proyecto (pn-6)
  // =========================================================================
  'pn-6': {
    frameworkName: 'Project Charter Ejecutivo (Carta de Proyecto de 1 Página) & Matriz de Gestión de Riesgos',
    coreMetrics: ['Cumplimiento de Plazo Acordado (Schedule Variance)', 'Desviación Presupuestaria (< 5%)', 'Alineación de Criterios de Aceptación (100%)', 'Tasa de Mitigación de Riesgos Tempranos', 'Satisfacción del Patrocinador del Proyecto'],
    caseCompany: 'Constructora & Proyectos Delta (Bogotá, Colombia)',
    caseOutcome: 'Implementó Cartas de Proyecto obligatorias de 1 página antes de iniciar cualquier obra o desarrollo, reduciendo los retrasos operativos en un 42% y eliminando sobrecostos imprevistos en más de $18,000 USD en su primer trimestre.',
    pitfall: 'Comenzar a gastar dinero y asignar tareas a un equipo sin haber definido por escrito el alcance, los entregables exactos, el presupuesto límite y los criterios de éxito aprobados por el cliente o director.',
    actionItem1: 'Redactar una Carta de Proyecto de una sola página especificando los objetivos SMART, el alcance innegociable y los entregables fuera de alcance.',
    actionItem2: 'Mapear la matriz de interesados (Stakeholders) identificando quién aprueba el presupuesto, quién valida técnicamente y quién recibe el producto final.',
    actionItem3: 'Configurar un tablero visual en Trello o Asana gratuito con las fechas límite y los entregables vinculados a la Carta de Proyecto.',
    domainContext: 'La gestión profesional de proyectos no consiste en llenar carpetas burocráticas, sino en alinear expectativas desde el primer minuto para que el trabajo se entregue a tiempo, dentro del presupuesto y con la calidad requerida.',
    strategicRationale: 'El 80% de los proyectos fracasan por ambigüedad en el alcance inicial; formalizar una Carta de Proyecto ahorra miles de horas de discusiones y retrabajos costosos.',
    learningOverview: `🎯 SINOPSIS EJECUTIVA & IMPACTO:
El 80% de los proyectos empresariales en Latinoamérica sufren de retrasos crónicos, sobrecostos presupuestarios y discusiones desgastantes entre clientes y proveedores. La causa de este descontrol casi nunca es técnica, sino el temido "deslizamiento del alcance" (Scope Creep): cuando se empieza a trabajar sin definir por escrito qué está incluido y qué NO está incluido en el contrato. La Carta de Proyecto (Project Charter) de 1 página es la herramienta directiva más eficaz para blindar cualquier proyecto, asegurar entregas puntuales y cobrar cada cambio extra.

📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:
• Capítulo 1: Anatomía del Descontrol y Por qué Fracasan los Proyectos: Cómo la ambigüedad inicial destruye la rentabilidad y desmotiva a los equipos.
• Capítulo 2: Las 6 Secciones Innegociables de una Carta de Proyecto: Justificación de negocio, objetivos SMART, alcance dentro vs. alcance fuera, presupuesto, cronograma de hitos y criterios de aceptación.
• Capítulo 3: Protocolo de Gestión en 4 Días: Entrevistas con patrocinadores, redacción de la carta de 1 página, firma de aprobación y kick-off meeting de 20 minutos.
• Capítulo 4: Caso de Estudio Real (Constructora Delta): Cómo eliminaron $18,000 USD en sobrecostos no cobrados y redujeron los retrasos en un 42% en Bogotá.
• Capítulo 5: Protocolo de Control de Cambios y Mensajes de WhatsApp: Cómo responder elegantemente a pedidos informales para cobrar el tiempo adicional sin fricción.
• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer Project Management As a Service para PYMEs cobrando entre $35 y $550 USD mensuales.

🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:
1. Google Docs (docs.google.com): Plantilla ejecutiva de Project Charter de 1 página con formato visual de alta legibilidad.
2. Asana (asana.com) / Trello: Configuración de tableros de hitos y cronogramas con asignación de responsables y fechas límite estrictas.
3. Google Drive: Estructura de carpetas compartidas con permisos de solo lectura para mantener a los clientes informados en tiempo real.

💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):
Los directores de empresas tienen decenas de proyectos estancados porque nadie en su equipo tiene el hábito y la metodología para coordinar entregas:
• Nivel Junior: $35 – $70 USD por redacción de Project Charter + montaje del tablero en Asana/Trello.
• Nivel Intermedio: $90 – $200 USD por estructuración y coordinación integral de un proyecto a 30-60 días.
• Nivel Senior: $250 – $550 USD/mes como Project Manager freelance por horas para supervisar iniciativas estratégicas.

⚡ PLAN DE ACCIÓN DE 48 HORAS:
Día 1: Diseña tu plantilla de Project Charter en Google Docs y un tablero demo en Asana.
Día 2: Contacta a 15 directores de empresas o agencias en LinkedIn ofreciéndote para coordinar su próximo proyecto.`,
    ch1CustomNarrative: [
      '¿Cuántas veces has visto un proyecto que se planeó para dos meses y terminó tardando seis meses, costando el doble y dejando a todos frustrados?',
      'En el mundo empresarial, la causa principal del fracaso de proyectos no es la falta de talento técnico, sino el "deslizamiento del alcance" (Scope Creep): cuando el cliente o el jefe empieza a pedir cosas adicionales que nunca se presupuestaron.',
      'La Carta de Proyecto (Project Charter) es el contrato operativo más poderoso que existe: un documento breve de 1 o 2 páginas que blinda el proyecto definiendo qué se va a hacer, qué NO se va a hacer, cuánto dinero hay disponible y en qué fecha exacta se entrega.',
      'Si dominas este marco, te conviertes en un profesional indispensable capaz de transformar el caos de cualquier empresa en entregas puntuales y rentables.'
    ],
    ch2MethodologyDetails: [
      '🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UNA CARTA DE PROYECTO Y GESTIONARLA EN ASANA / TRELLO GRATIS:',
      'Paso 1: Abre Google Docs (docs.google.com) y utiliza la plantilla "Project Charter Ejecutivo". Debe contener exactamente 6 secciones: 1. Justificación del Negocio (¿Por qué se hace?). 2. Objetivos SMART (Medibles con cifras y fecha de corte). 3. Alcance Dentro vs. Alcance Fuera (Lista explícita de lo que NO incluye el proyecto). 4. Presupuesto Límite Aprobado. 5. Cronograma de Hitos Principales (Milestones). 6. Criterios de Aceptación y Firmas de Aprobación.',
      'Paso 2: Abre Asana (asana.com) o Trello (trello.com) en su plan gratuito. Crea un proyecto titulado con el nombre de la iniciativa. Crea 4 columnas o secciones: "Planificación Aprobada", "En Ejecución", "Revisión de Control de Calidad" y "Entregado / Cerrado".',
      'Paso 3: Convierte cada Hito del Project Charter en una tarea con fecha límite estricta y un único responsable asignado con nombre y apellido.',
      'Paso 4: Realiza una reunión semanal de seguimiento de 15 minutos proyectando el tablero para revisar que ninguna tarea crítica esté retrasada.'
    ],
    ch3TacticalSteps: [
      'Día 1: Entrevista al patrocinador o cliente del proyecto y completa el borrador de la Carta de Proyecto en Google Docs.',
      'Día 2: Define con claridad la lista de entregables "Fuera de Alcance" para evitar solicitudes imprevistas.',
      'Día 3: Presenta el documento de 1 página y obtén la firma de aprobación de los involucrados clave.',
      'Día 4: Configura el cronograma en Asana/Trello y lanza la reunión de inicio (Kick-off meeting) de 20 minutos con el equipo ejecutor.'
    ],
    ch4CaseDeepDive: [
      'Constructora Delta en Bogotá sufría porque sus proyectos de remodelación comercial siempre terminaban en disputas con los clientes por cambios de último momento no cobrados.',
      'Implementaron la regla innegociable de firmar un Project Charter de 1 página antes de comprar el primer material, donde se listaba taxativamente qué incluía la obra y el costo por metro cuadrado de cualquier cambio posterior.',
      'En el primer trimestre, los sobrecostos no autorizados se redujeron a cero y los clientes valoraron la transparencia profesional del proceso.',
      'La empresa ahorró $18,000 USD en retrabajos y aumentó su margen neto en un 22%.'
    ],
    ch5RiskMitigation: [
      'Peligro crítico: El cliente que envía mensajes de WhatsApp pidiendo cambios informales ("Oye, ¿puedes agregarle esto otro?").',
      'Protocolo de Control de Cambios: Cada vez que un cliente pida una modificación, responde amablemente: "Con gusto podemos incluirlo; prepararé una solicitud de cambio de alcance con el ajuste de tiempo y presupuesto para que lo apruebes antes de comenzar".',
      'Nunca inicies la ejecución sin la firma formal o confirmación escrita del patrocinador del proyecto.',
      'Establece un margen de contingencia del 10% al 15% en el presupuesto financiero y en los plazos temporales.'
    ],
    ch6ActionSummary: [
      '💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:',
      '1. Servicio Comercial Empaquetado: "Project Management As a Service: Estructuración y Coordinación de Proyectos para PYMEs". La mayoría de dueños de negocios en LATAM tienen decenas de ideas y proyectos estancados porque nadie en su equipo tiene la disciplina de planificar y coordinar entregables.',
      '2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior: $35 - $70 USD por redacción de Project Charter profesional + configuración del tablero en Asana/Trello. • Nivel Intermedio: $90 - $200 USD por estructuración y gestión integral de un proyecto de 30 a 60 días con reuniones semanales de control. • Nivel Senior / Project Manager Externo: $250 - $550 USD mensuales como Project Manager por horas para coordinar las iniciativas estratégicas de una empresa.',
      '3. Guion de Venta Listo para Copiar (WhatsApp / LinkedIn): "Hola [Nombre], sé lo difícil que es coordinar proyectos en [Empresa] cuando el equipo está ocupado en el día a día y los plazos se retrasan. Por solo $40 USD yo te estructuro tu proyecto con una Carta de Proyecto ejecutiva y configuro tu cronograma en Asana para asegurar que todo se entregue a tiempo sin que tú tengas que perseguir a nadie. ¿Qué proyecto tienes en mente para este mes que te gustaría organizar?"',
      '4. Plan de Acción de 48 Horas: Día 1: Diseña tu plantilla de Project Charter en Google Docs y un tablero demo en Asana. Día 2: Contacta a 15 directores de empresas o agencias en LinkedIn ofreciéndote como Project Manager freelance para sus nuevos proyectos.'
    ],
    quizQuestions: [
      {
        question: '¿Cuál es la función principal de la sección "Fuera de Alcance" (Out of Scope) en una Carta de Proyecto?',
        options: [
          'Dejar que el equipo trabaje menos horas de lo contratado.',
          'Delimitar claramente qué tareas o solicitudes NO están incluidas para evitar retrabajos y sobrecostos no presupuestados.',
          'Ocultar información al cliente.',
          'Pagar menos impuestos.'
        ],
        correctIndex: 1,
        explanation: 'Definir lo que NO incluye el proyecto es el mayor escudo de protección contra el desvío de presupuesto y los retrasos.'
      },
      {
        question: '¿Cuánto tiempo debe tomar la lectura de un Project Charter ejecutivo bien estructurado?',
        options: [
          'Menos de 5 minutos, concentrado en 1 o 2 páginas claras.',
          'Entre 4 y 6 horas.',
          '3 días completos.',
          'Un mes.'
        ],
        correctIndex: 0,
        explanation: 'La brevedad y claridad ejecutiva aseguran que los patrocinadores y directivos lean, comprendan y aprueben el documento sin fricción.'
      },
      {
        question: '¿Cuánto es un precio justo y accesible para ofrecer gestión de proyectos a PYMEs en Latinoamérica?',
        options: [
          'Más de $5,000 USD.',
          'Entre $35 y $70 USD por estructuración inicial, y entre $90 y $200 USD por coordinación mensual.',
          'Solo se cobra en certificados de regalo.',
          'Las empresas no contratan Project Managers.'
        ],
        correctIndex: 1,
        explanation: 'Cobrar entre $35 y $200 USD permite a cualquier PYME local contratar el servicio de gestión de proyectos sin comprometer su flujo de caja.'
      }
    ]
  },

  // =========================================================================
  // TOMO 7: Usa el Prototipado y Fracasa con Inteligencia (pn-7)
  // =========================================================================
  'pn-7': {
    frameworkName: 'Metodología Rapid Prototyping (MVP Visual & Funcional) & Test de Humo Digital',
    coreMetrics: ['Velocidad de Creación del Prototipo (< 48 horas)', 'Costo Total del Experimento (< $10 USD)', 'Tasa de Interacción de Usuarios de Prueba', 'Tasa de Conversión a Lista de Espera / Preventa (> 10%)', 'Feedback Cualitativo Recopilado'],
    caseCompany: 'KreaTech Learning App (Buenos Aires, Argentina)',
    caseOutcome: 'En lugar de gastar $5,000 USD en desarrollar una aplicación móvil desde cero, construyó un prototipo visual interactivo en Figma y una landing page de prueba en Carrd por $0 USD; consiguió 150 registros de preventa en 10 días y validó el modelo antes de programar una sola línea de código.',
    pitfall: 'Invertir meses de tiempo y miles de dólares en desarrollar un producto completo sin haber puesto un prototipo visual interactivo en manos de usuarios reales para ver cómo interactúan con él.',
    actionItem1: 'Diseñar un prototipo interactivo de baja fidelidad (Wireframe) en papel o en Figma gratuito en menos de 24 horas.',
    actionItem2: 'Publicar una landing page de preventa o prueba de humo en Carrd.co gratuita con un formulario para medir interés de compra real.',
    actionItem3: 'Observar a 5 usuarios reales interactuar con el prototipo sin darles instrucciones previas para identificar los puntos de confusión en la navegación.',
    domainContext: 'Un prototipo no es el producto final; es un artefacto diseñado con el único propósito de aprender lo más rápido y económico posible si la propuesta de valor es intuitiva y deseable para el mercado.',
    strategicRationale: 'Prototipar a bajo costo permite equivocarse y corregir el rumbo en 48 horas con $0 de inversión, eliminando el riesgo de quiebra antes del desarrollo definitivo.',
    learningOverview: `🎯 SINOPSIS EJECUTIVA & IMPACTO:
El mayor despilfarro de capital en el ecosistema emprendedor es contratar programadores o fábricas durante meses para construir soluciones que nadie utiliza ni compra. El prototipado rápido rompe ese modelo: te permite simular la experiencia completa de una aplicación, servicio digital o plataforma en menos de 48 horas con herramientas de diseño visual gratuitas sin escribir una sola línea de código. Si los usuarios hacen clic, entienden el valor e intentan comprar en tu prototipo, tienes luz verde para construir; si no, habrás ahorrado miles de dólares y meses de frustración.

📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:
• Capítulo 1: La Filosofía del Producto Mínimo Viable (MVP): Por qué la velocidad de aprendizaje supera a la perfección estética en la fase inicial.
• Capítulo 2: Diseño de Interfaces Clicables en Figma: Tutorial paso a paso para armar 4 pantallas interactivas y generar un enlace público de prueba en smartphone.
• Capítulo 3: Creación de Páginas de Preventa en Carrd: Montaje de landing pages de prueba de humo con botones de reserva conectados a WhatsApp en 2 horas.
• Capítulo 4: Caso de Estudio Real (KreaTech Learning): Cómo recaudaron $1,200 USD en inscripciones anticipadas en 10 días antes de grabar el primer módulo de curso.
• Capítulo 5: Pruebas de Usabilidad Silenciosa: Cómo observar a 5 usuarios interactuar con tu prototipo sin decir una sola palabra para detectar errores de diseño.
• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño de prototipos MVP y páginas de preventa para emprendedores cobrando entre $35 y $600 USD.

🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:
1. Figma (figma.com): Diseño de wireframes y prototipos interactivos clicables que simulan una app real instalada en el teléfono.
2. Carrd (carrd.co) / Google Sites: Construcción de páginas de aterrizaje (landing pages) ultra-rápidas para preventas y listas de espera.
3. Canva Mockups: Generación de imágenes 3D de dispositivos y productos para generar máxima credibilidad visual.

💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):
Miles de profesionales con ideas de startups no tienen conocimientos de diseño ni de landing pages pero necesitan mostrar algo tangible a socios o inversionistas:
• Nivel Junior: $35 – $75 USD por diseño de prototipo interactivo de 4 pantallas en Figma.
• Nivel Intermedio: $90 – $190 USD por prototipo en Figma + landing de preventa en Carrd con pasarela o WhatsApp.
• Nivel Senior: $250 – $600 USD por diseño UI/UX completo de producto mínimo viable + testeo con usuarios.

⚡ PLAN DE ACCIÓN DE 48 HORAS:
Día 1: Diseña en Figma un prototipo interactivo de una app de muestra (ej. delivery local o reservas médicas).
Día 2: Publica en LinkedIn o Twitter/X tu demo y ofrece diseñar prototipos MVP en 48 horas a fundadores con ideas.`,
    ch1CustomNarrative: [
      'El mayor desperdicio de talento y capital en la industria del emprendimiento es construir con perfección algo que nadie quiere usar ni comprar.',
      'Muchas personas creen que para lanzar una aplicación, un curso, una plataforma o un nuevo producto físico necesitan contratar un equipo de desarrollo durante seis meses e invertir miles de dólares.',
      'El prototipado rápido rompe ese paradigma: te permite simular la experiencia completa de tu solución en 48 horas utilizando herramientas de diseño visual gratuitas sin programar.',
      'Si un usuario puede hacer clic en tu prototipo, entender la propuesta de valor e intentar registrarse o comprar, tienes luz verde para construir; si no lo entiende, habrás ahorrado meses de trabajo frustrante.'
    ],
    ch2MethodologyDetails: [
      '🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UN PROTOTIPO INTERACTIVO CON FIGMA + CARRD GRATIS PASO A PASO:',
      'Paso 1: Abre Figma (figma.com) en su plan gratuito. Crea un nuevo lienzo seleccionando el marco de tu dispositivo (ej: iPhone 15 o Desktop). Diseña las 4 pantallas clave: 1. Inicio con propuesta de valor. 2. Catálogo / Opciones de servicio. 3. Detalle de la solución. 4. Pantalla de checkout / confirmación.',
      'Paso 2: En la pestaña superior derecha de Figma, activa el modo "Prototype". Conecta los botones de una pantalla con la siguiente arrastrando las flechas de interacción. Presiona el botón "Play" (Presentar) para obtener un enlace público interactivo donde cualquiera puede hacer clic y navegar como si fuera una aplicación real instalada.',
      'Paso 3: Abre Carrd (carrd.co) o Google Sites (sites.google.com) en su versión gratuita. Selecciona una plantilla minimalista, redacta el título con tu gancho comercial, incrusta una imagen o video de tu prototipo y coloca un botón de llamado a la acción: "Reservar con 50% de Descuento" vinculado a un formulario o a tu WhatsApp.',
      'Paso 4: Comparte el enlace con 30 prospectos y mide cuántas personas hacen clic en el botón de compra o dejan sus datos.'
    ],
    ch3TacticalSteps: [
      'Día 1: Dibuja a mano en una libreta las 4 pantallas básicas de tu solución (flujo de usuario).',
      'Día 2: Pasa los dibujos a Figma y crea el prototipo interactivo con enlaces clicables.',
      'Día 3: Publica la página de preventa en Carrd con el botón de llamado a la acción.',
      'Día 4: Realiza 5 sesiones de prueba en vivo (por Zoom o presencial) observando a usuarios reales navegar el prototipo.'
    ],
    ch4CaseDeepDive: [
      'KreaTech en Buenos Aires quería lanzar una plataforma de cursos interactivos de inteligencia artificial para profesionales no técnicos.',
      'En lugar de contratar una agencia de software por miles de dólares, el fundador dedicó un fin de semana a diseñar las 5 pantallas principales en Figma.',
      'Montó una página en Carrd gratuita con el título: "Aprende IA aplicada a tu trabajo en 4 semanas — Cupos limitados para el grupo piloto de $29 USD".',
      'En solo 10 días, 42 profesionales pagaron su inscripción anticipada por transferencia, validando el negocio con $1,218 USD en ingresos antes de haber grabado el primer módulo de clase.'
    ],
    ch5RiskMitigation: [
      'Peligro común: Perder semanas perfeccionando detalles estéticos irrelevantes (sombras, logos, animaciones) en lugar de testear la usabilidad básica.',
      'Regla del MVP: Si la primera versión de tu prototipo no te da un poco de vergüenza por su sencillez, significa que lo lanzaste demasiado tarde.',
      'No expliques tu prototipo durante la prueba de usuario; quédate en silencio y observa dónde se confunde la persona. Cada tropiezo del usuario es una mejora directa para tu diseño.',
      'Nunca construyas código complejo o compres maquinaria pesada sin haber validado el prototipo visual.'
    ],
    ch6ActionSummary: [
      '💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:',
      '1. Servicio Comercial Empaquetado: "Diseño de Prototipos Rápidos (MVP) y Páginas de Preventa para Emprendedores y Startups". Miles de personas con ideas de negocio no saben diseñar en Figma ni crear páginas web de preventa. Puedes ofrecerles crear su prototipo visual completo en 48 horas.',
      '2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior: $35 - $75 USD por diseño de prototipo interactivo de 4 pantallas en Figma. • Nivel Intermedio: $90 - $190 USD por prototipo en Figma + landing page de preventa en Carrd conectada a WhatsApp o pasarela de pago. • Nivel Senior / Diseñador de Producto MVP: $250 - $600 USD por diseño de interfaz completa (UI/UX) + testeo con usuarios y reporte de mejoras.',
      '3. Guion de Venta Listo para Copiar (Instagram DM / WhatsApp / LinkedIn): "Hola [Nombre], veo que tienes una excelente idea para lanzar [Proyecto/App]. La mayoría de emprendedores gastan mucho dinero en programar antes de validar si el diseño es claro para los clientes. Por solo $45 USD yo te diseño un prototipo visual e interactivo en Figma en 48 horas para que lo muestres a clientes reales o inversionistas sin gastar en desarrollo. ¿Te gustaría ver un demo de cómo quedaría tu idea?"',
      '4. Plan de Acción de 48 Horas: Día 1: Diseña en Figma un prototipo de una app de delivery local o de citas médicas y genera el enlace público de prueba. Día 2: Contacta a 15 personas que publiquen sobre startups en Twitter/X o LinkedIn y ofréceles diseñar su MVP visual.'
    ],
    quizQuestions: [
      {
        question: '¿Cuál es el objetivo primordial de construir un prototipo interactivo (MVP)?',
        options: [
          'Ganar premios de diseño gráfico en internet.',
          'Aprender con rapidez y con cero o mínimo costo si la solución es deseable y comprensible para el usuario antes de invertir en desarrollo.',
          'Gastar todo el presupuesto de la empresa en software.',
          'Demostrar que el fundador es un experto en programación compleja.'
        ],
        correctIndex: 1,
        explanation: 'El prototipo es un instrumento de aprendizaje rápido que reduce al mínimo el riesgo de crear productos que nadie quiere.'
      },
      {
        question: '¿Qué herramienta gratuita permite crear prototipos interactivos clicables sin necesidad de escribir código?',
        options: [
          'Bloc de notas de Windows.',
          'Figma (figma.com).',
          'Calculadora financiera.',
          'Un lector de PDF básico.'
        ],
        correctIndex: 1,
        explanation: 'Figma es el estándar de la industria para diseño de interfaces y prototipado interactivo con un potente plan gratuito.'
      },
      {
        question: '¿Cuánto es un precio competitivo y accesible para cobrar por diseñar un prototipo MVP en Figma en LATAM?',
        options: [
          'Entre $35 y $75 USD para un prototipo interactivo de 4 pantallas, y entre $90 y $190 USD si incluye landing page de preventa.',
          'Más de $5,000 USD.',
          'Solo se cobra en trueque.',
          'No es un servicio que se pueda vender.'
        ],
        correctIndex: 0,
        explanation: 'Cobrar entre $35 y $190 USD por un prototipo visual interactivo es una tarifa muy accesible para emprendedores y permite generar ingresos recurrentes.'
      }
    ]
  },

  // =========================================================================
  // TOMO 8: Haz un Plan Estratégico Para que Tu Negocio Crezca (pn-8)
  // =========================================================================
  'pn-8': {
    frameworkName: 'Marco de Planificación Estratégica Trimestral, OKRs de Google & Matriz FODA Cruzada',
    coreMetrics: ['Porcentaje de Cumplimiento de OKRs Trimestrales (> 70%)', 'Tasa de Crecimiento Intertrimestral de Ingresos (QoQ)', 'Margen Operativo Bruto y Neto', 'Alineación de Objetivos por Departamento (100%)', 'Retorno sobre el Capital Empleado (ROCE)'],
    caseCompany: 'Distribuidora NovaTech (Lima & Arequipa, Perú)',
    caseOutcome: 'Reemplazó sus reuniones caóticas de bomberos por un sistema de planificación trimestral con OKRs y tableros en Google Sheets; alineó a sus 45 colaboradores hacia 3 metas prioritarias y aumentó su facturación anual un 38% con un 19% más de margen neto.',
    pitfall: 'Establecer metas anuales vagas y genéricas ("vender más este año") sin desglosarlas en Objetivos y Resultados Clave (OKRs) medibles por trimestre con responsables directos.',
    actionItem1: 'Diseñar una matriz FODA cruzada (Fortalezas, Oportunidades, Debilidades y Amenazas) para formular estrategias ofensivas y defensivas.',
    actionItem2: 'Definir un máximo de 3 Objetivos Estratégicos para el próximo trimestre, cada uno acompañado de 3 Resultados Clave cuantificables (OKRs).',
    actionItem3: 'Implementar una rutina semanal de 30 minutos de seguimiento de OKRs para revisar avances y destrabar cuellos de botella.',
    domainContext: 'La estrategia no es un documento decorativo de inicio de año; es la disciplina directiva de decidir con claridad qué batallas comerciales pelear y, sobre todo, qué actividades improductivas dejar de hacer.',
    strategicRationale: 'Las empresas que gestionan su crecimiento con OKRs trimestrales superan en rentabilidad y velocidad de ejecución a las organizaciones reactivas que operan improvisando cada semana.',
    learningOverview: `🎯 SINOPSIS EJECUTIVA & IMPACTO:
El mayor obstáculo para una empresa que ya tiene ventas no es la falta de trabajo, sino la "trampa del activismo ciego": equipos agotados trabajando 12 horas al día apagando urgencias operativas pero sin avanzar un solo milímetro hacia los objetivos de rentabilidad y expansión. En América Latina, las PYMEs se estancan porque los departamentos de ventas, compras y operaciones trabajan en direcciones opuestas sin una brújula compartida. Este tomo te enseña a implementar el sistema de OKRs (Objectives and Key Results) utilizado por Google e Intel para alinear a cualquier empresa hacia 3 metas trimestrales claras.

📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:
• Capítulo 1: La Trampa de la Operación y la Necesidad de Foco Estratégico: Cómo pasar de apagar fuegos diarios a liderar con visión proactiva trimestral.
• Capítulo 2: Metodología OKRs y FODA Cruzado: Cómo formular Objetivos cualitativos inspiradores vinculados a 3 Resultados Clave numéricos e innegociables.
• Capítulo 3: Protocolo de Despliegue en 5 Días: Sesión estratégica con líderes, selección de 3 prioridades, asignación de responsables y publicación del tablero.
• Capítulo 4: Caso de Estudio Real (Distribuidora NovaTech): Cómo alinearon a 45 colaboradores en Perú, aumentando sus entregas a tiempo al 96% y sus ventas un 38%.
• Capítulo 5: Mitigación de Metas Mediocres y Cultura de Transparencia: Por qué alcanzar el 70%-80% de un OKR ambicioso es mejor que el 100% de una meta mediocre.
• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer facilitación estratégica y montaje de tableros de OKRs para PYMEs cobrando entre $40 y $700 USD.

🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:
1. Miro (miro.com): Tableros visuales colaborativos para talleres de FODA cruzado y mapeo de iniciativas estratégicas.
2. Google Sheets (sheets.google.com): Tablero de control de OKRs con cálculo dinámico de porcentajes de avance y semáforos de color condicionales.
3. Google Calendar: Rutinas de sincronización quincenal de 30 minutos sin desviar tiempo de la operación.

💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):
Los dueños de PYMEs necesitan a alguien que organice a sus líderes de área y cree un sistema de metas transparente a un costo accesible:
• Nivel Junior: $40 – $80 USD por taller de FODA cruzado de 2 horas + tablero de objetivos en Google Sheets.
• Nivel Intermedio: $110 – $240 USD por facilitación de la planeación estratégica trimestral + sistema de OKRs para 3 departamentos.
• Nivel Senior: $300 – $700 USD por acompañamiento directivo trimestral con reuniones mensuales de gobernanza.

⚡ PLAN DE ACCIÓN DE 48 HORAS:
Día 1: Construye un tablero modelo de OKRs con semáforos en Google Sheets y un lienzo en Miro como portafolio.
Día 2: Contacta a 15 directores generales de PYMEs en LinkedIn y ofréceles una sesión diagnóstica gratuita de 20 minutos de su alineación estratégica.`,
    ch1CustomNarrative: [
      'El mayor peligro para una empresa que ya genera ventas no es la falta de oportunidades, sino la trampa del activismo ciego: estar todo el día ocupado apagando fuegos sin avanzar un solo paso hacia los objetivos que verdaderamente mueven la aguja del negocio.',
      'Muchas PYMEs en América Latina se quedan estancadas durante años en el mismo nivel de facturación porque su equipo trabaja en direcciones opuestas sin una brújula compartida.',
      'El sistema de OKRs (Objectives and Key Results), popularizado por Google e Intel, resuelve esto: conecta la visión de largo plazo con 3 metas trimestrales transparentes donde cada persona sabe exactamente qué número debe mover cada semana.',
      'Dominar la planeación estratégica te convierte en el asesor o líder que saca a la empresa del estancamiento y la conduce hacia el crecimiento predecible.'
    ],
    ch2MethodologyDetails: [
      '🛠️ TUTORIAL PRÁCTICO: CÓMO DISEÑAR UN SISTEMA DE OKRs Y PLAN ESTRATÉGICO EN GOOGLE SHEETS + MIRO GRATIS:',
      'Paso 1: Abre Miro (miro.com) en su plan gratuito. Crea un tablero con la plantilla "FODA Cruzado". Identifica las 3 mayores Fortalezas y las 3 mayores Oportunidades del negocio para redactar estrategias ofensivas (FO: ¿Cómo usamos nuestras fortalezas para capturar estas oportunidades?).',
      'Paso 2: En Google Sheets (sheets.google.com), crea una hoja titulada "Tablero de Control de OKRs Trimestrales". Define la estructura: • Objetivo (Cualitativo e inspirador, ej: "Convertir nuestro canal digital en el motor principal de ventas"). • Resultados Clave (Cuantitativos y binarios, ej: KR1: Aumentar leads calificados de 50 a 150/mes. KR2: Reducir costo de adquisición CAC de $30 a $18 USD. KR3: Cerrar 20 nuevos contratos B2B).',
      'Paso 3: Agrega columnas con la fórmula de porcentaje de avance: =(Valor_Actual - Valor_Inicial)/(Valor_Meta - Valor_Inicial). Configura formato condicional para que las celdas se iluminen en verde (>70%), amarillo (40-69%) o rojo (<40%).',
      'Paso 4: Programa una reunión quincenal de 30 minutos con los líderes de área para revisar el tablero y acordar las 3 acciones prioritarias de la siguiente semana.'
    ],
    ch3TacticalSteps: [
      'Día 1-2: Realiza el diagnóstico FODA cruzado con el equipo directivo o con el dueño del negocio en Miro.',
      'Día 3: Selecciona los 3 Objetivos estratégicos prioritarios para los próximos 90 días (menos es más).',
      'Día 4: Define los 3 Resultados Clave numéricos por cada Objetivo y asígnales un responsable único.',
      'Día 5: Configura el tablero de OKRs en Google Sheets y presenta el plan a toda la organización.'
    ],
    ch4CaseDeepDive: [
      'Distribuidora NovaTech en Perú contaba con 45 colaboradores pero los departamentos de ventas, compras y logística vivían en constante conflicto por falta de alineación.',
      'La gerencia implementó el marco de OKRs trimestrales en un tablero compartido de Google Sheets, fijando como Objetivo común: "Garantizar entregas perfectas en 24h a clientes mayoristas".',
      'Logística se enfocó en reducir el tiempo de empaque, ventas en ingresar pedidos antes de las 2 PM y compras en evitar roturas de stock.',
      'En 6 meses, las entregas a tiempo pasaron del 68% al 96%, las ventas recurrentes crecieron un 38% y la empresa abrió dos nuevas sucursales regionales con total control operativo.'
    ],
    ch5RiskMitigation: [
      'Peligro común: Definir demasiados objetivos (más de 5) o redactar tareas operativas rutinarias en lugar de Resultados Clave que transformen el negocio.',
      'Regla de oro de los OKRs: Un Resultado Clave debe medir un impacto de negocio (ingresos, márgenes, clientes retenidos, tiempo de entrega) y nunca una simple tarea ("hacer 10 llamadas").',
      'Fomenta metas ambiciosas: Si un equipo alcanza el 100% de todos sus OKRs con facilidad, significa que las metas fueron demasiado conservadoras y mediocres.',
      'Celebra públicamente el aprendizaje derivado de los resultados que no se alcanzaron para cultivar una cultura de mejora continua y transparencia.'
    ],
    ch6ActionSummary: [
      '💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:',
      '1. Servicio Comercial Empaquetado: "Facilitación de Planeación Estratégica Trimestral y Sistema de OKRs para PYMEs". La gran mayoría de empresas en LATAM operan sin rumbo estratégico claro, pagando sueldos sin saber si cada área está alineada hacia las metas de crecimiento. Tu servicio consiste en facilitar su sesión estratégica y montar su tablero de control.',
      '2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior: $40 - $80 USD por taller de FODA cruzado de 2 horas + entrega de tablero de objetivos en Google Sheets. • Nivel Intermedio: $110 - $240 USD por facilitación de la planeación estratégica trimestral + diseño e implementación completa de OKRs para 3 departamentos. • Nivel Senior / Consultor Estratégico: $300 - $700 USD por acompañamiento directivo trimestral con sesiones mensuales de gobernanza y seguimiento de KPIs.',
      '3. Guion de Venta Listo para Copiar (WhatsApp / LinkedIn): "Hola [Nombre], veo el gran esfuerzo que han puesto en [Nombre de Empresa]. Sin embargo, a medida que un negocio crece, es muy común que el equipo empiece a trabajar desconectado y el dueño termine atrapado apagando urgencias operativas. Por $50 USD yo ayudo a dueños de PYMEs a implementar el sistema de OKRs en una sesión de 2 horas con un tablero en Google Sheets para alinear a todo el equipo hacia 3 metas claras. ¿Te gustaría que facilitemos tu planeación este mes?"',
      '4. Plan de Acción de 48 Horas: Día 1: Crea un tablero modelo de OKRs en Google Sheets y un lienzo FODA en Miro como portafolio visual. Día 2: Contacta a 15 directores generales o fundadores de PYMEs en LinkedIn y ofréceles una sesión diagnóstica gratuita de 20 minutos de su alineación estratégica.'
    ],
    quizQuestions: [
      {
        question: '¿Qué significa la sigla OKR y por qué es el estándar de planificación estratégica moderna?',
        options: [
          'Operaciones, Kilos y Rendimiento.',
          'Objectives and Key Results (Objetivos y Resultados Clave): conecta metas ambiciosas con indicadores numéricos medibles por trimestre.',
          'Un tipo de préstamo bancario.',
          'Una norma contable obligatoria.'
        ],
        correctIndex: 1,
        explanation: 'El marco de OKRs permite alinear a toda la organización hacia un número reducido de prioridades estratégicas de alto impacto.'
      },
      {
        question: '¿Cuál es la diferencia entre una tarea rutinaria y un Resultado Clave (Key Result) efectivo?',
        options: [
          'Las tareas son más largas que los resultados.',
          'Una tarea describe una actividad realizada, mientras que un Resultado Clave mide el impacto numérico concreto logrado en el negocio (ej: aumentar ventas un 25%).',
          'No hay ninguna diferencia.',
          'Los resultados clave no llevan números.'
        ],
        correctIndex: 1,
        explanation: 'Un buen Resultado Clave siempre mide un cambio medible en las métricas de negocio y no solo el esfuerzo de haber realizado una tarea.'
      },
      {
        question: '¿Cuánto es un precio razonable y accesible para ofrecer un taller de OKRs a una PYME en Latinoamérica?',
        options: [
          'Entre $40 y $80 USD por taller inicial y armado de tablero en Sheets, y entre $110 y $240 USD por facilitación trimestral.',
          'Más de $25,000 USD.',
          'Solo $1 USD.',
          'Las PYMEs nunca pagan por consultoría estratégica.'
        ],
        correctIndex: 0,
        explanation: 'Una tarifa de $40 a $240 USD es muy competitiva y accesible para pequeñas empresas en América Latina, permitiendo generar ingresos sólidos y sostenibles.'
      }
    ]
  }
};
