import { useEffect, useState } from "react"
import fetchClient from "../../utils/fetchClient"
import Link from "next/link"

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await fetchClient.get("/api/admin/stats")
        setStats(data.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <p className="p-6">Loading admin dashboard...</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {stats && (
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="p-4 bg-white shadow rounded-xl">
            <h2 className="font-semibold">Total Users</h2>
            <p className="text-xl">{stats.totalUsers}</p>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <h2 className="font-semibold">Pro Users</h2>
            <p className="text-xl">{stats.proUsers}</p>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <h2 className="font-semibold">Total Payments</h2>
            <p className="text-xl">{stats.totalPayments}</p>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <h2 className="font-semibold">Revenue</h2>
            <p className="text-xl">₹{stats.revenue}</p>
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <Link href="/admin/users" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Manage Users</Link>
        <Link href="/admin/payments" className="px-4 py-2 bg-green-600 text-white rounded-lg">Manage Payments</Link>
      </div>
    </div>
  )
    }
