import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const RequestAirdrops = () => {
  const wallet = useWallet();

  const { connection } = useConnection();

  function RequestAirdrop() {
    const amount = document.getElementById("amount").value;

    if (wallet.publicKey && amount) {
      connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);

      alert(amount + " SOL is successfully sent to " + wallet.publicKey);
    } else {
      alert(
        "Please  connect your wallet or enter the amount of SOL to airdrop."
      );
    }
  }

  return (
    <div style={{
        marginTop:"3rem"
    }}>
      <h1 style={{
        textAlign:"center"
      }}>Airdrops</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          id="amount"
          placeholder="Enter Amount"
          style={{
            padding: 10,
            fontSize: 16,
            border: "1px solid #ccc",
            borderRadius: 5,
            width: 200,
            marginBottom: "1rem",
          }}
        />
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: 10,
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
          onClick={RequestAirdrop}
        >
          Request Airdrop
        </button>
      </div>
    </div>
  );
};

export default RequestAirdrops;
