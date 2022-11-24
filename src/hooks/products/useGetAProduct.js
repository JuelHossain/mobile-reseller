import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetAProduct(id) {
  const getAProduct = async () => {
    const { data } = await axios(`/services/${id}`);
    return data;
  };

  const data = useQuery({
    queryKey: ["get-product", id],
    queryFn: getAProduct,
    enabled: !!id,
  });
  return data;
}
