import { forwardRef, PropsWithChildren } from 'react';
import { AlertProps as MuiAlertProps } from '@mui/material/Alert';

import * as S from './styles';

export type AlertProps = {
  type: MuiAlertProps['severity'];
};

export const Alert = forwardRef<HTMLDivElement, PropsWithChildren<AlertProps>>(({ type, children }, ref) => {
  return (
    <S.Alert severity={type} ref={ref}>
      <S.Typography>
        {children}
      </S.Typography>
    </S.Alert>
  );
});

Alert.displayName = 'Alert';
