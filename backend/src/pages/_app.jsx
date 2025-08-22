// src/pages/_app.jsx
import "@/styles/globals.css"
import Script from "next/script"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Razorpay checkout script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  )
}
