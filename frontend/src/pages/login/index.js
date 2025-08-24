import { useState } from "react";
import { useRouter } from "next/router";
import api from "@/utils/api";

export default function Login(){
  const router = useRouter();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);

  const submit=async(e)=>{
    e.preventDefault(); setError(""); setLoading(true);
    try{
      await api.login(email,password);
      router.push("/dashboard");
    }catch(err){
      setError(err?.response?.data?.message||"Login failed");
    }finally{ setLoading(false); }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-slate-950 p-4">
      <form onSubmit={submit} className="w-full max-w-md card border-slate-700/60 bg-slate-900/50 p-6 backdrop-blur-xl">
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-slate-400 text-sm mt-1">Log in to continue</p>
        {error && <div className="mt-3 rounded-lg border border-red-500/40 bg-red-500/10 p-2 text-sm text-red-300">{error}</div>}
        <div className="mt-5 space-y-3">
          <input className="input" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        </div>
        <button className="btn btn-primary w-full mt-5" disabled={loading}>{loading?"Logging in...":"Log In"}</button>
        <p className="mt-3 text-xs text-slate-400">Demo admin: use your seeded admin credentials.</p>
      </form>
    </div>
  );
}
