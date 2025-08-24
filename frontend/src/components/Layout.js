import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import api from "@/utils/api";

const navLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Admin", href: "/admin" },
  { name: "Expenses", href: "/expenses" },
];

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    api.logout();
    window.location.href = "/login"; // redirect after logout
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out md:translate-x-0 md:static`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">Finance SaaS</h1>
          <button
            className="md:hidden text-gray-600"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="destructive"
            className="w-full mt-4 flex items-center gap-2"
            onClick={handleLogout}
          >
            <LogOut size={16} /> Logout
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white p-4 shadow-md md:pl-6">
          <button
            className="md:hidden text-gray-600"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          <h2 className="text-lg font-semibold">Welcome 👋</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block border rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-blue-200"
            />
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
              }
