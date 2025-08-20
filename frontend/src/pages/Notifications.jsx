// frontend/src/pages/Notifications.jsx
import { useState, useEffect } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Mock notifications
    setNotifications([
      { id: 1, msg: "⚡ You spent 80% of your Food budget" },
      { id: 2, msg: "💡 Pro tip: Save 10% of income for investments" }
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      {notifications.map((n) => (
        <div key={n.id} className="bg-yellow-100 p-3 mb-2 rounded">
          {n.msg}
        </div>
      ))}
    </div>
  );
}
