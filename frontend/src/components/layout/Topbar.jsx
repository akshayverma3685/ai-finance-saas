import Link from "next/link";
import api from "@/utils/api";

export default function Topbar(){
  return (
    <header className="flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/60 px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-blue-600"/>
        <span className="font-semibold">AI Finance</span>
      </div>
      <nav className="flex items-center gap-3">
        <Link className="btn btn-outline" href="/docs">Docs</Link>
        <button className="btn btn-outline" onClick={()=>{api.logout(); location.href="/login";}}>Logout</button>
      </nav>
    </header>
  );
}
