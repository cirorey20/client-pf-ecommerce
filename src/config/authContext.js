import { createContext, useState } from "react";
//el provider para rodear los componentes que queramos
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //logica para saber el estado del usuario
  const [isAuthenticated, setIsAuthenticated] = useState(document.cookie);
};
