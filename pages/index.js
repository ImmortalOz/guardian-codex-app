export default function Home() {

  const handlePay = async () => {
    const res = await fetch("/api/paystack/initiate", {
      method: "POST",
    });

    const data = await res.json();
    window.location.href = data.authorization_url;
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Guardian Codex</h1>
      <p>Start your journey</p>

      <button
        onClick={handlePay}
        style={{
          padding: "12px 20px",
          backgroundColor: "#c9a227",
          color: "#000",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Unlock Stage 2
      </button>
    </div>
  );
}
