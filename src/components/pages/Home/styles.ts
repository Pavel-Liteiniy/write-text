import styled from 'styled-components';

import BoxMUI from '@mui/material/Box';

import { TextWithAI as TextWithAIComponent } from '@/components/TextWithAI';

export const HeaderWrapper = styled(BoxMUI)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const FooterWrapper = styled(BoxMUI)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Main = styled.main`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const HomePage = styled(BoxMUI)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const TextWithAI = styled(TextWithAIComponent)`
  width: 80%;
`;