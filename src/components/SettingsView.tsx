import React, { useState } from 'react';
import { 
  User, 
  Moon, 
  Sun, 
  Laptop, 
  Target, 
  BookOpen, 
  HardDrive, 
  Download, 
  Upload, 
  Check, 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  Award, 
  Info,
  ChevronRight,
  RefreshCw,
  Cpu,
  Heart,
  ExternalLink,
  Trash2,
  AlertTriangle
} from 'lucide-react';
import { AppThemeMode, ReaderSettings, UserLibraryState } from '../types';
import { 
  loadUserName, 
  saveUserName, 
  loadUserRole,
  saveUserRole,
  loadUserCompany,
  saveUserCompany,
  loadUserIndustry,
  saveUserIndustry,
  loadUserWebsite,
  saveUserWebsite,
  loadUserSocial,
  saveUserSocial,
  loadAiDiagnosis,
  exportAllDataBackup, 
  importAllDataBackup,
  getExecutiveRank,
  getDailyAiUsage,
  DAILY_AI_CLOUD_LIMIT,
  factoryResetAllData
} from '../utils/storage';
import { EkLogo } from './EkLogo';
import { SUPPORTED_COUNTRIES, getCountryConfig } from '../utils/currencyEngine';
import { loadUserCountry, saveUserCountry } from '../utils/storage';
import { triggerHaptic } from '../utils/haptics';

import { getStoredAuthUser } from '../utils/authSyncEngine';
import { Cloud } from 'lucide-react';

interface SettingsViewProps {
  userState: UserLibraryState;
  onUpdateUserState: (updater: (prev: UserLibraryState) => UserLibraryState) => void;
  themeMode: AppThemeMode;
  onThemeChange: (mode: AppThemeMode) => void;
  readerSettings: ReaderSettings;
  onUpdateReaderSettings: (settings: ReaderSettings) => void;
  onRefreshState?: () => void;
  onOpenAuth?: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  userState,
  onUpdateUserState,
  themeMode,
  onThemeChange,
  readerSettings,
  onUpdateReaderSettings,
  onRefreshState,
  onOpenAuth,
}) => {
  const [userName, setUserName] = useState<string>(loadUserName);
  const [selectedCountry, setSelectedCountry] = useState<string>(() => userState.countryCode || loadUserCountry());
  const [userRole, setUserRole] = useState<string>(loadUserRole);
  const [companyName, setCompanyName] = useState<string>(loadUserCompany);
  const [industry, setIndustry] = useState<string>(loadUserIndustry);
  const [websiteUrl, setWebsiteUrl] = useState<string>(loadUserWebsite);
  const [socialHandle, setSocialHandle] = useState<string>(loadUserSocial);
  const [isSavedName, setIsSavedName] = useState(false);
  const [backupStatus, setBackupStatus] = useState<string | null>(null);
  const [showResetModal, setShowResetModal] = useState(false);

  const rank = getExecutiveRank(userState.completedBooksCount);
  const aiUsage = getDailyAiUsage();
  const aiDiagnosis = userState.aiDiagnosisSummary || loadAiDiagnosis();

  const handleSaveProfile = () => {
    triggerHaptic('medium');
    saveUserName(userName);
    saveUserRole(userRole);
    saveUserCompany(companyName);
    saveUserIndustry(industry);
    saveUserWebsite(websiteUrl);
    saveUserSocial(socialHandle);
    onUpdateUserState(prev => ({ 
      ...prev, 
      userRole,
      companyName,
      industry,
      websiteUrl,
      socialHandle
    }));
    setIsSavedName(true);
    setTimeout(() => setIsSavedName(false), 2500);
  };

  const handleGoalChange = (mins: number) => {
    triggerHaptic('selection');
    onUpdateUserState(prev => ({ ...prev, customGoalMinutes: mins }));
  };

  const handleExport = () => {
    triggerHaptic('medium');
    try {
      const backupJson = exportAllDataBackup();
      const blob = new Blob([backupJson], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `enkurso-respaldo-local-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setBackupStatus('¡Copia de seguridad descargada exitosamente!');
      setTimeout(() => setBackupStatus(null), 4000);
    } catch {
      setBackupStatus('Error al exportar los datos');
    }
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    triggerHaptic('medium');
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importAllDataBackup(content);
        if (success) {
          setBackupStatus('¡Datos restaurados con éxito!');
          setTimeout(() => {
            if (onRefreshState) onRefreshState();
            else window.location.reload();
          }, 800);
        } else {
          setBackupStatus('Error: El archivo de respaldo no es válido.');
        }
      }
    };
    reader.readAsText(file);
  };

  const handleExecuteFactoryReset = () => {
    triggerHaptic('success');
    factoryResetAllData();
    setShowResetModal(false);
    // Reload page immediately to restart as fresh instance
    window.location.reload();
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 select-none space-y-6 sm:space-y-8 animate-in fade-in">
      {/* Settings Header */}
      <div className="flex items-center gap-3.5 pb-2 border-b border-slate-200/80 dark:border-slate-800">
        <EkLogo size={42} className="rounded-2xl shadow-xs shrink-0" />
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            Ajustes de la Aplicación
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Personaliza tu experiencia de lectura, perfil de diplomas y almacenamiento local.
          </p>
        </div>
      </div>

      {/* 0. CUENTA & SINCRONIZACIÓN EN LA NUBE */}
      <section className="bg-gradient-to-br from-indigo-900/20 via-slate-900/60 to-slate-900/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-indigo-500/30 shadow-md space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>Cuenta & Sincronización Cloud Vault</span>
                <span className="px-2 py-0.2 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-mono font-bold">
                  Serverless
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                {getStoredAuthUser()
                  ? `Conectado como: @${getStoredAuthUser()?.username} (${getStoredAuthUser()?.name})`
                  : 'Guarda tu progreso, certificados y notas en la nube de forma segura con tu PIN.'}
              </p>
            </div>
          </div>

          {onOpenAuth && (
            <button
              type="button"
              onClick={() => {
                triggerHaptic('medium');
                onOpenAuth();
              }}
              className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer native-touch-btn shrink-0"
            >
              {getStoredAuthUser() ? 'Mi Cuenta' : 'Crear Cuenta'}
            </button>
          )}
        </div>
      </section>

      {/* PAÍS & MONEDA DE PREFERENCIA */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200/80 dark:border-indigo-800 flex items-center justify-center text-xl shadow-xs">
              {getCountryConfig(selectedCountry).flag}
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>País y Moneda de Preferencia</span>
              </h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {getCountryConfig(selectedCountry).name} — {getCountryConfig(selectedCountry).currencyName} ({getCountryConfig(selectedCountry).currencyCode})
              </p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-mono font-bold text-xs shrink-0">
            {getCountryConfig(selectedCountry).currencySymbol} {getCountryConfig(selectedCountry).currencyCode}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-44 overflow-y-auto p-1.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 no-scrollbar">
          {SUPPORTED_COUNTRIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => {
                triggerHaptic('selection');
                setSelectedCountry(c.code);
                saveUserCountry(c.code);
                onUpdateUserState((prev) => ({
                  ...prev,
                  countryCode: c.code,
                  userCurrency: c.currencyCode,
                }));
              }}
              className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                selectedCountry === c.code
                  ? 'bg-indigo-600 text-white shadow-xs font-bold'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800/60'
              }`}
            >
              <span className="text-base">{c.flag}</span>
              <span className="truncate">{c.name}</span>
            </button>
          ))}
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
          💡 Puedes cambiar de país en cualquier momento. Todos los cursos, fichas de monetización y guiones de venta se adaptarán automáticamente a tu moneda.
        </p>
      </section>

      {/* 1. PERFIL & CERTIFICADOS */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                Perfil de Certificación
              </h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Este nombre aparecerá en todos los Diplomas Oficiales emitidos.
              </p>
            </div>
          </div>

          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${rank.color}`}>
            <span>{rank.badge}</span>
            <span>{rank.title}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              Nombre del Titular (para Diplomas)
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Ej: Ing. Carlos Morales"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              Rol / Posición
            </label>
            <input
              type="text"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              placeholder="Ej: Fundador / Director General"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              Empresa / Proyecto
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Ej: Mi Empresa"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              Sector / Industria
            </label>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="Ej: E-commerce, SaaS, Servicios B2B"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              Sitio Web / Tienda Online
            </label>
            <input
              type="text"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="Ej: https://miempresa.com"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              Red Social Principal
            </label>
            <input
              type="text"
              value={socialHandle}
              onChange={(e) => setSocialHandle(e.target.value)}
              placeholder="Ej: @miempresa (Instagram, TikTok, etc.)"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {aiDiagnosis && (
          <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Diagnóstico del Mentor IA:</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {aiDiagnosis}
            </p>
          </div>
        )}

        <div className="flex justify-end pt-1">
          <button
            onClick={handleSaveProfile}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-xs font-bold rounded-xl sm:rounded-2xl transition-all shadow-xs flex items-center justify-center gap-1.5 native-touch-btn cursor-pointer"
          >
            {isSavedName ? <Check className="w-4 h-4 text-emerald-300" /> : null}
            <span>{isSavedName ? 'Guardado' : 'Guardar Perfil'}</span>
          </button>
        </div>
      </section>

      {/* 2. APARIENCIA & TEMA */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
            <Moon className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Tema y Apariencia
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Selecciona el estilo visual para la aplicación.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
          <button
            onClick={() => {
              triggerHaptic('selection');
              onThemeChange('light');
            }}
            className={`flex flex-col items-center justify-center p-3 rounded-xl sm:rounded-2xl border transition-all native-touch-btn cursor-pointer ${
              themeMode === 'light'
                ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs'
                : 'bg-slate-50 dark:bg-slate-950 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            <Sun className="w-5 h-5 mb-1.5" />
            <span className="text-xs">Claro</span>
          </button>

          <button
            onClick={() => {
              triggerHaptic('selection');
              onThemeChange('dark');
            }}
            className={`flex flex-col items-center justify-center p-3 rounded-xl sm:rounded-2xl border transition-all native-touch-btn cursor-pointer ${
              themeMode === 'dark'
                ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs'
                : 'bg-slate-50 dark:bg-slate-950 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            <Moon className="w-5 h-5 mb-1.5" />
            <span className="text-xs">Oscuro</span>
          </button>

          <button
            onClick={() => {
              triggerHaptic('selection');
              onThemeChange('system');
            }}
            className={`flex flex-col items-center justify-center p-3 rounded-xl sm:rounded-2xl border transition-all native-touch-btn cursor-pointer ${
              themeMode === 'system'
                ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs'
                : 'bg-slate-50 dark:bg-slate-950 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            <Laptop className="w-5 h-5 mb-1.5" />
            <span className="text-xs">Sistema</span>
          </button>
        </div>
      </section>

      {/* 3. META DIARIA DE LECTURA */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Meta Diaria de Estudio
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Tiempo objetivo diario para encender y mantener tu racha de fuego.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-1">
          {[10, 15, 20, 30, 45, 60].map((mins) => {
            const isSelected = userState.customGoalMinutes === mins;
            return (
              <button
                key={mins}
                onClick={() => handleGoalChange(mins)}
                className={`py-2.5 px-3 rounded-xl sm:rounded-2xl border text-xs font-bold transition-all native-touch-btn cursor-pointer text-center ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs scale-[1.02]'
                    : 'bg-slate-50 dark:bg-slate-950 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                {mins} min
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. PREFERENCIAS DEL LECTOR */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Tipografía Predeterminada del Lector
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Estilo de letra predeterminado al abrir cualquier libro.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
          {[
            { id: 'serif', label: 'Editorial Serif', sub: 'Literata' },
            { id: 'sans', label: 'Moderna Sans', sub: 'Plus Jakarta' },
            { id: 'mono', label: 'Técnica Mono', sub: 'JetBrains' },
          ].map((f) => {
            const isSelected = readerSettings.font === f.id;
            return (
              <button
                key={f.id}
                onClick={() => {
                  triggerHaptic('selection');
                  onUpdateReaderSettings({ ...readerSettings, font: f.id as any });
                }}
                className={`p-3 rounded-xl sm:rounded-2xl border text-center transition-all native-touch-btn cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-950 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                <p className="text-xs font-bold leading-tight">{f.label}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{f.sub}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* 5. PERSISTENCIA LOCAL & COPIA DE SEGURIDAD */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
            <HardDrive className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Almacenamiento Local & Copia de Seguridad
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Tus datos residen 100% de forma privada en este dispositivo.
            </p>
          </div>
        </div>

        {backupStatus && (
          <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-300 text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500" />
            <span>{backupStatus}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Export */}
          <button
            onClick={handleExport}
            className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors native-touch-btn cursor-pointer text-left"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Exportar mis datos (.json)</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                Guarda una copia de tus cursos, notas y diplomas.
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          {/* Import */}
          <label className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors native-touch-btn cursor-pointer text-left">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                <Upload className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Restaurar Copia (.json)</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                Carga un archivo de respaldo previo.
              </p>
            </div>
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </label>
        </div>
      </section>

      {/* 6. ZONA DE REINICIO / RESTABLECER DE FÁBRICA */}
      <section className="bg-rose-50/50 dark:bg-rose-950/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-rose-200 dark:border-rose-900/60 shadow-2xs space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-900/60 text-rose-600 dark:text-rose-300 flex items-center justify-center font-bold">
              <Trash2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-rose-900 dark:text-rose-200">
                Restablecer Aplicación desde Cero
              </h2>
              <p className="text-[11px] text-rose-700 dark:text-rose-400">
                Borra todo tu progreso, notas, diplomas y racha para empezar como el primer día.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-1 flex justify-end">
          <button
            onClick={() => {
              triggerHaptic('medium');
              setShowResetModal(true);
            }}
            className="w-full sm:w-auto px-4 py-2.5 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 native-touch-btn cursor-pointer"
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Restablecer de Fábrica (Borrar Todo)</span>
          </button>
        </div>
      </section>

      {/* 7. ESTADO DE PWA OFFLINE & IA */}
      <section className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-800 shadow-2xs space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-emerald-400">Modo 100% Offline Activo</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono">
            PWA v2.0
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <p className="text-[10px] text-slate-400">Catálogo en Memoria</p>
            <p className="text-xs font-bold text-white mt-0.5">363 Tomos en 30 Categorías</p>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <p className="text-[10px] text-slate-400">Cuota de Mentor IA Hoy</p>
            <p className="text-xs font-bold text-white mt-0.5">{aiUsage.count} / {DAILY_AI_CLOUD_LIMIT} consultas</p>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 leading-relaxed">
          EnKurso funciona de manera totalmente autónoma en tu navegador o pantalla de inicio. No requiere conexión a internet para leer tomos, resolver exámenes ni generar certificados.
        </p>
      </section>

      {/* 8. ACERCA DEL CREADOR & ENKURSO (Firma Oficial MigoCreativo) */}
      <section className="bg-slate-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-5 relative overflow-hidden">
        {/* Top Header with Avatar, Handle and Version */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <EkLogo size={46} className="rounded-2xl shadow-md shrink-0" />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                  Miguel E. Heredia
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-white/10 text-slate-300 border border-white/15">
                  @migocreativo
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                Creador, Diseñador & Desarrollador Principal
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-[11px] font-bold self-start sm:self-auto font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Versión: v2.0 Ejecutiva</span>
          </div>
        </div>

        {/* Vision narrative text */}
        <div className="pt-2 border-t border-white/10 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          <p>
            <strong className="text-white font-bold">EnKurso</strong> fue conceptualizado y desarrollado por <strong className="text-white font-bold">Miguel E. Heredia (MigoCreativo)</strong> con la misión de democratizar la alta educación ejecutiva y condensar los marcos estratégicos, metodologías de negocio y aprendizajes más transformadores del mundo en tomos ejecutivos claros, rápidos y de alto impacto para fundadores, directores y emprendedores.
          </p>
          <p className="text-slate-400 text-xs">
            Gracias por ser parte de esta comunidad de aprendizaje y liderazgo continuo. Tu tiempo es tu recurso más valioso, y EnKurso existe para potenciarlo cada día.
          </p>
        </div>

        {/* Social Links Footer Bar */}
        <div className="pt-3 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-slate-300 text-xs font-semibold">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
            <span>Sígueme en todas las redes sociales:</span>
            <span className="text-white font-bold font-mono">@migocreativo</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href="https://instagram.com/migocreativo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
            >
              <span>Instagram</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href="https://youtube.com/@migocreativo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href="https://x.com/migocreativo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
            >
              <span>X (Twitter)</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href="https://tiktok.com/@migocreativo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
            >
              <span>TikTok</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </section>

      {/* CONFIRMATION MODAL FOR FACTORY RESET */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in select-none">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl space-y-4 text-center animate-in zoom-in-95">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 flex items-center justify-center text-rose-600 dark:text-rose-400 mx-auto shadow-xs">
              <AlertTriangle className="w-7 h-7 stroke-[2.2]" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                ¿Restablecer EnKurso de Fábrica?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Esta acción eliminará de forma permanente todo tu progreso en los 363 libros, tus días de racha, diplomas oficiales, reflexiones guardadas e historial con el Mentor IA.
              </p>
              <p className="text-[11px] font-bold text-rose-600 dark:text-rose-400 mt-2">
                La aplicación quedará limpia exactamente como si fuera el primer día. Esta acción no se puede deshacer.
              </p>
            </div>

            <div className="flex gap-2.5 pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="flex-1 py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-2xl transition-colors native-touch-btn cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={handleExecuteFactoryReset}
                className="flex-1 py-2.5 px-4 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white text-xs font-bold rounded-2xl transition-all shadow-xs native-touch-btn cursor-pointer"
              >
                Sí, Borrar Todo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
