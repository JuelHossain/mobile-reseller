import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const addService = async (newProduct) => {
  const { data: response } = await axios.post(`/products`, newProduct);
  return response;
};

export default function useAddProduct() {
  const queryClient = useQueryClient();

  // refetching the data when its settled
  const refetch = ({ cat }) => {
    queryClient.invalidateQueries({ queryKey: ["get-products", cat] });
  };

  const mutation = useMutation({
    mutationFn: addService,
    onSettled: refetch,
  });

  return mutation;
}
