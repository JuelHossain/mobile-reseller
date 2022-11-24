import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetProducts(options) {
  const query = Object.keys(options).reduce((acc, option) => {
    const queries = `${acc}&${option}=${options[option]}`;
    return queries;
  }, "");

  const getProducts = async () => {
    const { data } = await axios(`/products?${query}`);
    return data;
  };

  const data = useQuery({
    queryKey: ["get-services", ...Object.values(options)],
    queryFn: getProducts,
  });

  return data;
}
