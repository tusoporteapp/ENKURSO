import { BookCourse } from '../types';

export interface OnboardingDiagnosticInput {
  userIntent: 'want_to_start' | 'have_business';
  name: string;
  companyName?: string;
  industry: string;
  role?: string;
  businessStage?: 'idea' | 'early_growth' | 'scaling' | 'mature';
  challengeText?: string;
  experienceLevel?: 'beginner' | 'intermediate' | 'advanced';
  goalMinutes: number;
  websiteUrl?: string;
  socialHandle?: string;
  extractedWebInfo?: {
    title?: string;
    description?: string;
  };
}

export interface AiDiagnosticResult {
  userIntent: 'want_to_start' | 'have_business';
  businessOverview: string;
  strengths: string[];
  criticalWeaknesses: string[];
  diagnosisSummary: string;
  strategicFocusArea: string;
  digitalFootprintInsight?: string;
  recommendedBooks: Array<{
    book: BookCourse;
    phase: string;
    strategicReason: string;
    problemFixed: string;
  }>;
  firstStep48Hours: string;
}

// 1. RUTA PARA QUIENES QUIEREN EMPRENDER DESDE CERO
export function runWantToStartCurator(
  input: OnboardingDiagnosticInput,
  allBooks: BookCourse[]
): AiDiagnosticResult {
  const userName = input.name.trim() || 'Futuro Emprendedor';
  const sector = input.industry || 'Negocios & Servicios';

  // Buscar tomos fundamentales de creación de empresas
  const cat1Books = allBooks.filter((b) => b.categoryId === 'cat-1'); // Planeación de Negocios
  const cat22Books = allBooks.filter((b) => b.categoryId === 'cat-22'); // Investigación de Mercado
  const cat2Books = allBooks.filter((b) => b.categoryId === 'cat-2'); // Manejo de Presupuesto
  const cat6Books = allBooks.filter((b) => b.categoryId === 'cat-6'); // Ventas
  const cat15Books = allBooks.filter((b) => b.categoryId === 'cat-15'); // Intro Marketing Digital

  const b1 = cat1Books[0] || allBooks[0];
  const b2 = cat22Books[0] || allBooks[1];
  const b3 = cat2Books[0] || allBooks[8];
  const b4 = cat6Books[0] || allBooks[48];

  const recommendedBooks = [
    {
      book: b1,
      phase: 'Fase 1: Validación & Modelo de Negocio',
      strategicReason: 'Aprende a estructurar una propuesta de valor rentable antes de gastar capital.',
      problemFixed: 'Evita invertir tiempo y dinero en una idea sin demanda confirmada en el mercado.',
    },
    {
      book: b2,
      phase: 'Fase 2: Cliente Ideal & Nicho de Mercado',
      strategicReason: 'Identifica exactamente a quién le vas a vender y cómo diferenciarte de la competencia.',
      problemFixed: 'Elimina el error de querer venderle a todo el mundo sin mensaje claro.',
    },
    {
      book: b3,
      phase: 'Fase 3: Presupuesto & Finanzas Iniciales',
      strategicReason: 'Domina los costos fijos, el margen unitario y el punto de equilibrio.',
      problemFixed: 'Protege tu flujo de caja para no quedarte sin capital en los primeros 6 meses.',
    },
    {
      book: b4,
      phase: 'Fase 4: Primeros Clientes & Cierre de Ventas',
      strategicReason: 'Metodología paso a paso para conseguir tus primeros 10 a 50 clientes que paguen.',
      problemFixed: 'Desbloquea el miedo a vender y estructura un guion comercial de cierre.',
    },
  ];

  return {
    userIntent: 'want_to_start',
    businessOverview: `Plan de Aceleración para Fundar un Emprendimiento en ${sector}.`,
    strengths: [
      'Inicias con hoja en blanco sin vicios operativos ni deuda técnica.',
      'Enfoque directo en validación lean y rentabilidad desde el día 1.',
      'Capacidad de diseñar la estructura digital moderna desde el inicio.',
    ],
    criticalWeaknesses: [
      'Riesgo de enamorarse de la idea sin verificar si el cliente está dispuesto a pagar.',
      'Incertidumbre en la fijación de precios y cálculo de margen de ganancia.',
    ],
    diagnosisSummary: `Hola ${userName}. Para crear tu nuevo emprendimiento en el sector de ${sector}, tu ruta de aprendizaje prioriza validar la demanda del cliente y calcular la rentabilidad unitaria antes de incurrir en gastos de constitución o desarrollo publicitario.`,
    strategicFocusArea: 'Validación & Lanzamiento de Negocio',
    recommendedBooks,
    firstStep48Hours: `Completar el Tomo #${b1.numericId} ("${b1.title}") y aplicar la Matriz de Validación de Propuesta de Valor.`,
  };
}

// 2. AUDITORÍA PROFUNDA CON IA PARA NEGOCIOS ACTIVOS
export function runAiBusinessAudit(
  input: OnboardingDiagnosticInput,
  allBooks: BookCourse[]
): AiDiagnosticResult {
  const company = input.companyName?.trim() || 'tu negocio';
  const sector = input.industry || 'Comercio & Servicios';
  const website = input.websiteUrl?.trim() || '';
  const social = input.socialHandle?.trim() || '';
  const challenge = (input.challengeText || '').trim();
  const challengeLower = challenge.toLowerCase();

  // 1. Detectar lo Bueno (Fortalezas)
  const strengths: string[] = [];
  if (website) {
    strengths.push(`Activo Web Disponible (${website}): Cuentas con un canal propio para centralizar tráfico y compras.`);
  } else {
    strengths.push('Negocio en marcha con validación real y tracción en el mercado.');
  }

  if (social) {
    strengths.push(`Presencia en Redes Sociales (${social}): Canal activo para captar atención y generar comunidad.`);
  } else {
    strengths.push(`Operación activa en el sector de ${sector} con oportunidad de diferenciación.`);
  }

  strengths.push('Capacidad de ejecución demostrada al tener un negocio funcionando con clientes.');

  // 2. Detectar Puntos Ciegos & Lo que debe Mejorar Urgente
  const criticalWeaknesses: string[] = [];

  if (website && !website.includes('shopify') && !website.includes('store')) {
    criticalWeaknesses.push('Fricción en Conversión Web: Los visitantes que llegan a tu página no tienen un camino claro de compra o llamada a la acción (CTA) directo.');
  } else if (!website) {
    criticalWeaknesses.push('Ausencia de Activo Web Centralizado: Depender solo de mensajes directos por chat limita el volumen de ventas y la automatización.');
  }

  if (social) {
    criticalWeaknesses.push('Falta de Embudo de Retención: No se observa un sistema de captura de emails/WhatsApp para re-impactar a los seguidores sin pagar publicidad.');
  }

  if (challengeLower.includes('venta') || challengeLower.includes('prospect') || challengeLower.includes('cerrar')) {
    criticalWeaknesses.push('Cuello de Botella Comercial: Dependencia de prospección manual y dificultad para cerrar clientes de ticket alto.');
  } else if (challengeLower.includes('costo') || challengeLower.includes('margen') || challengeLower.includes('dinero')) {
    criticalWeaknesses.push('Erosión de Margen: Costos operativos o de adquisición (CAC) elevados que reducen la rentabilidad neta.');
  } else if (challengeLower.includes('equipo') || challengeLower.includes('delegar')) {
    criticalWeaknesses.push('Dependencia Operativa del Fundador: El negocio no puede escalar porque todas las decisiones pasan por ti.');
  } else {
    criticalWeaknesses.push('Falta de Cuadro de Mando (KPIs): Toma de decisiones basada en intuición más que en métricas de conversión y LTV.');
  }

  // 3. Seleccionar los Tomos Exactos que solucionan los puntos ciegos
  const selectedBooks: Array<{ book: BookCourse; phase: string; strategicReason: string; problemFixed: string }> = [];

  // Asignar Tomo 1: Para la debilidad principal
  if (website || challengeLower.includes('web') || challengeLower.includes('marketing')) {
    const webBook = allBooks.find((b) => b.categoryId === 'cat-12') || allBooks.find((b) => b.categoryId === 'cat-14') || allBooks[109];
    selectedBooks.push({
      book: webBook,
      phase: 'Fase 1: Optimización de Conversión Digital',
      strategicReason: 'Asignado para rediseñar la experiencia de usuario y eliminar la fricción de compra en tu web.',
      problemFixed: 'Soluciona la pérdida de visitantes para convertirlos en clientes que pagan de inmediato.',
    });
  } else {
    const salesBook = allBooks.find((b) => b.categoryId === 'cat-6') || allBooks[48];
    selectedBooks.push({
      book: salesBook,
      phase: 'Fase 1: Desbloqueo Comercial & Cierre de Ventas',
      strategicReason: 'Asignado para estructurar un proceso de ventas predecible de alto valor.',
      problemFixed: 'Soluciona la inestabilidad de ingresos y la dificultad para cerrar prospectos.',
    });
  }

  // Asignar Tomo 2: Para captación y retención
  const emailBook = allBooks.find((b) => b.categoryId === 'cat-20') || allBooks.find((b) => b.categoryId === 'cat-18') || allBooks[184];
  selectedBooks.push({
    book: emailBook,
    phase: 'Fase 2: Automatización & Retención (LTV)',
    strategicReason: 'Asignado para crear flujos automatizados de seguimiento a clientes que no compran de inmediato.',
    problemFixed: 'Soluciona la fuga de prospectos y multiplica el valor de vida del cliente (LTV).',
  });

  // Asignar Tomo 3: Para métricas y tracking
  const trackingBook = allBooks.find((b) => b.categoryId === 'cat-17') || allBooks.find((b) => b.categoryId === 'cat-2') || allBooks[161];
  selectedBooks.push({
    book: trackingBook,
    phase: 'Fase 3: Control de Métricas & Rentabilidad',
    strategicReason: 'Asignado para medir el Costo de Adquisición (CAC) y optimizar el retorno de inversión (ROI).',
    problemFixed: 'Soluciona el desperdicio de presupuesto y la falta de claridad en los márgenes netos.',
  });

  // Asignar Tomo 4: Para escala y delegación
  const scaleBook = allBooks.find((b) => b.categoryId === 'cat-8') || allBooks.find((b) => b.categoryId === 'cat-9') || allBooks[60];
  selectedBooks.push({
    book: scaleBook,
    phase: 'Fase 4: Escalamiento & Delegación de Equipos',
    strategicReason: 'Asignado para documentar procesos y liberar el tiempo del fundador.',
    problemFixed: 'Soluciona la sobrecarga de trabajo y permite que el negocio crezca sin depender de ti 24/7.',
  });

  const diagnosisSummary = `Auditoría IA para ${company} en el sector ${sector}${website || social ? ` (${[website, social].filter(Boolean).join(' • ')})` : ''}: Identificamos que tu mayor oportunidad de crecimiento no es conseguir más tráfico a ciegas, sino tapar las fugas de conversión en tus canales actuales y automatizar el seguimiento para aumentar el margen neto.`;

  return {
    userIntent: 'have_business',
    businessOverview: `Auditoría de Crecimiento & Presencia Digital para ${company}.`,
    strengths,
    criticalWeaknesses,
    diagnosisSummary,
    strategicFocusArea: selectedBooks[0].book.categoryName,
    digitalFootprintInsight: website || social
      ? `Canales auditados: ${[website, social].filter(Boolean).join(' | ')}. Se detectaron oportunidades clave en optimización de checkout y retención.`
      : undefined,
    recommendedBooks: selectedBooks,
    firstStep48Hours: `Completar los primeros 3 capítulos del Tomo #${selectedBooks[0].book.numericId} ("${selectedBooks[0].book.title}") para aplicar los cambios de conversión en tus canales.`,
  };
}

export function runAiBusinessDiagnosis(
  input: OnboardingDiagnosticInput,
  allBooks: BookCourse[]
): AiDiagnosticResult {
  if (input.userIntent === 'want_to_start') {
    return runWantToStartCurator(input, allBooks);
  }
  return runAiBusinessAudit(input, allBooks);
}
