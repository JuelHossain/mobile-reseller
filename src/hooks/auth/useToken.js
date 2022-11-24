/* eslint-disable import/no-cycle */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useTokenContext } from "../../context/tokenContext";

export default function useToken() {
  const { setToken, removeToken } = useTokenContext();
  const generateToken = async (user) => {
    const { data } = await axios.put(`/users`, user);
    return data;
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: generateToken,
    onSuccess: (data) => {
      setToken(data?.accessToken);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    },
    onError: () => {
      removeToken();
    },
  });
  return mutation;
}
