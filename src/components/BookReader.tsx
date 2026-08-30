import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ArrowLeft, BookOpen, Settings, Bookmark, CheckCircle2, 
  Award, Bot, CheckSquare, Sparkles, ChevronLeft, ChevronRight, Share2, 
  Highlighter, Type, Sun, Moon, Coffee, List, FileText, Check,
  Maximize2, Minimize2, MessageSquare, Wrench, DollarSign, Copy, ArrowRight, Zap, Target, Briefcase
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BookCourse, ReaderSettings, UserProgress, UserNote, AppThemeMode } from '../types';
import { localizePitchText, getPricingDisplayForCountry, getCountryConfig } from '../utils/currencyEngine';
import { AiMentorModal } from './AiMentorModal';
import { QuizModal } from './QuizModal';
import { ActionPlanModal } from './ActionPlanModal';
import { ReadingAppearanceBottomSheet } from './ReadingAppearanceBottomSheet';
import { TableOfContentsBottomSheet } from './TableOfContentsBottomSheet';
import { BookReaderTopProgressBar } from './BookReaderTopProgressBar';
import { ExecutivePromptCard } from './ExecutivePromptCard';
import { ThemeToggle } from './ThemeToggle';
import { triggerHaptic } from '../utils/haptics';

interface BookReaderProps {
  book: BookCourse;
  progress: UserProgress;
  settings: ReaderSettings;
  onUpdateSettings: (newSettings: ReaderSettings) => void;
  onUpdateProgress: (updated: Partial<UserProgress>) => void;
  onBackToLibrary: () => void;
  onOpenCertificate: () => void;
  themeMode?: AppThemeMode;
  onThemeChange?: (mode: AppThemeMode) => void;
  isDarkActive?: boolean;
  onAddReadingTime?: (minutes: number) => void;
  countryCode?: string;
}

export const BookReader: React.FC<BookReaderProps> = ({
  book,
  progress,
  settings,
  onUpdateSettings,
  onUpdateProgress,
  onBackToLibrary,
  onOpenCertificate,
  themeMode = 'system',
  onThemeChange,
  isDarkActive = false,
  onAddReadingTime,
  countryCode = 'MX',
}) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(
    Math.max(0, (progress.currentChapter || 1) - 1)
  );
  const [chapterScrollPercent, setChapterScrollPercent] = useState(0);
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);
  const [showTocDrawer, setShowTocDrawer] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);
  const [newNoteText, setNewNoteText] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [isImmersiveMode, setIsImmersiveMode] = useState(false);
  const [copiedPitchIndex, setCopiedPitchIndex] = useState<number | null>(null);

  const handleCopyPitchText = (text: string, idx: number) => {
    triggerHaptic('medium');
    const localized = localizePitchText(text, countryCode);
    navigator.clipboard.writeText(localized);
    setCopiedPitchIndex(idx);
    setTimeout(() => setCopiedPitchIndex(null), 2500);
  };

  const currentChapter = book.chapters[currentChapterIndex] || book.chapters[0];

  // Track real-time intra-chapter scroll position via window
  const calculateScrollProgress = useCallback(() => {
    const windowScrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight > 0) {
      const scrolled = (windowScrollTop / scrollHeight) * 100;
      setChapterScrollPercent(Math.min(100, Math.max(0, Math.round(scrolled))));
    } else {
      setChapterScrollPercent(0);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', calculateScrollProgress, { passive: true });
    calculateScrollProgress();

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, [currentChapterIndex, book.id, calculateScrollProgress]);

  // Scroll to top immediately on mount and on book or chapter change
  useEffect(() => {
    setChapterScrollPercent(0);
    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;

    // Update progress
    const totalChapters = book.chapters.length || 6;
    const newProgressPercent = Math.round(((currentChapterIndex + 1) / totalChapters) * 100);
    onUpdateProgress({
      currentChapter: currentChapterIndex + 1,
      progressPercent: Math.max(progress.progressPercent || 0, newProgressPercent),
      lastReadTimestamp: Date.now(),
    });

    // Active reading time tracking: increments every 60s while reading actively
    const timer = setInterval(() => {
      if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
        onAddReadingTime?.(1);
      }
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, [book.id, currentChapterIndex]);

  // Change chapter with haptics
  const handleChapterChange = (newIndex: number) => {
    triggerHaptic('medium');
    setCurrentChapterIndex(newIndex);
  };

  // Handle Mark Book as Completed
  const handleMarkCompleted = () => {
    triggerHaptic('success');
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('confetti error', e);
    }
    onUpdateProgress({
      completed: true,
      progressPercent: 100,
      currentChapter: book.chapters.length,
    });
  };

  const handleAddNote = () => {
    if (!newNoteText.trim()) return;
    triggerHaptic('light');
    const newNote: UserNote = {
      id: `n-${Date.now()}`,
      chapterNumber: currentChapter.number,
      chapterTitle: currentChapter.title,
      text: newNoteText.trim(),
      createdDate: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }),
    };
    const updatedNotes = [...(progress.notes || []), newNote];
    onUpdateProgress({ notes: updatedNotes });
    setNewNoteText('');
    setShowNoteInput(false);
  };

  // Resolve theme styling classes based on settings and global dark mode
  const getThemeClasses = (): string => {
    if (settings.theme === 'auto' || !settings.theme) {
      return isDarkActive 
        ? 'theme-dark bg-slate-950 text-slate-100' 
        : 'theme-editorial bg-[#fbf9f5] text-[#2b2823]';
    }
    
    switch (settings.theme) {
      case 'dark':
        return 'theme-dark bg-[#0f172a] text-[#f1f5f9]';
      case 'midnight':
        return 'theme-midnight bg-[#030712] text-[#e5e7eb]';
      case 'editorial':
        return isDarkActive 
          ? 'theme-dark bg-slate-950 text-slate-100' 
          : 'theme-editorial bg-[#fbf9f5] text-[#2b2823]';
      case 'sepia':
        return isDarkActive 
          ? 'theme-sepia bg-[#1c1813] text-[#faebd7]' 
          : 'theme-sepia bg-[#f4ecd8] text-[#3b2f1f]';
      case 'paper':
        return isDarkActive 
          ? 'theme-dark bg-[#0b0f19] text-slate-100' 
          : 'theme-paper bg-[#ffffff] text-[#1a1a1a]';
      default:
        return isDarkActive 
          ? 'theme-dark bg-slate-950 text-slate-100' 
          : 'theme-editorial bg-[#fbf9f5] text-[#2b2823]';
    }
  };

  const fontClassMap: Record<string, string> = {
    serif: 'font-reader-serif',
    sans: 'font-reader-sans',
    mono: 'font-reader-mono',
  };

  const columnWidthMap: Record<string, string> = {
    narrow: 'max-w-xl',
    normal: 'max-w-2xl',
    wide: 'max-w-3xl',
  };

  const currentPercent = Math.round(((currentChapterIndex + 1) / book.chapters.length) * 100);

  return (
    <div 
      id="reader-container"
      className={`min-h-screen flex flex-col ${getThemeClasses()} transition-colors duration-200 select-text`}
    >
      {/* Sticky Reader Top Bar & Persistent Progress Track */}
      <div className={`sticky top-0 z-40 transition-transform duration-300 ${
        isImmersiveMode ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <header className="border-b border-slate-200/80 dark:border-slate-800 backdrop-blur-2xl bg-white/90 dark:bg-slate-900/90 px-3 sm:px-6 py-2.5 flex items-center justify-between text-slate-800 dark:text-slate-100 safe-top select-none">
          {/* Left: Back & TOC */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => {
                triggerHaptic('light');
                onBackToLibrary();
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors native-touch-btn cursor-pointer"
              title="Volver a la biblioteca"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Biblioteca</span>
            </button>

            <button
              onClick={() => {
                triggerHaptic('light');
                setShowTocDrawer(true);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors native-touch-btn cursor-pointer"
            >
              <List className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Índice</span>
              <span className="text-[11px] font-mono opacity-80">
                {currentChapterIndex + 1}/{book.chapters.length}
              </span>
            </button>
          </div>

          {/* Center: Book & Chapter Title */}
          <div 
            className="text-center truncate px-2 max-w-[150px] sm:max-w-md lg:max-w-lg cursor-pointer" 
            onClick={() => {
              triggerHaptic('light');
              setShowTocDrawer(true);
            }}
          >
            <h2 className="text-xs sm:text-sm font-bold truncate text-slate-900 dark:text-white">
              {book.title}
            </h2>
            <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 truncate">
              Cap. {currentChapter.number}: {currentChapter.title}
            </p>
          </div>

          {/* Right: Actions & Tools */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {/* AI Executive Mentor */}
            <button
              onClick={() => {
                triggerHaptic('light');
                setShowAiModal(true);
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-xs font-bold shadow-xs hover:opacity-90 transition-opacity native-touch-btn cursor-pointer"
              title="Consultar al Mentor IA"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mentor IA</span>
            </button>

            {/* Reader Appearance Settings Toggle (Aa) */}
            <button
              onClick={() => {
                triggerHaptic('light');
                setShowSettingsPanel(true);
              }}
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors native-touch-btn cursor-pointer"
              title="Ajustes de lectura (Tipografía, fondo y tamaño)"
            >
              <Type className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Persistent Top Progress Bar with Segments & Sections Remaining */}
        <BookReaderTopProgressBar
          book={book}
          currentChapterIndex={currentChapterIndex}
          chapterScrollPercent={chapterScrollPercent}
          onSelectChapter={(idx) => handleChapterChange(idx)}
          onOpenToc={() => {
            triggerHaptic('light');
            setShowTocDrawer(true);
          }}
          isDarkActive={isDarkActive}
        />
      </div>

      {/* Main Textbook Reading Surface */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-12 pb-32 md:pb-20 cursor-default">
        <div className={`mx-auto ${columnWidthMap[settings.columnWidth] || 'max-w-2xl'}`}>
          {/* Chapter Header Banner */}
          <div className="mb-6 sm:mb-10 text-center pb-5 sm:pb-6 border-b border-black/10 dark:border-white/10 select-none">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <span>Capítulo 0{currentChapter.number} de 0{book.chapters.length}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight font-display-serif leading-tight">
              {currentChapter.title}
            </h1>

            <p className="text-xs sm:text-base opacity-75 mt-2 italic font-serif">
              {currentChapter.subtitle}
            </p>
          </div>

          {/* Chapter Paragraph Content */}
          <article
            className={`${fontClassMap[settings.font] || 'font-reader-serif'} space-y-5 sm:space-y-6`}
            style={{
              fontSize: `${settings.fontSize}px`,
              lineHeight: settings.lineHeight,
            }}
          >
            {currentChapter.content.map((paragraph, pIdx) => {
              // 1. TOOL TUTORIAL BANNER
              if (paragraph.startsWith('🛠️ TUTORIAL PRÁCTICO:')) {
                return (
                  <div 
                    key={pIdx} 
                    className="my-6 p-4 sm:p-5 rounded-2xl bg-indigo-500/10 border-l-4 border-indigo-600 dark:border-indigo-400 space-y-1 select-text"
                  >
                    <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider">
                      <Wrench className="w-4 h-4" />
                      <span>Software & Herramientas Gratuitas</span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                      {paragraph.replace('🛠️ TUTORIAL PRÁCTICO:', '').trim()}
                    </h3>
                  </div>
                );
              }

              // 2. STEP BY STEP CARDS (Paso 1, Paso 2, Fase 1, Pilar 1, Semana 1, Día 1)
              const stepMatch = paragraph.match(/^(Paso \d+|Fase \d+|Pilar \d+|Semana \d+|Día [\d\-]+):\s*(.*)/);
              if (stepMatch) {
                const stepLabel = stepMatch[1];
                const stepBody = stepMatch[2];
                return (
                  <div 
                    key={pIdx} 
                    className="my-3 p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-2 select-text"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md bg-indigo-600 text-white font-mono font-bold text-[11px] uppercase tracking-wider shadow-2xs">
                        {stepLabel}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                      {stepBody}
                    </p>
                  </div>
                );
              }

              // 3. MONETIZATION GUIDE BANNER
              if (paragraph.startsWith('💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA:')) {
                return (
                  <div 
                    key={pIdx} 
                    className="my-6 p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border-l-4 border-emerald-600 dark:border-emerald-400 space-y-1 select-text"
                  >
                    <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
                      <DollarSign className="w-4 h-4" />
                      <span>Modelo de Negocio & Oportunidad en LATAM</span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                      {paragraph.replace('💼 GUÍA DE MONETIZACIÓN Y NEGOCIO EN LATINOAMÉRICA:', '').trim()}
                    </h3>
                  </div>
                );
              }

              // 4. COMMERCIAL SERVICE PACKAGE
              if (paragraph.startsWith('1. Servicio Comercial Empaquetado:')) {
                return (
                  <div 
                    key={pIdx} 
                    className="my-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5 select-text"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        Servicio Listo para Vender
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      {paragraph.replace('1. Servicio Comercial Empaquetado:', '').trim()}
                    </p>
                  </div>
                );
              }

              // 5. LOCALIZED PRICING GRID
              if (paragraph.startsWith('2. Tabulador de Precios')) {
                const cConf = getCountryConfig(countryCode);
                const pDisp = getPricingDisplayForCountry(countryCode);
                return (
                  <div 
                    key={pIdx} 
                    className="my-4 p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-2.5 select-text"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                        <span>{cConf.flag}</span>
                        Tarifas para {cConf.name} ({cConf.currencyCode})
                      </span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                        Moneda Local
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-emerald-200/60 dark:border-emerald-800/40 text-center">
                        <span className="text-[9px] uppercase font-bold text-slate-500 block">Junior</span>
                        <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{pDisp.junior}</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-emerald-200/60 dark:border-emerald-800/40 text-center">
                        <span className="text-[9px] uppercase font-bold text-indigo-600 block">Medio</span>
                        <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{pDisp.mid}</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-emerald-200/60 dark:border-emerald-800/40 text-center">
                        <span className="text-[9px] uppercase font-bold text-emerald-600 block">Senior</span>
                        <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{pDisp.senior}</div>
                      </div>
                    </div>
                    {cConf.code !== 'US' && (
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center font-mono">
                        Equivalente aproximado en USD: Junior ($25–$60), Medio ($80–$180), Senior ($220–$500+).
                      </p>
                    )}
                  </div>
                );
              }

              // 6. COPYABLE SALES PITCH SCRIPT
              if (paragraph.startsWith('3. Guion de Venta Listo para Copiar')) {
                const pitchText = paragraph.replace(/3\. Guion de Venta Listo para Copiar[^:]*:\s*/, '').replace(/^"|"$/g, '');
                return (
                  <div 
                    key={pIdx} 
                    className="my-4 p-4 rounded-2xl bg-slate-900 text-white space-y-2 select-text shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-indigo-400 font-bold flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5" />
                        Guion de Prospección (Copiar y Enviar)
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyPitchText(pitchText, pIdx);
                        }}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        {copiedPitchIndex === pIdx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 text-[11px]">¡Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="text-[11px]">Copiar Guion</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-slate-200 italic font-serif leading-relaxed p-2.5 rounded-xl bg-black/30 border border-white/10">
                      "{localizePitchText(pitchText, countryCode)}"
                    </p>
                  </div>
                );
              }

              // 7. FAST TRACK 48H CHECKLIST
              if (paragraph.startsWith('4. Plan de Acción de 48 Horas:')) {
                return (
                  <div 
                    key={pIdx} 
                    className="my-3 p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 space-y-1.5 select-text"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        Plan de Acción Rápido (48 Horas)
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                      {paragraph.replace('4. Plan de Acción de 48 Horas:', '').trim()}
                    </p>
                  </div>
                );
              }

              // 8. STANDARD EDITORIAL PARAGRAPH
              return (
                <p 
                  key={pIdx} 
                  className="leading-relaxed tracking-normal select-text"
                >
                  {paragraph}
                </p>
              );
            })}

            {/* Key Executive Insight Callout Card */}
            {currentChapter.keyInsight && (
              <div className="my-6 sm:my-8 p-4 sm:p-6 rounded-2xl bg-indigo-500/10 border-l-4 border-indigo-600 text-stone-900 dark:text-stone-100 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-400 mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Tesis Estratégica del Capítulo</span>
                </div>
                <p className="font-serif italic text-base sm:text-lg leading-relaxed">
                  "{currentChapter.keyInsight}"
                </p>
              </div>
            )}

            {/* Practical Operational Tip */}
            {currentChapter.practicalTip && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-500/10 border border-slate-400/20 text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed">
                <strong className="text-indigo-600 dark:text-indigo-400 font-sans block mb-1">
                  💡 Aplicación Inmediata:
                </strong>
                {currentChapter.practicalTip}
              </div>
            )}
          </article>

          {/* Quick Note & Highlight Box */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="my-8 sm:my-10 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 select-none"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider opacity-70 flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                <FileText className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                Mis Notas del Capítulo
              </span>
              <button
                onClick={() => setShowNoteInput(!showNoteInput)}
                className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer"
              >
                {showNoteInput ? 'Cancelar' : '+ Agregar Nota'}
              </button>
            </div>

            {showNoteInput && (
              <div className="mt-3 space-y-2">
                <textarea
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  placeholder="Escribe tu reflexión, idea o tarea para implementar en tu empresa..."
                  className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                  rows={3}
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleAddNote}
                    disabled={!newNoteText.trim()}
                    className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-40 cursor-pointer"
                  >
                    Guardar Nota
                  </button>
                </div>
              </div>
            )}

            {/* Display Saved Notes for this Chapter */}
            {progress.notes && progress.notes.filter(n => n.chapterNumber === currentChapter.number).length > 0 && (
              <div className="mt-3 space-y-2">
                {progress.notes.filter(n => n.chapterNumber === currentChapter.number).map(note => (
                  <div key={note.id} className="p-3 bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700 rounded-xl text-xs space-y-1">
                    <p className="text-slate-800 dark:text-slate-200">{note.text}</p>
                    <span className="text-[10px] opacity-50 block font-mono">{note.createdDate}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Chapter Bottom Navigation Controls */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="mt-8 sm:mt-12 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-3 select-none"
          >
            <button
              onClick={() => handleChapterChange(Math.max(0, currentChapterIndex - 1))}
              disabled={currentChapterIndex === 0}
              className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all disabled:opacity-30 disabled:pointer-events-none native-touch-btn cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Cap. Anterior</span>
            </button>

            {currentChapterIndex < book.chapters.length - 1 ? (
              <button
                onClick={() => handleChapterChange(currentChapterIndex + 1)}
                className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-indigo-600 text-white rounded-2xl text-xs sm:text-sm font-bold shadow-md hover:bg-indigo-700 transition-all native-touch-btn cursor-pointer"
              >
                <span>Siguiente Cap.</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    triggerHaptic('medium');
                    setShowQuizModal(true);
                  }}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl text-xs sm:text-sm font-bold shadow-md hover:opacity-90 transition-all native-touch-btn cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Rendir Examen</span>
                </button>
              </div>
            )}
          </div>

          {/* Summary of Course Takeaways & Actions on Final Chapter */}
          {currentChapterIndex === book.chapters.length - 1 && (
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="mt-8 sm:mt-12 p-5 sm:p-6 rounded-3xl bg-indigo-500/10 border border-indigo-500/30 text-stone-900 dark:text-stone-100 space-y-4 select-none"
            >
              <h3 className="font-bold text-base sm:text-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                ¡Has completado las lecturas de los 6 capítulos!
              </h3>
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                Valida tus conocimientos para obtener tu certificado oficial o despliega el plan de acción de 48 horas en tu negocio.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={() => {
                    triggerHaptic('medium');
                    setShowQuizModal(true);
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs native-touch-btn cursor-pointer"
                >
                  Rendir Examen de Maestría
                </button>
                <button
                  onClick={() => {
                    triggerHaptic('light');
                    setShowActionModal(true);
                  }}
                  className="px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white font-semibold text-xs rounded-xl hover:bg-slate-800 native-touch-btn cursor-pointer"
                >
                  Ver Plan de Acción (48h)
                </button>
                <button
                  onClick={() => {
                    triggerHaptic('light');
                    setShowAiModal(true);
                  }}
                  className="px-4 py-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-100 native-touch-btn cursor-pointer"
                >
                  Adaptar a Mi Negocio con IA
                </button>
              </div>
            </div>
          )}

          {/* Specialized Master Executive Prompt Card for AI PDF Document Generation */}
          {currentChapterIndex === book.chapters.length - 1 && (
            <ExecutivePromptCard
              book={book}
              onOpenAiMentor={() => {
                triggerHaptic('light');
                setShowAiModal(true);
              }}
            />
          )}
        </div>
      </main>

      {/* Mobile Sticky Reading Bottom Bar (Apple Books / Kindle Native Bottom Bar) */}
      <footer 
        id="reader-bottom-bar"
        className={`fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-slate-200/80 dark:border-slate-800 px-3 py-2 flex items-center justify-between shadow-2xl text-slate-800 dark:text-slate-100 safe-bottom select-none transition-transform duration-300 ${
          isImmersiveMode ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="flex items-center gap-1">
          {/* Previous Chapter Thumb Button */}
          <button
            onClick={() => handleChapterChange(Math.max(0, currentChapterIndex - 1))}
            disabled={currentChapterIndex === 0}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 native-touch-btn cursor-pointer"
            title="Capítulo Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* TOC button */}
          <button
            onClick={() => {
              triggerHaptic('light');
              setShowTocDrawer(true);
            }}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 native-touch-btn cursor-pointer"
            title="Índice de Capítulos"
          >
            <List className="w-4 h-4" />
          </button>

          {/* Aa Font & Theme settings button */}
          <button
            onClick={() => {
              triggerHaptic('light');
              setShowSettingsPanel(true);
            }}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 native-touch-btn cursor-pointer"
            title="Ajustes de Texto y Tema"
          >
            <Type className="w-4 h-4" />
          </button>
        </div>

        {/* Center Progress Scrubber / Indicator */}
        <div 
          className="flex-1 max-w-xs mx-2 sm:mx-3 text-center cursor-pointer native-touch-btn" 
          onClick={() => {
            triggerHaptic('light');
            setShowTocDrawer(true);
          }}
        >
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-1">
            <span>Cap. {currentChapter.number}/{book.chapters.length}</span>
            <span className="font-bold text-indigo-600 dark:text-indigo-400">{currentPercent}%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${currentPercent}%` }}
            />
          </div>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-1">
          {/* AI Mentor */}
          <button
            onClick={() => {
              triggerHaptic('light');
              setShowAiModal(true);
            }}
            className="p-2 rounded-xl text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 native-touch-btn cursor-pointer"
            title="Mentor IA"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Next Chapter Thumb Button */}
          <button
            onClick={() => {
              if (currentChapterIndex < book.chapters.length - 1) {
                handleChapterChange(currentChapterIndex + 1);
              } else {
                triggerHaptic('medium');
                setShowQuizModal(true);
              }
            }}
            className={`p-2 rounded-xl native-touch-btn cursor-pointer ${
              currentChapterIndex === book.chapters.length - 1
                ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/50'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title={currentChapterIndex === book.chapters.length - 1 ? 'Rendir Examen' : 'Siguiente Capítulo'}
          >
            {currentChapterIndex === book.chapters.length - 1 ? (
              <Award className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        </div>
      </footer>

      {/* Slide-up Reading Appearance Bottom Sheet (Aa) */}
      <ReadingAppearanceBottomSheet
        isOpen={showSettingsPanel}
        onClose={() => setShowSettingsPanel(false)}
        settings={settings}
        onUpdateSettings={onUpdateSettings}
        isDarkActive={isDarkActive}
      />

      {/* Slide-up Table of Contents Bottom Sheet (Índice) */}
      <TableOfContentsBottomSheet
        book={book}
        isOpen={showTocDrawer}
        onClose={() => setShowTocDrawer(false)}
        currentChapterIndex={currentChapterIndex}
        onSelectChapter={(idx) => handleChapterChange(idx)}
        onOpenQuiz={() => {
          triggerHaptic('medium');
          setShowQuizModal(true);
        }}
        onOpenActionPlan={() => {
          triggerHaptic('light');
          setShowActionModal(true);
        }}
      />

      {/* Interactive Modals */}
      <AiMentorModal
        book={book}
        currentChapterNumber={currentChapter.number}
        isOpen={showAiModal}
        onClose={() => setShowAiModal(false)}
      />

      <QuizModal
        book={book}
        isOpen={showQuizModal}
        onClose={() => setShowQuizModal(false)}
        onPassQuiz={(score) => {
          handleMarkCompleted();
          onOpenCertificate();
        }}
      />

      <ActionPlanModal
        book={book}
        isOpen={showActionModal}
        onClose={() => setShowActionModal(false)}
        completedActionIds={progress.actionItemsCompleted || []}
        onToggleAction={(actionId) => {
          triggerHaptic('light');
          const current = progress.actionItemsCompleted || [];
          const updated = current.includes(actionId)
            ? current.filter(id => id !== actionId)
            : [...current, actionId];
          onUpdateProgress({ actionItemsCompleted: updated });
        }}
      />
    </div>
  );
};
