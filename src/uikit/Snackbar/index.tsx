import { FC, ReactElement } from 'react';
import { SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar';

import * as S from './styles';

export type SnackbarProps = {
  open: MuiSnackbarProps['open'];
  onClose: MuiSnackbarProps['onClose'];
  autoHideDuration: MuiSnackbarProps['autoHideDuration'];
  children: ReactElement
};

export const Snackbar: FC<SnackbarProps> = ({
  open,
  onClose,
  autoHideDuration,
  children,
}) => {
  return (
    <S.Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
    >
      {children}
    </S.Snackbar>
  );
};