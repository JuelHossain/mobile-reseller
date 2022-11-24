/* eslint-disable no-underscore-dangle */
import { Modal, Title } from "@mantine/core";
import { useModalContext } from "../../context/modalContext";
import { ServiceFormProvider } from "../../context/service-form-context/serviceFormContext";
import ServiceForm from "./ServiceForm";

export default function UpdateServiceModal() {
  const { updateServiceModal } = useModalContext();
  const [opened, { close }] = updateServiceModal;
  return (
    <Modal
      title={<Title order={4}>Please Update This Service,</Title>}
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
