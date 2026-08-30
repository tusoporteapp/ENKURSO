import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle, 
  Award, 
  Copy, 
  Check, 
  ExternalLink, 
  X, 
  Sparkles, 
  Lock, 
  BookOpen 
} from 'lucide-react';
import { EkLogo } from './EkLogo';
import { triggerHaptic } from '../utils/haptics';

interface CertificateVerificationModalProps {
  data: {
    code: string;
    name: string;
    bookTitle: string;
    categoryName?: string;
    score: number;
    issueDate: string;
    hexSignature: string;
  };
  isOpen: boolean;
  onClose: () => void;
  onExploreCatalog: () => void;
}

export const CertificateVerificationModal: React.FC<CertificateVerificationModalProps> = ({
  data,
  isOpen,
  onClose,
  onExploreCatalog,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySig = () => {
    triggerHaptic('light');
    navigator.clipboard?.writeText(data.hexSignature);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in select-none">
      <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative flex flex-col">
        
        {/* Top Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <EkLogo size={28} className="rounded-xl shadow-xs shrink-0" />
            <div>
              <span className="font-bold text-xs sm:text-sm text-white font-mono leading-tight block">
                Validador Oficial de Credenciales
              </span>
              <span className="text-[10px] text-indigo-400 font-mono">EnKurso Trust Protocol</span>
            </div>
          </div>
          <button
            onClick={() => {
              triggerHaptic('light');
              onClose();
            }}
            className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors native-touch-btn cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Verification Status Banner */}
        <div className="p-6 text-center space-y-4 flex-1 overflow-y-auto no-scrollbar">
          
          {/* Badge & Icon */}
          <div className="relative inline-flex items-center justify-center mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10 animate-in zoom-in-95 duration-300">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-black shadow-md">
              ✓
            </div>
          </div>

          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider">
              Autenticidad Verificada 100%
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
              Certificado Oficial Válido
            </h2>
            <p className="text-xs text-slate-400">
              Esta credencial ha sido validada y confirmada en los registros académicos digitales de EnKurso.org.
            </p>
          </div>

          {/* Certificate Metadata Card */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-left space-y-3 shadow-inner">
            
            {/* Student Name */}
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">Titular del Certificado:</span>
              <p className="text-base font-bold text-white uppercase mt-0.5">{data.name}</p>
            </div>

            {/* Course Title */}
            <div className="pt-2 border-t border-slate-850">
              <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">Programa Acreditado:</span>
              <p className="text-sm font-bold text-indigo-300 mt-0.5">{data.bookTitle}</p>
              <p className="text-[11px] text-slate-400 italic">{data.categoryName}</p>
            </div>

            {/* Score & Issue Date */}
            <div className="pt-2 border-t border-slate-850 grid grid-cols-2 gap-2">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">Calificación de Examen:</span>
                <span className="inline-flex items-center gap-1 font-bold text-emerald-400 text-sm mt-0.5">
                  <span>{data.score}%</span>
                  <span className="text-[10px] font-mono text-emerald-500/80">(Aprobado)</span>
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">Fecha de Emisión:</span>
                <p className="text-xs font-semibold text-slate-200 mt-0.5 font-mono">{data.issueDate}</p>
              </div>
            </div>

            {/* Verification Code */}
            <div className="pt-2 border-t border-slate-850">
              <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">Código Único de Registro:</span>
              <p className="text-xs font-mono font-bold text-amber-400 mt-0.5">{data.code}</p>
            </div>

            {/* Hexadecimal Cryptographic Signature */}
            <div className="pt-2 border-t border-slate-850 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider flex items-center gap-1">
                  <Lock className="w-3 h-3 text-indigo-400" />
                  <span>Firma Criptográfica Hexadecimal:</span>
                </span>
                <button
                  type="button"
                  onClick={handleCopySig}
                  className="text-[10px] text-indigo-400 hover:text-indigo-300 font-mono flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copiada' : 'Copiar'}</span>
                </button>
              </div>
              <div className="p-2 rounded-xl bg-slate-900 border border-indigo-900/40 text-[9px] font-mono text-slate-300 break-all leading-tight select-all">
                {data.hexSignature}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={() => {
                triggerHaptic('medium');
                onExploreCatalog();
              }}
              className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-xs font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 native-touch-btn cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explorar Biblioteca de Libros & Cursos</span>
            </button>
            <button
              onClick={() => {
                triggerHaptic('light');
                onClose();
              }}
              className="w-full py-2.5 text-slate-400 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Cerrar Validador
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 text-center text-[10px] text-slate-500 font-mono">
          EnKurso.org • Sistema de Verificación Criptográfica Descentralizado
        </div>
      </div>
    </div>
  );
};
