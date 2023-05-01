import { useCallback, useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { selectTheme } from '@/helpers/selectTheme';
import { setCookie } from '@/helpers/setCookie';
import { getCookie } from '@/helpers/getCookie';

import { DEFAULT_THEME_MODE, ThemeMode } from '@/theme';

export const useCustomTheme = (initialThemeMode?: ThemeMode) => {
  const themeMode = getCookie('themeMode') ?? initialThemeMode ?? DEFAULT_THEME_MODE;
  const isSystemDarkThemeMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useState(selectTheme(themeMode, isSystemDarkThemeMode));

  const changeTheme = useCallback((newThemeMode: ThemeMode) => {
    setCookie('themeMode', newThemeMode);
    setTheme(selectTheme(newThemeMode, isSystemDarkThemeMode));
  }, [isSystemDarkThemeMode]);

  useEffect(() => {
    if (themeMode === ThemeMode.SYSTEM) {
      changeTheme(ThemeMode.SYSTEM);
    }
  }, [themeMode, changeTheme]);

  return {
    themeMode,
    theme,
    changeTheme,
  };
};