import withAuth from "@/utils/withAuth";
import Layout from "@/components/Layout";
import StatCard from "@/components/StatCard";
import ChartArea from "@/components/ChartArea";

const chartData = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1800 },
  { name: "Mar", value: 900 },
  { name: "Apr", value: 2200 },
  { name: "May", value: 1900 },
  { name: "Jun", value: 2600 },
];

function Dashboard(){
  return (
    <Layout>
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard title="Total Spend" value="₹ 2,45,300" sub="+12% vs last month"/>
        <StatCard title="Subscriptions" value="14" sub="2 due this week"/>
        <StatCard title="Savings" value="₹ 58,400" sub="Auto-saved this quarter"/>
        <StatCard title="Alerts" value="3" sub="High spend categories"/>
      </div>
      <ChartArea data={chartData}/>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-5">
          <h3 className="text-lg font-semibold mb-2">Upcoming Bills</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex justify-between"><span>Netflix</span><span>₹ 499 • 28 Aug</span></li>
            <li className="flex justify-between"><span>GitHub</span><span>₹ 900 • 01 Sep</span></li>
            <li className="flex justify-between"><span>AWS</span><span>₹ 2,300 • 03 Sep</span></li>
          </ul>
        </div>
        <div className="card p-5">
          <h3 className="text-lg font-semibold mb-2">Top Categories</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex justify-between"><span>Cloud</span><span>₹ 72k</span></li>
            <li className="flex justify-between"><span>SaaS</span><span>₹ 41k</span></li>
            <li className="flex justify-between"><span>Marketing</span><span>₹ 33k</span></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
export default withAuth(Dashboard);
