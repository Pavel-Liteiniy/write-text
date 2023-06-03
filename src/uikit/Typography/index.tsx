import {
  FC,
  PropsWithChildren,
  ElementType,
  ComponentPropsWithoutRef
} from 'react';

import muiVisuallyHidden from '@mui/utils/visuallyHidden';
import { TypographyVariant } from '@mui/material/styles';

import * as S from './styles';

export type TypographyProps<C extends ElementType> = {
  className?: string,
  as?: C,
  variant?: TypographyVariant,
  visuallyHidden?: boolean
} & ComponentPropsWithoutRef<C>;

export const Typography: FC<PropsWithChildren<TypographyProps<ElementType>>> = ({
  className = '',
  as = 'span',
  variant = 'body1',
  visuallyHidden = false,
  children
}) => (
  <S.Typography
    className={className}
    component={as}
    variant={variant}
    sx={visuallyHidden ? muiVisuallyHidden : undefined}
  >
    {children}
  </S.Typography>
);
