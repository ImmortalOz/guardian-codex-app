export default async function handler(req, res) {
  const response = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "test@email.com",
      amount: 500000, // ₦5,000
      callback_url: "https://guardian-codex-app.vercel.app/payment/success",
    }),
  });

  const data = await response.json();
  res.status(200).json(data.data);
}
