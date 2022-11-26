import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetAUser(em) {
  const query = useQuery({
    queryKey: ["get-user", em],
    queryFn: async () => {
      const { data } = await axios(`/users/${em}`);
      return data;
    },
  });

  const { data: user, isLoading: userLoading, error: userError, refetch: refetchUser } = query;

  const { seller, admin, verified, email, phoneNumber, address, wishlist } = user || {};

  return {
    email,
    admin,
    seller,
    verified,
    user,
    userLoading,
    userError,
    refetchUser,
    phoneNumber,
    address,
    wishlist,
  };
}
