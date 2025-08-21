import client from "./fetchClient";

export const loginApi   = (email, password) => client.post("/auth/login", { email, password }).then(r=>r.data);
export const signupApi  = (payload) => client.post("/auth/register", payload).then(r=>r.data);
export const getMe      = () => client.get("/auth/me").then(r=>r.data);

export const getExpenses   = () => client.get("/expenses").then(r=>r.data);
export const addExpense    = (payload) => client.post("/expenses", payload).then(r=>r.data);

export const getAiInsights = (expenses) => client.post("/ai/insights", { expenses }).then(r=>r.data);

export const createCheckoutSession = (priceId) =>
  client.post("/stripe/checkout", { priceId }).then(r=>r.data);

export const getReportPdf = async () =>
  client.get("/reports/download", { responseType: "blob" }).then(r=>r.data);

export const uploadReceipt = async (file) => {
  const form = new FormData(); form.append("file", file);
  return client.post("/ocr/upload", form, { headers: { "Content-Type": "multipart/form-data" } }).then(r=>r.data);
};
