// src/pages/_app.js
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
// Tailwind CSS import
import { useEffect } from "react";
import { useRouter } from "next/router";

// Auth Context
import { AuthProvider } from "@/context/AuthContext";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Scroll to top on route change
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
