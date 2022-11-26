/* eslint-disable no-nested-ternary */
import { Chip, LoadingOverlay, Notification, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconTrash, IconX } from "@tabler/icons";
import useDeleteUser from "../../../../hooks/auth/useDeleteUser";
import useGetUsers from "../../../../hooks/auth/useGetUsers";
import useUpdateUser from "../../../../hooks/auth/useUpdateUser";
import DataTable from "../../seller/shared/table/DataTable";

export default function UsersTable({ options }) {
  const { users, usersError, usersLoading } = useGetUsers(options);
  const { mutate } = useDeleteUser();
  const { updateUser } = useUpdateUser();
  const data = {
    rows: users?.map((item) => {
      const { _id: id, displayName, email, photoURL, verified } = item || {};
      return {
        id,
        title: displayName,
        image: photoURL,
        cols: [
          <Chip
            key={id}
            size="xs"
            radius="xs"
            checked={verified}
            onChange={(value) => {
              updateUser({ patch: { verified: value }, email });
            }}
            readOnly={verified}
          >
            {verified ? "Verified" : "Verify"}
          </Chip>,
          email,
        ],
      };
    }),
    headers: ["title", "Status", "email", "Actions"],
    actions: [
      {
        fn: (id, title) =>
          openConfirmModal({
            title: `Do You Really Want To Delete ${title}`,
            children: <Text size="sm">You Cannot Undo This Action Later , Please consider think twice.</Text>,
            labels: { confirm: "Confirm", cancel: "Cancel" },
            onConfirm: () => mutate(id),
          }),
        icon: IconTrash,
        props: { color: "red", variant: "light" },
      },
    ],
  };
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
