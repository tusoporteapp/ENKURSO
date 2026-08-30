import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, ChevronRight, RotateCcw, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BookCourse } from '../types';

interface QuizModalProps {
  book: BookCourse;
  isOpen: boolean;
  onClose: () => void;
  onPassQuiz: (score: number) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  book,
  isOpen,
  onClose,
  onPassQuiz,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const questions = book.quiz;
  const totalQuestions = questions.length;

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correct++;
      }
    });
    return Math.round((correct / totalQuestions) * 100);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const score = calculateScore();

    if (score >= 66) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.log('Confetti error', e);
      }
      onPassQuiz(score);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const score = calculateScore();
  const isPassed = score >= 66;
  const isAllAnswered = Object.keys(selectedAnswers).length === totalQuestions;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
      <div 
        id="quiz-modal-sheet"
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-t-3xl sm:rounded-3xl w-full sm:max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-300"
      >
        {/* Mobile Pull Handle */}
        <div className="pt-3 pb-1 flex justify-center sm:hidden">
          <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="p-4 sm:p-5 bg-indigo-50/50 dark:bg-slate-950 border-b border-indigo-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-200">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Examen de Certificación Ejecutiva
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-xs sm:max-w-md">
                Tomo #{book.numericId}: <span className="text-slate-800 dark:text-slate-200 font-medium">{book.title}</span>
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-50/40 dark:bg-slate-900/40">
          {/* Results Summary Box (if submitted) */}
          {isSubmitted && (
            <div className={`p-4 rounded-2xl border ${isPassed ? 'bg-emerald-50 border-emerald-300 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-500/40 dark:text-emerald-200' : 'bg-rose-50 border-rose-300 text-rose-900 dark:bg-rose-950/40 dark:border-rose-500/40 dark:text-rose-200'} animate-in fade-in`}>
              <div className="flex items-center gap-3">
                {isPassed ? (
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 shrink-0" />
                ) : (
                  <XCircle className="w-8 h-8 text-rose-600 dark:text-rose-400 shrink-0" />
                )}
                <div>
                  <h4 className="font-bold text-sm sm:text-base">
                    {isPassed ? '¡Aprobado con Éxito! Certificado Otorgado' : 'No alcanzaste el puntaje mínimo (66%)'}
                  </h4>
                  <p className="text-xs opacity-90 mt-0.5">
                    Tu puntuación fue de <strong>{score}%</strong> ({Object.values(selectedAnswers).filter((ans, idx) => ans === questions[idx].correctIndex).length} de {totalQuestions} respuestas correctas).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Question List */}
          {questions.map((q, qIdx) => {
            const isAnswered = selectedAnswers[qIdx] !== undefined;
            const isCorrect = isSubmitted && selectedAnswers[qIdx] === q.correctIndex;

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-4 sm:p-5 space-y-3 shadow-2xs"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">
                    {qIdx + 1}
                  </span>
                  <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 leading-snug">
                    {q.question}
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-2 pt-1 pl-8">
                  {q.options.map((option, optIdx) => {
                    const isSelected = selectedAnswers[qIdx] === optIdx;
                    let optionStyle = 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-indigo-50/60 hover:text-indigo-700';

                    if (isSubmitted) {
                      if (optIdx === q.correctIndex) {
                        optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-800 dark:bg-emerald-950/60 dark:border-emerald-500 dark:text-emerald-200 font-bold';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'bg-rose-50 border-rose-500 text-rose-800 dark:bg-rose-950/60 dark:border-rose-500 dark:text-rose-200';
                      } else {
                        optionStyle = 'bg-slate-50/50 border-slate-100 text-slate-400 opacity-50';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-indigo-50 border-indigo-600 text-indigo-800 dark:bg-indigo-950/60 dark:border-indigo-500 dark:text-indigo-200 font-bold shadow-xs';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelect(qIdx, optIdx)}
                        disabled={isSubmitted}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${optionStyle}`}
                      >
                        <span className="font-mono text-xs opacity-60 mt-0.5">{String.fromCharCode(65 + optIdx)}.</span>
                        <span className="flex-1">{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {isSubmitted && (
                  <div className="pl-8 pt-1 text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                    <strong className="text-indigo-600 dark:text-indigo-400">Explicación: </strong> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          {!isSubmitted ? (
            <div className="flex items-center justify-between w-full">
              <span className="text-xs text-slate-500 font-medium">
                {Object.keys(selectedAnswers).length} de {totalQuestions} respondidas
              </span>
              <button
                onClick={handleSubmit}
                disabled={!isAllAnswered}
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all disabled:opacity-40 shadow-sm"
              >
                <span>Calificar Respuestas</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs sm:text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reintentar Examen</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm"
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
