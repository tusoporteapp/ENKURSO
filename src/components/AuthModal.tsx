import React, { useState, useEffect } from 'react';
import { 
  X, 
  User, 
  KeyRound, 
  Lock, 
  Cloud, 
  CheckCircle, 
  Sparkles, 
  RefreshCw, 
  ShieldCheck, 
  LogOut, 
  ArrowRight,
  AtSign,
  Zap
} from 'lucide-react';
import { EkLogo } from './EkLogo';
import { 
  AuthUser, 
  getStoredAuthUser, 
  setStoredAuthUser, 
  registerUser, 
  loginUser, 
  syncUserProgressCloud 
} from '../utils/authSyncEngine';
import { UserLibraryState } from '../types';
import { SUPPORTED_COUNTRIES, getCountryConfig } from '../utils/currencyEngine';
import { saveUserCountry, loadUserCountry } from '../utils/storage';
import { triggerHaptic } from '../utils/haptics';
import confetti from 'canvas-confetti';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  userState: UserLibraryState;
  onStateUpdated: (newState: UserLibraryState) => void;
  onAuthUserChanged?: (user: AuthUser | null) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  userState,
  onStateUpdated,
  onAuthUserChanged,
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('register');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(getStoredAuthUser);

  // Sync state whenever modal opens
  useEffect(() => {
    if (isOpen) {
      const active = getStoredAuthUser();
      setCurrentUser(active);
      setErrorMessage(null);
      setSuccessMessage(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !username.trim() || !pin.trim()) {
      setErrorMessage('Por favor completa tu nombre, usuario y PIN.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    triggerHaptic('medium');

    const res = await registerUser(name, username, pin, userState);
    setIsLoading(false);

    if (res.success && res.user) {
      setCurrentUser(res.user);
      if (onAuthUserChanged) onAuthUserChanged(res.user);
      setSuccessMessage('¡Usuario y PIN registrados exitosamente!');
      triggerHaptic('success');
      try {
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      } catch {}
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      setErrorMessage(res.error || 'No se pudo crear la cuenta.');
      triggerHaptic('error');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !pin.trim()) {
      setErrorMessage('Por favor ingresa tu usuario y PIN.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    triggerHaptic('medium');

    const res = await loginUser(username, pin, userState);
    setIsLoading(false);

    if (res.success && res.user) {
      setCurrentUser(res.user);
      if (onAuthUserChanged) onAuthUserChanged(res.user);
      if (res.mergedState) {
        onStateUpdated(res.mergedState);
      }
      setSuccessMessage('¡Bienvenido! Tu historial se ha sincronizado.');
      triggerHaptic('success');
      try {
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      } catch {}
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      setErrorMessage(res.error || 'Usuario o PIN incorrectos.');
      triggerHaptic('error');
    }
  };

  const handleManualSync = async () => {
    setIsLoading(true);
    triggerHaptic('light');
    const res = await syncUserProgressCloud(userState);
    setIsLoading(false);
    if (res.success) {
      const refreshed = getStoredAuthUser();
      setCurrentUser(refreshed);
      if (onAuthUserChanged) onAuthUserChanged(refreshed);
      setSuccessMessage('¡Historial sincronizado con la nube!');
      setTimeout(() => setSuccessMessage(null), 3000);
    }
  };

  const handleLogout = () => {
    triggerHaptic('medium');
    setStoredAuthUser(null);
    setCurrentUser(null);
    if (onAuthUserChanged) onAuthUserChanged(null);
    setSuccessMessage('Has cerrado sesión en este dispositivo.');
    setTimeout(() => setSuccessMessage(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in select-none">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden relative flex flex-col transition-colors">
        
        {/* Header */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <EkLogo size={28} className="rounded-xl shadow-xs shrink-0" />
            <div>
              <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white font-mono leading-tight block">
                Cuenta & Sincronización Cloud Vault
              </span>
              <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono">Acceso por Usuario & PIN</span>
            </div>
          </div>
          <button
            onClick={() => {
              triggerHaptic('light');
              onClose();
            }}
            className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors native-touch-btn cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-4 flex-1 overflow-y-auto no-scrollbar">
          
          {/* Feedback Alerts */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-300 text-xs font-semibold animate-in fade-in">
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* If Logged In View */}
          {currentUser ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-center space-y-2">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-600/20 border-2 border-indigo-200 dark:border-indigo-500/40 text-indigo-600 dark:text-indigo-300 flex items-center justify-center mx-auto text-xl font-bold font-mono">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{currentUser.name}</h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">@{currentUser.username}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold">
                  <Cloud className="w-3 h-3 text-emerald-500" />
                  <span>Sincronización en la Nube Activa</span>
                </div>
              </div>

              {/* Stats Summary */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Completados</span>
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-300">{userState.completedBooksCount || 0}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Diplomas</span>
                  <span className="text-sm font-bold text-amber-500 dark:text-amber-400">{userState.certificates?.length || 0}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Racha</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{userState.dailyStreak || 0}d</span>
                </div>
              </div>

              {/* Country & Local Currency Selector */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <span>{getCountryConfig(userState.countryCode).flag}</span>
                    <span>País y Moneda:</span>
                  </span>
                  <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 font-mono">
                    {getCountryConfig(userState.countryCode).name} ({getCountryConfig(userState.countryCode).currencyCode})
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-32 overflow-y-auto p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 no-scrollbar">
                  {SUPPORTED_COUNTRIES.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => {
                        triggerHaptic('selection');
                        saveUserCountry(c.code);
                        onStateUpdated({
                          ...userState,
                          countryCode: c.code,
                          userCurrency: c.currencyCode,
                        });
                      }}
                      className={`p-1.5 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                        (userState.countryCode || 'MX') === c.code
                          ? 'bg-indigo-600 text-white shadow-xs font-bold'
                          : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>{c.flag}</span>
                      <span className="truncate">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleManualSync}
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-xs font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={isLoading ? "w-3.5 h-3.5 animate-spin" : "w-3.5 h-3.5"} />
                  <span>{isLoading ? 'Sincronizando...' : 'Sincronizar Progreso Ahora'}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full py-2.5 text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Cerrar Sesión en este dispositivo</span>
                </button>
              </div>
            </div>
          ) : (
            /* Logged Out / Form View */
            <div className="space-y-4">
              {/* Segmented Control */}
              <div className="p-1 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex">
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    setActiveTab('register');
                    setErrorMessage(null);
                  }}
                  className={activeTab === 'register' ? "flex-1 py-2 text-xs font-bold rounded-xl transition-all bg-indigo-600 text-white shadow-md" : "flex-1 py-2 text-xs font-bold rounded-xl transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}
                >
                  Crear Cuenta
                </button>
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    setActiveTab('login');
                    setErrorMessage(null);
                  }}
                  className={activeTab === 'login' ? "flex-1 py-2 text-xs font-bold rounded-xl transition-all bg-indigo-600 text-white shadow-md" : "flex-1 py-2 text-xs font-bold rounded-xl transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}
                >
                  Iniciar Sesión
                </button>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
                {activeTab === 'register'
                  ? 'Crea tu usuario y PIN para respaldar tu progreso y certificados sin necesidad de correo.'
                  : 'Ingresa con tu usuario y PIN para sincronizar tu historial en este dispositivo.'}
              </p>

              {/* Form */}
              <form onSubmit={activeTab === 'register' ? handleRegister : handleLogin} className="space-y-3">
                {activeTab === 'register' && (
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 block">
                      Nombre Completo (para Diplomas Oficiales)
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej: Dr. Roberto Sterling"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 pl-9 pr-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 block">
                    Nombre de Usuario (@alias)
                  </label>
                  <div className="relative">
                    <AtSign className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="ej: carlos_director"
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 pl-9 pr-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors font-mono"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 block">
                    PIN de Acceso (4 a 6 dígitos)
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      placeholder="Ej: 1234"
                      maxLength={6}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 pl-9 pr-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors font-mono"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white text-xs font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Conectando...</span>
                    </>
                  ) : (
                    <>
                      <span>{activeTab === 'register' ? 'Crear Usuario y Respaldar' : 'Entrar con PIN'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Guest mode note */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    onClose();
                  }}
                  className="text-[11px] text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer"
                >
                  Continuar en modo local sin cuenta
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-center text-[10px] text-slate-500 font-mono">
          🔒 EnKurso Cloud Protocol • Sin Correos • 100% Cifrado & Serverless
        </div>
      </div>
    </div>
  );
};
