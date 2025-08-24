import axios from "axios"
import Router from "next/router"

// Base URL env file se uthao
const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  withCredentials: true, // cookies, JWT tokens ke liye agar zarurat ho
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor → token attach karo
client.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token")
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor → error handle + redirect
client.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status

    if (status === 401) {
      console.warn("⚠️ Unauthorized: redirecting to login")
      if (typeof window !== "undefined") {
        Router.push("/login")
      }
    }

    if (status === 403) {
      console.warn("⚠️ Forbidden: redirecting to dashboard")
      if (typeof window !== "undefined") {
        Router.push("/dashboard")
      }
    }

    console.error("API Error:", error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default client
