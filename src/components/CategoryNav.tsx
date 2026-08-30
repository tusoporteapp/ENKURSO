import React, { useRef } from 'react';
import { CATEGORIES } from '../data/categories';
import { 
  Compass, Coins, HeartHandshake, UserPlus, Boxes, TrendingUp, Users, Zap, 
  Award, GraduationCap, Sparkles, Globe, Palette, Layout, Megaphone, Cpu, 
  BarChart3, Share2, Video, Mail, FileText, Search, Smartphone, Briefcase,
  Grid, Bot, Languages, Folder, CreditCard
} from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

interface CategoryNavProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  onOpenCategorySheet?: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Coins: <Coins className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  HeartHandshake: <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  UserPlus: <UserPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Boxes: <Boxes className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  TrendingUp: <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Users: <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Zap: <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Award: <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  GraduationCap: <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Sparkles: <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Globe: <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Palette: <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Layout: <Layout className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Megaphone: <Megaphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Cpu: <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  BarChart3: <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Share2: <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Video: <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Mail: <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  FileText: <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Search: <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Smartphone: <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Briefcase: <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Bot: <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Languages: <Languages className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  Folder: <Folder className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
  CreditCard: <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
};

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenCategorySheet,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (catId: string | null) => {
    triggerHaptic('selection');
    onSelectCategory(catId);
  };

  const handleOpenSheet = () => {
    triggerHaptic('light');
    if (onOpenCategorySheet) onOpenCategorySheet();
  };

  return (
    <div 
      id="category-nav-bar"
      className="sticky top-[calc(3.25rem+env(safe-area-inset-top,0px))] sm:top-[5rem] z-20 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/90 py-2 shadow-2xs select-none transition-colors duration-200"
    >
      <div 
        ref={scrollContainerRef}
        className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar"
      >
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
          {/* Mobile All Categories Drawer Button */}
          {onOpenCategorySheet && (
            <button
              onClick={handleOpenSheet}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-full text-xs font-bold bg-indigo-600 dark:bg-indigo-500 text-white shadow-xs shrink-0 native-touch-btn cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>30 Rutas</span>
            </button>
          )}

          {/* "Todos" button */}
          <button
            onClick={() => handleSelect(null)}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-all shrink-0 native-touch-btn cursor-pointer ${
              selectedCategory === null
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-xs'
                : 'bg-slate-100/90 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Todos</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${selectedCategory === null ? 'bg-white/20 dark:bg-black/20 text-white dark:text-slate-900' : 'bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
              363
            </span>
          </button>

          {/* 30 Categories Buttons */}
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all shrink-0 native-touch-btn cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 dark:bg-indigo-500 text-white font-bold shadow-sm shadow-indigo-300/40 dark:shadow-none'
                    : 'bg-slate-100/90 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-700 dark:hover:text-indigo-300'
                }`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                  {cat.number}
                </span>
                <span className="flex items-center gap-1.5">
                  {ICON_MAP[cat.iconName] || <Compass className="w-3.5 h-3.5" />}
                  {cat.name}
                </span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                  {cat.totalBooks}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
