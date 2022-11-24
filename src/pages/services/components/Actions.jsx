import { ActionIcon, Group } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons";

export default function Actions() {
  return (
    <Group>
      <ActionIcon variant="light" color="sec">
        <IconPencil size={18} />
      </ActionIcon>
      <ActionIcon variant="light" color="sec">
        <IconTrash size={18} />
      </ActionIcon>
    </Group>
  );
}
