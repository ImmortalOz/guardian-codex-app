export default function Home() {
  return (
    <div style={{
      background: "#0A0F1C",
      color: "#EAEAEA",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
      fontFamily: "serif"
    }}>
      <div>
        <h1 style={{
          fontSize: "42px",
          color: "#D4AF37",
          marginBottom: "20px"
        }}>
          Guardian Codex
        </h1>

        <p style={{
          fontSize: "16px",
          color: "#ccc",
          marginBottom: "30px",
          maxWidth: "300px"
        }}>
          Enter the path of structured transformation
        </p>

        <a href="/dashboard">
          <button style={{
            padding: "12px 24px",
            background: "#D4AF37",
            border: "none",
            borderRadius: "10px",
            color: "#000",
            fontWeight: "bold"
          }}>
            Begin Journey
          </button>
        </a>
      </div>
    </div>
  );
const handlePay = async () => {
  const res = await fetch("/api/paystack/initiate", {
    method: "POST",
  });

  const data = await res.json();
  window.location.href = data.authorization_url;
};
}
