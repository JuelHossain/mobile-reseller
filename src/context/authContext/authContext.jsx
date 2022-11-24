import { createContext, useContext } from "react";
import useAuthStates from "./useAuthStates";

export const authContext = createContext();

export function AuthProvider({ children }) {
  const states = useAuthStates();
  return <authContext.Provider value={states}>{children}</authContext.Provider>;
}
export const useAuthContext = () => useContext(authContext);
