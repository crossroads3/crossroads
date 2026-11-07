"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";
import type { Role, SafeUser } from "@/lib/types";

interface AuthContextValue {
  user: SafeUser | null;
  login: (user: SafeUser) => void;
  logout: () => void;
  register: (user: SafeUser) => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  login: () => {},
  logout: () => {},
  register: () => {},
});

const STORAGE_KEY = "crossroads.user";

// getSnapshot must return a stable reference between changes, otherwise
// React detects an infinite update loop. Cache the parsed value and only
// re-read it when the store actually changes.
let cachedUser: SafeUser | null = null;
let cacheValid = false;

function readUser(): SafeUser | null {
  if (!cacheValid) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      cachedUser = raw ? (JSON.parse(raw) as SafeUser) : null;
    } catch {
      cachedUser = null;
    }
    cacheValid = true;
  }
  return cachedUser;
}

function subscribe(callback: () => void) {
  const handler = () => {
    cacheValid = false;
    callback();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const user = useSyncExternalStore(subscribe, readUser, () => null);

  const persist = useCallback((u: SafeUser | null) => {
    try {
      if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    cacheValid = false;
    window.dispatchEvent(new Event("storage"));
  }, []);

  const login = useCallback((u: SafeUser) => persist(u), [persist]);
  const register = useCallback((u: SafeUser) => persist(u), [persist]);
  const logout = useCallback(() => persist(null), [persist]);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export type { Role };