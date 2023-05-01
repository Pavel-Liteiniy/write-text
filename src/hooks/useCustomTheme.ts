import { useCallback, useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { getLocalStorageItem } from '@/helpers/getLocalStorageItem';
import { setLocalStorageItem } from '@/helpers/setLocalStorageItem';
import { selectTheme } from '@/helpers/selectTheme';

import { ThemeMode } from '@/theme';

export const useCustomTheme = () => {
  const themeMode = getLocalStorageItem('themeMode');
  const isSystemDarkThemeMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useState(selectTheme(themeMode, isSystemDarkThemeMode));

  const changeTheme = useCallback((newThemeMode: ThemeMode) => {
    setLocalStorageItem('themeMode', newThemeMode);
    setTheme(selectTheme(newThemeMode, isSystemDarkThemeMode));
  }, [isSystemDarkThemeMode]);

  useEffect(() => {
    if (themeMode === ThemeMode.SYSTEM) {
      changeTheme(ThemeMode.SYSTEM);
    }
  }, [themeMode, changeTheme]);

  return [theme, changeTheme] as [typeof theme, typeof changeTheme];
};