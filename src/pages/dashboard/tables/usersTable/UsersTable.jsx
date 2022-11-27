/* eslint-disable no-nested-ternary */
import { LoadingOverlay, Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import useGetUsers from "../../../../hooks/auth/useGetUsers";
import DataTable from "../dataTable/DataTable";
import useUserActions from "./useUserActions";
import useUserRows from "./useUserRows";

export default function UsersTable({ options }) {
  const { users, usersError, usersLoading } = useGetUsers(options);

  const rows = useUserRows();
  const actions = useUserActions();
  const headers = ["title", "role", "Status", "email", "Actions"];

  const data = { rows, headers, actions };
  if (usersLoading) return <LoadingOverlay visible />;
  if (usersError)
    return (
      <Notification title="Server Side Error" icon={<IconX size={18} />} color="red">
        Please Try again later.
      </Notification>
    );
  if (users?.length === 0)
    return (
      <Notification closeButtonProps={{ color: "red", variant: "light" }} title="oops">
        There is no user found
      </Notification>
    );
  return <DataTable data={data} />;
}
