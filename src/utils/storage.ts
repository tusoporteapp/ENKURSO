import { UserLibraryState, UserProgress, CertificateData, ReaderSettings, AppThemeMode } from '../types';

const STORAGE_KEY = 'enkurso_user_library_v1';
const SETTINGS_KEY = 'enkurso_reader_settings_v1';
const THEME_KEY = 'enkurso_theme_mode_v1';
const USER_NAME_KEY = 'enkurso_user_name_v1';
const USER_COUNTRY_KEY = 'enkurso_user_country_v1';
const MENTOR_CHATS_KEY = 'enkurso_mentor_chats_v1';

export function loadUserName(): string {
  try {
    return localStorage.getItem(USER_NAME_KEY) || 'Director Ejecutivo';
  } catch {
    return 'Director Ejecutivo';
  }
}

export function loadUserCountry(): string {
  try {
    return localStorage.getItem(USER_COUNTRY_KEY) || 'MX';
  } catch {
    return 'MX';
  }
}

export function saveUserCountry(code: string): void {
  try {
    localStorage.setItem(USER_COUNTRY_KEY, code.toUpperCase() || 'MX');
  } catch (e) {
    console.error('Error saving user country:', e);
  }
}

export function saveUserName(name: string): void {
  try {
    localStorage.setItem(USER_NAME_KEY, name.trim() || 'Director Ejecutivo');
  } catch (e) {
    console.error('Error saving user name:', e);
  }
}

export function loadAppThemeMode(): AppThemeMode {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      return saved;
    }
    return 'system';
  } catch {
    return 'system';
  }
}

export function saveAppThemeMode(mode: AppThemeMode): void {
  try {
    localStorage.setItem(THEME_KEY, mode);
  } catch (e) {
    console.error('Error saving theme mode:', e);
  }
}

export function applyThemeToDOM(mode: AppThemeMode): boolean {
  const isDark =
    mode === 'dark' ||
    (mode === 'system' && typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (typeof document !== 'undefined') {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }

  return isDark;
}

export const DEFAULT_READER_SETTINGS: ReaderSettings = {
  theme: 'auto',
  font: 'serif',
  fontSize: 18,
  lineHeight: 1.7,
  columnWidth: 'normal',
  mode: 'scroll',
  autoScrollSpeed: 0,
};

export const INITIAL_LIBRARY_STATE: UserLibraryState = {
  progressMap: {},
  favorites: [],
  dailyStreak: 1,
  lastActiveDay: new Date().toISOString().split('T')[0],
  totalMinutesRead: 0,
  completedBooksCount: 0,
  certificates: [],
  customGoalMinutes: 20,
  todayMinutesRead: 0,
  countryCode: 'MX',
  userCurrency: 'MXN',
};

export function loadLibraryState(): UserLibraryState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_LIBRARY_STATE;
    const parsed = JSON.parse(raw);
    
    // Deduplicate certificates strictly by bookId (1 certificate per book)
    if (parsed.certificates && Array.isArray(parsed.certificates)) {
      const seenBookIds = new Set<string>();
      parsed.certificates = parsed.certificates.filter((cert: CertificateData) => {
        if (!cert || !cert.bookId || seenBookIds.has(cert.bookId)) {
          return false;
        }
        seenBookIds.add(cert.bookId);
        return true;
      });
    }

    // Check streak
    const today = new Date().toISOString().split('T')[0];
    if (parsed.lastActiveDay !== today) {
      const last = new Date(parsed.lastActiveDay || today);
      const now = new Date(today);
      const diffDays = Math.round((now.getTime() - last.getTime()) / (1000 * 3600 * 24));
      if (diffDays === 1) {
        // Continue streak
        parsed.dailyStreak = (parsed.dailyStreak || 0) + 1;
      } else if (diffDays > 1) {
        // Reset streak
        parsed.dailyStreak = 1;
      }
      parsed.lastActiveDay = today;
      parsed.todayMinutesRead = 0;
      saveLibraryState(parsed);
    }
    return { ...INITIAL_LIBRARY_STATE, ...parsed };
  } catch (e) {
    console.error('Error loading library state:', e);
    return INITIAL_LIBRARY_STATE;
  }
}

export function saveLibraryState(state: UserLibraryState): void {
  try {
    // Strictly deduplicate certificates by bookId before saving
    let certs = state.certificates || [];
    const seen = new Set<string>();
    certs = certs.filter((c) => {
      if (!c || !c.bookId || seen.has(c.bookId)) return false;
      seen.add(c.bookId);
      return true;
    });

    const cleanState: UserLibraryState = {
      ...state,
      certificates: certs,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanState));
  } catch (e) {
    console.error('Error saving library state:', e);
  }
}

export function loadReaderSettings(): ReaderSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_READER_SETTINGS;
    return { ...DEFAULT_READER_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_READER_SETTINGS;
  }
}

export function saveReaderSettings(settings: ReaderSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Error saving reader settings:', e);
  }
}

export function getOrCreateProgress(state: UserLibraryState, bookId: string): UserProgress {
  if (state.progressMap[bookId]) {
    return state.progressMap[bookId];
  }
  return {
    bookId,
    completed: false,
    progressPercent: 0,
    currentChapter: 1,
    lastReadTimestamp: Date.now(),
    totalTimeSpentSeconds: 0,
    isFavorite: false,
    actionItemsCompleted: [],
    notes: [],
    highlights: [],
  };
}

// Mentor Chat Message local storage
export interface StoredMentorMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export function loadMentorChat(bookId: string): StoredMentorMessage[] | null {
  try {
    const raw = localStorage.getItem(`${MENTOR_CHATS_KEY}_${bookId}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveMentorChat(bookId: string, messages: StoredMentorMessage[]): void {
  try {
    localStorage.setItem(`${MENTOR_CHATS_KEY}_${bookId}`, JSON.stringify(messages));
  } catch (e) {
    console.error('Error saving mentor chat:', e);
  }
}

// Full Data Backup & Restore for User Device
export function exportAllDataBackup(): string {
  const backup = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    appName: 'EnKurso',
    domain: 'EnKurso.org',
    userName: loadUserName(),
    themeMode: loadAppThemeMode(),
    readerSettings: loadReaderSettings(),
    libraryState: loadLibraryState(),
  };
  return JSON.stringify(backup, null, 2);
}

export function importAllDataBackup(jsonString: string): boolean {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || !parsed.libraryState) {
      throw new Error('Formato de respaldo no válido');
    }

    if (parsed.userName) {
      saveUserName(parsed.userName);
    }
    if (parsed.themeMode) {
      saveAppThemeMode(parsed.themeMode);
    }
    if (parsed.readerSettings) {
      saveReaderSettings(parsed.readerSettings);
    }
    if (parsed.libraryState) {
      saveLibraryState(parsed.libraryState);
    }

    return true;
  } catch (e) {
    console.error('Error restoring backup:', e);
    return false;
  }
}

// Daily AI Fair-Use Quota Management
const AI_USAGE_KEY = 'enkurso_ai_daily_usage_v1';
export const DAILY_AI_CLOUD_LIMIT = 6;

export interface DailyAiUsage {
  date: string;
  count: number;
}

export function getDailyAiUsage(): DailyAiUsage {
  const today = new Date().toISOString().split('T')[0];
  try {
    const raw = localStorage.getItem(AI_USAGE_KEY);
    if (!raw) return { date: today, count: 0 };
    const parsed = JSON.parse(raw);
    if (parsed.date !== today) {
      return { date: today, count: 0 };
    }
    return parsed;
  } catch {
    return { date: today, count: 0 };
  }
}

export function incrementDailyAiUsage(): DailyAiUsage {
  const today = new Date().toISOString().split('T')[0];
  const current = getDailyAiUsage();
  const updated: DailyAiUsage = {
    date: today,
    count: (current.count || 0) + 1,
  };
  try {
    localStorage.setItem(AI_USAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving AI usage:', e);
  }
  return updated;
}

// Executive Ranks & Gamification System
export interface ExecutiveRank {
  title: string;
  level: number;
  minCompleted: number;
  nextTitle: string;
  nextMinCompleted: number;
  progressToNext: number; // 0 to 100
  color: string;
  badge: string;
}

export function getExecutiveRank(completedCount: number): ExecutiveRank {
  if (completedCount >= 25) {
    return {
      title: 'Consejero Maestro',
      level: 5,
      minCompleted: 25,
      nextTitle: 'Leyenda Ejecutiva',
      nextMinCompleted: 50,
      progressToNext: Math.min(100, Math.round(((completedCount - 25) / 25) * 100)),
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
      badge: '👑',
    };
  }
  if (completedCount >= 10) {
    return {
      title: 'Director General',
      level: 4,
      minCompleted: 10,
      nextTitle: 'Consejero Maestro',
      nextMinCompleted: 25,
      progressToNext: Math.min(100, Math.round(((completedCount - 10) / 15) * 100)),
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/30',
      badge: '💎',
    };
  }
  if (completedCount >= 4) {
    return {
      title: 'Estratega de Escalamiento',
      level: 3,
      minCompleted: 4,
      nextTitle: 'Director General',
      nextMinCompleted: 10,
      progressToNext: Math.min(100, Math.round(((completedCount - 4) / 6) * 100)),
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/30',
      badge: '🚀',
    };
  }
  if (completedCount >= 1) {
    return {
      title: 'Estratega Operativo',
      level: 2,
      minCompleted: 1,
      nextTitle: 'Estratega de Escalamiento',
      nextMinCompleted: 4,
      progressToNext: Math.min(100, Math.round(((completedCount - 1) / 3) * 100)),
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
      badge: '⚡',
    };
  }
  return {
    title: 'Fundador Iniciado',
    level: 1,
    minCompleted: 0,
    nextTitle: 'Estratega Operativo',
    nextMinCompleted: 1,
    progressToNext: 0,
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/30',
    badge: '🎯',
  };
}

export function getLastActiveBook(state: UserLibraryState, allBooks: any[]): any | null {
  let lastBookId: string | null = null;
  let lastTime = 0;

  Object.entries(state.progressMap).forEach(([bookId, prog]) => {
    if (prog.progressPercent > 0 && !prog.completed && (prog.lastReadTimestamp || 0) >= lastTime) {
      lastTime = prog.lastReadTimestamp || 0;
      lastBookId = bookId;
    }
  });

  if (lastBookId) {
    return allBooks.find((b) => b.id === lastBookId) || null;
  }
  return null;
}

export function getDailyRecommendedBook(allBooks: any[]): any {
  if (!allBooks || allBooks.length === 0) return null;
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const index = dayOfYear % allBooks.length;
  return allBooks[index] || allBooks[0];
}

const ONBOARDING_KEY = 'enkurso_onboarding_completed_v1';
const USER_ROLE_KEY = 'enkurso_user_role_v1';
const USER_INTERESTS_KEY = 'enkurso_user_interests_v1';
const USER_COMPANY_KEY = 'enkurso_user_company_v1';
const USER_INDUSTRY_KEY = 'enkurso_user_industry_v1';
const USER_STAGE_KEY = 'enkurso_user_stage_v1';
const USER_CHALLENGE_KEY = 'enkurso_user_challenge_v1';
const USER_WEBSITE_KEY = 'enkurso_user_website_v1';
const USER_SOCIAL_KEY = 'enkurso_user_social_v1';
const AI_DIAGNOSIS_KEY = 'enkurso_ai_diagnosis_v1';
const AI_CURATED_BOOKS_KEY = 'enkurso_ai_curated_books_v1';

export function hasCompletedOnboarding(): boolean {
  try {
    return localStorage.getItem(ONBOARDING_KEY) === 'true';
  } catch {
    return true; // Fallback
  }
}

export function loadUserRole(): string {
  try {
    return localStorage.getItem(USER_ROLE_KEY) || 'Fundador / Emprendedor';
  } catch {
    return 'Fundador / Emprendedor';
  }
}

export function saveUserRole(role: string): void {
  try {
    localStorage.setItem(USER_ROLE_KEY, role.trim());
  } catch (e) {
    console.error('Error saving user role:', e);
  }
}

export function loadUserCompany(): string {
  try {
    return localStorage.getItem(USER_COMPANY_KEY) || 'Mi Empresa';
  } catch {
    return 'Mi Empresa';
  }
}

export function saveUserCompany(company: string): void {
  try {
    localStorage.setItem(USER_COMPANY_KEY, company.trim());
  } catch (e) {
    console.error('Error saving company name:', e);
  }
}

export function loadUserIndustry(): string {
  try {
    return localStorage.getItem(USER_INDUSTRY_KEY) || 'Servicios & Negocios';
  } catch {
    return 'Servicios & Negocios';
  }
}

export function saveUserIndustry(industry: string): void {
  try {
    localStorage.setItem(USER_INDUSTRY_KEY, industry.trim());
  } catch (e) {
    console.error('Error saving industry:', e);
  }
}

export function loadUserWebsite(): string {
  try {
    return localStorage.getItem(USER_WEBSITE_KEY) || '';
  } catch {
    return '';
  }
}

export function saveUserWebsite(url: string): void {
  try {
    localStorage.setItem(USER_WEBSITE_KEY, url.trim());
  } catch (e) {
    console.error('Error saving user website:', e);
  }
}

export function loadUserSocial(): string {
  try {
    return localStorage.getItem(USER_SOCIAL_KEY) || '';
  } catch {
    return '';
  }
}

export function saveUserSocial(social: string): void {
  try {
    localStorage.setItem(USER_SOCIAL_KEY, social.trim());
  } catch (e) {
    console.error('Error saving user social:', e);
  }
}

export function loadBusinessStage(): string {
  try {
    return localStorage.getItem(USER_STAGE_KEY) || 'early_growth';
  } catch {
    return 'early_growth';
  }
}

export function saveBusinessStage(stage: string): void {
  try {
    localStorage.setItem(USER_STAGE_KEY, stage);
  } catch (e) {
    console.error('Error saving stage:', e);
  }
}

export function loadUserChallenge(): string {
  try {
    return localStorage.getItem(USER_CHALLENGE_KEY) || '';
  } catch {
    return '';
  }
}

export function saveUserChallenge(challenge: string): void {
  try {
    localStorage.setItem(USER_CHALLENGE_KEY, challenge.trim());
  } catch (e) {
    console.error('Error saving challenge:', e);
  }
}

export function loadAiDiagnosis(): string {
  try {
    return localStorage.getItem(AI_DIAGNOSIS_KEY) || '';
  } catch {
    return '';
  }
}

export function saveAiDiagnosis(diagnosis: string): void {
  try {
    localStorage.setItem(AI_DIAGNOSIS_KEY, diagnosis.trim());
  } catch (e) {
    console.error('Error saving AI diagnosis:', e);
  }
}

export function loadAiCuratedBookIds(): string[] {
  try {
    const raw = localStorage.getItem(AI_CURATED_BOOKS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  return [];
}

export function saveAiCuratedBookIds(bookIds: string[]): void {
  try {
    localStorage.setItem(AI_CURATED_BOOKS_KEY, JSON.stringify(bookIds));
  } catch (e) {
    console.error('Error saving curated book ids:', e);
  }
}

export function loadUserInterests(): string[] {
  try {
    const raw = localStorage.getItem(USER_INTERESTS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  return ['cat-1', 'cat-6', 'cat-15']; // Default core disciplines
}

export function saveUserInterests(interests: string[]): void {
  try {
    localStorage.setItem(USER_INTERESTS_KEY, JSON.stringify(interests));
  } catch (e) {
    console.error('Error saving user interests:', e);
  }
}

export function saveCompleteAiOnboarding(data: {
  name: string;
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
}): void {
  try {
    saveUserName(data.name);
    saveUserCompany(data.companyName);
    saveUserIndustry(data.industry);
    saveUserRole(data.role);
    saveBusinessStage(data.businessStage);
    saveUserChallenge(data.challengeText);
    saveUserInterests(data.interests);
    saveAiDiagnosis(data.diagnosisSummary);
    saveAiCuratedBookIds(data.curatedBookIds);
    if (data.websiteUrl) saveUserWebsite(data.websiteUrl);
    if (data.socialHandle) saveUserSocial(data.socialHandle);
    localStorage.setItem(ONBOARDING_KEY, 'true');
  } catch (e) {
    console.error('Error saving complete AI onboarding:', e);
  }
}

export function getPersonalizedRecommendations(allBooks: any[], userInterests: string[]): any[] {
  if (!allBooks || allBooks.length === 0) return [];
  if (!userInterests || userInterests.length === 0) return allBooks.slice(0, 8);

  const matched = allBooks.filter((book) => userInterests.includes(book.categoryId));
  if (matched.length >= 4) return matched;

  // Fallback: fill up to 8 books with top catalog items
  const extra = allBooks.filter((b) => !matched.some((m) => m.id === b.id));
  return [...matched, ...extra].slice(0, 8);
}

export function factoryResetAllData(): void {
  try {
    if (typeof localStorage !== 'undefined') {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && (k.startsWith('enkurso_') || k.includes('enkurso'))) {
          keysToRemove.push(k);
        }
      }
      keysToRemove.forEach((k) => localStorage.removeItem(k));
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(SETTINGS_KEY);
      localStorage.removeItem(THEME_KEY);
      localStorage.removeItem(USER_NAME_KEY);
      localStorage.removeItem(ONBOARDING_KEY);
      localStorage.removeItem(USER_ROLE_KEY);
      localStorage.removeItem(USER_INTERESTS_KEY);
      localStorage.removeItem(USER_COMPANY_KEY);
      localStorage.removeItem(USER_INDUSTRY_KEY);
      localStorage.removeItem(USER_STAGE_KEY);
      localStorage.removeItem(USER_CHALLENGE_KEY);
      localStorage.removeItem(AI_DIAGNOSIS_KEY);
      localStorage.removeItem(AI_CURATED_BOOKS_KEY);
      localStorage.removeItem('enkurso_daily_ai_usage_v1');
    }
  } catch (e) {
    console.error('Error during factory reset:', e);
  }
}


