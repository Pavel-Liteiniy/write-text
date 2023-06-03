import { FC, useEffect, useState } from 'react';

import { Snackbar } from '@/uikit/Snackbar';

import { useTextWithAI, useErrorAI, useLoadingAI } from './hooks';

import {concatTextWithPrompt} from './helpers';
import * as S from './styles';
import {Alert} from '@/uikit/Alert';

type TextWithAIProps = {
  className?: string;
};

export const TextWithAI: FC<TextWithAIProps> = ({ className }) => {
  const {
    value,
    prompt,
    onChange,
    onDelete,
    onAcceptPrompt,
  } = useTextWithAI();

  const { error } = useErrorAI();
  const { loading } = useLoadingAI();

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  useEffect(() => {
    setIsSnackbarOpen(!!error);
  }, [error]);

  return (
    <>
      <S.TextWithAI className={className}>
        <S.TextAreaWrapper>
          <S.TextAreaWithPrompt
            value={concatTextWithPrompt(value, prompt)}
            minRows={10}
            multiline
            fullWidth
            type="text"
            name="text-with-prompt-with-ai"
            aria-label="Text with AI's prompt"
            disabled
          />
          <S.TextAreaEditor
            value={value}
            placeholder="Just start typing and press 'tab' to accept the prompt."
            onChange={onChange}
            onKeyDown={(evt) => {
              onDelete(evt);
              onAcceptPrompt(evt);
            }}
            minRows={10}
            multiline
            fullWidth
            type="text"
            name="text-with-ai"
            aria-label="Text with AI"
          />
        </S.TextAreaWrapper>
        {loading && (
          <S.Spinner
            size={15}
            disableShrink
            thickness={5}
          />
        )}
      </S.TextWithAI>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={1000}
        onClose={() => setIsSnackbarOpen(false)}
      >
        <Alert type="error">
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};