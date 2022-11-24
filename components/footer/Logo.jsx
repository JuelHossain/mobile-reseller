import { Divider, Group, Stack, Text, Title } from "@mantine/core";
import { IconDental } from "@tabler/icons";

export default function Logo() {
  return (
    <Group to="/" className="text-xl font-bold no-underline text-main-6 space-y-0">
      <IconDental className="w-8 h-8 sm:h-12 sm:w-12" />
      <Divider orientation="vertical" color="primary" />
      <Stack spacing={0}>
        <Title className="text-xl sm:text-2xl">Pro Dentist</Title>
        <Text className="text-xs sm:text-sm">All Rights Reserved 2023</Text>
      </Stack>
    </Group>
  );
}
