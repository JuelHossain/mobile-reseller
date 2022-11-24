import { Textarea } from "@mantine/core";
import { useReviewFormContext } from "../../../../context/review-form-context/reviewFormContext";

export default function Sayings() {
  const { getInputProps } = useReviewFormContext();
  return <Textarea {...getInputProps("sayings")} placeholder="inspire us with your words " />;
}
