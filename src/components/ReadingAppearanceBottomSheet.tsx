import React from 'react';
import { X, Check, Type, Sun, Moon, Sparkles, Layout } from 'lucide-react';
import { ReaderSettings } from '../types';

interface ReadingAppearanceBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  settings: ReaderSettings;
  onUpdateSettings: (newSettings: ReaderSettings) => void;
  isDarkActive?: boolean;
}

export const ReadingAppearanceBottomSheet: React.FC<ReadingAppearanceBottomSheetProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  isDarkActive,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal / Bottom Sheet */}
      <div 
        id="reading-appearance-sheet"
        className="relative z-10 w-full sm:max-w-md bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-t-3xl sm:rounded-3xl shadow-2xl p-5 space-y-5 animate-in slide-in-from-bottom-8 duration-300 border border-slate-200 dark:border-slate-800 safe-bottom"
      >
        {/* Mobile Pull Handle */}
        <div className="pt-0 pb-1 flex justify-center sm:hidden">
          <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Type className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Ajustes de Lectura & Visualización
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Themes Swatches */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Tema de Fondo
            </label>
            <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">
              {settings.theme === 'auto' ? 'Sincronizado con Modo de App' : ''}
            </span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {[
              { 
                id: 'auto', 
                label: 'Auto (App)', 
                bg: isDarkActive ? 'bg-[#0f172a]' : 'bg-[#fbf9f5]', 
                text: isDarkActive ? 'text-slate-100' : 'text-[#2b2823]', 
                border: 'border-indigo-400' 
              },
              { id: 'editorial', label: 'Cálido', bg: 'bg-[#fbf9f5]', text: 'text-[#2b2823]', border: 'border-stone-300' },
              { id: 'sepia', label: 'Sepia', bg: 'bg-[#f4ecd8]', text: 'text-[#3b2f1f]', border: 'border-amber-300' },
              { id: 'paper', label: 'Blanco', bg: 'bg-white', text: 'text-slate-900', border: 'border-slate-300' },
              { id: 'dark', label: 'Noche', bg: 'bg-[#0f172a]', text: 'text-slate-100', border: 'border-slate-700' },
              { id: 'midnight', label: 'OLED', bg: 'bg-[#030712]', text: 'text-slate-200', border: 'border-slate-800' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => onUpdateSettings({ ...settings, theme: t.id as any })}
                className={`h-14 rounded-2xl ${t.bg} ${t.text} ${t.border} border-2 flex flex-col items-center justify-center text-[10px] font-bold transition-all ${
                  settings.theme === t.id
                    ? 'ring-2 ring-indigo-600 scale-105 shadow-md'
                    : 'opacity-85 hover:opacity-100'
                }`}
              >
                <span className="truncate px-1">{t.label}</span>
                {settings.theme === t.id && <Check className="w-3 h-3 text-indigo-500 mt-0.5" />}
              </button>
            ))}
          </div>
        </div>

        {/* Font Typography Selector */}
        <div>
          <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
            Tipografía
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'serif', label: 'Literata', preview: 'Aa Serif', fontClass: 'font-reader-serif' },
              { id: 'sans', label: 'Jakarta', preview: 'Aa Sans', fontClass: 'font-reader-sans' },
              { id: 'mono', label: 'Mono', preview: 'Aa Mono', fontClass: 'font-reader-mono' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => onUpdateSettings({ ...settings, font: f.id as any })}
                className={`py-2.5 px-2 rounded-2xl border text-center transition-all ${
                  settings.font === f.id
                    ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-600 text-indigo-700 dark:text-indigo-300 font-bold shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className={`text-base ${f.fontClass}`}>{f.preview}</div>
                <div className="text-[11px] opacity-70 mt-0.5">{f.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Font Size & Stepper */}
        <div>
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            <span>Tamaño de Texto</span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400">{settings.fontSize} px</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 p-2 rounded-2xl">
            <button
              onClick={() => onUpdateSettings({ ...settings, fontSize: Math.max(14, settings.fontSize - 1) })}
              className="w-10 h-10 bg-white dark:bg-slate-700 rounded-xl shadow-xs flex items-center justify-center font-bold text-sm hover:bg-slate-50 active:scale-95 transition-transform"
            >
              A-
            </button>
            <input
              type="range"
              min="14"
              max="26"
              value={settings.fontSize}
              onChange={(e) => onUpdateSettings({ ...settings, fontSize: Number(e.target.value) })}
              className="flex-1 accent-indigo-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
            />
            <button
              onClick={() => onUpdateSettings({ ...settings, fontSize: Math.min(26, settings.fontSize + 1) })}
              className="w-10 h-10 bg-white dark:bg-slate-700 rounded-xl shadow-xs flex items-center justify-center font-bold text-base hover:bg-slate-50 active:scale-95 transition-transform"
            >
              A+
            </button>
          </div>
        </div>

        {/* Column Width / Margins */}
        <div>
          <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
            Márgenes y Ancho de Pantalla
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'narrow', label: 'Compacto' },
              { id: 'normal', label: 'Estándar' },
              { id: 'wide', label: 'Completo' },
            ].map((w) => (
              <button
                key={w.id}
                onClick={() => onUpdateSettings({ ...settings, columnWidth: w.id as any })}
                className={`py-2 text-xs rounded-xl border text-center font-medium transition-all ${
                  settings.columnWidth === w.id
                    ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-600 text-indigo-700 dark:text-indigo-300 font-bold shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
