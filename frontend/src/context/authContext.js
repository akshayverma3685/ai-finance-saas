// src/context/AuthContext.js
import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

// Context create
const AuthContext = createContext();

// ✅ Auth Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user = null -> logged out
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Simulate session check (future me API call se replace kar sakte ho)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // ✅ Login function
  const login = async (email, password) => {
    // Normally: yaha API call hoga
    if (email === "admin@test.com" && password === "123456") {
      const fakeUser = { id: 1, name: "Admin User", email };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
      router.push("/dashboard"); // redirect after login
    } else {
      alert("Invalid credentials");
    }
  };

  // ✅ Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook for easy use
export const useAuth = () => useContext(AuthContext);
