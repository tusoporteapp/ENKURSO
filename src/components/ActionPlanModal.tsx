import React from 'react';
import { CheckSquare, Square, Clock, AlertCircle, X, CheckCircle2 } from 'lucide-react';
import { BookCourse } from '../types';

interface ActionPlanModalProps {
  book: BookCourse;
  isOpen: boolean;
  onClose: () => void;
  completedActionIds: string[];
  onToggleAction: (actionId: string) => void;
}

export const ActionPlanModal: React.FC<ActionPlanModalProps> = ({
  book,
  isOpen,
  onClose,
  completedActionIds,
  onToggleAction,
}) => {
  if (!isOpen) return null;

  const totalActions = book.actionPlan.length;
  const completedCount = book.actionPlan.filter(a => completedActionIds.includes(a.id)).length;
  const progressPercent = totalActions > 0 ? Math.round((completedCount / totalActions) * 100) : 0;

  const priorityColor: Record<string, string> = {
    Alta: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800',
    Estratégica: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800',
    Media: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
      <div 
        id="action-plan-sheet"
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-t-3xl sm:rounded-3xl w-full sm:max-w-xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-300"
      >
        {/* Mobile Pull Handle */}
        <div className="pt-3 pb-1 flex justify-center sm:hidden">
          <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="p-4 sm:p-5 bg-indigo-50/50 dark:bg-slate-950 border-b border-indigo-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-200">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Plan de Acción Ejecutivo (48 Horas)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-xs sm:max-w-sm">
                {book.title}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress header */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border-b border-indigo-100/70 dark:border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Progreso de ejecución</div>
            <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
              {completedCount} de {totalActions} tareas implementadas
            </div>
          </div>
          <div className="w-32 bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-indigo-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Action Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 bg-slate-50/40 dark:bg-slate-900/40">
          {book.actionPlan.map((action) => {
            const isDone = completedActionIds.includes(action.id);
            return (
              <div
                key={action.id}
                onClick={() => onToggleAction(action.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isDone
                    ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950 dark:bg-emerald-950/30 dark:border-emerald-700 dark:text-emerald-200'
                    : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-indigo-300 shadow-2xs'
                }`}
              >
                <button className="mt-0.5 text-indigo-600 dark:text-indigo-400 shrink-0">
                  {isDone ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`font-bold text-xs sm:text-sm ${isDone ? 'line-through text-slate-400' : 'text-slate-900 dark:text-slate-100'}`}>
                      {action.title}
                    </span>
                    <span className={`px-2 py-0.2 text-[10px] font-bold rounded-md border ${priorityColor[action.priority] || priorityColor['Media']}`}>
                      {action.priority}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                      <Clock className="w-3 h-3" />
                      {action.timeEstimate}
                    </span>
                  </div>
                  <p className={`text-xs leading-relaxed ${isDone ? 'text-slate-400' : 'text-slate-600 dark:text-slate-300'}`}>
                    {action.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white dark:bg-slate-950 border-t border-indigo-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Toca cada tarea para marcarla como completada en tu empresa.
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm"
          >
            Guardar y Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
