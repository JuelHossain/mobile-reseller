/* eslint-disable no-underscore-dangle */
import { showNotification } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useUpdateAProduct() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ patch, id }) => {
      const { data: response } = await axios.patch(`/products/${id}`, patch);
      return response;
    },
    onSuccess: (res, { id }) => {
      const queryKey = ["get-product", id];
      queryClient.invalidateQueries({ queryKey });
      showNotification({ title: "Your Product Updated", message: "Wait some time for buyer response" });
    },
  });

  const {
    mutate: updateProduct,
    mutateAsync: updateProductAsync,
    isLoading: updatingProduct,
    error: updateError,
  } = mutation || {};

  return { ...mutation, updateProduct, updateProductAsync, updatingProduct, updateError };
}
