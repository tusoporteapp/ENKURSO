// Executive AI Mentor Engine for EnKurso (Cloudflare Pages Static & Offline Capable)
import { BookCourse } from '../types';

export function generateExecutiveMentorResponse(
  book: BookCourse,
  currentChapterTitle: string,
  userQuery: string,
  businessType: string
): string {
  const queryLower = userQuery.toLowerCase();
  
  const frameworkName = `Marco Ejecutivo de ${book.categoryName}`;
  const takeaways = book.keyTakeaways || [
    'Alinear la estrategia con la ejecución operativa y la medición sistemática.',
    'Optimizar los canales de rentabilidad y la reducción de fricción para el cliente.',
    'Construir procesos escalables y sostenibles a largo plazo.'
  ];
  
  const action1 = book.actionPlan?.[0]?.title || 'Establecer un cuadro de mando diario con los indicadores clave';
  const action2 = book.actionPlan?.[1]?.title || 'Capacitar y alinear al equipo en la metodología en un ciclo de 7 días';
  const action3 = book.actionPlan?.[2]?.title || 'Eliminar cuellos de botella y auditar desviaciones cada semana';

  const defaultMetrics = ['Margen Operativo', 'CAC / LTV', 'eNPS', 'Velocidad de Ciclo'];

  // 1. If user asks for examples with numbers / metrics
  if (queryLower.includes('cifra') || queryLower.includes('estimad') || queryLower.includes('número') || queryLower.includes('ejemplo') || queryLower.includes('kpi')) {
    return `### Caso Táctico Cuantificado para **${businessType}**

Basado en el **${frameworkName}** de *"${book.title}"*, aquí tienes una proyección de impacto estimado:

1. **Métricas Objetivo Primarias**:
${defaultMetrics.map((m, idx) => `   - **KPI ${idx + 1}**: \`${m}\``).join('\n')}

2. **Benchmarking Real**:
   - Principio central: *${takeaways[0] || 'Optimización rigurosa de costos y procesos'}*.
   - Impacto medible: Reducción del 20% al 35% en tiempos de respuesta e incremento sostenido en retención de clientes.

3. **Fórmula de Despliegue en ${businessType}**:
   - **Inversión inicial sugerida**: 5% a 10% del presupuesto operativo mensual en prueba piloto de 14 días.
   - **Retorno Esperado**: Recuperación en menos de 60 a 90 días mediante la reducción de reprocesos.

> **Regla de Oro**: *"No intentes transformar todo el negocio en un día. Selecciona un único cuello de botella y aplica la métrica de control con rigor absoluto."*`;
  }

  // 2. If user asks about fatal errors / pitfalls
  if (queryLower.includes('error') || queryLower.includes('fatal') || queryLower.includes('evitar') || queryLower.includes('riesgo') || queryLower.includes('trampa')) {
    return `### 3 Errores Críticos a Evitar en **${businessType}**

Al implementar los conceptos de **"${book.title}"** (especialmente en ${currentChapterTitle}):

1. ⚠️ **Error Principal**: Subestimar la disciplina de ejecución e improvisar sin métricas de control claras.
2. ⚠️ **Falta de Gobernanza y Seguimiento**: Lanzar la iniciativa sin designar un único dueño de la métrica (DRI - Directly Responsible Individual).
3. ⚠️ **Desconexión con el Cliente**: Enfocarse exclusivamente en la teoría interna sin validar si la satisfacción del cliente final está aumentando en tiempo real.

**Protocolo de Mitigación Inmediata**:
- Aplica de inmediato el principio: **${action1}**.
- Si detectas una desviación mayor al 10% en tus métricas, detén la expansión y audita el proceso raíz.`;
  }

  // 3. If user asks about customer objection / simulation
  if (queryLower.includes('objeción') || queryLower.includes('simul') || queryLower.includes('cliente') || queryLower.includes('ventas') || queryLower.includes('negoci')) {
    return `### Simulación de Objeción Estratégica en **${businessType}**

**Escenario**: El cliente o inversionista plantea: *"Me parece una buena propuesta, pero actualmente no tenemos presupuesto o preferimos esperar al próximo trimestre"*.

**Respuesta Ejecutiva Estructurada (Método EnKurso)**:
1. **Validación y Empatía**: *"Entiendo perfectamente que la gestión del flujo de caja es su máxima prioridad este trimestre."*
2. **Reencuadre del Costo de la Inacción**: *"Precisamente según el marco de '${book.title}', cada mes sin optimizar este proceso representa una fuga del 15% al 25% en ineficiencias operativas."*
3. **Propuesta Piloto de Riesgo Cero**: *"Le propongo iniciar con una fase piloto acotada de 14 días donde nos enfocamos exclusivamente en: ${action1}. Si no ve resultados tangibles en sus métricas, no continuamos."*

¿Te gustaría que personalicemos esta respuesta con un producto o servicio específico de tu catálogo?`;
  }

  // 4. Default contextual executive recommendation tailored to the specific business
  return `### Diagnóstico y Plan Ejecutivo para **${businessType}**

Para aplicar de forma práctica los principios de **"${book.title}"** (Capítulo: *${currentChapterTitle}*) en tu sector:

#### 1. Marco Teórico Aplicado:
- **Especialidad**: ${frameworkName}.
- **Pilar Fundamental**: ${takeaways[0] || book.summary}.

#### 2. Plan de Acción Inmediato (Primeras 48h):
- 📌 **Paso 1**: ${action1}.
- 📌 **Paso 2**: ${action2}.
- 📌 **Paso 3**: ${action3}.

#### 3. Métricas de Control Obligatorias:
${defaultMetrics.slice(0, 3).map(m => `- \`${m}\``).join('\n')}

💡 *¿Deseas que profundicemos en cómo estructurar el equipo para ejecutar este plan o prefieres un borrador de los KPIs semanales?*`;
}
