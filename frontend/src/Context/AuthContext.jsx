import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.token) {
        setIsLoggedIn(true);
        setToken(user.token);
      }
    }
    setIsLoading(false);
  }, []);

  function login(token) {
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem(
      "user",
      JSON.stringify({ email: "trung@email.com", token })
    );
  }

  function logout() {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("user");
  }

  const authValue = {
    isLoggedIn,
    isLoading,
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
