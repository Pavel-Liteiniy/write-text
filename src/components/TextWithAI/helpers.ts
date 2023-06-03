import debounce from 'lodash/debounce';

import { socketWriteText } from '@/sockets/socket-write-text';

export const updatePrompt = debounce((text: string) => {
  if (text.trim() === '') {
    return;
  }

  socketWriteText.emit('createPrompt', { text });
}, 1000, { leading: true });

const LastNewLineRegExp = /\n$/;
const FirstSpaceRegExp = /^\s/;
const FirstNonWordOrSpaceRegExp = /^[^\w\s]/;

export const concatTextWithPrompt = (text: string, prompt: string) => {
  let preparedText = '';
  let preparedPrompt = '';

  if (LastNewLineRegExp.test(text)) {
    preparedText = text.trimEnd() + '\n';
  } else {
    preparedText = text.trimEnd() + ' ';
  }

  if (FirstNonWordOrSpaceRegExp.test(prompt)) {
    preparedPrompt = prompt.trimEnd();
  } else if (FirstSpaceRegExp.test(prompt)) {
    preparedPrompt = ' ' + prompt.trimStart();
  } else {
    preparedPrompt = prompt.trimStart();
  }

  return preparedText + preparedPrompt;
};
