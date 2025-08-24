import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") + "/api",
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  if (res?.data?.data?.token) localStorage.setItem("token", res.data.data.token);
  return res.data;
};

api.me = async () => (await api.get("/auth/me")).data;
api.logout = () => localStorage.removeItem("token");

export default api;
