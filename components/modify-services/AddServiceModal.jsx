import { Modal, Title } from "@mantine/core";
import { useModalContext } from "../../context/modalContext";
import { ServiceFormProvider } from "../../context/service-form-context/serviceFormContext";
import ServiceForm from "./ServiceForm";

export default function AddServiceModal() {
  const { addServiceModal } = useModalContext();
  const [opened, { close }] = addServiceModal;
  return (
    <Modal
      title={<Title order={4}>Please Add A Service Here,</Title>}
      classNames={{ header: "items-start" }}
      centered
      size={500}
      opened={opened}
      onClose={close}
      closeOnClickOutside={false}
    >
      <ServiceFormProvider>
        <ServiceForm />
      </ServiceFormProvider>
    </Modal>
  );
}
