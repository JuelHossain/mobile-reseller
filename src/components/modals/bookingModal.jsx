import { Title } from "@mantine/core";
import { openContextModal } from "@mantine/modals";
import { BookingFormProvider } from "../../context/booking-context/bookingFormContext";
import ProductDetails from "../../pages/products/bookings/pages/ProductDetails";

export default function BookingModal({ innerProps }) {
  const { productId } = innerProps || {};
  return (
    <BookingFormProvider id={productId}>
      <ProductDetails />
    </BookingFormProvider>
  );
}

export const openBookingModal = ({ brand, model, _id }) =>
  openContextModal({
    modal: "bookingModal",
    title: (
      <Title order={3}>
        {brand} ${model}`
      </Title>
    ),
    innerProps: { productId: _id },
    centered: true,
    lockScroll: true,
    overflow: "inside",
    size: 500,
  });
