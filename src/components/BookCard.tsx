import React from 'react';
import { BookOpen, Clock, Star, Bookmark, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { BookCourse, UserProgress } from '../types';
import { CATEGORIES } from '../data/categories';
import { triggerHaptic } from '../utils/haptics';

interface BookCardProps {
  book: BookCourse;
  progress?: UserProgress;
  onOpenBook: (book: BookCourse) => void;
  onOpenOverview?: (book: BookCourse) => void;
  onToggleFavorite: (bookId: string) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  progress,
  onOpenBook,
  onOpenOverview,
  onToggleFavorite,
}) => {
  const category = CATEGORIES.find(c => c.id === book.categoryId) || CATEGORIES[0];
  const isCompleted = progress?.completed;
  const percent = progress?.progressPercent || 0;
  const isFavorite = progress?.isFavorite;

  const handleCardClick = () => {
    triggerHaptic('light');
    if (onOpenOverview) {
      onOpenOverview(book);
    } else {
      onOpenBook(book);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHaptic('medium');
    onToggleFavorite(book.id);
  };

  const handleReadClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHaptic('medium');
    onOpenBook(book);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 overflow-hidden cursor-pointer select-none native-touch-card"
    >
      {/* 1. Sleek Apple Books Style Cover Banner */}
      <div className={`relative h-24 sm:h-28 p-3 bg-gradient-to-tr ${category.color.gradient} flex flex-col justify-between text-white overflow-hidden`}>
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />
        
        {/* Top bar: Tomo number & Bookmark */}
        <div className="relative z-10 flex items-center justify-between gap-1">
          <div className="px-2 py-0.5 bg-black/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wide uppercase border border-white/20">
            Tomo #{book.numericId}
          </div>

          <button
            onClick={handleFavoriteClick}
            className={`p-1.5 rounded-full transition-all backdrop-blur-md shrink-0 native-touch-btn ${
              isFavorite
                ? 'bg-white text-rose-500 shadow-xs'
                : 'bg-black/20 text-white/90 hover:text-white hover:bg-black/30'
            }`}
            title={isFavorite ? 'Quitar de favoritos' : 'Guardar en mi biblioteca'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Bottom bar: Category & Rating */}
        <div className="relative z-10 flex items-end justify-between">
          <span className="text-[10px] font-medium text-white/90 truncate max-w-[120px]">
            {category.name}
          </span>
          <div className="flex items-center gap-1 text-[10px] bg-black/20 px-1.5 py-0.5 rounded backdrop-blur-sm">
            <Star className="w-2.5 h-2.5 text-amber-300 fill-amber-300" />
            <span className="font-bold">{book.rating}</span>
          </div>
        </div>

        {/* Delicate book spine accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/15" />
      </div>

      {/* 2. Book Body */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5">
        <div>
          {/* Metadata Row: Level & Read Time */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 font-medium mb-1.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{book.readTimeMinutes} min</span>
            </span>

            {isCompleted ? (
              <span className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3 h-3" />
                <span>Hecho</span>
              </span>
            ) : (
              <span className="text-slate-400">
                {book.level}
              </span>
            )}
          </div>

          {/* Book Title */}
          <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
            {book.title}
          </h3>

          {/* Summary */}
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed font-normal">
            {book.summary}
          </p>
        </div>

        {/* 3. Footer Action */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
          {/* Progress Bar (if reading) */}
          {percent > 0 && !isCompleted && (
            <div className="mb-2">
              <div className="flex items-center justify-between text-[10px] text-slate-400 mb-0.5">
                <span>Progreso</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{percent}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCardClick}
              className="flex-1 py-1.5 px-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold text-[11px] rounded-xl transition-all cursor-pointer text-center truncate flex items-center justify-center gap-1"
              title="Ver Ficha y Oportunidades"
            >
              <Info className="w-3 h-3 text-slate-400" />
              <span>Ficha</span>
            </button>

            <button
              onClick={handleReadClick}
              className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-[11px] rounded-xl transition-all shadow-2xs cursor-pointer text-center"
            >
              <BookOpen className="w-3 h-3 shrink-0" />
              <span>{percent > 0 ? 'Continuar' : 'Leer'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
