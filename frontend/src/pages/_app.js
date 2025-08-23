// src/pages/_app.js
import "@/styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // Optional: remove React strict warnings in dev OR add global setup here
  useEffect(() => {
    console.log("App mounted ✅");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
