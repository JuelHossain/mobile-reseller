import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";

const useUser = () => {
  const [user] = useAuthState(auth);
  const { email } = user ?? {};

  const getUser = async () => {
    const { data } = await axios(`users/${email}`);
    return data;
  };

  const {
    data,
    isLoading: userLoading,
    isError: isUserError,
    error: userError,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ["get-user", email],
    queryFn: getUser,
  });

  const { role } = data || {};
  const admin = role === "admin";
  const buyer = role === "buyer";
  const seller = role === "seller";

  return { admin, buyer, seller, user: data, userLoading, isUserError, userError, refetchUser };
};
export default useUser;
