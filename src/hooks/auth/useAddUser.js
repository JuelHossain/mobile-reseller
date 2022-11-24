import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useToken from "./useToken";

export default function useAddUser() {
  const mutationFn = async (newUser) => {
    const { data: response } = await axios.post(`/users`, newUser);
    return response;
  };

  const queryClient = useQueryClient();
  const { generateToken } = useToken();

  const onSuccess = (user) => {
    queryClient.invalidateQueries({ queryKey: ["get-user"] });
    generateToken(user);
  };

  const mutation = useMutation({
    mutationFn,
    onSuccess,
  });

  const { mutate: createUser, mutateAsync: createUserAsync, isLoading: creatingUser } = mutation;

  return { ...mutation, createUser, createUserAsync, creatingUser };
}
