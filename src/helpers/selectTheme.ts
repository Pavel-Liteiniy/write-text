import isNil from 'lodash/isNil';

import { ThemeMode, Theme, DEFAULT_THEME } from '@/theme';

export const selectTheme = (
  mode?: ThemeMode,
  isSystemDarkTheme?: boolean | null,
) => {
  // If the user has selected a custom theme and the system theme is not set
  if (mode && !isNil(isSystemDarkTheme)) {
    if (mode === ThemeMode.SYSTEM) {
      return isSystemDarkTheme ? Theme.dark : Theme.light;
    } else {
      return Theme[mode];
    }
  // If the user has selected a custom theme and the system theme is set
  } else if (mode && isNil(isSystemDarkTheme)) {
    if (mode === ThemeMode.SYSTEM) {
      return DEFAULT_THEME;
    } else {
      return Theme[mode];
    }
  // If the user has not selected a custom theme and the system theme is set
  } else if (!isNil(isSystemDarkTheme)) {
    return isSystemDarkTheme ? Theme.dark : Theme.light;
  } else {
    return DEFAULT_THEME;
  }
};