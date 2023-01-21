import { axeAccessibilityReporter } from "@/utils/axeAccessibilityReporter";
import { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/global.css";

axeAccessibilityReporter();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter;
  }, []);
  return <Component {...pageProps} />;
}
