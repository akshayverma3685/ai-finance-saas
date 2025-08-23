// src/pages/_app.jsx
import "@/styles/globals.css";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

// Auth Context
import { AuthProvider } from "@/context/AuthContext";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <AuthProvider>
      {/* Razorpay checkout script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
