import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetOrders(options = {}) {
  const queryOption = Object.keys(options).reduce((acc, option) => {
    const queries = `${acc}${acc === "" ? "?" : "&"}${option}=${options[option]}`;
    return queries;
  }, "");

  const query = useQuery({
    queryKey: ["get-orders", ...Object.values(options)],
    queryFn: async () => {
      const { data } = await axios(`/orders${queryOption}`);
      return data;
    },
  });

  const { data: orders, isLoading: ordersLoading, error: ordersError } = query || {};

  return { ...query, orders, ordersLoading, ordersError };
}
