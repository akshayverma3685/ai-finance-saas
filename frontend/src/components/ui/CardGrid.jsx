import Card from "./Card";
import { TrendingUp, Users, DollarSign, BarChart } from "lucide-react";

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card title="Revenue" value="$12,430" icon={<DollarSign size={22} />} />
      <Card title="New Users" value="1,250" icon={<Users size={22} />} />
      <Card title="Growth Rate" value="8.5%" icon={<TrendingUp size={22} />} />
      <Card title="Analytics" value="92%" icon={<BarChart size={22} />} />
    </div>
  );
}
