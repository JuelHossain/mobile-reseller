/* eslint-disable no-await-in-loop */

import { useNavigate } from "react-router-dom";
import useUpdateAOrder from "../../hooks/orders/useUpdateAOrder";
import useUpdateAProduct from "../../hooks/phones/useUpdateAProduct";
import { useUserContext } from "../userContext";

export default function usePaymentHandler({ onSubmit }, id, productId) {
  const { updateOrderAsync, updatingOrder, updatingOrderError } = useUpdateAOrder(id);
  const { updateProductAsync, updatingProduct, updateError } = useUpdateAProduct(productId);
  const navigate = useNavigate();
  const { email } = useUserContext();

  const submitHandler = (e) => {
    const handler = async () => {
      await updateOrderAsync({ patch: { paid: true }, id });
      await updateProductAsync(
        { patch: { status: "sold", soldTo: email }, id: productId },
        {
          onSuccess: () => navigate("/payment-success"),
        },
      );
    };
    onSubmit(handler)(e);
  };

  const submitting = updatingOrder || updatingProduct;
  const submitError = updatingOrderError || updateError;

  return { submitHandler, submitError, submitting };
}
