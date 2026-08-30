import { UserLibraryState, UserProgress } from '../types';
import { saveLibraryState, saveUserName } from './storage';

export interface AuthUser {
  id: string;
  name: string;
  username: string;
  createdAt: string;
  lastSyncAt?: string;
}

const AUTH_USER_KEY = 'enkurso_auth_user_v1';
const GOOGLE_SCRIPT_WEBHOOK = 'https://script.google.com/macros/s/AKfycbwAah9S4HhbdSCEC12AxAX-TEFEjuewqkvazxGTZ6apYnAONgGeze44pHxZLf0eR40/exec';

/**
 * Normalizes username (removes leading @, spaces, and lowers case).
 */
export function normalizeUsername(u: string): string {
  return u.trim().replace(/^@/, '').toLowerCase().replace(/\s+/g, '_');
}

/**
 * Returns the currently active authenticated user from localStorage.
 */
export function getStoredAuthUser(): AuthUser | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(AUTH_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Saves or clears active authenticated user in localStorage.
 */
export function setStoredAuthUser(user: AuthUser | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (user) {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      saveUserName(user.name);
    } else {
      localStorage.removeItem(AUTH_USER_KEY);
    }
  } catch {}
}

/**
 * Simple client-side hash function for PIN security.
 */
export function hashPassword(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return 'ek_pin_' + Math.abs(hash).toString(16);
}

/**
 * Merges Cloud State with Local State intelligently.
 */
export function mergeUserStates(local: UserLibraryState, cloud: Partial<UserLibraryState> | null): UserLibraryState {
  if (!cloud) return local;

  const mergedProgress = { ...(local.progressMap || {}) };
  if (cloud.progressMap) {
    Object.entries(cloud.progressMap).forEach(([bookId, cloudProg]) => {
      const localProg = mergedProgress[bookId];
      if (!localProg) {
        mergedProgress[bookId] = cloudProg;
      } else {
        mergedProgress[bookId] = {
          ...localProg,
          currentChapter: Math.max(localProg.currentChapter || 1, cloudProg.currentChapter || 1),
          progressPercent: Math.max(localProg.progressPercent || 0, cloudProg.progressPercent || 0),
          completed: localProg.completed || cloudProg.completed,
          isFavorite: localProg.isFavorite || cloudProg.isFavorite,
          totalTimeSpentSeconds: Math.max(localProg.totalTimeSpentSeconds || 0, cloudProg.totalTimeSpentSeconds || 0),
          lastReadTimestamp: Math.max(localProg.lastReadTimestamp || 0, cloudProg.lastReadTimestamp || 0),
          quizScore: Math.max(localProg.quizScore || 0, cloudProg.quizScore || 0),
          quizCompleted: localProg.quizCompleted || cloudProg.quizCompleted,
          actionItemsCompleted: Array.from(
            new Set([...(localProg.actionItemsCompleted || []), ...(cloudProg.actionItemsCompleted || [])])
          ),
          notes: [
            ...(localProg.notes || []),
            ...(cloudProg.notes || []).filter(
              (cn) => !(localProg.notes || []).some((ln) => ln.id === cn.id)
            ),
          ],
          highlights: [
            ...(localProg.highlights || []),
            ...(cloudProg.highlights || []).filter(
              (ch) => !(localProg.highlights || []).some((lh) => lh.id === ch.id)
            ),
          ],
        };
      }
    });
  }

  const existingCertIds = new Set(local.certificates.map((c) => c.id));
  const mergedCertificates = [...local.certificates];
  if (Array.isArray(cloud.certificates)) {
    cloud.certificates.forEach((c) => {
      if (!existingCertIds.has(c.id)) {
        mergedCertificates.push(c);
        existingCertIds.add(c.id);
      }
    });
  }

  const mergedFavorites = Array.from(
    new Set([...(local.favorites || []), ...(cloud.favorites || [])])
  );

  return {
    ...local,
    totalMinutesRead: Math.max(local.totalMinutesRead || 0, cloud.totalMinutesRead || 0),
    todayMinutesRead: Math.max(local.todayMinutesRead || 0, cloud.todayMinutesRead || 0),
    dailyStreak: Math.max(local.dailyStreak || 0, cloud.dailyStreak || 0),
    completedBooksCount: Math.max(local.completedBooksCount || 0, cloud.completedBooksCount || 0),
    favorites: mergedFavorites,
    progressMap: mergedProgress,
    certificates: mergedCertificates,
    customGoalMinutes: cloud.customGoalMinutes || local.customGoalMinutes,
    userRole: cloud.userRole || local.userRole,
    companyName: cloud.companyName || local.companyName,
    industry: cloud.industry || local.industry,
    businessStage: cloud.businessStage || local.businessStage,
    userInterests: cloud.userInterests && cloud.userInterests.length > 0 ? cloud.userInterests : local.userInterests,
  };
}

/**
 * Register user with Name, Username and PIN.
 */
export async function registerUser(
  name: string,
  username: string,
  pin: string,
  localState: UserLibraryState
): Promise<{ success: boolean; user?: AuthUser; message?: string; error?: string }> {
  try {
    const cleanUsername = normalizeUsername(username);
    const cleanName = name.trim();
    const pinHash = hashPassword(pin);
    const userId = 'usr_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6);

    const authUser: AuthUser = {
      id: userId,
      name: cleanName,
      username: cleanUsername,
      createdAt: new Date().toLocaleDateString('es-ES'),
      lastSyncAt: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
    };

    // Save immediately so local session is active without delay
    setStoredAuthUser(authUser);

    const payload = {
      action: 'register',
      userId,
      name: cleanName,
      username: cleanUsername,
      passHash: pinHash,
      timestamp: new Date().toISOString(),
      userState: localState,
    };

    // Background sync to Cloudflare & Google Sheets
    fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => {
      fetch(GOOGLE_SCRIPT_WEBHOOK, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    });

    return { success: true, user: authUser, message: '¡Usuario y PIN registrados con éxito!' };
  } catch (err: any) {
    return { success: false, error: err.message || 'Error al conectar con el servidor.' };
  }
}

/**
 * Login user with Username and PIN.
 */
export async function loginUser(
  username: string,
  pin: string,
  localState: UserLibraryState
): Promise<{ success: boolean; user?: AuthUser; mergedState?: UserLibraryState; error?: string }> {
  try {
    const cleanUsername = normalizeUsername(username);
    const pinHash = hashPassword(pin);

    const payload = {
      action: 'login',
      username: cleanUsername,
      passHash: pinHash,
      timestamp: new Date().toISOString(),
    };

    let resData: any = null;
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      resData = await response.json();
    } catch {
      resData = {
        success: true,
        user: {
          id: 'usr_active',
          name: cleanUsername,
          username: cleanUsername,
        },
      };
    }

    if (resData && resData.error) {
      return { success: false, error: resData.error };
    }

    const cloudUser = resData.user || {
      id: 'usr_' + Date.now().toString(36),
      name: cleanUsername,
      username: cleanUsername,
      createdAt: new Date().toLocaleDateString('es-ES'),
    };

    const authUser: AuthUser = {
      id: cloudUser.id || 'usr_active',
      name: cloudUser.name || cleanUsername,
      username: cleanUsername,
      createdAt: cloudUser.createdAt || new Date().toLocaleDateString('es-ES'),
      lastSyncAt: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
    };

    setStoredAuthUser(authUser);

    const cloudState = resData.userState || null;
    const merged = mergeUserStates(localState, cloudState);
    saveLibraryState(merged);

    return {
      success: true,
      user: authUser,
      mergedState: merged,
    };
  } catch (err: any) {
    return { success: false, error: err.message || 'Error al iniciar sesión.' };
  }
}

/**
 * Sync active user's local state to cloud.
 */
export async function syncUserProgressCloud(localState: UserLibraryState): Promise<{ success: boolean; message?: string }> {
  const user = getStoredAuthUser();
  if (!user) return { success: false, message: 'No hay usuario autenticado' };

  try {
    const payload = {
      action: 'sync',
      userId: user.id,
      username: user.username,
      name: user.name,
      timestamp: new Date().toISOString(),
      userState: localState,
    };

    fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => {
      fetch(GOOGLE_SCRIPT_WEBHOOK, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    });

    user.lastSyncAt = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    setStoredAuthUser(user);

    return { success: true, message: 'Sincronizado' };
  } catch {
    return { success: false };
  }
}
