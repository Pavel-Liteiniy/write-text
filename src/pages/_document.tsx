import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps as NextDocumentProps,
  DocumentContext,
} from 'next/document';
import { AppType } from 'next/app';

import { ServerStyleSheet } from 'styled-components';

import createEmotionServer from '@emotion/server/create-instance';

import { createEmotionCache } from '@/helpers/createEmotionCache';

import { openSans } from '@/theme/fonts';
import { Theme } from '@/theme';


import { AppProps } from './_app';

type DocumentProps = NextDocumentProps & {
  emotionStyleTags: JSX.Element[];
};

export default function Document({ emotionStyleTags }: DocumentProps) {
  return (
    <Html lang="en" className={openSans.className}>
      <Head>
        <meta name="theme-color" content={Theme.light.palette.primary.main} />
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
Document.getInitialProps = async (ctx: DocumentContext) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const sheet = new ServerStyleSheet();

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & AppProps>) =>
          function EnhanceApp(props) {
            return sheet.collectStyles(<App emotionCache={cache} {...props} />);
          },
      });

    const initialProps = await NextDocument.getInitialProps(ctx);
    // This is important. It prevents Emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      emotionStyleTags,
      styles: [initialProps.styles, sheet.getStyleElement()],
    };
  } finally {
    sheet.seal();
  }
};