import { createContext, useContext } from "react";
import usePhoneForm from "./useBookingForm";

export const bookingFormContext = createContext();
export function BookingFormProvider({ id, children }) {
  const value = usePhoneForm(id);
  return <bookingFormContext.Provider value={value}>{children}</bookingFormContext.Provider>;
}
export const useBookingFormContext = () => useContext(bookingFormContext);
