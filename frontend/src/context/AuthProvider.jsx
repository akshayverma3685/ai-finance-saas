import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getMe, loginApi, signupApi } from "../utils/api";
import { getToken, setToken, clearToken } from "../utils/auth";

const AuthContext = createContext(null);
export const useAuthCtx = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isPro, setIsPro] = useState(false);
  const [loading, setLoading] = useState(true);

  // bootstrap
  useEffect(() => {
    (async () => {
      const tok = getToken();
      if (!tok) { setLoading(false); return; }
      try {
        const me = await getMe();
        setUser(me.user);
        setIsPro(!!me.user?.isPro);
      } catch {}
      finally { setLoading(false); }
    })();
  }, []);

  const login = async (email, password) => {
    const data = await loginApi(email, password);
    setToken(data.token);
    setUser({ name: data.name, email: data.email, _id: data._id });
    setIsPro(!!data.isPro);
    return data;
  };

  const signup = async (payload) => {
    const data = await signupApi(payload);
    setToken(data.token);
    setUser({ name: data.name, email: data.email, _id: data._id });
    setIsPro(!!data.isPro);
    return data;
  };

  const logout = () => { clearToken(); setUser(null); setIsPro(false); };

  const value = useMemo(() => ({
    user, isPro, login, signup, logout, loading
  }), [user, isPro, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
