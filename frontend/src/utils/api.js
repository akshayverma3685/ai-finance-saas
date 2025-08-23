import client from "./fetchClient";

const api = {
  login: (email, password) =>
    client.post("/auth/login", { email, password }).then((r) => r.data),

  signup: (payload) =>
    client.post("/auth/register", payload).then((r) => r.data),

  getMe: () =>
    client.get("/auth/me").then((r) => r.data),

  getExpenses: () =>
    client.get("/expenses").then((r) => r.data),

  addExpense: (payload) =>
    client.post("/expenses", payload).then((r) => r.data),

  getAiInsights: (expenses) =>
    client.post("/ai/insights", { expenses }).then((r) => r.data),

  createCheckoutSession: (priceId) =>
    client.post("/stripe/checkout", { priceId }).then((r) => r.data),

  getReportPdf: async () =>
    client.get("/reports/download", { responseType: "blob" }).then((r) => r.data),

  uploadReceipt: async (file) => {
    const form = new FormData();
    form.append("file", file);
    return client.post("/ocr/upload", form, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((r) => r.data);
  },
};

export default api;
