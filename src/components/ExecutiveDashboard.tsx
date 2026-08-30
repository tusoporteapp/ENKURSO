import React, { useState } from 'react';
import { 
  Flame, 
  Clock, 
  Award, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  ShieldCheck, 
  ArrowUpRight,
  Brain,
  CheckCircle2
} from 'lucide-react';
import { BookCourse, UserLibraryState } from '../types';
import { CATEGORIES } from '../data/categories';
import { 
  getExecutiveRank, 
  getLastActiveBook, 
  getDailyRecommendedBook,
  loadUserName,
  loadUserRole,
  loadUserInterests,
  loadUserCompany,
  loadUserIndustry,
  loadAiDiagnosis,
  loadAiCuratedBookIds,
  getPersonalizedRecommendations
} from '../utils/storage';
import { triggerHaptic } from '../utils/haptics';

interface ExecutiveDashboardProps {
  userState: UserLibraryState;
  allBooks: BookCourse[];
  onOpenBook: (book: BookCourse) => void;
  onOpenSearch: () => void;
  onOpenCertificates?: () => void;
}

export const ExecutiveDashboard: React.FC<ExecutiveDashboardProps> = ({
  userState,
  allBooks,
  onOpenBook,
  onOpenSearch,
  onOpenCertificates,
}) => {
  const [isAiExpanded, setIsAiExpanded] = useState(false);

  const userName = loadUserName() || 'Director Ejecutivo';
  const userRole = loadUserRole() || 'Líder Empresarial';
  const userInterests = loadUserInterests();
  const companyName = loadUserCompany();
  const industry = loadUserIndustry();
  const aiDiagnosis = userState.aiDiagnosisSummary || loadAiDiagnosis();
  const curatedBookIds = userState.aiCuratedBookIds || loadAiCuratedBookIds();

  const lastActiveBook = getLastActiveBook(userState, allBooks);
  const dailyPick = getDailyRecommendedBook(allBooks);
  const activeFocusBook = lastActiveBook || dailyPick;
  
  const rank = getExecutiveRank(userState.completedBooksCount);
  const goalPercent = Math.min(100, Math.round((userState.todayMinutesRead / userState.customGoalMinutes) * 100));

  const focusBookProg = activeFocusBook ? userState.progressMap[activeFocusBook.id] : undefined;
  const isOngoing = focusBookProg && focusBookProg.progressPercent > 0 && !focusBookProg.completed;
  const category = activeFocusBook ? (CATEGORIES.find(c => c.id === activeFocusBook.categoryId) || CATEGORIES[0]) : CATEGORIES[0];

  // Prioritize AI Curated books, fallback to category recommendations
  const aiMatchedBooks = curatedBookIds
    .map((id) => allBooks.find((b) => b.id === id))
    .filter(Boolean) as BookCourse[];

  const personalizedBooks = aiMatchedBooks.length > 0
    ? aiMatchedBooks
    : getPersonalizedRecommendations(allBooks, userInterests);

  const handleBookAction = () => {
    if (activeFocusBook) {
      triggerHaptic('medium');
      onOpenBook(activeFocusBook);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-1 w-full select-none space-y-3 sm:space-y-4">
      
      {/* 1. Header Greeting Bar (Apple Style: Clean, Crisp, Minimal) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-1">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Hola, {userName}
            </h1>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">
              • {userRole}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-normal mt-0.5">
            {companyName ? `Plan de crecimiento para ${companyName}` : 'Tu biblioteca ejecutiva de 363 tomos'}
          </p>
        </div>

        {/* Executive Rank Pill */}
        <div className={`self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${rank.color}`}>
          <span>{rank.badge}</span>
          <span>{rank.title}</span>
          <span className="text-[10px] opacity-70 font-mono">({userState.completedBooksCount} completados)</span>
        </div>
      </div>

      {/* 2. Spotlight Book (Apple Books / Audible Spotlight) */}
      {activeFocusBook && (
        <div className="relative rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all overflow-hidden p-4 sm:p-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Left Content Area */}
            <div className="min-w-0 flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase ${
                  isOngoing 
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' 
                    : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                }`}>
                  {isOngoing ? 'Lectura en Curso' : 'Tomo Destacado de Hoy'}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Tomo #{activeFocusBook.numericId} • {category.name}
                </span>
              </div>

              <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-snug tracking-tight">
                {activeFocusBook.title}
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {activeFocusBook.summary}
              </p>

              {/* Progress bar if ongoing */}
              {isOngoing && focusBookProg && (
                <div className="pt-1 max-w-md">
                  <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1">
                    <span>Capítulo {focusBookProg.currentChapter} de 6</span>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400 font-mono">{focusBookProg.progressPercent}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${focusBookProg.progressPercent}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right Action Area */}
            <div className="flex items-center md:flex-col justify-between md:justify-center gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
              <div className="text-xs text-slate-400 hidden sm:block">
                <span>6 Capítulos • ~15 min</span>
              </div>

              <button
                onClick={handleBookAction}
                className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-semibold rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer native-touch-btn"
              >
                <span>{isOngoing ? 'Continuar Lectura' : 'Comenzar Tomo'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Executive Metrics Pill Strip (Unified, Clean, Minimal) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {/* Metric 1: Streak */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 rounded-xl sm:rounded-2xl p-3 flex items-center gap-2.5 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Flame className="w-4 h-4 fill-amber-500" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
              {userState.dailyStreak} {userState.dailyStreak === 1 ? 'día' : 'días'}
            </p>
            <p className="text-[10px] text-slate-400 font-normal truncate">
              Racha Activa
            </p>
          </div>
        </div>

        {/* Metric 2: Today's Goal */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 rounded-xl sm:rounded-2xl p-3 flex items-center gap-2.5 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
              {Math.round(userState.todayMinutesRead)}/{userState.customGoalMinutes}m
            </p>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full overflow-hidden mt-1">
              <div
                className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${goalPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Metric 3: Completed Books */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 rounded-xl sm:rounded-2xl p-3 flex items-center gap-2.5 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
              {userState.completedBooksCount} / 363
            </p>
            <p className="text-[10px] text-slate-400 font-normal truncate">
              Tomos Aprobados
            </p>
          </div>
        </div>

        {/* Metric 4: Diplomas */}
        <div 
          onClick={onOpenCertificates}
          className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 rounded-xl sm:rounded-2xl p-3 flex items-center gap-2.5 shadow-2xs cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                {new Set((userState.certificates || []).map((c) => c.bookId)).size}
              </p>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </div>
            <p className="text-[10px] text-slate-400 font-normal truncate">
              Certificados
            </p>
          </div>
        </div>
      </div>

      {/* 4. Compact & Expandable AI Strategic Insight (Discreet & Clean) */}
      {aiDiagnosis && (
        <div className="rounded-xl sm:rounded-2xl bg-slate-900 dark:bg-slate-900 text-white p-3 sm:p-4 border border-slate-800 transition-all">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <Brain className="w-4 h-4 text-indigo-400 shrink-0" />
              <p className="text-xs font-semibold text-slate-200 truncate">
                <span className="text-indigo-400 font-bold uppercase tracking-wider text-[10px]">Diagnóstico IA • {industry}:</span> {userState.challengeText || 'Enfoque de crecimiento'}
              </p>
            </div>

            <button
              onClick={() => setIsAiExpanded(!isAiExpanded)}
              className="text-xs text-indigo-300 hover:text-white font-medium flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>{isAiExpanded ? 'Menos' : 'Ver dictamen'}</span>
              {isAiExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          {isAiExpanded && (
            <div className="mt-2.5 pt-2.5 border-t border-slate-800 text-xs text-slate-300 leading-relaxed space-y-1.5 animate-in fade-in duration-150">
              <p>{aiDiagnosis}</p>
            </div>
          )}
        </div>
      )}

      {/* 5. Curated AI Recommendations (Clean horizontal cards) */}
      {personalizedBooks.length > 0 && (
        <div className="pt-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Ruta Recomendada para Ti
            </h3>
            <span className="text-[11px] text-slate-400 font-normal">
              4 fases clave
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {personalizedBooks.slice(0, 4).map((book, bIdx) => {
              const prog = userState.progressMap[book.id];
              const isDone = prog?.completed;
              const phaseLabels = ['Fase 1: Inmediato', 'Fase 2: Táctica', 'Fase 3: Métricas', 'Fase 4: Escala'];
              return (
                <div
                  key={book.id}
                  onClick={() => {
                    triggerHaptic('light');
                    onOpenBook(book);
                  }}
                  className="p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all shadow-2xs hover:shadow-xs cursor-pointer flex flex-col justify-between group native-touch-btn"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase truncate">
                        {phaseLabels[bIdx] || `Fase ${bIdx + 1}`}
                      </span>
                      <span>#{book.numericId}</span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                      {book.title}
                    </h4>

                    <p className="text-[11px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                      {book.summary}
                    </p>
                  </div>

                  <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px]">
                    <span className="text-slate-400 font-normal">Cat. {book.categoryNumber}</span>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-0.5">
                      {isDone ? (
                        <span className="text-emerald-500 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Aprobado
                        </span>
                      ) : prog && prog.progressPercent > 0 ? (
                        <span>{prog.progressPercent}% ➔</span>
                      ) : (
                        <span>Leer ➔</span>
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
