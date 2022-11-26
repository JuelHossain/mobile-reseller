import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useUpdateUser() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ patch, email }) => {
      const { data } = await axios.patch(`/users/${email}`, patch);
      return data;
    },
    onMutate: async ({ patch, email }) => {
      // cancel all queries of this key
      await queryClient.cancelQueries({ queryKey: ["get-user", email] });

      // getting old user
      const oldUser = queryClient.getQueryData(["get-user", email]);

      // updating new user
      queryClient.setQueryData(["get-user", email], { ...oldUser, ...patch });

      // sending old user to the context
      return { oldUser };
    },
    onError: (err, { email }, context) => {
      queryClient.setQueryData(["get-user", email], context.oldUser);
    },
    onSettled: (data, err, { email }) => {
      queryClient.invalidateQueries({ queryKey: ["get-user", email] });
      queryClient.invalidateQueries({
        queryKey: ["get-users"],
      });
    },
  });

  const {
    mutate: updateUser,
    mutateAsync: updateUserAsync,
    isLoading: updatingUser,
    error: updatingUserError,
  } = mutation;

  return {
    ...mutation,
    updateUser,
    updateUserAsync,
    updatingUser,
    updatingUserError,
  };
}
