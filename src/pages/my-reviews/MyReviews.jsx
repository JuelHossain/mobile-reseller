import { Container } from "@mantine/core";
import PrivateRoute from "../../components/auth/PrivateRoute";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";
import Heading from "../services/components/Heading";
import ReviewList from "./ReviewList";

export default function MyReviews() {
  useSetPageTitle("My Reviews");

  return (
    <PrivateRoute>
      <Container size="lg" className="my-8 sm:my-16">
        <Heading
          badge="Your Reviews"
          title="Here is all of your reviews"
          text="Please do operations carefully with your reviews . and please give us more reviews so that everyone knows about our service quality"
        />
        <ReviewList />
      </Container>
    </PrivateRoute>
  );
}
