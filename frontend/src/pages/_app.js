// src/pages/_app.js
import "@/styles/globals.css";   // apna Tailwind CSS yaha import karo
import { useEffect } from "react";
import { useRouter } from "next/router";

// ✅ Example AuthContext (future use ke liye)
import { AuthProvider } from "@/context/AuthContext";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Example: Scroll to top on route change
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
      <Component {...pageProps} />
    </AuthProvider>
  );
}
