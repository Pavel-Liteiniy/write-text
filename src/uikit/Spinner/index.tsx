import { forwardRef, PropsWithChildren } from 'react';
import { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress';

import * as S from './styles';

export type SpinnerProps = {
  size?: MuiCircularProgressProps['size'];
  disableShrink?: MuiCircularProgressProps['disableShrink'];
  thickness?: MuiCircularProgressProps['thickness'];
  className?: MuiCircularProgressProps['className'];
};

export const Spinner = forwardRef<HTMLDivElement, PropsWithChildren<SpinnerProps>>(({
  size,
  disableShrink,
  thickness,
  className,
}, ref) => {
  return (
    <S.Spinner
      size={size}
      disableShrink={disableShrink}
      thickness={thickness}
      className={className}
      ref={ref}
    />
  );
});

Spinner.displayName = 'Spinner';
