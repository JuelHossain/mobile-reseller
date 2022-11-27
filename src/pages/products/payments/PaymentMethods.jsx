import { Flex, UnstyledButton } from "@mantine/core";
import { usePaymentFormContext } from "../../../context/paymentContext/paymentFormContext";

export default function PaymentMethods() {
  const { paymentMethods, setValues, values } = usePaymentFormContext();
  return (
    <div>
      <p>Please Select a Payment Method from Below</p>
      <Flex gap={5}>
        {paymentMethods?.map((method) => (
          <UnstyledButton
            onClick={() => setValues({ paymentMethod: method })}
            key={method}
            className={`p-5 flex-1  flex items-center justify-center rounded-md ${
              method === values.paymentMethod
                ? "bg-main-3 text-black dark:bg-main-7 dark:text-white"
                : "bg-main-1 dark:bg-main-9 text-main-5"
            }`}
          >
            {method}
          </UnstyledButton>
        ))}
      </Flex>
    </div>
  );
}
