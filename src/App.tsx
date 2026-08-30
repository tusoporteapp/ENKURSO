import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNavBar } from './components/BottomNavBar';
import { CategoryNav } from './components/CategoryNav';
import { CategoryBottomSheet } from './components/CategoryBottomSheet';
import { BookCard } from './components/BookCard';
import { BookReader } from './components/BookReader';
import { MyLibrary } from './components/MyLibrary';
import { CertificatesGallery } from './components/CertificatesGallery';
import { SearchModal } from './components/SearchModal';
import { CertificateModal } from './components/CertificateModal';
import { CertificateVerificationModal } from './components/CertificateVerificationModal';
import { BookOverviewModal } from './components/BookOverviewModal';
import { AuthModal } from './components/AuthModal';
import { parseVerificationFromUrl } from './utils/cryptoSignature';
import { syncUserProgressCloud, registerUser, getStoredAuthUser, setStoredAuthUser, AuthUser } from './utils/authSyncEngine';
import { ExecutiveDashboard } from './components/ExecutiveDashboard';
import { SettingsView } from './components/SettingsView';
import { OnboardingScreen } from './components/OnboardingScreen';
import { EkLogo } from './components/EkLogo';
import { getAllBookCourses, getBookCourseById } from './data/courseContentGenerator';
import { CATEGORIES } from './data/categories';
import { 
  loadLibraryState, 
  saveLibraryState, 
  loadReaderSettings, 
  saveReaderSettings, 
  getOrCreateProgress,
  loadAppThemeMode,
  saveAppThemeMode,
  applyThemeToDOM,
  hasCompletedOnboarding,
  saveCompleteAiOnboarding,
  loadUserName
} from './utils/storage';
import { BookCourse, UserLibraryState, ReaderSettings, UserProgress, CertificateData, AppThemeMode } from './types';
import { BookOpen, Sparkles, Filter, CheckCircle2, ChevronRight } from 'lucide-react';

export function App() {
  const [allBooks, setAllBooks] = useState<BookCourse[]>(getAllBookCourses);
  const [userState, setUserState] = useState<UserLibraryState>(loadLibraryState);
  const [readerSettings, setReaderSettings] = useState<ReaderSettings>(loadReaderSettings);

  // App Theme state (light / dark / system)
  const [themeMode, setThemeMode] = useState<AppThemeMode>(loadAppThemeMode);
  const [isDarkActive, setIsDarkActive] = useState<boolean>(() => {
    return applyThemeToDOM(loadAppThemeMode());
  });

  const [activeTab, setActiveTab] = useState<'catalog' | 'library' | 'certificates' | 'settings'>('catalog');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeBook, setActiveBook] = useState<BookCourse | null>(null);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState<boolean>(hasCompletedOnboarding);
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategorySheetOpen, setIsCategorySheetOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<CertificateData | null>(null);
  const [verificationData, setVerificationData] = useState<any>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authUser, setAuthUser] = useState<AuthUser | null>(getStoredAuthUser);
  const [overviewBook, setOverviewBook] = useState<BookCourse | null>(null);

  // Auto-detect Certificate QR scan URL verification
  useEffect(() => {
    const verified = parseVerificationFromUrl();
    if (verified && verified.isValid) {
      setVerificationData(verified);
    }
  }, []);

  const handleOnboardingComplete = (data: {
    name: string;
    username?: string;
    pin?: string;
    companyName: string;
    industry: string;
    role: string;
    businessStage: string;
    challengeText: string;
    goalMinutes: number;
    interests: string[];
    diagnosisSummary: string;
    curatedBookIds: string[];
    websiteUrl?: string;
    socialHandle?: string;
    countryCode?: string;
  }) => {
    saveCompleteAiOnboarding(data);

    // Sync lead data to Google Sheets webhook via Cloudflare API and direct backup
    const syncPayload = {
      timestamp: new Date().toLocaleString('es-ES', { timeZone: 'America/Lima' }),
      userIntent: data.businessStage === 'idea' ? 'Quiero Emprender' : 'Ya tengo Emprendimiento',
      name: data.name,
      username: data.username || 'N/A',
      companyName: data.companyName,
      industry: data.industry,
      websiteUrl: data.websiteUrl || 'N/A',
      socialHandle: data.socialHandle || 'N/A',
      challengeText: data.challengeText || 'N/A',
      goalMinutes: `${data.goalMinutes} min/día`,
      diagnosisSummary: data.diagnosisSummary || '',
      curatedBooks: Array.isArray(data.curatedBookIds) ? data.curatedBookIds.join(', ') : '',
    };

    try {
      fetch('/api/sync-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(syncPayload),
      }).catch(() => {});
    } catch {}

    try {
      fetch('https://script.google.com/macros/s/AKfycbwAah9S4HhbdSCEC12AxAX-TEFEjuewqkvazxGTZ6apYnAONgGeze44pHxZLf0eR40/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(syncPayload),
      }).catch(() => {});
    } catch {}

    const updatedState: UserLibraryState = {
      ...userState,
      customGoalMinutes: data.goalMinutes,
      userRole: data.role,
      userInterests: data.interests,
      companyName: data.companyName,
      industry: data.industry,
      businessStage: data.businessStage,
      challengeText: data.challengeText,
      aiDiagnosisSummary: data.diagnosisSummary,
      aiCuratedBookIds: data.curatedBookIds,
      websiteUrl: data.websiteUrl,
      socialHandle: data.socialHandle,
      countryCode: data.countryCode || 'MX',
      userCurrency: data.countryCode ? (data.countryCode === 'CO' ? 'COP' : data.countryCode === 'PE' ? 'PEN' : data.countryCode === 'CL' ? 'CLP' : data.countryCode === 'AR' ? 'ARS' : 'USD') : 'MXN',
    };

    // Automatic User Account Creation in Cloud Vault by Username & PIN
    if (data.username) {
      const newAuthUser: AuthUser = {
        id: 'usr_' + Date.now().toString(36),
        name: data.name,
        username: data.username,
        createdAt: new Date().toLocaleDateString('es-ES'),
        lastSyncAt: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
      };
      setStoredAuthUser(newAuthUser);
      setAuthUser(newAuthUser);
      registerUser(data.name, data.username, data.pin || '1234', updatedState).catch(() => {});
    }

    setUserState(updatedState);
    setIsOnboardingCompleted(true);
  };

  // Apply and listen for Theme changes
  useEffect(() => {
    const isDark = applyThemeToDOM(themeMode);
    setIsDarkActive(isDark);
    saveAppThemeMode(themeMode);

    if (themeMode === 'system' && typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const dark = applyThemeToDOM('system');
        setIsDarkActive(dark);
      };

      try {
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      } catch {
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
      }
    }
  }, [themeMode]);

  const handleThemeChange = (newMode: AppThemeMode) => {
    setThemeMode(newMode);
  };

  // Save state on changes
  useEffect(() => {
    saveLibraryState(userState);
  }, [userState]);

  useEffect(() => {
    saveReaderSettings(readerSettings);
  }, [readerSettings]);

  // Periodic reading timer when reader is open
  useEffect(() => {
    if (!activeBook) return;

    const interval = setInterval(() => {
      setUserState((prev) => {
        const bookProg = getOrCreateProgress(prev, activeBook.id);
        const updatedProg: UserProgress = {
          ...bookProg,
          totalTimeSpentSeconds: bookProg.totalTimeSpentSeconds + 10,
        };
        const newTodayMinutes = prev.todayMinutesRead + 10 / 60;
        const newTotalMinutes = prev.totalMinutesRead + 10 / 60;

        return {
          ...prev,
          todayMinutesRead: Math.round(newTodayMinutes),
          totalMinutesRead: Math.round(newTotalMinutes),
          progressMap: {
            ...prev.progressMap,
            [activeBook.id]: updatedProg,
          },
        };
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [activeBook]);

  // Handle open book
  const handleOpenBook = (book: BookCourse) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    setActiveBook(book);
    // Ensure entry in user progress
    setUserState((prev) => {
      const existing = getOrCreateProgress(prev, book.id);
      return {
        ...prev,
        progressMap: {
          ...prev.progressMap,
          [book.id]: {
            ...existing,
            lastReadTimestamp: Date.now(),
          },
        },
      };
    });
  };

  // Handle toggle bookmark/favorite
  const handleToggleFavorite = (bookId: string) => {
    setUserState((prev) => {
      const existing = getOrCreateProgress(prev, bookId);
      const isFav = !existing.isFavorite;
      const newFavs = isFav
        ? [...prev.favorites.filter((id) => id !== bookId), bookId]
        : prev.favorites.filter((id) => id !== bookId);

      return {
        ...prev,
        favorites: newFavs,
        progressMap: {
          ...prev.progressMap,
          [bookId]: {
            ...existing,
            isFavorite: isFav,
          },
        },
      };
    });
  };

  // Handle progress update inside reader
  const handleUpdateProgress = (updated: Partial<UserProgress>) => {
    if (!activeBook) return;
    setUserState((prev) => {
      const existing = getOrCreateProgress(prev, activeBook.id);
      const merged: UserProgress = { ...existing, ...updated };

      // Deduplicate certificates strictly by bookId
      const certsMap = new Map<string, CertificateData>();
      (prev.certificates || []).forEach((c) => {
        if (c && c.bookId) certsMap.set(c.bookId, c);
      });

      // If marked as completed and certificate doesn't exist yet, issue 1 certificate
      if (merged.completed && !certsMap.has(activeBook.id)) {
        const newCert: CertificateData = {
          id: `cert-${Date.now()}-${activeBook.numericId}`,
          bookId: activeBook.id,
          bookTitle: activeBook.title,
          categoryName: activeBook.categoryName,
          recipientName: loadUserName() || 'Director Ejecutivo',
          issueDate: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
          score: merged.quizScore || 100,
          verificationCode: `ENK-2026-B${activeBook.numericId.toString().padStart(3, '0')}-${Math.floor(1000 + Math.random() * 9000)}`,
        };
        certsMap.set(activeBook.id, newCert);
      }

      const cleanCerts = Array.from(certsMap.values());
      const updatedMap = {
        ...prev.progressMap,
        [activeBook.id]: merged,
      };

      return {
        ...prev,
        completedBooksCount: Object.values(updatedMap).filter((p: UserProgress) => p.completed).length,
        certificates: cleanCerts,
        progressMap: updatedMap,
      };
    });
  };

  const handleOpenCertificate = (book?: BookCourse) => {
    const targetBook = book || activeBook;
    if (!targetBook) return;

    setUserState((prev) => {
      const certsMap = new Map<string, CertificateData>();
      (prev.certificates || []).forEach((c) => {
        if (c && c.bookId) certsMap.set(c.bookId, c);
      });

      let cert = certsMap.get(targetBook.id);
      if (!cert) {
        cert = {
          id: `cert-${Date.now()}-${targetBook.numericId}`,
          bookId: targetBook.id,
          bookTitle: targetBook.title,
          categoryName: targetBook.categoryName,
          recipientName: loadUserName() || 'Director Ejecutivo',
          issueDate: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
          score: 100,
          verificationCode: `ENK-2026-B${targetBook.numericId.toString().padStart(3, '0')}-${Math.floor(1000 + Math.random() * 9000)}`,
        };
        certsMap.set(targetBook.id, cert);
      }

      setActiveCertificate(cert);
      return {
        ...prev,
        certificates: Array.from(certsMap.values()),
      };
    });
  };

  const handleUpdateRecipientName = (certId: string, newName: string) => {
    setUserState((prev) => ({
      ...prev,
      certificates: prev.certificates.map((c) => (c.id === certId ? { ...c, recipientName: newName } : c)),
    }));
    if (activeCertificate && activeCertificate.id === certId) {
      setActiveCertificate((prev) => (prev ? { ...prev, recipientName: newName } : null));
    }
  };

  const handleAddReadingTime = (minutes: number = 1) => {
    setUserState((prev) => {
      const today = new Date().toISOString().split('T')[0];
      const todayMins = (prev.lastActiveDay === today ? prev.todayMinutesRead : 0) + minutes;
      const totalMins = (prev.totalMinutesRead || 0) + minutes;
      return {
        ...prev,
        lastActiveDay: today,
        todayMinutesRead: todayMins,
        totalMinutesRead: totalMins,
      };
    });
  };

  // 1. FIRST-TIME ONBOARDING SCREEN
  if (!isOnboardingCompleted) {
    return (
      <OnboardingScreen
        allBooks={allBooks}
        userState={userState}
        onRestoreState={(restoredState) => {
          setUserState(restoredState);
          setAuthUser(getStoredAuthUser());
        }}
        onComplete={handleOnboardingComplete}
      />
    );
  }

  // Filter books for catalog view
  const currentCategoryData = CATEGORIES.find((c) => c.id === selectedCategory);
  const displayedBooks = selectedCategory
    ? allBooks.filter((b) => b.categoryId === selectedCategory)
    : allBooks;

  // 2. IF A BOOK IS CURRENTLY OPEN, RENDER THE FULLSCREEN E-READER
  if (activeBook) {
    const bookProg = getOrCreateProgress(userState, activeBook.id);
    return (
      <>
        <BookReader
          book={activeBook}
          countryCode={userState.countryCode || 'MX'}
          progress={bookProg}
          settings={readerSettings}
          onUpdateSettings={setReaderSettings}
          onUpdateProgress={handleUpdateProgress}
          onAddReadingTime={handleAddReadingTime}
          onBackToLibrary={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
            setActiveBook(null);
          }}
          onOpenCertificate={() => handleOpenCertificate(activeBook)}
          themeMode={themeMode}
          onThemeChange={handleThemeChange}
          isDarkActive={isDarkActive}
        />
        {activeCertificate && (
          <CertificateModal
            certificate={activeCertificate}
            book={activeBook}
            isOpen={true}
            onClose={() => setActiveCertificate(null)}
            onUpdateRecipientName={handleUpdateRecipientName}
          />
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F7FF] dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white pb-16 md:pb-0 transition-colors duration-200">
      {/* Top Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        authUser={authUser}
        userState={userState}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        themeMode={themeMode}
        onThemeChange={handleThemeChange}
        isDarkActive={isDarkActive}
      />

      {/* View router */}
      {activeTab === 'catalog' && (
        <div className="flex-1 flex flex-col">
          {/* 24 Category Bar - Docked right below Header (Native App behavior) */}
          <CategoryNav
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onOpenCategorySheet={() => setIsCategorySheetOpen(true)}
          />

          {/* Executive Native Dashboard (Blinkist / Apple Books / Headway style) */}
          {!selectedCategory && (
            <ExecutiveDashboard
              userState={userState}
              allBooks={allBooks}
              onOpenBook={handleOpenBook}
              onOpenSearch={() => setIsSearchOpen(true)}
              onOpenCertificates={() => setActiveTab('certificates')}
            />
          )}

          {/* Catalog Body */}
          <main className="flex-1 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 w-full">
            {/* Category Header (Clean, Minimal, Apple Books Style) */}
            <div className="mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {currentCategoryData ? currentCategoryData.name : 'Biblioteca Ejecutiva'}
                  </h2>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold font-mono border border-slate-200/80 dark:border-slate-700">
                    {displayedBooks.length} tomos
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-normal">
                  {currentCategoryData
                    ? currentCategoryData.description
                    : 'Cursos ejecutivos especializados con frameworks paso a paso, casos reales y certificación oficial.'}
                </p>
              </div>

              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold self-start sm:self-auto cursor-pointer"
                >
                  ← Ver todos los tomos
                </button>
              )}
            </div>

            {/* Book Grid - 2 per line on mobile, responsive grid across breakpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {displayedBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  progress={userState.progressMap[book.id]}
                  onOpenBook={handleOpenBook}
                  onOpenOverview={(b) => setOverviewBook(b)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          </main>
        </div>
      )}

      {activeTab === 'library' && (
        <div className="flex-1">
          <MyLibrary
            userState={userState}
            allBooks={allBooks}
            onOpenBook={handleOpenBook}
            onToggleFavorite={handleToggleFavorite}
            onOpenCertificate={handleOpenCertificate}
            onRefreshState={() => setUserState(loadLibraryState())}
          />
        </div>
      )}

      {activeTab === 'certificates' && (
        <div className="flex-1">
          <CertificatesGallery
            userState={userState}
            allBooks={allBooks}
            onOpenCertificateModal={(cert) => {
              setActiveCertificate(cert);
            }}
            onOpenBook={handleOpenBook}
          />
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="flex-1">
          <SettingsView
            userState={userState}
            onUpdateUserState={setUserState}
            themeMode={themeMode}
            onThemeChange={handleThemeChange}
            readerSettings={readerSettings}
            onUpdateReaderSettings={setReaderSettings}
            onRefreshState={() => setUserState(loadLibraryState())}
            onOpenAuth={() => setIsAuthOpen(true)}
          />
        </div>
      )}

      {/* Global Mobile Bottom Navigation Bar */}
      <BottomNavBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        userState={userState}
      />

      {/* Global Category Bottom Sheet Modal for Mobile */}
      <CategoryBottomSheet
        isOpen={isCategorySheetOpen}
        onClose={() => setIsCategorySheetOpen(false)}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        allBooks={allBooks}
        onSelectBook={handleOpenBook}
      />

      {/* Auth & Cloud Sync Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        userState={userState}
        onStateUpdated={(newState) => {
          setUserState(newState);
        }}
        onAuthUserChanged={(u) => setAuthUser(u)}
      />

      {/* Certificate Modal */}
      {activeCertificate && (
        <CertificateModal
          certificate={activeCertificate}
          isOpen={true}
          onClose={() => setActiveCertificate(null)}
          onUpdateRecipientName={handleUpdateRecipientName}
        />
      )}

      {/* Official Certificate Verification Modal (Triggered by QR Code Scan) */}
      {verificationData && (
        <CertificateVerificationModal
          data={verificationData}
          isOpen={true}
          onClose={() => {
            setVerificationData(null);
            if (typeof window !== 'undefined' && window.history?.pushState) {
              const url = new URL(window.location.href);
              url.searchParams.delete('verifyCert');
              url.searchParams.delete('cert');
              url.searchParams.delete('page');
              url.searchParams.delete('n');
              url.searchParams.delete('b');
              url.searchParams.delete('c');
              url.searchParams.delete('s');
              url.searchParams.delete('d');
              url.searchParams.delete('sig');
              window.history.pushState({}, document.title, url.pathname);
            }
          }}
          onExploreCatalog={() => {
            setVerificationData(null);
            setActiveTab('catalog');
          }}
        />
      )}

      {/* Deep Learning Overview Modal (5,000 characters) */}
      {overviewBook && (
        <BookOverviewModal
          book={overviewBook}
          countryCode={userState.countryCode || 'MX'}
          isOpen={Boolean(overviewBook)}
          onClose={() => setOverviewBook(null)}
          onStartReading={(b) => {
            setOverviewBook(null);
            handleOpenBook(b);
          }}
          progress={userState.progressMap[overviewBook.id]}
        />
      )}

      {/* Footer (Desktop) */}
      <footer className="hidden md:block bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs py-6 px-4 text-center mt-auto transition-colors duration-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <EkLogo size={20} className="rounded-md shrink-0" />
            <span className="font-black text-slate-900 dark:text-white tracking-tight">ENKURSO</span>
            <span>— Biblioteca de 363 Tomos Maestros de Negocio</span>
          </div>
          <div>
            <span>30 Categorías • Frameworks Ejecutivos • 100% Offline • Mentor IA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
