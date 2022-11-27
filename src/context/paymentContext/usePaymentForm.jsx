/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { useForm } from "@mantine/form";
import initialPaymentForm from "./initialPayemntForm";
import usePaymentHandler from "./usePaymentHandler";

export default function usePaymentForm(id,productId) {
  const form = useForm(initialPaymentForm);

  const { submitHandler, submitting, submitError } = usePaymentHandler(form, id,productId);

  const paymentMethods = ["Debit Card", "Credit Card", "Bkash", "Nagad", "Rocket", "Upay"];

  return { ...form, submitHandler, submitting, submitError, paymentMethods };
}
