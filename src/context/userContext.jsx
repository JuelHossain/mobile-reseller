import { createContext, useContext, useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase";
import useGetAUser from "../hooks/auth/useGetUser";

export const userContext = createContext();
export function UserProvider({ children }) {
  const [user, loading] = useAuthState(auth);
  const { userLoading, ...userData } = useGetAUser(user?.email);

  const value = useMemo(() => ({ ...userData, userLoading: userLoading || loading }), [loading, userData, userLoading]);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
export const useUserContext = () => useContext(userContext);
