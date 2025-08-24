// frontend/src/components/NotificationBell.jsx
import { useState } from "react";

export default function NotificationBell({ notifications }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative">
        🔔
        {notifications.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded">
            {notifications.length}
          </span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white border shadow-lg rounded p-2">
          {notifications.length === 0 ? (
            <p className="text-gray-500">No new notifications</p>
          ) : (
            notifications.map((n) => (
              <div key={n.id} className="border-b py-1">{n.msg}</div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
