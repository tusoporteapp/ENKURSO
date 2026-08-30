export interface Category {
  id: string;
  number: number;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  color: {
    bg: string;
    border: string;
    text: string;
    gradient: string;
    accent: string;
    spine: string;
  };
  totalBooks: number;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  content: string[];
  keyInsight?: string;
  practicalTip?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ActionItem {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  priority: 'Alta' | 'Media' | 'Estratégica';
}

export interface BookCourse {
  id: string;
  numericId: number;
  categoryNumber: number;
  categoryId: string;
  categoryName: string;
  title: string;
  subtitle: string;
  author: string;
  edition: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  readTimeMinutes: number;
  wordCount: number;
  rating: number;
  reviewCount: number;
  summary: string;
  learningOverview?: string;
  tags: string[];
  chapters: Chapter[];
  keyTakeaways: string[];
  actionPlan: ActionItem[];
  quiz: QuizQuestion[];
}

export type AppThemeMode = 'light' | 'dark' | 'system';

export type ReaderTheme = 'auto' | 'editorial' | 'sepia' | 'dark' | 'midnight' | 'paper';
export type ReaderFont = 'serif' | 'sans' | 'mono';
export type ReadingMode = 'paginated' | 'scroll';

export interface ReaderSettings {
  theme: ReaderTheme;
  font: ReaderFont;
  fontSize: number; // in px, e.g., 16, 18, 20, 22
  lineHeight: number; // 1.5, 1.7, 1.9
  columnWidth: 'normal' | 'wide' | 'narrow';
  mode: ReadingMode;
  autoScrollSpeed: number; // 0 = off, 1-5
}

export interface UserProgress {
  bookId: string;
  completed: boolean;
  progressPercent: number;
  currentChapter: number;
  lastReadTimestamp: number;
  totalTimeSpentSeconds: number;
  isFavorite: boolean;
  quizScore?: number;
  quizCompleted?: boolean;
  actionItemsCompleted: string[];
  notes: UserNote[];
  highlights: UserHighlight[];
}

export interface UserNote {
  id: string;
  bookId?: string;
  chapterNumber: number;
  chapterTitle?: string;
  text: string;
  createdDate?: string;
  timestamp?: number;
  selectedText?: string;
}

export interface UserHighlight {
  id: string;
  bookId: string;
  chapterNumber: number;
  text: string;
  color: 'yellow' | 'green' | 'blue' | 'purple';
  timestamp: number;
}

export interface CertificateData {
  id: string;
  certificateId?: string;
  bookId: string;
  bookTitle: string;
  categoryName: string;
  recipientName: string;
  issueDate: string;
  score: number;
  verificationCode: string;
}

export interface UserLibraryState {
  progressMap: Record<string, UserProgress>;
  favorites: string[];
  dailyStreak: number;
  lastActiveDay: string;
  totalMinutesRead: number;
  completedBooksCount: number;
  certificates: CertificateData[];
  customGoalMinutes: number;
  todayMinutesRead: number;
  userRole?: string;
  userInterests?: string[];
  companyName?: string;
  industry?: string;
  businessStage?: string;
  challengeText?: string;
  aiDiagnosisSummary?: string;
  aiCuratedBookIds?: string[];
  websiteUrl?: string;
  socialHandle?: string;
  countryCode?: string;
  userCurrency?: string;
}

