import { FC } from 'react';
import dayjs from 'dayjs';

import Typography from '@mui/material/Typography';

import * as S from './styles';

export const Copyright: FC = () => {
  return (
    <S.Copyright>
      <Typography
        component="p"
        variant="body2"
      >
        Copyright &copy;&nbsp;{dayjs().year()}&nbsp;WriteText. All rights reserved.
      </Typography>
    </S.Copyright>
  );
};