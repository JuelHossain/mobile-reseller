import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetAProduct(id) {
  const query = useQuery({
    queryKey: ["get-product", id],
    queryFn: async () => {
      const { data } = await axios(`/products/${id}`);
      return data;
    },
    enabled: !!id,
  });
  const { data: product, isLoading: productLoading, error: productError } = query;
  return { ...query, product, productLoading, productError };
}
