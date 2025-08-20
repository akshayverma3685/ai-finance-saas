// frontend/src/components/Navbar.jsx
import { Link } from "react-router-dom";
import NotificationBell from "./NotificationBell";

export default function Navbar({ notifications }) {
  return (
    <nav className="flex items-center justify-between bg-blue-600 px-6 py-3 text-white">
      <h1 className="font-bold text-xl">💰 AI Finance SaaS</h1>
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/reports" className="hover:underline">Reports</Link>
        <Link to="/settings" className="hover:underline">Settings</Link>
        <NotificationBell notifications={notifications} />
      </div>
    </nav>
  );
}
