/* eslint-disable no-underscore-dangle */
import { showNotification } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const deleteAProduct = async (id) => {
  const { data: res } = await axios.delete(`/products/${id}`);
  return res;
};

export default function useDeleteAProduct() {
  const queryClient = useQueryClient();

  const refetch = () => {
    queryClient.invalidateQueries({ queryKey: ["get-products"] });
  };

  const mutation = useMutation({
    mutationFn: deleteAProduct,
    onSettled: refetch,
    onSuccess: () => {
      showNotification({
        title: "product Deleted",
        message: "product has been deleted Successfully",
      });
    },
  });
  return mutation;
}
