/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useUserContext } from "../../../../context/userContext";

export default function useWisList() {
  const { wishlist } = useUserContext();
  const queryClient = useQueryClient();
  const getProducts = async () => {
    const items = [];
    for (const id of wishlist) {
      const product = queryClient.fetchQuery(["get-product", id], async () => {
        const { data } = await axios(`/products/${id}`);
        return data;
      });
      console.log(product);
    }
    return items;
  };

  return {getProducts};
}
