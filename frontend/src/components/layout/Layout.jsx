import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function Layout({children}){
  return (
    <div className="min-h-screen grid md:grid-cols-[16rem_1fr]">
      <Sidebar />
      <div className="flex min-h-screen flex-col">
        <Topbar />
        <main className="p-4 md:p-6 grid gap-4">{children}</main>
      </div>
    </div>
  );
}
