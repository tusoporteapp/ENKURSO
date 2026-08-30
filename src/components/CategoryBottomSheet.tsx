import React from 'react';
import { X, Check, Compass, Grid, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { triggerHaptic } from '../utils/haptics';

interface CategoryBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export const CategoryBottomSheet: React.FC<CategoryBottomSheetProps> = ({
  isOpen,
  onClose,
  selectedCategory,
  onSelectCategory,
}) => {
  if (!isOpen) return null;

  const handleSelect = (catId: string | null) => {
    triggerHaptic('selection');
    onSelectCategory(catId);
    onClose();
  };

  const handleClose = () => {
    triggerHaptic('light');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in select-none">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Bottom Sheet Modal */}
      <div 
        id="category-bottom-sheet"
        className="relative z-10 w-full sm:max-w-xl bg-white dark:bg-slate-900 border border-transparent dark:border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300 text-slate-800 dark:text-slate-100 safe-bottom"
      >
        {/* Mobile Pull Drag Indicator */}
        <div className="pt-3 pb-1 flex justify-center sm:hidden">
          <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="px-5 py-3.5 border-b border-indigo-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
              30 Rutas de Maestría
            </span>
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              Explorar por Especialidad
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors native-touch-btn cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Categories List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 no-scrollbar">
          {/* Option: All Books */}
          <button
            onClick={() => handleSelect(null)}
            className={`w-full p-3 rounded-2xl flex items-center justify-between border transition-all text-left native-touch-btn cursor-pointer ${
              selectedCategory === null
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-600 dark:border-indigo-500 font-bold shadow-md shadow-indigo-200 dark:shadow-none'
                : 'bg-slate-50 dark:bg-slate-800/80 hover:bg-indigo-50/70 dark:hover:bg-slate-800 border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                selectedCategory === null ? 'bg-white/20 text-white' : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
              }`}>
                <Grid className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold">Todos los Libros & Cursos</p>
                <p className={`text-xs ${selectedCategory === null ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'}`}>
                  Catálogo completo de 363 tomos
                </p>
              </div>
            </div>
            {selectedCategory === null && <Check className="w-5 h-5 text-white shrink-0" />}
          </button>

          {/* 24 Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelect(cat.id)}
                  className={`p-3 rounded-2xl flex items-center justify-between border transition-all text-left native-touch-btn cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-600 dark:border-indigo-500 font-bold shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800/80 hover:bg-indigo-50/70 dark:hover:bg-slate-800 border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                    }`}>
                      {cat.number}
                    </span>
                    <div className="truncate">
                      <p className="text-xs font-bold truncate">{cat.name}</p>
                      <p className={`text-[10px] ${isSelected ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'}`}>
                        {cat.totalBooks} tomos
                      </p>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-white shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
