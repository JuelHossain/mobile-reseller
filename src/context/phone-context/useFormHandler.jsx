/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable no-unsafe-optional-chaining */

import { closeAllModals } from "@mantine/modals";
import useAddProduct from "../../hooks/phones/useAddProduct";
import useUpdateAProduct from "../../hooks/phones/useUpdateAProduct";
import { useUserContext } from "../userContext";

export default function useFormHandler({ onSubmit, reset }, id) {
  const { email } = useUserContext();
  const { addProduct, addingProduct, addError } = useAddProduct();
  const { updateProduct, updatingProduct, updateError } = useUpdateAProduct();

  const loading = addingProduct || updatingProduct;
  const serverError = addError || updateError;

  const submitHandler = (e) => {
    const handler = (data) => {
      if (data?.exist) {
        const { exist, ...patch } = data;
        updateProduct({ patch, id });
        closeAllModals();
      } else {
        let cat = "";
        switch (true) {
          case data?.price < 10000:
            cat = "budget";
            break;
          case data?.price < 20000:
            cat = "mid-range";
            break;
          case data?.price < 40000:
            cat = "flagship-killer";
            break;
          default:
            cat = "flagship";
            break;
        }

        const newPhone = { ...data, createdAt: new Date(), createdBy: email, cat, status: "on-air" };

        addProduct(newPhone, {
          onSuccess: () => {
            reset();
          },
        });
      }
    };
    onSubmit(handler)(e);
  };

  return { submitHandler, loading, serverError };
}
