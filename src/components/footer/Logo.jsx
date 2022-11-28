import { Group, Stack, Text, Title } from "@mantine/core";
import { IconDeviceMobile } from "@tabler/icons";

export default function Logo() {
  return (
    <Group spacing={2} to="/" className=" font-bold no-underline text-main-6 space-y-0">
      <IconDeviceMobile size={35} />
      <Stack spacing={0}>
        <Title className="text-xl ">Mobile Reseller</Title>
        <Text className="text-xs ">All Rights Reserved 2023</Text>
      </Stack>
    </Group>
  );
}
