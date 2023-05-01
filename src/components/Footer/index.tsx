import { FC } from 'react';

import * as S from './styles';

type FooterProps = {
  children: React.ReactNode;
};

export const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <S.Footer>
      {children}
    </S.Footer>
  );
};