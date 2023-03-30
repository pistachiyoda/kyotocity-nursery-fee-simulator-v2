import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import React from "react";
import { createEmotionCache } from "../src/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache?: EmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
      <CssBaseline />
    </CacheProvider>
  );
}

export default MyApp;
