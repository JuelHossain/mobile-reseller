/* eslint-disable no-nested-ternary */
import { Button, Group } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";
import { useBookingFormContext } from "../../../../context/booking-context/bookingFormContext";

export default function Controllers(props) {
  const { showNext, showPrev, prev, next, showConfirm, pageIndex } = props;
  const { submitHandler, errors, loading } = useBookingFormContext();
  const isErrorInForm = Object.keys(errors).length > 0;

  return (
    <Group position="right" className="p-4">
      {showPrev && (
        <Button onClick={prev} leftIcon={<IconArrowLeft />}>
          Prev
        </Button>
      )}
      {showNext && (
        <Button
          loading={loading}
          onClick={
            isErrorInForm && pageIndex > 1
              ? () => showNotification({ title: "Please Fill the form Please" })
              : showConfirm
              ? submitHandler
              : next
          }
          rightIcon={<IconArrowRight />}
        >
          {showConfirm ? "Confirm booking" : "Next"}
        </Button>
      )}
    </Group>
  );
}
