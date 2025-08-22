"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">AI Finance SaaS</h1>
      <div className="flex gap-6">
        <Link href="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
        <Link href="/OCRUpload" className="hover:text-gray-300">
          OCR Upload
        </Link>
        <Link href="/profile" className="hover:text-gray-300">
          Profile
        </Link>
      </div>
    </nav>
  );
}
