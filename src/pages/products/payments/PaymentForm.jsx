import { Button, Group, NumberInput, SimpleGrid, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import { usePaymentFormContext } from "../../../context/paymentContext/paymentFormContext";
import { useUserContext } from "../../../context/userContext";

export default function PaymentForm({ id, price, noDetails }) {
  const { getInputProps, values: { paymentMethod } = {}, submitting, submitHandler } = usePaymentFormContext();

  const { user: { displayName, email } = {} } = useUserContext();
  return (
    <form onSubmit={submitHandler}>
      <Group position="apart">
        <p className="text-xl">Go Ahead Do it</p>
        {!noDetails && (
          <Button compact component={Link} to={`/products/booking/${id}`}>
            Check The Booking Details
          </Button>
        )}
      </Group>
      <SimpleGrid cols={2}>
        <NumberInput hideControls {...getInputProps("cardNumber")} label={`Your ${paymentMethod} Number`} />
        <TextInput readOnly value={displayName || ""} label="Your Name" />
        <TextInput readOnly value={email || ""} label="Your Email" />
      </SimpleGrid>
      <Group position="right">
        <p>Your total amount To Be paid: {price} taka </p>
      </Group>
      <Group position="right">
        <Button type="submit" loading={submitting}>
          Pay Now
        </Button>
      </Group>
    </form>
  );
}
