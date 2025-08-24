// frontend/src/components/ExpenseForm.jsx
import { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({ category: "", amount: "", date: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAdd) onAdd(form);
    setForm({ category: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow">
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="border p-2 mr-2" />
      <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" className="border p-2 mr-2" />
      <input name="date" type="date" value={form.date} onChange={handleChange} className="border p-2 mr-2" />
      <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">Add</button>
    </form>
  );
}
