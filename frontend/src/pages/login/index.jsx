// frontend/src/pages/Login.jsx
import React, { useState } from "react";
import api from "../utils/api.js";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    try {
      const r = await api.post("/auth/login", { email, password });
      if (r.data?.token) {
        onLogin(r.data.token);
      } else {
        setErr("No token received from server.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErr(error.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form 
      onSubmit={submit} 
      style={{ maxWidth: 360, margin: "0 auto", display: "grid", gap: 8 }}
    >
      <h2>Login</h2>
      {err && <div style={{ color: "red" }}>{err}</div>}

      <input 
        type="email"
        placeholder="Email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        required
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
