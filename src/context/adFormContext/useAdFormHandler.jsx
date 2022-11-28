/* eslint-disable no-await-in-loop */

import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import useUpdateAProduct from "../../hooks/phones/useUpdateAProduct";

export default function useAdFormHandler({ onSubmit }) {
  const { updateProductAsync, updatingProduct, updateError } = useUpdateAProduct();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    const handler = async (data) => {
      const { id, ...patch } = data;
      await updateProductAsync(
        { patch, id },
        {
          onSuccess: () => {
            showNotification({ title: "Your Ad Has been added" });
            navigate("/");
          },
        },
      );
    };
    onSubmit(handler)(e);
  };

  const submitting = updatingProduct;
  const submitError = updateError;

  return { submitHandler, submitError, submitting };
}
