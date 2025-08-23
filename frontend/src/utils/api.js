import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api", // fallback
});

api.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// --- API FUNCTIONS ---

// Upload receipt (OCR)
export const uploadReceipt = async (file) => {
  const formData = new FormData();
  formData.append("receipt", file);
  const res = await api.post("/ocr/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// Add new expense
export const addExpense = async (expenseData) => {
  const res = await api.post("/expenses", expenseData);
  return res.data;
};

// Get all expenses
export const getExpenses = async () => {
  const res = await api.get("/expenses");
  return res.data;
};

export default api;
