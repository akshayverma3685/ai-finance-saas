// src/pages/index.js

import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link"; 
import { TrendingUp, Users, DollarSign, BarChart } from "lucide-react"; // ✅ Icons
import { Card, CardContent } from "@/components/ui/Card"; // ✅ Card component

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      router.replace("/dashboard"); 
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-4">🚀 Welcome to AI Finance SaaS</h1>
      <p className="text-gray-600 mb-6 text-center max-w-xl">
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

      {/* Stats Section (✅ Card.jsx icons used here) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-5xl">
        <Card>
          <CardContent className="flex items-center space-x-4">
            <TrendingUp className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-xl font-bold">24%</p>
              <p className="text-gray-500">Growth</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-4">
            <Users className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-xl font-bold">1,200+</p>
              <p className="text-gray-500">Users</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-4">
            <DollarSign className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-xl font-bold">$12k</p>
              <p className="text-gray-500">Revenue</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-4">
            <BarChart className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-xl font-bold">98%</p>
              <p className="text-gray-500">Accuracy</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Extra Links */}
      <div className="mt-12 text-gray-500 space-x-6">
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
