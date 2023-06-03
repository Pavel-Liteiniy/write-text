import styled from 'styled-components';

import { TextArea as TextAreaComponent } from '@/components/TextArea';
import { Spinner as SpinnerUikit } from '@/uikit/Spinner';

export const Spinner = styled(SpinnerUikit)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const TextWithAI = styled.div`
  position: relative;
`;

export const TextAreaWrapper = styled.div`
  position: relative;
`;

export const TextArea = styled(TextAreaComponent)``;

export const TextAreaEditor = styled(TextAreaComponent)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const TextAreaWithPrompt = styled(TextAreaComponent)``;