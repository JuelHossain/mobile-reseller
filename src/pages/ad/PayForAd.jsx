import { useAdFormContext } from "../../context/adFormContext/adFormContext";
import { PaymentFormProvider } from "../../context/paymentContext/paymentFormContext";
import PaymentForm from "../products/payments/PaymentForm";
import PaymentMethods from "../products/payments/PaymentMethods";

export default function PayForAd() {
  const { values } = useAdFormContext();
  const { id, ...ad } = values;
  return (
    <PaymentFormProvider ad={ad} productId={id}>
      <PaymentMethods />
      <PaymentForm price={values?.price} productId={id} noDetails />
    </PaymentFormProvider>
  );
}
