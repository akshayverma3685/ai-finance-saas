import { useEffect, useState } from "react";
import { getExpenses } from "@/utils/api";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function DashboardPage() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (err) {
        console.error("Failed to fetch expenses:", err);
      }
    }
    fetchExpenses();
  }, []);

  return (
    <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Stats */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 text-center">
          <h2 className="text-lg font-semibold">Total Expenses</h2>
          <p className="text-2xl font-bold mt-2">
            ₹{expenses.reduce((sum, e) => sum + (e.amount || 0), 0)}
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 text-center">
          <h2 className="text-lg font-semibold">Transactions</h2>
          <p className="text-2xl font-bold mt-2">{expenses.length}</p>
        </CardContent>
      </Card>

      {/* Chart */}
      <Card className="rounded-2xl shadow-md md:col-span-2 lg:col-span-3">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={expenses.map(e => ({
              name: new Date(e.date).toLocaleDateString("en-US", { month: "short" }),
              amount: e.amount
            }))}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
