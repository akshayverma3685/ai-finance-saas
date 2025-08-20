// frontend/src/hooks/useNotification.js
import { useState, useEffect } from "react";

export default function useNotification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Dummy periodic notification
    const timer = setInterval(() => {
      setNotifications((prev) => [
        ...prev,
        { id: Date.now(), msg: "💡 Don’t forget to log today’s expenses!" }
      ]);
    }, 120000); // every 2 min

    return () => clearInterval(timer);
  }, []);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return { notifications, removeNotification };
}
