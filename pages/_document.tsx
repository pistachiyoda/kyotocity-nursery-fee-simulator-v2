import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { createEmotionCache } from "../src/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";

export default class MyDocument extends Document<{
  emotionStyleTags: JSX.Element[];
}> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {this.props.emotionStyleTags}
          <meta
            name="google-site-verification"
            content="QSSagDQxJDpzwkQ5v43H57EuZc9RwvzqQ9LEqZ99s4I"
          />
          <meta
            name="description"
            content="京都市の保育料を子供の人数、年齢と年収を入力するだけで簡単に計算できるサイトです。"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });
  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
