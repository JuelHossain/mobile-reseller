/* eslint-disable no-underscore-dangle */
import { showNotification } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useDeleteOrder() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id) => {
      const { data } = await axios.delete(`/orders/${id}`);
      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-orders"] });
      showNotification({
        title: "Order Deleted",
        message: "Order has been deleted Successfully",
      });
    },
  });
  return mutation;
}
