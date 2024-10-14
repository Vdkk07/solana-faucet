import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import "@solana/wallet-adapter-react-ui/styles.css";
import RequestAirdrops from "./components/RequestAirdrops";
import SolBalance from "./components/SolBalance";
import SentTransaction from "./components/SentTransaction";

const App = () => {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0  auto",
              marginTop: "2rem",
            }}
          >
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>

          <div
            style={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0  auto",
              marginTop: "2rem",
            }}
          >
            <RequestAirdrops></RequestAirdrops>

            <SolBalance></SolBalance>

            <SentTransaction></SentTransaction>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
