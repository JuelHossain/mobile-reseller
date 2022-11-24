import { ActionIcon, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconTrash } from "@tabler/icons";
import useDeleteReview from "../../../../../../hooks/reviews/useDeleteReview";

export default function DeleteRating({ id, name }) {
  const { mutate } = useDeleteReview();
  const openDeleteModal = () =>
    openConfirmModal({
      title: `Delete Rating for ${name}`,
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your Rating? You Can not undo this action later . please think twice
        </Text>
      ),
      labels: { confirm: "Delete Rating", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onConfirm: () => {
        mutate(id);
      },
    });
  return (
    <ActionIcon onClick={openDeleteModal} variant="light" color="red">
      <IconTrash size={18} />
    </ActionIcon>
  );
}
