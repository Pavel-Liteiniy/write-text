import isNil from 'lodash/isNil';

import { LocalStorageSchema } from '@/types/LocalStorageSchema';

export const getLocalStorageItem = <T extends keyof LocalStorageSchema>(key: T): LocalStorageSchema[T] | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  if (!window.localStorage) {
    throw new Error('localStorage is not available');
  }

  try {
    const item = JSON.parse(window.localStorage.getItem(key) ?? 'null') as LocalStorageSchema[T];

    if (isNil(item)) {
      return null;
    }

    return item;
  } catch (err) {
    throw new Error(`Error getting localStorage item: ${err}`);
  }
};