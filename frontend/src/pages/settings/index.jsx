import withAuth from "@/utils/withAuth";
import Layout from "@/components/layout";

function Settings(){
  return (
    <Layout>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-5">
          <h3 className="text-lg font-semibold">Profile</h3>
          <div className="mt-4 space-y-3">
            <input className="input" placeholder="Your name" />
            <input className="input" placeholder="Email" />
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
        <div className="card p-5">
          <h3 className="text-lg font-semibold">Security</h3>
          <div className="mt-4 space-y-3">
            <input className="input" type="password" placeholder="New password" />
            <input className="input" type="password" placeholder="Confirm password" />
            <button className="btn btn-outline">Update Password</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default withAuth(Settings);
