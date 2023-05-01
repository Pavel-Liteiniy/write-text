import { LocalStorageSchema } from '@/types/LocalStorageSchema';

export const setLocalStorageItem = <T extends keyof LocalStorageSchema>(key: T, value: LocalStorageSchema[T]): void => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!window?.localStorage) {
    throw new Error('localStorage is not available');
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw new Error(`Error setting localStorage item: ${err}`);
  }
};