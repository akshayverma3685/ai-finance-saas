// src/components/Sidebar.js
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav className="space-y-4">
        <Link href="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>
        <Link href="/billing" className="block hover:text-blue-400">
          Billing
        </Link>
        <Link href="/admin" className="block hover:text-blue-400">
          Admin
        </Link>
        <Link href="/settings" className="block hover:text-blue-400">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
