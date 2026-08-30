import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Clock, Star, ArrowRight, Tag, Layers } from 'lucide-react';
import { BookCourse } from '../types';
import { CATEGORIES } from '../data/categories';
import { EkLogo } from './EkLogo';
import { triggerHaptic } from '../utils/haptics';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  allBooks: BookCourse[];
  onSelectBook: (book: BookCourse) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  allBooks,
  onSelectBook,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCatFilter, setSelectedCatFilter] = useState<string | null>(null);
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setQuery('');
      setSelectedCatFilter(null);
      setSelectedLevelFilter(null);
    }
  }, [isOpen]);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K / Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredBooks = allBooks.filter((b) => {
    const matchesQuery =
      query.trim() === '' ||
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.categoryName.toLowerCase().includes(query.toLowerCase()) ||
      b.summary.toLowerCase().includes(query.toLowerCase()) ||
      b.numericId.toString() === query.trim();

    const matchesCat = !selectedCatFilter || b.categoryId === selectedCatFilter;
    const matchesLevel = !selectedLevelFilter || b.level === selectedLevelFilter;

    return matchesQuery && matchesCat && matchesLevel;
  });

  const handleSelectBook = (book: BookCourse) => {
    triggerHaptic('light');
    onSelectBook(book);
    onClose();
  };

  const handleClose = () => {
    triggerHaptic('light');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in select-none">
      <div 
        id="search-modal"
        className="bg-white dark:bg-slate-900 border border-transparent dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-b-3xl sm:rounded-3xl w-full max-w-2xl h-full sm:h-auto sm:max-h-[85vh] flex flex-col shadow-2xl overflow-hidden safe-top safe-bottom"
      >
        {/* Search Input Box */}
        <div className="p-3.5 sm:p-5 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
          <EkLogo size={24} className="rounded-lg shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar en los 363 libros (ej: Finanzas, MVP, #42)..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => {
                triggerHaptic('light');
                setQuery('');
              }}
              className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 native-touch-btn cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-xl font-mono font-bold native-touch-btn cursor-pointer"
          >
            Cerrar
          </button>
        </div>

        {/* Quick Category & Level Filters */}
        <div className="px-3 sm:px-4 py-2 bg-slate-50/80 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
          <span className="text-slate-500 dark:text-slate-400 text-[11px] shrink-0 font-medium">Filtro:</span>
          
          {/* All */}
          <button
            onClick={() => {
              triggerHaptic('selection');
              setSelectedCatFilter(null); 
              setSelectedLevelFilter(null); 
            }}
            className={`px-3 py-1 rounded-full shrink-0 font-semibold transition-colors native-touch-btn cursor-pointer ${
              !selectedCatFilter && !selectedLevelFilter
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white font-bold shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700'
            }`}
          >
            Todos ({allBooks.length})
          </button>

          {/* Level filters */}
          {['Principiante', 'Intermedio', 'Avanzado'].map(lvl => (
            <button
              key={lvl}
              onClick={() => {
                triggerHaptic('selection');
                setSelectedLevelFilter(selectedLevelFilter === lvl ? null : lvl);
              }}
              className={`px-3 py-1 rounded-full shrink-0 font-medium border transition-colors native-touch-btn cursor-pointer ${
                selectedLevelFilter === lvl
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-600 dark:border-indigo-500 font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-slate-700'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2.5 sm:p-4 space-y-1.5 sm:space-y-2 no-scrollbar">
          {filteredBooks.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <BookOpen className="w-10 h-10 mx-auto mb-2 opacity-30 text-indigo-500" />
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">No se encontraron libros para "{query}"</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Prueba con palabras clave como ventas, liderazgo, métricas, clientes o finanzas.</p>
            </div>
          ) : (
            filteredBooks.slice(0, 50).map((book) => (
              <div
                key={book.id}
                onClick={() => handleSelectBook(book)}
                className="group p-3 rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 hover:bg-indigo-50/80 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all cursor-pointer flex items-center justify-between gap-3 native-touch-card"
              >
                <div className="flex items-start gap-2.5 min-w-0">
                  <span className="w-7 h-7 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-black text-xs flex items-center justify-center shrink-0 border border-indigo-200 dark:border-indigo-800">
                    #{book.numericId}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wide truncate">
                        {book.categoryName}
                      </span>
                      <span className="text-slate-300 dark:text-slate-600 text-xs">•</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 shrink-0">
                        {book.readTimeMinutes} min
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                      {book.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {book.summary}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1.5">
                  <span className="hidden sm:inline text-xs text-slate-500 dark:text-slate-400 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    Leer
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between px-4 font-medium">
          <span>{filteredBooks.length} de {allBooks.length} libros</span>
          <span className="text-[11px]">Toca cualquier tomo para abrirlo</span>
        </div>
      </div>
    </div>
  );
};
