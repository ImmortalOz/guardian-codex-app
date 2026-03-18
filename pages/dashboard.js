export default function Dashboard() {
  return (
    <div style={{
      background: "#0A0F1C",
      color: "#fff",
      height: "100vh",
      padding: "40px"
    }}>
      <h1 style={{ color: "#D4AF37" }}>Stage 1 Complete</h1>

      <p style={{ marginTop: "10px", color: "#ccc" }}>
        You have completed the first stage.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#D4AF37",
          border: "none",
          borderRadius: "8px",
          color: "#000",
          fontWeight: "bold"
        }}
        onClick={() => alert("Checkout triggered")}
      >
        Unlock Stage 2
      </button>
    </div>
  );
}