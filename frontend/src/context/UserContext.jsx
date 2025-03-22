import { createContext, useState } from "react";

export const UserContext = createContext();  // aqui se crea el contexto de usuario

export const UserProvider = ({ children }) => {  // Estado que almacena el token (simulado), por defecto está en `true`
  const [token, setToken] = useState(true);

  const logout = () => {   // Función logout que cambia el token a `false`
    setToken(false);
  };

  return (        // Proveemos el token y la función logout a los componentes que lo consuman
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};