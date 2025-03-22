import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // El token es `true` por defecto

  const logout = () => {
    setToken(false); // Cambiar el estado del token a `false` al hacer logout
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};