import { useState } from "react";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div style={{padding:20}}>
      <h1>Dashboard</h1>

      {showModal && (
        <div style={{
          background:"#111",
          padding:20,
          color:"#fff",
          borderRadius:10
        }}>
          <h2>Stage 1 Complete</h2>
          <p>Continue your journey to Stage 2</p>

          <button
            style={{
              marginTop:10,
              padding:"10px 20px",
              background:"orange",
              border:"none",
              borderRadius:6
            }}
            onClick={() => alert("Checkout triggered")}
          >
            Unlock Stage 2
          </button>
        </div>
      )}
    </div>
  );
}
