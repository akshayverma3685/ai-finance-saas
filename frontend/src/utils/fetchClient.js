// src/utils/fetchClient.js
import axios from "axios";

// Base URL env file se uthao
const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  withCredentials: true, // cookies, JWT tokens ke liye agar zarurat ho
  headers: {
    "Content-Type": "application/json",
  },
});

// Agar response me error aaye to handle karo
client.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default client;
