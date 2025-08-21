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

export default function App() {
  // token check
  const [token, setToken] = useState(localStorage.getItem("token"));

  function onAuth(t) {
    localStorage.setItem("token", t);
    setToken(t);
  }
  function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔹 Navbar */}
      <nav className="flex gap-4 p-4 border-b bg-white shadow-sm">
        <Link to="/" className="text-blue-600 font-medium">Dashboard</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/upgrade">Upgrade</Link>
        <Link to="/billing">Billing</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/settings">Settings</Link>
        
        <div className="ml-auto">
          {token ? (
            <button onClick={logout} className="px-3 py-1 bg-red-500 text-white rounded">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1 bg-blue-500 text-white rounded mr-2">Login</Link>
              <Link to="/signup" className="px-3 py-1 bg-green-500 text-white rounded">Signup</Link>
            </>
          )}
        </div>
      </nav>

      {/* 🔹 Page Content */}
      <main className="p-6">
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
      </main>
    </div>
  );
    }
