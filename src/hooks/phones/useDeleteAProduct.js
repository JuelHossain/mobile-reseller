/* eslint-disable no-underscore-dangle */
import { showNotification } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useDeleteAProduct() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id) => {
      const { data } = await axios.delete(`/products/${id}`);
      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
      showNotification({
        title: "product Deleted",
        message: "product has been deleted Successfully",
      });
    },
  });
  return mutation;
}
