import React from "react";
import api from "../utils/api.js";
import dayjs from "dayjs";

export default function Reports() {
  const month = dayjs().format("YYYY-MM");
  const base = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  const open = (url) => {
    try {
      window.open(url, "_blank");
    } catch (e) {
      console.error("Failed to open report:", e);
      alert("Could not open report. Check API URL.");
    }
  };

  return (
    <div>
      <h2>Reports</h2>
      <button
        onClick={() => open(`${base}/reports/monthly.pdf?month=${month}`)}
      >
        Download PDF
      </button>
      <button
        onClick={() => open(`${base}/reports/monthly.xlsx?month=${month}`)}
      >
        Download Excel
      </button>
    </div>
  );
}
