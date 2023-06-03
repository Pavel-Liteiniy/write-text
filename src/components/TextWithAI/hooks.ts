import {
  useState,
  useEffect,
  KeyboardEvent,
  KeyboardEventHandler,
  ChangeEvent,
} from 'react';

import { ClientToServerEvents, ServerToClientEvents } from '@/sockets/types';
import { socketWriteText } from '@/sockets/socket-write-text';

import { updatePrompt, concatTextWithPrompt } from './helpers';

export const useErrorAI = () => {
  const [error, setError] = useState('');

  socketWriteText.on('exception', (response) => {
    setError(response.message);
  });

  socketWriteText.onAnyOutgoing((event: keyof ClientToServerEvents) => {
    switch (event) {
      case 'createPrompt':
        setError('');
        break;
    }
  });

  socketWriteText.on('promptCreated', () => {
    setError('');
  });

  return {
    error,
  };
};

export const useLoadingAI = () => {
  const [loading, setLoading] = useState(false);

  socketWriteText.onAnyOutgoing((event: keyof ClientToServerEvents) => {
    switch (event) {
      case 'createPrompt':
        setLoading(true);
        break;
    }
  });

  socketWriteText.onAny((event: keyof ServerToClientEvents) => {
    switch (event) {
      case 'promptCreated':
      case 'exception':
        setLoading(false);
        break;
    }
  });

  return {
    loading,
  };
};

export const useTextWithAI = () => {
  const [value, setValue] = useState('');
  const [prompt, setPrompt] = useState('');

  socketWriteText.on('promptCreated', (response) => {
    setPrompt(response.prompt);
  });

  socketWriteText.onAnyOutgoing((event: keyof ClientToServerEvents) => {
    switch (event) {
      case 'createPrompt':
        setPrompt('');
        break;
    }
  });

  const onDelete: KeyboardEventHandler<HTMLDivElement> = (evt: KeyboardEvent<HTMLDivElement>) => {
    const isDelete = evt.key === 'Backspace' || evt.key === 'Delete' || evt.key === 'Escape';
    const isValueEmpty = (evt.target as HTMLTextAreaElement).value.trim() === '';

    if (isDelete || isValueEmpty) {
      setPrompt('');
    }
  };

  const onAcceptPrompt: KeyboardEventHandler<HTMLDivElement> = (evt: KeyboardEvent<HTMLDivElement>) => {
    const isTab = evt.key === 'Tab';

    if (isTab) {
      evt.preventDefault();
      setValue(concatTextWithPrompt(value, prompt));
      setPrompt('');
    }
  };


  const onChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt('');
    setValue(evt.target.value);
  };

  useEffect(() => {
    updatePrompt(value);
  }, [value]);

  return {
    value,
    prompt,
    onChange,
    onDelete,
    onAcceptPrompt,
  };
};
