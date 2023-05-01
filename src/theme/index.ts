import { createContext } from 'react';
import { createTheme } from '@mui/material/styles';

import { openSans } from '@/theme/fonts';

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

const themeDark = createTheme({
  palette: { mode: 'dark' },
  typography: { fontFamily: '' },
});

const themeLight = createTheme({
  palette: { mode: 'light' },
  typography: { fontFamily: openSans.style.fontFamily },
});

export const DEFAULT_THEME = themeLight;

export const Theme = {
  [ThemeMode.DARK]: themeDark,
  [ThemeMode.LIGHT]: themeLight,
};

export const ChangeThemeContext = createContext<(newThemeMode: ThemeMode) => void>(() => {});