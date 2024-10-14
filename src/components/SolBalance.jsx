import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const SolBalance = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function getBalance() {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);

      document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
    }
 
  }

  getBalance();

  return (
    <div
      style={{
        marginTop: "3rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Sol Balance : <span id="balance"></span>

      </h1>
    </div>
  );
};

export default SolBalance;
