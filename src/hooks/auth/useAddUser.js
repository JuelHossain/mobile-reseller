import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function useAddUser() {
  const mutationFn = async (newUser) => {
    const { data: response } = await axios.post(`/users`, newUser);
    return response;
  };

  const mutation = useMutation({
    mutationFn,
  });

  const { mutate: createUser, mutateAsync: createUserAsync, isLoading: creatingUser } = mutation;

  return { ...mutation, createUser, createUserAsync, creatingUser };
}
