import { createContext, useContext } from "react";
import usePaymentForm from "./useAdForm";

export const adFormContext = createContext();
export function AdFormProvider({ id, children }) {
  const value = usePaymentForm(id);
  return <adFormContext.Provider value={value}>{children}</adFormContext.Provider>;
}
export const useAdFormContext = () => useContext(adFormContext);
