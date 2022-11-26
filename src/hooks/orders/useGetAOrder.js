import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetAOrder(id) {
  const query = useQuery({
    queryKey: ["get-order", id],
    queryFn: async () => {
      const { data } = await axios(`/orders/${id}`);
      return data;
    },
    enabled: !!id,
  });
  const { data: order, isLoading: orderLoading, error: orderError } = query;
  return { ...query, order, orderLoading, orderError };
}
