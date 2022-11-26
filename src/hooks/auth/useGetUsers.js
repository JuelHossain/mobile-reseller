import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetUsers(options = {}) {
  const queryOption = Object.keys(options).reduce((acc, option) => {
    const queries = `${acc}${acc === "" ? "?" : "&"}${option}=${options[option]}`;
    return queries;
  }, "");

  const query = useQuery({
    queryKey: ["get-users", ...Object.values(options)],
    queryFn: async () => {
      const { data } = await axios(`/users${queryOption}`);
      return data;
    },
  });

  const { data: users, isLoading: usersLoading, error: usersError } = query || {};

  return { ...query, users, usersLoading, usersError };
}
