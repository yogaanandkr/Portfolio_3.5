import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import type { ThemeMode } from '../types/portfolio';
import { themes } from './themes';
import { GlobalStyles } from './GlobalStyles';
const storageKey = 'portfolio-theme';
const ThemeContext = createContext<{ mode: ThemeMode; toggleTheme: () => void } | null>(null);
function getInitialTheme(): ThemeMode {
  try {
    return localStorage.getItem(storageKey) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}
export function PortfolioThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(getInitialTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    try {
      localStorage.setItem(storageKey, mode);
    } catch {
      /* Theme also works without persistent storage. */
    }
  }, [mode]);
  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleTheme: () => setMode((current) => (current === 'dark' ? 'light' : 'dark')),
      }}
    >
      <ThemeProvider theme={themes[mode]}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export function usePortfolioTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('usePortfolioTheme requires PortfolioThemeProvider');
  return context;
}
