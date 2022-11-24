import { Modal } from "@mantine/core";
import { useModalContext } from "../../context/modalContext";
import Terms from "./Terms";

export default function TermsModal() {
  const { termsModal } = useModalContext();
  const [opened, { close }] = termsModal;
  return (
    <Modal size={1200} opened={opened} onClose={close}>
      <Terms />
    </Modal>
  );
}
