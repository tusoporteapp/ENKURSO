// Specific topic-by-topic content blueprints for Category 2 (Manejo de Presupuesto)
// Providing 100% custom, domain-accurate, highly actionable financial literature for all 16 books (Tomos 9 al 24)
// Features:
// 1. 5,000-character Deep Learning Overview & Executive Briefing per book
// 2. Step-by-step Free Financial Tools Tutorials (Google Sheets, Wave, Notion, Canva, Pitch, etc.)
// 3. Real, accessible LATAM Monetization Services & Pricing (Junior $25-$60, Mid $80-$180, Senior $220-$500 USD)
// 4. Localized copy-paste sales outreach pitches & 48h action plans
// 5. 3 rigorous exam questions per book with detailed explanations

import { SpecificBookContent } from './category1Content';

export const CATEGORY_2_CUSTOM_BOOKS: Record<string, SpecificBookContent> = {
  // =========================================================================
  // BOOK ID: mp-1
  // =========================================================================
  'mp-1': {
    frameworkName: "Cuadro de Mando Financiero Continuo & Auditoría de 4 Trimestres (Rolling Forecast)",
    coreMetrics: [
      "Margen Operativo Trimestral",
      "Días de Caja Disponible (Cash Runway)",
      "Rotación de Cuentas por Cobrar (DSO < 35 días)",
      "Desviación Presupuestaria (< 3%)",
      "EBITDA Mensual"
],
    caseCompany: "Servicios Industriales Valente & Co. (Monterrey, México)",
    caseOutcome: "Pasó de revisar números una vez al año para pagar impuestos a un monitoreo mensual con tablero financiero digital en Google Sheets; identificó una fuga de $42,000 USD en costos indirectos no trasladados y aumentó su margen neto del 4% al 16% en 9 meses.",
    pitfall: "Delegar la contabilidad ciegamente en un gestor externo y esperar al cierre del año fiscal para descubrir si el negocio generó ganancias reales o acumuló pérdidas irreparables.",
    actionItem1: "Instaurar un \"Cierre Financiero Mensual\" inamovible el quinto día hábil de cada mes para cotejar ingresos facturados vs. dinero real en banco.",
    actionItem2: "Diseñar un tablero visual con 4 indicadores vitales: Ventas Totales, Margen Bruto, Costos Fijos y Saldo Neto de Caja disponible.",
    actionItem3: "Implementar una reunión trimestral de presupuesto móvil (Rolling Forecast a 12 meses) para ajustar proyecciones según la estacionalidad del mercado.",
    domainContext: "Monitorear las finanzas no es un trámite fiscal obligatorio, sino el velocímetro y GPS que indica a la dirección si el negocio está acelerando hacia la rentabilidad o avanzando a ciegas hacia la insolvencia.",
    strategicRationale: "El control financiero continuo permite anticipar crisis de liquidez con semanas de anticipación, renegociar contratos con proveedores a tiempo y tomar decisiones de contratación e inversión basadas en números reales.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 82% de las pequeñas y medianas empresas en América Latina que quiebran lo hacen teniendo clientes y ventas activas, pero sufriendo de ceguera financiera: el dueño confunde facturar con tener dinero líquido en la cuenta bancaria. Esperar a que el contador entregue los balances fiscales al cierre del año es una sentencia de muerte operativa. Este tomo te entrena para implementar un Cuadro de Mando Financiero Continuo y un calendario de 4 frecuencias directivas para tener control absoluto de tu caja cada semana.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Trampa de la Facturación vs. Liquidez de Caja: Por qué una empresa con récord de ventas puede quebrar en 60 días si sus cobros tardan más que sus pagos.\n• Capítulo 2: El Calendario de Monitoreo en 4 Frecuencias: Pulso semanal de 15 min los lunes, Cierre mensual el día 5, Auditoría trimestral y Presupuesto anual.\n• Capítulo 3: Protocolo de Montaje del Tablero Financiero: Cómo estructurar en 4 semanas tus métricas de Cash Runway, DSO y margen de contribución.\n• Capítulo 4: Caso de Estudio Real (Valente & Co.): Cómo recuperaron $85,000 USD de facturas vencidas y multiplicaron su margen neto del 4% al 16% en Monterrey.\n• Capítulo 5: Mitigación de Fugas Ocultas y Gastos Hormiga: Protocolo para auditar suscripciones inactivas y blindar la reserva de emergencia de 3 meses de costos fijos.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer el servicio de \"Tablero de Control Financiero y Cierre Mensual para PYMEs\" cobrando entre $30 y $500 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets (sheets.google.com): Plantilla automatizada de Cuadro de Mando Financiero con semáforos condicionales y cálculo de Cash Runway.\n2. Notion (notion.so): Calendario de vencimientos de cuentas por pagar y protocolo de cobranza preventiva automatizada.\n3. Google Drive: Bóveda de estados de cuenta y comprobantes fiscales conciliados mes a mes.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nMiles de dueños de negocios locales viven con estrés crónico porque no saben cuánto ganan realmente al mes ni cuánto dinero les deben:\n• Nivel Junior (Tus primeros 3 clientes): $30 – $60 USD por diseño del tablero financiero en Google Sheets + conciliación del último mes.\n• Nivel Intermedio (Con portafolio): $90 – $180 USD/mes por llevar el control financiero semanal y la sesión de cierre mensual con el dueño.\n• Nivel Senior / Director Financiero Externo: $250 – $500 USD/mes por asesoría financiera directiva integral y planificación tributaria preventiva.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Diseña tu tablero financiero demo en Google Sheets con fórmulas de Cash Runway y DSO con datos de un negocio de muestra.\nDía 2: Contacta a 15 dueños de PYMEs en tu ciudad o en LinkedIn ofreciéndoles auditar sus fugas financieras del último trimestre.",
    ch1CustomNarrative: [
      "Muchos emprendedores creen erróneamente que tener clientes y emitir facturas equivale automáticamente a tener una empresa próspera y solvente.",
      "La realidad contable es implacable: una empresa puede quebrar estando en su récord histórico de ventas si sus cuentas por cobrar tardan 90 días en liquidarse mientras sus costos fijos vencen cada 30 días.",
      "El monitoreo financiero continuo no requiere un doctorado en finanzas ni software corporativo costoso; exige una rutina disciplinada de revisión periódica y el entendimiento claro de los signos vitales de la empresa.",
      "Al transformar las finanzas en un hábito semanal y mensual, la ansiedad directiva desaparece y es reemplazada por el control estratégico y la serenidad ejecutiva."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UN CUADRO DE MANDO FINANCIERO EN GOOGLE SHEETS GRATIS PASO A PASO:",
      "Paso 1: Abre Google Sheets (sheets.google.com) y crea una hoja llamada \"Tablero_Financiero_Directivo\". Diseña 4 tarjetas principales en la fila superior: 1. Saldo Consolidado en Bancos. 2. Cuentas por Cobrar Pendientes. 3. Cuentas por Pagar del Mes. 4. Días de Pista de Caja (Cash Runway).",
      "Paso 2: En la celda de Cash Runway, ingresa la fórmula: =Saldo_Bancos/(Costos_Fijos_Mensuales/30). Si el resultado es menor a 60 días, aplica formato condicional en color rojo de alerta; si está entre 60 y 90 en amarillo, y si supera 90 días en verde seguro.",
      "Paso 3: Crea una pestaña llamada \"Cobranzas_Semana\" con columnas: Cliente, Monto, Fecha de Emisión, Días de Vencimiento y Estado. Configura una fórmula que calcule los días de retraso: =HOY() - Fecha_Vencimiento.",
      "Paso 4: Programa una alarma fija en Google Calendar todos los lunes a las 8:30 AM para actualizar los saldos y enviar mensajes de recordatorio de cobro a clientes con más de 7 días de retraso."
],
    ch3TacticalSteps: [
      "Semana 1: Consolida todas las cuentas bancarias, pasarelas de pago y deudas en una sola plantilla en la nube.",
      "Semana 2: Clasifica los gastos de los últimos 3 meses en tres categorías estrictas: Costos Variables Directos, Costos Fijos Operativos y Gastos Discrecionales.",
      "Semana 3: Establece una alerta bancaria automática para cuando el saldo de caja caiga por debajo del colchón mínimo operativo (equivalente a 2 meses de costos fijos).",
      "Semana 4: Programa una reunión mensual recurrente con tu contador o responsable administrativo para revisar el informe financiero antes de retirar dividendos."
],
    ch4CaseDeepDive: [
      "Valente & Co. facturaba $80,000 USD mensuales en servicios de mantenimiento industrial en Monterrey, pero a fin de mes los socios nunca encontraban liquidez para retirar sueldos adecuados.",
      "Al implementar el monitoreo mensual, descubrieron que tenían $110,000 USD en facturas vencidas sin gestión de cobranza y que el 30% de sus servicios operaban a pérdida por aumentos no trasladados en insumos.",
      "Instituyeron el cobro con anticipo del 40% y una política estricta de seguimiento de cobro a 15 días con su tablero en Google Sheets.",
      "En menos de 9 meses, recuperaron $85,000 USD de cartera vencida y acumularon un fondo de reserva de 4 meses de operación."
],
    ch5RiskMitigation: [
      "Trampa habitual: Confundir la utilidad contable (facturación devengada) con el flujo de caja real (dinero disponible en cuenta).",
      "Mitigación: Monitorea siempre el Estado de Flujos de Efectivo junto al P&L; las facturas no pagan nóminas, el dinero líquido sí.",
      "Evita los gastos \"hormiga\" de suscripciones de software no utilizadas y gastos de representación sin comprobante fiscal válido.",
      "Mantén una reserva de emergencia equivalente a un mínimo de 3 a 6 meses de costos fijos antes de plantearte repartir utilidades a los accionistas."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Tablero de Control Financiero y Cierre Mensual para PYMEs\". Ayuda a pequeños empresarios que sufren por desorden en sus cuentas a tener claridad de sus números, deudas y cobranzas en un sistema automatizado.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $30 - $60 USD por diseño del tablero financiero en Google Sheets + conciliación del último mes. • Nivel Intermedio (Con portafolio): $90 - $180 USD/mes por llevar el control financiero semanal y la sesión de cierre mensual con el dueño. • Nivel Senior / Consultor Financiero: $250 - $500 USD/mes por asesoría financiera directiva integral y planificación tributaria preventiva.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / LinkedIn): \"Hola [Nombre], sé lo agotador que es para los dueños de negocio en nuestro país estar vendiendo pero no tener claridad exacta de cuánta ganancia líquida queda a fin de mes ni qué facturas están por vencer. Por solo $35 USD yo te construyo un Tablero Financiero en Google Sheets con alertas automáticas de caja y cobranza en 3 días para que tengas control total de tu dinero. ¿Te gustaría que organicemos los números de este mes?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña tu tablero financiero demo en Google Sheets con fórmulas de Cash Runway y DSO con datos de un negocio de muestra. Día 2: Contacta a 15 dueños de PYMEs en tu ciudad o en LinkedIn ofreciéndoles auditar sus fugas financieras del último trimestre."
],
    quizQuestions: [
      {
            "question": "¿Por qué una empresa puede quebrar a pesar de tener un récord de ventas y facturación?",
            "options": [
                  "Porque la ley no permite facturar demasiado en un solo mes.",
                  "Por falta de liquidez en caja: si los clientes pagan a 90 días pero los costos operativos vencen a 30 días, la empresa se queda sin efectivo para operar.",
                  "Porque los bancos cierran las cuentas de empresas que venden mucho.",
                  "Porque los clientes cancelan sus contratos si la empresa crece rápido."
            ],
            "correctIndex": 1,
            "explanation": "La falta de flujo de caja (insolvencia técnica) es la causa principal de quiebra en empresas en crecimiento que no controlan su ciclo de cobranza."
      },
      {
            "question": "¿Qué es el \"Cash Runway\" (días o meses de pista de caja) de un negocio?",
            "options": [
                  "La cantidad de dinero que la empresa debe pagar en multas.",
                  "El tiempo que la empresa puede seguir operando pagando todos sus costos si sus ingresos se detuvieran por completo hoy mismo.",
                  "El sueldo del director general multiplicado por 12 meses.",
                  "El valor de reventa de los muebles de la oficina."
            ],
            "correctIndex": 1,
            "explanation": "El Cash Runway mide la resistencia financiera de la compañía: se calcula dividiendo la caja disponible entre el gasto neto mensual (Burn Rate)."
      },
      {
            "question": "¿Cuál es la frecuencia recomendada para revisar el saldo consolidado de bancos y las cuentas por cobrar críticas?",
            "options": [
                  "Una vez cada dos años cuando se auditan los balances.",
                  "Semanalmente (por ejemplo, todos los lunes a primera hora).",
                  "Únicamente cuando el banco rechaza un cheque por falta de fondos.",
                  "Solo cuando el contador envía el cálculo anual de impuestos."
            ],
            "correctIndex": 1,
            "explanation": "El control semanal previene sorpresas desagradables y permite reaccionar de inmediato ante retrasos de pago de clientes."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-2
  // =========================================================================
  'mp-2': {
    frameworkName: "Metodología Lean Bootstrapping, Disciplina de Caja & Reinversión Orgánica",
    coreMetrics: [
      "Rentabilidad Neta desde el Día 1",
      "Costo de Adquisición Financiado por Margen (Self-Funded CAC)",
      "Tasa de Reinversión de Utilidades (> 70%)",
      "Eficiencia de Capital (Revenue per Dollar Spent)",
      "Independencia Accionaria (100% Fundadores)"
],
    caseCompany: "NubeDesk Software (Plataforma SaaS para PYMEs en Bogotá, Colombia)",
    caseOutcome: "Inició con $1,500 USD de ahorros propios y preventas de licencias anuales; alcanzó $500,000 USD en ingresos recurrentes anuales en 24 meses sin ceder un solo porcentaje de capital accionario a inversionistas externos.",
    pitfall: "Creer que para emprender se necesita una gran ronda de capital de riesgo, gastando meses en presentaciones a inversionistas en lugar de salir a vender a clientes reales.",
    actionItem1: "Financiar el desarrollo inicial mediante preventas anticipadas con descuento atractivo para los primeros 10 clientes pioneros.",
    actionItem2: "Operar bajo una estructura de costos ultra-magra: usar herramientas gratuitas/freemium, trabajo remoto y subcontratación por proyecto.",
    actionItem3: "Reinvertir el 80% de las utilidades operativas de los primeros 12 meses en canales de adquisición de clientes validados y con retorno comprobado.",
    domainContext: "El Bootstrapping es el arte de construir una empresa rentable utilizando exclusivamente el dinero generado por las propias ventas del negocio y los recursos propios iniciales.",
    strategicRationale: "Mantener el control del 100% de las acciones preserva la visión a largo plazo de los fundadores, elimina la presión de plazos artificiales de fondos de inversión y crea una disciplina de rentabilidad inquebrantable.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEn la era de las noticias sobre startups que levantan millones de dólares, el 90% de los emprendedores en Latinoamérica terminan endeudados o desmotivados buscando inversionistas que nunca llegan. La verdad indiscutible de los negocios es que el mejor inversionista del mundo es un cliente satisfecho que paga por tu solución. Este tomo te entrena en la disciplina del Bootstrapping: cómo construir una empresa con flujo de caja positivo desde el primer día, financiándote con preventas y reinvirtiendo con rigor matemático.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: Filosofía del Bootstrapping y Soberanía Accionaria: Por qué conservar el 100% de tu empresa te da libertad estratégica y elimina el riesgo de dilución forzada.\n• Capítulo 2: Las 4 Reglas de Oro de la Operación Magra: Preventas antes de construir, márgenes unitarios altos, cero costos fijos pesados y reinversión del 80%.\n• Capítulo 3: Hoja de Ruta de Lanzamiento en 30 Días: Inventario de recursos propios, oferta fundadora a 20 prospectos y automatización de captación.\n• Capítulo 4: Caso de Estudio Real (NubeDesk Software): Cómo 2 ingenieros en Bogotá alcanzaron $500,000 USD anuales comenzando con 10 clientes de preventa.\n• Capítulo 5: Mitigación del Agotamiento del Fundador (Burnout): Cuándo y cómo delegar tareas operativas repetitivas con freelancers por horas sin inflar la nómina.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de estructuración de preventas y finanzas magras para nuevos negocios cobrando entre $35 y $500 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Notion (notion.so): Plantilla de control de gastos magros (Lean Overhead Tracker) y tablero de prospectos de preventa.\n2. Carrd (carrd.co): Páginas de oferta fundadora con botones de pago anticipado vinculados a WhatsApp o pasarelas locales.\n3. Google Sheets (sheets.google.com): Calculadora de punto de equilibrio y modelo de reinversión acelerada de utilidades.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nMiles de personas con ideas de negocio creen erróneamente que necesitan préstamos bancarios impagables para empezar. Puedes guiarlos a financiar su proyecto con clientes reales:\n• Nivel Junior: $35 – $60 USD por estructuración del plan de preventa y página de oferta fundadora en Carrd.\n• Nivel Intermedio: $100 – $190 USD por diseño de modelo financiero lean, estrategia de lanzamiento autofinanciado y acompañamiento de 30 días.\n• Nivel Senior: $250 – $500 USD por consultoría integral de escalamiento orgánico sin deuda para empresas en crecimiento.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Diseña tu plantilla de preventa en Notion y una landing page modelo en Carrd.\nDía 2: Contacta a 15 emprendedores que estén buscando financiamiento y preséntales tu método de preventa autofinanciada.",
    ch1CustomNarrative: [
      "En la era de los titulares sobre startups que levantan millones de dólares, se suele olvidar una verdad fundamental: el mejor inversionista del mundo es un cliente satisfecho que paga por tu producto.",
      "El financiamiento externo prematuro a menudo actúa como una droga que oculta los defectos del modelo de negocio; cuando el dinero abunda, es fácil ignorar que el producto no tiene demanda real.",
      "El emprendedor que hace Bootstrapping está obligado por necesidad a resolver problemas con creatividad e ingenio en lugar de quemar billetes en publicidad ineficiente.",
      "Aprender a ser rentable con poco dinero es la mejor preparación para cuando el negocio gestione grandes volúmenes de capital."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO GESTIONAR LAS FINANZAS DE UN NEGOCIO AUTOFINANCIADO CON NOTION + SHEETS GRATIS:",
      "Paso 1: Abre Notion (notion.so) y crea una base de datos titulada \"Campana_Preventa_Fundadores\". Añade columnas: Prospecto, Cargo, Teléfono, Objeción Principal, Oferta Presentada (30% descuento por pago anticipado) y Estado del Pago.",
      "Paso 2: En Google Sheets, crea la pestaña \"Regla_80_20_Reinversión\". Configura una fórmula que divida automáticamente cada ingreso neto cobrado: 80% destinado a Adquisición de Clientes y Mejoras de Producto, y 20% a Fondo de Reserva Intangible.",
      "Paso 3: Crea una página en Carrd (carrd.co) con el título: \"Conviértete en Cliente Fundador de [Proyecto] — Acceso de por vida con 50% de descuento para los primeros 10 compradores\".",
      "Paso 4: Conecta el botón de pago directamente a tu cuenta de transferencia bancaria local o enlace de pago en línea para cobrar de inmediato sin intermediarios costosos."
],
    ch3TacticalSteps: [
      "Día 1-5: Haz un inventario de tus recursos disponibles: habilidades, tiempo libre, ahorros personales seguros y red de contactos.",
      "Día 6-12: Contacta a 20 prospectos y ofréceles una \"versión fundadora\" de tu servicio/producto con un 30% de descuento si pagan 6 meses por adelantado.",
      "Día 13-20: Utiliza el capital recaudado de las preventas para entregar un servicio impecable que genere testimonios en video y referencias boca a boca.",
      "Día 21-30: Automatiza la captación reinvirtiendo las ganancias en un canal de prospección comercial medible."
],
    ch4CaseDeepDive: [
      "NubeDesk fue fundada por dos ingenieros en Bogotá que se negaron a buscar capital de riesgo para no perder el control accionario de su software.",
      "Trabajaron por las noches durante 3 meses y ofrecieron suscripciones anuales a $499 USD a 10 pequeños despachos contables a cambio de co-diseñar la herramienta según sus necesidades exactas.",
      "Con los $5,000 USD iniciales recaudados de preventa pagaron los servidores e infraestructura en la nube durante el primer año.",
      "Al reinvertir las suscripciones mensuales en mejoras de producto y prospección directa, la empresa creció a 800 clientes activos manteniendo una rentabilidad neta superior al 35%."
],
    ch5RiskMitigation: [
      "Riesgo principal del Bootstrapping: El agotamiento del fundador (Burnout) por intentar abarcar todas las áreas (ventas, soporte, finanzas y producto).",
      "Estrategia de mitigación: En cuanto el flujo de caja lo permita, contrata asistentes virtuales o freelancers por horas para delegar tareas operativas repetitivas y concentrarte en la generación de ingresos.",
      "Evita mezclar los fondos del negocio con los gastos personales del hogar.",
      "Establece un límite de tiempo claro: si tras 6 meses de venta activa no logras clientes pagando, debes pivotar la oferta."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Estructuración de Preventas y Finanzas Lean para Nuevos Emprendimientos\". Puedes vender este servicio a profesionales y técnicos que quieren lanzar un negocio pero no tienen capital inicial.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $35 - $60 USD por estructuración del plan de preventa y página de oferta fundadora en Carrd. • Nivel Intermedio (Con portafolio): $100 - $190 USD por diseño de modelo financiero lean, estrategia de lanzamiento autofinanciado y acompañamiento de 30 días. • Nivel Senior / Consultor: $250 - $500 USD por consultoría integral de escalamiento orgánico sin deuda para empresas en crecimiento.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / LinkedIn): \"Hola [Nombre], veo que tienes en mente lanzar [Proyecto]. La mayoría de emprendedores cometen el error de endeudarse con bancos o buscar inversionistas antes de tener clientes. Por solo $40 USD yo te ayudo a estructurar una estrategia de preventa para conseguir tus primeros 5 a 10 clientes pagando por adelantado y financiar tu lanzamiento sin deberle nada a nadie. ¿Te gustaría agendar una llamada de 20 minutos esta semana?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña tu plantilla de preventa en Notion y una landing page modelo en Carrd. Día 2: Contacta a 15 emprendedores que estén buscando financiamiento y preséntales tu método de preventa autofinanciada."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la principal ventaja estratégica del Bootstrapping frente a buscar fondos de inversión externos desde el día uno?",
            "options": [
                  "Que no hay que pagar impuestos al gobierno nunca.",
                  "Que los fundadores conservan el 100% del control y la propiedad de la empresa, y se enfocan en crear un modelo verdaderamente rentable desde el inicio.",
                  "Que se puede gastar dinero sin registrar las facturas.",
                  "Que no es necesario tener clientes satisfechos."
            ],
            "correctIndex": 1,
            "explanation": "El Bootstrapping preserva la independencia y disciplina a la empresa a generar ganancias reales en lugar de depender de financiamiento externo constante."
      },
      {
            "question": "¿Cómo puede un emprendedor autofinanciado financiar el desarrollo de su primer producto sin recurrir a préstamos?",
            "options": [
                  "Vendiendo el producto por adelantado a clientes pioneros (preventa) con un descuento o beneficio exclusivo.",
                  "Esperando a ganar la lotería.",
                  "Contratando a 20 empleados sin sueldo prometiendo pagarles en 5 años.",
                  "Pidiendo préstamos de alto interés a prestamistas informales."
            ],
            "correctIndex": 0,
            "explanation": "Las preventas y acuerdos piloto de pago anticipado son el método más seguro y validado para financiar el desarrollo con dinero de clientes reales."
      },
      {
            "question": "¿Qué se debe hacer con las primeras utilidades netas generadas en una empresa autofinanciada?",
            "options": [
                  "Gastarlas inmediatamente en lujos personales o autos de alta gama.",
                  "Reinvertir la mayor parte (ej. 70-80%) en canales de adquisición de clientes comprobados y mejoras operativas.",
                  "Dejarlas inactivas en una cuenta sin intereses.",
                  "Donar el 100% a la competencia."
            ],
            "correctIndex": 1,
            "explanation": "La reinversión disciplinada en adquisición y calidad es el motor que permite a una empresa autofinanciada escalar orgánicamente."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-3
  // =========================================================================
  'mp-3': {
    frameworkName: "Sistema de Presupuestación Base Cero (ZBB) & Fondo de Contingencia Escalonado",
    coreMetrics: [
      "Variación Presupuestaria Mensual (< 4%)",
      "Ratio de Gastos Fijos vs. Ingresos (< 30%)",
      "Tasa de Ahorro para Fondo de Emergencia (10% mensual)",
      "Margen de Seguridad Operativa",
      "Días de Pago a Proveedores (DPO)"
],
    caseCompany: "Clínica Dental Sonrisas Vivas (Lima, Perú)",
    caseOutcome: "Reemplazó el presupuesto intuitivo por un modelo de Presupuesto Base Cero en Google Sheets; recortó $2,400 USD mensuales en gastos superfluos y conformó un fondo de reserva de $35,000 USD en 8 meses para renovar equipamiento radiológico al contado sin endeudamiento.",
    pitfall: "Elaborar un presupuesto una sola vez a principio de año copiando los datos del año anterior sin justificar la necesidad real de cada partida de gasto.",
    actionItem1: "Desglosar todos los egresos del negocio partiendo desde cero (ZBB) y exigir que cada gasto justifique su aporte directo a los ingresos o a la calidad del servicio.",
    actionItem2: "Establecer la regla del 50/30/20 corporativa: 50% costos de entrega, 30% operación y ventas, 20% reserva de reinversión e impuestos.",
    actionItem3: "Automatizar la transferencia del 10% de cada ingreso bruto diario/semanal a una cuenta bancaria blindada para contingencias fiscales y operativas.",
    domainContext: "Un presupuesto no es una camisa de fuerza para impedir el gasto, sino un plan deliberado que le asigna a cada dólar una misión clara antes de que sea desembolsado.",
    strategicRationale: "Tener un presupuesto estructurado evita la fuga invisible de capital, otorga previsibilidad para negociar con proveedores y permite aprovechar oportunidades de inversión sin comprometer la nómina.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 78% de los dueños de micro y pequeñas empresas en América Latina gestionan su dinero con el peligroso \"método del saldo bancario\": miran si hay fondos en la cuenta del banco para decidir si compran o gastan hoy, olvidando que en 15 días vencen impuestos, nóminas y pagos a proveedores. Este descontrol genera crisis de liquidez repentinas y sobreendeudamiento con tarjetas de crédito. Este tomo te enseña a implementar el Presupuesto Base Cero (ZBB) y la estructura de cuentas blindadas para tener claridad matemática de cada centavo.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Ilusión del Saldo Bancario y Anatomía de los Gastos Superfluos: Cómo identificar las fugas invisibles de dinero que drenan tu margen neto.\n• Capítulo 2: Metodología Presupuesto Base Cero (ZBB): Cómo justificar cada desembolso desde cero y categorizar gastos en Críticos, Necesarios y Prescindibles.\n• Capítulo 3: Protocolo de Implementación en 4 Pasos: Lista de gastos fijos, renegociación de contratos con proveedores y subcuentas bancarias blindadas.\n• Capítulo 4: Caso de Estudio Real (Clínica Sonrisas Vivas): Cómo recortaron $2,400 USD al mes en licencias duplicadas y compraron equipo al contado en Lima.\n• Capítulo 5: Mitigación de Deudas Fiscales: Por qué el dinero del IVA e impuestos retenidos es intocable y cómo separarlo en tiempo real al cobrar.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de reducción de costos y diseño de presupuestos Base Cero cobrando entre $30 y $480 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets (sheets.google.com): Plantilla de Presupuesto Base Cero con fórmulas de asignación porcentual 50/30/20 y análisis de variación mensual.\n2. Wave Accounting (waveapps.com): Registro automatizado de facturas de compra y categorización fiscal sin costo de software.\n3. Subcuentas Bancarias Digitales: Configuración de bolsillos o subcuentas automáticas en banca móvil para separar nómina, impuestos y reservas.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nCualquier negocio tradicional (clínicas, restaurantes, tiendas, talleres, estudios) que factura pero no sabe a dónde se va el dinero necesita este servicio:\n• Nivel Junior: $30 – $60 USD por auditoría de gastos de los últimos 3 meses + plantilla de presupuesto Base Cero en Sheets.\n• Nivel Intermedio: $80 – $170 USD por reestructuración presupuestaria completa, negociación con proveedores y sistema de subcuentas.\n• Nivel Senior: $220 – $480 USD por consultoría integral de optimización de costos y control presupuestario trimestral.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura una plantilla de Presupuesto Base Cero en Google Sheets con categorías de gastos preconfiguradas.\nDía 2: Visita o contacta a 10 comercios locales y ofréceles una revisión gratuita de sus 3 mayores gastos para recortar fugas.",
    ch1CustomNarrative: [
      "La mayoría de los pequeños empresarios operan bajo el \"método del saldo bancario\": miran cuánto dinero hay en la cuenta del banco para decidir si pueden gastar o comprar hoy.",
      "Este método es extremadamente peligroso porque no considera los cheques diferidos, los impuestos devengados por pagar a fin de trimestre ni el vencimiento inminente de la nómina.",
      "Un presupuesto profesional separa las emociones del dinero y establece reglas claras y objetivas sobre cuánto se puede gastar en cada rubro operativo.",
      "Planificar el destino del dinero antes de que ingrese a la empresa es la única manera garantizada de generar utilidades consistentes a fin de mes."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO IMPLEMENTAR EL PRESUPUESTO BASE CERO EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Abre Google Sheets (sheets.google.com) y crea una hoja llamada \"Presupuesto_Base_Cero_ZBB\". Lista en la columna A todas las categorías de gasto del negocio.",
      "Paso 2: Agrega una columna llamada \"Clasificación_Prioridad\" con tres opciones: 1. Crítico (Innegociable para operar). 2. Necesario pero Optimizable. 3. Prescindible (Gasto eliminable). Elimina de inmediato todas las filas marcadas como Prescindibles.",
      "Paso 3: Crea tres columnas de control mensual: \"Presupuesto Aprobado\", \"Gasto Real Ejecutado\" y \"Variación %\" con la fórmula: =(Gasto_Real - Presupuesto_Aprobado)/Presupuesto_Aprobado.",
      "Paso 4: Aplica formato condicional: si la variación es positiva (se gastó más de lo presupuestado), la celda se ilumina en rojo para exigir justificación inmediata."
],
    ch3TacticalSteps: [
      "Paso 1: Abre una hoja de cálculo y lista todas tus categorías de gastos fijos (alquiler, salarios, seguros, servicios, internet, licencias).",
      "Paso 2: Negocia con tus 3 proveedores principales un descuento del 5% al 10% por pronto pago o compromiso de volumen anual.",
      "Paso 3: Crea subcuentas bancarias separadas para: Nómina/Costos Fijos, Impuestos (IVA/Renta acumulada) y Fondo de Reserva.",
      "Paso 4: Bloquea cualquier compra no presupuestada que supere los $100 USD exigiendo un período de reflexión de 48 horas antes de autorizarla."
],
    ch4CaseDeepDive: [
      "Clínica Sonrisas Vivas en Lima tenía ingresos de $25,000 USD mensuales pero los socios recibían reclamos continuos por retrasos en el pago de insumos a laboratorios protésicos.",
      "Al aplicar el Presupuesto Base Cero descubrieron que pagaban por 4 plataformas de software con funciones duplicadas y que los insumos dentales se compraban de urgencia a precios minoristas.",
      "Unificaron las compras mensuales con un proveedor mayorista obteniendo un 18% de descuento y eliminaron suscripciones inactivas.",
      "En 8 meses crearon un fondo de contingencia de $35,000 USD que les permitió comprar su propio escáner digital al contado."
],
    ch5RiskMitigation: [
      "Error común: Subestimar los impuestos y utilizarlos como capital de trabajo temporal.",
      "Peligro mortal: Gastar el dinero correspondiente al impuesto sobre las ventas (IVA) o retenciones de nómina pensando que es flujo disponible; cuando llega el vencimiento fiscal, la empresa entra en crisis de liquidez con multas e intereses.",
      "Solución innegociable: Separa el porcentaje de impuestos de cada factura cobrada en una cuenta bancaria intangible en el momento exacto en que ingresa el dinero.",
      "Revisa trimestralmente las condiciones de tus pólizas de seguros para evitar sobrepagos por coberturas obsoletas."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de Reducción de Costos y Diseño de Presupuesto Base Cero para PYMEs\". Ofrece este servicio a comercios, clínicas, despachos y empresas que necesitan sanear sus cuentas y recortar gastos improductivos.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $30 - $60 USD por auditoría de gastos de los últimos 3 meses + plantilla de presupuesto Base Cero en Sheets. • Nivel Intermedio (Con portafolio): $80 - $170 USD por reestructuración presupuestaria completa, negociación con proveedores y sistema de subcuentas. • Nivel Senior / Consultor: $220 - $480 USD por consultoría integral de optimización de costos y control presupuestario trimestral.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / Correo): \"Hola [Nombre], en negocios de tu sector es muy común tener gastos invisibles o suscripciones duplicadas que se comen entre el 10% y el 20% de las ganancias netas cada mes. Por solo $35 USD yo realizo una auditoría rápida de tus gastos del último trimestre y te entrego tu Presupuesto Base Cero en Google Sheets para ahorrarte dinero desde el primer mes. ¿Te gustaría que revisemos tus números en 30 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura una plantilla de Presupuesto Base Cero en Google Sheets con categorías de gastos preconfiguradas. Día 2: Visita o contacta a 10 comercios locales y ofréceles una revisión gratuita de sus 3 mayores gastos para recortar fugas."
],
    quizQuestions: [
      {
            "question": "¿Qué es el \"Presupuesto Base Cero\" (Zero-Based Budgeting)?",
            "options": [
                  "Un presupuesto donde la empresa decide no gastar ni un solo dólar en todo el año.",
                  "Un método en el que cada partida de gasto debe justificarse desde cero en cada período, en lugar de simplemente aumentar o repetir el presupuesto del año anterior.",
                  "Un presupuesto para empresas que están en bancarrota absoluta.",
                  "Un software gratuito de contabilidad."
            ],
            "correctIndex": 1,
            "explanation": "El presupuesto base cero obliga a evaluar la utilidad real de cada desembolso, eliminando gastos heredados o innecesarios de forma continua."
      },
      {
            "question": "¿Por qué nunca se debe utilizar el dinero recaudado por impuestos (ej. IVA o retenciones) como capital de trabajo?",
            "options": [
                  "Porque ese dinero pertenece al fisco y su uso como flujo operativo genera descalce financiero y sanciones graves cuando vence el plazo de pago.",
                  "Porque los bancos cobran comisiones si tocas ese dinero.",
                  "Porque no se puede transferir entre cuentas del mismo banco.",
                  "Porque el dinero de impuestos pierde valor con la inflación en 24 horas."
            ],
            "correctIndex": 0,
            "explanation": "El dinero de impuestos cobrado en nombre del Estado no es ingreso de la empresa; gastarlo es una de las causas más frecuentes de quiebra por deudas tributarias."
      },
      {
            "question": "¿Cuál es la regla del 50/30/20 aplicada a la estructura financiera de una pequeña empresa?",
            "options": [
                  "50% para fiestas, 30% para viajes y 20% para el banco.",
                  "50% para costos de entrega del producto/servicio, 30% para gastos operativos y ventas, y 20% para reserva de reinversión e impuestos.",
                  "Pagar el 50% de las deudas y pedir el 30% prestado.",
                  "Vender solo el 20% de los productos."
            ],
            "correctIndex": 1,
            "explanation": "Esta distribución protege el margen operativo y garantiza que siempre exista un fondo de capital para crecimiento y obligaciones fiscales."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-4
  // =========================================================================
  'mp-4': {
    frameworkName: "Ciclo de Conversión de Efectivo (CCC), Protocolo de Cobranza Ágil & Gestión de Liquidez",
    coreMetrics: [
      "Ciclo de Conversión de Efectivo (Días CCC)",
      "Días de Venta en Cartera (DSO < 30)",
      "Rotación de Inventarios (DSI)",
      "Días de Pago a Proveedores (DPO > DSO)",
      "Índice de Liquidez Corriente (> 1.5)"
],
    caseCompany: "Comercializadora Textil Andina (Quito, Ecuador)",
    caseOutcome: "Redujo su ciclo de conversión de efectivo de 72 días a 24 días renegociando plazos de cobro a 15 días con pasarelas de pago y extendiendo crédito con proveedores a 45 días; liberó $28,000 USD de capital de trabajo sin recurrir a créditos usureros.",
    pitfall: "Ofrecer crédito abierto a 60 o 90 días a los clientes mientras se compra inventario de contado, provocando un estrangulamiento de liquidez que impide pagar sueldos.",
    actionItem1: "Calcular el Ciclo de Conversión de Efectivo: Días de Inventario + Días de Cobro a Clientes - Días de Pago a Proveedores.",
    actionItem2: "Implementar un descuento por pronto pago (2% a 5% de descuento si pagan en menos de 7 días) para acelerar el ingreso de caja.",
    actionItem3: "Establecer un protocolo automatizado de recordatorios de cobro a 3 días antes del vencimiento, el día del vencimiento y 3 días después.",
    domainContext: "La administración del dinero no consiste en acumular saldos estáticos, sino en acelerar la velocidad a la que el capital invertido en inventario o servicios retorna multiplicado a la cuenta bancaria.",
    strategicRationale: "Un Ciclo de Conversión de Efectivo corto permite a la empresa crecer con su propio flujo, reduce los costos financieros de factoring y elimina la vulnerabilidad ante impagos.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl efectivo es el oxígeno de cualquier negocio: una empresa puede sobrevivir meses sin utilidades contables, pero no puede sobrevivir ni un solo día sin efectivo líquido para pagar a sus trabajadores y proveedores. En América Latina, las PYMEs sufren porque entregan sus productos a crédito de 60 o 90 días pero tienen que pagar la materia prima al contado. Este tomo te entrena para dominar el Ciclo de Conversión de Efectivo (CCC), acelerar la velocidad del dinero y cobrar siempre a tiempo sin perder clientes.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Dinámica del Ciclo de Conversión de Efectivo: Cómo calcular la fórmula DSI + DSO - DPO y por qué los días son más importantes que los porcentajes.\n• Capítulo 2: Protocolo de Cobranza Preventiva: Cómo cobrar sin parecer desesperado mediante incentivos de pronto pago y recordatorios programados.\n• Capítulo 3: Plan Táctico de Saneamiento de Liquidez: Reclasificación de clientes según historial de pago y fijación de límites de crédito comerciales.\n• Capítulo 4: Caso de Estudio Real (Textil Andina): Cómo liberaron $28,000 USD de caja en Quito reduciendo su ciclo de 72 a 24 días.\n• Capítulo 5: Mitigación de Clientes Morosos: Cláusulas contractuales de suspensión de servicio y retención de entrega ante facturas vencidas.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de optimización de flujo de cobranza y tesorería cobrando entre $30 y $500 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets (sheets.google.com): Calculadora interactiva del Ciclo de Conversión de Efectivo (CCC) y simulador de capital de trabajo liberado.\n2. WhatsApp Business: Plantillas de recordatorio de cobro preventivo con enlaces directos de pago digital.\n3. Wave / QuickBooks Free Templates: Generación de facturas con botón de pago instantáneo con tarjeta o transferencia.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nMiles de distribuidoras, imprentas, agencias y proveedores B2B sufren por retrasos en los pagos de sus clientes corporativos:\n• Nivel Junior: $30 – $60 USD por cálculo del CCC + diseño del sistema de cobranza preventiva en WhatsApp Business.\n• Nivel Intermedio: $90 – $180 USD por reingeniería completa de la política de créditos comerciales y cobranza.\n• Nivel Senior: $240 – $500 USD por gestión externa de tesorería y reducción integral del ciclo de efectivo.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Diseña la calculadora del Ciclo de Efectivo en Google Sheets y las 3 plantillas de cobranza para WhatsApp.\nDía 2: Contacta a 15 empresas B2B locales y ofréceles auditar su cartera vencida para recuperar liquidez en 7 días.",
    ch1CustomNarrative: [
      "El efectivo es el oxígeno de una empresa: puedes sobrevivir meses sin generar utilidades contables, pero no puedes sobrevivir un solo día sin efectivo para pagar nóminas y alquileres.",
      "El error fatal de muchos comerciantes en nuestra región es creer que vender mucho a crédito es señal de éxito, sin notar que están financiando gratis las operaciones de sus clientes con su propio capital de trabajo.",
      "La salud financiera de un negocio depende directamente de la velocidad con la que un dólar invertido en mercancía o trabajo regresa a la cuenta bancaria en forma de cobro efectivo.",
      "Quien domina la gestión de tesorería y el ciclo de conversión de efectivo tiene el poder de hacer crecer su negocio sin pedir dinero prestado."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CALCULAR Y OPTIMIZAR EL CICLO DE EFECTIVO EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Abre Google Sheets (sheets.google.com) y crea una hoja llamada \"Calculadora_Ciclo_Efectivo_CCC\". Ingresa tres variables clave: 1. Días de Inventario (DSI = Inventario Promedio / Costo de Ventas Diario). 2. Días de Cobro a Clientes (DSO = Cuentas por Cobrar / Ventas Diarias a Crédito). 3. Días de Pago a Proveedores (DPO = Cuentas por Pagar / Compras Diarias).",
      "Paso 2: Aplica la fórmula del Ciclo de Conversión de Efectivo: =DSI + DSO - DPO. La celda te indicará el número exacto de días que tu dinero permanece atrapado fuera de tu cuenta.",
      "Paso 3: En WhatsApp Business, configura respuestas rápidas para cobro: /cobro1 (Recordatorio amable 3 días antes del vencimiento con enlace de pago), /cobro2 (Aviso el día de vencimiento) y /cobro3 (Aviso formal de suspensión de servicio a los 3 días de retraso).",
      "Paso 4: Implementa una política de descuento por pronto pago: ofrece un 3% de descuento en la factura si el cliente transfiere en las primeras 48 horas."
],
    ch3TacticalSteps: [
      "Día 1: Audita el saldo total de cuentas por cobrar y clasifícalas por antigüedad (0-30 días, 31-60 días, 61-90 días y +90 días).",
      "Día 2: Llama personalmente a los 5 clientes con facturas más antiguas y negocia un plan de pago con descuento por liquidación inmediata.",
      "Día 3: Modifica las condiciones comerciales en tus cotizaciones futuras exigiendo 50% de anticipo obligatorio.",
      "Día 4: Negocia con tus proveedores clave extender el plazo de pago de 15 a 30 o 45 días demostrando puntualidad histórica."
],
    ch4CaseDeepDive: [
      "Comercializadora Textil Andina en Quito vendía telas a confeccionistas locales con plazos de cobro informales de hasta 72 días, mientras sus proveedores de hilo exigían pago a 15 días.",
      "Esta brecha de 57 días obligaba a la empresa a pedir créditos con intereses bancarios del 18% para pagar nóminas.",
      "Implementaron el sistema de facturación con descuento del 3% por pago en 7 días y automatizaron recordatorios por WhatsApp.",
      "En 4 meses redujeron los días de cobro a 24 días, renegociaron con proveedores a 45 días y lograron un ciclo de efectivo negativo (los clientes pagan antes de que venza la factura del proveedor), liberando $28,000 USD de liquidez."
],
    ch5RiskMitigation: [
      "Riesgo crítico: Seguir vendiendo a un cliente que tiene facturas vencidas impagas con la esperanza de que \"algún día pagará todo junto\".",
      "Regla de oro: Bloquea automáticamente nuevos despachos o servicios a cualquier cliente que supere los 7 días de mora hasta que regularice su saldo.",
      "Nunca entregues el 100% de un trabajo o producto final sin haber recibido la totalidad del pago acordado.",
      "Diversifica tu cartera: ningún cliente individual debe representar más del 20% de la facturación total de tu empresa."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Sistematización de Cobranzas y Aceleración de Flujo de Efectivo para PYMEs\". Ofrece este servicio a mayoristas, distribuidores, agencias de servicios y talleres que tienen problemas para cobrar a sus clientes.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $30 - $60 USD por cálculo del CCC + diseño del sistema de cobranza preventiva en WhatsApp Business. • Nivel Intermedio (Con portafolio): $90 - $180 USD por reingeniería completa de la política de créditos comerciales y cobranza. • Nivel Senior / Consultor: $240 - $500 USD por gestión externa de tesorería y reducción integral del ciclo de efectivo.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / LinkedIn): \"Hola [Nombre], sé que en empresas como [Nombre de Empresa] uno de los mayores dolores de cabeza es que los clientes tardan semanas en pagar las facturas, apretando la caja para la nómina. Por solo $35 USD yo te configuro un sistema de cobranza preventiva en WhatsApp y calculo tu ciclo de efectivo para reducir los retrasos de cobro a la mitad en 15 días. ¿Te gustaría que hagamos un test rápido esta semana?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña la calculadora del Ciclo de Efectivo en Google Sheets y las 3 plantillas de cobranza para WhatsApp. Día 2: Contacta a 15 empresas B2B locales y ofréceles auditar su cartera vencida para recuperar liquidez en 7 días."
],
    quizQuestions: [
      {
            "question": "¿Qué mide el Ciclo de Conversión de Efectivo (CCC) en una empresa?",
            "options": [
                  "La cantidad de billetes físicos que hay en la caja registradora al final del día.",
                  "El número de días que transcurren desde que la empresa paga por insumos o inventario hasta que cobra el dinero en efectivo de la venta.",
                  "La tasa de cambio del dólar frente a la moneda local.",
                  "El tiempo que tarda el banco en aprobar una tarjeta de crédito."
            ],
            "correctIndex": 1,
            "explanation": "El CCC mide la eficiencia operativa del capital de trabajo: entre menor sea el número de días, más rápido circula el dinero y mayor es la liquidez del negocio."
      },
      {
            "question": "¿Cuál es una estrategia eficaz para acelerar el cobro de facturas a clientes B2B sin generar conflictos comerciales?",
            "options": [
                  "Enviar mensajes amenazantes en redes sociales públicas.",
                  "Ofrecer un descuento por pronto pago (ej. 2% al 4% si pagan en menos de 7 días) y enviar recordatorios amables antes de la fecha de vencimiento.",
                  "Dejar de contestar las llamadas del cliente.",
                  "Esperar un año a que el cliente decida cuándo pagar."
            ],
            "correctIndex": 1,
            "explanation": "El descuento por pronto pago crea un incentivo financiero directo para que el departamento de finanzas del cliente priorice tu factura frente a otros proveedores."
      },
      {
            "question": "¿Qué debe hacer una empresa si un cliente tiene facturas vencidas con más de 15 días de retraso?",
            "options": [
                  "Regalarle más productos para que se ponga contento.",
                  "Pausar de inmediato nuevos despachos o entregas hasta que regularice el saldo vencido.",
                  "Pedir un préstamo para regalarle crédito ilimitado.",
                  "Borrar la deuda de los registros contables."
            ],
            "correctIndex": 1,
            "explanation": "Pausar entregas protege a la empresa contra el crecimiento de deudas incobrables y disciplina al cliente a cumplir sus compromisos de pago."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-5
  // =========================================================================
  'mp-5': {
    frameworkName: "Protocolo de Pre-Lanzamiento de Crowdfunding, Construcción de Lista VIP & Secuencia de 5 Emails",
    coreMetrics: [
      "Tasa de Conversión de Lista VIP (> 15%)",
      "Meta Recaudada en las Primeras 48 Horas (> 30%)",
      "Tasa de Apertura de Emails (> 45%)",
      "Costo por Lead Calificado (< $0.50 USD)",
      "Ticket Promedio de Aportante"
],
    caseCompany: "Café Ancestral Espresso Portable (Manizales, Colombia)",
    caseOutcome: "Construyó una lista de 1,200 suscriptores apasionados por el café mediante una secuencia de 5 emails en Mailchimp gratuito; al lanzar su campaña de financiamiento colectivo recaudó $22,000 USD en sus primeras 36 horas, superando su meta en un 180%.",
    pitfall: "Publicar una campaña de crowdfunding en una plataforma esperando que personas desconocidas lleguen por casualidad, sin haber construido una audiencia comprometida previa al lanzamiento.",
    actionItem1: "Crear una landing page simple en Carrd ofreciendo una recompensa exclusiva o 40% de descuento a quienes se unan a la lista de espera VIP.",
    actionItem2: "Diseñar y automatizar la secuencia de 5 emails: Historia de origen, El problema no resuelto, Detrás de cámaras, Revelación de la recompensa y Apertura oficial.",
    actionItem3: "Conseguir que al menos 20 amigos, familiares o clientes pioneros se comprometan a aportar en los primeros 60 minutos del lanzamiento para activar el algoritmo.",
    domainContext: "El crowdfunding no es un boleto de lotería, sino una campaña de marketing de precisión donde el éxito del día 1 se construye en las 6 semanas de pre-lanzamiento por correo electrónico.",
    strategicRationale: "Alcanzar el 30% de la meta en las primeras 48 horas activa la recomendación algorítmica de plataformas como Kickstarter, Indiegogo, Vaki o Idea.me, atrayendo patrocinadores orgánicos.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 68% de las campañas de financiamiento colectivo (crowdfunding) fracasan con $0 recaudados. La razón no es que el producto sea malo, sino el mito de la \"aparición espontánea\": creer que al publicar un proyecto en internet millones de extraños donarán dinero. En la realidad, las campañas exitosas ganan el juego antes de abrir: construyen una lista de correo VIP durante 4 semanas y detonan una secuencia de emails que recauda el 30% de la meta en las primeras 48 horas. Este tomo te enseña la arquitectura de emails y preventa para financiar cualquier proyecto creativo o empresarial.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: Psicología del Patrocinador y la Regla del 30% en 48 Horas: Cómo funciona el algoritmo de las plataformas de financiamiento colectivo.\n• Capítulo 2: La Secuencia Maestra de 5 Emails: El gancho de origen, el problema agudo, el prototipo detrás de cámaras, la oferta VIP y el conteo regresivo.\n• Capítulo 3: Protocolo de Captación de Leads a Bajo Costo: Cómo montar una lista de espera en Carrd y Mailchimp sin gastar en software.\n• Capítulo 4: Caso de Estudio Real (Café Ancestral): Cómo recaudaron $22,000 USD en 36 horas desde Manizales con una lista de 1,200 suscriptores.\n• Capítulo 5: Mitigación del Síndrome del Valle de la Muerte: Estrategias para mantener las donaciones activas durante las semanas 2 y 3 de campaña.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo cobrar entre $35 y $550 USD redactando y gestionando campañas de email para creadores y startups.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Mailchimp / Brevo (brevo.com): Configuración de secuencias de email automatizadas con etiquetas VIP y métricas de apertura.\n2. Carrd (carrd.co): Landing page de registro a la lista de espera con formulario integrado.\n3. Canva: Diseño de gráficos de cuenta regresiva y mockups del producto para incrustar en los correos.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nInventores, diseñadores, autores de libros, creadores de juegos de mesa y fundadores de productos físicos sueñan con hacer crowdfunding pero no saben redactar correos persuasivos:\n• Nivel Junior: $35 – $70 USD por redacción de la secuencia de 5 emails de pre-lanzamiento + landing page en Carrd.\n• Nivel Intermedio: $110 – $220 USD por gestión integral de la campaña de email marketing y automatizaciones durante los 30 días de recaudación.\n• Nivel Senior: $280 – $550 USD por consultoría estratégica completa de lanzamiento en plataformas de financiamiento colectivo.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Redacta la plantilla modelo de los 5 emails de prelanzamiento en Google Docs y monta la landing en Carrd.\nDía 2: Contacta a 10 creadores o emprendedores en Instagram/Kickstarter que anuncien proyectos próximos y ofréceles tu secuencia de emails.",
    ch1CustomNarrative: [
      "El crowdfunding no es un concurso de popularidad en redes sociales ni un milagro algorítmico; es una estrategia de preventa de alta precisión fundamentada en la relación directa por correo electrónico.",
      "Las redes sociales tienen algoritmos que muestran tus publicaciones a menos del 5% de tus seguidores; el correo electrónico, en cambio, llega directo a la bandeja de entrada privada de tus mayores entusiastas.",
      "Una campaña de financiamiento colectivo se gana o se pierde en las 4 semanas previas al día del lanzamiento.",
      "Si logras que una lista VIP de 500 personas esté esperando con ansias el minuto exacto de apertura, tu campaña se financiará en cuestión de horas."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UNA SECUENCIA DE EMAIL DE PRE-LANZAMIENTO CON BREVO / MAILCHIMP GRATIS:",
      "Paso 1: Abre Brevo (brevo.com) o Mailchimp en su plan gratuito. Crea una lista de contactos llamada \"VIP_Lanzamiento_Crowdfunding\".",
      "Paso 2: Diseña la secuencia de 5 emails automatizados: Email 1 (Inmediato): \"Bienvenido al círculo íntimo + Por qué creamos esto\". Email 2 (Día 3): \"El mayor desafío que resolvimos en el prototipo\". Email 3 (Día 7): \"Vistazo exclusivo a las recompensas y descuentos del 40%\". Email 4 (Día 10): \"Faltan 24 horas: Prepara tu alarma para las 9:00 AM\". Email 5 (Día 11 - Apertura): \"¡Ya estamos en vivo! Reclama tu cupo antes de que se agote\".",
      "Paso 3: En Carrd (carrd.co), crea una página con un campo de email y el gancho: \"Únete a la lista de espera y obtén un 40% de descuento exclusivo el día 1\". Conecta el formulario mediante Webhook o API directa con Brevo/Mailchimp.",
      "Paso 4: Envía una prueba de correo a tu propio teléfono para verificar que las imágenes carguen rápido y los botones se lean perfectamente en pantallas móviles."
],
    ch3TacticalSteps: [
      "Semana 1-2: Define la historia central del proyecto y crea la página de registro VIP en Carrd.",
      "Semana 3-4: Comparte avances en redes y comunidades especializadas dirigiendo tráfico a la lista de espera hasta alcanzar 300 suscriptores mínimos.",
      "Semana 5: Envía los emails de expectativa y confirma que los primeros 15 amigos/aliados aportarán en los primeros 30 minutos.",
      "Semana 6: Dispara el email de lanzamiento y monitorea la tasa de conversión en tiempo real."
],
    ch4CaseDeepDive: [
      "Café Ancestral en Manizales quería lanzar una cafetera portátil de espresso para viajeros pero no tenían $15,000 USD para el molde de inyección plástica.",
      "Durante 6 semanas publicaron videos cortos en TikTok mostrando las pruebas del prototipo y captaron 1,200 emails con una página de Carrd gratuita.",
      "Configuraron su secuencia de 5 emails en Brevo ofreciendo la cafetera a $39 USD (precio final de tienda: $65 USD) solo para las primeras 100 unidades.",
      "Al enviar el email de apertura, vendieron 250 cafeteras en 36 horas recaudando $22,000 USD y cubriendo la producción completa sin intermediarios."
],
    ch5RiskMitigation: [
      "Trampa mortal: Lanzar la campaña con menos de 200 personas en la lista VIP esperando la apertura.",
      "Si el primer día no alcanzas al menos el 20% de tu meta, la campaña pierde tracción y la plataforma no la destacará en su página principal.",
      "Cumple estrictamente las promesas de entrega: presupuesta siempre 2 meses adicionales de tiempo de fabricación por posibles retrasos de proveedores.",
      "Calcula con exactitud los costos de envío postal e impuestos de importación antes de fijar los precios de las recompensas."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Redacción y Gestión de Campañas de Email Marketing para Crowdfunding y Lanzamientos de Producto\". Ofrece este servicio a diseñadores, inventores, autores, academias y marcas que van a lanzar un nuevo producto.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $35 - $70 USD por redacción de la secuencia de 5 emails de pre-lanzamiento + landing page en Carrd. • Nivel Intermedio (Con portafolio): $110 - $220 USD por gestión integral de la campaña de email marketing y automatizaciones durante los 30 días de recaudación. • Nivel Senior / Consultor de Lanzamientos: $280 - $550 USD por consultoría estratégica completa de lanzamiento en plataformas de financiamiento colectivo.",
      "3. Guion de Venta Listo para Copiar (Instagram DM / LinkedIn): \"Hola [Nombre], vi tu nuevo proyecto de [Producto] y me parece extraordinario. La mayoría de campañas de crowdfunding fracasan porque lanzan sin una lista de espera previa por correo electrónico. Por solo $45 USD yo te redacto la secuencia de 5 emails de prelanzamiento y configuro tu landing page en Carrd para asegurar que el día del lanzamiento tengas decenas de compradores listos. ¿Te gustaría ver un ejemplo de la estructura de emails?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Redacta la plantilla modelo de los 5 emails de prelanzamiento en Google Docs y monta la landing en Carrd. Día 2: Contacta a 10 creadores o emprendedores en Instagram/Kickstarter que anuncien proyectos próximos y ofréceles tu secuencia de emails."
],
    quizQuestions: [
      {
            "question": "¿Por qué el correo electrónico es el canal más determinante para el éxito de una campaña de financiamiento colectivo?",
            "options": [
                  "Porque es el único canal digital que no tiene filtros de SPAM.",
                  "Porque permite una comunicación directa y privada con los mayores interesados sin depender de los algoritmos cambiantes de las redes sociales.",
                  "Porque enviar correos cuesta miles de dólares en las plataformas.",
                  "Porque las plataformas de crowdfunding exigen enviar 1 millón de emails por ley."
            ],
            "correctIndex": 1,
            "explanation": "El email garantiza que tu mensaje llegue directamente a tus seguidores más fieles en el momento exacto en que se abre la recaudación."
      },
      {
            "question": "¿Qué porcentaje de la meta total de recaudación se recomienda alcanzar en las primeras 48 horas de campaña?",
            "options": [
                  "El 1% solamente.",
                  "Al menos el 30% de la meta, para activar los algoritmos de recomendación orgánica de las plataformas de crowdfunding.",
                  "El 100% obligatorio o te multan.",
                  "No importa cuánto se recaude al inicio."
            ],
            "correctIndex": 1,
            "explanation": "Alcanzar el 30% en las primeras 48 horas genera prueba social masiva y posiciona tu proyecto en los primeros lugares de búsqueda."
      },
      {
            "question": "¿Cuál es el objetivo principal del Email 4 (enviado 24 horas antes del lanzamiento)?",
            "options": [
                  "Pedir disculpas por enviar correos.",
                  "Generar urgencia y recordar la hora exacta de apertura para que los patrocinadores aprovechen los cupos con mayor descuento.",
                  "Pedir donaciones benéficas.",
                  "Cancelar la campaña."
            ],
            "correctIndex": 1,
            "explanation": "El email de 24 horas previas prepara la acción del usuario y asegura que visiten la página en los primeros minutos de apertura."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-6
  // =========================================================================
  'mp-6': {
    frameworkName: "Ecosistema de Crowdfunding de Recompensas Escalonadas, Validación de Mercado & Co-creación con la Comunidad",
    coreMetrics: [
      "Margen Neto por Nivel de Recompensa (> 40%)",
      "Valor Promedio por Patrocinador",
      "Tasa de Patrocinadores que Comparten en Redes",
      "Costo Unitario de Envío y Empaque",
      "Índice de Retención Post-Campaña"
],
    caseCompany: "Khipu Juegos de Mesa Educativos (Santiago, Chile)",
    caseOutcome: "Diseñó una pirámide de 5 recompensas con nombres coleccionables y acceso al co-diseño de cartas; recaudó $34,000 USD de 850 patrocinadores, convirtiendo a sus clientes en una fuerza de ventas comunitaria que logró distribución en 40 librerías.",
    pitfall: "Ofrecer recompensas con márgenes negativos o con costos de envío subestimados que terminan quebrando al creador tras finalizar la campaña.",
    actionItem1: "Calcular el costo total de cada nivel de recompensa: Producción + Empaque + Envío Postal + Comisión de Plataforma (8%) + Margen de Seguridad.",
    actionItem2: "Diseñar una pirámide de 4 niveles: Nivel Simbólico ($5), Nivel Producto Early Bird ($25), Nivel Deluxe ($65) y Nivel Patrocinador VIP/Empresarial ($250).",
    actionItem3: "Crear un canal exclusivo en Discord o Telegram para patrocinadores donde voten semanalmente decisiones creativas del producto.",
    domainContext: "El crowdfunding moderno no es solo una transacción financiera, sino un laboratorio de validación masiva y una máquina de generar embajadores de marca apasionados.",
    strategicRationale: "Estructurar recompensas con márgenes saludables garantiza la entrega puntual sin pérdidas imprevistas y construye una comunidad fiel para futuros lanzamientos.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nMuchas campañas que logran recaudar dinero terminan en la quiebra absoluta al momento de fabricar y enviar las recompensas: los creadores olvidaron calcular las comisiones bancarias, los impuestos aduaneros y el costo real del envío internacional. Además, trataron a sus patrocinadores como simples compradores en lugar de aliados estratégicos. Este tomo te entrena en el diseño de una Pirámide de Recompensas de Alto Margen y en cómo transformar a tus patrocinadores en embajadores de marca de por vida.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: Más Allá del Dinero: Validación de Demanda y Creación de Tribus de Marca: Por qué el feedback de 500 patrocinadores vale más que un estudio de mercado costoso.\n• Capítulo 2: La Pirámide de 4 Niveles de Recompensa: Estructuración matemática de precios desde el ticket simbólico de $5 hasta el paquete corporativo de $250.\n• Capítulo 3: Hoja de Costos de Recompensas Blindada: Cómo calcular el costo unitario con comisiones de pasarelas, mermas de empaque y fletes postales.\n• Capítulo 4: Caso de Estudio Real (Khipu Juegos): Cómo recaudaron $34,000 USD en Chile y aseguraron distribución nacional en 40 librerías.\n• Capítulo 5: Mitigación de Crisis de Producción y Envíos: Protocolo de comunicación transparente ante retrasos de fábricas internacionales.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer el servicio de \"Estructuración de Estrategia de Recompensas y Campaña de Crowdfunding\" cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets (sheets.google.com): Calculadora de Costos y Márgenes de Recompensas para Kickstarter/Indiegogo/Vaki con fórmulas automáticas de comisiones y envíos.\n2. Canva (canva.com): Diseño de infografías visuales de recompensas (\"Reward Tiers\") y gráficos de metas desbloqueables (\"Stretch Goals\").\n3. Discord / Telegram: Creación y moderación de comunidades VIP para co-creación de productos.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nArtistas, desarrolladores de videojuegos, diseñadores de moda sostenible y creadores de gadgets necesitan estructurar sus campañas para no perder dinero:\n• Nivel Junior: $40 – $80 USD por cálculo de costos en Google Sheets + diseño visual de los 4 niveles de recompensa en Canva.\n• Nivel Intermedio: $120 – $250 USD por estructuración completa de la campaña de crowdfunding (historia, metas desbloqueables, recompensas y estrategia de medios).\n• Nivel Senior: $320 – $600 USD por dirección integral de campaña de financiamiento colectivo con gestión de comunidad y logística de envíos.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la plantilla de calculadora de recompensas en Sheets y crea una infografía de muestra en Canva.\nDía 2: Publica en foros de creadores y grupos de Facebook de crowdfunding ofreciendo auditar la rentabilidad de sus recompensas gratis.",
    ch1CustomNarrative: [
      "El mayor beneficio de una campaña de financiamiento colectivo no es el dinero recaudado en la cuenta bancaria, sino la validación irrefutable de que existe un mercado hambriento por tu propuesta.",
      "Cuando cientos de personas desconocidas pagan por adelantado por un producto que aún está en fase de prototipo, eliminas el riesgo más temido en los negocios: crear algo que nadie quiere comprar.",
      "Los patrocinadores de crowdfunding no buscan simplemente comprar un artículo; quieren sentirse parte de una historia épica, ser reconocidos como pioneros y ver su nombre en los créditos.",
      "Aprender a diseñar recompensas emocionales y memorables es la clave para recaudar el doble de dinero con la misma cantidad de visitantes."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CALCULAR MÁRGENES DE RECOMPENSAS EN GOOGLE SHEETS Y CANVA GRATIS:",
      "Paso 1: Abre Google Sheets y crea la hoja \"Calculadora_Recompensas_Crowdfunding\". Añade filas: 1. Costo Unitario de Fabricación. 2. Empaque y Protección. 3. Envío Postal Promedio. 4. Comisión de Plataforma (5%) + Pasarela de Pago (3% a 4%). 5. Margen de Imprevistos (10%).",
      "Paso 2: En la columna \"Precio de Venta Sugerido\", aplica la fórmula: =(Costo_Fab + Empaque + Envio) / (1 - (0.05 + 0.04 + 0.10 + Margen_Deseado_40%)). Esto garantiza que nunca vendas con pérdidas.",
      "Paso 3: Abre Canva (canva.com) y busca la plantilla \"Pricing Table / Tabla de Precios\". Diseña una infografía limpia con 4 tarjetas de colores: Nivel Amigo ($5), Nivel Básico ($25), Nivel Coleccionista ($65) y Nivel Patrocinador VIP ($250).",
      "Paso 4: Exporta la imagen en formato PNG optimizado y añádela en la descripción de tu proyecto en la plataforma de financiamiento colectivo."
],
    ch3TacticalSteps: [
      "Semana 1: Cotiza con al menos 3 fabricantes diferentes el costo unitario por tramos de volumen (100, 500 y 1,000 unidades).",
      "Semana 2: Diseña 3 \"Metas Desbloqueables\" (Stretch Goals): mejoras en el producto que se activarán si la recaudación supera el 150%, 200% o 300% de la meta inicial.",
      "Semana 3: Graba un video de 90 segundos con buena iluminación mostrando al fundador, el problema real y el prototipo funcional en acción.",
      "Semana 4: Lanza la campaña y publica actualizaciones semanales con fotos reales de la producción para mantener la confianza de los patrocinadores."
],
    ch4CaseDeepDive: [
      "Khipu Juegos en Santiago quería lanzar un juego de mesa de estrategia sobre civilizaciones precolombinas pero la imprenta exigía un tiraje mínimo de 1,000 cajas por $12,000 USD.",
      "Diseñaron una recompensa VIP de $150 USD que permitía a 20 patrocinadores tener su rostro ilustrado en una de las cartas de líderes del juego (las 20 plazas se agotaron en 2 horas).",
      "Gracias a las metas desbloqueables (caja con relieve dorado al llegar a $20,000 USD), los propios patrocinadores compartieron el juego en foros especializados para alcanzar la meta.",
      "Recaudaron $34,000 USD, entregaron todas las cajas a tiempo con 42% de margen neto y cerraron contratos con 40 librerías en Chile y Perú."
],
    ch5RiskMitigation: [
      "Error catastrófico: Incluir \"Envío Gratis Internacional\" sin conocer las tarifas aduaneras de cada país.",
      "Mitigación innegociable: Cobra el costo de envío por separado o después de la campaña a través de un administrador de pedidos (Pledge Manager).",
      "Mantén una reserva del 15% del dinero recaudado en una cuenta separada para resolver paquetes extraviados o unidades con defectos de fábrica.",
      "Si un retraso de producción es inevitable, comunica la verdad inmediatamente a tu comunidad con fotos del taller; los patrocinadores perdonan retrasos explicados con honestidad, pero castigan el silencio."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Estructuración de Estrategia de Recompensas y Campaña de Crowdfunding\". Ayuda a emprendedores, artistas y desarrolladores a estructurar campañas rentables en Kickstarter, Indiegogo, Vaki o Idea.me.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por cálculo de costos en Google Sheets + diseño visual de los 4 niveles de recompensa en Canva. • Nivel Intermedio (Con portafolio): $120 - $250 USD por estructuración completa de la campaña de crowdfunding (historia, metas desbloqueables, recompensas y estrategia de medios). • Nivel Senior / Consultor de Crowdfunding: $320 - $600 USD por dirección integral de campaña de financiamiento colectivo con gestión de comunidad y logística de envíos.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / Correo): \"Hola [Nombre], vi tu proyecto de [Producto] y tiene un potencial enorme. Muchas campañas cometen el error de fijar precios de recompensas sin calcular comisiones, mermas de empaque y fletes, terminando con pérdidas después de recaudar. Por solo $45 USD yo te estructuro una Pirámide de Recompensas en Google Sheets y diseño tus gráficos en Canva para asegurar un margen neto superior al 40%. ¿Te gustaría ver un modelo rápido?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de calculadora de recompensas en Sheets y crea una infografía de muestra en Canva. Día 2: Publica en foros de creadores y grupos de Facebook de crowdfunding ofreciendo auditar la rentabilidad de sus recompensas gratis."
],
    quizQuestions: [
      {
            "question": "¿Por qué es fundamental calcular los costos de envío y comisiones de plataforma antes de fijar los precios de las recompensas?",
            "options": [
                  "Porque si no se calculan, el creador puede agotar todo el dinero recaudado en pagar comisiones y fletes postales, terminando en la quiebra.",
                  "Porque la plataforma te expulsa si ganas mucho dinero.",
                  "Porque los envíos siempre son gratuitos para todos.",
                  "Para pagar multas a los clientes."
            ],
            "correctIndex": 0,
            "explanation": "Las comisiones (8-10%) y los envíos pueden representar hasta el 40% del total recaudado; omitirlos en el cálculo lleva a la pérdida de capital."
      },
      {
            "question": "¿Qué es una \"Meta Desbloqueable\" (Stretch Goal) en una campaña de financiamiento colectivo?",
            "options": [
                  "Un botón para cancelar la campaña.",
                  "Una mejora adicional del producto (ej. mejor empaque, accesorios extras) que se añade gratis a todos los patrocinadores si se alcanza una cifra superior a la meta original.",
                  "Una penalización bancaria.",
                  "Un descuento secreto para el fundador."
            ],
            "correctIndex": 1,
            "explanation": "Los Stretch Goals motivan a los patrocinadores existentes a compartir la campaña con sus amigos para desbloquear mejoras para todos."
      },
      {
            "question": "¿Qué debe hacer un creador si la fábrica sufre un retraso de 3 semanas en la producción?",
            "options": [
                  "Desaparecer y no responder ningún mensaje.",
                  "Publicar una actualización honesta y transparente con fotos del estado actual y la nueva fecha estimada de entrega.",
                  "Culpar a los clientes por comprar el producto.",
                  "Borrar la campaña de internet."
            ],
            "correctIndex": 1,
            "explanation": "La transparencia genera confianza y protege la reputación del creador ante cualquier contratiempo operativo."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-7
  // =========================================================================
  'mp-7': {
    frameworkName: "Matriz de Perfil de Inversionista, Diligencia Debida Inversa & Pipeline de Capital",
    coreMetrics: [
      "Tasa de Conversión de Reunión a Term Sheet (> 8%)",
      "Tiempo Promedio de Cierre de Ronda (< 90 días)",
      "Alineación de Tesis de Inversión",
      "Valor Agregado no Monetario (Smart Money)",
      "Costo de Levantamiento de Capital (CAC de Capital)"
],
    caseCompany: "LogiFresh Logística Fría para Agroexportación (Guadalajara, México)",
    caseOutcome: "Armó un pipeline calificado de 40 inversionistas ángeles afines al sector logístico en Notion; cerró una ronda semilla de $150,000 USD con 3 ángeles estratégicos que además le abrieron puertas comerciales con 12 grandes productores agrícolas.",
    pitfall: "Enviar presentaciones masivas en frío (spam) a fondos de inversión internacionales que invierten en sectores o etapas totalmente diferentes a la tuya.",
    actionItem1: "Definir el perfil exacto de inversionista ideal: Ángeles con experiencia operativa en tu industria que aporten capital inteligente (Smart Money).",
    actionItem2: "Construir una base de datos en Notion con 30 prospectos calificados con datos de contacto, tesis de inversión y conexiones mutuas en LinkedIn.",
    actionItem3: "Conseguir introducciones cálidas (Warm Intros) a través de mentores, abogados corporativos o emprendedores ya invertidos por ellos.",
    domainContext: "Levantar capital de inversión no es una limosna, sino una venta consultiva B2B donde el producto que vendes es una participación en el crecimiento futuro de tu empresa.",
    strategicRationale: "Elegir inversionistas con conocimiento y contactos en tu sector acelera el crecimiento de las ventas y reduce los errores estratégicos durante la fase de expansión.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 95% de los correos que reciben los fondos de inversión y los inversionistas ángeles son ignorados en menos de 5 segundos. La razón es simple: el emprendedor envía su proyecto a ciegas a cientos de personas que no invierten en su sector ni en su etapa. Levantar inversión privada es un proceso de ventas B2B que requiere un Pipeline de Capital profesional, investigación previa de tesis y la obtención de introducciones cálidas (warm intros). Este tomo te entrena en el método para calificar, contactar y cerrar inversionistas estratégicos.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: El Ecosistema de Capital Privado: Ángeles Inversionistas, Family Offices, Fondos Semilla y Venture Capital en América Latina.\n• Capítulo 2: La Matriz de Calificación de Tesis: Cómo saber exactamente en qué etapa, sector y geografía invierte cada fondo antes de contactarlo.\n• Capítulo 3: Protocolo de Warm Intros y Prospección en LinkedIn: Cómo conseguir que fundadores de su portafolio te presenten directamente con el socio director.\n• Capítulo 4: Caso de Estudio Real (LogiFresh): Cómo levantaron $150,000 USD en Guadalajara con 3 ángeles inversionistas del sector agrícola.\n• Capítulo 5: Mitigación de \"Inversionistas Tóxicos\": Cómo hacerles Diligencia Debida Inversa y evitar socios que bloqueen decisiones operativas.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer el servicio de \"Mapeo de Inversionistas y Gestión de Pipeline de Capital\" cobrando entre $45 y $650 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Notion (notion.so): CRM de Pipeline de Inversionistas con fases de contacto (Prospecto, Intro Cálida, Primera Reunión, Due Diligence, Term Sheet).\n2. LinkedIn (Modo Gratuito): Operadores de búsqueda booleana para encontrar \"Angel Investor\", \"Managing Partner\" y conexiones de segundo grado.\n3. Crunchbase / LAVCA (Búsqueda gratuita): Directorios para verificar las inversiones recientes de fondos en tu país.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nFundadores de startups, franquicias y negocios en expansión están desesperados por encontrar contactos de inversionistas pero no tienen tiempo de investigar:\n• Nivel Junior: $45 – $90 USD por mapeo e investigación de 25 inversionistas ángeles calificados para su sector en Notion.\n• Nivel Intermedio: $130 – $270 USD por construcción del CRM de capital, redacción de correos de presentación y estrategia de warm intros.\n• Nivel Senior / Asesor Financiero: $350 – $650 USD por acompañamiento estratégico durante todo el proceso de levantamiento de ronda semilla.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la plantilla de CRM de Inversionistas en Notion con campos de tesis, ticket promedio y conexiones en común.\nDía 2: Contacta a 10 fundadores de startups en LinkedIn que estén buscando inversión y ofréceles tu base de datos calificada de ángeles.",
    ch1CustomNarrative: [
      "Levantar capital privado no consiste en rogar por dinero, sino en ofrecer una oportunidad de rentabilidad superior a personas e instituciones que tienen capital ocioso.",
      "El dinero de los inversionistas no es homogéneo: existe el \"dinero tonto\", que solo aporta fondos e interfiere negativamente en la operación, y el \"Smart Money\", que aporta mentoría, clientes estratégicos y reputación.",
      "Un inversionista experimentado busca equipos disciplinados que ejecuten con velocidad y demuestren tracción real con números comprobables.",
      "Construir relaciones de confianza con inversionistas antes de necesitar el dinero con urgencia es el secreto de los mejores fundadores."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UN CRM DE INVERSIONISTAS EN NOTION Y LINKEDIN GRATIS:",
      "Paso 1: Abre Notion y crea una tabla llamada \"Pipeline_Inversionistas_2026\". Añade columnas: Nombre, Fondo/Ángel, Tesis (Sector preferido), Ticket Promedio ($10k-$50k USD), Contacto de Intro Cálida, Estado (Por Contactar, En Conversación, Due Diligence, Invertido) y Próximo Paso.",
      "Paso 2: En el buscador de LinkedIn, utiliza operadores booleanos: (\"Angel Investor\" OR \"Inversionista Ángel\" OR \"Venture Partner\") AND (\"Logística\" OR \"SaaS\" OR \"Retail\") AND [Tu País].",
      "Paso 3: Identifica si tienen contactos en común de primer grado. Si existe una conexión mutua, envía un mensaje breve solicitando una presentación informal de 2 líneas.",
      "Paso 4: Guarda en Notion notas de cada reunión, objeciones planteadas y envía una actualización mensual de métricas (Investor Update) para mantener el interés activo."
],
    ch3TacticalSteps: [
      "Semana 1: Define con precisión el monto a levantar y el uso exacto de los fondos proyectado a 18 meses de operación.",
      "Semana 2: Investiga 30 perfiles de inversionistas que hayan participado en rondas de empresas similares pero no competidoras directas.",
      "Semana 3: Consigue 10 presentaciones cálidas a través de tu red de contactos y programa las primeras reuniones de 30 minutos.",
      "Semana 4: Envía el resumen ejecutivo y responde las solicitudes de información adicional en menos de 24 horas."
],
    ch4CaseDeepDive: [
      "LogiFresh en Guadalajara necesitaba $150,000 USD para adquirir 4 camiones refrigerados y expandir su servicio de transporte para agricultores de aguacate y berries.",
      "En lugar de pedir créditos bancarios con intereses del 24%, mapearon a 40 empresarios jubilados y directivos del sector agroindustrial en Jalisco.",
      "Consiguieron reuniones con 8 de ellos demostrando que ya tenían contratos de servicio firmados con 5 exportadores y un margen operativo del 28%.",
      "Tres inversionistas ángeles aportaron $50,000 USD cada uno a cambio del 15% del capital total, y facilitaron contratos con 12 nuevos clientes corporativos en los primeros 6 meses."
],
    ch5RiskMitigation: [
      "Peligro grave: Aceptar inversionistas sin hacerles \"Diligencia Debida Inversa\" (Due Diligence del Fundador al Inversor).",
      "Pide siempre referencias a otros fundadores en los que ese inversionista haya invertido previamente: pregunta cómo se comporta en los momentos difíciles de la empresa.",
      "Evita ceder puestos de control mayoritario en la Junta Directiva en rondas iniciales.",
      "Nunca aceptes cláusulas de liquidación preferente abusivas (ej. 3x o 4x) que dejen a los fundadores sin nada en caso de una venta moderada del negocio."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Mapeo de Inversionistas y Gestión de Pipeline de Capital\". Ofrece este servicio a startups tecnológicas, franquicias, agroempresas y negocios de alto crecimiento que buscan capital semilla.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por mapeo e investigación de 25 inversionistas ángeles calificados para su sector en Notion. • Nivel Intermedio (Con portafolio): $130 - $270 USD por construcción del CRM de capital, redacción de correos de presentación y estrategia de warm intros. • Nivel Senior / Consultor Financiero: $350 - $650 USD por acompañamiento estratégico durante todo el proceso de levantamiento de ronda semilla.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], sé que estás en proceso de levantar capital para escalar [Empresa]. Enviar correos en frío a fondos suele ser una pérdida de tiempo porque casi todos son ignorados. Por solo $50 USD yo te construyo un Pipeline personalizado en Notion con 25 inversionistas ángeles verificados que invierten en tu sector y te entrego la estrategia de warm intros para conseguir reuniones efectivas en menos de 15 días. ¿Te gustaría ver un ejemplo del pipeline?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de CRM de Inversionistas en Notion con campos de tesis, ticket promedio y conexiones en común. Día 2: Contacta a 10 fundadores de startups en LinkedIn que estén buscando inversión y ofréceles tu base de datos calificada de ángeles."
],
    quizQuestions: [
      {
            "question": "¿Qué es una \"Warm Intro\" (Introducción Cálida) en el proceso de levantamiento de capital?",
            "options": [
                  "Un correo con letras rojas de alta temperatura.",
                  "Una presentación directa realizada por una persona de confianza mutua (como otro emprendedor invertido por él) hacia el inversionista.",
                  "Una llamada telefónica a medianoche.",
                  "Un mensaje masivo enviado a 10,000 personas en spam."
            ],
            "correctIndex": 1,
            "explanation": "Las introducciones cálidas tienen una tasa de respuesta hasta 10 veces mayor que los correos fríos porque vienen respaldadas por alguien conocido."
      },
      {
            "question": "¿Qué significa el término \"Smart Money\" (Dinero Inteligente) en el contexto de inversión privada?",
            "options": [
                  "Billetes con microchips de rastreo satelital.",
                  "Capital que viene acompañado de contactos comerciales, experiencia operativa en la industria y asesoría estratégica por parte del inversionista.",
                  "Dinero prestado por un banco a tasa cero.",
                  "Criptomonedas de alta volatilidad."
            ],
            "correctIndex": 1,
            "explanation": "El Smart Money acelera exponencialmente el crecimiento de una empresa gracias a las redes de contactos del inversionista."
      },
      {
            "question": "¿Por qué es fundamental realizar una \"Diligencia Debida Inversa\" a los posibles inversionistas antes de firmar un contrato?",
            "options": [
                  "Para saber cuánto dinero tienen en su cuenta bancaria personal.",
                  "Para verificar con otros fundadores cómo actúa ese inversionista ante crisis y evitar sumar socios conflictivos o tóxicos a la empresa.",
                  "Para pedirles que compren regalos a los empleados.",
                  "Para comprobar si saben usar hojas de cálculo."
            ],
            "correctIndex": 1,
            "explanation": "Elegir un mal socio inversionista puede destruir la cultura de la empresa o paralizar decisiones estratégicas clave."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-8
  // =========================================================================
  'mp-8': {
    frameworkName: "Estructura Narrativa de Pitch Deck de 12 Diapositivas (Modelo Sequoia & Guy Kawasaki)",
    coreMetrics: [
      "Tiempo de Retención por Diapositiva (< 20 segundos)",
      "Tasa de Solicitud de Reunión Post-Deck (> 25%)",
      "Claridad del Modelo de Negocio (Unit Economics)",
      "Tamaño de Mercado Demostrable (TAM / SAM / SOM)",
      "Densidad de Texto por Slide (< 35 palabras)"
],
    caseCompany: "Vitalix Telemedicina Ocupacional (Bogotá, Colombia)",
    caseOutcome: "Rediseñó su presentación de 45 diapositivas densas a un Pitch Deck conciso de 11 diapositivas en Pitch.com; logró captar $200,000 USD de inversión semilla tras presentarlo en 6 comités de inversión con una tasa de interés del 50%.",
    pitfall: "Crear presentaciones técnicas de 40 diapositivas llenas de párrafos diminutos y diagramas incomprensibles que aburren al inversionista en los primeros 60 segundos.",
    actionItem1: "Estructurar la presentación en 11 diapositivas obligatorias: Problema, Solución, Mercado, Tracción, Producto, Modelo de Negocio, Competencia, Equipo, Proyecciones Financieras, Pedido de Capital y Contacto.",
    actionItem2: "Diseñar diapositivas visuales con una sola idea principal por lámina, gráficos claros y un máximo de 30 a 35 palabras por pantalla.",
    actionItem3: "Preparar la versión de lectura (PDF para enviar por correo) y la versión de presentación oral (con apoyos visuales y poco texto).",
    domainContext: "Un Pitch Deck no tiene el objetivo de cerrar una inversión de inmediato, sino de despertar la suficiente curiosidad y convicción para conseguir la segunda reunión formal de Due Diligence.",
    strategicRationale: "Una narrativa ejecutiva impecable demuestra disciplina de pensamiento, capacidad de síntesis y respeto por el tiempo escaso de los inversionistas profesionales.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl tiempo promedio que un inversionista profesional dedica a revisar un Pitch Deck por primera vez es de exactamente 2 minutos y 41 segundos. Si tu presentación tiene 40 láminas llenas de texto diminuto y no explica claramente cómo ganas dinero en las primeras 3 diapositivas, terminarás en la papelera de reciclaje. Un Pitch Deck exitoso es una obra maestra de síntesis narrativa: 11 a 12 diapositivas visuales que demuestran problema agudo, solución validada, tracción real y métricas financieras transparentes.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Psicología de los 3 Minutos: Qué mira un inversionista en cada diapositiva y por qué la lámina de \"Tracción\" es la más importante.\n• Capítulo 2: La Estructura Canónica de 12 Diapositivas: El desglose paso a paso del modelo utilizado por Sequoia Capital y Y Combinator.\n• Capítulo 3: Diseño Visual sin Ser Diseñador: Regla de 30 palabras por lámina, jerarquía tipográfica, gráficos de tracción y mockups de producto.\n• Capítulo 4: Caso de Estudio Real (Vitalix Telemedicina): Cómo redujeron su presentación de 45 a 11 diapositivas y levantaron $200,000 USD en Bogotá.\n• Capítulo 5: Mitigación de Preguntas Asesinas en el Q&A: Cómo preparar el \"Apéndice Secreto\" con 10 diapositivas técnicas de respaldo.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer diseño y redacción de Pitch Decks ejecutivos cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Pitch (pitch.com) / Canva: Plantillas ejecutivas preconfiguradas con diseño profesional para inversionistas.\n2. Google Slides / Docs: Estructuración del guion narrativo y redacción de los puntos clave antes del diseño visual.\n3. DocSend / Notion: Envío con analítica en tiempo real para ver qué diapositivas lee el inversionista y cuánto tiempo pasa en cada una.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nCientos de emprendedores tienen negocios excelentes pero presentaciones horribles que no transmiten el verdadero valor de su empresa:\n• Nivel Junior: $40 – $80 USD por rediseño de Pitch Deck de 12 diapositivas en Canva/Pitch a partir del contenido del cliente.\n• Nivel Intermedio: $120 – $250 USD por estructuración narrativa completa, redacción de textos persuasivos, diseño visual y versión PDF.\n• Nivel Senior / Diseñador Estratégico de Pitch: $300 – $600 USD por Pitch Deck completo + modelo financiero resumido + preparación para el pitch oral.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Diseña un Pitch Deck demo de 12 diapositivas en Pitch.com para una startup ficticia de alta demanda.\nDía 2: Publica tu plantilla en LinkedIn y contacta a 10 emprendedores que estén buscando capital ofreciéndoles auditar su deck gratis.",
    ch1CustomNarrative: [
      "Un inversionista profesional recibe entre 20 y 50 presentaciones por semana; su trabajo inicial no es encontrar razones para invertir, sino descartar el 90% rápidamente para ahorrar tiempo.",
      "El propósito de un Pitch Deck no es explicar hasta el último detalle técnico de tu producto, sino encender una chispa de interés irresistible para conseguir una segunda reunión.",
      "La claridad es poder: si no puedes explicar tu modelo de negocio y propuesta de valor en 10 palabras sencillas, significa que tú mismo aún no lo tienes claro.",
      "Un diseño visual limpio, profesional y minimalista transmite que el equipo es ordenado, profesional y obsesivo con la calidad."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CREAR UN PITCH DECK DE 12 DIAPOSITIVAS EN PITCH.COM O CANVA GRATIS:",
      "Paso 1: Abre Pitch.com o Canva y selecciona la plantilla \"Startup Pitch Deck / Investor Presentation\".",
      "Paso 2: Estructura exactamente las 12 diapositivas: 1. Portada con Tagline de 1 línea. 2. Problema Validado (El dolor del cliente). 3. Solución / Propuesta de Valor. 4. Demostración del Producto / Mockup. 5. Tamaño de Mercado (TAM / SAM / SOM). 6. Tracción y Métricas (Gráfico de crecimiento de ventas). 7. Modelo de Negocio (Cómo ganamos dinero). 8. Análisis Competitivo (Matriz 2x2). 9. Estrategia de Crecimiento (Go-To-Market). 10. Equipo Fundador (Fotos y roles). 11. Proyecciones Financieras (3 años) + El Pedido (Monto de inversión y uso de fondos). 12. Contacto y Cierre.",
      "Paso 3: Aplica la regla tipográfica: Títulos en 36-44pt, subtítulos en 20-24pt, y texto de apoyo en 14-16pt. Nunca incluyas más de 35 palabras por lámina.",
      "Paso 4: Exporta en formato PDF de alta resolución (menos de 5 MB) y prueba leerlo en tu teléfono móvil para asegurar legibilidad total."
],
    ch3TacticalSteps: [
      "Paso 1: Escribe todo el contenido en un documento de texto en viñetas cortas antes de abrir cualquier programa de diseño.",
      "Paso 2: Resume cada diapositiva en un único título afirmativo que cuente una historia continua si se leen solo los encabezados.",
      "Paso 3: Diseña gráficos de barras simples y elegantes para mostrar el crecimiento mensual de clientes o facturación.",
      "Paso 4: Practica la exposición oral frente a un cronómetro: la presentación debe poder explicarse con soltura en menos de 5 minutos."
],
    ch4CaseDeepDive: [
      "Vitalix en Bogotá ofrecía exámenes médicos ocupacionales a distancia para empresas con trabajadores remotos pero su presentación original tenía 45 láminas con descripciones médicas aburridas.",
      "Los inversionistas perdían el hilo en la lámina 5 y nunca llegaban a ver que la empresa ya facturaba $12,000 USD mensuales.",
      "Reestructuraron la presentación a 11 láminas destacando en la lámina 3 que reducían el ausentismo laboral en un 35% y en la lámina 6 su crecimiento mensual del 22%.",
      "En solo 2 meses consiguieron $200,000 USD de inversión con inversionistas de Colombia y México."
],
    ch5RiskMitigation: [
      "Error típico: Incluir valoraciones de empresa absurdas o proyecciones financieras irreales (ej. \"capturaremos el 10% del mercado mundial en 6 meses\").",
      "Sé riguroso y conservador con los números: un inversionista detecta inmediatamente cuando las proyecciones no tienen sustento operativo.",
      "Evita decir \"no tenemos competencia\"; decir eso demuestra arrogancia o desconocimiento profundo de las alternativas que hoy usa el cliente.",
      "Ten siempre listo un \"Apéndice\" al final del documento con 5 a 10 diapositivas adicionales con detalles técnicos para responder preguntas específicas en la reunión."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño y Redacción de Pitch Deck Ejecutivo de 12 Diapositivas para Inversionistas\". Ayuda a emprendedores, fundadores de startups y dueños de negocio a transformar sus ideas en presentaciones de clase mundial.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por rediseño de Pitch Deck de 12 diapositivas en Canva/Pitch a partir del contenido del cliente. • Nivel Intermedio (Con portafolio): $120 - $250 USD por estructuración narrativa completa, redacción de textos persuasivos, diseño visual y versión PDF. • Nivel Senior / Diseñador Estratégico de Pitch: $300 - $600 USD por Pitch Deck completo + modelo financiero resumido + preparación para el pitch oral.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / LinkedIn): \"Hola [Nombre], sé lo importante que es dar una primera impresión impecable ante posibles inversionistas. Los fondos descartan el 90% de los proyectos si la presentación tiene mucho texto o no muestra tracción clara en los primeros 2 minutos. Por solo $45 USD yo te rediseño tu Pitch Deck en una estructura visual de 12 diapositivas de alto impacto en Pitch.com lista para enviar en PDF. ¿Te gustaría que revise tu presentación actual sin compromiso?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña un Pitch Deck demo de 12 diapositivas en Pitch.com para una startup ficticia de alta demanda. Día 2: Publica tu plantilla en LinkedIn y contacta a 10 emprendedores que estén buscando capital ofreciéndoles auditar su deck gratis."
],
    quizQuestions: [
      {
            "question": "¿Cuál es el tiempo promedio aproximado que un inversionista dedica a revisar un Pitch Deck en su primer vistazo?",
            "options": [
                  "Más de 2 horas analizando cada párrafo.",
                  "Menos de 3 minutos (aproximadamente entre 2 y 3 minutos).",
                  "Exactamente 24 horas continuas.",
                  "Una semana completa."
            ],
            "correctIndex": 1,
            "explanation": "Los inversionistas revisan decenas de presentaciones al día; la claridad y concisión en los primeros minutos son determinantes para no ser descartado."
      },
      {
            "question": "¿Cuál es la cantidad recomendada de diapositivas para un Pitch Deck inicial de presentación a inversionistas?",
            "options": [
                  "Entre 60 y 80 diapositivas para explicar absolutamente todo.",
                  "Entre 10 y 12 diapositivas visuales y estructuradas con precisión.",
                  "Una sola diapositiva con texto diminuto.",
                  "No se deben usar diapositivas nunca."
            ],
            "correctIndex": 1,
            "explanation": "Una estructura de 10 a 12 láminas cubre todos los puntos críticos (problema, solución, mercado, tracción, modelo, equipo, pedido) sin aburrir."
      },
      {
            "question": "¿Por qué nunca se debe afirmar en un Pitch Deck que la empresa \"no tiene competidores\"?",
            "options": [
                  "Porque la ley lo prohíbe explícitamente.",
                  "Porque demuestra desconocimiento del mercado; el cliente siempre tiene alternativas actuales (aunque sea resolver el problema manualmente con lápiz y papel).",
                  "Porque a los inversionistas no les gustan las empresas líderes.",
                  "Porque la competencia siempre compra tus acciones."
            ],
            "correctIndex": 1,
            "explanation": "Todo negocio compite contra alternativas existentes; reconocer a la competencia y explicar tu ventaja diferencial demuestra madurez ejecutiva."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-9
  // =========================================================================
  'mp-9': {
    frameworkName: "Modelo de Tabla de Capitalización (Cap Table), Simulación de Dilución Accionaria & Valuación Pre-Money",
    coreMetrics: [
      "Porcentaje de Dilución por Ronda (< 15-20%)",
      "Participación Accionaria Retenida por Fundadores (> 60% post-Serie A)",
      "Valuación Pre-Money / Post-Money",
      "Pool de Opciones para Empleados (ESOP 10-15%)",
      "Multiplicador de Retorno Esperado (MOIC)"
],
    caseCompany: "Plataforma PayLocal Pagos QR (Córdoba, Argentina)",
    caseOutcome: "Modeló su tabla de capitalización a 3 rondas en Google Sheets antes de firmar con inversionistas ángeles; evitó ceder el 40% inicial y negoció un instrumento SAFE con tope de valuación de $1.2M USD, reteniendo el 78% del control de la empresa en la Serie Semilla.",
    pitfall: "Ceder porcentajes excesivos de acciones (ej. 35% o 50%) en las etapas iniciales a cambio de montos pequeños, quedando los fundadores desmotivados o no invertibles para futuras rondas.",
    actionItem1: "Construir una simulación de Cap Table en Google Sheets para proyectar la dilución accionaria a través de Ronda Ángel, Semilla y Serie A.",
    actionItem2: "Utilizar acuerdos simples de capital futuro (como contratos SAFE o Notas Convertibles) para posponer la valuación exacta hasta una ronda formal.",
    actionItem3: "Reservar desde el inicio un 10% a 15% de acciones en un fondo de opciones (ESOP) para atraer y retener talento clave sin pagar sueldos corporativos gigantes.",
    domainContext: "La estrategia de financiamiento es el plan maestro de ingeniería societaria que define cuánto capital levantar, a qué costo de propiedad y en qué momento exacto de la madurez del negocio.",
    strategicRationale: "Proteger la participación accionaria de los fundadores es indispensable para mantener el incentivo de trabajo duro y cumplir con los requisitos de inversión institucional a largo plazo.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl error más trágico y permanente que comete un emprendedor es regalar el 40% o 50% de su empresa en los primeros 6 meses por unos pocos miles de dólares. Cuando el negocio crece y necesita levantar una ronda institucional de $500,000 USD, los fondos rechazan el proyecto porque los fundadores ya están hiper-diluidos y no tienen suficiente motivación económica. Este tomo te entrena en el modelado de Tablas de Capitalización (Cap Tables), instrumentos SAFE y notas convertibles para blindar tu patrimonio.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: Anatomía de la Dilución Accionaria: Por qué ceder más del 20% en tu primera ronda puede arruinar el futuro de tu empresa.\n• Capítulo 2: Valuación Pre-Money vs. Post-Money y Matemáticas del Cap Table: Cómo calcular exactamente qué porcentaje corresponde a cada dólar invertido.\n• Capítulo 3: Instrumentos Modernos de Inversión (SAFE y Notas Convertibles): Cómo levantar capital rápido con plantillas estándar sin negociar valuaciones complejas.\n• Capítulo 4: Caso de Estudio Real (PayLocal Pagos): Cómo los fundadores en Córdoba retuvieron el 78% de sus acciones negociando un SAFE con Cap.\n• Capítulo 5: Mitigación de Cláusulas Abusivas: Derechos de veto, cláusulas antidilución agresivas y bloqueos de venta.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de simulación de Cap Table y estrategia de rondas cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets (sheets.google.com): Simulador de Cap Table interactivo con fórmulas de dilución por rondas sucesivas y cálculo de ESOP.\n2. Y Combinator SAFE Templates (ycombinator.com/documents): Descarga y adaptación de contratos SAFE estándar reconocidos globalmente.\n3. Carta / Notion: Modelado visual de la estructura accionaria de socios e inversionistas.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nFundadores técnicos y creativos no entienden de finanzas corporativas y necesitan a alguien que les simule su dilución antes de sentarse con inversionistas:\n• Nivel Junior: $45 – $90 USD por diseño de simulador de Cap Table en Google Sheets para 2 rondas de inversión.\n• Nivel Intermedio: $140 – $280 USD por modelado financiero integral de rondas, estructuración de instrumentos SAFE y cálculo de dilución de socios.\n• Nivel Senior / Consultor Financiero de Startups: $350 – $700 USD por asesoría integral pre-ronda de financiamiento y defensa de valuación.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Construye el simulador de Cap Table con fórmulas en Google Sheets y verifica los cálculos de Pre/Post Money.\nDía 2: Contacta a 10 fundadores que estén anunciando levantamiento de capital en LinkedIn y ofréceles simular su dilución gratis.",
    ch1CustomNarrative: [
      "Las acciones de tu empresa son la moneda más cara del mundo: una vez que cedes un porcentaje de propiedad a un tercero, nunca más podrás recuperarlo.",
      "Muchos emprendedores primerizos se entusiasman cuando alguien les ofrece $30,000 USD a cambio del 40% de la compañía, creyendo que han tenido un golpe de suerte.",
      "Esa decisión condena a la empresa a muerte temprana: ningún fondo de inversión respetable invertirá en una etapa posterior si los fundadores fundadores poseen menos del 50% antes de escalar.",
      "Aprender a diseñar una estrategia de financiamiento escalonada te permite levantar el dinero necesario diluyendo la menor cantidad posible de patrimonio."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO MODELAR UN CAP TABLE Y SIMULAR DILUCIÓN EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Abre Google Sheets y crea la hoja \"Simulador_Cap_Table_Estrategico\". Diseña una tabla con columnas: Socio / Inversionista, Número de Acciones, Porcentaje Inicial (%), Monto Invertido ($), Valuación Pre-Money, Nuevas Acciones Emitidas y Porcentaje Post-Ronda (%).",
      "Paso 2: Aplica las fórmulas fundamentales: 1. Valuación Post-Money = Valuación Pre-Money + Monto Invertido. 2. Porcentaje Inversor = Monto Invertido / Valuación Post-Money. 3. Nuevas Acciones = Acciones Anteriores * (Porcentaje Inversor / (1 - Porcentaje Inversor)).",
      "Paso 3: Crea una segunda pestaña llamada \"Simulador_Instrumento_SAFE\". Añade los campos: Monto Invertido, Tasa de Descuento (ej. 20%) y Techo de Valuación (Valuation Cap).",
      "Paso 4: Conecta un gráfico circular (Pie Chart) que muestre visualmente cómo cambia la torta accionaria entre Fundador 1, Fundador 2, Empleados (ESOP) e Inversionistas tras cada ronda."
],
    ch3TacticalSteps: [
      "Semana 1: Formaliza legalmente la tenencia accionaria entre los fundadores con acuerdos de asignación temporal (Vesting a 4 años con 1 año de cliff).",
      "Semana 2: Modela el plan de contratación a 18 meses y aparta un 10% a 12% para el pool de opciones de empleados clave (ESOP).",
      "Semana 3: Descarga los modelos de contrato SAFE estándar de Y Combinator y adáptalos con tu abogado corporativo.",
      "Semana 4: Establece una regla estricta: nunca diluir a los fundadores más del 15% al 20% en una ronda inicial de capital semilla."
],
    ch4CaseDeepDive: [
      "PayLocal en Córdoba tenía una pasarela de cobro QR y un inversionista local les ofreció $60,000 USD pero exigía el 45% de la empresa en etapa de idea.",
      "Al simular su Cap Table en Google Sheets, los fundadores descubrieron que si aceptaban esa oferta, en la siguiente ronda de Serie Semilla tendrían menos del 25% combinado y perderían el control del directorio.",
      "Rechazaron la oferta y propusieron un instrumento SAFE con un techo de valuación de $1.2 millones USD a 4 inversionistas ángeles más pequeños, levantando $120,000 USD con una dilución de solo el 10%.",
      "Hoy la empresa opera en 3 países y los fundadores conservan más del 65% de las acciones tras 2 rondas de inversión institucional."
],
    ch5RiskMitigation: [
      "Error legal grave: Firmar acuerdos de inversión sin cláusula de Vesting para todos los cofundadores.",
      "Si un socio decide renunciar a los 4 meses de iniciar la empresa, no puede quedarse con el 50% de las acciones; las acciones deben liberarse mes a mes a lo largo de 4 años para proteger el proyecto.",
      "Evita los derechos de veto desproporcionados en asuntos operativos rutinarios.",
      "Asegúrate de que cualquier inversionista ángel firme acuerdos de confidencialidad y no competencia antes de recibir datos estratégicos de la empresa."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Modelado de Tabla de Capitalización (Cap Table) y Estrategia de Rondas de Inversión\". Ofrece este servicio a startups tecnológicas, proyectos de software y empresas en expansión antes de negociar con inversionistas.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por diseño de simulador de Cap Table en Google Sheets para 2 rondas de inversión. • Nivel Intermedio (Con portafolio): $140 - $280 USD por modelado financiero integral de rondas, estructuración de instrumentos SAFE y cálculo de dilución de socios. • Nivel Senior / Consultor Financiero de Startups: $350 - $700 USD por asesoría integral pre-ronda de financiamiento y defensa de valuación.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], felicidades por el crecimiento de [Empresa]. Vi que están preparando su primera ronda de inversión. El error más costoso que cometen los fundadores es ceder demasiadas acciones al inicio por no haber simulado su dilución a 2 o 3 rondas en un Cap Table profesional. Por solo $50 USD yo te entrego un modelo en Google Sheets con simulación de rondas SAFE y dilución para que defiendas tu porcentaje ante los inversionistas. ¿Te gustaría agendar una llamada breve esta semana?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Construye el simulador de Cap Table con fórmulas en Google Sheets y verifica los cálculos de Pre/Post Money. Día 2: Contacta a 10 fundadores que estén anunciando levantamiento de capital en LinkedIn y ofréceles simular su dilución gratis."
],
    quizQuestions: [
      {
            "question": "¿Qué es la \"Valuación Pre-Money\" de una empresa?",
            "options": [
                  "El dinero que tiene el fundador en su billetera antes de desayunar.",
                  "El valor asignado a la empresa antes de recibir la nueva inyección de dinero del inversionista.",
                  "El total de deudas que tiene la empresa con el banco.",
                  "El valor de liquidación de los computadores viejos."
            ],
            "correctIndex": 1,
            "explanation": "La valuación Pre-Money es el valor acordado de la compañía antes de que ingrese el capital nuevo; al sumarle la inversión se obtiene la valuación Post-Money."
      },
      {
            "question": "¿Qué es un acuerdo SAFE (Simple Agreement for Future Equity)?",
            "options": [
                  "Un seguro contra incendios en la oficina.",
                  "Un instrumento financiero estándar que otorga al inversionista el derecho a recibir acciones en el futuro cuando ocurra una ronda formal, sin fijar una valuación rígida de inmediato.",
                  "Un contrato de trabajo para pasantes.",
                  "Un préstamo bancario con garantía hipotecaria."
            ],
            "correctIndex": 1,
            "explanation": "El SAFE simplifica y abarata enormemente el proceso legal de levantar capital inicial sin incurrir en deudas ni trámites notariales complejos."
      },
      {
            "question": "¿Por qué es indispensable incluir una cláusula de \"Vesting\" (asignación gradual de acciones a 4 años) para los cofundadores?",
            "options": [
                  "Para que los empleados no puedan renunciar nunca.",
                  "Para garantizar que si un socio abandona el proyecto en los primeros meses, no se lleve un porcentaje gigante de acciones sin haber trabajado por el éxito de la empresa.",
                  "Para pagar menos impuestos municipales.",
                  "Para regalar las acciones a los clientes."
            ],
            "correctIndex": 1,
            "explanation": "El vesting protege a la empresa y a los fundadores comprometidos evitando que un socio desertor retenga acciones sin aportar valor."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-10
  // =========================================================================
  'mp-10': {
    frameworkName: "Gestión Estratégica de Microcréditos Productivos, Análisis de TCO & Retorno del Activo (ROA)",
    coreMetrics: [
      "Retorno sobre el Activo Financiado (ROA > 2.5x el Costo del Crédito)",
      "Tasa de Costo Efectivo Anual (TCEA)",
      "Ratio de Cobertura de la Cuota con Flujo Propio (> 1.8x)",
      "Días de Recuperación de la Inversión (Payback < 12 meses)",
      "Índice de Endeudamiento sobre Patrimonio"
],
    caseCompany: "Taller de Carpintería Moderna DecoWood (Arequipa, Perú)",
    caseOutcome: "Solicitó un microcrédito productivo de $3,800 USD para adquirir una máquina escuadradora industrial; aumentó su capacidad de corte en un 300%, redujo el desperdicio de madera en un 18% y pagó el préstamo en 10 meses con los ahorros generados por la propia máquina.",
    pitfall: "Solicitar microcréditos para pagar gastos corrientes (alquileres atrasados, deudas personales o nóminas) en lugar de invertirlos en activos productivos que generen flujo de caja directo.",
    actionItem1: "Calcular el Retorno del Activo: Asegurar matemáticamente que la maquinaria o inventario financiado genere mensualmente al menos el doble del valor de la cuota del préstamo.",
    actionItem2: "Comparar la Tasa de Costo Efectivo Anual (TCEA) entre 3 entidades microfinancieras o cooperativas reguladas, evitando comisiones y seguros ocultos.",
    actionItem3: "Establecer un plazo de amortización más corto que la vida útil del activo adquirido y con cuotas fijas que no superen el 20% del flujo libre mensual.",
    domainContext: "Un microcrédito es una palanca financiera de precisión: si se utiliza para adquirir un activo que multiplica la producción o reduce costos, acelera el negocio; si se usa para tapar huecos de caja, acelera la quiebra.",
    strategicRationale: "El acceso inteligente al microcrédito construye historial crediticio bancario formal y permite a los pequeños talleres y comercios dar el salto de operaciones artesanales a manufactura eficiente.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nMillones de microempresarios en América Latina le temen a los préstamos o caen en las garras de prestamistas informales y usureros con tasas de interés destructivas. La deuda no es mala en sí misma: la deuda mala es la que se utiliza para pagar gastos de consumo o deudas personales, mientras que la deuda productiva es aquella que compra una máquina o inventario que genera 3 veces más dinero de lo que cuesta pagar la cuota. Este tomo te enseña a evaluar, calcular y aprovechar los microcréditos formales como una palanca de crecimiento acelerado.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: Deuda Tóxica vs. Deuda Productiva: La regla de oro para saber si un crédito multiplicará tus ingresos o destruirá tu tranquilidad.\n• Capítulo 2: La TCEA Real y Letras Pequeñas: Cómo comparar entidades microfinancieras, cooperativas y bancos evitando seguros y comisiones infladas.\n• Capítulo 3: El Modelo de Retorno sobre el Activo (ROA): Cálculo de la cuota mensual vs. ahorro o ingreso extra generado por la maquinaria.\n• Capítulo 4: Caso de Estudio Real (DecoWood Carpintería): Cómo un microcrédito de $3,800 USD en Arequipa triplicó su producción y se pagó solo en 10 meses.\n• Capítulo 5: Mitigación de Sobreendeudamiento: Qué hacer ante una caída temporal de ventas para no caer en mora bancaria.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de evaluación y armado de expedientes para microcréditos cobrando entre $25 y $450 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets (sheets.google.com): Simulador de Amortización Francesa / Cuota Fija con cálculo de TCEA y análisis de flujo de retorno del activo.\n2. Portales Oficiales de Supervisión Bancaria: Comparadores de tasas de interés de entidades microfinancieras reguladas en tu país.\n3. Google Docs: Plantilla de Expediente de Solicitud de Crédito Productivo con justificación técnica y financiera para el analista de crédito.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nDueños de talleres mecánicos, panaderías, carpinterías, tiendas y confecciones quieren comprar maquinaria pero no saben cómo pedir un crédito formal ni calcular si les conviene:\n• Nivel Junior: $25 – $50 USD por cálculo de amortización y corrida financiera del crédito en Google Sheets.\n• Nivel Intermedio: $75 – $160 USD por preparación del expediente técnico-financiero completo y evaluación de capacidad de pago para el banco.\n• Nivel Senior: $200 – $450 USD por consultoría integral de financiamiento de activos y renegociación de deudas comerciales para microempresas.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la plantilla de simulación de microcrédito productivo en Google Sheets con fórmulas de cuota fija y retorno mensual.\nDía 2: Visita 5 talleres o pequeños negocios de tu zona y ofréceles evaluar sin costo si la compra de una máquina nueva se paga sola con su propio flujo.",
    ch1CustomNarrative: [
      "Existe un mito muy extendido en nuestra región que dice que todas las deudas son malas y que un negocio prudente jamás debe pedir dinero prestado.",
      "La realidad económica demuestra lo contrario: el crédito productivo es una de las herramientas más potentes para multiplicar la capacidad de trabajo de un emprendedor.",
      "La diferencia crucial está en el destino del dinero: endeudarse para pagar vacaciones, ropa o deudas atrasadas es un suicidio financiero; endeudarse para comprar una máquina que triplica la producción y se paga sola con el trabajo extra es una decisión inteligente.",
      "Aprender a calcular el costo real de un crédito y estructurar su pago te da una ventaja competitiva enorme frente a quienes trabajan solo con ahorros lentos."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CALCULAR LA AMORTIZACIÓN Y RETORNO DE UN MICROCRÉDITO EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Abre Google Sheets y crea la hoja \"Simulador_Microcredito_Productivo\". Ingresa las variables: Monto del Préstamo ($), Tasa de Interés Mensual (%), Plazo en Meses y Gastos/Seguros adicionales.",
      "Paso 2: Calcula la cuota mensual fija utilizando la fórmula financiera: =PAGO(Tasa_Mensual, Plazo_Meses, -Monto_Prestamo).",
      "Paso 3: Añade la sección \"Ingresos Adicionales Generados por el Activo\": Unidades extras producidas al mes * Ganancia neta por unidad. Configura la celda de Cobertura: =Ingreso_Extra / Cuota_Mensual.",
      "Paso 4: Si la cobertura es superior a 1.5x (el ingreso extra cubre la cuota y deja un 50% de ganancia líquida adicional), el crédito es viable y rentable."
],
    ch3TacticalSteps: [
      "Paso 1: Visita al menos 3 entidades financieras (cajas municipales, cooperativas de crédito y bancos) y solicita la hoja de resumen con la TCEA exacta.",
      "Paso 2: Elabora un documento sencillo con fotos de tu taller, estados de cuenta de ventas de los últimos 6 meses y la cotización de la maquinaria a comprar.",
      "Paso 3: Solicita que el desembolso se realice directamente al proveedor de la maquinaria para agilizar la aprobación del analista de crédito.",
      "Paso 4: En cuanto la máquina empiece a operar, separa el monto de la cuota mensual en una cuenta separada desde los primeros 10 días de cada mes."
],
    ch4CaseDeepDive: [
      "DecoWood en Arequipa fabricaba muebles de melamina cortando los tableros manualmente con sierras de mano, lo que provocaba astillamientos y demoraba 3 días por mueble.",
      "Solicitaron un microcrédito productivo de $3,800 USD a 18 meses con una cuota mensual de $265 USD para comprar una máquina escuadradora con corte de precisión.",
      "Con la máquina nueva redujeron el tiempo de corte a solo 4 horas por mueble y aumentaron sus entregas de 6 a 18 muebles mensuales, generando $1,400 USD de ganancia neta adicional cada mes.",
      "Pagaron la totalidad del préstamo en solo 10 meses sin un solo retraso y hoy tienen una línea de crédito comercial preferencial de $20,000 USD."
],
    ch5RiskMitigation: [
      "Trampa peligrosa: Recurrir a prestamistas informales o préstamos \"gota a gota\" que cobran intereses diarios usurarios (más del 20% mensual) con métodos de cobranza extorsivos.",
      "Acude siempre y exclusivamente a entidades financieras legalmente supervisadas y reguladas por la superintendencia de banca de tu país.",
      "Nunca pongas en garantía bienes esenciales para la vida de tu familia si el monto del préstamo es pequeño.",
      "Si prevés un mes de bajas ventas por estacionalidad, avisa a tu entidad financiera con 15 días de anticipación para solicitar una reprogramación preventiva antes de caer en mora."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Preparación de Expedientes Financieros y Solicitudes de Microcréditos para Emprendedores\". Ayuda a pequeños talleres, fábricas y comercios a armar su documentación y evaluar la viabilidad de créditos productivos.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $25 - $50 USD por cálculo de amortización y corrida financiera del crédito en Google Sheets. • Nivel Intermedio (Con portafolio): $75 - $160 USD por preparación del expediente técnico-financiero completo y evaluación de capacidad de pago para el banco. • Nivel Senior / Asesor Microfinanciero: $200 - $450 USD por consultoría integral de financiamiento de activos y renegociación de deudas comerciales para microempresas.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / Presencial): \"Hola [Nombre], sé que para hacer crecer tu taller o negocio muchas veces se necesita comprar una máquina mejor o más inventario, pero da miedo endeudarse sin saber si los números van a dar. Por solo $30 USD yo te calculo exactamente la cuota del microcrédito, demuestro si la máquina se paga sola con la ganancia extra y te armo el expediente financiero listo para presentar al banco y conseguir la mejor tasa de interés. ¿Te gustaría que hagamos el cálculo esta semana?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de simulación de microcrédito productivo en Google Sheets con fórmulas de cuota fija y retorno mensual. Día 2: Visita 5 talleres o pequeños negocios de tu zona y ofréceles evaluar sin costo si la compra de una máquina nueva se paga sola con su propio flujo."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la diferencia fundamental entre una deuda tóxica y una deuda productiva?",
            "options": [
                  "La deuda tóxica se pide en billetes nuevos y la productiva en monedas.",
                  "La deuda productiva financia activos (como maquinaria o inventario) que generan un ingreso superior al costo del crédito, mientras que la deuda tóxica financia gastos de consumo o pérdidas operativas.",
                  "No hay ninguna diferencia; todas las deudas son iguales.",
                  "La deuda productiva es obligatoria por ley."
            ],
            "correctIndex": 1,
            "explanation": "La deuda productiva crea riqueza porque el activo adquirido produce más dinero del que cuesta pagar las cuotas e intereses del préstamo."
      },
      {
            "question": "¿Qué es la Tasa de Costo Efectivo Anual (TCEA)?",
            "options": [
                  "Un impuesto municipal sobre los muebles de la oficina.",
                  "La tasa real que incluye no solo los intereses, sino también todas las comisiones, seguros obligatorios y gastos administrativos del préstamo.",
                  "El sueldo del gerente del banco.",
                  "Un descuento especial para clientes nuevos."
            ],
            "correctIndex": 1,
            "explanation": "La TCEA es la única métrica transparente y comparable para saber cuánto cuesta realmente un crédito bancario con todos sus cobros ocultos."
      },
      {
            "question": "¿Por qué nunca se debe acudir a prestamistas informales o métodos de cobro diario (\"gota a gota\")?",
            "options": [
                  "Porque sus tasas de interés son usureras y sus métodos de cobro ponen en grave riesgo la integridad física y la estabilidad de la empresa.",
                  "Porque no regalan calendarios a fin de año.",
                  "Porque exigen pagar con tarjetas de crédito internacionales.",
                  "Porque sus oficinas son muy bonitas."
            ],
            "correctIndex": 0,
            "explanation": "El crédito informal destruye financieramente los negocios mediante tasas ilegales y prácticas abusivas de cobranza."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-11
  // =========================================================================
  'mp-11': {
    frameworkName: "Matriz de Blindaje Anti-Fugas Financieras & Protocolo de 15 Puntos de Control de Riesgo",
    coreMetrics: [
      "Índice de Vulnerabilidad de Caja (< 20%)",
      "Tasa de Gastos Hormiga Eliminados (> $300 USD/mes)",
      "Cobertura de Seguros Operativos",
      "Cumplimiento del Calendario Fiscal (100% a tiempo)",
      "Rotación de Cuentas por Cobrar Críticas"
],
    caseCompany: "Restaurante y Catering Sabor & Brasa (Cali, Colombia)",
    caseOutcome: "Detectó 3 fugas financieras críticas (compras de insumos sin cotización previa, uso de la tarjeta del negocio para gastos personales y multas fiscales por declaraciones tardías); eliminó $1,850 USD en pérdidas mensuales y pasó de números rojos a un margen neto del 14% en 5 meses.",
    pitfall: "Tratar el dinero de la empresa como una alcancía personal sin auditorías ni controles cruzados, provocando descalce de caja y deudas sorpresa.",
    actionItem1: "Aplicar la lista de verificación de 15 puntos de control financiero en Google Sheets cada primer viernes de mes.",
    actionItem2: "Eliminar el pago en efectivo no documentado: cualquier desembolso mayor a $20 USD debe contar con factura o comprobante legal.",
    actionItem3: "Establecer doble firma o autorización de 2 personas para transferencias bancarias que superen los $250 USD.",
    domainContext: "La rentabilidad de un negocio no solo se construye vendiendo más, sino tapando las grietas invisibles por donde se escapa el dinero cada día.",
    strategicRationale: "Un sistema estricto de control interno protege el patrimonio del negocio contra fraudes, negligencias y sanciones tributarias irreversibles.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 65% de las quiebras comerciales no son causadas por falta de clientes, sino por errores internos de gestión financiera totalmente evitables: pagar deudas personales con la tarjeta del negocio, comprar mercancía cara por urgencia sin cotizar, ignorar las fechas de impuestos hasta que llega una multa o permitir que los empleados paguen en efectivo sin comprobantes. Este tomo te entrena en la Matriz de Blindaje Anti-Fugas Financieras para auditar y proteger tu dinero contra los 10 errores más destructivos.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: Los 10 Errores Fatales que Matan a las PYMEs: Mezcla de cuentas, falta de reserva, fiar sin contrato y compras reactivas.\n• Capítulo 2: La Matriz de 15 Puntos de Control Interno: Protocolo para auditar compras, conciliaciones bancarias, nóminas y retenciones.\n• Capítulo 3: Protocolo de Doble Autorización y Registro de Comprobantes: Cómo erradicar el efectivo no controlado en menos de 7 días.\n• Capítulo 4: Caso de Estudio Real (Restaurante Sabor & Brasa): Cómo taparon $1,850 USD en fugas mensuales en Cali y salvaron su empresa.\n• Capítulo 5: Mitigación de Fraudes Internos y Malversación: Controles para compras a proveedores y revisión de inventarios sorpresa.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer auditorías de blindaje financiero y control de fugas cobrando entre $35 y $500 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets (sheets.google.com): Matriz de Auditoría de Salud Financiera y Detección de Fugas con semáforos de riesgo automáticos.\n2. Google Drive: Estructura de carpetas compartidas para archivar comprobantes digitales organizados por mes y proveedor.\n3. Alertas Bancarias SMS/Móvil: Configuración de notificaciones instantáneas para cualquier movimiento bancario en la cuenta empresarial.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nRestaurantes, talleres, tiendas, hoteles boutique y despachos profesionales sufren por desorden financiero interno y necesitan orden:\n• Nivel Junior: $35 – $65 USD por auditoría de 15 puntos de control en Google Sheets + reporte de fugas detectadas.\n• Nivel Intermedio: $95 – $190 USD por implementación del protocolo de control interno, manual de compras y archivo digital de comprobantes.\n• Nivel Senior: $250 – $500 USD por blindaje financiero integral y auditoría preventiva trimestral contra riesgos fiscales.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la Matriz de 15 Puntos de Control Financiero en Google Sheets con fórmulas de porcentaje de riesgo.\nDía 2: Contacta a 10 dueños de negocios gastronómicos o comerciales y ofréceles una revisión rápida de 30 minutos de sus puntos de fuga.",
    ch1CustomNarrative: [
      "Una empresa es como un balde de agua: no sirve de nada abrir el grifo de las ventas al máximo si el fondo del balde está lleno de agujeros invisibles.",
      "Los errores financieros rara vez ocurren de golpe; son pequeñas decisiones imprudentes y hábitos desordenados que se acumulan silenciosamente mes tras mes.",
      "Cuando el dueño de un negocio no tiene controles claros, el dinero se evapora en compras de emergencia a sobreprecio, intereses por pagos tardíos y retiros personales desmedidos.",
      "Aprender a blindar tu operación financiera te permite retener la mayor parte de lo que ganas y construir una empresa sólida y duradera."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO REALIZAR UNA AUDITORÍA ANTI-FUGAS EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Abre Google Sheets y crea la hoja \"Matriz_Blindaje_Financiero\". Lista 15 puntos de control divididos en 3 áreas: 1. Control de Compras (Cotizaciones previas, comprobantes válidos). 2. Control de Caja y Bancos (Conciliación semanal, separación de cuentas). 3. Obligaciones Legales y Fiscales (Impuestos al día, licencias vigentes).",
      "Paso 2: Agrega columnas: \"Estado de Cumplimiento\" (Cumple / En Riesgo / No Cumple) y \"Impacto Económico Estimado ($ USD)\".",
      "Paso 3: Configura una fórmula de riesgo global: =CONTAR.SI(Estado, \"No Cumple\") / 15. Si el resultado es superior al 25%, la matriz emite una alerta roja de vulnerabilidad crítica.",
      "Paso 4: Crea un plan de acción correctivo con responsable y fecha límite de resolución para cada punto marcado en riesgo."
],
    ch3TacticalSteps: [
      "Paso 1: Exige que para cualquier compra superior a $100 USD se presenten al menos 2 cotizaciones de proveedores diferentes.",
      "Paso 2: Prohíbe terminantemente retirar dinero de la cuenta del negocio para compras personales del hogar.",
      "Paso 3: Programa en tu calendario digital las fechas de pago de impuestos 5 días antes de la fecha límite oficial del fisco.",
      "Paso 4: Realiza un arqueo sorpresivo de inventario y caja chica una vez al mes para evitar pérdidas desconocidas."
],
    ch4CaseDeepDive: [
      "Sabor & Brasa en Cali tenía lleno su salón todos los fines de semana pero los socios debían dinero a los proveedores de carne y verdura.",
      "Al aplicar la matriz de auditoría descubrieron que el cocinero compraba insumos en el supermercado minorista en lugar de la central de abastos (35% de sobreprecio) y que pagaban $400 USD mensuales en multas por presentar impuestos con retraso.",
      "Centralizaron las compras semanales con proveedores mayoristas y automatizaron las declaraciones tributarias.",
      "En 5 meses eliminaron $1,850 USD en pérdidas mensuales y acumularon $9,000 USD de reserva en su cuenta."
],
    ch5RiskMitigation: [
      "Error común: Confiar ciegamente en un solo empleado para la compra, recepción y pago de mercancías.",
      "Principio de segregación de funciones: La persona que pide la mercancía no debe ser la misma que autoriza la transferencia bancaria.",
      "Evita acumular deudas de tarjetas de crédito con intereses rotativos (más del 35% anual).",
      "Contrata un seguro básico de responsabilidad civil y daños para proteger tus instalaciones contra imprevistos."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Auditoría de Blindaje Financiero y Detección de Fugas de Caja para PYMEs\". Ofrece este servicio a comercios, restaurantes, clínicas y empresas de servicios para tapar pérdidas invisibles.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $35 - $65 USD por auditoría de 15 puntos de control en Google Sheets + reporte de fugas detectadas. • Nivel Intermedio (Con portafolio): $95 - $190 USD por implementación del protocolo de control interno, manual de compras y archivo digital de comprobantes. • Nivel Senior / Consultor Financiero: $250 - $500 USD por blindaje financiero integral y auditoría preventiva trimestral contra riesgos fiscales.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / Correo): \"Hola [Nombre], en negocios con mucho movimiento como [Empresa] es común que se escapen entre $200 y $800 USD al mes en compras de urgencia a sobreprecio, gastos duplicados o intereses por retrasos de pago. Por solo $35 USD yo realizo una Auditoría de Blindaje Financiero de 15 puntos en Google Sheets para identificar exactamente dónde están las fugas de tu negocio y cómo cerrarlas de inmediato. ¿Te gustaría que hagamos una sesión de diagnóstico?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la Matriz de 15 Puntos de Control Financiero en Google Sheets con fórmulas de porcentaje de riesgo. Día 2: Contacta a 10 dueños de negocios gastronómicos o comerciales y ofréceles una revisión rápida de 30 minutos de sus puntos de fuga."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la causa más común de quiebra en pequeñas empresas con ventas activas?",
            "options": [
                  "Tener demasiados clientes comprando.",
                  "La fuga invisible de capital por falta de controles internos, compras a sobreprecio y descalce de cobros vs. pagos.",
                  "Pagar sueldos a tiempo.",
                  "Tener una página web bonita."
            ],
            "correctIndex": 1,
            "explanation": "Las fugas de dinero no detectadas erosionan el margen de ganancia hasta dejar a la empresa sin liquidez operativa."
      },
      {
            "question": "¿Qué es el principio de \"Segregación de Funciones\" en el control financiero?",
            "options": [
                  "Dividir la oficina en dos plantas.",
                  "Asegurar que la persona que autoriza una compra no sea la misma que realiza el pago ni la que recibe la mercancía, evitando fraudes y errores.",
                  "Separar a los empleados por colores de camisa.",
                  "No permitir que los socios hablen entre sí."
            ],
            "correctIndex": 1,
            "explanation": "La segregación de funciones crea un sistema de control cruzado que protege el dinero de la empresa contra fraudes o negligencias."
      },
      {
            "question": "¿Por qué se debe exigir un mínimo de 2 cotizaciones antes de realizar compras mayores en el negocio?",
            "options": [
                  "Para perder el tiempo en llamadas.",
                  "Para comparar precios, calidades y plazos de pago, asegurando que la empresa no pague sobreprecios por compras impulsivas de urgencia.",
                  "Porque el banco lo exige para abrir una cuenta.",
                  "Para molestar a los proveedores."
            ],
            "correctIndex": 1,
            "explanation": "Comparar cotizaciones genera disciplina de compra y permite ahorrar entre un 10% y un 30% en costos de insumos."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-12
  // =========================================================================
  'mp-12': {
    frameworkName: "Estado de Resultados Operativo (P&L Dinámico), Margen de Contribución & Análisis de EBITDA",
    coreMetrics: [
      "Margen Bruto Porcentual (> 45%)",
      "Margen Operativo / EBITDA (> 15%)",
      "Margen Neto Final (> 10%)",
      "Punto de Equilibrio en Unidades y Dinero",
      "Costo de Ventas (COGS) vs. Gastos Operativos (OpEx)"
],
    caseCompany: "Estudio de Diseño & Branding PixelCraft (Montevideo, Uruguay)",
    caseOutcome: "Implementó un P&L dinámico en Google Sheets clasificando proyectos por línea de servicio; descubrió que los servicios de gestión de redes sociales operaban con margen neto negativo (-4%) mientras que el diseño de marcas dejaba un 48% de margen; reestructuró su catálogo y duplicó su utilidad neta en 6 meses.",
    pitfall: "Mirar únicamente el total facturado a fin de mes sin desglosar el Costo de Ventas ni calcular el margen real que deja cada línea de producto o servicio.",
    actionItem1: "Construir un Estado de Resultados (P&L) estructurado: Ingresos - Costos Directos = Margen Bruto; Margen Bruto - Gastos Operativos = Utilidad Operativa; Utilidad Operativa - Impuestos = Utilidad Neta.",
    actionItem2: "Calcular el Margen de Contribución por cada servicio o producto individual para eliminar o rediseñar los que tengan margen bajo.",
    actionItem3: "Fijar el Punto de Equilibrio mensual: Monto mínimo exacto que el negocio debe facturar para no ganar ni perder dinero.",
    domainContext: "El Estado de Pérdidas y Ganancias (P&L) es la radiografía médica de la rentabilidad: revela si el modelo de negocio es una máquina de crear valor o una trampa de trabajo no remunerado.",
    strategicRationale: "Comprender el P&L permite a la dirección tomar decisiones quirúrgicas sobre precios, recortes de costos y contratación con certeza matemática.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nLa mayoría de los pequeños empresarios en América Latina cometen el gravísimo error de pensar que si facturan $10,000 USD al mes y gastan $8,000 USD, están ganando $2,000 USD limpios. Cuando no desglosan los costos directos de entrega (COGS) de los gastos fijos de operación (OpEx), no saben qué productos les dan a ganar y cuáles les están costando dinero. Este tomo te entrena en la construcción y lectura del Estado de Pérdidas y Ganancias (P&L) profesional para optimizar tus márgenes y encontrar tu punto de equilibrio exacto.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Anatomía del P&L: Ingresos Netos, Margen Bruto, OpEx, EBITDA y Utilidad Neta explicados de forma clara y sin tecnicismos.\n• Capítulo 2: El Margen de Contribución por Producto/Servicio: Cómo saber qué líneas de negocio financian a la empresa y cuáles son parásitos.\n• Capítulo 3: Cálculo del Punto de Equilibrio (Break-Even Point): La fórmula matemática para saber cuántos días de venta necesitas al mes para cubrir costos.\n• Capítulo 4: Caso de Estudio Real (PixelCraft Estudio): Cómo descubrieron que un servicio les daba pérdidas y duplicaron su utilidad en Montevideo.\n• Capítulo 5: Mitigación de Precios con Margen Ilusorio: Cómo calcular correctamente el costo de la mano de obra del propio dueño en el P&L.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer la construcción y mantenimiento mensual del P&L para negocios cobrando entre $35 y $550 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets (sheets.google.com): Plantilla automatizada de Estado de Resultados (P&L) con fórmulas de porcentajes verticales y horizontales.\n2. Wave Accounting (waveapps.com): Exportación de reportes de P&L automáticos clasificados por cuentas contables.\n3. Calculadora de Punto de Equilibrio en Google Sheets con gráficos dinámicos de costos fijos vs. variables.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nCientos de agencias, talleres, comercios y prestadores de servicios no tienen un P&L mensual y viven en la oscuridad financiera:\n• Nivel Junior: $35 – $70 USD por construcción del P&L histórico de los últimos 6 meses en Google Sheets.\n• Nivel Intermedio: $100 – $200 USD/mes por llevar el P&L mensual actualizado, cálculo de márgenes y reunión de análisis con el dueño.\n• Nivel Senior: $260 – $550 USD/mes por consultoría de optimización de rentabilidad, pricing y reestructuración de catálogo de servicios.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Diseña la plantilla modelo de P&L en Google Sheets con fórmulas de Margen Bruto, EBITDA y Utilidad Neta.\nDía 2: Contacta a 10 prestadores de servicios o comercios locales y ofréceles calcular su punto de equilibrio sin costo.",
    ch1CustomNarrative: [
      "Vender mucho sin conocer tu Estado de Pérdidas y Ganancias (P&L) es como acelerar un automóvil en una carretera de montaña con los ojos vendados.",
      "El P&L no es un documento aburrido para el contador o la oficina de impuestos; es la brújula directiva que te dice exactamente si tu esfuerzo diario está generando riqueza o solo moviendo dinero de mano en mano.",
      "Muchos negocios que parecen exitosos por fuera están carcomidos por dentro porque sus costos de entrega son tan altos que cada venta adicional reduce su margen neto.",
      "Aprender a leer tu P&L te da el poder de fijar precios justos, eliminar costos improductivos y garantizar que cada mes termine con dinero real en tu bolsillo."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UN ESTADO DE RESULTADOS (P&L) EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Abre Google Sheets y crea la hoja \"Estado_Resultados_PL_Mensual\". Estructura las filas: 1. Ingresos Totales por Ventas. 2. (-) Costo Directo de Ventas (COGS - Materia prima, insumos, mano de obra directa). 3. (=) Margen Bruto (=Ingresos - COGS).",
      "Paso 2: Agrega la sección de Gastos Operativos (OpEx): Alquiler, Servicios, Software, Marketing, Salarios Administrativos. 4. (=) Utilidad Operativa / EBITDA (=Margen Bruto - OpEx).",
      "Paso 3: Añade: 5. (-) Impuestos y Gastos Financieros. 6. (=) Utilidad Neta Final (=EBITDA - Impuestos).",
      "Paso 4: Añade una columna de \"Análisis Vertical %\": divide cada partida entre los Ingresos Totales (=Celda / Ingresos_Totales). Aplica formato de porcentaje para ver qué porcentaje de cada venta se destina a insumos, a nómina y a utilidad líquida."
],
    ch3TacticalSteps: [
      "Semana 1: Revisa las facturas de ventas del último mes y separa los ingresos por cada línea de producto o servicio principal.",
      "Semana 2: Calcula el costo directo exacto que requiere entregar cada servicio (horas de personal + insumos utilizados).",
      "Semana 3: Ingresa los datos en tu plantilla de P&L y calcula el porcentaje de Margen Bruto de cada línea.",
      "Semana 4: Elimina o sube los precios de cualquier producto que tenga un Margen Bruto inferior al 35% en tu negocio."
],
    ch4CaseDeepDive: [
      "PixelCraft en Montevideo facturaba $18,000 USD al mes con un equipo de 5 diseñadores, pero a fin de mes apenas quedaban $500 USD de utilidad para los socios.",
      "Al construir su P&L por líneas de servicio descubrieron que el servicio de manejo de redes sociales demandaba el 60% de las horas del equipo pero solo representaba el 25% de los ingresos, generando pérdidas netas.",
      "Decidieron paquetizar solo proyectos de identidad de marca de alto valor ($2,500 USD por proyecto) y cancelaron los contratos de redes con clientes morosos.",
      "En 6 meses aumentaron su utilidad neta a $5,400 USD mensuales trabajando con menos clientes y con un equipo más motivado."
],
    ch5RiskMitigation: [
      "Error muy común: Olvidar incluir el sueldo del propio dueño dentro de los costos del P&L.",
      "Si el dueño trabaja 50 horas semanales gratis, la empresa parece rentable sobre el papel, pero en realidad está subsidiada por el trabajo no pagado del fundador.",
      "Asigna siempre un sueldo de mercado al fundador en el rubro de gastos operativos antes de calcular la verdadera utilidad neta.",
      "Monitorea el P&L mes a mes de forma comparativa para detectar tendencias de aumento en costos de insumos antes de que devoren tu margen."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Construcción y Mantenimiento del Estado de Resultados (P&L) Mensual para Pequeños Negocios\". Ofrece este servicio a agencias, clínicas, restaurantes, talleres y empresas comerciales que no conocen su rentabilidad real.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $35 - $70 USD por construcción del P&L histórico de los últimos 6 meses en Google Sheets. • Nivel Intermedio (Con portafolio): $100 - $200 USD/mes por llevar el P&L mensual actualizado, cálculo de márgenes y reunión de análisis con el dueño. • Nivel Senior / Consultor Financiero: $260 - $550 USD/mes por consultoría de optimización de rentabilidad, pricing y reestructuración de catálogo de servicios.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / LinkedIn): \"Hola [Nombre], muchos dueños de empresa en nuestro sector facturan bien pero a fin de mes no saben exactamente cuánto les queda de ganancia limpia ni qué servicios les dejan más margen. Por solo $35 USD yo te construyo tu Estado de Resultados (P&L) en Google Sheets con desglose de márgenes por producto y punto de equilibrio para que tomes decisiones con números claros. ¿Te gustaría que organicemos tus cifras del mes pasado?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Diseña la plantilla modelo de P&L en Google Sheets con fórmulas de Margen Bruto, EBITDA y Utilidad Neta. Día 2: Contacta a 10 prestadores de servicios o comercios locales y ofréceles calcular su punto de equilibrio sin costo."
],
    quizQuestions: [
      {
            "question": "¿Cuál es la fórmula básica para calcular el Margen Bruto en el Estado de Resultados (P&L)?",
            "options": [
                  "Ingresos Totales + Préstamos Bancarios.",
                  "Ingresos Netos por Ventas menos el Costo Directo de Ventas (COGS).",
                  "Sueldo del director multiplicado por los impuestos.",
                  "Total de facturas emitidas sin restar nada."
            ],
            "correctIndex": 1,
            "explanation": "El Margen Bruto indica cuánto dinero queda de las ventas después de pagar directamente por los materiales y mano de obra necesarios para producir el bien o servicio."
      },
      {
            "question": "¿Qué es el \"Punto de Equilibrio\" (Break-Even Point) de un negocio?",
            "options": [
                  "El nivel de ventas en el que los ingresos totales cubren exactamente la suma de los costos fijos y variables, dando una utilidad neta de cero.",
                  "El momento en que todos los empleados renuncian al mismo tiempo.",
                  "El saldo máximo que permite tener la tarjeta de crédito.",
                  "La cantidad de dinero que se dona a caridad."
            ],
            "correctIndex": 0,
            "explanation": "Conocer el punto de equilibrio permite a la empresa saber el volumen mínimo que debe facturar cada mes para no incurrir en pérdidas."
      },
      {
            "question": "¿Por qué se debe incluir el sueldo del fundador dentro de los gastos del P&L?",
            "options": [
                  "Para que la empresa pague el doble de impuestos.",
                  "Porque si no se incluye, la rentabilidad del negocio es una ilusión que depende del trabajo gratuito y no remunerado del dueño.",
                  "Porque los bancos no prestan dinero a personas con sueldo.",
                  "Para que el contador tenga más trabajo."
            ],
            "correctIndex": 1,
            "explanation": "Un negocio verdaderamente rentable debe ser capaz de pagar un salario justo a sus directores y aun así generar utilidades netas."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-13
  // =========================================================================
  'mp-13': {
    frameworkName: "Modelo de Flujo de Caja Directo Semanal a 13 Semanas (13-Week Cash Flow Forecast)",
    coreMetrics: [
      "Saldo Mínimo de Caja Proyectado a 13 Semanas",
      "Desviación de Cobros Semanales (< 5%)",
      "Ratio de Cobertura de Pagos Críticos (> 1.3x)",
      "Sensibilidad a Retrasos de Clientes Clave",
      "Velocidad de Quema de Caja (Burn Rate)"
],
    caseCompany: "Constructora & Acabados Modulares Urbano (Asunción, Paraguay)",
    caseOutcome: "Implementó el modelo de flujo de caja a 13 semanas en Google Sheets; anticipó un agujero de liquidez de $19,000 USD que ocurriría en la semana 8 por retraso en el anticipo de una obra; negoció a tiempo una línea de factoring con 4 semanas de margen y evitó paralizar la construcción ni atrasar sueldos.",
    pitfall: "Proyectar el flujo de caja en meses completos en lugar de semanas, ocultando desfases temporales donde los pagos vencen el día 10 y los cobros llegan el día 25.",
    actionItem1: "Construir el modelo de flujo de caja rodante a 13 semanas (un trimestre completo) desglosando entradas y salidas reales semana por semana.",
    actionItem2: "Clasificar los pagos en tres niveles de urgencia: Nivel 1 (Nómina e impuestos innegociables), Nivel 2 (Proveedores operativos) y Nivel 3 (Inversiones postergables).",
    actionItem3: "Actualizar la proyección todos los viernes al mediodía eliminando la semana concluida y agregando una nueva semana al final.",
    domainContext: "El flujo de caja proyectado a 13 semanas es la herramienta financiera más utilizada por directores financieros globales para garantizar la supervivencia operativa de la empresa.",
    strategicRationale: "Anticipar un déficit de caja con 6 u 8 semanas de anticipación permite resolverlo con calma mediante cobros acelerados o créditos bancarios baratos, en lugar de recurrir a la usura desesperada.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 90% de las crisis financieras en empresas ocurren en días específicos del mes, no en los balances mensuales: por ejemplo, tener que pagar nóminas el día 15 cuando el cliente más grande no paga hasta el día 30. Un presupuesto mensual promedio oculta estos descalces letales. La herramienta estándar de oro de los directores financieros (CFOs) de todo el mundo es el Flujo de Caja Semanal a 13 Semanas (13-Week Cash Flow Forecast). Este tomo te entrena para implementarlo y anticipar cualquier bache de liquidez con 60 días de margen.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Trampa de los Promedios Mensuales: Por qué la liquidez se mide en semanas y días, no en balances mensuales estáticos.\n• Capítulo 2: La Metodología de las 13 Semanas (Rolling Forecast): Arquitectura de entradas seguras, cobros probables y salidas críticas.\n• Capítulo 3: Protocolo de Actualización de los Viernes: La rutina de 20 minutos para cerrar la semana vencida y proyectar una semana nueva.\n• Capítulo 4: Caso de Estudio Real (Constructora Urbano): Cómo previeron un déficit de $19,000 USD en Asunción y salvaron una obra.\n• Capítulo 5: Simulación de Escenarios de Estrés (Stress Testing): Qué pasa si tu mayor cliente se retrasa 3 semanas en pagar.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer el servicio de \"Proyección y Control de Flujo de Caja a 13 Semanas\" cobrando entre $40 y $580 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets (sheets.google.com): Plantilla del Modelo de Flujo de Caja Semanal a 13 Semanas con alertas automáticas de saldo negativo.\n2. Google Calendar: Recordatorios recurrentes para actualización de tesorería y seguimiento de promesas de pago de clientes.\n3. Simulador de Sensibilidad Financiera en Google Sheets para evaluar escenarios optimistas, realistas y pesimistas.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nConstructoras, fábricas, agencias de eventos, mayoristas y firmas de servicios sufren por descalces semanales de caja y necesitan previsibilidad:\n• Nivel Junior: $40 – $80 USD por diseño del modelo de flujo de caja a 13 semanas en Google Sheets con datos iniciales.\n• Nivel Intermedio: $110 – $230 USD/mes por mantenimiento semanal del modelo de tesorería y alertas de liquidez para la gerencia.\n• Nivel Senior / CFO Externo: $280 – $580 USD/mes por gestión integral de tesorería, negociación con bancos y optimización de capital de trabajo.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la plantilla de 13 semanas en Google Sheets con semáforos condicionales si el saldo proyectado baja del colchón mínimo.\nDía 2: Contacta a 10 contratistas, agencias o empresas de servicios y ofréceles una demostración del modelo de 13 semanas.",
    ch1CustomNarrative: [
      "Una empresa no quiebra en un año ni en un mes; quiebra en un martes específico por la tarde cuando no tiene con qué pagar la nómina o los cheques emitidos.",
      "Los presupuestos mensuales tradicionales dan una falsa sensación de seguridad porque suman todos los ingresos y gastos del mes en una sola cifra abstracta.",
      "Si tienes que pagar $10,000 USD el día 10 pero tu cliente te deposita el día 28, estarás en quiebra técnica durante 18 días aunque el balance mensual diga que tienes ganancias.",
      "El modelo de flujo de caja a 13 semanas es el radar directivo que te permite ver las tormentas de liquidez antes de que impacten contra tu negocio."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CONSTRUIR UN FLUJO DE CAJA A 13 SEMANAS EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Abre Google Sheets y crea la hoja \"Flujo_Caja_13_Semanas\". En las columnas B a N, coloca las 13 semanas consecutivas (Semana 1 a Semana 13).",
      "Paso 2: En las filas superiores, coloca: 1. Saldo Inicial de Caja en Bancos. 2. Sección Entradas de Efectivo (Cobros confirmados a clientes, ventas al contado). 3. Total Entradas de la Semana.",
      "Paso 3: En las filas intermedias, coloca: 4. Sección Salidas de Efectivo (Nómina, Alquiler, Proveedores, Impuestos, Préstamos). 5. Total Salidas de la Semana. 6. Flujo Neto Semanal (=Entradas - Salidas).",
      "Paso 4: En la última fila, calcula: Saldo Final de Caja (=Saldo_Inicial + Flujo_Neto). Conecta la celda de Saldo Final de la Semana 1 como el Saldo Inicial de la Semana 2. Aplica formato condicional: si cualquier saldo semanal cae por debajo de $1,000 USD, la celda se ilumina en rojo brillante."
],
    ch3TacticalSteps: [
      "Semana 1: Revisa el calendario de vencimientos de todas tus facturas por cobrar y asígnalas a su semana exacta de cobro estimado.",
      "Semana 2: Lista todos los compromisos fijos de pago con fecha exacta de desembolso semanal.",
      "Semana 3: Introduce los datos en el modelo de 13 semanas y analiza si existe alguna semana con saldo proyectado negativo.",
      "Semana 4: Si detectas una semana en rojo en el futuro, adelanta gestiones de cobro o negocia con proveedores antes de llegar a esa fecha."
],
    ch4CaseDeepDive: [
      "Constructora Urbano en Asunción tenía contratos de remodelación por $95,000 USD pero operaba con tensión de caja constante.",
      "Al proyectar su flujo a 13 semanas en Google Sheets, descubrieron que en la semana 8 tendrían un saldo negativo de -$19,000 USD porque debían comprar ascensores antes de recibir el segundo hito de pago del cliente.",
      "Con 7 semanas de margen de maniobra, solicitaron un adelanto de factoring bancario con tasa preferencial del 1.2% mensual.",
      "Evitaron la paralización de la obra, mantuvieron la puntualidad de pago a los 35 obreros y terminaron el proyecto con una utilidad neta del 21%."
],
    ch5RiskMitigation: [
      "Error directivo grave: Considerar promesas verbales de pago de clientes como dinero seguro en el flujo de caja.",
      "Aplica el principio de prudencia: Si un cliente suele pagar con 10 días de retraso, proyecta su cobro 2 semanas más adelante en el modelo.",
      "Mantén siempre un saldo colchón de seguridad intocable equivalente a 2 semanas de nómina completa.",
      "Si el flujo proyectado muestra números rojos inminentes, corta de inmediato todos los gastos prescindibles de Nivel 3."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Implementación del Modelo de Proyección de Flujo de Caja Semanal a 13 Semanas para Empresas\". Ofrece este servicio a constructoras, productoras de eventos, distribuidoras y empresas de servicios B2B.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por diseño del modelo de flujo de caja a 13 semanas en Google Sheets con datos iniciales. • Nivel Intermedio (Con portafolio): $110 - $230 USD/mes por mantenimiento semanal del modelo de tesorería y alertas de liquidez para la gerencia. • Nivel Senior / CFO Externo: $280 - $580 USD/mes por gestión integral de tesorería, negociación con bancos y optimización de capital de trabajo.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / LinkedIn): \"Hola [Nombre], en empresas con contratos por proyectos como [Empresa] el mayor peligro es que los clientes se retrasen unos días y se produzca un hueco de caja para pagar la nómina o a proveedores. Por solo $45 USD yo te configuro el Modelo de Flujo de Caja a 13 Semanas en Google Sheets para que veas con 2 meses de anticipación exactamente cuánto dinero tendrás cada semana y evites cualquier sorpresa. ¿Te gustaría que te muestre una demo de 15 minutos?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de 13 semanas en Google Sheets con semáforos condicionales si el saldo proyectado baja del colchón mínimo. Día 2: Contacta a 10 contratistas, agencias o empresas de servicios y ofréceles una demostración del modelo de 13 semanas."
],
    quizQuestions: [
      {
            "question": "¿Por qué el modelo de flujo de caja a 13 semanas es superior a un presupuesto mensual consolidado?",
            "options": [
                  "Porque tiene 13 colores diferentes en el diseño.",
                  "Porque permite detectar descalces temporales exactos de dinero entre cobros y pagos semana a semana, anticipando baches de liquidez con semanas de margen.",
                  "Porque es obligatorio por ley en todos los países.",
                  "Porque no requiere registrar ningún gasto."
            ],
            "correctIndex": 1,
            "explanation": "El desglose semanal revela los desfases de días específicos que los balances mensuales ocultan en sus promedios."
      },
      {
            "question": "¿Con qué frecuencia debe actualizarse el modelo de flujo de caja rodante a 13 semanas?",
            "options": [
                  "Una vez cada 5 años.",
                  "Semanalmente (por ejemplo, todos los viernes al cierre de la jornada).",
                  "Solo cuando el banco rechaza un pago.",
                  "Únicamente en el mes de diciembre."
            ],
            "correctIndex": 1,
            "explanation": "La actualización semanal mantiene el modelo vivo: se elimina la semana concluida con datos reales y se añade una nueva semana en el horizonte futuro."
      },
      {
            "question": "¿Qué debe hacer una empresa si el modelo de 13 semanas proyecta un saldo negativo dentro de 6 semanas?",
            "options": [
                  "Borrar la fórmula para que no aparezca el número negativo.",
                  "Tomar acciones preventivas inmediatas: gestionar cobranzas anticipadas, retrasar gastos no críticos o negociar líneas de crédito con anticipación.",
                  "Cerrar la empresa al día siguiente.",
                  "Gastar más dinero en fiestas."
            ],
            "correctIndex": 1,
            "explanation": "La gran ventaja del modelo es que otorga tiempo suficiente para solucionar el problema antes de que se convierta en una emergencia real."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-14
  // =========================================================================
  'mp-14': {
    frameworkName: "Protocolo de Blindaje Patrimonial, Salario Fijo de Fundador & Regla de Cuentas Separadas",
    coreMetrics: [
      "Porcentaje de Gastos Personales Pagados por la Empresa (0% estricto)",
      "Puntualidad en el Pago del Salario del Fundador (Día fijo)",
      "Índice de Claridad Contable",
      "Fondo de Reserva Personal vs. Empresarial",
      "Retención de Utilidades para Crecimiento (> 50%)"
],
    caseCompany: "Agencia de Marketing Digital NovaMedia (San José, Costa Rica)",
    caseOutcome: "Puso fin a la mezcla de gastos personales con la cuenta de la empresa fijándose un sueldo mensual formal de $1,800 USD y cancelando las tarjetas de crédito compartidas; en 6 meses logró visibilidad real de costos, eliminó $950 USD de gastos hormiga y la empresa calificó para su primera línea de crédito bancario de $25,000 USD.",
    pitfall: "Usar la cuenta bancaria de la empresa como billetera personal para pagar el supermercado, colegiaturas o vacaciones familiares, arruinando la contabilidad y creando graves contingencias fiscales.",
    actionItem1: "Abrir de inmediato una cuenta bancaria empresarial 100% independiente de la cuenta de ahorros personal del dueño.",
    actionItem2: "Fijar un \"Salario de Fundador\" realista y transferirlo puntualmente el día 30 de cada mes a la cuenta personal.",
    actionItem3: "Prohibir terminantemente que la tarjeta de débito o crédito del negocio se utilice para gastos no relacionados con la actividad económica de la empresa.",
    domainContext: "Separar el negocio de las finanzas personales es el acto fundacional que transforma un autoempleo caótico en una corporación profesional y financieramente saludable.",
    strategicRationale: "La separación patrimonial protege los bienes familiares contra riesgos comerciales, brinda claridad contable indispensable para inversionistas y previene sanciones por fraude fiscal.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl hábito más destructivo y común entre los emprendedores de América Latina es meter la mano en la caja del negocio para pagar el supermercado, el colegio de los hijos o las salidas de fin de semana. Cuando la empresa y el bolsillo del dueño son la misma cosa, el negocio nunca crece, los socios se pelean, el fisco impone multas por deducciones ilegales y los bancos niegan cualquier crédito formal. Este tomo te enseña el protocolo paso a paso para desconectar tus finanzas personales del negocio y asignarte un salario digno y formal.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Trampa de la Billetera Única: Por qué mezclar gastos personales y de empresa arruina tu crecimiento y te mantiene en la precariedad.\n• Capítulo 2: El Protocolo de las Dos Cuentas Blindadas: Cómo abrir y estructurar los flujos de dinero entre la cuenta corporativa y la cuenta personal.\n• Capítulo 3: La Fórmula para Fijar el Salario de Fundador: Cómo calcular un sueldo sostenible que cubra tu vida personal sin ahogar la caja de la empresa.\n• Capítulo 4: Caso de Estudio Real (NovaMedia): Cómo en San José pasaron de la confusión total a calificar para un crédito bancario de $25,000 USD.\n• Capítulo 5: Mitigación de Contingencias Tributarias: Cómo evitar reparos y auditorías fiscales por gastos personales facturados a nombre de la empresa.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultorías de desconexión financiera y estructuración de sueldo de fundador cobrando entre $25 y $400 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets (sheets.google.com): Calculadora de Presupuesto Personal del Fundador vs. Capacidad de Nómina Empresarial.\n2. Banca Móvil Digital: Protocolo de transferencia automática recurrente de sueldo cada fin de mes.\n3. Notion: Manual de políticas de gastos corporativos permitidos y prohibidos para socios y colaboradores.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nMiles de profesionales independientes, dueños de talleres, tiendas y consultorios viven agobiados porque no saben si su negocio gana dinero o si se lo están comiendo ellos mismos:\n• Nivel Junior: $25 – $50 USD por diagnóstico de gastos mezclados + calculadora de salario de fundador en Google Sheets.\n• Nivel Intermedio: $70 – $150 USD por protocolo integral de separación patrimonial, apertura de cuentas y presupuesto personal-corporativo.\n• Nivel Senior: $190 – $400 USD por reestructuración societaria básica, política de dividendos y blindaje financiero de socios.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la plantilla de presupuesto de vida del fundador y cálculo de sueldo en Google Sheets.\nDía 2: Contacta a 10 emprendedores o freelancers que trabajen por su cuenta y ofréceles ayudarlos a fijar su sueldo formal.",
    ch1CustomNarrative: [
      "Tu empresa no es tu billetera personal ni tu cuenta de ahorros de emergencia; es una entidad independiente que tiene sus propias obligaciones, costos y metas.",
      "Cuando un emprendedor utiliza la tarjeta del negocio para pagar sus gastos cotidianos del hogar, comete dos errores graves: destruye la claridad financiera de su empresa y comete una infracción tributaria.",
      "Es imposible saber si un negocio es rentable si los gastos de la casa del dueño están camuflados dentro de los gastos operativos de la empresa.",
      "Establecer una frontera clara e inquebrantable entre tu dinero personal y el dinero de la empresa es el primer paso indispensable para convertirte en un verdadero empresario."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO SEPARAR FINANZAS Y FIJAR EL SUELDO DE FUNDADOR EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Abre Google Sheets y crea la hoja \"Presupuesto_Personal_Fundador\". Lista tus gastos personales básicos mensuales (vivienda, alimentación, salud, educación, transporte, ahorro personal). Suma el total necesario para vivir dignamente.",
      "Paso 2: En la segunda pestaña, \"Capacidad_Nomina_Empresa\", calcula el flujo operativo libre promedio del negocio en los últimos 3 meses: =Ingresos_Promedio - Costos_Directos - Gastos_Fijos.",
      "Paso 3: Fija el \"Salario Neto del Fundador\": debe ser una cifra realista que la empresa pueda pagar con puntualidad el día 30 de cada mes sin recurrir a sobregiros.",
      "Paso 4: En tu banca electrónica móvil, programa una transferencia automática recurrente el día 30 desde la cuenta del negocio a tu cuenta bancaria personal con el concepto \"Pago de Nómina / Salario Directivo\"."
],
    ch3TacticalSteps: [
      "Día 1: Acude al banco y abre una cuenta bancaria exclusiva para el negocio con su propia tarjeta de débito.",
      "Día 2: Cancela todas las suscripciones o compras personales que estén vinculadas a la tarjeta empresarial.",
      "Día 3: Establece la regla inquebrantable: si compras algo personal, se paga única y exclusivamente con tu tarjeta personal.",
      "Día 4: Define que las utilidades adicionales de la empresa solo se distribuirán dos veces al año (junio y diciembre) tras auditar los resultados semestrales."
],
    ch4CaseDeepDive: [
      "NovaMedia en San José tenía 4 socios y una facturación mensual de $22,000 USD, pero todos los socios usaban la tarjeta corporativa para pagar almuerzos personales, gasolina de sus autos familiares y compras de supermercado.",
      "Al cierre de año, el contador no pudo justificar $18,000 USD en gastos personales y la oficina de tributación impuso una multa de $4,500 USD.",
      "Implementaron el protocolo de cuentas blindadas: fijaron un salario de $1,800 USD para cada socio y destruyeron las tarjetas de crédito adicionales.",
      "En 6 meses sanearon la contabilidad, acumularon $30,000 USD de utilidades retenidas y el banco les otorgó una línea de crédito preferencial para expandir sus oficinas."
],
    ch5RiskMitigation: [
      "Peligro fiscal severo: La deducción indebida de gastos personales (gastos ajenos a la actividad productiva) es considerada evasión fiscal en toda América Latina.",
      "Conserva siempre comprobantes fiscales con descripción detallada y justificación comercial de cada gasto empresarial.",
      "Si por una emergencia extrema debes usar dinero personal para pagar algo del negocio, elabora un comprobante de \"Reembolso de Gastos\" con la factura legal correspondiente adjunta.",
      "No aumentes tu sueldo de fundador ante un mes excepcional de ventas; mantén el salario fijo y retira bonos solo en los períodos semestrales de utilidades."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Consultoría de Desconexión Financiera Personal-Empresarial y Asignación de Sueldo de Fundador\". Ayuda a emprendedores, profesionales independientes y comerciantes a ordenar sus finanzas y separar sus cuentas.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $25 - $50 USD por diagnóstico de gastos mezclados + calculadora de salario de fundador en Google Sheets. • Nivel Intermedio (Con portafolio): $70 - $150 USD por protocolo integral de separación patrimonial, apertura de cuentas y presupuesto personal-corporativo. • Nivel Senior / Asesor Patrimonial: $190 - $400 USD por reestructuración societaria básica, política de dividendos y blindaje financiero de socios.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / Redes): \"Hola [Nombre], uno de los problemas más comunes de quienes tenemos negocio es que el dinero de la empresa y los gastos de la casa terminan mezclándose, y nunca se sabe si el negocio gana dinero o si se lo está comiendo el día a día. Por solo $30 USD yo te ayudo a estructurar el protocolo de cuentas separadas y calcular tu sueldo formal de fundador en Google Sheets para ordenar tu dinero de forma definitiva. ¿Te gustaría que lo revisemos esta semana?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de presupuesto de vida del fundador y cálculo de sueldo en Google Sheets. Día 2: Contacta a 10 emprendedores o freelancers que trabajen por su cuenta y ofréceles ayudarlos a fijar su sueldo formal."
],
    quizQuestions: [
      {
            "question": "¿Por qué es fundamental separar la cuenta bancaria del negocio de la cuenta personal del emprendedor?",
            "options": [
                  "Porque tener dos tarjetas hace que te veas más elegante.",
                  "Para tener claridad exacta sobre la rentabilidad real de la empresa, evitar contingencias fiscales por deducciones ilegales y proteger el patrimonio personal.",
                  "Para pagar el doble de comisiones al banco.",
                  "Porque los bancos cierran cuentas si compras comida."
            ],
            "correctIndex": 1,
            "explanation": "La separación de cuentas permite conocer los números reales del negocio y evita sanciones tributarias por mezclar gastos privados con costos operativos."
      },
      {
            "question": "¿Cómo debe remunerarse económicamente el dueño o fundador de una pequeña empresa?",
            "options": [
                  "Retirando dinero en efectivo de la caja cada vez que necesite comprar algo en su casa.",
                  "Fijándose un salario mensual formal y constante basado en las funciones que desempeña y la capacidad del negocio, pagado puntualmente en una fecha fija.",
                  "Trabajando gratis durante 10 años.",
                  "Pidiendo dinero prestado a los clientes."
            ],
            "correctIndex": 1,
            "explanation": "Un salario fijo formaliza el costo directivo en el P&L y brinda estabilidad económica personal sin descapitalizar la empresa."
      },
      {
            "question": "¿Qué se debe hacer si un socio de la empresa necesita dinero de urgencia para un gasto familiar?",
            "options": [
                  "Tomar el dinero de la nómina de los empleados.",
                  "Manejarlo como un adelanto formal de dividendos o préstamo de accionista debidamente documentado, sin usar las tarjetas de la empresa para compras personales directas.",
                  "Ocultar el gasto en la contabilidad.",
                  "Vender las computadoras de la oficina."
            ],
            "correctIndex": 1,
            "explanation": "Cualquier movimiento de dinero hacia los socios debe quedar formalmente registrado para mantener la transparencia contable."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-15
  // =========================================================================
  'mp-15': {
    frameworkName: "Evaluación de Capacidad de Servicio de Deuda (DSCR), Preparación de Dossier Bancario & Negociación de Plazos",
    coreMetrics: [
      "Ratio de Cobertura de Servicio de Deuda (DSCR > 1.35x)",
      "Relación Deuda sobre EBITDA (< 2.5x)",
      "Tasa de Interés Nominal vs. TCEA",
      "Porcentaje de Garantía Real Requerida",
      "Ahorro Financiero por Renegociación de Plazos"
],
    caseCompany: "Planta Procesadora de Lácteos San Martín (Santa Cruz, Bolivia)",
    caseOutcome: "Armó un Dossier Bancario profesional con proyecciones financieras a 3 años y cálculo de DSCR de 1.6x; consiguió un crédito comercial PYME de $45,000 USD a 48 meses con una tasa de interés preferencial del 9.5% anual (frente al 18% estándar), modernizando su línea de pasteurización y aumentando ventas en un 65%.",
    pitfall: "Presentarse al banco sin preparación previa solicitando montos improvisados sin estados financieros auditados ni justificación técnica del retorno de la inversión.",
    actionItem1: "Calcular el Ratio de Cobertura del Servicio de la Deuda (DSCR = Flujo de Caja Operativo Disponible / Total de Cuotas e Intereses Anuales).",
    actionItem2: "Preparar el \"Dossier de Crédito PYME\": Estados financieros de los últimos 2 años, flujo de caja proyectado a 24 meses y cotizaciones formales de la inversión.",
    actionItem3: "Presentar la solicitud en 3 bancos o entidades financieras simultáneamente para negociar mejores tasas, plazos y comisiones.",
    domainContext: "Los bancos no prestan dinero a quienes tienen ideas bonitas, sino a empresas que demuestran con números y balances que su flujo operativo es suficiente para pagar las cuotas con holgura.",
    strategicRationale: "Un financiamiento bancario estructurado con tasa adecuada permite apalancar el crecimiento de la empresa sin diluir el capital accionario de los fundadores.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl 70% de las solicitudes de crédito bancario presentadas por pequeñas empresas en América Latina son rechazadas por los oficiales de riesgo. El motivo del rechazo casi nunca es la falta de ventas, sino la pésima presentación del expediente: documentos desordenados, falta de estados financieros formales y ausencia de un análisis de Capacidad de Pago (DSCR). Este tomo te entrena para estructurar un Dossier de Crédito Bancario impecable, calcular tu DSCR y negociar las mejores tasas y plazos con el sistema financiero formal.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Mente del Oficial de Crédito Bancario: Las 5 C del Crédito (Carácter, Capacidad, Capital, Colateral y Condiciones).\n• Capítulo 2: El Ratio DSCR (Debt Service Coverage Ratio): Cómo demostrar matemáticamente que tu negocio genera 1.4x el valor de la cuota anual.\n• Capítulo 3: Protocolo de Construcción del Dossier de Crédito PYME: Los 7 documentos indispensables para una aprobación rápida.\n• Capítulo 4: Caso de Estudio Real (Lácteos San Martín): Cómo obtuvieron $45,000 USD al 9.5% anual en Santa Cruz para su planta pasteurizadora.\n• Capítulo 5: Mitigación de Cláusulas Bancarias Abusivas: Comisiones por prepago, seguros sobrevalorados y garantías excesivas.\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer el servicio de \"Armado de Dossier Bancario y Gestión de Créditos PYME\" cobrando entre $40 y $600 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets (sheets.google.com): Calculadora de DSCR y Simulador de Capacidad Máxima de Endeudamiento Bancario.\n2. Google Docs: Plantilla del Dossier Ejecutivo de Solicitud de Crédito PYME estructurado para analistas de riesgo.\n3. Centrales de Riesgo Crediticio (Sentinel, Equifax, Datacrédito según país): Consulta y saneamiento de score crediticio.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nEmpresas consolidadas que quieren comprar camiones, maquinaria o locales necesitan un asesor que les prepare la documentación para el banco:\n• Nivel Junior: $40 – $80 USD por cálculo de DSCR y simulador de cuotas bancarias en Google Sheets.\n• Nivel Intermedio: $110 – $230 USD por armado del Dossier de Crédito completo con proyecciones financieras a 3 años.\n• Nivel Senior / Asesor Financiero Corporativo: $290 – $600 USD por gestión integral de licitación bancaria y negociación de tasas con múltiples bancos.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la plantilla de cálculo de DSCR y el modelo de Dossier de Crédito en Google Sheets y Docs.\nDía 2: Contacta a 10 empresas medianas o comercios en expansión y ofréceles evaluar su capacidad de crédito bancario gratis.",
    ch1CustomNarrative: [
      "Pedir un crédito bancario para tu empresa no es una súplica; es una propuesta de negocio en la que el banco actúa como tu proveedor de dinero mayorista.",
      "El analista de crédito del banco no se emociona con discursos apasionados ni promesas abstractas; su trabajo consiste en evaluar el riesgo frío de que no puedas pagar.",
      "Si te presentas con estados de cuenta bancarios desordenados y sin proyecciones numéricas, el banco te clasificará como cliente de alto riesgo y te cobrará la tasa más alta o rechazará tu solicitud.",
      "Presentarte con un Dossier Financiero impecable demuestra que diriges una empresa seria, solvente y digna de las mejores tasas preferenciales del mercado."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CALCULAR EL DSCR Y ARMAR UN DOSSIER BANCARIO EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Abre Google Sheets y crea la hoja \"Calculadora_DSCR_Capacidad_Bancaria\". Ingresa: 1. EBITDA Anual Proyectado. 2. (-) Impuestos Estimados. 3. (=) Flujo de Caja Disponible para el Servicio de la Deuda (CFADS).",
      "Paso 2: En la sección de deuda, suma: Amortización de Capital Anual + Intereses Anuales del nuevo préstamo solicitado. 4. Calcula el DSCR: =CFADS / Total_Servicio_Deuda_Anual.",
      "Paso 3: Verifica el semáforo: Si el DSCR es menor a 1.2x, el banco rechazará la solicitud por riesgo de insolvencia. Si está entre 1.35x y 1.8x, está en el rango óptimo de aprobación con tasa preferencial.",
      "Paso 4: En Google Docs, redacta el Dossier de 5 páginas: 1. Resumen Ejecutivo de la Empresa. 2. Justificación Técnica de la Inversión (con cotizaciones adjuntas). 3. Estados Financieros Históricos. 4. Proyección de Flujo a 3 años. 5. Análisis de Garantías Disponibles."
],
    ch3TacticalSteps: [
      "Semana 1: Solicita a tu contador el balance general y estado de resultados de los últimos 2 años fiscales debidamente firmados.",
      "Semana 2: Consulta tu reporte crediticio en la central de riesgos de tu país y subsana cualquier pequeña deuda o error en tu historial.",
      "Semana 3: Completa el cálculo de DSCR en Google Sheets y arma el Dossier en PDF de alta calidad visual.",
      "Semana 4: Entrega el expediente simultáneamente a los gerentes de cuenta de 3 bancos comerciales y solicita propuestas formales por escrito."
],
    ch4CaseDeepDive: [
      "Lácteos San Martín en Santa Cruz necesitaba $45,000 USD para adquirir una máquina envasadora de leche en sachet de alta velocidad.",
      "Su banco habitual les ofrecía un crédito personal con tasa del 18% anual porque el dueño no había presentado balances formales de la empresa.",
      "Contrataron a un asesor que estructuró el Dossier Bancario demostrando que la máquina reducía los costos de envasado en un 40% y arrojaba un DSCR de 1.6x.",
      "Presentaron el dossier en 3 bancos y consiguieron un crédito PYME a 4 años con tasa preferencial del 9.5% anual, ahorrando más de $8,500 USD en intereses."
],
    ch5RiskMitigation: [
      "Trampa bancaria: Aceptar créditos con cláusula de \"Comisión de Cancelación Anticipada\" abusiva que te penalice si decides pagar la deuda antes de tiempo.",
      "Negocia siempre que puedas hacer amortizaciones extraordinarias a capital sin penalidad alguna.",
      "No comprometas garantías hipotecarias desproporcionadas (ej. poner en garantía un inmueble de $200,000 USD por un préstamo de $20,000 USD).",
      "Asegúrate de que la tasa de interés sea fija o tenga un tope máximo (Cap) pactado por contrato ante posibles subidas de tasas de los bancos centrales."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Elaboración de Dossier Financiero y Asesoría para Créditos Bancarios PYME\". Ofrece este servicio a empresas en crecimiento, industrias, comercios y clínicas que necesitan financiamiento formal.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $40 - $80 USD por cálculo de DSCR y simulador de cuotas bancarias en Google Sheets. • Nivel Intermedio (Con portafolio): $110 - $230 USD por armado del Dossier de Crédito completo con proyecciones financieras a 3 años. • Nivel Senior / Consultor Financiero: $290 - $600 USD por gestión integral de licitación bancaria y negociación de tasas con múltiples bancos.",
      "3. Guion de Venta Listo para Copiar (WhatsApp / Correo): \"Hola [Nombre], sé que para expandir [Empresa] muchas veces se requiere financiamiento bancario, pero si se presenta la solicitud sin el formato que exige el comité de riesgo, el banco rechaza el crédito o cobra tasas de interés altísimas. Por solo $45 USD yo calculo tu capacidad real de pago (DSCR) y armo tu Dossier Financiero profesional en Google Sheets y Docs para que negocies la mejor tasa con los bancos. ¿Te gustaría que evaluemos tu perfil crediticio?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la plantilla de cálculo de DSCR y el modelo de Dossier de Crédito en Google Sheets y Docs. Día 2: Contacta a 10 empresas medianas o comercios en expansión y ofréceles evaluar su capacidad de crédito bancario gratis."
],
    quizQuestions: [
      {
            "question": "¿Qué mide el Ratio de Cobertura del Servicio de la Deuda (DSCR)?",
            "options": [
                  "La cantidad de dinero que la empresa debe a sus empleados.",
                  "La capacidad del flujo de caja operativo disponible de la empresa para cubrir el pago total de las cuotas e intereses de la deuda en un año.",
                  "El tipo de cambio del euro frente al dólar.",
                  "El valor de la marca en redes sociales."
            ],
            "correctIndex": 1,
            "explanation": "Un DSCR superior a 1.3x indica al banco que la empresa genera un 30% más de flujo libre del necesario para pagar sus deudas, garantizando solvencia."
      },
      {
            "question": "¿Por qué es recomendable solicitar una cotización de crédito en al menos 3 bancos diferentes al mismo tiempo?",
            "options": [
                  "Para que los bancos compitan entre sí ofreciendo mejores tasas de interés, plazos más largos y menores comisiones.",
                  "Para pedir tres préstamos al mismo tiempo y gastar el triple.",
                  "Porque es un requisito de la policía local.",
                  "Para llenar más formularios de papel."
            ],
            "correctIndex": 0,
            "explanation": "La competencia entre entidades financieras permite a la empresa negociar desde una posición de poder y ahorrar miles de dólares en intereses."
      },
      {
            "question": "¿Qué documento resulta indispensable incluir en un Dossier de Crédito PYME profesional?",
            "options": [
                  "Un dibujo artístico del fundador.",
                  "La justificación técnica de la inversión con cotizaciones formales de la maquinaria o inventario a adquirir y el flujo de caja proyectado.",
                  "Recetas de cocina tradicional.",
                  "Entradas a conciertos de música."
            ],
            "correctIndex": 1,
            "explanation": "Demostrar en qué se invertirá el dinero y cómo esa inversión generará el flujo para pagar el crédito es la clave para la aprobación."
      }
]
  },

  // =========================================================================
  // BOOK ID: mp-16
  // =========================================================================
  'mp-16': {
    frameworkName: "Matriz de Fuentes de Financiamiento Óptimas, Costo Ponderado de Capital (WACC) & Plan de Escalamiento a 24 Meses",
    coreMetrics: [
      "Costo Ponderado de Capital (WACC < 14%)",
      "Estructura Óptima Deuda / Capital Propio",
      "Retorno sobre el Capital Invertido (ROIC > WACC + 8%)",
      "Hitos de Crecimiento Validados por Ronda",
      "Tiempo de Retorno de la Inversión de Expansión"
],
    caseCompany: "Franquicias de Comida Saludable GreenBite (Ciudad de Panamá, Panamá)",
    caseOutcome: "Diseñó una estrategia combinada de financiamiento: financió el inventario inicial con proveedores a 60 días, la remodelación de 2 locales con un crédito bancario blando y la expansión regional con $100,000 USD de inversionistas ángeles; abrió 4 sucursales en 18 meses manteniendo un WACC del 11.2% y multiplicando su facturación por 4x.",
    pitfall: "Usar una sola fuente de financiamiento para todo (ej. endeudarse con bancos para proyectos de alto riesgo o buscar inversionistas caros para comprar inventario rutinario).",
    actionItem1: "Mapear las necesidades de capital en 3 categorías: Capital de Trabajo (Proveedores/Bancos), Maquinaria/Activos Fijos (Leasing/Crédito a largo plazo) e Innovación/Expansión (Capital de Riesgo/Ángeles).",
    actionItem2: "Calcular el Costo Ponderado de Capital (WACC) de la empresa para asegurar que la rentabilidad de los nuevos proyectos supere con creces el costo del dinero.",
    actionItem3: "Elaborar una hoja de ruta de financiamiento a 24 meses vinculando cada inyección de fondos al cumplimiento de hitos de ventas específicos.",
    domainContext: "La maestría financiera consiste en combinar armónicamente diferentes instrumentos de capital para minimizar el costo total del dinero y maximizar el valor de la empresa.",
    strategicRationale: "Una estructura de capital equilibrada y diversificada protege a la organización contra crisis bancarias o caídas del mercado y acelera el crecimiento rentable a escala.",
    learningOverview: "🎯 SINOPSIS EJECUTIVA & IMPACTO:\nEl error más común de los empresarios que quieren expandirse es usar la herramienta financiera equivocada para el trabajo equivocado: buscan inversionistas caros (que piden el 30% de la empresa) para comprar inventario corriente, o piden préstamos bancarios de corto plazo con intereses altos para financiar investigaciones de largo plazo. El secreto de las grandes corporaciones es la \"Estructura Óptima de Capital\": saber cuándo financiarse con proveedores a tasa cero, cuándo usar crédito bancario y cuándo emitir acciones para socios. Este tomo es la culminación de la Categoría 2.\n\n📚 LO QUE APRENDERÁS EN CADA CAPÍTULO:\n• Capítulo 1: La Matriz de Fuentes de Capital: Subsidios gubernamentales, crédito comercial de proveedores, leasing, bancos, ángeles y fondos.\n• Capítulo 2: El Costo Ponderado de Capital (WACC): Cómo calcular el costo real de tu dinero y asegurar que tus proyectos superen esa tasa.\n• Capítulo 3: La Hoja de Ruta de Expansión a 24 Meses: Vinculación de rondas de financiamiento con hitos de apertura y facturación.\n• Capítulo 4: Caso de Estudio Real (GreenBite Franquicias): Cómo abrieron 4 sucursales en Panamá combinando 3 fuentes de financiamiento.\n• Capítulo 5: Mitigación de Crisis de Liquidez en Plena Expansión: Cómo evitar la \"indigestión por crecimiento acelerado\".\n• Capítulo 6: Monetización y Negocio en LATAM: Cómo ofrecer consultoría de Plan Maestro de Financiamiento y Optimización de Capital cobrando entre $45 y $700 USD.\n\n🛠️ HERRAMIENTAS GRATUITAS QUE DOMINARÁS:\n1. Google Sheets (sheets.google.com): Calculadora de Costo Ponderado de Capital (WACC) y Plan Maestro de Financiamiento a 24 meses.\n2. Notion: Matriz de fuentes de financiamiento disponibles en tu país categorizadas por costo y requisitos.\n3. Miro / Canva: Hoja de ruta visual de escalamiento e hitos financieros para presentar a juntas directivas.\n\n💼 OPORTUNIDAD DE MONETIZACIÓN EN LATINOAMÉRICA (TARIFAS REALISTAS):\nEmpresas consolidadas, franquicias y marcas en crecimiento necesitan una estrategia integral para financiar su expansión sin endeudarse a ciegas:\n• Nivel Junior: $45 – $90 USD por matriz comparativa de fuentes de financiamiento en Google Sheets para su sector.\n• Nivel Intermedio: $130 – $270 USD por cálculo de WACC, optimización de estructura de capital y plan financiero a 24 meses.\n• Nivel Senior / Director Financiero Consultor: $350 – $700 USD por estructuración integral del plan de expansión y dirección de rondas de financiamiento.\n\n⚡ PLAN DE ACCIÓN DE 48 HORAS:\nDía 1: Configura la calculadora de WACC y la hoja de ruta de financiamiento en Google Sheets con fórmulas automáticas.\nDía 2: Contacta a 10 directores o dueños de empresas medianas y ofréceles una sesión de optimización de costo de capital.",
    ch1CustomNarrative: [
      "Financiar el crecimiento de una empresa es como construir una casa: no utilizas un martillo para todo; necesitas una caja de herramientas diversa donde cada instrumento cumpla una función especializada.",
      "El financiamiento más barato del mundo es el crédito de tus propios proveedores y el flujo de caja generado por tus clientes satisfechos.",
      "El crédito bancario es ideal para comprar activos tangibles que generan ingresos inmediatos, mientras que el capital de inversionistas es el vehículo adecuado para asumir riesgos de innovación y expansión geográfica.",
      "Aprender a orquestar todas estas fuentes de financiamiento te convierte en un estratega empresarial capaz de liderar cualquier negocio hacia el éxito."
],
    ch2MethodologyDetails: [
      "🛠️ TUTORIAL PRÁCTICO: CÓMO CALCULAR EL WACC Y ARMAR UN PLAN DE FINANCIAMIENTO EN GOOGLE SHEETS GRATIS:",
      "Paso 1: Abre Google Sheets y crea la hoja \"Calculadora_WACC_Estrategico\". Desglosa las fuentes de capital: 1. Deuda Bancaria / Préstamos ($ Monto, % Tasa de Interés). 2. Capital Propio / Acciones de Socios ($ Monto, % Retorno Esperado).",
      "Paso 2: Aplica la fórmula del Costo Ponderado de Capital: = (Monto_Deuda / Total_Capital * Tasa_Deuda * (1 - Tasa_Impuestos)) + (Monto_Capital_Propio / Total_Capital * Retorno_Esperado_Socios).",
      "Paso 3: Crea una segunda pestaña llamada \"Hoja_Ruta_24_Meses\". Divide el plan en 4 fases semestrales vinculando el dinero a hitos concretos (ej. Fase 1: Optimización de inventario con proveedores; Fase 2: Crédito bancario para maquinaria; Fase 3: Ronda ángel para expansión de sucursales).",
      "Paso 4: Conecta un gráfico de Gantt o barras acumuladas que muestre la evolución de los activos y la facturación frente al capital inyectado."
],
    ch3TacticalSteps: [
      "Semana 1: Realiza un diagnóstico exhaustivo de la estructura de capital actual de tu empresa calculando el porcentaje de deuda vs. patrimonio.",
      "Semana 2: Identifica las oportunidades de financiamiento no bancario en tu país (fondos de innovación gubernamentales, subsidios y convenios de proveedores).",
      "Semana 3: Modela en Google Sheets el impacto de cada fuente de financiamiento sobre el margen neto de los próximos 2 años.",
      "Semana 4: Ejecuta la primera fase del plan comenzando por las fuentes de menor costo (financiamiento comercial y autofinanciación)."
],
    ch4CaseDeepDive: [
      "GreenBite en Ciudad de Panamá operaba un exitoso restaurante de comida saludable pero quería abrir 4 nuevas sucursales en centros comerciales.",
      "Calcularon que necesitaban $240,000 USD. En lugar de ceder el 50% de la empresa a un inversionista o pedir un crédito impagable, diseñaron una estrategia combinada.",
      "Consiguieron $60,000 USD de crédito con proveedores de alimentos y equipamiento a 60 días, $80,000 USD con un crédito bancario garantizado por las ventas de la primera tienda, y levantaron $100,000 USD con 2 inversionistas ángeles cediendo solo el 14% de las acciones.",
      "En 18 meses abrieron las 4 sucursales con éxito y hoy facturan más de $1.2 millones USD anuales con una rentabilidad sobre el capital (ROIC) del 28%."
],
    ch5RiskMitigation: [
      "Error de principiante: El \"Sobrecálculo de Crecimiento\" (Overtrading): Crecer más rápido de lo que el capital de trabajo de la empresa puede soportar, provocando insolvencia en pleno pico de ventas.",
      "Asegúrate de que cada nueva sucursal o proyecto alcance su punto de equilibrio operativo antes de comprometer fondos en la siguiente apertura.",
      "Mantén una reserva de liquidez equivalente a 3 meses de operación de cada nueva unidad de negocio durante sus primeros 6 meses de vida.",
      "Revisa trimestralmente tu WACC para renegociar deudas caras en cuanto las tasas de interés del mercado bajen."
],
    ch6ActionSummary: [
      "💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA: CÓMO GANAR DINERO OFRECIENDO ESTE SERVICIO:",
      "1. Servicio Comercial Empaquetado: \"Diseño del Plan Maestro de Financiamiento y Optimización de Estructura de Capital\". Ofrece este servicio a franquicias, cadenas comerciales, agroindustrias y empresas de tecnología en fase de expansión.",
      "2. Tabulador de Precios Reales en Dólares (USD) para LATAM: • Nivel Junior (Tus primeros 3 clientes): $45 - $90 USD por matriz comparativa de fuentes de financiamiento en Google Sheets para su sector. • Nivel Intermedio (Con portafolio): $130 - $270 USD por cálculo de WACC, optimización de estructura de capital y plan financiero a 24 meses. • Nivel Senior / Director Financiero Consultor: $350 - $700 USD por estructuración integral del plan de expansión y dirección de rondas de financiamiento.",
      "3. Guion de Venta Listo para Copiar (LinkedIn / WhatsApp): \"Hola [Nombre], felicidades por el éxito de [Empresa]. Cuando una empresa llega a la etapa de abrir nuevas sucursales o expandirse, el error más costoso es usar la fuente de dinero equivocada y pagar de más en intereses o ceder demasiadas acciones. Por solo $50 USD yo te diseño un Plan Maestro de Financiamiento en Google Sheets con cálculo de costo de capital (WACC) para estructurar tu crecimiento de los próximos 24 meses con la combinación más rentable de fondos. ¿Te gustaría agendar una breve llamada estratégica?\"",
      "4. Plan de Acción de 48 Horas: Día 1: Configura la calculadora de WACC y la hoja de ruta de financiamiento en Google Sheets con fórmulas automáticas. Día 2: Contacta a 10 directores o dueños de empresas medianas y ofréceles una sesión de optimización de costo de capital."
],
    quizQuestions: [
      {
            "question": "¿Qué es el Costo Ponderado de Capital (WACC)?",
            "options": [
                  "La factura mensual de la luz y el agua.",
                  "El costo promedio ponderado de todas las fuentes de financiamiento que utiliza la empresa (tanto deuda bancaria como capital aportado por los socios e inversionistas).",
                  "El valor de reventa de la maquinaria usada.",
                  "Una tarifa que cobran los contadores por firmar balances."
            ],
            "correctIndex": 1,
            "explanation": "El WACC es la tasa de rentabilidad mínima que cualquier nuevo proyecto de la empresa debe superar para generar valor económico real."
      },
      {
            "question": "¿Por qué no es recomendable financiar la compra de inventario diario vendiendo acciones de la empresa a inversionistas?",
            "options": [
                  "Porque las acciones son el recurso más caro y permanente; ceder propiedad de por vida para financiar operaciones de corto plazo destruye el patrimonio de los fundadores.",
                  "Porque a los inversionistas no les gusta el inventario.",
                  "Porque las leyes prohíben vender acciones a personas.",
                  "Porque el inventario se echa a perder en 24 horas."
            ],
            "correctIndex": 0,
            "explanation": "El inventario debe financiarse con crédito de proveedores o líneas de crédito bancarias rotativas de bajo costo, no con dilución accionaria permanente."
      },
      {
            "question": "¿Qué es el fenómeno de \"Indigestión por Crecimiento Acelerado\" (Overtrading)?",
            "options": [
                  "Comer demasiado en los almuerzos de negocios.",
                  "Aumentar el volumen de ventas y aperturas tan rápido que los costos de operación y necesidades de capital de trabajo superan la liquidez disponible, provocando la quiebra.",
                  "Tener más de 100 empleados en la oficina.",
                  "Vender productos con descuento."
            ],
            "correctIndex": 1,
            "explanation": "Crecer sin suficiente capital de trabajo es una causa común de quiebra: cada venta adicional exige más inventario y personal antes de cobrar."
      }
]
  },

};
