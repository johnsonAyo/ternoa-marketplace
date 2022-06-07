import "../styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { BrowserRouter } from 'react-router-dom';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Rinkeby}
      chainRpc={{
        [ChainId.Rinkeby]:
          "https://rinkeby.infura.io/v3/9677f24f8c6f43daaf804438d8352160",
      }}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
