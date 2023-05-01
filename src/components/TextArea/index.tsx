'use client';

import { FC } from 'react';
import TextField from '@mui/material/TextField';
import random from 'lodash/random';

import { PLACEHOLDERS } from './constants';
import * as S from './styles';

const RANDOM_PLACEHOLDER = PLACEHOLDERS[random(PLACEHOLDERS.length - 1)];

type TextAreaProps = {
  className?: string;
};

export const TextArea: FC<TextAreaProps> = ({ className }) => (
  <S.TextArea className={className}>
    <TextField
      multiline
      placeholder={RANDOM_PLACEHOLDER}
      fullWidth
      minRows={10}
    />
  </S.TextArea>
);