import { createContext, useState, useContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  // Inicializamos el token a partir de localStorage si existe
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [email, setEmail] = useState(null);

  const login = async ({ email, password }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      setToken(response.data.token);
      setEmail(response.data.email);
      localStorage.setItem("token", response.data.token);
      // Nos aseguramos de que el email no se guarde en localStorage
      localStorage.removeItem("email");
      return response.data;
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      throw error;
    }
  };

  const register = async ({ email, password }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", { email, password });
      setToken(response.data.token);
      setEmail(response.data.email);
      localStorage.setItem("token", response.data.token);
      localStorage.removeItem("email");
      return response.data;
    } catch (error) {
      console.error("Register error:", error.response?.data || error.message);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  // Función para obtener el perfil del usuario (se usará en Profile.jsx)
  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Get profile error:", error.response?.data || error.message);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};