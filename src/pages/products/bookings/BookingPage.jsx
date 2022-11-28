import { useParams } from "react-router-dom";
import { BookingFormProvider } from "../../../context/booking-context/bookingFormContext";
import ProductDetails from "./pages/ProductDetails";

export default function BookingPage() {
  const { id } = useParams();
  return (
    <BookingFormProvider id={id}>
      <ProductDetails />
    </BookingFormProvider>
  );
}
