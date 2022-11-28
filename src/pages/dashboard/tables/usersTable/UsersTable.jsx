/* eslint-disable no-nested-ternary */
import { LoadingOverlay } from "@mantine/core";
import useGetUsers from "../../../../hooks/auth/useGetUsers";
import NotFound from "../../shared/NotFound";
import ServerError from "../../shared/ServerError";
import DataTable from "../dataTable/DataTable";
import useUserActions from "./useUserActions";
import useUserRows from "./useUserRows";

export default function UsersTable({ options }) {
  const { users, usersError, usersLoading } = useGetUsers(options);

  const rows = useUserRows(users);
  const actions = useUserActions();
  const headers = ["title", "role", "Status", "email", "Actions"];

  const data = { rows, headers, actions };
  if (usersLoading) return <LoadingOverlay visible />;
  if (usersError) return <ServerError />;
  if (users?.length === 0) return <NotFound title="oops" children="There is no user found" />;
  return <DataTable data={data} />;
}
