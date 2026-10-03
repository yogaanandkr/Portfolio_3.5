export interface Experience {
  number: string;
  client: string;
  title: string;
  date: string;
  role: string;
  details: readonly string[];
  skills: string[]
}
export type ThemeMode = 'dark' | 'light';
export interface PortfolioTheme {
  mode: ThemeMode;
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    accent: string;
    action: string;
    border: string;
    soft: string;
  };
}
