// src/components/ui/Card.jsx
import { Card as ShadCard, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"

export default function Card({ title, value, icon: Icon }) {
  return (
    <ShadCard className="shadow-md rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-5 w-5 text-gray-500" />}
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </ShadCard>
  )
}
