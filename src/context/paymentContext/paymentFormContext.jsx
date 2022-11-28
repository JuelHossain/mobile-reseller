import { createContext, useContext } from "react";
import usePaymentForm from "./usePaymentForm";

export const paymentFormContext = createContext();
export function PaymentFormProvider({ ad, productId, id, children }) {
  const value = usePaymentForm(id, productId, ad);
  return <paymentFormContext.Provider value={value}>{children}</paymentFormContext.Provider>;
}
export const usePaymentFormContext = () => useContext(paymentFormContext);
