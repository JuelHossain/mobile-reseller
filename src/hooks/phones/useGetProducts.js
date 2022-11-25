import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetProducts(options = {}) {
  const queryOption = Object.keys(options).reduce((acc, option) => {
    const queries = `${acc}${acc === "" ? "?" : "&"}${option}=${options[option]}`;
    return queries;
  }, "");

  const query = useQuery({
    queryKey: ["get-products", ...Object.values(options)],
    queryFn: async () => {
      const { data } = await axios(`/products${queryOption}`);
      return data;
    },
  });

  const { data: products, isLoading: productsLoading, error: productsError } = query || {};

  return { ...query, products, productsLoading, productsError };
}
