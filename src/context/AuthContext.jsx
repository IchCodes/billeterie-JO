import axios from "axios";
import Cookies from "universal-cookie";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(() => {
    const savedUserInfo = localStorage.getItem('userInfo');
    return savedUserInfo ? JSON.parse(savedUserInfo) : (null);
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = (username, password) => {
    setIsLoading(true);
    const url = `${import.meta.env.VITE_BASE_AUTH_URL}/login`;
    const body = {
      username: username,
      password: password,
    };
    axios
      .post(url, body)
      .then((response) => {
        setUserInfo(response.data);
        const cookies = new Cookies(null, { path: "/" });
        cookies.set("token", response.data.token, { path: "/" });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // Stocker les données de l'utilisateur dans le localStorage chaque fois qu'elles changent
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo]);
  return (
    <AuthContext.Provider
      value={{
        login,
        userInfo,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
