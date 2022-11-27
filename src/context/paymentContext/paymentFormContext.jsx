import { createContext, useContext } from "react";
import usePaymentForm from "./usePaymentForm";

export const paymentFormContext = createContext();
export function PaymentFormProvider({ productId, id, children }) {
  const value = usePaymentForm(id, productId);
  return <paymentFormContext.Provider value={value}>{children}</paymentFormContext.Provider>;
}
export const usePaymentFormContext = () => useContext(paymentFormContext);
