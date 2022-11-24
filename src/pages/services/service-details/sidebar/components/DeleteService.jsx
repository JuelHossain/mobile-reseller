import { Button, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconTrash } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import { useServiceContext } from "../../../../../context/serviceContext";
import useDeleteService from "../../../../../hooks/services/useDeleteService";

export default function DeleteService() {
  const { id } = useServiceContext();
  const { mutate } = useDeleteService();
  const navigate = useNavigate();
  const openDeleteModal = () =>
    openConfirmModal({
      title: "Delete This Service",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete This Service? You Cannot restore your data after deleting this
        </Text>
      ),
      labels: { confirm: "Delete Service", cancel: "No don't delete it" },
      confirmProps: { color: "red" },

      onConfirm: () => {
        mutate(id, {
          onSuccess: () => {
            navigate("/services");
          },
        });
      },
    });

  return (
    <Button className="flex-1" onClick={openDeleteModal} leftIcon={<IconTrash size={18} />}>
      Delete
    </Button>
  );
}
