/* eslint-disable no-underscore-dangle */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const updateService = async ({ patch, id }) => {
  const { data: response } = await axios.patch(`/services/${id}`, patch);
  return response;
};

export default function useUpdateAProduct() {
  const queryClient = useQueryClient();

  // refetch on query end
  const refetch = ({ id }) => {
    const queryKey = ["get-service", id];
    queryClient.invalidateQueries({ queryKey });
  };

  const mutation = useMutation({
    mutationFn: updateService,
    onSettled: refetch,
  });
  return mutation;
}
