import Cookies, { CookieAttributes } from 'js-cookie';

import { CookieSchema } from '@/types/CookieSchema';

export const setCookie = <T extends keyof CookieSchema>(name: T, value: string, options?: CookieAttributes) => {
  Cookies.set(name, value, options);
};