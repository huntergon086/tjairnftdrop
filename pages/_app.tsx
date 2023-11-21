import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
//import { Tjair } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
//const activeChain = "Tjair";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ThirdwebProvider
      //clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      //activeChain={activeChain}
      activeChain={{
        // === Required information for connecting to the network === \\
        chainId: 7057567, // Chain ID of the network
        rpc: ["https://froopyland.dymension.xyz/4/xhunter_7057567-1/evmrpc"],
        nativeCurrency: {
          decimals: 18,
          name: "Tjair",
          symbol: "tjair",
        },
        shortName: "Tjair", // Display value shown in the wallet UI
        slug: "Tjair", // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "Tjair", // Name of the network
        name: "Tjair", // Name of the network
      }}
    >

      <Navbar/>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
