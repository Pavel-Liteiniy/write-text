import Cookies from 'js-cookie';

import { CookieSchema } from '@/types/CookieSchema';

export const getCookie = <T extends keyof CookieSchema>(name: T): CookieSchema[T] => {
  return Cookies.get(name) as CookieSchema[T];
};
