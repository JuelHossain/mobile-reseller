import { Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconTrash } from "@tabler/icons";
import useDeleteUser from "../../../../hooks/auth/useDeleteUser";

export default function useUserActions() {
  const { mutate } = useDeleteUser();
  const deleteUser = {
    fn: (id, title) =>
      openConfirmModal({
        title: `Do You Really Want To Delete ${title}`,
        children: <Text size="sm">You Cannot Undo This Action Later , Please consider think twice.</Text>,
        labels: { confirm: "Confirm", cancel: "Cancel" },
        onConfirm: () => mutate(id),
      }),
    icon: IconTrash,
    props: { color: "red", variant: "light" },
  };
  const actions = [deleteUser];
  return actions;
}
