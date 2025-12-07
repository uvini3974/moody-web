import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("jarvis_user");
    const token = localStorage.getItem("jarvis_token");
    if (saved && token) {
      setUser(JSON.parse(saved));
    }
    setLoading(false);
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem("jarvis_user", JSON.stringify(userData));
    localStorage.setItem("jarvis_token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("jarvis_user");
    localStorage.removeItem("jarvis_token");
  };

  const updateUser = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem("jarvis_user", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
