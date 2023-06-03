import { FC } from 'react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Copyright } from '@/components/Copyright';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Logo } from '@/components/Logo';
import { Typography } from '@/uikit/Typography';

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
        as="h1"
        visuallyHidden
      >
        Start writing with AI!
      </Typography>
      <S.TextWithAI />
    </S.Main>
    <Footer>
      <S.FooterWrapper>
        <Copyright />
      </S.FooterWrapper>
    </Footer>
  </S.HomePage>
);