import { useParams } from "react-router-dom";
import PrivateRoute from "../../../components/auth/PrivateRoute";
import { BookingFormProvider } from "../../../context/booking-context/bookingFormContext";
import ProductDetails from "./pages/ProductDetails";

export default function BookingPage() {
  const { id } = useParams();

  return (
    <PrivateRoute>
      <BookingFormProvider id={id}>
        <ProductDetails />
      </BookingFormProvider>
    </PrivateRoute>
  );
}
