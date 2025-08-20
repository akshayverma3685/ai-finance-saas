// frontend/src/components/ExpensesList.jsx
import { formatDate } from "../utils/dateHelper";

export default function ExpensesList({ expenses }) {
  return (
    <div className="p-4 bg-white shadow rounded mt-4">
      <h2 className="font-bold text-lg mb-3">Recent Expenses</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses recorded.</p>
      ) : (
        <table className="w-full text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp, i) => (
              <tr key={i}>
                <td className="p-2 border">{exp.category}</td>
                <td className="p-2 border">₹{exp.amount}</td>
                <td className="p-2 border">{formatDate(exp.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
