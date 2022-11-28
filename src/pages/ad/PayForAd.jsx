import { useAdFormContext } from "../../context/adFormContext/adFormContext";
import { PaymentFormProvider } from "../../context/paymentContext/paymentFormContext";
import PaymentForm from "../products/payments/PaymentForm";
import PaymentMethods from "../products/payments/PaymentMethods";

export default function PayForAd() {
  const { values } = useAdFormContext();
  const { id, price, ...ad } = values;

  const adDetails = {
    ...ad,
    adWillEnd: ad.adWillEnd(),
  };

  return (
    <PaymentFormProvider ad={adDetails} productId={id}>
      <PaymentMethods />
      <PaymentForm price={values?.price} productId={id} noDetails />
    </PaymentFormProvider>
  );
}
