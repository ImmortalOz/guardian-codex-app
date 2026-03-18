export default function Home() {
  return (
    <div style={{
      background: "#0A0F1C",
      color: "#EAEAEA",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "serif"
    }}>
      <h1 style={{
        fontSize: "48px",
        color: "#D4AF37",
        marginBottom: "20px"
      }}>
        Guardian Codex
      </h1>

      <p style={{
        fontSize: "18px",
        color: "#ccc",
        marginBottom: "30px"
      }}>
        Enter the path of structured transformation
      </p>

      <a href="/dashboard">
        <button style={{
          padding: "12px 24px",
          background: "#D4AF37",
          border: "none",
          borderRadius: "8px",
          color: "#000",
          fontWeight: "bold"
        }}>
          Begin Journey
        </button>
      </a>
    </div>
  );
}