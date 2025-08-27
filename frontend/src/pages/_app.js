import "@/styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("App mounted ✅");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
