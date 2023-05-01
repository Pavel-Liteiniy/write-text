import { FC } from 'react';

import * as S from './styles';

type HeaderProps = {
  children: React.ReactNode;
};

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <S.Header>
      {children}
    </S.Header>
  );
};