import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User, 
  RefreshCw, 
  Briefcase, 
  Trash2, 
  Zap, 
  Copy, 
  Check, 
  BookOpen, 
  ShieldAlert, 
  TrendingUp, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { BookCourse } from '../types';
import { 
  loadMentorChat, 
  saveMentorChat, 
  StoredMentorMessage,
  getDailyAiUsage,
  incrementDailyAiUsage,
  DAILY_AI_CLOUD_LIMIT
} from '../utils/storage';
import { generateExecutiveMentorResponse } from '../utils/aiMentorEngine';
import { triggerHaptic } from '../utils/haptics';

interface AiMentorModalProps {
  book: BookCourse;
  currentChapterNumber: number;
  isOpen: boolean;
  onClose: () => void;
}

export const AiMentorModal: React.FC<AiMentorModalProps> = ({
  book,
  currentChapterNumber,
  isOpen,
  onClose,
}) => {
  const getInitialMessages = (): StoredMentorMessage[] => {
    const saved = loadMentorChat(book.id);
    if (saved && saved.length > 0) return saved;
    return [
      {
        id: 'welcome',
        role: 'assistant',
        content: `Hola. Soy tu **Mentor Ejecutivo EnKurso**. Te acompaño en el estudio de **"${book.title}"** (*${book.categoryName}*).\n\nPuedes preguntarme cómo aplicar estos principios estratégicos a tu modelo de negocio, solicitarme planes de acción ejecutables o simular objeciones de clientes. ¿En qué te gustaría profundizar hoy?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  };

  const [messages, setMessages] = useState<StoredMentorMessage[]>(getInitialMessages);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [businessType, setBusinessType] = useState('E-commerce / Retail');
  const [dailyQuota, setDailyQuota] = useState(getDailyAiUsage);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [showSectorMenu, setShowSectorMenu] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const businessTypes = [
    { id: 'E-commerce / Retail', label: 'E-commerce y Comercio Minorista' },
    { id: 'Agencia / Servicios B2B', label: 'Agencia y Servicios Profesionales B2B' },
    { id: 'Software / SaaS Tecnológico', label: 'Software, SaaS y Tecnología' },
    { id: 'Restaurante / Hostelería', label: 'Restaurantes, Gastronomía y Hostelería' },
    { id: 'Consultoría / Educación', label: 'Consultoría, Coaching y Educación' },
    { id: 'Fabricación y Logística', label: 'Fabricación, Distribución y Logística' },
    { id: 'Emprendimiento en fase inicial', label: 'Startup y Emprendimiento en Fase Semilla' },
  ];

  // Sync messages and quota when book changes or opens
  useEffect(() => {
    if (isOpen) {
      setDailyQuota(getDailyAiUsage());
      const saved = loadMentorChat(book.id);
      if (saved && saved.length > 0) {
        setMessages(saved);
      } else {
        setMessages([
          {
            id: 'welcome',
            role: 'assistant',
            content: `Hola. Soy tu **Mentor Ejecutivo EnKurso**. Te acompaño en el estudio de **"${book.title}"** (*${book.categoryName}*).\n\nPuedes preguntarme cómo aplicar estos principios estratégicos a tu modelo de negocio, solicitarme planes de acción ejecutables o simular objeciones de clientes. ¿En qué te gustaría profundizar hoy?`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [book.id, isOpen]);

  // Persist messages whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      saveMentorChat(book.id, messages);
    }
  }, [messages, book.id]);

  const quickPrompts = [
    { label: 'Aplicar a mi sector', query: `¿Cómo aplico los principios de "${book.title}" a un modelo de negocio de ${businessType}?` },
    { label: 'Ejemplo con métricas', query: 'Dame un ejemplo de implementación paso a paso con cifras y métricas estimadas.' },
    { label: '3 Errores fatales', query: '¿Cuáles son los 3 errores más graves que cometen las empresas al intentar implementar esto?' },
    { label: 'Plan de acción 48h', query: 'Estructura un plan de acción ejecutivo para las primeras 48 horas de trabajo.' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  if (!isOpen) return null;

  const handleClearHistory = () => {
    triggerHaptic('medium');
    const defaultMsg: StoredMentorMessage = {
      id: `w-${Date.now()}`,
      role: 'assistant',
      content: `Conversación reiniciada. ¿En qué aspecto táctico de **"${book.title}"** deseas enfocarte ahora?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([defaultMsg]);
    saveMentorChat(book.id, [defaultMsg]);
  };

  const handleCopyMessage = (id: string, text: string) => {
    triggerHaptic('light');
    navigator.clipboard.writeText(text);
    setCopiedMessageId(id);
    setTimeout(() => setCopiedMessageId(null), 2000);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim() || isLoading) return;

    triggerHaptic('medium');

    const userMsg: StoredMentorMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    const isCloudQuotaAvailable = dailyQuota.count < DAILY_AI_CLOUD_LIMIT;

    if (isCloudQuotaAvailable) {
      try {
        const res = await fetch('/api/mentor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            bookTitle: book.title,
            categoryName: book.categoryName,
            currentChapter: `Capítulo ${currentChapterNumber}`,
            userQuery: text,
            userBusinessType: businessType,
            chatHistory: messages.slice(-5)
          })
        });

        if (!res.ok) {
          throw new Error('API unavailable');
        }

        const data = await res.json();
        const updatedUsage = incrementDailyAiUsage();
        setDailyQuota(updatedUsage);

        const assistantMsg: StoredMentorMessage = {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: data.reply || generateExecutiveMentorResponse(book, `Capítulo ${currentChapterNumber}`, text, businessType),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, assistantMsg]);
        triggerHaptic('success');
      } catch {
        // Fallback to local executive mentor
        const localReply = generateExecutiveMentorResponse(book, `Capítulo ${currentChapterNumber}`, text, businessType);
        const fallbackMsg: StoredMentorMessage = {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: localReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, fallbackMsg]);
        triggerHaptic('success');
      } finally {
        setIsLoading(false);
      }
    } else {
      setTimeout(() => {
        const localReply = generateExecutiveMentorResponse(book, `Capítulo ${currentChapterNumber}`, text, businessType);
        const quotaNotice = `\n\n> 💡 *Has alcanzado el límite diario de ${DAILY_AI_CLOUD_LIMIT} consultas en la nube (se renuevan a medianoche). Tu Mentor Local continúa disponible con asesoría ejecutiva ilimitada.*`;
        const assistantMsg: StoredMentorMessage = {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: `${localReply}${quotaNotice}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, assistantMsg]);
        setIsLoading(false);
        triggerHaptic('success');
      }, 400);
    }
  };

  // Helper to format basic markdown (bold, italic, blockquotes, bullet points)
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, lIdx) => {
      // Empty line
      if (!line.trim()) {
        return <div key={lIdx} className="h-2" />;
      }

      // Blockquote
      if (line.startsWith('>')) {
        const quoteText = line.replace(/^>\s*/, '');
        return (
          <div key={lIdx} className="my-1.5 pl-3 border-l-2 border-indigo-500/80 text-indigo-900 dark:text-indigo-200 bg-indigo-50/50 dark:bg-indigo-950/30 p-2 rounded-r-xl text-xs italic">
            {renderInlineStyles(quoteText)}
          </div>
        );
      }

      // Bullet points
      if (line.match(/^[\*\-•]\s+/)) {
        const bulletText = line.replace(/^[\*\-•]\s+/, '');
        return (
          <div key={lIdx} className="flex items-start gap-2 my-1 pl-1">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0 mt-1.5" />
            <span className="text-xs sm:text-sm leading-relaxed">{renderInlineStyles(bulletText)}</span>
          </div>
        );
      }

      // Numbered lists
      const numMatch = line.match(/^(\d+)\.\s+(.*)/);
      if (numMatch) {
        return (
          <div key={lIdx} className="flex items-start gap-2 my-1 pl-1">
            <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 shrink-0 w-4 font-mono">
              {numMatch[1]}.
            </span>
            <span className="text-xs sm:text-sm leading-relaxed">{renderInlineStyles(numMatch[2])}</span>
          </div>
        );
      }

      // Regular line
      return (
        <p key={lIdx} className="my-1 text-xs sm:text-sm leading-relaxed">
          {renderInlineStyles(line)}
        </p>
      );
    });
  };

  const renderInlineStyles = (text: string) => {
    // Basic bold **text** and italic *text* replacement
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, pIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={pIdx} className="font-bold text-slate-950 dark:text-white">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={pIdx} className="italic text-slate-800 dark:text-slate-200">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in select-none">
      <div 
        id="ai-mentor-sheet"
        className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-t-3xl sm:rounded-3xl w-full sm:max-w-2xl h-[90vh] sm:h-[640px] max-h-[94vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-300 safe-bottom"
      >
        {/* Mobile Pull Handle */}
        <div className="pt-2.5 pb-1 flex justify-center sm:hidden">
          <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
        </div>

        {/* 1. Header with AI Brand, Quota & Actions */}
        <div className="px-4 py-3 sm:px-5 sm:py-3.5 bg-slate-50/80 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-xs">
                <Bot className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h3 className="font-bold text-sm sm:text-base text-slate-950 dark:text-white leading-none">
                  Mentor Ejecutivo IA
                </h3>
                <span className="text-[10px] bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-full font-bold border border-indigo-200/80 dark:border-indigo-800 flex items-center gap-1">
                  <Zap className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                  {Math.max(0, DAILY_AI_CLOUD_LIMIT - dailyQuota.count)}/{DAILY_AI_CLOUD_LIMIT} Nube
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 truncate max-w-[200px] sm:max-w-xs flex items-center gap-1">
                <BookOpen className="w-3 h-3 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span className="truncate">{book.title} • Cap. {currentChapterNumber}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleClearHistory}
              className="p-2 text-slate-400 hover:text-rose-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors native-touch-btn cursor-pointer"
              title="Reiniciar conversación"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                triggerHaptic('light');
                onClose();
              }}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors native-touch-btn cursor-pointer"
              title="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. Business Industry Sector Selector */}
        <div className="px-4 py-2 bg-indigo-50/40 dark:bg-slate-950/60 border-b border-indigo-100/60 dark:border-slate-800/80 flex items-center justify-between text-xs">
          <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5 text-[11px] font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
            Adaptar respuestas a:
          </span>
          <select
            value={businessType}
            onChange={(e) => {
              triggerHaptic('selection');
              setBusinessType(e.target.value);
            }}
            className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-indigo-200/80 dark:border-slate-700 rounded-xl px-2.5 py-1 text-xs font-semibold focus:outline-none focus:border-indigo-500 shadow-2xs max-w-[210px] truncate"
          >
            {businessTypes.map(t => (
              <option key={t.id} value={t.id}>{t.label}</option>
            ))}
          </select>
        </div>

        {/* 3. Messages Conversation Stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-slate-50/50 dark:bg-slate-900/50 no-scrollbar">
          {messages.map((msg) => {
            const isAssistant = msg.role === 'assistant';
            const isCopied = copiedMessageId === msg.id;

            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${isAssistant ? 'justify-start' : 'justify-end'}`}
              >
                {isAssistant && (
                  <div className="w-7 h-7 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200/80 dark:border-indigo-800 flex items-center justify-center shrink-0 text-indigo-600 dark:text-indigo-400 mt-0.5 shadow-2xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`group relative max-w-[88%] sm:max-w-[82%] rounded-2xl p-3.5 shadow-2xs transition-all ${
                  isAssistant
                    ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700 rounded-tl-sm'
                    : 'bg-indigo-600 text-white rounded-tr-sm'
                }`}>
                  {/* Content with markdown formatting */}
                  <div>
                    {isAssistant ? (
                      renderFormattedContent(msg.content)
                    ) : (
                      <p className="text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-line">
                        {msg.content}
                      </p>
                    )}
                  </div>

                  {/* Message Footer: Timestamp & Copy button */}
                  <div className="flex items-center justify-between gap-2 mt-2 pt-1 border-t border-slate-100 dark:border-slate-700/60 text-[10px]">
                    <span className={isAssistant ? 'text-slate-400' : 'text-indigo-200'}>
                      {msg.timestamp}
                    </span>

                    {isAssistant && (
                      <button
                        onClick={() => handleCopyMessage(msg.id, msg.content)}
                        className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
                        title="Copiar respuesta"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {!isAssistant && (
                  <div className="w-7 h-7 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center shrink-0 text-indigo-700 dark:text-indigo-300 mt-0.5 shadow-2xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-2.5 items-center p-3 rounded-2xl bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 max-w-[85%] animate-pulse shadow-2xs">
              <div className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              </div>
              <span>Analizando contexto de <strong>"{book.title}"</strong> y sector <em>{businessType}</em>...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 4. Categorized Quick Prompts Chips */}
        <div className="px-3 py-2 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 overflow-x-auto no-scrollbar flex items-center gap-1.5">
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(p.query)}
              disabled={isLoading}
              className="shrink-0 text-[11px] px-3 py-1.5 bg-slate-100/90 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full border border-slate-200/80 dark:border-slate-700 transition-all font-semibold active:scale-95 disabled:opacity-50 native-touch-btn cursor-pointer"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* 5. Input Bar */}
        <div className="p-3 sm:p-4 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Pregunta sobre "${book.title}"...`}
              className="flex-1 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 text-xs sm:text-sm px-4 py-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="p-2.5 sm:px-4 sm:py-2.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white rounded-2xl font-bold transition-all disabled:opacity-40 shrink-0 shadow-xs flex items-center justify-center gap-1.5 native-touch-btn cursor-pointer"
              title="Enviar consulta"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-bold">Consultar</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
