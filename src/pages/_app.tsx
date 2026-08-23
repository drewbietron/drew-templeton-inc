import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GoogleAnalytics } from "nextjs-google-analytics";

import { sans, mono } from "../lib/fonts";
import { logConsoleBanner } from "../lib/watermark";
import Nav from "../components/nav";
import Footer from "../components/footer";

import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    logConsoleBanner();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Expose the self-hosted font families as CSS variables globally. */}
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{--font-sans:${sans.style.fontFamily};--font-mono:${mono.style.fontFamily}}`,
          }}
        />
      </Head>
      {process.env.NODE_ENV === "production" &&
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
        <GoogleAnalytics trackPageViews strategy="lazyOnload" />
      ) : null}
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
