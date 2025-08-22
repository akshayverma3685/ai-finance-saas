// src/pages/index.js

import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link"; // ✅ Import Link

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // ✅ Check authentication (JWT stored in cookie)
    const token = Cookies.get("token");
    if (token) {
      router.replace("/dashboard"); // redirect logged-in users
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-4">🚀 Welcome to AI Finance SaaS</h1>
      <p className="text-gray-600 mb-6">
        Manage your analytics, billing, reports, and more — all in one place.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => router.push("/login")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/signup")}
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          Sign Up
        </button>
      </div>

      {/* Extra Links */}
      <div className="mt-8 text-gray-500 space-x-4">
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/billing" className="hover:underline">
          Billing
        </Link>
        <Link href="/reports" className="hover:underline">
          Reports
        </Link>
        <Link href="/settings" className="hover:underline">
          Settings
        </Link>
      </div>
    </div>
  );
        }
