import { useEffect, useState } from "react";
import api from "@/utils/api";

export default function DashboardPage() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [insights, setInsights] = useState(null);
  const [newExpense, setNewExpense] = useState({ title: "", amount: "" });
  const [error, setError] = useState("");

  // Load expenses on mount
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await api.getExpenses();
        setExpenses(data || []);
      } catch (err) {
        console.error("Failed to fetch expenses:", err);
        setError("Failed to load expenses.");
      } finally {
        setLoading(false);
      }
    };
    fetchExpenses();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  // Add new expense
  const handleAddExpense = async (e) => {
    e.preventDefault();
    if (!newExpense.title || !newExpense.amount) return;

    setAdding(true);
    try {
      const added = await api.addExpense(newExpense);
      setExpenses([...expenses, added]);
      setNewExpense({ title: "", amount: "" });
    } catch (err) {
      console.error("Failed to add expense:", err);
      setError("Failed to add expense.");
    } finally {
      setAdding(false);
    }
  };

  // Fetch AI insights
  const handleGetInsights = async () => {
    try {
      const res = await api.getAiInsights(expenses);
      setInsights(res);
    } catch (err) {
      console.error("Failed to get insights:", err);
      setError("Failed to get AI insights.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Add Expense Form */}
      <form
        onSubmit={handleAddExpense}
        className="mb-6 bg-white p-4 rounded-2xl shadow-md flex gap-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Expense title"
          value={newExpense.title}
          onChange={handleChange}
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={handleChange}
          className="w-32 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          required
        />
        <button
          type="submit"
          disabled={adding}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {adding ? "Adding..." : "Add"}
        </button>
      </form>

      {/* Expenses List */}
      <div className="bg-white p-4 rounded-2xl shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Expenses</h2>
        {loading ? (
          <p>Loading...</p>
        ) : expenses.length === 0 ? (
          <p className="text-gray-600">No expenses yet.</p>
        ) : (
          <ul className="divide-y">
            {expenses.map((exp, idx) => (
              <li key={idx} className="py-2 flex justify-between">
                <span>{exp.title}</span>
                <span className="font-medium">₹{exp.amount}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* AI Insights */}
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">AI Insights</h2>
        <button
          onClick={handleGetInsights}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 mb-4"
        >
          Generate Insights
        </button>
        {insights && (
          <div className="text-gray-800">
            <pre className="whitespace-pre-wrap">{JSON.stringify(insights, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
        }
