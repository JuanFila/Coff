import 'styled-components';
import { themeColor } from '../styles/themes/default';

type ThemeType = typeof themeColor;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} 
}