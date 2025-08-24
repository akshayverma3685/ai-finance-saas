import { useEffect, useState } from "react";
import { getExpenses, addExpense } from "@/utils/api";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getExpenses().then(setExpenses).catch(console.error);
  }, []);

  const handleAddExpense = async () => {
    try {
      const newExpense = await addExpense({ name: "Coffee", amount: 50 });
      setExpenses((prev) => [...prev, newExpense]);
    } catch (err) {
      console.error("Failed to add expense", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Expenses</h1>
      <button
        onClick={handleAddExpense}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Add Expense
      </button>
      <ul className="list-disc pl-6">
        {expenses.map((e, i) => (
          <li key={i}>{e.name} - ${e.amount}</li>
        ))}
      </ul>
    </div>
  );
}
