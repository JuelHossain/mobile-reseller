import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useUser from "./useUser";

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const { email, seller } = useUser();

  const mutation = useMutation({
    mutationFn: async (patch) => {
      const { data } = await axios.patch(`/users/${email}`, patch);
      return data;
    },
    onMutate: async (patch) => {
      // cancel all queries of this key
      await queryClient.cancelQueries({ queryKey: ["get-user", email] });

      // getting old user
      const oldUser = queryClient.getQueryData(["get-user", email]);

      // updating new user
      queryClient.setQueryData(["get-user", email], { ...oldUser, ...patch });

      // sending old user to the context
      return { oldUser };
    },
    onError: (err, patch, context) => {
      queryClient.setQueryData(["get-user", email], context.oldUser);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["get-user", email] });
    },
  });

  const {
    mutate: updateUser,
    mutateAsync: updateUserAsync,
    isLoading: updatingUser,
    error: updatingUserError,
  } = mutation;

  const switchToSeller = () => updateUser({ seller: true, admin: false });
  const switchToBuyer = () => updateUser({ seller: false, admin: false });
  const switchToAdmin = () => updateUser({ admin: true, seller: false });
  const toggleSeller = () => updateUser({ seller: !seller });

  return {
    ...mutation,
    updateUser,
    updateUserAsync,
    updatingUser,
    updatingUserError,
    switchToAdmin,
    switchToBuyer,
    switchToSeller,
    toggleSeller,
  };
}
