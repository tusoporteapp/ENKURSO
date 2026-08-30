import React, { useState } from 'react';
import { 
  User, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Target, 
  Compass, 
  BookOpen, 
  TrendingUp, 
  Briefcase, 
  DollarSign, 
  Users, 
  Smartphone, 
  Layers, 
  Award,
  ChevronLeft,
  Building2,
  HelpCircle,
  BrainCircuit,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Globe,
  Share2,
  Lightbulb,
  Rocket,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  Zap,
  KeyRound,
  Lock,
  AtSign,
  Cloud,
  RefreshCw
} from 'lucide-react';
import { EkLogo } from './EkLogo';
import { BookCourse, UserLibraryState } from '../types';
import { BookOverviewModal } from './BookOverviewModal';
import { SUPPORTED_COUNTRIES, getCountryConfig } from '../utils/currencyEngine';
import { runAiBusinessDiagnosis, AiDiagnosticResult } from '../utils/aiDiagnosticEngine';
import { loginUser, AuthUser } from '../utils/authSyncEngine';
import { triggerHaptic } from '../utils/haptics';
import confetti from 'canvas-confetti';

interface OnboardingScreenProps {
  allBooks: BookCourse[];
  userState?: UserLibraryState;
  onRestoreState?: (merged: UserLibraryState) => void;
  onComplete: (data: {
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
  }) => void;
}

const INDUSTRIES = [
  { id: 'E-commerce & Retail Digital', icon: '🛍️', label: 'E-commerce & Retail' },
  { id: 'Servicios Profesionales / B2B', icon: '💼', label: 'Servicios B2B / Consultoría' },
  { id: 'Software, SaaS & Tecnología', icon: '💻', label: 'Software, SaaS & Tech' },
  { id: 'Gastronomía & Restaurantes', icon: '🍽️', label: 'Gastronomía & Alimentos' },
  { id: 'Salud, Belleza & Bienestar', icon: '✨', label: 'Salud, Belleza & Bienestar' },
  { id: 'Educación & Coaching', icon: '🎓', label: 'Educación, Cursos & Coaching' },
  { id: 'Construcción & Bienes Raíces', icon: '🏗️', label: 'Bienes Raíces & Construcción' },
  { id: 'Comercio Tradicional', icon: '📦', label: 'Comercio & Distribución' },
  { id: 'Agencia Creativa & Marketing', icon: '🎨', label: 'Agencia & Marketing' },
  { id: 'Otro Sector Empresarial', icon: '🌐', label: 'Otro Sector de Negocio' },
];

const STUDY_GOALS = [
  { mins: 10, label: '10 min al día', sub: '1 tomo cada 10 días', icon: '🌱' },
  { mins: 15, label: '15 min al día', sub: '1 tomo por semana (Recomendado)', isPopular: true, icon: '🔥' },
  { mins: 30, label: '30 min al día', sub: '2 tomos por semana (Modo Director)', icon: '⚡' },
  { mins: 45, label: '45+ min al día', sub: 'Inmersión Total Ejecutiva', icon: '👑' },
];

const QUICK_CHALLENGES = [
  { text: 'Aumentar ventas y captar más clientes', icon: '🎯' },
  { text: 'Optimizar nuestro sitio web y conversión', icon: '🌐' },
  { text: 'Reducir costos y mejorar rentabilidad neta', icon: '💰' },
  { text: 'Delegar tareas y liberar mi tiempo operativo', icon: '👥' },
  { text: 'Escalar marketing digital, redes y anuncios', icon: '📱' },
  { text: 'Fidelizar clientes y aumentar recurrencia (LTV)', icon: '🔄' },
  { text: 'Crear un plan estratégico con KPIs claros', icon: '📈' },
];

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ 
  allBooks, 
  userState, 
  onRestoreState, 
  onComplete 
}) => {
  const [userIntent, setUserIntent] = useState<'want_to_start' | 'have_business' | 'login_existing' | null>(null);
  const [step, setStep] = useState<number>(1);

  // Form Data
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('MX');
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [socialHandle, setSocialHandle] = useState('');
  const [industry, setIndustry] = useState(INDUSTRIES[0].id);
  const [challengeText, setChallengeText] = useState('');
  const [goalMinutes, setGoalMinutes] = useState(15);

  // Login Specific
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPin, setLoginPin] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Validations
  const [nameError, setNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [companyError, setCompanyError] = useState(false);

  // AI States
  const [diagnosticResult, setDiagnosticResult] = useState<AiDiagnosticResult | null>(null);
  const [aiLoadingPhase, setAiLoadingPhase] = useState('Iniciando...');
  const [previewBook, setPreviewBook] = useState<BookCourse | null>(null);

  const totalSteps = userIntent === 'want_to_start' ? 4 : userIntent === 'have_business' ? 7 : 1;

  // Auto-generate a clean username candidate from user's full name
  const suggestUsername = (fullName: string) => {
    if (!username && fullName.trim()) {
      const parts = fullName.trim().toLowerCase().split(' ');
      const candidate = parts.length > 1 ? `${parts[0]}.${parts[parts.length - 1]}` : parts[0];
      setUsername(candidate.replace(/[^a-z0-9_.]/g, ''));
    }
  };

  const handleSelectFork = (intent: 'want_to_start' | 'have_business' | 'login_existing') => {
    triggerHaptic('selection');
    setUserIntent(intent);
    setStep(1);
  };

  const handleBack = () => {
    triggerHaptic('light');
    if (step > 1) {
      setStep(step - 1);
    } else {
      setUserIntent(null);
      setStep(1);
    }
  };

  // FLOW LOGIN EXISTING
  const handleExistingLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginUsername.trim() || !loginPin.trim()) {
      setLoginError('Por favor ingresa tu usuario y PIN.');
      triggerHaptic('warning');
      return;
    }

    setIsLoggingIn(true);
    setLoginError(null);
    triggerHaptic('medium');

    const baseState = userState || {
      progressMap: {},
      favorites: [],
      dailyStreak: 1,
      lastActiveDay: new Date().toISOString().split('T')[0],
      totalMinutesRead: 0,
      completedBooksCount: 0,
      certificates: [],
      customGoalMinutes: 15,
      todayMinutesRead: 0,
    };

    const res = await loginUser(loginUsername, loginPin, baseState);
    setIsLoggingIn(false);

    if (res.success && res.user) {
      triggerHaptic('success');
      try {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } catch {}

      if (res.mergedState && onRestoreState) {
        onRestoreState(res.mergedState);
      }

      onComplete({
        name: res.user.name || loginUsername,
        username: res.user.username,
        pin: loginPin,
        companyName: res.mergedState?.companyName || 'Mi Empresa',
        industry: res.mergedState?.industry || 'General',
        role: res.mergedState?.userRole || 'Director',
        businessStage: res.mergedState?.businessStage || 'active',
        challengeText: res.mergedState?.challengeText || '',
        goalMinutes: res.mergedState?.customGoalMinutes || 15,
        interests: res.mergedState?.userInterests || ['cat-1', 'cat-6'],
        diagnosisSummary: res.mergedState?.aiDiagnosisSummary || 'Historial restaurado desde la nube.',
        curatedBookIds: res.mergedState?.aiCuratedBookIds || [],
      });
    } else {
      setLoginError(res.error || 'Usuario o PIN incorrectos.');
      triggerHaptic('error');
    }
  };

  // FLOW A: QUIERO EMPRENDER
  const handleNextA_Name = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!name.trim()) {
      setNameError(true);
      triggerHaptic('warning');
      return;
    }
    setNameError(false);
    suggestUsername(name);
    triggerHaptic('medium');
    setStep(2);
  };

  const handleNextA_Account = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!username.trim()) {
      setUsernameError(true);
      triggerHaptic('warning');
      return;
    }
    setUsernameError(false);
    triggerHaptic('medium');
    setStep(3);
  };

  const handleNextA_Sector = (selectedInd: string) => {
    triggerHaptic('selection');
    setIndustry(selectedInd);
    setStep(4);
  };

  const handleFinishA_Goal = (mins: number) => {
    triggerHaptic('medium');
    setGoalMinutes(mins);
    setStep(5); // Loading
    setAiLoadingPhase('Estructurando tu Ruta y Vinculando tu PIN...');

    setTimeout(() => {
      const result = runAiBusinessDiagnosis(
        {
          userIntent: 'want_to_start',
          name: name.trim() || 'Futuro Emprendedor',
          industry,
          goalMinutes: mins,
        },
        allBooks
      );
      setDiagnosticResult(result);
      triggerHaptic('success');
      setStep(6); // Result
    }, 1200);
  };

  // FLOW B: YA TENGO NEGOCIO
  const handleNextB_Name = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!name.trim()) {
      setNameError(true);
      triggerHaptic('warning');
      return;
    }
    setNameError(false);
    suggestUsername(name);
    triggerHaptic('medium');
    setStep(2);
  };

  const handleNextB_Account = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!username.trim()) {
      setUsernameError(true);
      triggerHaptic('warning');
      return;
    }
    setUsernameError(false);
    triggerHaptic('medium');
    setStep(3);
  };

  const handleNextB_Company = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!companyName.trim()) {
      setCompanyError(true);
      triggerHaptic('warning');
      return;
    }
    setCompanyError(false);
    triggerHaptic('medium');
    setStep(4);
  };

  const handleNextB_Sector = (selectedInd: string) => {
    triggerHaptic('selection');
    setIndustry(selectedInd);
    setStep(5);
  };

  const handleNextB_Web = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    triggerHaptic('medium');
    setStep(6);
  };

  const handleSkipB_Web = () => {
    triggerHaptic('light');
    setWebsiteUrl('');
    setStep(6);
  };

  const handleNextB_Challenge = (chipText?: string) => {
    triggerHaptic('medium');
    const text = chipText || challengeText;
    setChallengeText(text);
    setStep(7);
  };

  const handleStartB_Audit = async (mins: number) => {
    triggerHaptic('medium');
    setGoalMinutes(mins);
    setStep(8); // Loading AI

    let extractedWebInfo = undefined;
    setAiLoadingPhase(
      websiteUrl || socialHandle
        ? '🌐 Conectando e inspeccionando presencia digital...' 
        : '🔍 Auditando modelo operativo de ' + (companyName || 'tu negocio') + '...'
    );

    if (websiteUrl || socialHandle) {
      try {
        const fetchPromise = fetch('/api/analyze-url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: websiteUrl, socialHandle }),
        });
        const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 2000));
        const res = await Promise.race([fetchPromise, timeoutPromise]);
        if (res && typeof (res as any).json === 'function') {
          const json = await (res as any).json();
          if (json?.data) {
            extractedWebInfo = {
              title: json.data.extractedTitle,
              description: json.data.extractedDescription,
            };
          }
        }
      } catch (e) {}
    }

    setTimeout(() => {
      setAiLoadingPhase('⚖️ Evaluando puntos ciegos en ' + industry + '...');
    }, 900);

    setTimeout(() => {
      setAiLoadingPhase('📚 Diseñando plan de estudio y vinculando tu cuenta...');
    }, 1800);

    setTimeout(() => {
      const result = runAiBusinessDiagnosis(
        {
          userIntent: 'have_business',
          name: name.trim() || 'Director Ejecutivo',
          companyName: companyName.trim() || 'Mi Empresa',
          industry,
          businessStage: 'early_growth',
          challengeText,
          goalMinutes: mins,
          websiteUrl: websiteUrl.trim(),
          socialHandle: socialHandle.trim(),
          extractedWebInfo,
        },
        allBooks
      );
      setDiagnosticResult(result);
      triggerHaptic('success');
      setStep(9);
    }, 2800);
  };

  const handleCompleteAll = () => {
    triggerHaptic('success');
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch {}

    const bookIds = diagnosticResult ? diagnosticResult.recommendedBooks.map((b) => b.book.id) : [];
    const interests = diagnosticResult
      ? Array.from(new Set(diagnosticResult.recommendedBooks.map((b) => b.book.categoryId)))
      : ['cat-1', 'cat-6', 'cat-15'];

    onComplete({
      name: name.trim() || 'Director Ejecutivo',
      username: username.trim() || 'usuario_' + Date.now().toString(36),
      pin: pin.trim() || '1234',
      companyName: companyName.trim() || (userIntent === 'want_to_start' ? 'Nuevo Proyecto' : 'Mi Empresa'),
      industry,
      role: userIntent === 'want_to_start' ? 'Futuro Fundador' : 'Fundador / CEO',
      businessStage: userIntent === 'want_to_start' ? 'idea' : 'early_growth',
      challengeText,
      goalMinutes,
      interests,
      diagnosisSummary: diagnosticResult?.diagnosisSummary || '',
      curatedBookIds: bookIds,
      websiteUrl: websiteUrl.trim(),
      socialHandle: socialHandle.trim(),
      countryCode,
    });
  };

  return (
    <div className="h-screen h-dvh flex flex-col bg-[#F4F7FF] dark:bg-slate-950 text-slate-800 dark:text-white select-none relative overflow-hidden transition-colors duration-200">
      {/* Subtle Background Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* 1. FIXED TOP HEADER */}
      <header className="sticky top-0 z-30 bg-white/85 dark:bg-slate-950/90 backdrop-blur-2xl border-b border-slate-200/80 dark:border-white/5 safe-top shrink-0 pt-2 pb-2.5 px-4 sm:px-6 transition-colors">
        <div className="max-w-xl w-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {userIntent && (
              <button
                onClick={handleBack}
                className="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer native-touch-btn"
                title="Atrás"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <EkLogo size={32} className="rounded-xl shadow-xs shrink-0" />
            <div>
              <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white font-mono block leading-tight">EnKurso</span>
              <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono">
                {userIntent === 'have_business' ? 'Diagnóstico & Cuenta' : userIntent === 'want_to_start' ? 'Lanzamiento & Cuenta' : userIntent === 'login_existing' ? 'Iniciar Sesión' : 'Bienvenido'}
              </span>
            </div>
          </div>

          {/* Progress Indicators */}
          {userIntent && userIntent !== 'login_existing' && step <= totalSteps && (
            <div className="flex items-center gap-1">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i + 1 === step
                      ? 'w-6 bg-indigo-600 dark:bg-indigo-500 shadow-xs shadow-indigo-500/50'
                      : i + 1 < step
                      ? 'w-2 bg-indigo-500/80 dark:bg-indigo-400/80'
                      : 'w-2 bg-slate-200 dark:bg-white/15'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </header>

      {/* 2. MAIN SCROLLABLE BODY */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 max-w-xl w-full mx-auto flex flex-col justify-center no-scrollbar">
        
        {/* SCREEN 0: BIFURCATION & LOGIN OPTION */}
        {!userIntent && (
          <div className="space-y-5 text-center animate-in fade-in zoom-in-95 duration-200 my-auto">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                <span>Diagnóstico Inteligente de Aprendizaje</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                ¿Cuál es tu objetivo actual?
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                Personalizaremos tu plan de 363 tomos y crearemos tu acceso seguro por PIN sin correos.
              </p>
            </div>

            <div className="space-y-2.5 pt-1">
              {/* Option A: Quiero Emprender */}
              <button
                type="button"
                onClick={() => handleSelectFork('want_to_start')}
                className="w-full p-4 rounded-2xl bg-white dark:bg-white/[0.03] hover:bg-slate-50 dark:hover:bg-white/[0.07] active:scale-[0.98] border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/50 text-left transition-all group cursor-pointer flex items-center gap-4 shadow-sm dark:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-lg shrink-0 shadow-md group-hover:scale-105 transition-transform text-white">
                  💡
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    Quiero emprender
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Tengo una idea o proyecto por lanzar desde cero.
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </button>

              {/* Option B: Ya tengo negocio */}
              <button
                type="button"
                onClick={() => handleSelectFork('have_business')}
                className="w-full p-4 rounded-2xl bg-white dark:bg-white/[0.03] hover:bg-slate-50 dark:hover:bg-white/[0.07] active:scale-[0.98] border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/50 text-left transition-all group cursor-pointer flex items-center gap-4 shadow-sm dark:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-lg shrink-0 shadow-md group-hover:scale-105 transition-transform text-white">
                  🚀
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    Ya tengo un negocio / empresa
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Auditar puntos ciegos, escalar ventas y rentabilidad.
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </button>

              {/* Option C: Ya tengo cuenta / Iniciar sesión */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleSelectFork('login_existing')}
                  className="w-full py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-xs font-bold text-indigo-600 dark:text-indigo-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.98]"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>¿Ya tienes cuenta creada? Iniciar Sesión con PIN</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            FLOW LOGIN EXISTING: INICIAR SESIÓN CON PIN
        ========================================================================= */}
        {userIntent === 'login_existing' && (
          <div className="space-y-6 my-auto animate-in fade-in">
            <div className="space-y-1.5 text-center">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-sm">
                <KeyRound className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                Iniciar Sesión
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                Ingresa tu usuario y PIN para recuperar todos tus libros leídos, notas y certificados.
              </p>
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-300 text-xs font-semibold animate-in fade-in">
                {loginError}
              </div>
            )}

            <form onSubmit={handleExistingLogin} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400 pl-1">
                  Nombre de Usuario (@alias)
                </label>
                <div className="relative">
                  <AtSign className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    placeholder="ej: carlos_director"
                    autoFocus
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:border-indigo-500 rounded-2xl py-3 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-xs font-mono"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400 pl-1">
                  PIN de Acceso (4 a 6 dígitos)
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={loginPin}
                    onChange={(e) => setLoginPin(e.target.value)}
                    placeholder="Ej: 1234"
                    maxLength={6}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:border-indigo-500 rounded-2xl py-3 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-xs font-mono"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isLoggingIn ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Restaurando Historial...</span>
                  </>
                ) : (
                  <>
                    <span>Entrar y Restaurar mi Progreso</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* FLOW A: QUIERO EMPRENDER */}
        {userIntent === 'want_to_start' && (
          <>
            {/* A1: Nombre */}
            {step === 1 && (
              <form onSubmit={handleNextA_Name} className="space-y-6 my-auto animate-in fade-in">
                <div className="space-y-1.5 text-center">
                  <span className="text-[11px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono font-bold">Paso 1 de 4</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">¿Cómo te llamas?</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Para personalizar tu plan y emitir tus diplomas oficiales.</p>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (nameError) setNameError(false);
                      }}
                      placeholder="Tu nombre completo"
                      autoFocus
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:border-indigo-500 rounded-2xl py-3.5 pl-12 pr-4 text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-xs"
                    />
                  </div>
                  {nameError && <p className="text-xs text-rose-500 dark:text-rose-400 pl-2">Ingresa tu nombre para continuar.</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continuar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* A2: Usuario & PIN */}
            {step === 2 && (
              <form onSubmit={handleNextA_Account} className="space-y-6 my-auto animate-in fade-in">
                <div className="space-y-1.5 text-center">
                  <span className="text-[11px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono font-bold">Paso 2 de 4</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">Crea tu Usuario y PIN</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Sin correos ni spam. Podrás acceder a tus diplomas desde cualquier dispositivo.</p>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400 pl-1">Nombre de Usuario (@alias)</label>
                    <div className="relative">
                      <AtSign className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                          if (usernameError) setUsernameError(false);
                        }}
                        placeholder="ej: carlos_director"
                        autoFocus
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:border-indigo-500 rounded-2xl py-3 pl-12 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-xs font-mono"
                        required
                      />
                    </div>
                    {usernameError && <p className="text-xs text-rose-500 dark:text-rose-400 pl-2">Ingresa un nombre de usuario.</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400 pl-1">PIN de Acceso (4 dígitos)</label>
                    <div className="relative">
                      <KeyRound className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="Ej: 1234"
                        maxLength={6}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:border-indigo-500 rounded-2xl py-3 pl-12 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-xs font-mono"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continuar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* A3: Sector */}
            {step === 3 && (
              <div className="space-y-4 my-auto animate-in fade-in">
                <div className="space-y-1.5 text-center">
                  <span className="text-[11px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono font-bold">Paso 3 de 4</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">¿En qué sector quieres emprender?</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Selecciona con un toque para filtrar los tomos pertinentes.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto no-scrollbar p-1">
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => handleNextA_Sector(ind.id)}
                      className="p-3 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-indigo-50 dark:hover:bg-indigo-600/20 active:scale-[0.97] border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/50 text-left transition-all flex items-center gap-2.5 cursor-pointer shadow-2xs"
                    >
                      <span className="text-lg">{ind.icon}</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{ind.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* A4: Meta Diaria */}
            {step === 4 && (
              <div className="space-y-4 my-auto animate-in fade-in text-center">
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono font-bold">Paso 4 de 4</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">¿Cuánto tiempo diario dedicarás?</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Elige tu ritmo de lectura y maestría ejecutiva.</p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {STUDY_GOALS.map((g) => (
                    <button
                      key={g.mins}
                      type="button"
                      onClick={() => handleFinishA_Goal(g.mins)}
                      className="w-full p-3.5 rounded-2xl bg-white dark:bg-white/[0.03] hover:bg-indigo-50 dark:hover:bg-indigo-600/20 active:scale-[0.98] border border-slate-200/80 dark:border-white/10 hover:border-indigo-500 text-left transition-all flex items-center justify-between cursor-pointer shadow-2xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{g.icon}</span>
                        <div>
                          <span className="text-sm font-bold text-slate-900 dark:text-white block">{g.label}</span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">{g.sub}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* A5: Loading Phase */}
            {step === 5 && (
              <div className="space-y-6 my-auto text-center animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-3xl bg-indigo-50 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto animate-spin shadow-md">
                  <BrainCircuit className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Configurando tu Usuario & Plan</h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">{aiLoadingPhase}</p>
                </div>
              </div>
            )}

            {/* A6: Diagnostic Result Plan */}
            {step === 6 && diagnosticResult && (
              <div className="space-y-5 my-auto animate-in fade-in">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-200 dark:border-indigo-500/30 text-center space-y-2 shadow-xs">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">
                    <Cloud className="w-3.5 h-3.5" />
                    <span>Plan Listo para @{username || name.split(' ')[0]}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    Ruta de Emprendimiento Acelerado
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {diagnosticResult.diagnosisSummary}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] uppercase font-mono text-slate-500 dark:text-slate-400 tracking-wider">
                    Tomos Maestros Recomendados:
                  </span>
                  <div className="space-y-1.5 max-h-40 overflow-y-auto no-scrollbar">
                    {diagnosticResult.recommendedBooks.map((rec, i) => (
                      <div key={rec.book.id} className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/5 flex items-center justify-between text-xs shadow-2xs">
                        <span className="font-semibold text-slate-800 dark:text-white truncate max-w-[240px]">
                          {i + 1}. {rec.book.title}
                        </span>
                        <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono shrink-0">{rec.priority}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCompleteAll}
                  className="w-full py-4 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Comenzar a Aprender Ahora</span>
                </button>
              </div>
            )}
          </>
        )}

        {/* FLOW B: YA TENGO EMPRENDIMIENTO */}
        {userIntent === 'have_business' && (
          <>
            {/* B1: Nombre */}
            {step === 1 && (
              <form onSubmit={handleNextB_Name} className="space-y-6 my-auto animate-in fade-in">
                <div className="space-y-1.5 text-center">
                  <span className="text-[11px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono font-bold">Paso 1 de 7</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">¿Cuál es tu nombre?</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Para personalizar la auditoría de tu empresa y emitir tus certificados oficiales.</p>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (nameError) setNameError(false);
                      }}
                      placeholder="Tu nombre completo"
                      autoFocus
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:border-indigo-500 rounded-2xl py-3.5 pl-12 pr-4 text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-xs"
                    />
                  </div>
                  {nameError && <p className="text-xs text-rose-500 dark:text-rose-400 pl-2">Ingresa tu nombre para continuar.</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continuar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* B2: Usuario & PIN */}
            {step === 2 && (
              <form onSubmit={handleNextB_Account} className="space-y-6 my-auto animate-in fade-in">
                <div className="space-y-1.5 text-center">
                  <span className="text-[11px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono font-bold">Paso 2 de 7</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">Crea tu Usuario y PIN</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Sin necesidad de correos. Para acceder a tu empresa y diplomas desde cualquier lugar.</p>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400 pl-1">Nombre de Usuario (@alias)</label>
                    <div className="relative">
                      <AtSign className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                          if (usernameError) setUsernameError(false);
                        }}
                        placeholder="ej: carlos_director"
                        autoFocus
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:border-indigo-500 rounded-2xl py-3 pl-12 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-xs font-mono"
                        required
                      />
                    </div>
                    {usernameError && <p className="text-xs text-rose-500 dark:text-rose-400 pl-2">Ingresa un nombre de usuario.</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400 pl-1">PIN de Acceso (4 dígitos)</label>
                    <div className="relative">
                      <KeyRound className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="Ej: 1234"
                        maxLength={6}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:border-indigo-500 rounded-2xl py-3 pl-12 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-xs font-mono"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continuar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* B3: Nombre de la Empresa */}
            {step === 3 && (
              <form onSubmit={handleNextB_Company} className="space-y-6 my-auto animate-in fade-in">
                <div className="space-y-1.5 text-center">
                  <span className="text-[11px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono font-bold">Paso 3 de 7</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">¿Cómo se llama tu negocio?</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Ingresa el nombre comercial o marca de tu empresa.</p>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Building2 className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                        if (companyError) setCompanyError(false);
                      }}
                      placeholder="Nombre de tu empresa o marca"
                      autoFocus
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:border-indigo-500 rounded-2xl py-3.5 pl-12 pr-4 text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-xs"
                    />
                  </div>
                  {companyError && <p className="text-xs text-rose-500 dark:text-rose-400 pl-2">Ingresa el nombre de tu negocio.</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continuar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* B4: Sector */}
            {step === 4 && (
              <div className="space-y-4 my-auto animate-in fade-in">
                <div className="space-y-1.5 text-center">
                  <span className="text-[11px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono font-bold">Paso 4 de 7</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">¿A qué sector pertenece?</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Ajustaremos los benchmarks y KPIs a tu industria.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto no-scrollbar p-1">
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => handleNextB_Sector(ind.id)}
                      className="p-3 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-indigo-50 dark:hover:bg-indigo-600/20 active:scale-[0.97] border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/50 text-left transition-all flex items-center gap-2.5 cursor-pointer shadow-2xs"
                    >
                      <span className="text-lg">{ind.icon}</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{ind.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* B5: Web / Red Social */}
            {step === 5 && (
              <form onSubmit={handleNextB_Web} className="space-y-6 my-auto animate-in fade-in">
                <div className="space-y-1.5 text-center">
                  <span className="text-[11px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono font-bold">Paso 5 de 7 (Opcional)</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">Sitio Web o Instagram</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Si lo tienes, el Mentor IA inspeccionará tu presencia online.</p>
                </div>

                <div className="space-y-3">
                  <div className="relative">
                    <Globe className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="www.tuempresa.com"
                      autoFocus
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:border-indigo-500 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-xs"
                    />
                  </div>

                  <div className="relative">
                    <Share2 className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={socialHandle}
                      onChange={(e) => setSocialHandle(e.target.value)}
                      placeholder="@tu_marca (Instagram o TikTok)"
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:border-indigo-500 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Continuar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleSkipB_Web}
                    className="w-full py-2.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    No tengo web aún, saltar este paso
                  </button>
                </div>
              </form>
            )}

            {/* B6: Mayor Desafío */}
            {step === 6 && (
              <div className="space-y-4 my-auto animate-in fade-in">
                <div className="space-y-1.5 text-center">
                  <span className="text-[11px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono font-bold">Paso 6 de 7</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">¿Cuál es tu mayor desafío actual?</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Selecciona tu prioridad número 1 para resolverla primero.</p>
                </div>

                <div className="space-y-2 max-h-[50vh] overflow-y-auto no-scrollbar p-1">
                  {QUICK_CHALLENGES.map((ch, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleNextB_Challenge(ch.text)}
                      className="w-full p-3.5 rounded-xl bg-white dark:bg-white/[0.03] hover:bg-indigo-50 dark:hover:bg-indigo-600/20 active:scale-[0.98] border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/50 text-left transition-all flex items-center justify-between cursor-pointer shadow-2xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{ch.icon}</span>
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{ch.text}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* B7: Meta Diaria */}
            {step === 7 && (
              <div className="space-y-4 my-auto animate-in fade-in text-center">
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono font-bold">Paso 7 de 7</span>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">¿Tu tiempo diario de estudio?</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Finalizaremos la auditoría y vincularemos tu usuario y PIN.</p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {STUDY_GOALS.map((g) => (
                    <button
                      key={g.mins}
                      type="button"
                      onClick={() => handleStartB_Audit(g.mins)}
                      className="w-full p-3.5 rounded-2xl bg-white dark:bg-white/[0.03] hover:bg-indigo-50 dark:hover:bg-indigo-600/20 active:scale-[0.98] border border-slate-200/80 dark:border-white/10 hover:border-indigo-500 text-left transition-all flex items-center justify-between cursor-pointer shadow-2xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{g.icon}</span>
                        <div>
                          <span className="text-sm font-bold text-slate-900 dark:text-white block">{g.label}</span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">{g.sub}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* B8: Loading AI */}
            {step === 8 && (
              <div className="space-y-6 my-auto text-center animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-3xl bg-indigo-50 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto animate-spin shadow-md">
                  <BrainCircuit className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Auditoría Ejecutiva & Creación de Usuario</h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">{aiLoadingPhase}</p>
                </div>
              </div>
            )}

            {/* B9: Audit Result */}
            {step === 9 && diagnosticResult && (
              <div className="space-y-5 my-auto animate-in fade-in">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-200 dark:border-indigo-500/30 text-center space-y-2 shadow-xs">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">
                    <Cloud className="w-3.5 h-3.5" />
                    <span>Plan Listo para @{username || name.split(' ')[0]}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    Plan Táctico de Corrección y Escalamiento
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {diagnosticResult.diagnosisSummary}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase font-mono text-slate-500 dark:text-slate-400 tracking-wider">
                      Tomos Clave Asignados:
                    </span>
                    <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">
                      Toca un tomo para ver qué aprenderás
                    </span>
                  </div>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto no-scrollbar">
                    {diagnosticResult.recommendedBooks.map((rec, i) => (
                      <button
                        key={rec.book.id}
                        type="button"
                        onClick={() => {
                          triggerHaptic('light');
                          setPreviewBook(rec.book);
                        }}
                        className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-900/80 hover:bg-indigo-50 dark:hover:bg-slate-800/90 border border-slate-200/80 dark:border-white/5 hover:border-indigo-500/40 flex items-center justify-between text-xs shadow-2xs text-left cursor-pointer transition-all group"
                      >
                        <div className="flex items-center gap-2 min-w-0 pr-2">
                          <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                            {i + 1}
                          </span>
                          <span className="font-semibold text-slate-800 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {rec.book.title}
                          </span>
                        </div>
                        <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono shrink-0 font-bold">
                          {rec.priority}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCompleteAll}
                  className="w-full py-4 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-sm font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Comenzar con mi Plan y Cuenta</span>
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {/* 3. FIXED BOTTOM FOOTER */}
      <footer className="sticky bottom-0 z-20 bg-white/80 dark:bg-slate-950/90 backdrop-blur-2xl border-t border-slate-200/80 dark:border-white/5 safe-bottom shrink-0 py-2.5 px-4 text-center">
        <span className="text-[10px] text-slate-500 font-mono">
          🔒 EnKurso • Sin Correos • 100% Cifrado & Acceso por PIN
        </span>
      </footer>

      {/* Book Overview Preview Modal */}
      {previewBook && (
        <BookOverviewModal
          book={previewBook}
          countryCode={countryCode}
          isOpen={Boolean(previewBook)}
          onClose={() => setPreviewBook(null)}
          onStartReading={() => {
            setPreviewBook(null);
            handleCompleteAll();
          }}
        />
      )}
    </div>
  );
};
