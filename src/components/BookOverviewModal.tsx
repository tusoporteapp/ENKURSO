import React, { useState } from 'react';
import { 
  X, BookOpen, Clock, Star, Award, CheckCircle2, ChevronRight, 
  Wrench, DollarSign, Copy, Check, Sparkles, Layers, ArrowRight, Share2 
} from 'lucide-react';
import { BookCourse, UserProgress } from '../types';
import { getPricingDisplayForCountry, getCountryConfig, localizePitchText } from '../utils/currencyEngine';
import { CATEGORIES } from '../data/categories';
import { triggerHaptic } from '../utils/haptics';

interface BookOverviewModalProps {
  book: BookCourse | null;
  isOpen: boolean;
  onClose: () => void;
  onStartReading: (book: BookCourse) => void;
  progress?: UserProgress;
  countryCode?: string;
}

export const BookOverviewModal: React.FC<BookOverviewModalProps> = ({
  book,
  isOpen,
  onClose,
  onStartReading,
  progress,
  countryCode,
}) => {
  const [copiedPitch, setCopiedPitch] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'monetization' | 'chapters'>('overview');

  if (!isOpen || !book) return null;

  const category = CATEGORIES.find(c => c.id === book.categoryId) || CATEGORIES[0];
  const percent = progress?.progressPercent || 0;
  const isCompleted = progress?.completed;

  // Extract monetization pitch if available in chapters
  const ch6 = book.chapters[5] || book.chapters[book.chapters.length - 1];
  const monetizationText = ch6 ? ch6.content.join('\n\n') : '';

  const handleCopyPitch = () => {
    triggerHaptic('medium');
    const pitchMatch = monetizationText.match(/3\. Guion de Venta[^:]*:\s*"([^"]+)"/);
    const rawPitch = pitchMatch ? pitchMatch[1] : `Hola, me especializo en ${book.title} para empresas. Ayudo a optimizar tus procesos con herramientas gratuitas y estándares profesionales. ¿Te gustaría agendar una llamada esta semana?`;
    const pitchToCopy = localizePitchText(rawPitch, countryCode);
    navigator.clipboard.writeText(pitchToCopy);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2500);
  };

  const handleStart = () => {
    triggerHaptic('success');
    onClose();
    onStartReading(book);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl h-full sm:h-auto sm:max-h-[90vh] bg-white dark:bg-slate-900 sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header with Gradient Cover - Protected with safe-area for iPhone Notch / Dynamic Island */}
        <div className={`relative pt-[calc(1.25rem+env(safe-area-inset-top,0px))] pb-5 px-5 sm:p-6 bg-gradient-to-tr ${category.color.gradient} text-white shrink-0 shadow-inner`}>
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />

          {/* Close button with Notch compensation */}
          <button
            onClick={() => {
              triggerHaptic('light');
              onClose();
            }}
            className="absolute top-[calc(1rem+env(safe-area-inset-top,0px))] sm:top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors cursor-pointer native-touch-btn z-20"
            title="Cerrar vista previa"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="relative z-10 flex items-center gap-2 flex-wrap mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-black/30 backdrop-blur-md text-[10px] sm:text-xs font-bold border border-white/20">
              Cat. {book.categoryNumber} • {book.categoryName}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-xs font-mono font-bold">
              Tomo #{book.numericId}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-xs font-bold">
              {book.level}
            </span>
          </div>

          {/* Title */}
          <h2 className="relative z-10 text-lg sm:text-2xl font-black leading-snug tracking-tight max-w-[90%]">
            {book.title}
          </h2>

          {/* Subtitle / Author */}
          <p className="relative z-10 text-xs sm:text-sm text-white/90 font-serif italic mt-1 max-w-[95%]">
            {book.subtitle}
          </p>

          {/* Metrics bar */}
          <div className="relative z-10 flex items-center gap-4 mt-3 text-xs text-white/80 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{book.readTimeMinutes} min de lectura</span>
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span className="font-bold text-white">{book.rating}</span>
              <span className="opacity-75">({book.reviewCount} directores)</span>
            </span>
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              <span>6 Capítulos</span>
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-4 py-2 gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            🎯 Resumen & Aprendizaje
          </button>
          <button
            onClick={() => setActiveTab('monetization')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'monetization'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            💼 Monetización & Precios USD
          </button>
          <button
            onClick={() => setActiveTab('chapters')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'chapters'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            📑 Temario (6 Capítulos)
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 text-sm leading-relaxed select-text no-scrollbar">
          
          {/* TAB 1: OVERVIEW & DEEP LEARNING */}
          {activeTab === 'overview' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              {/* Executive Summary Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>¿Qué vas a dominar en este Tomo?</span>
                </div>
                <div className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {book.learningOverview || book.summary}
                </div>
              </div>

              {/* Key Takeaways */}
              {book.keyTakeaways && book.keyTakeaways.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Habilidades Técnicas que Integrarás:</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {book.keyTakeaways.map((takeaway, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                          {idx + 1}
                        </span>
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Free Tools Preview */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-indigo-500" />
                  <span>Software & Herramientas Gratuitas que Aprenderás a Usar:</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  En el Capítulo 2 aprenderás a configurar y operar paso a paso las herramientas digitales sin costo para ejecutar esta habilidad hoy mismo.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: MONETIZATION & USD PRICING IN LATAM */}
          {activeTab === 'monetization' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
                  <DollarSign className="w-4 h-4" />
                  <span>Modelo de Monetización para Latinoamérica</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {book.chapters[5]?.content?.find(p => p.includes('1. Servicio Comercial')) || 'Aprende a empaquetar esta habilidad en un servicio de alto valor para PYMEs y clientes.'}
                </p>
              </div>

              {/* Pricing Cards Localized */}
              {(() => {
                const pDisplay = getPricingDisplayForCountry(countryCode);
                const cConfig = getCountryConfig(countryCode);
                return (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                        <span className="text-base">{cConfig.flag}</span>
                        <span>Tarifas Sugeridas para {cConfig.name} ({cConfig.currencyCode}):</span>
                      </h4>
                      <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono font-bold">
                        {cConfig.currencySymbol} Moneda Local
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-1">
                        <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 block">🥉 Nivel Junior</span>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Primeros 3 Clientes</span>
                        <div className="text-sm font-black text-indigo-600 dark:text-indigo-400">{pDisplay.junior}</div>
                        {cConfig.code !== 'US' && <span className="text-[9px] text-slate-400 block font-mono">(~$25 – $60 USD)</span>}
                      </div>
                      <div className="p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-center space-y-1">
                        <span className="text-[10px] font-bold uppercase text-indigo-600 dark:text-indigo-400 block">🥈 Nivel Medio</span>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Con Portafolio</span>
                        <div className="text-sm font-black text-indigo-600 dark:text-indigo-400">{pDisplay.mid}</div>
                        {cConfig.code !== 'US' && <span className="text-[9px] text-slate-400 block font-mono">(~$80 – $180 USD)</span>}
                      </div>
                      <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-1">
                        <span className="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400 block">🥇 Nivel Senior</span>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Consultor Integral</span>
                        <div className="text-sm font-black text-emerald-600 dark:text-emerald-400">{pDisplay.senior}</div>
                        {cConfig.code !== 'US' && <span className="text-[9px] text-slate-400 block font-mono">(~$220 – $500+ USD)</span>}
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Pitch Box */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-bold">
                    🎯 Guion de Venta (WhatsApp / LinkedIn)
                  </span>
                  <button
                    onClick={handleCopyPitch}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copiedPitch ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-[11px]">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copiar Pitch</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-slate-300 italic font-serif leading-relaxed">
                  {book.chapters[5]?.content?.find(p => p.includes('3. Guion de Venta'))?.replace(/3\. Guion de Venta[^:]*:\s*/, '') || '"Hola, te ayudo a implementar este sistema en tu negocio en 7 días para aumentar tus ventas..."'}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: CHAPTERS LIST */}
          {activeTab === 'chapters' && (
            <div className="space-y-2.5 animate-in fade-in duration-150">
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-2">
                Índice Oficial de los 6 Capítulos:
              </h4>
              {book.chapters.map((ch) => (
                <div key={ch.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {ch.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                      {ch.title}
                    </h5>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 italic font-serif">
                      {ch.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Fixed Footer CTA with Safe Area Bottom */}
        <div className="p-4 pt-3 sm:p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] sm:pb-5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              triggerHaptic('light');
              onClose();
            }}
            className="px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer native-touch-btn"
          >
            Cerrar
          </button>

          <button
            onClick={handleStart}
            className="flex-1 py-3 px-5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer native-touch-btn"
          >
            <BookOpen className="w-4 h-4" />
            <span>{percent > 0 ? `Continuar Lectura (${percent}%)` : 'Iniciar Lectura Inmersiva'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
