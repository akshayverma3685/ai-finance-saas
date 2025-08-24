import { useEffect, useState } from "react"
import fetchClient from "../../utils/fetchClient"

export default function AdminPayments() {
  const [payments, setPayments] = useState([])

  useEffect(() => {
    const load = async () => {
      const { data } = await fetchClient.get("/api/admin/payments")
      setPayments(data.data.payments)
    }
    load()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Manage Payments</h1>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">User</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(p => (
            <tr key={p._id} className="border">
              <td className="p-2">{p.user?.email}</td>
              <td className="p-2">₹{p.amount}</td>
              <td className="p-2">{p.status}</td>
              <td className="p-2">{new Date(p.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
      }
