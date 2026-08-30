import React from 'react';
import { X, CheckCircle2, Award, CheckSquare } from 'lucide-react';
import { BookCourse } from '../types';

interface TableOfContentsBottomSheetProps {
  book: BookCourse;
  isOpen: boolean;
  onClose: () => void;
  currentChapterIndex: number;
  onSelectChapter: (index: number) => void;
  onOpenQuiz: () => void;
  onOpenActionPlan: () => void;
}

export const TableOfContentsBottomSheet: React.FC<TableOfContentsBottomSheetProps> = ({
  book,
  isOpen,
  onClose,
  currentChapterIndex,
  onSelectChapter,
  onOpenQuiz,
  onOpenActionPlan,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer / Bottom Sheet */}
      <div 
        id="toc-bottom-sheet"
        className="relative z-10 w-full sm:max-w-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300 border border-slate-200 dark:border-slate-800 safe-bottom"
      >
        {/* Mobile Pull Handle */}
        <div className="pt-3 pb-1 flex justify-center sm:hidden">
          <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
              Estructura del Libro • #{book.numericId}
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white truncate max-w-xs sm:max-w-sm">
              Índice de Capítulos
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chapter List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {book.chapters.map((ch, idx) => {
            const isActive = idx === currentChapterIndex;
            const isCompleted = idx < currentChapterIndex;

            return (
              <button
                key={ch.id}
                onClick={() => {
                  onSelectChapter(idx);
                  onClose();
                }}
                className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-start gap-3 border ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-indigo-950 dark:text-indigo-200 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-800 hover:bg-indigo-50/50 hover:border-indigo-200 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : isCompleted
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}>
                  {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : `0${ch.number}`}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className={`text-xs sm:text-sm font-bold truncate leading-snug ${isActive ? 'text-indigo-600 dark:text-indigo-400' : ''}`}>
                      {ch.title}
                    </p>
                    {isActive && (
                      <span className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/60 px-2 py-0.5 rounded-full shrink-0 ml-2">
                        Leyendo
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] opacity-75 truncate mt-0.5">{ch.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Shortcuts Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => {
              onClose();
              onOpenQuiz();
            }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs shadow-xs transition-all"
          >
            <Award className="w-4 h-4" />
            <span>Examen & Certificado</span>
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenActionPlan();
            }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-xs transition-all"
          >
            <CheckSquare className="w-4 h-4 text-indigo-500" />
            <span>Plan de Acción 48h</span>
          </button>
        </div>
      </div>
    </div>
  );
};
