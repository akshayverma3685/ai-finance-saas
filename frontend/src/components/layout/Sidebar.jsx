import Link from "next/link";
import { useRouter } from "next/router";
import { LayoutDashboard, Receipt, BarChart2, CreditCard, Bell, Settings, ShieldCheck } from "lucide-react";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/reports", label: "Reports", icon: Receipt },
  { href: "/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/billing", label: "Billing", icon: CreditCard },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/admin", label: "Admin", icon: ShieldCheck },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar(){
  const { pathname } = useRouter();
  return (
    <aside className="hidden md:flex w-64 shrink-0 flex-col gap-2 p-4 border-r border-slate-800 bg-slate-950/60">
      <div className="mb-2 px-2 text-xs tracking-wider text-slate-400">AI FINANCE SAAS</div>
      {items.map(({href,label,icon:Icon}) => {
        const active = pathname.startsWith(href);
        return (
          <Link key={href} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-800/70 ${active?"bg-slate-800/90 text-white":"text-slate-300"}`}>
            <Icon size={18}/><span>{label}</span>
          </Link>
        );
      })}
    </aside>
  );
            }
