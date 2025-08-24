import withAuth from "@/utils/withAuth";
import Layout from "@/components/Layout";

function Reports(){
  const rows = [
    { id: 1, date: "2025-08-01", vendor: "AWS", amount: 2300, tag:"Cloud" },
    { id: 2, date: "2025-08-05", vendor: "Figma", amount: 1200, tag:"SaaS" },
    { id: 3, date: "2025-08-12", vendor: "Meta Ads", amount: 8000, tag:"Marketing" },
  ];
  return (
    <Layout>
      <div className="card p-5 overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">Vendor</th>
              <th className="text-right p-2">Amount</th>
              <th className="text-left p-2">Tag</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r=> (
              <tr key={r.id} className="border-t border-slate-800 hover:bg-slate-900/50">
                <td className="p-2">{r.date}</td>
                <td className="p-2">{r.vendor}</td>
                <td className="p-2 text-right">₹{r.amount.toLocaleString()}</td>
                <td className="p-2">{r.tag}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
export default withAuth(Reports);
