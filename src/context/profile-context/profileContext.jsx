import { createContext, useContext } from "react";
import useProfileForm from "./useProfileForm";

export const profileContext = createContext();
export function ProfileProvider({ children }) {
  const value = useProfileForm();
  return <profileContext.Provider value={value}>{children}</profileContext.Provider>;
}
export const useProfileContext = () => useContext(profileContext);
