import { useState, useEffect } from "react";
import axios from "axios";

export default function useNotification(userId) {
  const [notifications, setNotifications] = useState([]);

  //  Fetch backend smart notifications
  useEffect(() => {
    if (!userId) return;

    const fetchNotifications = async () => {
      try {
        const res = await axios.get(`/api/notifications/${userId}`);
        if (res.data && Array.isArray(res.data)) {
          setNotifications(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch notifications:", err.message);
      }
    };

    fetchNotifications();

    const interval = setInterval(fetchNotifications, 300000);
    return () => clearInterval(interval);
  }, [userId]);

  // ✅ Local smart reminders
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hour = now.getHours();

      let msg = null;
      if (hour === 21) {
        msg = "🌙 Reminder: Did you log all your expenses for today?";
      } else if (hour === 9) {
        msg = "☀️ Good morning! Don’t forget to set your budget for the day.";
      }

      if (msg) {
        setNotifications((prev) => [...prev, { id: Date.now(), msg }]);
      }
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  //  Dismiss notification
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return { notifications, removeNotification };
}
