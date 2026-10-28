'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

function subscribeToThemeChanges(onChange: () => void) {
  window.addEventListener('theme-change', onChange);
  window.addEventListener('storage', onChange);

  return () => {
    window.removeEventListener('theme-change', onChange);
    window.removeEventListener('storage', onChange);
  };
}

function getThemeSnapshot() {
  return window.localStorage.getItem('theme') !== 'light';
}

function getServerThemeSnapshot() {
  return true;
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribeToThemeChanges,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  function toggleTheme() {
    const nextIsDark = !isDark;

    window.localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
    window.dispatchEvent(new Event('theme-change'));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo noturno'}
      aria-pressed={isDark}
      title={isDark ? 'Ativar modo claro' : 'Ativar modo noturno'}
      className="rounded-full p-2 text-slate-700 transition hover:bg-slate-200 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
    >
      {isDark ? <Sun aria-hidden="true" size={22} /> : <Moon aria-hidden="true" size={22} />}
    </button>
  );
}
