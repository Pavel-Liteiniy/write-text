import { FC } from 'react';

import Typography from '@mui/material/Typography';

import visuallyHidden from '@mui/utils/visuallyHidden';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Copyright } from '@/components/Copyright';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Logo } from '@/components/Logo';

import * as S from './styles';

export const HomePage: FC = () => (
  <S.HomePage>
    <Header>
      <S.HeaderWrapper>
        <Logo />
        <ThemeSwitcher />
      </S.HeaderWrapper>
    </Header>
    <S.Main>
      <Typography
        component="h1"
        sx={visuallyHidden}
      >
        Start writing with AI!
      </Typography>
      <S.TextArea />
    </S.Main>
    <Footer>
      <S.FooterWrapper>
        <Copyright />
      </S.FooterWrapper>
    </Footer>
  </S.HomePage>
);