import { LoadingOverlay, Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import { useBookingFormContext } from "../../../../context/booking-context/bookingFormContext";
import useBookingController from "../../../../context/booking-context/useBookingController";
import Controllers from "./Controllers";

export default function ProductDetails() {
  const { loading, serverError, product } = useBookingFormContext();
  const { controllerProps, ActivePage } = useBookingController();

  if (loading) return <LoadingOverlay visible />;
  if (serverError)
    return (
      <Notification icon={IconX} color="red" title="Server Side Error">
        Please Try Again Later
      </Notification>
    );

  return (
    <>
      <ActivePage {...product} />
      <Controllers {...controllerProps} />
    </>
  );
}
