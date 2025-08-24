import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await api.get("/users"); // 👈 backend se users
        setUsers(res.data || []);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <Card key={user._id} className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-xs mt-2 bg-gray-100 px-2 py-1 inline-block rounded-md">
                Role: {user.role}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
