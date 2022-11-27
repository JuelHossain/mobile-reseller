import { Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconTrash } from "@tabler/icons";
import useDeleteOrder from "../../../../hooks/orders/useDeleteOrder";

export default function useOrderActions() {
  const { mutate } = useDeleteOrder();

  const deleteOrder = {
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

  const actions = [deleteOrder];

  return actions;
}
