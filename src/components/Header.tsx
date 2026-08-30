import React from 'react';
import { Search, Bookmark, Flame, Award, Clock, Layers, Settings as SettingsIcon, Cloud, User as UserIcon } from 'lucide-react';
import { UserLibraryState, UserProgress, AppThemeMode } from '../types';
import { EkLogo } from './EkLogo';
import { AuthUser, getStoredAuthUser } from '../utils/authSyncEngine';
import { triggerHaptic } from '../utils/haptics';

interface HeaderProps {
  activeTab: 'catalog' | 'library' | 'certificates' | 'settings';
  setActiveTab: (tab: 'catalog' | 'library' | 'certificates' | 'settings') => void;
  onOpenSearch: () => void;
  onOpenAuth?: () => void;
  authUser?: AuthUser | null;
  userState: UserLibraryState;
  selectedCategory: string | null;
  onSelectCategory: (catId: string | null) => void;
  themeMode: AppThemeMode;
  onThemeChange: (mode: AppThemeMode) => void;
  isDarkActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenAuth,
  authUser,
  userState,
  selectedCategory,
  onSelectCategory,
}) => {
  const activeUser = authUser !== undefined ? authUser : getStoredAuthUser();
  const goalProgress = Math.min(100, Math.round((userState.todayMinutesRead / userState.customGoalMinutes) * 100));

  const handleLogoClick = () => {
    triggerHaptic('light');
    setActiveTab('catalog');
    onSelectCategory(null);
  };

  const handleSearchClick = () => {
    triggerHaptic('light');
    onOpenSearch();
  };

  const handleSettingsClick = () => {
    triggerHaptic('light');
    setActiveTab('settings');
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-100 shadow-2xs select-none safe-top transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-13 sm:h-16">
          {/* Brand / Logo */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer native-touch-btn" 
            onClick={handleLogoClick}
          >
            <EkLogo size={36} className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl shadow-xs shrink-0" />
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-950 dark:text-white">
                  Enkurso
                </span>
                <span className="px-1.5 py-0.2 text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800">
                  363
                </span>
              </div>
            </div>
          </div>

          {/* Center Navigation Tabs (Desktop only) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900 p-1 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            <button
              onClick={() => {
                triggerHaptic('selection');
                setActiveTab('catalog');
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'catalog'
                  ? 'bg-indigo-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/80 dark:hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Explorar</span>
            </button>
            <button
              onClick={() => {
                triggerHaptic('selection');
                setActiveTab('library');
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'library'
                  ? 'bg-indigo-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/80 dark:hover:bg-slate-800'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Mi Biblioteca</span>
              {Object.values(userState.progressMap).filter((p: UserProgress) => (p.progressPercent || 0) > 0 || p.isFavorite).length > 0 && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === 'library' ? 'bg-white text-indigo-700' : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'}`}>
                  {Object.values(userState.progressMap).filter((p: UserProgress) => (p.progressPercent || 0) > 0 || p.isFavorite).length}
                </span>
              )}
            </button>
            <button
              onClick={() => {
                triggerHaptic('selection');
                setActiveTab('certificates');
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'certificates'
                  ? 'bg-indigo-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/80 dark:hover:bg-slate-800'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Diplomas</span>
              {userState.certificates.length > 0 && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === 'certificates' ? 'bg-white text-indigo-700' : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'}`}>
                  {userState.certificates.length}
                </span>
              )}
            </button>
            <button
              onClick={() => {
                triggerHaptic('selection');
                setActiveTab('settings');
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-indigo-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/80 dark:hover:bg-slate-800'
              }`}
            >
              <SettingsIcon className="w-3.5 h-3.5" />
              <span>Ajustes</span>
            </button>
          </nav>

          {/* Right Action Tools: Search, Streak, Settings Gear */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Search Trigger */}
            <button
              onClick={handleSearchClick}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-900 hover:bg-indigo-50/70 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 rounded-full transition-all native-touch-btn cursor-pointer"
              title="Buscar en los 363 libros"
            >
              <Search className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span className="hidden sm:inline text-slate-500 dark:text-slate-400 font-medium">Buscar...</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[9px] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded text-slate-400 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Daily Streak Badge */}
            <div 
              className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-xs font-bold shadow-xs active:scale-95 transition-transform" 
              title={`${userState.dailyStreak} días consecutivos de estudio`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-200 fill-white" />
              <span>{userState.dailyStreak}</span>
              <span className="hidden sm:inline text-amber-100 text-[11px] font-normal">días</span>
            </div>

            {/* Cloud Sync / Profile Trigger */}
            {onOpenAuth && (
              <button
                onClick={() => {
                  triggerHaptic('light');
                  onOpenAuth();
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full border transition-all native-touch-btn cursor-pointer ${
                  activeUser
                    ? 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                    : 'bg-slate-100/90 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
                title={activeUser ? `Usuario: @${activeUser.username}` : 'Acceder con PIN'}
              >
                <Cloud className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px] font-bold">
                  {activeUser ? activeUser.name.split(' ')[0] : 'Nube'}
                </span>
              </button>
            )}

            {/* Settings Quick Access Button */}
            <button
              onClick={handleSettingsClick}
              className={`p-1.5 sm:p-2 rounded-full border transition-all native-touch-btn cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-100/90 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
              title="Ajustes y Personalización"
            >
              <SettingsIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
