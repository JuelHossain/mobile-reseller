import { Button, Group } from "@mantine/core";
import { IconPencil } from "@tabler/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import UpdateServiceModal from "../../../../../components/modify-services/UpdateServiceModal";
import { useModalContext } from "../../../../../context/modalContext";
import auth from "../../../../../firebase";
import DeleteService from "./DeleteService";

export default function ServiceActions() {
  const { updateServiceModal } = useModalContext();
  const [user] = useAuthState(auth);
  const [, { open }] = updateServiceModal;
  return (
    user && (
      <Group className="w-full">
        <Button className="flex-1" onClick={open} leftIcon={<IconPencil size={18} />}>
          Edit
        </Button>
        <DeleteService />
        <UpdateServiceModal />
      </Group>
    )
  );
}
