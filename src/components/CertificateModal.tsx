import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Printer, 
  Download, 
  X, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles, 
  RefreshCw, 
  Share2, 
  Image as ImageIcon,
  Check,
  Lock,
  Copy,
  QrCode
} from 'lucide-react';
import QRCode from 'qrcode';
import { CertificateData, BookCourse } from '../types';
import { loadUserName, saveUserName } from '../utils/storage';
import { EkLogo } from './EkLogo';
import { downloadCertificatePdf, downloadCertificateImage } from '../utils/pdfCertificateGenerator';
import { generateCertificateHexSignature, buildVerificationUrl } from '../utils/cryptoSignature';
import { triggerHaptic } from '../utils/haptics';

interface CertificateModalProps {
  certificate: CertificateData;
  book?: BookCourse;
  isOpen: boolean;
  onClose: () => void;
  onUpdateRecipientName: (certId: string, newName: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  book,
  isOpen,
  onClose,
  onUpdateRecipientName,
}) => {
  const [recipientName, setRecipientName] = useState(
    certificate.recipientName || loadUserName() || 'Director Ejecutivo'
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [isDownloadingImage, setIsDownloadingImage] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copiedSig, setCopiedSig] = useState(false);

  const hexSignature = generateCertificateHexSignature({
    name: recipientName || 'Director Ejecutivo',
    bookTitle: certificate.bookTitle,
    categoryName: certificate.categoryName,
    verificationCode: certificate.verificationCode,
    issueDate: certificate.issueDate,
    score: certificate.score,
  });

  const verifyUrl = buildVerificationUrl({
    name: recipientName || 'Director Ejecutivo',
    bookTitle: certificate.bookTitle,
    categoryName: certificate.categoryName,
    verificationCode: certificate.verificationCode,
    issueDate: certificate.issueDate,
    score: certificate.score,
  });

  useEffect(() => {
    if (verifyUrl) {
      QRCode.toDataURL(verifyUrl, {
        margin: 1,
        width: 180,
        color: { dark: '#1e1b4b', light: '#ffffff' },
      }).then(setQrDataUrl).catch(() => {});
    }
  }, [verifyUrl]);

  if (!isOpen) return null;

  const showFeedback = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => {
      setStatusMessage(null);
    }, 4000);
  };

  const handleCopyHex = () => {
    triggerHaptic('light');
    navigator.clipboard?.writeText(hexSignature);
    setCopiedSig(true);
    showFeedback('Firma criptográfica copiada.');
    setTimeout(() => setCopiedSig(false), 2500);
  };

  const handlePrint = () => {
    triggerHaptic('light');
    window.print();
  };

  const handleDownloadPdf = async () => {
    if (isDownloadingPdf || isDownloadingImage) return;
    setIsDownloadingPdf(true);
    setStatusMessage('Generando diploma en alta resolución...');

    const result = await downloadCertificatePdf({
      recipientName,
      bookTitle: certificate.bookTitle,
      categoryName: certificate.categoryName,
      verificationCode: certificate.verificationCode,
      issueDate: certificate.issueDate,
      score: certificate.score,
    });

    setIsDownloadingPdf(false);
    if (result.message) {
      showFeedback(result.message);
    }
  };

  const handleDownloadImage = async () => {
    if (isDownloadingPdf || isDownloadingImage) return;
    setIsDownloadingImage(true);
    setStatusMessage('Generando imagen del diploma...');

    const result = await downloadCertificateImage({
      recipientName,
      bookTitle: certificate.bookTitle,
      categoryName: certificate.categoryName,
      verificationCode: certificate.verificationCode,
      issueDate: certificate.issueDate,
      score: certificate.score,
    });

    setIsDownloadingImage(false);
    if (result.message) {
      showFeedback(result.message);
    }
  };

  const handleSaveName = () => {
    triggerHaptic('medium');
    setIsEditing(false);
    saveUserName(recipientName);
    onUpdateRecipientName(certificate.id, recipientName);
    showFeedback('Nombre del titular actualizado.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in select-none">
      <div className="bg-stone-900 border border-stone-800 text-stone-100 rounded-3xl w-full max-w-2xl max-h-[96vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Top Floating Feedback Toast */}
        {statusMessage && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-40 px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-full shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2 border border-indigo-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Top Control Bar */}
        <div className="p-3 sm:p-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between no-print gap-2">
          <div className="flex items-center gap-2">
            <EkLogo size={28} className="rounded-xl shadow-xs shrink-0" />
            <div>
              <span className="font-bold text-xs sm:text-sm text-white font-display-cinzel leading-tight block">
                Diploma Oficial de Maestría
              </span>
              <span className="text-[10px] text-stone-400 font-mono">EnKurso Executive Institute • Formato 3:4</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Download/Share PDF Button */}
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloadingPdf || isDownloadingImage}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-xs font-bold rounded-xl shadow-md transition-all disabled:opacity-50 native-touch-btn cursor-pointer"
              title="Guardar Diploma en PDF"
            >
              {isDownloadingPdf ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Guardar PDF</span>
                </>
              )}
            </button>

            {/* Save as Image PNG Button */}
            <button
              onClick={handleDownloadImage}
              disabled={isDownloadingPdf || isDownloadingImage}
              className="flex items-center gap-1.5 px-3 py-2 bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-200 text-xs font-semibold rounded-xl transition-colors disabled:opacity-50 native-touch-btn cursor-pointer"
              title="Guardar Diploma como Imagen PNG"
            >
              {isDownloadingImage ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
              ) : (
                <>
                  <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Imagen</span>
                </>
              )}
            </button>

            {/* Print Button (Desktop only) */}
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-xl transition-colors native-touch-btn cursor-pointer"
              title="Imprimir certificado"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Imprimir</span>
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                triggerHaptic('light');
                onClose();
              }}
              className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-xl transition-colors native-touch-btn cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area with Ergonomic Viewport */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 flex items-center justify-center bg-stone-950/90 no-scrollbar">
          
          {/* Certificate Frame in Vertical 3:4 Proportion */}
          <div 
            id="official-enkurso-certificate-frame"
            style={{
              backgroundColor: '#fdfbf7',
              color: '#1c1917',
              borderColor: '#d4af37',
              borderStyle: 'solid',
              borderWidth: '5px',
            }}
            className="w-full max-w-lg p-5 sm:p-7 rounded-2xl shadow-2xl relative select-none font-reader-serif space-y-3.5"
          >
            {/* Guilloche inner frames */}
            <div 
              style={{ borderColor: '#1e1b4b' }}
              className="absolute inset-1.5 sm:inset-2 border sm:border-2 pointer-events-none rounded-xl" 
            />
            <div 
              style={{ borderColor: 'rgba(212, 175, 55, 0.4)' }}
              className="absolute inset-2.5 sm:inset-3 border pointer-events-none rounded-lg" 
            />

            {/* Corner Decorative Accents */}
            <div style={{ backgroundColor: '#d4af37' }} className="absolute top-3 left-3 sm:top-4 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full pointer-events-none" />
            <div style={{ backgroundColor: '#d4af37' }} className="absolute top-3 right-3 sm:top-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full pointer-events-none" />
            <div style={{ backgroundColor: '#d4af37' }} className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full pointer-events-none" />
            <div style={{ backgroundColor: '#d4af37' }} className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full pointer-events-none" />

            {/* 1. Header & Institutional Banner */}
            <div className="text-center space-y-1 relative z-10 pt-1">
              <div 
                style={{
                  backgroundColor: '#1e1b4b',
                  borderColor: '#d4af37',
                  color: '#f5e6be',
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase shadow-xs"
              >
                <EkLogo size={13} className="rounded-xs shrink-0" />
                <span>EnKurso Executive Institute of Business</span>
              </div>

              <p 
                style={{ color: '#b45309' }}
                className="text-[8px] sm:text-[9.5px] italic font-serif tracking-wider"
              >
                — EXCELLENTIA • DISCIPLINA • IMPACTUS —
              </p>

              <h1 
                style={{ color: '#0f172a' }}
                className="text-base sm:text-xl font-bold font-display-cinzel tracking-wider mt-1 leading-tight"
              >
                CERTIFICADO OFICIAL DE MAESTRÍA EJECUTIVA
              </h1>
              <p 
                style={{ color: '#64748b' }}
                className="text-[9px] sm:text-xs uppercase tracking-wider font-sans leading-tight"
              >
                El Consejo Académico y Claustro de Evaluación de EnKurso certifican que:
              </p>
            </div>

            {/* 2. Recipient Section */}
            <div className="text-center relative z-10 py-1">
              {isEditing ? (
                <div className="flex items-center justify-center gap-2 no-print">
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    style={{ color: '#0f172a', borderColor: '#d4af37' }}
                    className="text-center text-base sm:text-xl font-bold font-display-serif border-b-2 bg-transparent focus:outline-none px-2 py-0.5 max-w-xs"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    style={{ backgroundColor: '#4f46e5', color: '#ffffff' }}
                    className="px-2.5 py-1 text-xs font-bold rounded-lg shadow-xs cursor-pointer"
                  >
                    Guardar
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => setIsEditing(true)}
                  className="group cursor-pointer inline-flex flex-col items-center justify-center"
                  title="Toca para editar tu nombre"
                >
                  <h2 
                    style={{ color: '#0f172a' }}
                    className="text-base sm:text-2xl font-bold font-display-serif tracking-wide uppercase px-3 leading-snug"
                  >
                    {recipientName}
                  </h2>
                  <div 
                    style={{ backgroundColor: '#d4af37' }}
                    className="w-44 sm:w-60 h-0.5 mt-1 relative flex items-center justify-center"
                  >
                    <div style={{ backgroundColor: '#d4af37' }} className="w-1.5 h-1.5 rotate-45" />
                  </div>
                  <span 
                    style={{ color: '#a8a29e' }}
                    className="text-[8px] opacity-75 group-hover:opacity-100 transition-opacity no-print font-sans mt-0.5"
                  >
                    (Toca para editar nombre)
                  </span>
                </div>
              )}
            </div>

            {/* 3. Course Title */}
            <div className="text-center space-y-0.5 relative z-10">
              <p 
                style={{ color: '#64748b' }}
                className="text-[9px] sm:text-xs font-sans leading-tight"
              >
                Por haber acreditado con calificación sobresaliente el programa:
              </p>
              <h3 
                style={{ color: '#4f46e5' }}
                className="text-sm sm:text-base font-bold font-sans px-2 leading-snug"
              >
                {certificate.bookTitle}
              </h3>
              <p 
                style={{ color: '#475569' }}
                className="text-[9.5px] sm:text-xs italic"
              >
                Área de Especialización: {certificate.categoryName}
              </p>
            </div>

            {/* 4. Verified Competencies Box (2x2 Matrix) */}
            <div 
              style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}
              className="border rounded-xl p-2.5 sm:p-3 relative z-10 shadow-xs"
            >
              <div 
                style={{ backgroundColor: '#f1f5f9', color: '#475569' }}
                className="rounded py-0.5 text-center text-[7.5px] sm:text-[8.5px] font-bold uppercase tracking-wider mb-1.5"
              >
                Competencias Profesionales Evaluadas y Certificadas
              </div>
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="border-l-2 border-indigo-600 pl-1.5">
                  <h4 style={{ color: '#1e1b4b' }} className="text-[8px] sm:text-[9.5px] font-bold">✦ Marco Estratégico</h4>
                  <p style={{ color: '#64748b' }} className="text-[7px] sm:text-[8px] leading-tight">Fundamentos y diagnóstico de valor.</p>
                </div>
                <div className="border-l-2 border-indigo-600 pl-1.5">
                  <h4 style={{ color: '#1e1b4b' }} className="text-[8px] sm:text-[9.5px] font-bold">✦ Metodología Táctica</h4>
                  <p style={{ color: '#64748b' }} className="text-[7px] sm:text-[8px] leading-tight">Plan operativo Días 1 al 30.</p>
                </div>
                <div className="border-l-2 border-indigo-600 pl-1.5">
                  <h4 style={{ color: '#1e1b4b' }} className="text-[8px] sm:text-[9.5px] font-bold">✦ Benchmarking & KPIs</h4>
                  <p style={{ color: '#64748b' }} className="text-[7px] sm:text-[8px] leading-tight">Resolución de casos y métricas.</p>
                </div>
                <div className="border-l-2 border-indigo-600 pl-1.5">
                  <h4 style={{ color: '#1e1b4b' }} className="text-[8px] sm:text-[9.5px] font-bold">✦ Mitigación de Riesgos</h4>
                  <p style={{ color: '#64748b' }} className="text-[7px] sm:text-[8px] leading-tight">Puntos ciegos y protocolo seguro.</p>
                </div>
              </div>
            </div>

            {/* 5. Platform Hex Signature Box */}
            <div 
              style={{ backgroundColor: '#f8fafc', borderColor: '#d4af37' }}
              className="border rounded-xl p-2.5 space-y-1 text-left shadow-xs relative z-10"
            >
              <div 
                style={{ backgroundColor: '#1e1b4b', color: '#f5e6be' }}
                className="rounded px-2 py-0.5 text-[8px] sm:text-[8.5px] font-mono font-bold flex items-center justify-between"
              >
                <span className="flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5 text-indigo-400" />
                  <span>Firma Digital Criptográfica (EnKurso.org)</span>
                </span>
                <button
                  type="button"
                  onClick={handleCopyHex}
                  className="text-[7.5px] text-indigo-300 hover:text-white cursor-pointer inline-flex items-center gap-0.5"
                >
                  {copiedSig ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                  <span>{copiedSig ? 'Copiada' : 'Copiar'}</span>
                </button>
              </div>

              <div className="font-mono text-[7px] sm:text-[8px] text-indigo-600 dark:text-indigo-500 break-all leading-tight max-h-7 overflow-hidden select-all">
                {hexSignature.substring(0, 95)}...
              </div>

              <div className="pt-1 border-t border-slate-200 flex items-center justify-between text-[7.5px] sm:text-[8.5px] text-slate-600 font-sans">
                <span>Titular: <strong>{recipientName}</strong></span>
                <span className="font-mono text-emerald-700 font-bold">Nota: {certificate.score}%</span>
              </div>
            </div>

            {/* 6. Seal & QR Row */}
            <div className="grid grid-cols-2 gap-3 items-center text-center relative z-10 pt-1">
              {/* Relievo Seal (Left) */}
              <div className="flex items-center justify-center gap-2">
                <div 
                  style={{ backgroundColor: '#4f46e5', borderColor: '#d4af37' }}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border-2 shadow-md flex flex-col items-center justify-center text-white"
                >
                  <EkLogo size={15} showBackground={false} />
                  <span className="text-[5px] sm:text-[6px] font-black uppercase tracking-tighter mt-0.5">OFICIAL</span>
                </div>
                <div className="text-left">
                  <span style={{ color: '#0f172a' }} className="text-[8px] sm:text-[9.5px] font-bold block leading-tight font-serif">
                    Validador Digital
                  </span>
                  <span style={{ color: '#64748b' }} className="text-[7px] sm:text-[8px] block font-mono">
                    {certificate.issueDate}
                  </span>
                </div>
              </div>

              {/* Dynamic QR Code (Right) */}
              <div className="flex items-center justify-center gap-2">
                {qrDataUrl ? (
                  <img src={qrDataUrl} alt="QR Verificación" className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm border border-stone-300 shadow-2xs" />
                ) : (
                  <div className="w-10 h-10 bg-stone-200 rounded-sm" />
                )}
                <div className="text-left">
                  <span style={{ color: '#0f172a' }} className="text-[7.5px] sm:text-[9px] font-mono font-bold block leading-tight">
                    Validar QR
                  </span>
                  <span style={{ color: '#4f46e5' }} className="text-[7px] sm:text-[8px] font-mono truncate max-w-[80px] block">
                    {certificate.verificationCode}
                  </span>
                </div>
              </div>
            </div>

            {/* 7. Cryptographic Security Strip */}
            <div 
              style={{ backgroundColor: '#1e1b4b', color: '#f5e6be' }}
              className="py-1 px-2 rounded-xs text-[6.5px] sm:text-[7.5px] font-mono text-center truncate leading-tight mt-1"
            >
              REGISTRO: {certificate.verificationCode} • ENKURSO.ORG • PROTOCOLO CRIPTOGRÁFICO
            </div>
          </div>
        </div>

        {/* Footer info & iPhone Hint */}
        <div className="p-3 bg-stone-950 border-t border-stone-800 text-center text-xs text-stone-400 no-print flex flex-col sm:flex-row items-center justify-between gap-2 px-4 safe-bottom">
          <span className="text-[11px]">
            📱 En iPhone: Toca <strong>Guardar PDF</strong> y selecciona <em>"Guardar en Archivos"</em> o <em>"Compartir"</em>.
          </span>
          <span className="text-[10px] font-mono text-stone-500">Documento Oficial • Calificación: {certificate.score}%</span>
        </div>
      </div>
    </div>
  );
};
