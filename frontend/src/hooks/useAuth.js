// frontend/src/hooks/useAuth.js
import { useState, useEffect } from "react";
import axios from "axios";

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setUser(res.data.user))
        .catch(() => setUser(null));
    }
  }, []);

  return user;
}
