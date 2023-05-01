import type { AppProps as NextAppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import { useCustomTheme } from '@/hooks/useCustomTheme';
import { createEmotionCache } from '@/helpers/createEmotionCache';
import { ChangeThemeContext } from '@/theme';

const clientSideEmotionCache = createEmotionCache();

export type AppProps = NextAppProps & {
  emotionCache?: EmotionCache;
};

export default function MyApp(props: AppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [theme, setTheme] = useCustomTheme();

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <ChangeThemeContext.Provider value={setTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ChangeThemeContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}