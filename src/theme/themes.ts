import type { PortfolioTheme, ThemeMode } from '../types/portfolio';
export const themes: Record<ThemeMode, PortfolioTheme> = {
  dark: {
    mode: 'dark',
    colors: {
      background: '#080a0f',
      surface: '#10141d',
      text: '#f5f7ff',
      muted: '#a2adc3',
      accent: '#74a1ff',
      action: '#2864ef',
      border: '#252d40',
      soft: '#182844',
    },
  },
  light: {
    mode: 'light',
    colors: {
      background: '#fff',
      surface: '#f6f8fd',
      text: '#14213e',
      muted: '#5b6c88',
      accent: '#235bdd',
      action: '#235bdd',
      border: '#dce3f0',
      soft: '#e9f0ff',
    },
  },
};
