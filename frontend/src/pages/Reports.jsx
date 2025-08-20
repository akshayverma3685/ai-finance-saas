import React from "react";
import api from "../utils/api.js";
import dayjs from "dayjs";

export default function Reports(){
  const month = dayjs().format("YYYY-MM");
  const open = (url)=> window.open(url, "_blank");
  return (
    <div>
      <h2>Reports</h2>
      <button onClick={()=>open(`${import.meta.env.VITE_API_BASE_URL}/reports/monthly.pdf?month=${month}`)}>Download PDF</button>
      <button onClick={()=>open(`${import.meta.env.VITE_API_BASE_URL}/reports/monthly.xlsx?month=${month}`)}>Download Excel</button>
    </div>
  );
}
