import { Text, Title } from "@mantine/core";
import { useReviewFormContext } from "../../../../context/review-form-context/reviewFormContext";

export default function Heading() {
  const { data: { data } = {} } = useReviewFormContext() ?? {};
  return (
    <div>
      <Title order={4}>{data ? "Update Your Review" : "Give us a Review"}</Title>
      <Text>Say something if you took this service</Text>
    </div>
  );
}
