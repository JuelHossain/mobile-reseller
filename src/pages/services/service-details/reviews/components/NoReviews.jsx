/* eslint-disable no-underscore-dangle */
import { Carousel } from "@mantine/carousel";
import { Rating, Stack, Text, Title } from "@mantine/core";

export default function NoReviews() {
  return (
    <Carousel.Slide className="h-full">
      <Stack spacing="xs" className="w-full h-full items-center justify-center text-center">
        <Title order={4}>There are no reviews yet</Title>
        <Text>But You Can Give One</Text>
        <Rating readOnly />
      </Stack>
    </Carousel.Slide>
  );
}
