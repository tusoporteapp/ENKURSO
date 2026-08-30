import React from 'react';
import { BookOpen, CheckCircle2, Clock, List, Sparkles, ChevronRight } from 'lucide-react';
import { BookCourse } from '../types';

interface BookReaderTopProgressBarProps {
  book: BookCourse;
  currentChapterIndex: number;
  chapterScrollPercent: number;
  onSelectChapter: (index: number) => void;
  onOpenToc: () => void;
  isDarkActive?: boolean;
}

export const BookReaderTopProgressBar: React.FC<BookReaderTopProgressBarProps> = ({
  book,
  currentChapterIndex,
  chapterScrollPercent,
  onSelectChapter,
  onOpenToc,
}) => {
  const totalChapters = book.chapters.length || 6;
  const currentChapterNumber = currentChapterIndex + 1;
  const remainingChapters = Math.max(0, totalChapters - currentChapterNumber);

  // Calculate blended overall tome progress (completed chapters + active chapter intra-scroll)
  const exactProgressPercent = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        ((currentChapterIndex + Math.min(100, Math.max(0, chapterScrollPercent)) / 100) / totalChapters) * 100
      )
    )
  );

  // Estimate remaining reading time based on total book duration and remaining progress
  const baseMinutes = book.readTimeMinutes || 25;
  const remainingMinutes = Math.max(
    1,
    Math.round((baseMinutes * (100 - exactProgressPercent)) / 100)
  );

  return (
    <div 
      id="persistent-top-progress-bar"
      className="w-full border-b border-slate-200/80 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors duration-200 shadow-2xs"
    >
      {/* 1. Multi-Segment Chapter Progress Track */}
      <div 
        className="w-full px-2 sm:px-4 pt-1.5 pb-1 flex items-center gap-1 sm:gap-1.5"
        role="progressbar"
        aria-valuenow={exactProgressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progreso del tomo: ${exactProgressPercent}%`}
      >
        {book.chapters.map((chapter, idx) => {
          const isCompleted = idx < currentChapterIndex;
          const isCurrent = idx === currentChapterIndex;
          const isUpcoming = idx > currentChapterIndex;

          // Compute individual segment fill percentage
          let fillWidth = 0;
          if (isCompleted) fillWidth = 100;
          else if (isCurrent) fillWidth = chapterScrollPercent;

          return (
            <button
              key={chapter.id || idx}
              onClick={() => onSelectChapter(idx)}
              title={`Capítulo ${chapter.number}: ${chapter.title}${
                isCompleted ? ' (Completado)' : isCurrent ? ' (Leyendo actualmente)' : ' (Pendiente)'
              }`}
              className="group relative flex-1 h-2 sm:h-2.5 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 transition-all hover:h-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            >
              {/* Active Fill Bar */}
              <div
                className={`h-full rounded-full transition-all duration-200 ease-out ${
                  isCompleted
                    ? 'bg-emerald-500 dark:bg-emerald-400'
                    : isCurrent
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-500 dark:to-indigo-400'
                    : 'bg-transparent'
                }`}
                style={{ width: `${fillWidth}%` }}
              />

              {/* Glowing Pulse Head on Active Segment */}
              {isCurrent && fillWidth > 5 && fillWidth < 98 && (
                <div 
                  className="absolute top-0 bottom-0 w-2 bg-white/60 rounded-full blur-[1px] -translate-x-1/2 pointer-events-none"
                  style={{ left: `${fillWidth}%` }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* 2. Real-time Status & Sections Remaining Indicator */}
      <div className="px-3 sm:px-6 py-1.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs">
        {/* Left: Chapter Position & Remaining Sections Badge */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
            <span className="font-mono font-bold text-slate-900 dark:text-white">
              Cap. 0{currentChapterNumber}/0{totalChapters}
            </span>
          </span>

          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>

          {/* Dynamic Remaining Counter Badge */}
          <div 
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold ${
              remainingChapters === 0
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                : remainingChapters === 1
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80'
            }`}
          >
            {remainingChapters === 0 ? (
              <>
                <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>¡Última sección! Tomo listo para certificar</span>
              </>
            ) : remainingChapters === 1 ? (
              <>
                <BookOpen className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Falta <strong>1 sección</strong> para completar el tomo</span>
              </>
            ) : (
              <>
                <BookOpen className="w-3 h-3 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Faltan <strong>{remainingChapters} secciones</strong> para completar</span>
              </>
            )}
          </div>
        </div>

        {/* Right: Progress Percentage, Time Estimate & Quick TOC link */}
        <div className="flex items-center gap-3 ml-auto text-[11px] sm:text-xs">
          {/* Estimated remaining reading time */}
          <span 
            className="text-slate-500 dark:text-slate-400 flex items-center gap-1"
            title={`Tiempo estimado restante: ~${remainingMinutes} minutos`}
          >
            <Clock className="w-3 h-3 text-slate-400 dark:text-slate-500" />
            <span>~{remainingMinutes} min restantes</span>
          </span>

          {/* Overall Percentage */}
          <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-lg border border-indigo-200/60 dark:border-indigo-800/60">
            {exactProgressPercent}%
          </span>

          {/* TOC Quick Trigger */}
          <button
            onClick={onOpenToc}
            className="hidden md:flex items-center gap-1 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors font-medium cursor-pointer"
            title="Ver índice y capítulos"
          >
            <span>Índice</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
