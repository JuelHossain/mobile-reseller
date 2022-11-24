/* eslint-disable import/no-cycle */
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useTokenContext } from "../../context/tokenContext";

export default function useToken() {
  const { setToken, removeToken } = useTokenContext();
  const generateToken = async (user) => {
    const { data } = await axios.put(`/users`, user);
    return data;
  };
  const mutation = useMutation({
    mutationFn: generateToken,
    onSuccess: (data) => {
      setToken(data.accessToken);
    },
    onError: () => {
      removeToken();
    },
  });
  return mutation;
}
