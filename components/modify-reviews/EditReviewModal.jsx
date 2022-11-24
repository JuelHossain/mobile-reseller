import { Modal, Title } from "@mantine/core";
import { useModalContext } from "../../context/modalContext";
import { ReviewFormProvider } from "../../context/review-form-context/reviewFormContext";
import ReviewForm from "./ReviewForm/ReviewForm";

export default function EditReviewModal({ id }) {
  const { editReviewModal } = useModalContext();
  const [opened, { close }] = editReviewModal;
  return (
    <Modal
      title={<Title order={4}>Please Edit This Review,</Title>}
      classNames={{ header: "items-start" }}
      centered
      size={500}
      opened={opened}
      onClose={close}
      closeOnClickOutside={false}
    >
      <ReviewFormProvider id={id}>
        <ReviewForm />
      </ReviewFormProvider>
    </Modal>
  );
}
