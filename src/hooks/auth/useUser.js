import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";

const useUser = () => {
  const [user] = useAuthState(auth);

  const getUser = async () => {
    const { data } = await axios(`users/${user?.email}`);
    return data;
  };
  const {
    data,
    isLoading,
    isError: isUserError,
    error: userError,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ["get-user", user?.email],
    queryFn: getUser,
  });

  const { role: userRole } = data || {};

  const admin = userRole === "admin";
  const buyer = userRole === "buyer";
  const seller = userRole === "seller";
  const userLoading = isLoading;

  return { admin, buyer, seller, user: data, userLoading, isUserError, userError, refetchUser };
};
export default useUser;
