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

export const openBookingModal = (id) =>
  openContextModal({
    modal: "bookingModal",
    title: <Title order={3}>Please Book Your Product</Title>,
    innerProps: { productId: id },
    centered: true,
    lockScroll: true,
    overflow: "inside",
    size: 500,
    classNames: { modal: "min-h-[55vh]" },
  });
