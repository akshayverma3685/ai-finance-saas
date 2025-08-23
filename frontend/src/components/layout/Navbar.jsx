"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ Menu icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          AI Finance SaaS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/dashboard" className="hover:text-blue-400 transition-colors">
            Dashboard
          </Link>
          <Link href="/reports" className="hover:text-blue-400 transition-colors">
            Reports
          </Link>
          <Link href="/billing" className="hover:text-blue-400 transition-colors">
            Billing
          </Link>
          <Link href="/settings" className="hover:text-blue-400 transition-colors">
            Settings
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/login"
            className="px-4 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-1 rounded-lg bg-gray-200 text-gray-900 hover:bg-gray-300 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          <Link href="/dashboard" className="block hover:text-blue-400">
            Dashboard
          </Link>
          <Link href="/reports" className="block hover:text-blue-400">
            Reports
          </Link>
          <Link href="/billing" className="block hover:text-blue-400">
            Billing
          </Link>
          <Link href="/settings" className="block hover:text-blue-400">
            Settings
          </Link>

          <div className="pt-4 flex space-x-3">
            <Link
              href="/login"
              className="px-4 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-1 rounded-lg bg-gray-200 text-gray-900 hover:bg-gray-300 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
        }
