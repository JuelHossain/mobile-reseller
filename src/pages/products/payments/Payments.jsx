import { Container, LoadingOverlay, Notification, Stack, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { PaymentFormProvider } from "../../../context/paymentContext/paymentFormContext";
import { useUserContext } from "../../../context/userContext";
import useGetAOrder from "../../../hooks/orders/useGetAOrder";
import PaymentForm from "./PaymentForm";
import PaymentMethods from "./PaymentMethods";

export default function Payments() {
  const { id } = useParams();
  const { user } = useUserContext();
  const { order, orderLoading, orderError } = useGetAOrder(id);
  const { brand, model, price, productId } = order || {};

  if (orderLoading) return <LoadingOverlay visible />;
  if (orderError) return <Notification title="Server Side Error">Please Try Again later</Notification>;

  return (
    <PaymentFormProvider id={id} productId={productId}>
      <Container className="my-5 sm:my-10">
        <Stack>
          <Title order={2}>Hello {user?.displayName}</Title>
          <Title order={5}>You Are going To Pay for the {`${brand} ${model}`}</Title>
          <Notification disallowClose color="red">
            Please Be Noted That Your Payment Will Go to the seller directly and the payment is non refundable
          </Notification>

          <PaymentMethods />
          <PaymentForm price={price} id={productId} />
        </Stack>
      </Container>
    </PaymentFormProvider>
  );
}
