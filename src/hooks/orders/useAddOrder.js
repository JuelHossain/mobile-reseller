import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useAddOrder() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (order) => {
      const { data: response } = await axios.post(`/orders`, order);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-orders"] });
    },
  });

  const { mutate: AddOrder, mutateAsync: AddOrderAsync, isLoading: addingOrder, error: addError } = mutation || {};

  return { ...mutation, AddOrder, AddOrderAsync, addingOrder, addError };
}
