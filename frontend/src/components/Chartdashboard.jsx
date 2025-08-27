import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { prepareExpenseChartData } from "../utils/chartHelper";

export default function ChartDashboard({ expenses }) {
  const data = prepareExpenseChartData(expenses);

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-4">Expense Breakdown</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={120} fill="#8884d8">
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
