import { Bell, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-gray-800">AI Finance</h1>

      <div className="flex items-center gap-6">
        {/* 🔔 Notification Button */}
        <button className="relative hover:text-blue-600 transition">
          <Bell size={20} />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        {/* 👤 User Avatar */}
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
          <User size={22} />
          <span className="text-sm font-medium">Akshay</span>
        </div>
      </div>
    </header>
  );
          }
