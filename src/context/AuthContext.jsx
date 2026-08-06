import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const isAuthenticated = user !== null;

  function login(email, password) {
    if (email && password) setUser({ email });
  }

  function register(name, email, password) {
    if (name && email && password) {
      setUser({
        name,
        email,
      });
    }
  }

  //  برای لاگ گرفتن و موقتی است
  //  useEffect(() =>{
  //     console.log(user)
  //  }, [user])

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
