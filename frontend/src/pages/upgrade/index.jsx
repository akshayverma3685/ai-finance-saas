import React from "react";
import api from "../utils/api.js";
export default function Upgrade(){
  const goPro = async ()=>{
    const { data } = await api.post("/stripe/create-checkout-session", {});
    window.location.href = data.url;
  };
  return (
    <div>
      <h2>Go Pro</h2>
      <p>Unlock AI insights, OCR, reports, chatbot and more.</p>
      <button onClick={goPro}>Upgrade with Stripe</button>
    </div>
  );
}
