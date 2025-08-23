import { useEffect, useState } from "react";
import { getExpenses, addExpense, getAiInsights } from "@/utils/api";

export default function DashboardPage() {
  const [expenses, setExpenses] = useState([]);
  const [insights, setInsights] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
        const aiData = await getAiInsights(data);
        setInsights(aiData);
      } catch (err) {
        console.error("Failed to load dashboard", err);
      }
    };
    fetchExpenses();
  }, []);

  const handleAddExpense = async () => {
    try {
      const newExpense = await addExpense({ name: "Test", amount: 100 });
      setExpenses((prev) => [...prev, newExpense]);
    } catch (err) {
      console.error("Add expense failed", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <button
        onClick={handleAddExpense}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Add Expense
      </button>

      <h2 className="text-lg font-semibold">Expenses</h2>
      <ul className="list-disc pl-6 mb-6">
        {expenses.map((e, i) => (
          <li key={i}>{e.name} - ${e.amount}</li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold">AI Insights</h2>
      {insights ? (
        <pre className="bg-gray-100 p-3 rounded">{JSON.stringify(insights, null, 2)}</pre>
      ) : (
        <p>Loading insights...</p>
      )}
    </div>
  );
}
