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
    isLoading: userLoading,
    isError: isUserError,
    error: userError,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ["get-user", user?.email],
    queryFn: getUser,
  });

  const { seller, admin, verified, email } = data || {};

  return { email, admin, seller, verified, user: data, userLoading, isUserError, userError, refetchUser };
};
export default useUser;
