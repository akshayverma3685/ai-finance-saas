import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function StatCard({ title, value, change }) {
  const isPositive = change >= 0;

  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition w-full">
      <CardContent className="p-6 flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>

        <div className="flex items-center gap-2 text-sm">
          {isPositive ? (
            <ArrowUp className="text-green-500" size={16} />
          ) : (
            <ArrowDown className="text-red-500" size={16} />
          )}
          <span className={isPositive ? "text-green-600" : "text-red-600"}>
            {change}%
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
