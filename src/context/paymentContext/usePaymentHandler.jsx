/* eslint-disable no-await-in-loop */

import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import useUpdateAOrder from "../../hooks/orders/useUpdateAOrder";
import useUpdateAProduct from "../../hooks/phones/useUpdateAProduct";
import { useUserContext } from "../userContext";

export default function usePaymentHandler({ onSubmit }, id, productId, ad) {
  const { updateOrderAsync, updatingOrder, updatingOrderError } = useUpdateAOrder(id);
  const { updateProductAsync, updatingProduct, updateError } = useUpdateAProduct(productId);
  const navigate = useNavigate();
  const { email } = useUserContext();

  const submitHandler = (e) => {
    const handler = async () => {
      if (id) await updateOrderAsync({ patch: { paid: true }, id });
      if (productId) {
        const patch = { status: "sold", soldTo: email };

        await updateProductAsync(
          { patch: ad || patch, id: productId },
          {
            onSuccess: () => {
              if (ad) {
                showNotification({ title: "Your Ad Has been added Successfully" });
                navigate("/");
              } else {
                navigate("/payment-success");
              }
            },
          },
        );
      } else {
        showNotification({ title: "Please Select A Product First" });
      }
    };
    onSubmit(handler)(e);
  };

  const submitting = updatingOrder || updatingProduct;
  const submitError = updatingOrderError || updateError;

  return { submitHandler, submitError, submitting };
}
