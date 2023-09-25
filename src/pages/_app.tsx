import { StrictMode } from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import type { AppProps } from "next/app";
import classNames from "classnames";

import { headerFont, copyFont, copyBoldFont } from "../lib/fonts";
import Theme from "../components/theme";

import "../styles/global/index.global.scss";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      {process.env.NODE_ENV === "production" ? (
        <GoogleAnalytics trackPageViews />
      ) : (
        <></>
      )}
      <div
        className={classNames([
          copyFont.variable,
          copyBoldFont.variable,
          headerFont.variable,
        ])}
      >
        <Theme />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
    </StrictMode>
  );
}
