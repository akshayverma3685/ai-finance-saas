export default function StatCard({title, value, sub}){
  return (
    <div className="card p-5">
      <div className="text-slate-400 text-sm">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {sub && <div className="mt-1 text-xs text-slate-400">{sub}</div>}
    </div>
  );
}
