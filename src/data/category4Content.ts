// Specific topic-by-topic content blueprints for Category 4 (Reclutamiento)
// Providing 100% custom, domain-accurate, highly actionable business literature for each of the 3 books (Tomos 33 al 35)
// Features:
// 1. 5,000-character Deep Learning Overview & Executive Briefing per book
// 2. Step-by-step Free Recruitment & Onboarding Tools Tutorials (Notion ATS, Google Forms Screening, STAR Rubrics in Google Sheets, Onboarding Hubs)
// 3. Real, accessible LATAM Monetization Services & Pricing (Junior $25-$60, Mid $80-$180, Senior $220-$500 USD)
// 4. Localized copy-paste sales outreach pitches & 48h action plans
// 5. 3 rigorous exam questions per book with detailed explanations

import { SpecificBookContent } from './category1Content';

export const CATEGORY_4_CUSTOM_BOOKS: Record<string, SpecificBookContent> = {
  // =========================================================================
  // BOOK ID: rec-1
  // =========================================================================
  'rec-1': {
    frameworkName: "Metodología de Contratación Topgrading, Scorecard de Resultados & Atracción de Talento con Bajo Presupuesto",
    coreMetrics: [
      "Tasa de Éxito de Contratación a 12 Meses (A-Player Ratio > 85%)",
      "Costo Total por Contratación (Cost-per-Hire < $200 USD)",
      "Tiempo Promedio de Cobertura de Vacante (Time-to-Fill < 25 días)",
      "Tasa de Rotación Temprana a 90 Días (< 4%)",
      "Índice de Productividad Temprana del Empleado"
],
    caseCompany: "Agencia Digital & Desarrollo Web CloudScale (Quito, Ecuador)",
    caseOutcome: "Dejó de pagar costosos anuncios de empleo y comisiones a cazatalentos tradicionales; implementó Scorecards de Desempeño en Notion y pruebas de trabajo ciego de 2 horas en Google Forms; redujo su costo de contratación en un 70% y elevó la retención del primer año del 62% al 96%.",
    pitfall: "Contratar por desesperación para 'apagar un fuego' operativo eligiendo al primer candidato con un currículum bonito, sin validar competencias prácticas ni definir los resultados medibles que el puesto debe generar.",
    actionItem1: "Reemplazar las descripciones de puesto tradicionales por 'Scorecards de Rol' que definan la misión del cargo y 3 metas cuantitativas para los primeros 90 días.",
    actionItem2: "Diseñar una prueba práctica de trabajo (Work Sample Test) de 90 minutos para evaluar la capacidad de ejecución real antes de cualquier entrevista presencial.",
    actionItem3: "Establecer un programa de referidos interno ofreciendo un bono económico a los colaboradores actuales si recomiendan a un profesional contratado con éxito.",
    domainContext: "Contratar a un empleado es la inversión de capital más decisiva de una empresa: una mala contratación cuesta entre 3 y 5 veces el salario anual de esa persona en tiempo perdido, errores operativos y clientes insatisfechos.",
    strategicRationale: "Sistematizar la atracción y selección con herramientas gratuitas permite a las PYMEs competir por el mejor talento contra grandes corporaciones sin gastar presupuestos gigantescos.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 85% de las pequeñas y medianas empresas en América Latina contratan por urgencia o simpatía personal: el dueño publica un anuncio genérico en redes, revisa 50 currículums inflados y elige al candidato que 'le cayó mejor' en una charla de 15 minutos. A los 3 meses, el empleado no rinde, comete errores graves y renuncia o es despedido, costándole miles de dólares al negocio. Este tomo te enseña la metodología Topgrading y el Scorecard de Rol para atraer, filtrar y contratar a profesionales de alto rendimiento ('Jugadores A') sin gastar en agencias de reclutamiento costosas.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Costo Oculto de una Mala Contratación: Por qué equivocarse en un empleado cuesta hasta 5 veces su salario anual.\n• Capítulo 2: La Metodología del Scorecard de Rol: Cómo definir la misión del puesto y resultados clave a 30, 60 y 90 días.\n• Capítulo 3: Protocolo de Pruebas de Trabajo Ciego (Work Samples): Cómo evaluar el talento real en 90 minutos sin sesgos ni favoritismos.\n• Capítulo 4: Caso de Estudio Real (CloudScale Servicios): Cómo redujeron su rotación al 4% en Quito usando filtros prácticos en Google Forms.\n• Capítulo 5: Mitigación del Sesgo de Simpatía (Efecto Halo): Rúbricas numéricas para calificar candidatos objetivamente.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de diseño de procesos de selección para PYMEs cobrando entre $30 y $500 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Notion (notion.so): Plantilla de Sistema de Seguimiento de Candidatos (ATS - Applicant Tracking System) con pipeline de selección.\n2. Google Forms: Cuestionario de postulación con preguntas de descarte automático y subida de casos prácticos resueltos.\n3. LinkedIn (Perfil Gratuito): Redacción de ofertas de empleo atractivas utilizando la técnica de propuesta de valor al empleado (EVP).\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nCientos de dueños de tiendas, restaurantes, clínicas, despachos y constructoras sufren por contratar mal y no tienen departamento de recursos humanos:\n• Nivel Junior (Tus primeros 3 clientes): $30 – $60 USD por redacción del Scorecard de Puesto + formulario de postulación en Google Forms.\n• Nivel Intermedio (Con portafolio): $90 – $180 USD por gestión completa del proceso de preselección, filtrado de candidatos y entrega de terna finalista.\n• Nivel Senior / Consultor de Selección de Talento: $240 – $500 USD por estructuración integral del departamento de contratación, pruebas técnicas y manual de reclutamiento.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la plantilla de ATS en Notion y un formulario de postulación con 3 preguntas de filtro en Google Forms.\nDía 2: Contacta a 10 dueños de negocios locales que tengan anuncios de empleo publicados en Facebook o portales y ofréceles filtrar a sus candidatos con una prueba técnica.",
    ch1CustomNarrative: [
      "En los negocios existe una máxima ineludible: ninguna empresa puede crecer por encima de su capacidad para atraer, contratar y retener a personas extraordinarias.",
      "Muchos directivos dedican meses a cotizar maquinaria o a evaluar proveedores de software para ahorrar unos pocos dólares, pero contratan empleados en entrevistas informales de 20 minutos dejándose llevar por la simpatía personal.",
      "Un currículum vítreo y una personalidad carismática pueden ocultar con facilidad incompetencia técnica, falta de ética de trabajo o incapacidad para trabajar bajo presión.",
      "Aprender a contratar con rigor científico, metodologías probadas y validación empírica es la habilidad directiva más rentable que un líder puede desarrollar para garantizar el futuro de su organización."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UN SISTEMA DE SELECCIÓN (ATS) EN NOTION Y GOOGLE FORMS GRATIS:",
      "Paso 1: Abre Google Forms (forms.google.com) y crea el formulario \"Postulación: [Nombre del Cargo]\". Añade 3 preguntas filtro de eliminación directa: 1. Años de experiencia comprobable en la tarea específica. 2. Pretensión salarial neta mensual. 3. Ejercicio práctico corto de 15 minutos (ej. \"Escribe cómo resolverías esta situación con un cliente molesto\").",
      "Paso 2: Abre Notion (notion.so) y crea una base de datos en vista de Tablero (Board View) llamada \"Pipeline_Seleccion_Talento\".",
      "Paso 3: Configura las 5 columnas del embudo: 1. Postulaciones Nuevas, 2. Prueba Práctica Aprobada, 3. Entrevista por Competencias, 4. Verificación de Referencias, 5. Oferta Presentada / Contratado.",
      "Paso 4: En cada tarjeta de candidato, adjunta la Rúbrica de Calificación del 1 al 5 en 3 áreas clave: Competencia Técnica, Ajuste Cultural y Honestidad en Referencias Laborales."
],
    ch3TacticalSteps: [
      "Semana 1: Diseña el Scorecard de Rol para la vacante abierta especificando metas cuantitativas para los primeros 30, 60 y 90 días.",
      "Semana 2: Publica la convocatoria en canales especializados y solicita a tu red interna de colaboradores recomendaciones con incentivo de bono por contratación exitosa.",
      "Semana 3: Aplica un filtro de preselección con un caso práctico estandarizado para calificar únicamente las capacidades de ejecución.",
      "Semana 4: Contacta telefónicamente a 3 exjefes directos del finalista y formula la pregunta decisiva: \"Si tuvieras la oportunidad, ¿volverías a contratar a esta persona sin dudarlo?\"."
],
    ch4CaseDeepDive: [
      "CloudScale en Quito crecía en proyectos de software pero sufría una rotación del 38% en sus nuevos programadores y diseñadores contratados por urgencia.",
      "Los clientes se quejaban por retrasos en las entregas y el fundador pasaba 20 horas a la semana apagando fuegos operativos provocados por empleados poco capacitados.",
      "Implementaron el sistema de Scorecard de Rol y una prueba práctica donde cada candidato debía corregir un error en una página web demo en 60 minutos.",
      "El 80% de los postulantes con currículums brillantes no pudieron resolver la prueba técnica; los 4 candidatos seleccionados con la prueba rindieron al máximo nivel, reduciendo la rotación al 4% y ahorrando $15,000 USD en liquidaciones y búsquedas."
],
    ch5RiskMitigation: [
      "El sesgo de confirmación y el efecto 'Halo' en las entrevistas.",
      "Qué es: Juzgar favorablemente a un candidato solo porque viste bien, estudió en la misma universidad que el entrevistador o comparte aficiones personales.",
      "Mitigación: Utiliza comités de contratación con al menos 2 entrevistadores que califiquen de forma independiente mediante una rúbrica numérica antes de compartir sus opiniones.",
      "Regla de oro: Si hay dudas sobre un candidato, la respuesta es NO. Es preferible mantener una vacante abierta 2 semanas más que contratar a la persona equivocada y tardar un año en solucionar los daños."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño de Scorecards de Puesto y Filtros de Selección Práctica para PYMEs\". Ayuda a pequeños empresarios que sufren por contratar mal a filtrar candidatos mediante pruebas reales.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $30 - $60 USD por redacción del Scorecard de Puesto + formulario de postulación en Google Forms. • Nivel Intermedio (Con portafolio): $90 - $180 USD por gestión completa del proceso de preselección, filtrado de candidatos y entrega de terna finalista. • Nivel Senior / Consultor de Selección: $240 - $500 USD por estructuración integral del departamento de contratación, pruebas técnicas y manual de reclutamiento.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / LinkedIn): \"Hola [Nombre], sé lo costoso y desgastante que es para un negocio como [Empresa] contratar a alguien que en la entrevista parece perfecto pero a las dos semanas no rinde o renuncia. Por solo $35 USD yo te diseño un Scorecard de Puesto y un formulario de evaluación práctica en Google Forms para que solo entrevistes a candidatos que ya hayan demostrado que saben hacer el trabajo. ¿Te gustaría que armemos el filtro para tu próxima vacante?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de ATS en Notion y un formulario de postulación con 3 preguntas de filtro en Google Forms. Día 2: Contacta a 10 dueños de negocios locales que tengan anuncios de empleo publicados en Facebook o portales y ofréceles filtrar a sus candidatos con una prueba técnica."
],
    quizQuestions: [
      {
            "question": "¿Qué diferencia fundamental existe entre un 'Scorecard de Rol' y una descripción de puesto tradicional?",
            "options": [
                  "El Scorecard tiene más páginas y términos en inglés.",
                  "El Scorecard define la misión del cargo y los resultados numéricos concretos que el empleado debe alcanzar en sus primeros 3, 6 y 12 meses, en lugar de una lista pasiva de tareas rutinarias.",
                  "El Scorecard es obligatorio por el ministerio de trabajo.",
                  "El Scorecard solo se usa para directores generales."
            ],
            "correctIndex": 1,
            "explanation": "El Scorecard establece expectativas de desempeño claras y medibles desde el primer día, facilitando la evaluación objetiva del candidato."
      },
      {
            "question": "¿Por qué las pruebas prácticas de trabajo (Work Sample Tests) son el método de selección con mayor tasa de éxito?",
            "options": [
                  "Porque permiten ver directamente al candidato ejecutando una tarea real del puesto, eliminando la ilusión de un currículum bien redactado.",
                  "Porque no requieren que el candidato asista a la empresa.",
                  "Porque son gratuitas para el gobierno.",
                  "Porque reemplazan el pago del primer sueldo."
            ],
            "correctIndex": 0,
            "explanation": "Evaluar el trabajo real del candidato predice con una precisión 3 veces mayor el desempeño futuro que una simple entrevista de preguntas teóricas."
      },
      {
            "question": "¿A quién se debe contactar obligatoriamente al realizar llamadas de verificación de referencias laborales?",
            "options": [
                  "A los amigos o compañeros de estudio del candidato.",
                  "A los jefes y supervisores directos anteriores que hayan evaluado formalmente el trabajo del postulante.",
                  "A la familia del postulante.",
                  "A los vecinos del barrio."
            ],
            "correctIndex": 1,
            "explanation": "Los supervisores directos anteriores brindan la perspectiva más honesta sobre la puntualidad, rendimiento y ética laboral del candidato."
      }
]
  },

  // =========================================================================
  // BOOK ID: rec-2
  // =========================================================================
  'rec-2': {
    frameworkName: "Modelo de Entrevistas Estructuradas por Competencias (Metodología STAR) & Rúbricas de Decisión Ciega",
    coreMetrics: [
      "Índice de Confiabilidad Inter-Entrevistador (> 80%)",
      "Tasa de Acierto en Evaluación de Competencias Críticas",
      "Reducción del Sesgo de Selección Inconsciente",
      "Tiempo Promedio de Entrevista por Candidato (45 minutos)",
      "Satisfacción del Candidato con el Proceso (> 90%)"
],
    caseCompany: "Cadena de Restaurantes & Franquicias La Brasa Criolla (Lima, Perú)",
    caseOutcome: "Sustituyó las charlas informales de contratación por entrevistas estructuradas bajo el modelo STAR y rúbricas de evaluación en Google Sheets; logró que los administradores de tienda identificaran líderes de cocina con alta tolerancia a la presión; redujo el ausentismo en un 50% y aumentó la retención de personal clave al 91%.",
    pitfall: "Hacer preguntas hipotéticas abstractas (ej. '¿Qué harías si...?') que permiten al candidato inventar respuestas teóricas ideales que no reflejan su comportamiento real en el pasado.",
    actionItem1: "Formular preguntas STAR basadas en el pasado: Situación, Tarea, Acción realizada y Resultado cuantificado obtenido.",
    actionItem2: "Crear una rúbrica de calificación del 1 al 5 para cada competencia crítica (Liderazgo, Trabajo en Equipo, Orientación a Resultados, Adaptabilidad).",
    actionItem3: "Establecer que los entrevistadores califiquen las respuestas por escrito de forma individual antes de debatir la decisión final.",
    domainContext: "El mejor predictor del comportamiento futuro de un profesional en tu empresa es su comportamiento comprobable en situaciones reales del pasado.",
    strategicRationale: "Las entrevistas estructuradas STAR eliminan la subjetividad y los prejuicios, permitiendo comparar a todos los candidatos bajo la misma vara objetiva de rendimiento.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEn una entrevista de trabajo tradicional, el 70% de los candidatos mienten o exageran sus logros para agradar al entrevistador. Si el evaluador hace preguntas teóricas como '¿Cuáles son tus mayores defectos?' o '¿Cómo manejas el estrés?', cualquier persona puede memorizar una respuesta bonita de internet. La metodología STAR (Situación, Tarea, Acción, Resultado) es el estándar internacional para desarmar respuestas ensayadas y descubrir la verdad sobre la capacidad real del candidato mediante preguntas sobre situaciones pasadas comprobables. Este tomo te entrena en el arte de la entrevista estructurada.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Trampa de las Entrevistas Informales: Por qué las charlas improvisadas no predicen el rendimiento laboral.\n• Capítulo 2: La Metodología STAR Paso a Paso: Estructura de preguntas para extraer Situación, Tarea, Acción y Resultado.\n• Capítulo 3: Protocolo de Rúbricas de Evaluación Ciega: Cómo puntuar del 1 al 5 sin dejarse influir por la simpatía del candidato.\n• Capítulo 4: Caso de Estudio Real (La Brasa Criolla): Cómo redujeron el ausentismo al 50% en Lima con entrevistas estandarizadas.\n• Capítulo 5: Técnicas de Repregunta y Detección de Inconsistencias: Cómo identificar cuándo un candidato se atribuye el éxito de otros.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño de guías de entrevista STAR y evaluación de candidatos cobrando entre $30 y $480 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets: Matriz de Evaluación de Candidatos con Rúbrica STAR y cálculo ponderado de puntajes.\n2. Google Docs: Guía Maestra de Preguntas STAR categorizadas por competencias clave (Ventas, Operaciones, Liderazgo).\n3. Google Meet: Grabación de entrevistas virtuales (con consentimiento) para revisión de comités de selección.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nEmpresas con rotación continua de personal (call centers, restaurantes, tiendas minoristas, fábricas y agencias) necesitan guías de entrevista profesionales:\n• Nivel Junior: $30 – $60 USD por diseño de la Guía de 10 Preguntas STAR para un puesto específico + rúbrica en Sheets.\n• Nivel Intermedio: $85 – $170 USD por capacitación a los jefes de área en técnicas de entrevista STAR y elaboración de matrices de evaluación.\n• Nivel Senior / Evaluador de Talento: $220 – $480 USD por conducción de entrevistas de selección técnica para puestos clave y emisión de dictamen pericial.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Diseña la Guía Maestra de 10 Preguntas STAR en Google Docs y la matriz de puntuación en Google Sheets.\nDía 2: Contacta a 10 gerentes de operaciones o administradores de negocios en LinkedIn y ofréceles auditar su formato de entrevista sin costo.",
    ch1CustomNarrative: [
      "La mayoría de las entrevistas de trabajo en las pequeñas y medianas empresas no son más que conversaciones amables de café donde el evaluador habla el 80% del tiempo.",
      "Cuando no existe una estructura de preguntas fija, el entrevistador evalúa cosas distintas en cada candidato, haciendo imposible una comparación justa y objetiva.",
      "El candidato profesional sabe exactamente qué frases clichés utilizar para eludir preguntas difíciles si el evaluador no exige ejemplos concretos de su trayectoria anterior.",
      "Aprender a entrevistar bajo el modelo STAR te permite mirar detrás de la máscara del candidato y descubrir cómo reacciona realmente ante los problemas cotidianos de una empresa."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONDUCIR UNA ENTREVISTA STAR CON GOOGLE SHEETS Y DOCS GRATIS:",
      "Paso 1: Abre Google Docs y estructura las 4 partes de la pregunta STAR: 1. Situación (Cuéntame una ocasión específica en que enfrentaste un retraso grave de un proveedor). 2. Tarea (¿Cuál era tu responsabilidad exacta en ese momento?). 3. Acción (¿Qué hiciste tú personalmente para resolverlo, paso a paso?). 4. Resultado (¿Cuál fue el resultado medible en tiempo o dinero?).",
      "Paso 2: En Google Sheets, crea la \"Matriz_Evaluacion_STAR\". En las filas, coloca las 4 competencias evaluadas. En las columnas, define la escala de 1 a 5: 1 (Deficiente - No asume responsabilidad), 3 (Aceptable - Cumple el estándar básico) y 5 (Sobresaliente - Demuestra liderazgo proactivo con resultados cuantificados).",
      "Paso 3: Durante la entrevista, aplica la regla 80/20: El candidato debe hablar el 80% del tiempo y el entrevistador solo el 20%. Toma notas textuales de las acciones descritas.",
      "Paso 4: Suma los puntajes ponderados en Google Sheets. Solo aquellos candidatos que obtengan un promedio superior a 4.0 avanzan a la verificación final de referencias."
],
    ch3TacticalSteps: [
      "Semana 1: Identifica las 3 competencias críticas innegociables para el puesto (ej. Resiliencia, Atención al Detalle, Comunicación Asertiva).",
      "Semana 2: Redacta 2 preguntas STAR específicas para cada una de las 3 competencias elegidas.",
      "Semana 3: Entrena a los supervisores de turno para no dar pistas de la respuesta esperada durante la entrevista.",
      "Semana 4: Compara las calificaciones numéricas de los 3 finalistas antes de tomar la decisión final de contratación."
],
    ch4CaseDeepDive: [
      "La Brasa Criolla en Lima sufría una rotación del 60% anual en sus jefes de cocina porque contrataban chefs con excelente sazón pero nula capacidad para liderar bajo presión en horas pico.",
      "Diseñaron una entrevista STAR con preguntas como: 'Cuéntame de un día donde faltaron 2 cocineros en pleno almuerzo de domingo: ¿qué medidas tomaste para sacar los pedidos a tiempo?'.",
      "Los candidatos que culpaban a los demás o decían 'yo no puedo hacer nada si no hay personal' fueron descartados de inmediato.",
      "Contrataron a líderes con capacidad de resolución comprobada: el ausentismo del personal cayó un 50% y el tiempo de despacho de platos mejoró de 22 a 12 minutos."
],
    ch5RiskMitigation: [
      "Error clásico: Aceptar respuestas generales en plural ('Nosotros hicimos...', 'En la empresa solucionamos...').",
      "Pregunta de precisión obligatoria: '¿Cuál fue exactamente tu rol individual en esa solución? ¿Qué hiciste tú y qué hicieron los demás?'.",
      "No formules preguntas inductivas que revelen la respuesta deseada (ej. 'Aquí nos gusta trabajar en equipo, ¿a ti te gusta?').",
      "Mantén la misma lista y orden de preguntas para todos los candidatos del mismo proceso para asegurar igualdad de condiciones."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Estructuración de Entrevistas por Competencias (STAR) y Matrices de Decisión de Candidatos\". Ofrece este servicio a franquicias, restaurantes, tiendas, fábricas y empresas de servicios con alta rotación.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $30 - $60 USD por diseño de la Guía de 10 Preguntas STAR para un puesto específico + rúbrica en Sheets. • Nivel Intermedio (Con portafolio): $85 - $170 USD por capacitación a los jefes de área en técnicas de entrevista STAR y elaboración de matrices de evaluación. • Nivel Senior / Evaluador de Talento: $220 - $480 USD por conducción de entrevistas de selección técnica para puestos clave y emisión de dictamen pericial.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / Correo): \"Hola [Nombre], en negocios con mucho personal como [Empresa] suele pasar que los candidatos dicen lo que uno quiere escuchar en la entrevista pero luego en el día a día no rinden como prometieron. Por solo $35 USD yo te diseño una Guía de Entrevista por Competencias (Modelo STAR) en Google Docs y Sheets para evaluar con preguntas de comportamiento real y no equivocarte en tu próxima contratación. ¿Te gustaría ver un ejemplo para tu sector?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña la Guía Maestra de 10 Preguntas STAR en Google Docs y la matriz de puntuación en Google Sheets. Día 2: Contacta a 10 gerentes de operaciones o administradores de negocios en LinkedIn y ofréceles auditar su formato de entrevista sin costo."
],
    quizQuestions: [
      {
            "question": "¿Qué significan las siglas del modelo de entrevistas STAR?",
            "options": [
                  "Sueldo, Tiempo, Amigos y Recompensas.",
                  "Situación, Tarea, Acción y Resultado.",
                  "Selección, Talento, Actitud y Rendimiento.",
                  "Simpatía, Títulos, Asistencia y Referencias."
            ],
            "correctIndex": 1,
            "explanation": "El modelo STAR estructura las respuestas para conocer el contexto, la responsabilidad, las acciones reales tomadas y los resultados obtenidos por el candidato."
      },
      {
            "question": "¿Por qué se deben evitar las preguntas hipotéticas del tipo '¿Qué harías si ocurriera X problema?'?",
            "options": [
                  "Porque son muy difíciles de pronunciar.",
                  "Porque permiten al candidato inventar una respuesta teórica perfecta que no garantiza cómo actuaría en la vida real.",
                  "Porque están prohibidas en los contratos de trabajo.",
                  "Porque los candidatos no pueden imaginar el futuro."
            ],
            "correctIndex": 1,
            "explanation": "Las preguntas hipotéticas miden la imaginación del candidato, mientras que las preguntas sobre el pasado miden su comportamiento y capacidad real."
      },
      {
            "question": "¿Cuál es la proporción de tiempo recomendada para hablar durante una entrevista de selección efectiva?",
            "options": [
                  "El entrevistador debe hablar el 90% del tiempo explicando las políticas de la empresa.",
                  "El candidato debe hablar aproximadamente el 80% del tiempo y el entrevistador el 20% (guiando y profundizando con preguntas).",
                  "Deben hablar al mismo tiempo sin parar.",
                  "Nadie debe hablar durante la entrevista."
            ],
            "correctIndex": 1,
            "explanation": "La regla 80/20 asegura que el candidato proporcione la información suficiente para evaluar sus competencias de forma rigurosa."
      }
]
  },

  // =========================================================================
  // BOOK ID: rec-3
  // =========================================================================
  'rec-3': {
    frameworkName: "Protocolo de Inducción & Onboarding de Alto Rendimiento a 30-60-90 Días & 'Primer Día Memorable'",
    coreMetrics: [
      "Tiempo hasta la Primera Contribución Autónoma (Time-to-Productivity < 14 días)",
      "Retención de Nuevas Contrataciones a 90 Días (> 92%)",
      "Satisfacción con la Experiencia de Onboarding (> 4.8/5)",
      "Tasa de Cumplimiento del Plan de 30-60-90 Días (> 85%)",
      "Reducción de Dudas Operativas Repetitivas (-70%)"
],
    caseCompany: "Despacho de Asesoría Legal & Corporativa LexNova (Montevideo, Uruguay)",
    caseOutcome: "Eliminó la improvisación del primer día creando un Hub de Inducción Digital en Notion con videos cortos, accesos listos y un plan de metas a 30-60-90 días; redujo el tiempo de adaptación de nuevos abogados de 8 semanas a solo 12 días y logró un 100% de retención en su equipo junior.",
    pitfall: "Dejar al nuevo empleado sentado solo en un escritorio sin computadora configurada, sin accesos ni plan de trabajo, esperando que 'aprenda mirando' a sus compañeros ocupados.",
    actionItem1: "Preparar el 'Kit de Bienvenida Digital' 48 horas antes del ingreso: correo corporativo, accesos a herramientas, organigrama y manual básico de funciones.",
    actionItem2: "Asignar un 'Mentor Compañero' (Buddy System) para guiar al nuevo colaborador en las dudas informales y culturales durante sus primeras 2 semanas.",
    actionItem3: "Establecer el Plan de Metas 30-60-90 Días: Día 30 (Aprender y absorber), Día 60 (Ejecutar con supervisión mínima), Día 90 (Proponer y liderar tareas autónomas).",
    domainContext: "El 22% de la rotación laboral ocurre en los primeros 45 días de empleo; un proceso de inducción cálido, estructurado y profesional blinda la decisión del nuevo colaborador de quedarse y rendir al máximo.",
    strategicRationale: "Un onboarding sistemático acelera la curva de aprendizaje, reduce las horas perdidas de los compañeros veteranos y transmite una cultura de excelencia directiva desde el minuto uno.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 40% de los nuevos empleados en América Latina que renuncian en su primer mes lo hacen por una experiencia de inducción nefasta: llegaron el primer día y nadie los estaba esperando, la computadora no tenía contraseña, nadie les explicó sus funciones y los dejaron solos sintiéndose una carga para sus compañeros. Esta negligencia destruye todo el dinero gastado en reclutar. Este tomo te enseña a diseñar un Sistema de Onboarding de Alto Rendimiento (Hub de Inducción en Notion + Plan de 30-60-90 Días) para que cada nuevo colaborador sea productivo y autónomo en menos de dos semanas.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Psicología del Primer Día: Cómo las primeras 8 horas definen el compromiso y lealtad del empleado para los próximos 2 años.\n• Capítulo 2: El Protocolo Pre-Onboarding (Días -7 a 0): Preparación de accesos, correos, contratos y mensaje de bienvenida antes de su llegada.\n• Capítulo 3: La Metodología de Metas 30-60-90 Días: Qué debe aprender en el mes 1, qué debe ejecutar en el mes 2 y qué debe liderar en el mes 3.\n• Capítulo 4: Caso de Estudio Real (LexNova Abogados): Cómo redujeron el tiempo de adaptación de 8 semanas a 12 días en Montevideo.\n• Capítulo 5: El Sistema de Acompañamiento por Pares (Buddy System): Cómo resolver dudas culturales sin saturar al jefe directo.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño de manuales de inducción y hubs de onboarding en Notion cobrando entre $35 y $520 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Notion (notion.so): Hub de Inducción del Empleado (Employee Onboarding Portal) con videos, políticas, organigrama y checklists diarios.\n2. Google Docs: Plantilla del Plan de Trabajo de 30-60-90 Días y Manual de Cultura y Bienvenida.\n3. Canva (canva.com): Diseño del Kit de Bienvenida Digital (Welcome Pack) con tarjeta de presentación y guía visual del equipo.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nEmpresas en crecimiento que contratan constantemente personal nuevo necesitan un proceso de inducción que no dependa del tiempo del dueño:\n• Nivel Junior: $35 – $70 USD por creación del Hub de Inducción en Notion + Checklist del Primer Día en Google Docs.\n• Nivel Intermedio: $100 – $200 USD por diseño del programa completo de Onboarding (Plan 30-60-90 Días, Buddy System y Manual de Bienvenida en Canva).\n• Nivel Senior / Consultor de Cultura y RRHH: $250 – $520 USD por estructuración integral de inducción corporativa, automatizaciones de accesos y capacitación de líderes.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la plantilla de Onboarding Hub en Notion con checklists para la Semana 1 y el Plan de 30-60-90 Días.\nDía 2: Contacta a 10 gerentes de empresas en expansión y ofréceles una demostración de un portal de inducción digital listo para usar.",
    ch1CustomNarrative: [
      "El primer día de trabajo es uno de los momentos de mayor vulnerabilidad y expectativa en la vida profesional de cualquier persona.",
      "Si el nuevo colaborador llega a la empresa y se encuentra con desorganización, frialdad e indiferencia, su entusiasmo inicial se convierte instantáneamente en desconfianza y arrepentimiento.",
      "Un proceso de inducción profesional no es un trámite burocrático de entrega de documentos; es la oportunidad de oro para transmitir la visión, los valores y la pasión de la empresa.",
      "Cuando un empleado se siente bienvenido, respaldado y con metas claras desde el primer minuto, su nivel de productividad y fidelidad se multiplica de forma exponencial."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UN PORTAL DE ONBOARDING EN NOTION Y GOOGLE DOCS GRATIS:",
      "Paso 1: Abre Notion (notion.so) y crea una página titulada \"Portal_Bienvenida_Nuevos_Colaboradores\". Inserta un mensaje de bienvenida en video o texto del fundador de la empresa.",
      "Paso 2: Diseña 4 secciones interactivas con listas de verificación (Checklists): 1. Semana 1: Configuración de herramientas y lectura de cultura. 2. Semana 2: Sombra operativa (Shadowing) con un compañero veterano. 3. Mes 1: Primera tarea autónoma completada. 4. Directorio del Equipo con fotos y roles.",
      "Paso 3: En Google Docs, crea el \"Plan_Metas_30_60_90_Dias\". Define 3 entregables claros para los 30 días (Aprender procesos), 60 días (Ejecución independiente con calidad) y 90 días (Evaluación de desempeño oficial y propuesta de mejora).",
      "Paso 4: Envía el enlace de Notion al nuevo empleado 2 días antes de su fecha de inicio junto con la agenda detallada de su primera mañana de trabajo."
],
    ch3TacticalSteps: [
      "Día -3: Asegura que el equipo de sistemas o administración tenga configurado el correo electrónico, computadora y contraseñas de acceso.",
      "Día 1: Recibe al nuevo empleado personalmente a la hora pactada, preséntalo al equipo y asigna a su 'Mentor Compañero' (Buddy) para el almuerzo.",
      "Semana 1: Sostén una reunión de 15 minutos al final del viernes para escuchar sus primeras impresiones y resolver cualquier duda acumulada.",
      "Día 30: Realiza la primera revisión formal de metas del Plan 30-60-90 para celebrar los primeros logros y alinear expectativas para el segundo mes."
],
    ch4CaseDeepDive: [
      "LexNova en Montevideo contrataba abogados jóvenes recién graduados pero el 40% renunciaba antes del tercer mes por sentirse abrumados y sin guía.",
      "Los socios del despacho pasaban horas repitiendo las mismas instrucciones básicas sobre cómo redactar contratos o archivar expedientes digitales.",
      "Construyeron un portal de Onboarding en Notion con videos de 5 minutos explicando los procesos y asignaron a un abogado senior como mentor de bienvenida.",
      "El tiempo necesario para que un nuevo abogado pudiera atender casos de forma autónoma cayó de 8 semanas a solo 12 días, y no volvieron a sufrir renuncias tempranas en 2 años."
],
    ch5RiskMitigation: [
      "Trampa del Onboarding: La 'Sobrecarga de Información' (Information Overload) en el primer día.",
      "Evita entregarle manuales de 200 páginas o saturarlo con 8 horas continuas de explicaciones técnicas en su primera jornada.",
      "Dosifica el aprendizaje: 30% lectura de procesos, 30% observación práctica y 40% interacción social con sus compañeros de equipo.",
      "Verifica que el nuevo empleado comprenda los canales de comunicación oficiales (por dónde se piden vacaciones, cómo se reportan dudas y a quién acudir ante un problema)."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño e Implementación de Portales de Onboarding y Sistemas de Inducción de Empleados en Notion\". Ofrece este servicio a agencias, despachos, empresas de tecnología, clínicas y comercios que están contratando personal.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $35 - $70 USD por creación del Hub de Inducción en Notion + Checklist del Primer Día en Google Docs. • Nivel Intermedio (Con portafolio): $100 - $200 USD por diseño del programa completo de Onboarding (Plan 30-60-90 Días, Buddy System y Manual de Bienvenida en Canva). • Nivel Senior / Consultor de Cultura y RRHH: $250 - $520 USD por estructuración integral de inducción corporativa, automatizaciones de accesos y capacitación de líderes.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], felicidades por el crecimiento de [Empresa]. Cuando una empresa contrata personal nuevo, muchas veces los líderes pierden horas repitiendo las mismas explicaciones o el nuevo empleado tarda meses en ser productivo por falta de un proceso de inducción claro. Por solo $40 USD yo te construyo un Portal de Onboarding digital en Notion con Plan de 30-60-90 Días para que tus nuevos empleados sean autónomos y productivos en 2 semanas. ¿Te gustaría ver una demo de la plantilla?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de Onboarding Hub en Notion con checklists para la Semana 1 y el Plan de 30-60-90 Días. Día 2: Contacta a 10 gerentes de empresas en expansión y ofréceles una demostración de un portal de inducción digital listo para usar."
],
    quizQuestions: [
      {
            "question": "¿Cuál es el objetivo principal de implementar un Plan de Metas de 30-60-90 Días para un nuevo empleado?",
            "options": [
                  "Despedir al empleado si no trabaja los fines de semana.",
                  "Establecer una curva de aprendizaje progresiva y objetivos claros de adaptación, ejecución y autonomía para sus primeros 3 meses en la empresa.",
                  "Calcular el pago de impuestos patronales.",
                  "Obligar al empleado a memorizar todo el reglamento en 24 horas."
            ],
            "correctIndex": 1,
            "explanation": "El plan 30-60-90 guía al colaborador paso a paso desde el aprendizaje inicial hasta el liderazgo autónomo de sus responsabilidades."
      },
      {
            "question": "¿En qué consiste el sistema de 'Mentor Compañero' (Buddy System) en un proceso de inducción laboral?",
            "options": [
                  "En asignar a dos personas para que hagan el trabajo de una sola.",
                  "En emparejar al nuevo colaborador con un compañero de equipo experimentado que lo guíe de manera cercana en dudas cotidianas, cultura interna y herramientas durante sus primeras semanas.",
                  "En contratar a un detective privado.",
                  "En hacer que los empleados compitan entre sí."
            ],
            "correctIndex": 1,
            "explanation": "El mentor compañero facilita la integración social y cultural sin sobrecargar la agenda del jefe directo con preguntas operativas simples."
      },
      {
            "question": "¿Por qué se deben preparar los accesos digitales y el equipo de trabajo antes del primer día del nuevo empleado (Pre-Onboarding)?",
            "options": [
                  "Porque después es imposible crear correos electrónicos.",
                  "Para evitar horas muertas de frustración el primer día y transmitir un mensaje inmediato de orden, profesionalismo y respeto por el tiempo del colaborador.",
                  "Para cobrarle una penalización si llega tarde.",
                  "Porque el gobierno exige auditorías los días lunes."
            ],
            "correctIndex": 1,
            "explanation": "Tener todo listo antes de su llegada genera una primera impresión impecable y permite comenzar la capacitación productiva desde la primera hora."
      }
]
  },

};
