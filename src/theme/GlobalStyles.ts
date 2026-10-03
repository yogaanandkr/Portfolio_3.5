import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  :root {
    --bg: ${({ theme }) => theme.colors.background};
    --surface: ${({ theme }) => theme.colors.surface};
    --ink: ${({ theme }) => theme.colors.text};
    --muted: ${({ theme }) => theme.colors.muted};
    --blue: ${({ theme }) => theme.colors.accent};
    --button: ${({ theme }) => theme.colors.action};
    --line: ${({ theme }) => theme.colors.border};
    --soft: ${({ theme }) => theme.colors.soft};
    color-scheme: ${({ theme }) => theme.mode};
  }
`;
