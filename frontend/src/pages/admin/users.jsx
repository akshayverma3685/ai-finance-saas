import { useEffect, useState } from "react"
import fetchClient from "../../utils/fetchClient"

export default function AdminUsers() {
  const [users, setUsers] = useState([])

  const loadUsers = async () => {
    const { data } = await fetchClient.get("/api/admin/users")
    setUsers(data.data.users)
  }

  const togglePro = async (id, current) => {
    await fetchClient.patch(`/api/admin/users/${id}`, { isPro: !current })
    loadUsers()
  }

  const deleteUser = async (id) => {
    if (confirm("Delete this user?")) {
      await fetchClient.delete(`/api/admin/users/${id}`)
      loadUsers()
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Manage Users</h1>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Pro</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id} className="border">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.role}</td>
              <td className="p-2">{u.isPro ? "✅" : "❌"}</td>
              <td className="p-2 space-x-2">
                <button onClick={() => togglePro(u._id, u.isPro)} className="px-2 py-1 bg-indigo-500 text-white rounded">
                  Toggle Pro
                </button>
                <button onClick={() => deleteUser(u._id)} className="px-2 py-1 bg-red-500 text-white rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
    }
