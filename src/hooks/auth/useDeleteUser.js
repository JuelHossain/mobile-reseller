/* eslint-disable no-underscore-dangle */
import { showNotification } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useDeleteUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (email) => {
      const { data } = await axios.delete(`/users/${email}`);
      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-users"] });
      showNotification({
        title: "user Deleted",
        message: "user has been deleted Successfully",
      });
    },
  });

  return mutation;
}
