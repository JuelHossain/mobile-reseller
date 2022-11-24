import { ActionIcon, Title } from "@mantine/core";
import { openModal } from "@mantine/modals";
import { IconPencil } from "@tabler/icons";
import ReviewForm from "../../../../../../components/modify-reviews/ReviewForm/ReviewForm";
import { ReviewFormProvider } from "../../../../../../context/review-form-context/reviewFormContext";

export default function UpdateRating({ id, name }) {
  const openDeleteModal = () =>
    openModal({
      title: <Title order={4}>Review for {name}</Title>,
      centered: true,
      children: (
        <ReviewFormProvider id={id}>
          <ReviewForm />
        </ReviewFormProvider>
      ),
      size: 500,
    });
  return (
    <ActionIcon onClick={openDeleteModal} variant="light" color="red">
      <IconPencil size={18} />
    </ActionIcon>
  );
}
