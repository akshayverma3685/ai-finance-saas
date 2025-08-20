import React, { useEffect, useState } from "react";
import api from "../utils/api.js";

export default function Dashboard(){
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("Other");

  async function load(){
    const r = await api.get("/expenses");
    setExpenses(r.data);
  }
  useEffect(()=>{ load(); },[]);

  async function add(e){
    e.preventDefault();
    await api.post("/expenses", { title, amount: Number(amount), category });
    setTitle(""); setAmount(0); setCategory("Other");
    load();
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <form onSubmit={add} style={{display:"flex", gap:8}}>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <input placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} />
        <input placeholder="Category" value={category} onChange={e=>setCategory(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul style={{marginTop:12}}>
        {expenses.map((e)=> <li key={e._id}>{e.title} — {e.category} — {e.amount}</li>)}
      </ul>
    </div>
  );
        }
