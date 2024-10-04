import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.token) {
        setIsLoggedIn(true);
        setToken(user.token);
        setName(user.name);
        setProfilePictureUrl(user.profile_picture);
      }
    }
    setIsLoading(false);
  }, []);

  function authLogin(userData) {
    setIsLoggedIn(true);
    setToken(userData.token);
    setName(userData.name);
    setProfilePictureUrl(userData.profile_picture);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  function authSignup(userData) {
    setIsLoggedIn(true);
    setToken(userData.token);
    setName(userData.name);
    setProfilePictureUrl(userData.profile_picture);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  function logout() {
    setIsLoggedIn(false);
    setToken(null);
    setName(null);
    setProfilePictureUrl(null);
    localStorage.removeItem("user");
  }

  const authValue = {
    isLoggedIn,
    isLoading,
    token,
    name,
    profilePictureUrl,
    authLogin,
    authSignup,
    logout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
