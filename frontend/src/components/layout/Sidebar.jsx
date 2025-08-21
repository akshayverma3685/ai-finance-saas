import { Link, useLocation } from "react-router-dom";
import { BarChart3, FileText, CreditCard, PieChart, Menu } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <BarChart3 size={20} /> },
    { name: "Reports", path: "/reports", icon: <FileText size={20} /> },
    { name: "Billing", path: "/billing", icon: <CreditCard size={20} /> },
    { name: "Analytics", path: "/analytics", icon: <PieChart size={20} /> },
  ];

  return (
    <div
      className={`h-screen bg-gray-900 text-gray-200 flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && (
          <h2 className="text-xl font-bold tracking-wide">AI Finance</h2>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white transition"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
              pathname === item.path
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-800 hover:text-white"
            }`}
          >
            {item.icon}
            {!collapsed && <span className="font-medium">{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
        {!collapsed && "© 2025 AI Finance"}
      </div>
    </div>
  );
}
