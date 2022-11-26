import { showNotification } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useAddProduct() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (product) => {
      const { data: response } = await axios.post(`/products`, product);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
      showNotification({
        title: "Product Added Successfully",
        message: "time to get some money , yeh!",
      });
    },
  });

  const {
    mutate: addProduct,
    mutateAsync: addProductAsync,
    isLoading: addingProduct,
    error: addError,
  } = mutation || {};

  return { ...mutation, addProduct, addProductAsync, addingProduct, addError };
}
