import React, { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  FileText, 
  Bot, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp,
  Share2,
  Download
} from 'lucide-react';
import { BookCourse } from '../types';
import { generateExecutivePdfPrompt } from '../utils/executivePromptGenerator';
import { triggerHaptic } from '../utils/haptics';

interface ExecutivePromptCardProps {
  book: BookCourse;
  onOpenAiMentor?: () => void;
}

export const ExecutivePromptCard: React.FC<ExecutivePromptCardProps> = ({
  book,
  onOpenAiMentor,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const promptText = generateExecutivePdfPrompt(book);

  const handleCopy = () => {
    triggerHaptic('medium');
    navigator.clipboard.writeText(promptText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div 
      onClick={(e) => e.stopPropagation()} 
      className="my-8 sm:my-12 bg-slate-950 text-white rounded-3xl p-5 sm:p-7 border border-indigo-500/30 shadow-xl space-y-4 select-none relative overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-xs shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                Prompt Maestro para tu Documento Ejecutivo / PDF
              </h3>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Tomo #{book.numericId}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Genera con cualquier IA (ChatGPT, Claude, Gemini o DeepSeek) un plan estratégico completo adaptado a tu negocio.
            </p>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`px-4 py-2.5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs shrink-0 native-touch-btn cursor-pointer ${
            isCopied
              ? 'bg-emerald-600 text-white'
              : 'bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white'
          }`}
        >
          {isCopied ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>¡Prompt Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copiar Prompt Maestro</span>
            </>
          )}
        </button>
      </div>

      {/* 3 Step Guide */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs relative z-10">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
          <span className="text-indigo-400 font-bold font-mono">Paso 1</span>
          <p className="text-slate-300 font-medium mt-0.5">Copia el prompt especializado con 1 toque.</p>
        </div>
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
          <span className="text-amber-400 font-bold font-mono">Paso 2</span>
          <p className="text-slate-300 font-medium mt-0.5">Rellena los corchetes <code>[TUS_DATOS]</code> con tu empresa.</p>
        </div>
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
          <span className="text-emerald-400 font-bold font-mono">Paso 3</span>
          <p className="text-slate-300 font-medium mt-0.5">Pégalo en ChatGPT/Claude y expórtalo a PDF o Notion.</p>
        </div>
      </div>

      {/* Prompt Preview & Expansion Box */}
      <div className="pt-2 relative z-10">
        <div className="flex items-center justify-between pb-1.5 text-xs text-slate-400">
          <span className="font-semibold text-[11px]">Vista previa de las instrucciones del Prompt:</span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-indigo-400 hover:text-indigo-300 text-[11px] font-bold flex items-center gap-1 cursor-pointer"
          >
            <span>{isExpanded ? 'Contraer texto' : 'Ver prompt completo'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        <div className={`p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-[11px] text-slate-300 overflow-y-auto leading-relaxed transition-all ${
          isExpanded ? 'max-h-96' : 'max-h-28'
        }`}>
          <pre className="whitespace-pre-wrap font-mono select-text">{promptText}</pre>
        </div>
      </div>

      {/* Action Footer Bar */}
      <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs relative z-10">
        <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Compatible con ChatGPT 4o, Claude 3.5 Sonnet, Gemini 1.5 Pro y DeepSeek R1.</span>
        </div>

        {onOpenAiMentor && (
          <button
            onClick={() => {
              triggerHaptic('light');
              onOpenAiMentor();
            }}
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Bot className="w-4 h-4 text-indigo-400" />
            <span>Consultar al Mentor IA de EnKurso</span>
          </button>
        )}
      </div>
    </div>
  );
};
