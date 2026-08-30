import React from 'react';
import { Award, ShieldCheck, Printer, ArrowRight, BookOpen, Star, CheckCircle, Download } from 'lucide-react';
import { CertificateData, BookCourse, UserLibraryState } from '../types';

interface CertificatesGalleryProps {
  userState: UserLibraryState;
  allBooks: BookCourse[];
  onOpenCertificateModal: (cert: CertificateData, book?: BookCourse) => void;
  onOpenBook: (book: BookCourse) => void;
}

export const CertificatesGallery: React.FC<CertificatesGalleryProps> = ({
  userState,
  allBooks,
  onOpenCertificateModal,
  onOpenBook,
}) => {
  const certsMap = new Map<string, CertificateData>();
  (userState.certificates || []).forEach((c) => {
    if (c && c.bookId) certsMap.set(c.bookId, c);
  });
  const earnedCerts = Array.from(certsMap.values());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Validación & Acreditación de Habilidades</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          Certificaciones Ejecutivas
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
          Cada libro completado con su examen aprobado otorga un Certificado de Maestría Oficial emitido por Enkurso con código único de verificación.
        </p>
      </div>

      {/* Earned Certificates Section */}
      {earnedCerts.length > 0 ? (
        <div className="mb-12">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>Tus Certificados Obtenidos ({earnedCerts.length})</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {earnedCerts.map((cert) => {
              const book = allBooks.find(b => b.id === cert.bookId);
              return (
                <div
                  key={cert.id}
                  className="bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between text-xs text-indigo-600 dark:text-indigo-400 font-mono mb-3">
                      <span>CÓDIGO: {cert.verificationCode}</span>
                      <span className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-full font-bold">
                        {cert.score}% Calificación
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                      {cert.bookTitle}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Categoría: {cert.categoryName}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      Otorgado a: <strong className="text-slate-800 dark:text-slate-200">{cert.recipientName}</strong> el {cert.issueDate}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => onOpenCertificateModal(cert, book)}
                      className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer native-touch-btn"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Ver / Descargar Diploma PDF</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-3xl p-8 mb-12 shadow-xs">
          <Award className="w-14 h-14 text-indigo-400 dark:text-indigo-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Aún no has desbloqueado certificados</h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Para obtener tu primera certificación, elige cualquier libro del catálogo, léelo y responde correctamente al menos 2 de las 3 preguntas del examen final.
          </p>
        </div>
      )}

      {/* Available Track Overview */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">
          24 Rutas de Maestría Disponibles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from(new Set(allBooks.map(b => b.categoryName))).map((catName, idx) => {
            const catBooks = allBooks.filter(b => b.categoryName === catName);
            const completedInCat = catBooks.filter(b => userState.progressMap[b.id]?.completed).length;
            return (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-2xl flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold">
                    Ruta {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1 line-clamp-1">
                    {catName}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {completedInCat} de {catBooks.length} tomos completados
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all"
                      style={{ width: `${(completedInCat / catBooks.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
