// frontend/src/components/Navbar.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import NotificationBell from "./NotificationBell";
import { Menu, X, User } from "lucide-react";

export default function Navbar({ notifications }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left - Logo */}
          <Link to="/" className="font-bold text-xl flex items-center gap-2">
            💰 AI Finance SaaS
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `hover:underline ${
                    isActive ? "font-bold border-b-2 border-white" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <NotificationBell notifications={notifications} />
            {/* Profile Icon */}
            <button className="ml-4 bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "font-bold border-l-4 pl-2 border-white" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <div className="mt-2 flex items-center gap-3">
            <NotificationBell notifications={notifications} />
            <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
                    }
