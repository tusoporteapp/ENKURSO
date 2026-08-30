import { BookCourse, Chapter, QuizQuestion, ActionItem } from '../types';
import { RAW_TOPICS, RawTopic } from './rawTopics';
import { CATEGORY_1_CUSTOM_BOOKS } from './category1Content';
import { CATEGORY_2_CUSTOM_BOOKS } from './category2Content';
import { CATEGORY_3_CUSTOM_BOOKS } from './category3Content';
import { CATEGORY_4_CUSTOM_BOOKS } from './category4Content';
import { CATEGORY_5_CUSTOM_BOOKS } from './category5Content';
import { CATEGORY_6_CUSTOM_BOOKS } from './category6Content';
import { CATEGORY_7_CUSTOM_BOOKS } from './category7Content';
import { CATEGORY_8_CUSTOM_BOOKS } from './category8Content';
import { CATEGORY_9_CUSTOM_BOOKS } from './category9Content';
import { CATEGORY_10_CUSTOM_BOOKS } from './category10Content';
import { CATEGORY_11_CUSTOM_BOOKS } from './category11Content';
import { CATEGORY_12_CUSTOM_BOOKS } from './category12Content';
import { CATEGORY_13_CUSTOM_BOOKS } from './category13Content';
import { CATEGORY_14_CUSTOM_BOOKS } from './category14Content';
import { CATEGORY_15_CUSTOM_BOOKS } from './category15Content';
import { CATEGORY_16_CUSTOM_BOOKS } from './category16Content';
import { CATEGORY_17_CUSTOM_BOOKS } from './category17Content';
import { CATEGORY_18_CUSTOM_BOOKS } from './category18Content';
import { CATEGORY_19_CUSTOM_BOOKS } from './category19Content';
import { CATEGORY_20_CUSTOM_BOOKS } from './category20Content';
import { CATEGORY_21_CUSTOM_BOOKS } from './category21Content';
import { CATEGORY_22_CUSTOM_BOOKS } from './category22Content';
import { CATEGORY_23_CUSTOM_BOOKS } from './category23Content';
import { CATEGORY_24_CUSTOM_BOOKS } from './category24Content';
import { CATEGORY_25_CUSTOM_BOOKS } from './category25Content';
import { CATEGORY_26_CUSTOM_BOOKS } from './category26Content';
import { CATEGORY_27_CUSTOM_BOOKS } from './category27Content';
import { CATEGORY_28_CUSTOM_BOOKS } from './category28Content';
import { CATEGORY_29_CUSTOM_BOOKS } from './category29Content';
import { CATEGORY_30_CUSTOM_BOOKS } from './category30Content';

// Specific custom content blueprints for ALL 24 categories ensuring rich, domain-specific terminology
export interface CategoryBlueprint {
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
}

export const THEME_BLUEPRINTS: Record<string, CategoryBlueprint> = {
  'planeacion-de-negocios': {
    frameworkName: 'Modelo Lean Business Canvas & Matriz de Validación de Supuestos Críticos',
    coreMetrics: ['Costo de Adquisición de Cliente (CAC)', 'Valor de Vida del Cliente (LTV)', 'Runway Financiero Operativo', 'Tasa de Activación Temprana', 'Margen de Contribución Unitario'],
    caseCompany: 'Kavita Tech Labs (Plataforma B2B de Logística Inteligente)',
    caseOutcome: 'Redujo el ciclo de validación de 9 meses a solo 6 semanas, alcanzó un Product-Market Fit validado con 42 clientes de pago y levantó $450,000 en ronda semilla tras pivotar su propuesta de valor inicial.',
    pitfall: 'Escribir planes de 60 páginas basados en proyecciones lineales sin haber entrevistado a un mínimo de 30 clientes potenciales reales del sector objetivo.',
    actionItem1: 'Mapear los 3 supuestos más riesgosos del modelo comercial en una matriz de impacto vs. incertidumbre y diseñar un experimento de validación rápida con presupuesto inferior a $100.',
    actionItem2: 'Conducir 5 entrevistas en profundidad con clientes del perfil ideal utilizando preguntas no sesgadas (The Mom Test) sobre sus procesos y frustraciones actuales.',
    actionItem3: 'Redactar una Carta de Proyecto (Project Charter) de una sola página especificando objetivos SMART, entregables clave, presupuesto límite y fecha de corte.',
    domainContext: 'La planeación de negocios moderna ha abandonado los modelos estáticos para adoptar metodologías ágiles e iterativas basadas en datos empíricos.',
    strategicRationale: 'Un modelo validado en el mercado reduce drásticamente el riesgo de capital y acorta el tiempo necesario para alcanzar la rentabilidad operativa.'
  },
  'manejo-de-presupuesto': {
    frameworkName: 'Protocolo de Flujo de Caja Cero-Fugas y Asignación Estratégica de Capital',
    coreMetrics: ['Burn Rate Mensual Neto', 'Margen de Contribución Bruto', 'Días de Cuentas por Cobrar (DSO)', 'Punto de Equilibrio Operativo (Break-Even)', 'Colchón de Liquidez (Cash Buffer)'],
    caseCompany: 'Vanguard Retail & Distribución',
    caseOutcome: 'Incrementó el margen neto en un 18.5%, eliminó el 90% de las fugas de caja invisibles y amplió su colchón de liquidez de 22 días a 6 meses de operaciones blindadas.',
    pitfall: 'Mezclar las cuentas bancarias personales con las de la empresa y confundir la facturación contable emitida con la disponibilidad real de dinero líquido en banco.',
    actionItem1: 'Separar inmediatamente las cuentas bancarias corporativas de las personales y establecer una asignación salarial formal y fija para los socios directores.',
    actionItem2: 'Construir una hoja de cálculo con el flujo de caja proyectado a 13 semanas vista para anticipar y neutralizar cualquier brecha de liquidez antes de que ocurra.',
    actionItem3: 'Realizar un costeo marginal por línea de producto o servicio, descontando todos los costos variables directos para conocer el margen real por unidad vendida.',
    domainContext: 'La disciplina financiera es el sistema circulatorio del negocio; la falta de liquidez es la causa número uno de quiebra empresarial incluso en empresas con ventas en crecimiento.',
    strategicRationale: 'El control estricto del capital circulante permite reinvertir con solvencia en oportunidades de alta rentabilidad y resistir contracciones macroeconómicas.'
  },
  'servicio-al-cliente': {
    frameworkName: 'Arquitectura de Experiencia de Cliente Omnicanal de Alto Impacto (CSAT & NPS)',
    coreMetrics: ['Net Promoter Score (NPS)', 'First Contact Resolution (FCR)', 'Customer Effort Score (CES)', 'Tasa de Cancelación (Churn Rate)', 'Tiempo Medio de Primera Respuesta (FRT)'],
    caseCompany: 'Senda Digital Hospitality',
    caseOutcome: 'Aumentó el índice de recompra un 34.2%, elevó su NPS de +28 a +74 y redujo el tiempo promedio de resolución de incidencias de 24 horas a solo 12 minutos.',
    pitfall: 'Tratar el soporte al cliente como un centro de costos que hay que recortar en lugar del canal principal de retención, recomendación orgánica y ventas cruzadas.',
    actionItem1: 'Implementar un canal de mensajería instantánea profesional con respuestas automáticas contextuales y derivación prioritaria a operadores humanos capacitados.',
    actionItem2: 'Mapear exhaustivamente el Customer Journey e identificar el punto de mayor fricción cognitiva o técnica entre la compra y el uso del producto.',
    actionItem3: 'Crear un manual de respuestas modelo empáticas y resolutivas para las 10 situaciones y quejas más habituales reportadas por los usuarios.',
    domainContext: 'En un mercado donde los productos son fácilmente replicables, la experiencia memorable y el trato resolutivo constituyen la única barrera de entrada sostenible.',
    strategicRationale: 'Adquirir un cliente nuevo cuesta entre 5 y 7 veces más que retener a uno existente; la excelencia en servicio es el catalizador más potente de rentabilidad.'
  },
  'reclutamiento': {
    frameworkName: 'Método Topgrading & Entrevistas Estructuradas por Competencias Conductuales (STAR)',
    coreMetrics: ['Tiempo de Contratación (Time to Hire)', 'Calidad de la Contratación (Quality of Hire)', 'Tasa de Retención a 90 Días', 'Costo por Contratación (CPH)', 'Tasa de Aceptación de Ofertas'],
    caseCompany: 'Alpha Core Engineering',
    caseOutcome: 'Disminuyó la rotación temprana en un 60%, atrajo talento técnico senior de primer nivel y redujo los costos de selección externa en $35,000 anuales.',
    pitfall: 'Contratar por urgencia basándose en simpatía superficial e intuición personal sin haber definido previamente una rúbrica de evaluación objetiva y basada en evidencias.',
    actionItem1: 'Redactar una Ficha de Rendimiento de Puesto (Scorecard) basada en los 3 resultados medibles que el candidato deberá lograr en sus primeros 180 días.',
    actionItem2: 'Diseñar un banco de preguntas estructuradas bajo el método STAR (Situación, Tarea, Acción, Resultado) para evaluar competencias críticas.',
    actionItem3: 'Establecer una prueba técnica o simulación de trabajo remunerada como filtro decisorio previo a cualquier propuesta formal de contratación.',
    domainContext: 'El rendimiento de una organización nunca superará la calidad y alineación cultural de las personas que integran sus equipos clave.',
    strategicRationale: 'Una mala contratación cuesta en promedio entre 3 y 5 veces el salario anual del puesto; la metodología de selección rigurosa blinda el crecimiento.'
  },
  'operaciones-y-comercio': {
    frameworkName: 'Marco de Excelencia Operativa Lean & Cadena de Suministro Resiliente',
    coreMetrics: ['Lead Time de Entrega', 'Rotación de Inventario Anual', 'Costo Logístico por Pedido', 'Tasa de Pedidos Perfectos (OTIF)', 'Margen Operativo Bruto'],
    caseCompany: 'Nórdica E-commerce & Distribución Global',
    caseOutcome: 'Disminuyó los tiempos de despacho en un 45%, optimizó la rotación de stock de 3.2x a 7.8x anual y renegoció tarifas de transporte con un ahorro del 19%.',
    pitfall: 'Concentrar más del 70% de la producción en un único proveedor sin acuerdos de nivel de servicio (SLA) ni planes de contingencia documentados.',
    actionItem1: 'Efectuar un análisis ABC de inventario para categorizar los productos por volumen de rotación y contribución al margen neto de la empresa.',
    actionItem2: 'Auditar los contratos vigentes con proveedores clave y renegociar condiciones comerciales y plazos de pago extendidos a 45 o 60 días.',
    actionItem3: 'Implementar protocolos de verificación en dos pasos (2FA), copias de seguridad automáticas y políticas de ciberseguridad en todos los accesos operativos.',
    domainContext: 'La eficiencia operativa y el control de la cadena de suministro convierten la promesa comercial en margen financiero tangible y satisfacción del consumidor.',
    strategicRationale: 'Eliminar el desperdicio en los flujos de trabajo incrementa la rentabilidad sin necesidad de aumentar la inversión publicitaria ni inflar los precios.'
  },
  'ventas': {
    frameworkName: 'Sistema de Venta Consultiva Challenger, BANT & Prospección Predictiva',
    coreMetrics: ['Tasa de Conversión de Oportunidades (Win Rate)', 'Ticket Promedio de Venta', 'Duración del Ciclo de Ventas', 'Velocidad del Pipeline Comercial', 'Valor Total del Pipeline'],
    caseCompany: 'Horizonte B2B Solutions',
    caseOutcome: 'Triplicó la tasa de cierre de propuestas de alto valor del 14% al 42%, acortó el ciclo de venta promedio de 90 a 38 días y aumentó el ticket medio un 28%.',
    pitfall: 'Centrar el discurso comercial en enumerar características técnicas del producto en lugar de diagnosticar y cuantificar el dolor financiero del comprador.',
    actionItem1: 'Definir un protocolo de cualificación BANT (Presupuesto, Autoridad, Necesidad y Tiempo) para descartar prospectos no viables en los primeros 15 minutos.',
    actionItem2: 'Elaborar un documento de manejo de objeciones con argumentos basados en ROI, testimonios con cifras verificables y garantías de mitigación de riesgo.',
    actionItem3: 'Lanzar una secuencia de reactivación personalizada de 3 contactos para prospectos que se enfriaron en el pipeline durante los últimos 90 días.',
    domainContext: 'La venta profesional contemporánea es un ejercicio de consultoría estratégica donde el vendedor actúa como asesor de confianza y catalizador de valor.',
    strategicRationale: 'Un pipeline estructurado con etapas claras y criterios de salida objetivos elimina la incertidumbre comercial y permite planificar la tesorería con exactitud.'
  },
  'inclusion-en-el-trabajo': {
    frameworkName: 'Marco de Cultura Inclusiva, Seguridad Psicológica y Equidad Organizacional',
    coreMetrics: ['Índice de Seguridad Psicológica Interna', 'Tasa de Participación en Toma de Decisiones', 'Retención por Diversidad', 'Brecha Salarial Interna', 'NPS del Empleado (eNPS)'],
    caseCompany: 'Prisma Global Technologies',
    caseOutcome: 'Incrementó el compromiso del equipo en un 41%, redujo la fuga de talento femenino y diverso al 4% anual y fomentó 12 patentes nacidas de equipos multifuncionales.',
    pitfall: 'Implementar iniciativas cosméticas de relaciones públicas sin revisar las políticas de promoción, evaluación salarial y dinámicas de reuniones internas.',
    actionItem1: 'Auditar la dinámica de reuniones de equipo implementando rondas de opinión equitativas y anonimización en la generación inicial de ideas.',
    actionItem2: 'Revisar las descripciones de puestos para eliminar sesgos inconscientes en el lenguaje que disuadan a candidatos con diversos trasfondos.',
    actionItem3: 'Establecer canales confidenciales y seguros para el reporte de incidentes y sugerencias de mejora en el entorno laboral.',
    domainContext: 'Los entornos laborales inclusivos atraen un abanico más amplio de perspectivas, lo que se traduce en mayor innovación y mejor resolución de problemas complejos.',
    strategicRationale: 'Las empresas con alta diversidad y seguridad psicológica superan a sus pares de la industria en un 25% en rentabilidad e innovación según estudios globales.'
  },
  'productividad-laboral': {
    frameworkName: 'Sistema de Enfoque Profundo, Gestión por OKRs y Eliminación de Fricción Operativa',
    coreMetrics: ['Cumplimiento de Objetivos Clave (OKRs)', 'Horas de Trabajo Profundo Semanales (Deep Work)', 'Ratio de Tareas Estratégicas vs. Reactivas', 'Lead Time de Entrega de Proyectos', 'Nivel de Sobrecarga Percibida'],
    caseCompany: 'Sinergia Digital Studio',
    caseOutcome: 'Elevó la entrega de proyectos a tiempo del 62% al 94%, liberó 12 horas semanales por directivo para planeación estratégica y redujo el burnout a cero.',
    pitfall: 'Confundir el activismo frenético y la hiperconexión en chats con productividad real orientada a resultados estratégicos de negocio.',
    actionItem1: 'Definir 2 Objetivos trimestrales con 3 Resultados Clave (OKRs) numéricos para cada área y comunicarlos en un panel visible para toda la organización.',
    actionItem2: 'Bloquear 2 bloques diarios de 90 minutos de trabajo concentrado sin notificaciones ni reuniones para el desarrollo de tareas de alto impacto.',
    actionItem3: 'Eliminar las reuniones informativas recurrentes sustituyéndolas por memorandos asíncronos breves con actualización de métricas.',
    domainContext: 'La atención es el recurso más escaso de la era digital; estructurar la jornada en torno a entregables cuantificables protege la energía del equipo.',
    strategicRationale: 'Optimizar la productividad operativa permite a la empresa escalar su volumen de negocio sin incrementar los costos fijos de manera desproporcionada.'
  },
  'gestion-de-empleados': {
    frameworkName: 'Liderazgo Situacional, Coaching Ejecutivo y Cultura de Alta Responsabilidad (Accountability)',
    coreMetrics: ['Índice de Compromiso del Equipo (eNPS)', 'Tasa de Rotación Voluntaria', 'Cumplimiento de Metas Individuales', 'Frecuencia de Sesiones 1-a-1 Efectivas', 'Índice de Desarrollo de Liderazgo'],
    caseCompany: 'Meridiano Health Group',
    caseOutcome: 'Redujo la rotación voluntaria de personal clave del 28% al 6%, mejoró la evaluación de clima laboral en un 52% y promovió internamente al 80% de los nuevos mandos.',
    pitfall: 'Practicar la microgestión asfixiante sobre los colaboradores con talento o, en el extremo opuesto, abdicar de la supervisión sin brindar dirección ni apoyo.',
    actionItem1: 'Instituir sesiones individuales quincenales (1-on-1) de 30 minutos enfocadas en desarrollo personal, bloqueos operativos y feedback bidireccional.',
    actionItem2: 'Construir una matriz de delegación que defina con nitidez los niveles de autonomía para la toma de decisiones y el gasto de presupuesto.',
    actionItem3: 'Implementar un sistema transparente de reconocimiento por logros alineados con los valores troncales de la empresa.',
    domainContext: 'Los líderes sobresalientes no gestionan tareas, sino que potencian el criterio, la autonomía y el compromiso de sus colaboradores directos.',
    strategicRationale: 'El liderazgo inspirador multiplica el rendimiento del capital humano, convirtiendo al equipo en el activo más valioso de la organización.'
  },
  'desarrollo-de-carrera': {
    frameworkName: 'Estrategia de Posicionamiento Profesional, Redes de Influencia y Negociación de Alto Valor',
    coreMetrics: ['Crecimiento Porcentual de Remuneración', 'Ratio de Oportunidades Entrantes vs. Salientes', 'Alcance de la Red Estratégica de Contactos', 'Índice de Reputación en el Sector', 'Tasa de Conversión en Entrevistas Ejecutivas'],
    caseCompany: 'Vanguard Executive Network',
    caseOutcome: 'Capacitó a más de 120 ejecutivos para posicionarse en puestos de dirección C-Level, logrando incrementos salariales promedio del 45% y contratos blindados.',
    pitfall: 'Esperar pasivamente a que el buen trabajo hable por sí solo sin gestionar activamente la visibilidad profesional, la red de contactos ni la reputación en la industria.',
    actionItem1: 'Elaborar un documento con tus 5 logros de mayor impacto económico cuantificado en términos de ahorro de costos o generación de ingresos.',
    actionItem2: 'Conectar semanalmente con 3 profesionales referentes de tu sector mediante mensajes personalizados de aporte de valor sin pedir favores inmediatos.',
    actionItem3: 'Preparar un guion estructurado de negociación salarial fundamentado en estudios de mercado del sector y valor proyectado para la organización.',
    domainContext: 'La trayectoria profesional debe gestionarse con la misma rigurosidad estratégica que una empresa: posicionamiento, propuesta de valor y canales de distribución.',
    strategicRationale: 'Construir una marca profesional sólida otorga poder de negociación, resiliencia ante cambios económicos y acceso a oportunidades de primer orden.'
  },
  'fidelidad-del-cliente': {
    frameworkName: 'Sistema de Retención Activa, Fidelización por Valor y Programas de Embajadores de Marca',
    coreMetrics: ['Tasa de Retención de Clientes (CRR)', 'Valor de Vida del Cliente (LTV)', 'Tasa de Recompra Recurrente', 'Net Promoter Score (NPS)', 'Ratio de Referidos por Cliente Activo'],
    caseCompany: 'Aura Lifestyle & Wellness',
    caseOutcome: 'Elevó la tasa de retención anual del 44% al 81%, generó el 38% de sus nuevas ventas a través de recomendaciones de clientes fieles y redujo el CAC a la mitad.',
    pitfall: 'Asumir que un cliente que no se queja está satisfecho y descuidar el contacto proactivo posterior a la compra.',
    actionItem1: 'Diseñar una secuencia de onboarding automatizada pero con toques humanos que garantice que el cliente obtenga su primer triunfo rápido con el producto.',
    actionItem2: 'Crear un programa de beneficios exclusivos o acceso anticipado para el 20% de clientes que generan el 80% de la facturación de tu negocio.',
    actionItem3: 'Implementar una encuesta de satisfacción automatizada tras cada interacción crítica con llamada de rescate en menos de 2 horas para notas bajas.',
    domainContext: 'La lealtad del cliente no se compra con descuentos vacíos, sino con una entrega consistente de valor superior, confianza y reconocimiento continuo.',
    strategicRationale: 'Maximizar el LTV a través de la retención permite superar a los competidores en inversión de adquisición de nuevos usuarios manteniendo altos márgenes.'
  },
  'sitio-web': {
    frameworkName: 'Arquitectura Web de Alta Conversión, Rendimiento Técnico Core Web Vitals y Seguridad',
    coreMetrics: ['Tasa de Conversión Web (CR)', 'Velocidad de Carga (LCP < 2.5s)', 'Tasa de Rebote Técnica', 'Ratio de Conversión Mobile vs. Desktop', 'Uptime del Servidor (99.9%)'],
    caseCompany: 'Apex Digital Commerce',
    caseOutcome: 'Aceleró el tiempo de carga móvil de 5.4s a 1.2s, lo que disparó la tasa de conversión en un 64% y aumentó las transacciones completadas en $210,000.',
    pitfall: 'Diseñar sitios web visualmente atractivos pero técnicamente pesados, con llamadas a la acción confusas y mala adaptación a dispositivos móviles.',
    actionItem1: 'Auditar la velocidad del sitio con Google PageSpeed Insights y comprimir todas las imágenes al formato WebP optimizado.',
    actionItem2: 'Ubicar una llamada a la acción (CTA) clara y visible en el primer pliegue de la pantalla principal con propuesta de valor explícita.',
    actionItem3: 'Instalar certificado SSL forzado (HTTPS), copias de respaldo automatizadas diarias y escaneo de vulnerabilidades en el servidor.',
    domainContext: 'Tu sitio web es el escaparate digital principal de tu empresa; cada segundo de retraso en la carga reduce la conversión un 7% de manera directa.',
    strategicRationale: 'Una plataforma web rápida, segura y accesible optimiza el rendimiento de todas las inversiones en pauta publicitaria y posicionamiento orgánico.'
  },
  'branding': {
    frameworkName: 'Arquitectura de Marca Inconfundible, Arquetipos de Personalidad y Storybrand',
    coreMetrics: ['Notoriedad de Marca Espontánea y Sugerida', 'Poder de Fijación de Precios (Price Premium)', 'Consistencia Visual y Verbal', 'Tasa de Recuerdo de Marca', 'Valor Percibido'],
    caseCompany: 'Vallejo Artisan Goods',
    caseOutcome: 'Rediseñó su posicionamiento de marca permitiéndole incrementar sus precios un 35% sin perder volumen de ventas y consiguiendo acuerdos de distribución premium.',
    pitfall: 'Cambiar constantemente los colores, el tono de voz y los mensajes en redes sociales, generando confusión y restando credibilidad al negocio.',
    actionItem1: 'Definir el manual de identidad de marca condensado en 1 página: propósito, arquetipo de personalidad, paleta cromática, tipografías y tono de comunicación.',
    actionItem2: 'Redactar el manifiesto de la marca y la propuesta única de valor respondiendo con total claridad a: ¿Para quién es? ¿Qué problema resuelve? ¿Qué lo hace único?',
    actionItem3: 'Auditar todos los puntos de contacto con el cliente (empaque, facturas, emails, redes) para garantizar una coherencia visual y de mensaje absoluta.',
    domainContext: 'La marca no es un logotipo bonito, es la suma de todas las emociones, percepciones y recuerdos que una persona experimenta al pensar en tu empresa.',
    strategicRationale: 'Una marca potente permite cobrar precios superiores (Price Premium), reduce el costo de adquisición de clientes y genera preferencia duradera en el mercado.'
  },
  'experiencia-del-usuario': {
    frameworkName: 'Diseño Centrado en el Usuario (UX/UI), Metodología Double Diamond y Arquitectura de Información',
    coreMetrics: ['Tasa de Finalización de Tareas (Task Success Rate)', 'Tiempo Promedio en Tarea (Time on Task)', 'Customer Effort Score (CES)', 'Tasa de Abandono en Checkout', 'System Usability Scale (SUS)'],
    caseCompany: 'Fintech Nova Pagos',
    caseOutcome: 'Redujo los pasos de registro de 8 a 3 pantallas, incrementó la activación de usuarios en un 47% y disminuyó las consultas al centro de soporte en un 65%.',
    pitfall: 'Diseñar interfaces basándose en las preferencias subjetivas del equipo de desarrollo en lugar de observar el comportamiento real de usuarios finales interactuando con la plataforma.',
    actionItem1: 'Grabar 5 sesiones de prueba de usabilidad con usuarios representativos completando el flujo principal de compra o registro para detectar bloqueos.',
    actionItem2: 'Simplificar los formularios eliminando todos los campos no esenciales para la transacción inmediata.',
    actionItem3: 'Garantizar el contraste cromático adecuado según las pautas WCAG 2.1 AA y verificar que las áreas táctiles móviles midan al menos 44x44 píxeles.',
    domainContext: 'Una interfaz intuitiva elimina la fricción mental del usuario, guiándolo de forma fluida y natural hacia la consecución de sus objetivos dentro de la plataforma.',
    strategicRationale: 'Cada dólar invertido en optimización de la experiencia de usuario (UX) genera un retorno promedio de entre $10 y $100 en valor económico para la empresa.'
  },
  'intro-al-marketing-digital': {
    frameworkName: 'Fundamentos de Tracción Digital, Google Ads & Presencia Local Estratégica',
    coreMetrics: ['Costo por Clic (CPC)', 'Tasa de Clics (CTR)', 'Retorno de Inversión Publicitaria (ROAS)', 'Posicionamiento en Búsquedas Locales', 'Tasa de Conversión de Landing Page'],
    caseCompany: 'Clínica Dental San Patricio',
    caseOutcome: 'Multiplicó sus citas de nuevos pacientes en un 120% a través de campañas locales en Google Search con un costo por adquisición 60% menor al promedio del sector.',
    pitfall: 'Invertir dinero en publicidad digital enviando el tráfico a la página de inicio genérica en lugar de una página de destino (landing page) optimizada para la oferta.',
    actionItem1: 'Optimizar al 100% el Perfil de Empresa en Google (Google Business Profile) con fotos actualizadas, horario verificado y catálogo de servicios.',
    actionItem2: 'Estructurar una campaña de búsqueda en Google Ads con palabras clave de alta intención de compra y concordancia de frase exacta.',
    actionItem3: 'Implementar un sistema automatizado para solicitar reseñas positivas a clientes satisfechos justo después de finalizar la compra o servicio.',
    domainContext: 'El marketing digital básico bien ejecutado permite a cualquier empresa capturar la demanda existente de clientes que ya están buscando activamente sus servicios.',
    strategicRationale: 'Dominar los fundamentos de la pauta y la visibilidad local genera un flujo constante y predecible de clientes potenciales calificados cada semana.'
  },
  'marketing-digital-avanzado': {
    frameworkName: 'Motor de Crecimiento Omnicanal, Algoritmos de Machine Learning y Atribución Multitáctil',
    coreMetrics: ['ROAS Consolidado (Retorno del Gasto Publicitario)', 'CPA Objetivo (Costo por Adquisición)', 'Valor del Tiempo de Vida del Cliente (LTV)', 'Tasa de Conversión Incremental', 'MER (Marketing Efficiency Ratio)'],
    caseCompany: 'Nexum Global Fashion Tech',
    caseOutcome: 'Escaló la inversión publicitaria mensual de $10,000 a $150,000 manteniendo un ROAS consolidado de 4.2x mediante optimización de creativos y API de conversiones.',
    pitfall: 'Segmentar manualmente audiencias hiper-reducidas impidiendo que los algoritmos de aprendizaje automático de las plataformas optimicen las pujas en tiempo real.',
    actionItem1: 'Configurar la API de conversiones del servidor (Server-Side Tracking) para evitar la pérdida de datos de atribución provocada por bloqueadores y cookies.',
    actionItem2: 'Diseñar 4 variantes creativas con ganchos visuales contrastantes para testeo continuo y dinámico en plataformas de anuncios.',
    actionItem3: 'Implementar una campaña de remarketing dinámico por catálogo basada en eventos de interacción específicos dentro de la plataforma.',
    domainContext: 'El marketing digital avanzado combina ciencia de datos, psicología publicitaria y automatización para escalar la adquisición de clientes con predictibilidad.',
    strategicRationale: 'Alinear los algoritmos con objetivos de valor real (LTV en lugar de clics) maximiza el rendimiento del capital invertido y supera a la competencia.'
  },
  'tracking-y-analisis': {
    frameworkName: 'Arquitectura de Medición de Datos en GA4, Modelos de Atribución y Cuadro de Mando Integral',
    coreMetrics: ['Tasa de Conversión por Canal', 'Eventos Clave Personalizados', 'Valor Medio por Sesión', 'Tasa de Microconversión', 'Margen Neto Atribuido'],
    caseCompany: 'DataPulse Analytics B2B',
    caseOutcome: 'Identificó una fuga del 42% en el paso 2 del proceso de compra y recuperó $85,000 en facturación anual tras corregir el error detectado en el embudo.',
    pitfall: 'Medir métricas de vanidad (visitas totales, likes, impresiones) que no guardan correlación directa con la rentabilidad y los ingresos netos del negocio.',
    actionItem1: 'Definir en una sola hoja los 5 KPIs que determinan la salud financiera y comercial de la empresa y asegurar que se actualicen automáticamente.',
    actionItem2: 'Configurar el seguimiento de eventos personalizados en Google Analytics 4 utilizando Google Tag Manager con parámetros claros de valor y categoría.',
    actionItem3: 'Establecer una rutina directiva semanal de 30 minutos para analizar desviaciones de métricas y tomar decisiones operativas basadas en datos.',
    domainContext: 'Sin datos precisos, cualquier estrategia comercial es una conjetura; la analítica rigurosa ilumina qué canales generan beneficios reales y cuáles drenan capital.',
    strategicRationale: 'Decidir con base en métricas verificables ahorra miles de dólares en inversiones fallidas y enfoca la energía del equipo en lo que verdaderamente funciona.'
  },
  'marketing-en-redes-sociales': {
    frameworkName: 'Estrategia de Social Commerce, Construcción de Comunidad y Distribución Orgánica & Paga',
    coreMetrics: ['Tasa de Interacción Real (Engagement Rate)', 'Costo por Resultado Comercial', 'Tráfico Web Generado desde Redes', 'Tasa de Conversión de Social Commerce', 'Alcance Efectivo en Audiencia Objetivo'],
    caseCompany: 'Vesta Living Concept',
    caseOutcome: 'Construyó una comunidad activa de 180,000 seguidores en Instagram y TikTok, generando el 55% de sus ventas directas a través de transmisiones en vivo y catálogos integrados.',
    pitfall: 'Publicar contenido promocional repetitivo e impersonal sin aportar valor educativo, entretenimiento o solución a las dudas de la audiencia.',
    actionItem1: 'Diseñar una matriz de contenido con la regla 70/20/10: 70% educativo/entretenimiento, 20% conversación comunitaria y 10% venta directa.',
    actionItem2: 'Configurar la tienda integrada en redes sociales (Instagram Shopping / TikTok Shop) vinculada al catálogo de productos con etiquetado dinámico.',
    actionItem3: 'Establecer alianzas de colaboración con microinfluencers de nicho acordando comisiones por ventas mediante códigos de descuento personalizados.',
    domainContext: 'Las redes sociales no son tablones de anuncios, sino plazas públicas donde las marcas deben cultivar relaciones genuinas antes de pedir la compra.',
    strategicRationale: 'Una comunidad comprometida en redes genera contenido generado por usuarios (UGC), reduce los costos de adquisición y amplifica el boca a boca.'
  },
  'video-marketing': {
    frameworkName: 'Ecosistema de Contenido Audiovisual de Alto Impacto, YouTube & Video de Formato Corto',
    coreMetrics: ['Retención de Audiencia en los Primeros 3 Segundos (Hook Rate)', 'Tiempo Medio de Reproducción (Average Watch Time)', 'Tasa de Conversión Post-Visualización', 'Costo por Vista Completa (CPV)', 'Tasa de Clics en Video (VTR)'],
    caseCompany: 'Lumina Learning Academy',
    caseOutcome: 'Desarrolló un canal de YouTube empresarial que captó 85,000 suscriptores orgánicos y generó un flujo mensual de 350 prospectos calificados para sus programas.',
    pitfall: 'Comenzar los videos con introducciones largas y logotipos animados en lugar de atrapar la atención del espectador en los primeros 3 segundos con un gancho directo.',
    actionItem1: 'Estructurar los primeros 5 segundos de cada video con la fórmula: Problema punzante + Promesa de solución + Prueba de credibilidad.',
    actionItem2: 'Publicar una serie semanal de 3 videos verticales cortos (Reels/Shorts/TikTok) respondiendo a las preguntas más frecuentes de tus clientes.',
    actionItem3: 'Incluir llamadas a la acción verbales y gráficas con enlaces directos en la descripción y primer comentario fijado de cada video.',
    domainContext: 'El formato de video es el vehículo de comunicación más persuasivo en internet por su capacidad única de transmitir empatía, confianza y claridad técnica.',
    strategicRationale: 'Los videos educativos posicionan a la empresa como la autoridad máxima en su especialidad, acelerando la confianza y acortando los ciclos de venta.'
  },
  'email-marketing': {
    frameworkName: 'Sistemas de Automatización de Email, Secuencias de Nutrición y Copywriting Persuasivo',
    coreMetrics: ['Tasa de Apertura Única (Open Rate > 25%)', 'Tasa de Clics sobre Apertura (CTOR > 12%)', 'Ingresos por Suscriptor (RPS)', 'Tasa de Baja (Unsubscribe Rate < 0.3%)', 'Tasa de Conversión de Flujos Automatizados'],
    caseCompany: 'Krea Gourmet Coffee Club',
    caseOutcome: 'Diseñó un embudo de email marketing automatizado que representó el 41% de la facturación total de la empresa con un costo marginal de envío cercano a cero.',
    pitfall: 'Enviar boletines genéricos masivos sin segmentar a la audiencia según su comportamiento de compra e intereses específicos.',
    actionItem1: 'Configurar una secuencia de bienvenida de 4 correos automatizados que cuente la historia de la marca y entregue valor inmediato al nuevo suscriptor.',
    actionItem2: 'Implementar un flujo de recuperación de carritos abandonados con 3 recordatorios secuenciales escalonados en 1, 24 y 48 horas.',
    actionItem3: 'Limpiar la base de datos de correos cada 90 días, eliminando o reenganchando a los suscriptores inactivos para proteger la entregabilidad.',
    domainContext: 'La lista de correos electrónicos es el único canal digital de comunicación directa y propiedad absoluta de la empresa, libre de cambios de algoritmos ajenos.',
    strategicRationale: 'El email marketing mantiene un ROI histórico promedio de $36 por cada $1 invertido, convirtiéndolo en la herramienta de monetización más rentable del arsenal digital.'
  },
  'marketing-de-contenido': {
    frameworkName: 'Estrategia de Contenidos Evergreen, E-E-A-T, Storytelling Corporativo y Autoridad de Dominio',
    coreMetrics: ['Tráfico Orgánico Calificado', 'Tiempo de Permanencia en Página (> 3 min)', 'Tasa de Conversión a Lead (Lead Magnet Conversion)', 'Backlinks Ganados de Alta Autoridad', 'Costo por Lead Orgánico'],
    caseCompany: 'Apolo Legal & Compliance',
    caseOutcome: 'Posicionó su blog corporativo como referencia nacional con más de 120,000 visitas mensuales orgánicas y 400 solicitudes de consultoría corporativa al año.',
    pitfall: 'Publicar contenido superficial y redundante que no aporta perspectivas originales ni resuelve a fondo la duda del lector objetivo.',
    actionItem1: 'Investigar las 10 preguntas más críticas y complejas que hacen tus clientes potenciales y redactar guías completas y definitivas para responderlas.',
    actionItem2: 'Crear un recurso descargable de alto valor (plantilla, calculadora, checklist en PDF) a cambio del email del visitante para construir la base de prospectos.',
    actionItem3: 'Reutilizar cada contenido extenso dividiéndolo en 5 publicaciones para redes sociales, un boletín de email y un guion para video corto.',
    domainContext: 'El marketing de contenidos transforma la empresa de cazadora de clientes en un faro que atrae magnéticamente a compradores listos para tomar una decisión.',
    strategicRationale: 'Un activo de contenido de calidad sigue generando visitas, credibilidad y prospectos durante años sin requerir presupuesto de pauta adicional.'
  },
  'investigacion-de-mercado': {
    frameworkName: 'Marco de Descubrimiento de Clientes, Design Thinking y Validación Cuantitativa/Cualitativa',
    coreMetrics: ['Índice de Product-Market Fit (PMF > 40%)', 'Tasa de Satisfacción de Necesidad Crítica', 'Tamaño de Mercado Accesible (SOM)', 'Willingness to Pay (Disposición a Pagar)', 'Tasa de Validación de Hipótesis'],
    caseCompany: 'BioSmart Foods',
    caseOutcome: 'Validó el prototipo de su snack funcional con 500 consumidores antes de producir a escala, ahorrando $120,000 en costos de maquinaria innecesaria y agotando el primer lote.',
    pitfall: 'Preguntar a amigos y familiares si les gusta la idea de negocio en lugar de exigir compromisos reales de compra o tiempo a clientes objetivos desconocidos.',
    actionItem1: 'Conducir una prueba de "humo" (Smoke Test) con una página sencilla para medir la cantidad de personas dispuestas a registrarse antes de crear el producto final.',
    actionItem2: 'Analizar las reseñas negativas de 1 a 3 estrellas de los 3 principales competidores en Amazon o Google para identificar sus fallas desatendidas.',
    actionItem3: 'Realizar 10 entrevistas individuales preguntando sobre comportamientos pasados comprobables ("¿Cuánto gastaste el mes pasado en resolver esto?") y no intenciones futuras.',
    domainContext: 'La investigación de mercado moderna no es un informe estático de biblioteca, sino un proceso dinámico de contrastación de hipótesis contra la realidad.',
    strategicRationale: 'Conocer las frustraciones y motivaciones profundas del consumidor permite diseñar ofertas irresistibles que se venden prácticamente solas.'
  },
  'promocion-de-app': {
    frameworkName: 'App Store Optimization (ASO), Retención de Cohortes y Bucles de Crecimiento Viral',
    coreMetrics: ['Costo por Instalación (CPI)', 'Tasa de Conversión en Ficha de Tienda (Store CR)', 'Retención de Usuarios Día 1, Día 7 y Día 30 (D1/D7/D30)', 'Valor de Vida del Usuario de App (LTV)', 'Tasa de K-Factor (Viralidad)'],
    caseCompany: 'PulseFit Workout App',
    caseOutcome: 'Optimizó su ficha en App Store y Google Play logrando un aumento del 85% en descargas orgánicas y una retención al día 30 del 28% (duplicando la media de la industria).',
    pitfall: 'Gastar todo el presupuesto de lanzamiento en conseguir descargas masivas sin haber optimizado la experiencia de onboarding y la retención del primer uso.',
    actionItem1: 'Optimizar el título, subtítulo, capturas de pantalla y video promocional de la tienda destacando claramente el beneficio principal para el usuario.',
    actionItem2: 'Diseñar un flujo de onboarding interactivo que permita al usuario experimentar el valor central de la app en menos de 60 segundos desde la apertura.',
    actionItem3: 'Configurar notificaciones push segmentadas basadas en eventos de uso para reenganchar a los usuarios que abandonan la app en los días 3 y 7.',
    domainContext: 'El éxito de una aplicación móvil no se mide por las instalaciones totales, sino por la frecuencia y el hábito con el que los usuarios regresan a ella cada día.',
    strategicRationale: 'Una alta retención y un ASO optimizado reducen drásticamente el costo de adquisición y crean un negocio escalable con ingresos recurrentes.'
  },
  'gestion-de-agencias': {
    frameworkName: 'Gobernanza de Proveedores Estratégicos, Briefing de Alto Rendimiento y Acuerdos por Resultados',
    coreMetrics: ['Retorno de Inversión en Agencias (ROA)', 'Cumplimiento de Plazos Acordados (SLA)', 'Calidad de Entregables según Rúbrica', 'Costo Total de Adquisición Agregado', 'Alineación Estratégica'],
    caseCompany: 'Global Pharma Innovations',
    caseOutcome: 'Reestructuró sus contratos con 4 agencias creativas y de medios hacia modelos vinculados a objetivos comerciales, elevando el ROI de marketing en un 38%.',
    pitfall: 'Contratar agencias con briefings ambiguos y esperar que adivinen los objetivos de negocio sin supervisión directiva ni métricas de éxito pactadas.',
    actionItem1: 'Redactar briefs de proyecto exhaustivos especificando el objetivo de negocio, público meta, tono de marca, presupuesto inamovible y KPIs de evaluación.',
    actionItem2: 'Establecer reuniones quincenales de rendimiento basadas en paneles de datos compartidos en tiempo real en lugar de informes mensuales estáticos en PDF.',
    actionItem3: 'Negociar esquemas de compensación híbridos que combinen un fee base competitivo con bonificaciones directas por superación de metas comerciales.',
    domainContext: 'Una agencia externa debe gestionarse como una extensión especializada del equipo interno, alineada en incentivos y con total transparencia operativa.',
    strategicRationale: 'Una gestión profesional de agencias maximiza el rendimiento del presupuesto publicitario y libera tiempo interno para enfocarse en la estrategia troncal.'
  },
  'inteligencia-artificial': {
    frameworkName: 'Arquitectura de Inteligencia Artificial Aplicada, Prompt Engineering & Agentes Autónomos',
    coreMetrics: ['Ahorro de Horas/Hombre Semanales', 'Precisión de Inferencia y Salida Estructurada', 'Costo por Token Procesado ($0 a $0.002 USD)', 'Tasa de Éxito en Tareas Automatizadas', 'ROI de Implementación en < 30 Días'],
    caseCompany: 'FinTech Inteligente LATAM',
    caseOutcome: 'Automatizó el 75% de sus procesos operativos repetitivos e integró agentes de IA en atención al cliente y ventas, reduciendo costos en un 40% y duplicando la velocidad de entrega.',
    pitfall: 'Usar modelos genéricos sin prompts estructurados ni instrucciones de sistema o automatizar procesos caóticos sin estandarización previa.',
    actionItem1: 'Identificar los 3 procesos más lentos del equipo y construir un prototipo en Google AI Studio o Claude Projects.',
    actionItem2: 'Estandarizar un repositorio interno de mega-prompts RISE para toda la organización.',
    actionItem3: 'Implementar flujos automatizados conectados con Make.com y APIs de IA con manejo de errores.',
    domainContext: 'La Inteligencia Artificial no es una promesa futura sino la ventaja competitiva más determinante de esta década para multiplicar la productividad empresarial.',
    strategicRationale: 'Integrar IA en las operaciones permite a las empresas escalar su facturación sin necesidad de incrementar linealmente su gasto en nómina.'
  },
  'ingles-profesional': {
    frameworkName: 'Método de Comunicación Ejecutiva, Negociación Internacional & Fonética Figurativa en Español',
    coreMetrics: ['Claridad y Fluidez en Presentaciones Ejecutivas', 'Confianza en Llamadas y Entrevistas Remotas en USD', 'Precisión en Redacción de Correos Breves', 'Dominio de Vocabulario Financiero y Contractual', 'Comprensión de Acentos Globales'],
    caseCompany: 'Consultor y Desarrollador Remoto Global',
    caseOutcome: 'Dominó la comunicación ejecutiva y pronunciación figurada en inglés, consiguiendo contratos de consultoría remota en dólares (USD) y superando entrevistas internacionales con éxito.',
    pitfall: 'Traducir literalmente del español al inglés palabra por palabra o quedarse en silencio por miedo a cometer errores de pronunciación.',
    actionItem1: 'Practicar 15 minutos diarios de lectura en voz alta utilizando las transcripciones de pronunciación figurada.',
    actionItem2: 'Estructurar tus respuestas profesionales con el método STAR para entrevistas y llamadas de venta.',
    actionItem3: 'Redactar propuestas comerciales y correos de seguimiento aplicando el formato ejecutivo de menos de 100 palabras.',
    domainContext: 'El inglés profesional es el multiplicador de ingresos más potente para acceder a salarios y contratos en moneda dura en la economía global.',
    strategicRationale: 'Hablar con naturalidad y entonación ejecutiva posiciona al profesional como un par estratégico de alto nivel ante clientes internacionales.'
  },
  'google-studio': {
    frameworkName: 'Ecosistema de Business Intelligence con Google Looker Studio & Google AI Studio',
    coreMetrics: ['Tiempo de Carga de Dashboards (< 3s)', 'Precisión en Extracción de Insights en Lenguaje Natural', 'Unificación de Fuentes de Datos (Data Blending)', 'Tasa de Adopción por la Junta Directiva', 'Costo de Licencias ($0 USD)'],
    caseCompany: 'Empresa de Retail y Distribución Multi-Canal',
    caseOutcome: 'Centralizó sus datos de ventas, pauta y finanzas en dashboards interactivos de Looker Studio e integró Gemini para análisis predictivo semanal, ahorrando 15 horas de reportes en Excel.',
    pitfall: 'Saturar los dashboards con decenas de gráficos innecesarios sin respetar la jerarquía visual ni la regla de los 5 segundos.',
    actionItem1: 'Conectar Google Sheets y GA4 a Looker Studio y diseñar un panel de control con 4 Scorecards de KPIs clave.',
    actionItem2: 'Crear campos calculados con funciones CASE WHEN para segmentación automática de clientes y márgenes.',
    actionItem3: 'Automatizar el envío programado de reportes en PDF por correo a los socios todos los lunes a las 8:00 AM.',
    domainContext: 'Google Studio combina el análisis de datos visual con la potencia generativa de Gemini para brindar visibilidad total del negocio sin costo de software.',
    strategicRationale: 'Un dashboard ejecutivo claro permite a los directores tomar decisiones inmediatas basadas en datos reales y no en suposiciones.'
  },
  'google-antigravity': {
    frameworkName: 'Arquitectura de Desarrollo Asistido por Agentes IA, Planning Mode & Edición Atómica con AGY',
    coreMetrics: ['Velocidad de Creación de Software (10x vs Tradicional)', 'Precisión en Ediciones Atómicas de Código (100%)', 'Tasa de Éxito en Compilaciones de TypeScript', 'Tiempo de Construcción de MVPs (< 48 horas)', 'Aislamiento de Workspaces Branch/Share'],
    caseCompany: 'Startup de Software Ágil NovaTech',
    caseOutcome: 'Desarrolló y desplegó una plataforma web interactiva en 3 días utilizando Google Antigravity con subagentes especializados y despliegue continuo en Cloudflare Pages.',
    pitfall: 'Hacer cambios destructivos o refactorizaciones masivas sin utilizar el Planning Mode previo ni verificar tipos con TypeScript.',
    actionItem1: 'Configurar el archivo AGENTS.md en el repositorio con las directrices de arquitectura y gobernanza.',
    actionItem2: 'Utilizar el Planning Mode para investigar y validar el diseño antes de ejecutar ediciones atómicas.',
    actionItem3: 'Orquestar subagentes especializados y cron jobs reactivos para acelerar el desarrollo y despliegue del proyecto.',
    domainContext: 'Google Antigravity redefine la ingeniería de software permitiendo a los desarrolladores actuar como arquitectos que lideran equipos de agentes autónomos.',
    strategicRationale: 'La velocidad de desarrollo de software asistido por agentes permite validar modelos de negocio y lanzar productos al mercado en días en lugar de meses.'
  },
  'google-workspace': {
    frameworkName: 'Transformación Digital de Procesos, Colaboración en Tiempo Real & No-Code Apps con AppSheet',
    coreMetrics: ['Ahorro de Tiempo en Tareas Administrativas (-70%)', 'Tasa de Adopción de la Suite por Colaboradores (> 95%)', 'Integridad de Datos en Hojas de Cálculo (100%)', 'Seguridad en Unidades Compartidas de Drive', 'Velocidad de Respuesta con Gmail y Forms'],
    caseCompany: 'Cadena de Servicios y Logística Corporativa',
    caseOutcome: 'Digitalizó el 100% de sus operaciones con Google Workspace y creó 3 aplicaciones móviles con AppSheet sin programar, eliminando el uso de papel y ahorrando $15,000 USD anuales.',
    pitfall: 'Operar con archivos locales dispersos en computadoras individuales sin aprovechar la sincronización colaborativa en la nube.',
    actionItem1: 'Configurar Google Workspace con dominio propio y blindaje SPF/DKIM/DMARC en la consola de administración.',
    actionItem2: 'Construir un CRM de ventas y control de inventarios automatizado en Google Sheets con fórmulas QUERY y XLOOKUP.',
    actionItem3: 'Desarrollar una aplicación móvil nativa con AppSheet conectada a Sheets para captura de datos en terreno.',
    domainContext: 'Google Workspace es el estándar mundial de productividad en la nube para conectar equipos, automatizar tareas y proteger la información corporativa.',
    strategicRationale: 'Digitalizar las operaciones en una sola plataforma en la nube permite a las empresas operar de forma ágil, remota y con máxima seguridad.'
  },
  'nequi-bold': {
    frameworkName: 'Ecosistema de Pagos Digitales, Inclusión Financiera & Aceleración Comercial Cashless',
    coreMetrics: ['Porcentaje de Ventas Pagadas Digitalmente (> 80%)', 'Incremento en Ticket Promedio por Pago con Tarjeta (+30%)', 'Tiempo de Transacción en Punto de Venta (< 15s)', 'Cero Pérdidas por Fraudes o Billetes Falsos', 'Velocidad de Conciliación de Caja Diaria'],
    caseCompany: 'Comercio Minorista y Gastronómico Urbano',
    caseOutcome: 'Implementó cobros con código QR Nequi y datáfonos Bold sin mensualidad fija, aumentando sus ventas en un 34% y eliminando las pérdidas por descuadres de caja.',
    pitfall: 'Rechazar pagos con tarjeta o billeteras digitales por temor a las comisiones, perdiendo clientes que no cargan dinero en efectivo.',
    actionItem1: 'Instalar códigos QR de Nequi visibles en mostrador y configurar la cuenta sin topes mensuales.',
    actionItem2: 'Habilitar un datáfono Bold para aceptar tarjetas débito, crédito y links de pago por WhatsApp.',
    actionItem3: 'Establecer un protocolo diario de verificación de comprobantes y conciliación de caja en Google Sheets.',
    domainContext: 'Nequi y Bold han revolucionado el comercio en LATAM, permitiendo a cualquier negocio aceptar pagos electrónicos al instante sin costos fijos.',
    strategicRationale: 'Facilitar múltiples métodos de pago digital derriba las barreras de compra del cliente y maximiza la facturación total del negocio.'
  }
};

export function generateCourseDetails(raw: RawTopic): BookCourse {
  const customBook = CATEGORY_1_CUSTOM_BOOKS[raw.id] || CATEGORY_2_CUSTOM_BOOKS[raw.id] || CATEGORY_3_CUSTOM_BOOKS[raw.id] || CATEGORY_4_CUSTOM_BOOKS[raw.id] || CATEGORY_5_CUSTOM_BOOKS[raw.id] || CATEGORY_6_CUSTOM_BOOKS[raw.id] || CATEGORY_7_CUSTOM_BOOKS[raw.id] || CATEGORY_8_CUSTOM_BOOKS[raw.id] || CATEGORY_9_CUSTOM_BOOKS[raw.id] || CATEGORY_10_CUSTOM_BOOKS[raw.id] || CATEGORY_11_CUSTOM_BOOKS[raw.id] || CATEGORY_12_CUSTOM_BOOKS[raw.id] || CATEGORY_13_CUSTOM_BOOKS[raw.id] || CATEGORY_14_CUSTOM_BOOKS[raw.id] || CATEGORY_15_CUSTOM_BOOKS[raw.id] || CATEGORY_16_CUSTOM_BOOKS[raw.id] || CATEGORY_17_CUSTOM_BOOKS[raw.id] || CATEGORY_18_CUSTOM_BOOKS[raw.id] || CATEGORY_19_CUSTOM_BOOKS[raw.id] || CATEGORY_20_CUSTOM_BOOKS[raw.id] || CATEGORY_21_CUSTOM_BOOKS[raw.id] || CATEGORY_22_CUSTOM_BOOKS[raw.id] || CATEGORY_23_CUSTOM_BOOKS[raw.id] || CATEGORY_24_CUSTOM_BOOKS[raw.id] || CATEGORY_25_CUSTOM_BOOKS[raw.id] || CATEGORY_26_CUSTOM_BOOKS[raw.id] || CATEGORY_27_CUSTOM_BOOKS[raw.id] || CATEGORY_28_CUSTOM_BOOKS[raw.id] || CATEGORY_29_CUSTOM_BOOKS[raw.id] || CATEGORY_30_CUSTOM_BOOKS[raw.id];
  const blueprint = customBook ? {
    frameworkName: customBook.frameworkName,
    coreMetrics: customBook.coreMetrics,
    caseCompany: customBook.caseCompany,
    caseOutcome: customBook.caseOutcome,
    pitfall: customBook.pitfall,
    actionItem1: customBook.actionItem1,
    actionItem2: customBook.actionItem2,
    actionItem3: customBook.actionItem3,
    domainContext: customBook.domainContext,
    strategicRationale: customBook.strategicRationale
  } : (THEME_BLUEPRINTS[raw.categoryId] || THEME_BLUEPRINTS['planeacion-de-negocios']);
  
  // Generating exhaustive, high-caliber, practical business literature (>2,000 words per book)
  const chapters: Chapter[] = [
    {
      id: `${raw.id}-ch1`,
      number: 1,
      title: 'Fundamentos, Contexto Estratégico y Diagnóstico',
      subtitle: `Por qué dominar "${raw.title}" define la supervivencia y ventaja competitiva de tu empresa`,
      content: customBook ? [
        ...customBook.ch1CustomNarrative,
        `En el entorno empresarial contemporáneo, caracterizado por la volatilidad económica, la aceleración tecnológica y la sofisticación creciente de los consumidores, dominar "${raw.title}" ha dejado de ser una alternativa accesoria para convertirse en una competencia directiva imprescindible. Las organizaciones que lideran sus respectivos sectores no obtienen sus ventajas mediante impulsos fortuitos, sino mediante la instauración de principios estratégicos sólidos, metodologías reproducibles y una rigurosa disciplina en la ejecución diaria.`,
        `El costo de la inacción o de la negligencia en este ámbito es severo y medible. Las empresas que abordan "${raw.title}" de manera improvisada o intuitiva suelen sufrir fugas invisibles de capital, pérdida constante de clientes valiosos, desgaste anímico en sus equipos de trabajo y una vulnerabilidad crítica ante competidores más ágiles y metódicos. ${blueprint.domainContext} Cuando una organización carece de un marco operativo claro, cada decisión se convierte en una emergencia reactiva que consume tiempo directivo indispensable para la planeación a largo plazo.`,
        `La tesis central de este tomo se fundamenta en tres axiomas innegociables para directores generales, gerentes y emprendedores: primero, la excelencia operativa no es un acto aislado, sino el resultado de un sistema bien diseñado; segundo, cualquier variable que no se mida objetivamente tiende a deteriorarse con el paso del tiempo; y tercero, la verdadera ventaja competitiva radica en la velocidad y calidad con la que una empresa traduce los aprendizajes teóricos en acciones tácticas dentro del mercado real.`,
        `Para comenzar este proceso con éxito, es imprescindible realizar una auditoría diagnóstica honesta sobre el estado de madurez de tu organización. Esto implica evaluar el grado de formalización de tus procesos actuales, la precisión con la que se registran los datos comerciales y financieros, y el nivel de alineación de todo el equipo frente a los objetivos estratégicos establecidos. Al finalizar este capítulo, habrás establecido la línea base necesaria para implementar las transformaciones que analizaremos a continuación.`
      ] : [
        `En el entorno empresarial contemporáneo, caracterizado por la volatilidad económica, la aceleración tecnológica y la sofisticación creciente de los consumidores, dominar "${raw.title}" ha dejado de ser una alternativa accesoria para convertirse en una competencia directiva imprescindible. Las organizaciones que lideran sus respectivos sectores no obtienen sus ventajas mediante impulsos fortuitos, sino mediante la instauración de principios estratégicos sólidos, metodologías reproducibles y una rigurosa disciplina en la ejecución diaria.`,
        
        `El costo de la inacción o de la negligencia en este ámbito es severo y medible. Las empresas que abordan "${raw.title}" de manera improvisada o intuitiva suelen sufrir fugas invisibles de capital, pérdida constante de clientes valiosos, desgaste anímico en sus equipos de trabajo y una vulnerabilidad crítica ante competidores más ágiles y metódicos. ${blueprint.domainContext} Cuando una organización carece de un marco operativo claro, cada decisión se convierte en una emergencia reactiva que consume tiempo directivo indispensable para la planeación a largo plazo.`,
        
        `La tesis central de este tomo se fundamenta en tres axiomas innegociables para directores generales, gerentes y emprendedores: primero, la excelencia operativa no es un acto aislado, sino el resultado de un sistema bien diseñado; segundo, cualquier variable que no se mida objetivamente tiende a deteriorarse con el paso del tiempo; y tercero, la verdadera ventaja competitiva radica en la velocidad y calidad con la que una empresa traduce los aprendizajes teóricos en acciones tácticas dentro del mercado real.`,
        
        `Para comenzar este proceso con éxito, es imprescindible realizar una auditoría diagnóstica honesta sobre el estado de madurez de tu organización. Esto implica evaluar el grado de formalización de tus procesos actuales, la precisión con la que se registran los datos comerciales y financieros, y el nivel de alineación de todo el equipo frente a los objetivos estratégicos establecidos. Al finalizar este capítulo, habrás establecido la línea base necesaria para implementar las transformaciones que analizaremos a continuación.`
      ],
      keyInsight: 'La claridad en la ejecución y la disciplina metodológica superan sistemáticamente a la sofisticación teórica desprovista de rigor operativo.',
      practicalTip: 'Antes de realizar cualquier desembolso financiero o comprometer recursos de tu equipo, redacta en un solo párrafo el objetivo concreto que buscas alcanzar, el problema exacto que resuelves y el indicador con el que evaluarás el resultado.'
    },
    {
      id: `${raw.id}-ch2`,
      number: 2,
      title: 'El Marco Metodológico y Cuadro de Mando',
      subtitle: `Estructura operativa: ${blueprint.frameworkName}`,
      content: customBook ? [
        ...customBook.ch2MethodologyDetails,
        `Para transformar las intenciones en resultados tangibles, este libro adopta y adapta el prestigioso marco metodológico denominado "${blueprint.frameworkName}". Este modelo ha sido diseñado y perfeccionado tras el análisis de cientos de casos de éxito en empresas líderes de diversas industrias, logrando descomponer una temática compleja en cuatro fases operativas perfectamente secuenciadas e interdependientes:`,
        `Fase 1: Diagnóstico y Descubrimiento Profundo. Consiste en mapear las fricciones existentes, identificar los cuellos de botella operativos y cuantificar con precisión el impacto financiero que la ineficiencia actual ocasiona a la compañía.\nFase 2: Arquitectura y Diseño de la Solución. Formulación de hipótesis claras de valor, asignación estratégica de los recursos indispensables y diseño de los protocolos de trabajo estandarizados.\nFase 3: Ejecución Ágil y Validación de Hipótesis. Despliegue de pilotos controlados en ciclos cortos, recopilando retroalimentación directa y objetiva del mercado o de los usuarios finales.\nFase 4: Sistematización, Delegación y Escala. Consolidación de los aprendizajes, automatización de tareas repetitivas y delegación con gobernanza clara para garantizar la estabilidad de los resultados a escala.`,
        `Un marco metodológico es inútil sin un sistema de medición confiable. Para gestionar "${raw.title}" con solvencia directiva, es imperativo establecer un Cuadro de Mando Integral que monitoree las siguientes métricas troncales: ${blueprint.coreMetrics.join(' • ')}. Cada una de estas métricas debe contar con un umbral mínimo aceptable, un objetivo de excelencia trimestral y un único responsable dentro del organigrama empresarial encargado de su actualización continua.`,
        `La experiencia demuestra que cuando las métricas se exponen de forma transparente a todo el equipo, se produce un cambio cultural inmediato: las discusiones dejan de basarse en opiniones subjetivas para fundamentarse en datos duros y tendencias verificables. ${blueprint.strategicRationale} La adopción de este marco sienta las bases científicas para el crecimiento rentable de tu organización.`
      ] : [
        `Para transformar las intenciones en resultados tangibles, este libro adopta y adapta el prestigioso marco metodológico denominado "${blueprint.frameworkName}". Este modelo ha sido diseñado y perfeccionado tras el análisis de cientos de casos de éxito en empresas líderes de diversas industrias, logrando descomponer una temática compleja en cuatro fases operativas perfectamente secuenciadas e interdependientes:`,
        
        `Fase 1: Diagnóstico y Descubrimiento Profundo. Consiste en mapear las fricciones existentes, identificar los cuellos de botella operativos y cuantificar con precisión el impacto financiero que la ineficiencia actual ocasiona a la compañía.\nFase 2: Arquitectura y Diseño de la Solución. Formulación de hipótesis claras de valor, asignación estratégica de los recursos indispensables y diseño de los protocolos de trabajo estandarizados.\nFase 3: Ejecución Ágil y Validación de Hipótesis. Despliegue de pilotos controlados en ciclos cortos, recopilando retroalimentación directa y objetiva del mercado o de los usuarios finales.\nFase 4: Sistematización, Delegación y Escala. Consolidación de los aprendizajes, automatización de tareas repetitivas y delegación con gobernanza clara para garantizar la estabilidad de los resultados a escala.`,
        
        `Un marco metodológico es inútil sin un sistema de medición confiable. Para gestionar "${raw.title}" con solvencia directiva, es imperativo establecer un Cuadro de Mando Integral que monitoree las siguientes métricas troncales: ${blueprint.coreMetrics.join(' • ')}. Cada una de estas métricas debe contar con un umbral mínimo aceptable, un objetivo de excelencia trimestral y un único responsable dentro del organigrama empresarial encargado de su actualización continua.`,
        
        `La experiencia demuestra que cuando las métricas se exponen de forma transparente a todo el equipo, se produce un cambio cultural inmediato: las discusiones dejan de basarse en opiniones subjetivas para fundamentarse en datos duros y tendencias verificables. ${blueprint.strategicRationale} La adopción de este marco sienta las bases científicas para el crecimiento rentable de tu organización.`
      ],
      keyInsight: 'Todo lo que se mide de forma transparente y sistemática se puede optimizar; lo que se ignora, degenera inevitablemente hacia el desorden operativo.',
      practicalTip: 'Crea una hoja de control ejecutiva en la que registres semanalmente las 3 métricas troncales de tu operación. Si alguna muestra una desviación negativa durante dos semanas consecutivas, convoca una reunión de análisis de causa raíz de inmediato.'
    },
    {
      id: `${raw.id}-ch3`,
      number: 3,
      title: 'Guía Táctica de Implementación Paso a Paso',
      subtitle: 'Protocolo de despliegue cronológico para líderes y equipos de alto impacto',
      content: customBook ? [
        ...customBook.ch3TacticalSteps,
        `La implementación práctica de las estrategias asociadas a "${raw.title}" exige un plan de despliegue estructurado que minimice la resistencia interna al cambio y asegure un retorno de inversión en el menor tiempo posible. A continuación, se detalla el protocolo maestro paso a paso:`,
        `Paso 1: Auditoría de Procesos y Establecimiento de la Línea Base. Durante los primeros 7 días, recopila los datos históricos de los últimos 6 meses relacionados con este pilar. Entrevista a los colaboradores que interactúan directamente con el proceso para identificar las tres mayores fuentes de fricción, retrasos o desperdicios de recursos. Documenta el flujo tal cual funciona hoy, sin filtros ni idealizaciones.`,
        `Paso 2: Diseño de Estándares de Calidad y Plantillas Operativas. Redacta Procedimientos Operativos Estandarizados (SOPs) que describan paso a paso cómo debe ejecutarse cada tarea crítica. Cada procedimiento debe incluir su propósito, las herramientas requeridas, los criterios de éxito y una lista de verificación (checklist) obligatoria para prevenir errores humanos. La simplicidad debe primar: si un documento no puede entenderse en 5 minutos, debe reescribirse.`,
        `Paso 3: Asignación de Roles y Matriz de Responsabilidades (RACI). Define con nitidez absoluta la gobernanza del proyecto aplicando la matriz RACI: quién es el Responsable ejecutor (R), quién Rinde cuentas por el resultado final (A), quién debe ser Consultado técnicamente (C) y quién debe mantenerse Informado (I). La causa principal del estancamiento en proyectos corporativos es la ambigüedad en la rendición de cuentas.`,
        `Paso 4: Lanzamiento de Prueba Piloto en Ciclos Cortos. No intentes transformar toda la empresa simultáneamente. Selecciona una línea de producto, una región geográfica o un segmento específico de clientes para realizar una prueba piloto de 14 días. Mide el comportamiento de las métricas clave y ajusta los protocolos en función de los hallazgos empíricos antes de proceder al despliegue global.`,
        `Paso 5: Escala y Auditoría de Mantenimiento Continuo. Una vez validada la eficacia del piloto, extiende la metodología a toda la organización mediante sesiones formativas prácticas. Establece una auditoría mensual de 45 minutos para comprobar que los estándares se respetan y actualizar los procesos ante nuevas realidades del mercado.`
      ] : [
        `La implementación práctica de las estrategias asociadas a "${raw.title}" exige un plan de despliegue estructurado que minimice la resistencia interna al cambio y asegure un retorno de inversión en el menor tiempo posible. A continuación, se detalla el protocolo maestro paso a paso:`,
        
        `Paso 1: Auditoría de Procesos y Establecimiento de la Línea Base. Durante los primeros 7 días, recopila los datos históricos de los últimos 6 meses relacionados con este pilar. Entrevista a los colaboradores que interactúan directamente con el proceso para identificar las tres mayores fuentes de fricción, retrasos o desperdicios de recursos. Documenta el flujo tal cual funciona hoy, sin filtros ni idealizaciones.`,
        
        `Paso 2: Diseño de Estándares de Calidad y Plantillas Operativas. Redacta Procedimientos Operativos Estandarizados (SOPs) que describan paso a paso cómo debe ejecutarse cada tarea crítica. Cada procedimiento debe incluir su propósito, las herramientas requeridas, los criterios de éxito y una lista de verificación (checklist) obligatoria para prevenir errores humanos. La simplicidad debe primar: si un documento no puede entenderse en 5 minutos, debe reescribirse.`,
        
        `Paso 3: Asignación de Roles y Matriz de Responsabilidades (RACI). Define con nitidez absoluta la gobernanza del proyecto aplicando la matriz RACI: quién es el Responsable ejecutor (R), quién Rinde cuentas por el resultado final (A), quién debe ser Consultado técnicamente (C) y quién debe mantenerse Informado (I). La causa principal del estancamiento en proyectos corporativos es la ambigüedad en la rendición de cuentas.`,
        
        `Paso 4: Lanzamiento de Prueba Piloto en Ciclos Cortos. No intentes transformar toda la empresa simultáneamente. Selecciona una línea de producto, una región geográfica o un segmento específico de clientes para realizar una prueba piloto de 14 días. Mide el comportamiento de las métricas clave y ajusta los protocolos en función de los hallazgos empíricos antes de proceder al despliegue global.`,
        
        `Paso 5: Escala y Auditoría de Mantenimiento Continuo. Una vez validada la eficacia del piloto, extiende la metodología a toda la organización mediante sesiones formativas prácticas. Establece una auditoría mensual de 45 minutos para comprobar que los estándares se respetan y actualizar los procesos ante nuevas realidades del mercado.`
      ],
      keyInsight: 'La velocidad de aprendizaje y evolución de un equipo es directamente proporcional a la brevedad de sus ciclos de retroalimentación en el mercado real.',
      practicalTip: 'Instituye reuniones diarias de sincronización rápida (Daily Standup) de máximo 10 a 15 minutos, de pie, donde cada participante responda tres preguntas: qué logró ayer, qué hará hoy y qué obstáculo bloquea su avance.'
    },
    {
      id: `${raw.id}-ch4`,
      number: 4,
      title: 'Caso de Estudio Real, Simulación y Análisis',
      subtitle: `La transformación estratégica y financiera en ${blueprint.caseCompany}`,
      content: customBook ? [
        ...customBook.ch4CaseDeepDive,
        `Para ilustrar con rigor la aplicación práctica de estos principios, examinemos el caso real de transformación experimentado por ${blueprint.caseCompany}. Al iniciar su proceso de reestructuración, la compañía atravesaba un momento decisivo: el crecimiento en ventas se había estancado, los márgenes se comprimían debido a ineficiencias internas y el equipo directivo operaba bajo un estrés constante apagando fuegos diarios.`,
        `Diagnóstico y Hallazgos Iniciales: El análisis forense de la organización reveló que carecían de una metodología formal para "${raw.title}". Las decisiones clave se tomaban por corazonadas o presión de corto plazo. Esto provocaba inconsistencias graves en la entrega de valor a los clientes, una fuga continua de recursos financieros y una tasa de rotación de clientes y empleados por encima del promedio del sector.`,
        `Estrategia de Intervención Implementada: La dirección adoptó una política de tolerancia cero frente a la ambigüedad. Aplicando el marco "${blueprint.frameworkName}", estructuraron un plan de acción a 90 días dividido en tres sprints mensuales: el primer mes se dedicó al saneamiento de procesos y diseño del cuadro de mando; el segundo mes a la capacitación intensiva del equipo y pruebas piloto; y el tercer mes a la optimización de métricas de rendimiento y renegociación de acuerdos comerciales clave.`,
        `Resultados Financieros y Operativos Verificados: ${blueprint.caseOutcome} Además del impacto económico directo, la compañía experimentó un incremento sustancial en el clima laboral y en la autonomía de sus mandos intermedios, demostrando que la sistematización rigurosa no burocratiza la empresa, sino que la libera para innovar y competir con ventaja.`,
        `Lecciones Transferibles para tu Negocio: La experiencia de esta empresa demuestra que cualquier organización, sin importar su tamaño o presupuesto inicial, puede transformar radicalmente sus resultados si sustituye las opiniones subjetivas por procesos basados en evidencias, métricas claras y rendición de cuentas innegociable.`
      ] : [
        `Para ilustrar con rigor la aplicación práctica de estos principios, examinemos el caso real de transformación experimentado por ${blueprint.caseCompany}. Al iniciar su proceso de reestructuración, la compañía atravesaba un momento decisivo: el crecimiento en ventas se había estancado, los márgenes se comprimían debido a ineficiencias internas y el equipo directivo operaba bajo un estrés constante apagando fuegos diarios.`,
        
        `Diagnóstico y Hallazgos Iniciales: El análisis forense de la organización reveló que carecían de una metodología formal para "${raw.title}". Las decisiones clave se tomaban por corazonadas o presión de corto plazo. Esto provocaba inconsistencias graves en la entrega de valor a los clientes, una fuga continua de recursos financieros y una tasa de rotación de clientes y empleados por encima del promedio del sector.`,
        
        `Estrategia de Intervención Implementada: La dirección adoptó una política de tolerancia cero frente a la ambigüedad. Aplicando el marco "${blueprint.frameworkName}", estructuraron un plan de acción a 90 días dividido en tres sprints mensuales: el primer mes se dedicó al saneamiento de procesos y diseño del cuadro de mando; el segundo mes a la capacitación intensiva del equipo y pruebas piloto; y el tercer mes a la optimización de métricas de rendimiento y renegociación de acuerdos comerciales clave.`,
        
        `Resultados Financieros y Operativos Verificados: ${blueprint.caseOutcome} Además del impacto económico directo, la compañía experimentó un incremento sustancial en el clima laboral y en la autonomía de sus mandos intermedios, demostrando que la sistematización rigurosa no burocratiza la empresa, sino que la libera para innovar y competir con ventaja.`,
        
        `Lecciones Transferibles para tu Negocio: La experiencia de esta empresa demuestra que cualquier organización, sin importar su tamaño o presupuesto inicial, puede transformar radicalmente sus resultados si sustituye las opiniones subjetivas por procesos basados en evidencias, métricas claras y rendición de cuentas innegociable.`
      ],
      keyInsight: 'Las empresas líderes no tienen menos problemas que las demás; lo que poseen son mejores sistemas y protocolos para diagnosticar y resolver los problemas con rapidez.',
      practicalTip: 'Crea una "Bitácora de Lecciones Aprendidas" interna en tu empresa donde el equipo documente trimestralmente qué experimentos funcionaron, cuáles fracasaron y qué ajustes concretos se derivaron de cada experiencia.'
    },
    {
      id: `${raw.id}-ch5`,
      number: 5,
      title: 'Errores Fatales, Trampas y Mitigación de Riesgos',
      subtitle: 'Los obstáculos críticos que destruyen la rentabilidad y cómo blindar tu operación',
      content: customBook ? [
        ...customBook.ch5RiskMitigation,
        `En el camino hacia el dominio de "${raw.title}", directores y equipos suelen tropezar con trampas predecibles que erosionan el margen financiero y socavan la moral colectiva. Reconocer estas amenazas con anticipación es la mejor póliza de seguro para tu negocio. A continuación, analizamos las fallas más devastadoras:`,
        `Trampa Crítica 1: ${blueprint.pitfall}. Esta equivocación suele originarse en el sesgo de confirmación y en el exceso de optimismo no contrastado con la realidad. Cuando los líderes se enamoran de sus propias ideas sin verificar la disposición a pagar o la viabilidad técnica real, comprometen sumas cuantiosas de capital que rara vez se recuperan.`,
        `Trampa Crítica 2: La ilusión de control por microgestión y la falta de alineación interdepartamental. Cuando la dirección intenta supervisar cada detalle secundario en lugar de establecer estándares claros y dar autonomía a los responsables, se genera un cuello de botella que paraliza el crecimiento y desmotiva al talento de alto rendimiento. Los departamentos comienzan a operar en silos aislados con objetivos contrapuestos.`,
        `Trampa Crítica 3: Abandonar la disciplina al enfrentar los primeros contratiempos. Muchos proyectos prometedores fracasan porque la dirección espera resultados mágicos inmediatos y, ante la primera dificultad en las métricas, descarta la metodología para volver al caos habitual. La consistencia metódica es la única fuerza capaz de superar la volatilidad del mercado.`,
        `Protocolo de Pre-Mortem para la Mitigación de Riesgos: Antes de poner en marcha cualquier iniciativa de envergadura, reúne a tu equipo clave y plantea el siguiente ejercicio mental: "Imaginemos que estamos dentro de 12 meses y este proyecto ha sido un fracaso absoluto. ¿Cuáles fueron exactamente las causas que lo destruyeron?". Elabora una lista exhaustiva de las respuestas obtenidas y diseña un plan de contingencia y prevención para cada uno de esos escenarios de riesgo hoy mismo.`
      ] : [
        `En el camino hacia el dominio de "${raw.title}", directores y equipos suelen tropezar con trampas predecibles que erosionan el margen financiero y socavan la moral colectiva. Reconocer estas amenazas con anticipación es la mejor póliza de seguro para tu negocio. A continuación, analizamos las fallas más devastadoras:`,
        
        `Trampa Crítica 1: ${blueprint.pitfall}. Esta equivocación suele originarse en el sesgo de confirmación y en el exceso de optimismo no contrastado con la realidad. Cuando los líderes se enamoran de sus propias ideas sin verificar la disposición a pagar o la viabilidad técnica real, comprometen sumas cuantiosas de capital que rara vez se recuperan.`,
        
        `Trampa Crítica 2: La ilusión de control por microgestión y la falta de alineación interdepartamental. Cuando la dirección intenta supervisar cada detalle secundario en lugar de establecer estándares claros y dar autonomía a los responsables, se genera un cuello de botella que paraliza el crecimiento y desmotiva al talento de alto rendimiento. Los departamentos comienzan a operar en silos aislados con objetivos contrapuestos.`,
        
        `Trampa Crítica 3: Abandonar la disciplina al enfrentar los primeros contratiempos. Muchos proyectos prometedores fracasan porque la dirección espera resultados mágicos inmediatos y, ante la primera dificultad en las métricas, descarta la metodología para volver al caos habitual. La consistencia metódica es la única fuerza capaz de superar la volatilidad del mercado.`,
        
        `Protocolo de Pre-Mortem para la Mitigación de Riesgos: Antes de poner en marcha cualquier iniciativa de envergadura, reúne a tu equipo clave y plantea el siguiente ejercicio mental: "Imaginemos que estamos dentro de 12 meses y este proyecto ha sido un fracaso absoluto. ¿Cuáles fueron exactamente las causas que lo destruyeron?". Elabora una lista exhaustiva de las respuestas obtenidas y diseña un plan de contingencia y prevención para cada uno de esos escenarios de riesgo hoy mismo.`
      ],
      keyInsight: 'Evitar errores catastróficos mediante la anticipación y el análisis riguroso de riesgos aporta más valor a la supervivencia empresarial que intentar jugadas geniales no planificadas.',
      practicalTip: 'Aplica el principio de redundancia en tus recursos y procesos más críticos: asegúrate de que ninguna tarea troncal dependa exclusivamente de una sola persona, un único proveedor o un único canal comercial.'
    },
    {
      id: `${raw.id}-ch6`,
      number: 6,
      title: 'Plan de Acción de 48 Horas y Resumen Ejecutivo',
      subtitle: 'De los conceptos teóricos a la generación de valor tangible en tu empresa',
      content: customBook ? [
        ...customBook.ch6ActionSummary,
        `El conocimiento empresarial solo se traduce en riqueza, estabilidad y crecimiento cuando se transforma en acción organizada y disciplinada. Todo lo aprendido a lo largo de este tomo sobre "${raw.title}" debe materializarse de inmediato para evitar que se diluya en la rutina diaria. Para ello, hemos estructurado un protocolo de choque para ejecutar en las próximas 48 horas:`,
        `Protocolo de Choque de 48 Horas:\n• En las primeras 24 horas: ${blueprint.actionItem1}\n• En las siguientes 24 a 48 horas: ${blueprint.actionItem2}\n• Consolidación al cierre de la semana: ${blueprint.actionItem3}`,
        `Síntesis Ejecutiva Final: Has adquirido los fundamentos estratégicos indispensables, el marco metodológico operativo "${blueprint.frameworkName}", el protocolo de implementación paso a paso, las lecciones prácticas del caso de éxito en ${blueprint.caseCompany}, y los mecanismos de protección contra los errores más costosos del sector.`,
        `La responsabilidad de liderar esta transformación está ahora en tus manos. No esperes a que las condiciones del mercado sean "perfectas" para actuar: la perfección en los negocios se construye mediante la iteración continua basada en datos. Pon en marcha tu primer experimento controlado hoy mismo, mide los resultados con objetividad y lidera a tu equipo hacia el siguiente nivel de excelencia operativa y financiera.`
      ] : [
        `El conocimiento empresarial solo se traduce en riqueza, estabilidad y crecimiento cuando se transforma en acción organizada y disciplinada. Todo lo aprendido a lo largo de este tomo sobre "${raw.title}" debe materializarse de inmediato para evitar que se diluya en la rutina diaria. Para ello, hemos estructurado un protocolo de choque para ejecutar en las próximas 48 horas:`,
        
        `Protocolo de Choque de 48 Horas:\n• En las primeras 24 horas: ${blueprint.actionItem1}\n• En las siguientes 24 a 48 horas: ${blueprint.actionItem2}\n• Consolidación al cierre de la semana: ${blueprint.actionItem3}`,
        
        `Síntesis Ejecutiva Final: Has adquirido los fundamentos estratégicos indispensables, el marco metodológico operativo "${blueprint.frameworkName}", el protocolo de implementación paso a paso, las lecciones prácticas del caso de éxito en ${blueprint.caseCompany}, y los mecanismos de protección contra los errores más costosos del sector.`,
        
        `La responsabilidad de liderar esta transformación está ahora en tus manos. No esperes a que las condiciones del mercado sean "perfectas" para actuar: la perfección en los negocios se construye mediante la iteración continua basada en datos. Pon en marcha tu primer experimento controlado hoy mismo, mide los resultados con objetividad y lidera a tu equipo hacia el siguiente nivel de excelencia operativa y financiera.`
      ],
      keyInsight: 'El valor de una idea abstracta es cero; el valor de su ejecución disciplinada y oportuna lo es todo.',
      practicalTip: 'Elige ahora mismo la primera micro-acción de la lista de 48 horas, agéndala con hora fija en tu calendario y ejecútala antes de concluir tu jornada laboral.'
    }
  ];

  const keyTakeaways = [
    `Dominar "${raw.title}" proporciona una ventaja competitiva duradera, protegiendo los márgenes y acelerando el crecimiento rentable de la organización.`,
    `El marco operativo "${blueprint.frameworkName}" permite transformar conceptos abstractos en protocolos estandarizados, medibles y reproducibles a escala.`,
    `El monitoreo riguroso y transparente de las métricas clave (${blueprint.coreMetrics.slice(0, 3).join(', ')}) elimina la ambigüedad y sustenta la toma de decisiones directivas en datos empíricos.`,
    `Evitar ${blueprint.pitfall.toLowerCase()} salvaguarda la liquidez financiera, la reputación de marca y la moral del equipo frente a riesgos previsibles.`,
    `La implementación mediante ciclos ágiles de retroalimentación y la ejecución disciplinada del plan de acción de 48 horas superan ampliamente a los planes teóricos extensos.`
  ];

  const actionPlan: ActionItem[] = [
    {
      id: `${raw.id}-act1`,
      title: 'Diagnóstico estratégico y fijación de línea base',
      description: blueprint.actionItem1,
      timeEstimate: '45 minutos',
      priority: 'Alta'
    },
    {
      id: `${raw.id}-act2`,
      title: 'Validación directa con clientes o equipo operativo',
      description: blueprint.actionItem2,
      timeEstimate: '1 hora',
      priority: 'Estratégica'
    },
    {
      id: `${raw.id}-act3`,
      title: 'Formalización del protocolo y cuadro de mando',
      description: blueprint.actionItem3,
      timeEstimate: '30 minutos',
      priority: 'Media'
    }
  ];

  const quiz: QuizQuestion[] = customBook && customBook.quizQuestions ? customBook.quizQuestions.map((q, idx) => ({
    id: `${raw.id}-q${idx + 1}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctIndex,
    explanation: q.explanation
  })) : [
    {
      id: `${raw.id}-q1`,
      question: `¿Cuál es el propósito directivo fundamental al implementar las metodologías de "${raw.title}" en una organización?`,
      options: [
        'Aumentar la complejidad de los informes y la burocracia interna para impresionar a terceros.',
        'Construir sistemas y procesos estandarizados, monitorear métricas clave y optimizar la rentabilidad de manera sostenible.',
        'Delegar todas las decisiones estratégicas en herramientas automáticas sin supervisión directiva.',
        'Reducir al mínimo la comunicación con clientes y colaboradores para acelerar los tiempos de producción.'
      ],
      correctIndex: 1,
      explanation: 'El objetivo esencial de este marco es formalizar procesos reproducibles, medir el desempeño mediante datos objetivos y generar un crecimiento rentable y sostenible para la empresa.'
    },
    {
      id: `${raw.id}-q2`,
      question: `De acuerdo con el análisis de riesgos y trampas críticas, ¿cuál es uno de los errores más costosos y destructivos en este ámbito?`,
      options: [
        blueprint.pitfall,
        'Ejecutar pruebas piloto controladas en ciclos cortos antes de invertir en el despliegue global.',
        'Sostener reuniones de sincronización operativa diarias de 15 minutos enfocadas en desbloquear tareas.',
        'Calcular el margen de contribución real y el flujo de caja proyectado a 13 semanas.'
      ],
      correctIndex: 0,
      explanation: `Efectivamente, ${blueprint.pitfall.toLowerCase()} constituye uno de los errores más graves por comprometer recursos críticos sin validación empírica en el mercado real.`
    },
    {
      id: `${raw.id}-q3`,
      question: '¿Qué principio distingue a las organizaciones de alto rendimiento durante el despliegue de este marco operativo?',
      options: [
        'Postergan cualquier cambio operativo hasta contar con una certeza teórica del 100%.',
        'Operan con ciclos breves de retroalimentación, métricas transparentes y una gobernanza con responsabilidades nítidas (RACI).',
        'Evitan redactar procedimientos estandarizados o listas de verificación para mantener una flexibilidad informal.',
        'Priorizan las métricas de vanidad superficiales sobre la retención de clientes y el flujo de caja operativo.'
      ],
      correctIndex: 1,
      explanation: 'La combinación de ciclos cortos de feedback, gobernanza clara (matriz RACI) y Cuadros de Mando basados en datos duros permite a los equipos corregir desviaciones con agilidad y maximizar el retorno de inversión.'
    }
  ];

  // Dynamically calculate exact word count across all chapters, takeaways, action plan and quiz
  const chaptersWordCount = chapters.reduce((total, ch) => {
    const titleWords = ch.title.split(/\s+/).filter(Boolean).length;
    const subtitleWords = ch.subtitle.split(/\s+/).filter(Boolean).length;
    const contentWords = ch.content.join(' ').split(/\s+/).filter(Boolean).length;
    const insightWords = (ch.keyInsight || '').split(/\s+/).filter(Boolean).length;
    const tipWords = (ch.practicalTip || '').split(/\s+/).filter(Boolean).length;
    return total + titleWords + subtitleWords + contentWords + insightWords + tipWords;
  }, 0);

  const takeawaysWordCount = keyTakeaways.join(' ').split(/\s+/).filter(Boolean).length;
  const actionPlanWordCount = actionPlan.reduce((acc, a) => acc + (a.title + ' ' + a.description + ' ' + a.timeEstimate).split(/\s+/).filter(Boolean).length, 0);
  const quizWordCount = quiz.reduce((acc, q) => acc + (q.question + ' ' + q.options.join(' ') + ' ' + q.explanation).split(/\s+/).filter(Boolean).length, 0);

  const totalCalculatedWordCount = chaptersWordCount + takeawaysWordCount + actionPlanWordCount + quizWordCount;
  
  // Executive reading pace ~180 words/min
  const calculatedReadTime = Math.max(raw.readTimeMinutes, Math.ceil(totalCalculatedWordCount / 180));

  return {
    id: raw.id,
    numericId: raw.numericId,
    categoryNumber: raw.categoryNumber,
    categoryId: raw.categoryId,
    categoryName: raw.categoryName,
    title: raw.title,
    subtitle: `Guía ejecutiva de alto impacto para dominar ${raw.title.toLowerCase()} con metodologías prácticas, cuadros de mando y casos de estudio.`,
    author: 'Enkurso Executive Board & Mentores Especialistas',
    edition: '1ª Edición Máster 2026',
    level: raw.level,
    readTimeMinutes: calculatedReadTime,
    wordCount: totalCalculatedWordCount,
    rating: Number((4.7 + (raw.numericId % 30) * 0.01).toFixed(1)),
    reviewCount: 45 + (raw.numericId * 3) % 180,
    summary: `Un curso integral en formato de tomo de estudio que sintetiza los fundamentos estratégicos, el marco metodológico "${blueprint.frameworkName}", protocolos de implementación paso a paso, análisis del caso de éxito en ${blueprint.caseCompany}, errores fatales a mitigar y un plan de acción de 48 horas para aplicar "${raw.title}" con éxito en tu organización.`,
    learningOverview: customBook?.learningOverview,
    tags: [raw.categoryName, 'Estrategia', 'Liderazgo', 'Operaciones', 'Rentabilidad'],
    chapters,
    keyTakeaways,
    actionPlan,
    quiz
  };
}

// In-memory cache for generated courses
const COURSE_CACHE = new Map<string, BookCourse>();
let ALL_COURSES_CACHE: BookCourse[] | null = null;

export function getBookCourseById(id: string): BookCourse | undefined {
  if (COURSE_CACHE.has(id)) {
    return COURSE_CACHE.get(id);
  }
  const raw = RAW_TOPICS.find((t) => t.id === id || t.numericId.toString() === id);
  if (!raw) return undefined;
  const course = generateCourseDetails(raw);
  COURSE_CACHE.set(id, course);
  return course;
}

export function getAllBookCourses(): BookCourse[] {
  if (ALL_COURSES_CACHE) {
    return ALL_COURSES_CACHE;
  }
  ALL_COURSES_CACHE = RAW_TOPICS.map((raw) => {
    if (COURSE_CACHE.has(raw.id)) {
      return COURSE_CACHE.get(raw.id)!;
    }
    const course = generateCourseDetails(raw);
    COURSE_CACHE.set(raw.id, course);
    return course;
  });
  return ALL_COURSES_CACHE;
}

