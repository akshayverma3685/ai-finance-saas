import { TrendingUp, Users, DollarSign, BarChart } from "lucide-react";

export default function Card({ title, value, icon }) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500 tracking-wide">
            {title}
          </h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
          {icon}
        </div>
      </div>
    </div>
  );
}
