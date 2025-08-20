import React, { useState } from "react";
import api from "../utils/api.js";

export default function Signup({ onSignup }){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [err,setErr] = useState(null);

  async function submit(e){
    e.preventDefault();
    try{
      const r = await api.post("/auth/signup", { name, email, password });
      onSignup(r.data.token);
    }catch(e){ setErr(e.response?.data?.error || "Error"); }
  }

  return (
    <form onSubmit={submit} style={{maxWidth:360, display:"grid", gap:8}}>
      <h2>Signup</h2>
      {err && <div style={{color:"red"}}>{err}</div>}
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button type="submit">Create account</button>
    </form>
  );
}
