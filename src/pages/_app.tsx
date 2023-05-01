import type { AppContext, AppProps as NextAppProps } from 'next/app';
import Cookies from 'cookies';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import { useCustomTheme } from '@/hooks/useCustomTheme';
import { createEmotionCache } from '@/helpers/createEmotionCache';
import { CustomThemeContext, ThemeMode } from '@/theme';

const clientSideEmotionCache = createEmotionCache();

export type AppProps = NextAppProps & {
  emotionCache?: EmotionCache;
  initialThemeMode?: ThemeMode;
};

export default function App(props: AppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, initialThemeMode } = props;
  const { themeMode, theme, changeTheme } = useCustomTheme(initialThemeMode);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CustomThemeContext.Provider value={{ themeMode, theme, changeTheme }}>
          <CssBaseline />
          <Component {...pageProps} />
        </CustomThemeContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

App.getInitialProps = async ({ ctx: { req, res } }: AppContext) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const cookies = new Cookies(req!, res!);

  return {
    initialThemeMode: cookies.get('themeMode') as ThemeMode | undefined,
  };
};