import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Reports from "./pages/Reports.jsx";
import Upgrade from "./pages/Upgrade.jsx";
import Billing from "./pages/Billing.jsx";
import Analytics from "./pages/Analytics.jsx";
import Notifications from "./pages/Notifications.jsx";
import Settings from "./pages/Settings.jsx";

export default function App(){
  const [token, setToken] = useState(localStorage.getItem("token"));
  function onAuth(t){ localStorage.setItem("token", t); setToken(t); }
  function logout(){ localStorage.removeItem("token"); setToken(null); }

  return (
    <div>
      <nav style={{display:"flex", gap:12, padding:12, borderBottom:"1px solid #eee"}}>
        <Link to="/">Dashboard</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/upgrade">Upgrade</Link>
        <Link to="/billing">Billing</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/settings">Settings</Link>
        {token ? <button onClick={logout}>Logout</button> : <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>}
      </nav>
      <div style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login onLogin={onAuth} />} />
          <Route path="/signup" element={<Signup onSignup={onAuth} />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
