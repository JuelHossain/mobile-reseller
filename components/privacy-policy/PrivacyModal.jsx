import { Modal } from "@mantine/core";
import { useModalContext } from "../../context/modalContext";
import Privacy from "./Privacy";

export default function PrivacyModal() {
  const { privacyModal } = useModalContext();
  const [opened, { close }] = privacyModal;
  return (
    <Modal size={1200} opened={opened} onClose={close}>
      <Privacy />
    </Modal>
  );
}
