import React, { useState } from 'react';
import { 
  BookOpen, 
  Bookmark, 
  CheckCircle2, 
  FileText, 
  Award, 
  ArrowRight, 
  HardDrive, 
  Download, 
  Upload, 
  Check, 
  ShieldCheck, 
  Smartphone 
} from 'lucide-react';
import { BookCourse, UserLibraryState, UserProgress } from '../types';
import { BookCard } from './BookCard';
import { EkLogo } from './EkLogo';
import { exportAllDataBackup, importAllDataBackup } from '../utils/storage';

interface MyLibraryProps {
  userState: UserLibraryState;
  allBooks: BookCourse[];
  onOpenBook: (book: BookCourse) => void;
  onToggleFavorite: (bookId: string) => void;
  onOpenCertificate: (book: BookCourse) => void;
  onRefreshState?: () => void;
}

export const MyLibrary: React.FC<MyLibraryProps> = ({
  userState,
  allBooks,
  onOpenBook,
  onToggleFavorite,
  onOpenCertificate,
  onRefreshState,
}) => {
  const [activeTab, setActiveTab] = useState<'in_progress' | 'saved' | 'completed' | 'notes'>('in_progress');

  // Filter books according to user state
  const inProgressBooks = allBooks.filter((b) => {
    const p = userState.progressMap[b.id];
    return p && p.progressPercent > 0 && !p.completed;
  });

  const savedBooks = allBooks.filter((b) => {
    const p = userState.progressMap[b.id];
    return p && p.isFavorite;
  });

  const completedBooks = allBooks.filter((b) => {
    const p = userState.progressMap[b.id];
    return p && p.completed;
  });

  // Extract all notes
  const allNotes: Array<{ book: BookCourse; note: any }> = [];
  Object.entries(userState.progressMap).forEach(([bookId, prog]: [string, UserProgress]) => {
    if (prog.notes && prog.notes.length > 0) {
      const book = allBooks.find(b => b.id === bookId);
      if (book) {
        prog.notes.forEach(note => {
          allNotes.push({ book, note });
        });
      }
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Shelf Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <EkLogo size={42} className="rounded-xl shadow-xs shrink-0" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Mi Biblioteca Ejecutiva
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Gestiona tus cursos en curso, libros favoritos, reflexiones guardadas y certificados obtenidos.
              </p>
            </div>
          </div>

          {/* Device Local Storage Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold self-start sm:self-auto">
            <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>100% Offline • Almacenamiento local</span>
          </div>
        </div>

        {/* Shelf Tabs */}
        <div className="flex items-center gap-2 mt-6 border-b border-indigo-100 dark:border-slate-800 pb-3 overflow-x-auto no-scrollbar">
          {[
            { id: 'in_progress', label: 'En Progreso', count: inProgressBooks.length, icon: BookOpen },
            { id: 'saved', label: 'Guardados / Favoritos', count: savedBooks.length, icon: Bookmark },
            { id: 'completed', label: 'Completados', count: completedBooks.length, icon: CheckCircle2 },
            { id: 'notes', label: 'Mis Notas', count: allNotes.length, icon: FileText },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 border ${
                  isActive
                    ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-600 dark:border-indigo-500 shadow-sm shadow-indigo-300 dark:shadow-indigo-950 font-bold'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-slate-700 border-slate-200/80 dark:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.count !== null && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'in_progress' && (
        <div>
          {inProgressBooks.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-3xl p-8 shadow-xs">
              <BookOpen className="w-12 h-12 text-indigo-300 dark:text-indigo-500 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No tienes lecturas en progreso</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                Explora el catálogo de 30 categorías y 363 libros para comenzar tu próximo curso.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {inProgressBooks.map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  progress={userState.progressMap[book.id]}
                  onOpenBook={onOpenBook}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'saved' && (
        <div>
          {savedBooks.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-3xl p-8 shadow-xs">
              <Bookmark className="w-12 h-12 text-indigo-300 dark:text-indigo-500 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No has guardado libros aún</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                Haz clic en el icono de marcador en cualquier libro para guardarlo aquí y leerlo después.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {savedBooks.map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  progress={userState.progressMap[book.id]}
                  onOpenBook={onOpenBook}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'completed' && (
        <div>
          {completedBooks.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-3xl p-8 shadow-xs">
              <CheckCircle2 className="w-12 h-12 text-emerald-300 dark:text-emerald-500 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">Aún no has completado ningún libro</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                Lee los 6 capítulos de un curso y aprueba su examen para obtener tu certificación oficial.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {completedBooks.map(book => (
                <div
                  key={book.id}
                  className="p-4 sm:p-5 bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-2xl flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-bold mb-2">
                      <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        Completado
                      </span>
                      <span className="text-slate-400 dark:text-slate-500 font-mono text-[10px] sm:text-[11px]">Libro #{book.numericId}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 line-clamp-2">{book.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{book.categoryName}</p>
                  </div>

                  <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <button
                      onClick={() => onOpenBook(book)}
                      className="flex-1 py-1.5 sm:py-2 px-2 sm:px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl transition-colors"
                    >
                      Repasar
                    </button>
                    <button
                      onClick={() => onOpenCertificate(book)}
                      className="flex items-center gap-1.5 py-2 px-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-xs shadow-indigo-200 dark:shadow-none transition-all"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Certificado</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'notes' && (
        <div>
          {allNotes.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-3xl p-8 shadow-xs">
              <FileText className="w-12 h-12 text-indigo-300 dark:text-indigo-500 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No tienes notas registradas</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                Durante la lectura de cualquier libro, puedes anotar reflexiones o tareas para aplicarlas en tu empresa.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allNotes.map(({ book, note }) => (
                <div
                  key={note.id}
                  className="p-4 bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-2xl space-y-2 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                      {book.title} (Cap. {note.chapterNumber})
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">{note.createdDate}</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">{note.text}</p>
                  <button
                    onClick={() => onOpenBook(book)}
                    className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold flex items-center gap-1 pt-1"
                  >
                    <span>Ir al libro</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

