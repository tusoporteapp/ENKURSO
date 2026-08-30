import React from 'react';
import { BookOpen, CheckSquare, Sparkles, Award, Search } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

interface HeroBannerProps {
  onOpenSearch: () => void;
  totalBooksCount: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenSearch,
  totalBooksCount,
}) => {
  const handleSearchClick = () => {
    triggerHaptic('light');
    onOpenSearch();
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 w-full select-none">
      <div className="bg-slate-900 dark:bg-slate-900/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 text-white relative overflow-hidden shadow-lg sm:shadow-xl border border-slate-800">
        {/* Vibrant background ambient blurs */}
        <div className="absolute right-0 top-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/25 rounded-full blur-3xl translate-x-20 -translate-y-20 pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500/20 rounded-full blur-3xl translate-y-24 pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-indigo-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-4 shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Biblioteca Ejecutiva & Cursos</span>
          </div>

          <h1 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white mb-2 sm:mb-3">
            363 Libros para Dominar Todas las Áreas de Tu Empresa
          </h1>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal mb-3 sm:mb-6 line-clamp-3 sm:line-clamp-none">
            Organizado en 30 categorías maestras con contenido exhaustivo de 2,000+ palabras por tomo, frameworks probados, planes tácticos y mentoría ejecutiva con Inteligencia Artificial. Acceso 100% disponible sin conexión a internet.
          </p>

          {/* Quick Metrics Bar in Vibrant Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-xs shrink-0">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-base font-extrabold text-white leading-none">363 Tomos</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 sm:mt-1 truncate">30 Categorías</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-400 text-slate-950 flex items-center justify-center font-black shadow-xs shrink-0">
                <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-base font-extrabold text-white leading-none">Sin Conexión</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 sm:mt-1 truncate">100% Offline</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-400 text-slate-950 flex items-center justify-center font-black shadow-xs shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-base font-extrabold text-white leading-none">Mentor IA</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 sm:mt-1 truncate">Workers & Local</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-rose-400 text-slate-950 flex items-center justify-center font-black shadow-xs shrink-0">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-base font-extrabold text-white leading-none">Diplomas</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 sm:mt-1 truncate">Código oficial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
