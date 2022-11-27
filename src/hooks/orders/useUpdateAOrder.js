/* eslint-disable no-underscore-dangle */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useUpdateAOrder() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ patch, id }) => {
      const { data: response } = await axios.patch(`/orders/${id}`, patch);
      return response;
    },
    onSuccess: (res, { id }) => {
      const queryKey = ["get-order", id];
      queryClient.invalidateQueries({ queryKey });
      queryClient.invalidateQueries({
        queryKey: ["get-orders"],
      });
    },
  });

  const {
    mutate: updateOrder,
    mutateAsync: updateOrderAsync,
    isLoading: updatingOrder,
    error: updatingOrderError,
  } = mutation || {};

  return { ...mutation, updateOrder, updateOrderAsync, updatingOrder, updatingOrderError };
}
