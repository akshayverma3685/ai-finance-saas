"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-100 p-6 shadow-lg">
      <h2 className="text-lg font-semibold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard" className="text-gray-800 hover:text-blue-600">
            📊 Dashboard
          </Link>
        </li>
        <li>
          <Link href="/OCRUpload" className="text-gray-800 hover:text-blue-600">
            📂 OCR Upload
          </Link>
        </li>
        <li>
          <Link href="/profile" className="text-gray-800 hover:text-blue-600">
            👤 Profile
          </Link>
        </li>
        <li>
          <Link href="/settings" className="text-gray-800 hover:text-blue-600">
            ⚙️ Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}
