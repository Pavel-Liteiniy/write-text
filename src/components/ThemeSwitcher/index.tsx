import { FC, useContext, useState } from 'react';
import isNil from 'lodash/isNil';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import Tooltip from '@mui/material/Tooltip';

import { ThemeMode, CustomThemeContext } from '@/theme';

import * as S from './styles';

export const ThemeSwitcher: FC = () => {
  const { changeTheme, themeMode: initialThemeMode } = useContext(CustomThemeContext);
  const [themeMode, setThemeMode] = useState(initialThemeMode);

  if (isNil(changeTheme) || isNil(themeMode)) {
    return null;
  }

  return (
    <S.ToggleButtonGroup
      exclusive
      value={themeMode}
      onChange={(_, value: ThemeMode) => {
        changeTheme(value);
        setThemeMode(value);
      }}
      aria-label="theme mode"
    >
      <S.ToggleButton
        value={ThemeMode.LIGHT}
        disabled={themeMode === ThemeMode.LIGHT}
        aria-label={`${ThemeMode.LIGHT} theme`}
        size="large"
      >
        <Tooltip title={ThemeMode.LIGHT}>
          <LightModeOutlinedIcon />
        </Tooltip>
      </S.ToggleButton>
      <S.ToggleButton
        value={ThemeMode.DARK}
        disabled={themeMode === ThemeMode.DARK}
        aria-label={`${ThemeMode.DARK} theme`}
        size="large"
      >
        <Tooltip title={ThemeMode.DARK}>
          <DarkModeOutlinedIcon />
        </Tooltip>
      </S.ToggleButton>
      <S.ToggleButton
        value={ThemeMode.SYSTEM}
        disabled={themeMode === ThemeMode.SYSTEM}
        aria-label={`${ThemeMode.SYSTEM} theme`}
        size="large"
      >
        <Tooltip title={ThemeMode.SYSTEM}>
          <SettingsOutlinedIcon />
        </Tooltip>
      </S.ToggleButton>
    </S.ToggleButtonGroup>
  );
};