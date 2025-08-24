"use client";

import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";
import Footer from "../components/layout/footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-white p-6 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
