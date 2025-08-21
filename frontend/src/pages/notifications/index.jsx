// frontend/src/pages/Notifications.jsx
import React, { useState, useEffect } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Mock notifications (later replace with API call if needed)
    setNotifications([
      { id: 1, msg: "⚡ You spent 80% of your Food budget" },
      { id: 2, msg: "💡 Pro tip: Save 10% of income for investments" }
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map((n) => (
          <div key={n.id} className="bg-yellow-100 p-3 mb-2 rounded">
            {n.msg}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No notifications yet.</p>
      )}
    </div>
  );
}
