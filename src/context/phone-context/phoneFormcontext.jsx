import { createContext, useContext } from "react";
import usePhoneForm from "./usePhoneForm";

export const phoneFormContext = createContext();
export function PhoneFormProvider({ id, children }) {
  const value = usePhoneForm(id);
  return <phoneFormContext.Provider value={value}>{children}</phoneFormContext.Provider>;
}
export const usePhoneFormContext = () => useContext(phoneFormContext);
