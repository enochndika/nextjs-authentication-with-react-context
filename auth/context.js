import React, { createContext, useContext, useEffect, useState } from "react";
import api from "./axios";
import jwt from "jwt-decode";
import Router from "next/router";
import { getCookieFromBrowser, removeCookie, setCookie } from "./cookies";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = getCookieFromBrowser("token");
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const userData = jwt(token);
        const { data: user } = await api.get(`/api/user/${userData._id}`);
        if (user) setUser(user);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (email, password) => {
    const { data: response } = await api.post("/api/login", {
      email,
      password,
    });
    const token = response.token;
    if (token) {
      setCookie("token", token);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      const userData = jwt(token);
      const { data: user } = await api.get(`/api/user/${userData._id}`);
      setUser(user);
      await Router.push("/");
    }
  };

  const logout = () => {
    removeCookie("token");
    setUser(null);
    Router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
