import 'styled-components';
import type { PortfolioTheme } from '../types/portfolio';
declare module 'styled-components' {
  export interface DefaultTheme {
    mode: PortfolioTheme['mode'];
    colors: PortfolioTheme['colors'];
  }
}
