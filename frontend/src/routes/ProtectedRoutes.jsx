import { Navigate, useLocation } from "react-router-dom";
import { useAuthCtx } from "../context/AuthProvider";

export default function ProtectedRoute({ children, requirePro = false }) {
  const { user, isPro, loading } = useAuthCtx();
  const location = useLocation();

  if (loading) return <div className="p-6">Loading...</div>;
  if (!user) return <Navigate to="/" state={{ from: location }} replace />;
  if (requirePro && !isPro) return <Navigate to="/upgrade" replace />;
  return children;
}
