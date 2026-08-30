import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Smartphone, Check, ChevronDown } from 'lucide-react';
import { AppThemeMode } from '../types';

interface ThemeToggleProps {
  themeMode: AppThemeMode;
  onThemeChange: (mode: AppThemeMode) => void;
  isDarkActive: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  themeMode,
  onThemeChange,
  isDarkActive,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const options: Array<{
    id: AppThemeMode;
    label: string;
    description: string;
    icon: React.ReactNode;
  }> = [
    {
      id: 'light',
      label: 'Claro',
      description: 'Siempre modo claro',
      icon: <Sun className="w-4 h-4 text-amber-500" />,
    },
    {
      id: 'dark',
      label: 'Oscuro',
      description: 'Siempre modo oscuro',
      icon: <Moon className="w-4 h-4 text-indigo-400" />,
    },
    {
      id: 'system',
      label: 'Automático',
      description: 'Sincronizado con tu dispositivo',
      icon: <Smartphone className="w-4 h-4 text-blue-400" />,
    },
  ];

  const currentIcon =
    themeMode === 'light' ? (
      <Sun className="w-4 h-4 text-amber-500" />
    ) : themeMode === 'dark' ? (
      <Moon className="w-4 h-4 text-indigo-400" />
    ) : (
      <Smartphone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
    );

  const currentLabel =
    themeMode === 'light' ? 'Claro' : themeMode === 'dark' ? 'Oscuro' : 'Auto';

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        id="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/90 dark:border-slate-700 transition-all active:scale-95 shadow-2xs"
        title="Cambiar tema: Claro, Oscuro o Automático"
        aria-label="Cambiar tema de la aplicación"
      >
        <span className="shrink-0">{currentIcon}</span>
        <span className="hidden sm:inline font-medium">{currentLabel}</span>
        <ChevronDown className={`w-3 h-3 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id="theme-dropdown-menu"
          className="absolute right-0 mt-2 w-56 p-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 mb-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Tema de Pantalla
            </p>
          </div>

          <div className="space-y-0.5">
            {options.map((opt) => {
              const isSelected = themeMode === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    onThemeChange(opt.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="p-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                      {opt.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold leading-tight">{opt.label}</p>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-tight mt-0.5">
                        {opt.description}
                      </p>
                    </div>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {themeMode === 'system' && (
            <div className="mt-2 pt-2 px-3 pb-1 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 dark:text-slate-500 flex items-center justify-between">
              <span>Dispositivo actual:</span>
              <span className="font-bold text-slate-600 dark:text-slate-300">
                {isDarkActive ? '🌙 Oscuro' : '☀️ Claro'}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
