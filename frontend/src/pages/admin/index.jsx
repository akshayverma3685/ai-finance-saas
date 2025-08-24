import withAuth from "@/utils/withAuth";
import Layout from "@/components/Layout";

function Admin(){
  return (
    <Layout>
      <div className="card p-6">
        <h2 className="text-xl font-semibold">Admin Panel</h2>
        <p className="text-slate-400 mt-1">Manage users, plans and reports here.</p>
      </div>
    </Layout>
  );
}
export default withAuth(Admin);
