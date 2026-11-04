"use client";
import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
type Theme = "light" | "dark";
const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);
const key = "magpie-theme";
function getTheme(): Theme {
  try {
    const saved = localStorage.getItem(key);
    if (saved === "light" || saved === "dark") return saved;
  } catch {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
function applyTheme() {
  const theme = getSnapshot();
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}
function subscribe(listener: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const update = () => {
    applyTheme();
    listener();
  };
  update();
  window.addEventListener("storage", update);
  window.addEventListener("magpie-theme-change", update);
  media.addEventListener("change", update);
  return () => {
    window.removeEventListener("storage", update);
    window.removeEventListener("magpie-theme-change", update);
    media.removeEventListener("change", update);
  };
}
const serverTheme = (): Theme => "light";
let temporaryTheme: Theme | null = null;
function getSnapshot() {
  return temporaryTheme ?? getTheme();
}
export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, serverTheme);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(key, next);
      temporaryTheme = null;
    } catch {
      temporaryTheme = next;
    }
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
    window.dispatchEvent(new Event("magpie-theme-change"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
