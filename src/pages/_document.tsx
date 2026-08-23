import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { AI_WATERMARK_COMMENT } from "../lib/watermark";

export default class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(ctx);
    // Prepend the watermark so it sits at the top of <body>, before the
    // React root — real HTML comment, invisible to humans, outside hydration.
    return { ...initialProps, html: AI_WATERMARK_COMMENT + initialProps.html };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" sizes="32x32" />
          <link rel="icon" href="/icon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#fafaf8" />
          <meta name="author" content="Drew Templeton" />
          <meta name="format-detection" content="telephone=no" />
          <link
            rel="alternate"
            type="text/plain"
            href="/llms.txt"
            title="llms.txt"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
