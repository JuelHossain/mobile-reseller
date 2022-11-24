import { Stack } from "@mantine/core";
import CardWrapper from "./components/CardWrapper";
import RatingActions from "./components/RatingActions";
import RatingAndSayings from "./components/RatingAndSayings";
import UserDetails from "./components/UserDetails";

export default function ReviewCard(review) {
  return (
    <CardWrapper>
      <Stack className="w-full relative">
        <UserDetails {...review} />
        <RatingAndSayings {...review} />
        <RatingActions {...review} />
      </Stack>
    </CardWrapper>
  );
}
