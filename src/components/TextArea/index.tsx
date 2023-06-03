import { FC } from 'react';
import { TextFieldProps } from '@mui/material';

import * as S from './styles';

export const TextArea: FC<TextFieldProps> = (props) => (
  <S.TextArea {...props} />
);