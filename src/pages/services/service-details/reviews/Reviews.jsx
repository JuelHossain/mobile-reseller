import { Stack } from "@mantine/core";
import Heading from "./components/Heading";

import ReviewCarousel from "./components/ReviewCarousel";

export default function Reviews() {
  return (
    <Stack>
      <Heading />
      <ReviewCarousel />
    </Stack>
  );
}
