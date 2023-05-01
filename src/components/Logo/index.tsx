import { FC } from 'react';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

import logoLight from '@/public/logo-light.svg';
import logoDark from '@/public/logo-dark.svg';

import { ThemeMode } from '@/theme';

export const Logo: FC = () => {
  const theme = useTheme();

  return (
    <Image
      src={theme.palette.mode === ThemeMode.LIGHT ? logoDark : logoLight}
      width={150}
      height={76}
      alt="logo write text"
      priority
    />
  );
};