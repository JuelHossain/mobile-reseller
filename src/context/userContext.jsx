import { createContext, useContext } from "react";
import useUser from "../hooks/auth/useUser";

export const userContext = createContext();
export function UserProvider({ children }) {
  const value = useUser();
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
export const useUserContext = () => useContext(userContext);
