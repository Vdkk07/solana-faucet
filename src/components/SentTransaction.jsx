import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useState } from "react";

const SentTransaction = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const [amount, setAmount] = useState("");
  const [to, setTo] = useState("");

  async function sentTransaction() {

    
    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );

    const response = await wallet.sendTransaction(transaction, connection);
    alert("Sent " + amount + " SOL to " + to);
    console.log(response);
  }

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
        Send Solana
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          id="to"
          placeholder="Enter Address"
          onChange={(e) => setTo(e.target.value)}
          style={{
            padding: 10,
            fontSize: 16,
            border: "1px solid #ccc",
            borderRadius: 5,
            width: 200,
            marginBottom: "1rem",
          }}
        />

        <input
          type="text"
          id="amount"
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
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
          onClick={sentTransaction}
        >
          Send Solana
        </button>
      </div>
    </div>
  );
};

export default SentTransaction;
