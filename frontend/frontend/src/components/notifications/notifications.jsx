import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function Notifications() {
  const [budget, setBudget] = useState(20000);
  const [billDate, setBillDate] = useState("");

  const save = () => {
    // call your backend preference save endpoint if available
    alert("Preferences saved (demo). Backend can store thresholds & schedules.");
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-2xl p-6 shadow-sm border max-w-xl space-y-4">
        <h1 className="text-xl font-semibold">Smart Notifications</h1>
        <div className="text-sm text-gray-600">Set thresholds & reminders to get proactive alerts.</div>

        <div>
          <div className="text-sm mb-1">Monthly budget threshold (₹)</div>
          <input type="number" className="border rounded-lg px-3 py-2 w-full" value={budget} onChange={e=>setBudget(Number(e.target.value||0))}/>
        </div>

        <div>
          <div className="text-sm mb-1">Bill due date (optional)</div>
          <input type="date" className="border rounded-lg px-3 py-2 w-full" value={billDate} onChange={e=>setBillDate(e.target.value)}/>
        </div>

        <button onClick={save} className="px-4 py-2 bg-black text-white rounded-lg">Save Preferences</button>
      </div>
    </DashboardLayout>
  );
}
