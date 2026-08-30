import React from 'react';
import { Compass, Bookmark, Award, Settings as SettingsIcon } from 'lucide-react';
import { UserLibraryState, UserProgress } from '../types';
import { triggerHaptic } from '../utils/haptics';

interface BottomNavBarProps {
  activeTab: 'catalog' | 'library' | 'certificates' | 'settings';
  setActiveTab: (tab: 'catalog' | 'library' | 'certificates' | 'settings') => void;
  onOpenSearch: () => void;
  userState: UserLibraryState;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  setActiveTab,
  userState,
}) => {
  const libraryCount = Object.values(userState.progressMap).filter(
    (p: UserProgress) => (p.progressPercent || 0) > 0 || p.isFavorite
  ).length;

  const certsCount = userState.certificates.length;

  const handleTabClick = (tab: 'catalog' | 'library' | 'certificates' | 'settings') => {
    triggerHaptic('selection');
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      id="mobile-bottom-nav"
      aria-label="Navegación principal de la aplicación"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-slate-200/80 dark:border-slate-800/90 px-3 py-1 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.5)] select-none safe-bottom transition-all duration-200"
    >
      {/* Native 4-Tab Bar: Explorar, Biblioteca, Diplomas, Ajustes */}
      <div className="flex items-center justify-around max-w-md mx-auto relative">
        {/* Tab 1: Explorar */}
        <button
          id="mobile-tab-catalog"
          onClick={() => handleTabClick('catalog')}
          className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 native-touch-btn cursor-pointer ${
            activeTab === 'catalog'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <div className={`relative p-1 rounded-xl transition-all duration-200 ${
            activeTab === 'catalog' 
              ? 'bg-indigo-100/80 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 scale-105 shadow-2xs' 
              : 'bg-transparent'
          }`}>
            <Compass className="w-5 h-5 stroke-[2.2]" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">Explorar</span>
        </button>

        {/* Tab 2: Biblioteca */}
        <button
          id="mobile-tab-library"
          onClick={() => handleTabClick('library')}
          className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 native-touch-btn cursor-pointer ${
            activeTab === 'library'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <div className={`relative p-1 rounded-xl transition-all duration-200 ${
            activeTab === 'library' 
              ? 'bg-indigo-100/80 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 scale-105 shadow-2xs' 
              : 'bg-transparent'
          }`}>
            <Bookmark className="w-5 h-5 stroke-[2.2]" />
            {libraryCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 dark:bg-indigo-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-950 shadow-xs">
                {libraryCount > 9 ? '9+' : libraryCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">Biblioteca</span>
        </button>

        {/* Tab 3: Diplomas */}
        <button
          id="mobile-tab-certificates"
          onClick={() => handleTabClick('certificates')}
          className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 native-touch-btn cursor-pointer ${
            activeTab === 'certificates'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <div className={`relative p-1 rounded-xl transition-all duration-200 ${
            activeTab === 'certificates' 
              ? 'bg-indigo-100/80 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 scale-105 shadow-2xs' 
              : 'bg-transparent'
          }`}>
            <Award className="w-5 h-5 stroke-[2.2]" />
            {certsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-950 shadow-xs">
                {certsCount > 9 ? '9+' : certsCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">Diplomas</span>
        </button>

        {/* Tab 4: Ajustes */}
        <button
          id="mobile-tab-settings"
          onClick={() => handleTabClick('settings')}
          className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 native-touch-btn cursor-pointer ${
            activeTab === 'settings'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <div className={`relative p-1 rounded-xl transition-all duration-200 ${
            activeTab === 'settings' 
              ? 'bg-indigo-100/80 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 scale-105 shadow-2xs' 
              : 'bg-transparent'
          }`}>
            <SettingsIcon className="w-5 h-5 stroke-[2.2]" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">Ajustes</span>
        </button>
      </div>
    </nav>
  );
};
