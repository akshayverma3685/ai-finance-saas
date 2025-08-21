import { useEffect, useMemo, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Card from "../../components/ui/Card";
import Chart from "../../components/ui/Chart";
import { addExpense, getAiInsights, getExpenses } from "../../utils/api";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ title:"", amount:"", category:"General" });
  const [insights, setInsights] = useState("");

  const load = async () => {
    const data = await getExpenses();
    setExpenses(data || []);
  };
  useEffect(() => { load(); }, []);

  const total = useMemo(()=> expenses.reduce((s,e)=>s+Number(e.amount||0),0), [expenses]);
  const chartData = useMemo(() => {
    // group by day label
    const m = {};
    expenses.forEach(e=>{
      const d = new Date(e.date); const label = `${d.getMonth()+1}/${d.getDate()}`;
      m[label] = (m[label]||0) + Number(e.amount||0);
    });
    return Object.entries(m).map(([label, amount]) => ({ label, amount }));
  }, [expenses]);

  const submit = async (e) => {
    e.preventDefault();
    await addExpense({ ...form, amount: Number(form.amount||0) });
    setForm({ title:"", amount:"", category:"General" });
    load();
  };

  const runInsights = async () => {
    const res = await getAiInsights(expenses);
    setInsights(res.insights || "");
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card title="Total Spend" value={`₹${total.toLocaleString()}`} />
        <Card title="Transactions" value={expenses.length} />
        <Card title="Top Category" value={topCategory(expenses)} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Chart data={chartData} />
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border">
          <div className="text-sm text-gray-500 mb-2">Add Expense</div>
          <form onSubmit={submit} className="space-y-2">
            <input className="border w-full rounded-lg px-3 py-2" placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})}/>
            <input className="border w-full rounded-lg px-3 py-2" type="number" placeholder="Amount" value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})}/>
            <input className="border w-full rounded-lg px-3 py-2" placeholder="Category" value={form.category} onChange={e=>setForm({...form, category:e.target.value})}/>
            <button className="w-full bg-gray-900 text-white rounded-lg py-2">Save</button>
          </form>
          <button onClick={runInsights} className="mt-3 w-full border rounded-lg py-2">Get AI Insights (Pro)</button>
          {insights && <pre className="mt-3 text-xs bg-gray-50 p-2 rounded border overflow-auto max-h-48 whitespace-pre-wrap">{insights}</pre>}
        </div>
      </div>

      <div className="mt-6 bg-white rounded-2xl p-4 shadow-sm border">
        <div className="text-sm text-gray-500 mb-2">Recent Expenses</div>
        <table className="w-full text-sm">
          <thead><tr className="text-left text-gray-500">
            <th className="py-2">Date</th><th>Title</th><th>Category</th><th className="text-right">Amount</th>
          </tr></thead>
          <tbody>
            {expenses.map(e=>(
              <tr key={e._id} className="border-t">
                <td className="py-2">{new Date(e.date).toLocaleDateString()}</td>
                <td>{e.title}</td>
                <td>{e.category}</td>
                <td className="text-right">₹{Number(e.amount).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

function topCategory(expenses){
  const m = {};
  expenses.forEach(e=>{ m[e.category] = (m[e.category]||0) + Number(e.amount||0); });
  const arr = Object.entries(m).sort((a,b)=>b[1]-a[1]);
  return arr[0]?.[0] || "—";
            }
