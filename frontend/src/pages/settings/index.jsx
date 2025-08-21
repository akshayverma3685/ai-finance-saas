// frontend/src/pages/Settings.jsx
import { useState } from "react";

export default function Settings() {
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <label className="block mb-2">Preferred Currency:</label>
      <select
        className="border p-2 rounded"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option>USD</option>
        <option>INR</option>
        <option>EUR</option>
      </select>
    </div>
  );
}
