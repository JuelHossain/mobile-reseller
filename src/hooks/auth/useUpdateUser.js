import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useUserContext } from "../../context/userContext";

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const { email, seller } = useUserContext();

  const mutation = useMutation({
    mutationFn: async (patch) => {
      const { data } = await axios.patch(`/users/${patch?.email || email}`, patch);
      return data;
    },
    onMutate: async (patch) => {
      // cancel all queries of this key
      await queryClient.cancelQueries({ queryKey: ["get-user", patch?.email || email] });

      // getting old user
      const oldUser = queryClient.getQueryData(["get-user", patch?.email || email]);

      // updating new user
      queryClient.setQueryData(["get-user", email], { ...oldUser, ...patch });

      // sending old user to the context
      return { oldUser };
    },
    onError: (err, patch, context) => {
      queryClient.setQueryData(["get-user", patch?.email || email], context.oldUser);
    },
    onSettled: (data, err, patch) => {
      queryClient.invalidateQueries({ queryKey: ["get-user", patch?.email || email] });
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
