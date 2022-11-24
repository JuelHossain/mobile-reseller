import { Badge, Group, Stack, Text, Title } from "@mantine/core";

export default function Heading({ title, badge, text }) {
  return (
    <Stack
      className="xl:sticky top-[10vh] xl:w-96 p-4 rounded-md max-xl:mt-3 "
      sx={({ colors, colorScheme }) => ({
        backgroundColor: colorScheme === "dark" ? colors.dark[6] : colors.white,
      })}
    >
      <Group className="max-xl:justify-center">
        <Badge variant="filled" size="lg">
          {badge || "Dental Services We Provide"}
        </Badge>
      </Group>

      <Title className="max-xl:text-center" order={2}>
        {title || " Please Checkout our services below"}
      </Title>

      <Text color="dimmed" className="max-xl:text-center max-w-2xl mx-auto">
        {text ||
          "Select your desired service and book an appointment now. if you have taken any of those service already pleaseprovide a review . we will be glad to know what you think about us."}
      </Text>
    </Stack>
  );
}
