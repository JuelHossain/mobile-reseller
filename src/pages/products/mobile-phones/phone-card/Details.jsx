import { Chip, Group, Stack, Text } from "@mantine/core";
import { IconStar } from "@tabler/icons";

export default function Details({ seller, condition, brand, model, description }) {
  return (
    <Stack className="px-4 gap-2 mt-2">
      <Group className="justify-between w-full" noWrap>
        <Chip size="xs" radius={4} variant="filled" checked={seller?.verified} readOnly right>
          <p className="m-0  hidden sm:inline">Selling By</p> {seller?.displayName}
        </Chip>
        <Group spacing={5} className="2/5" noWrap>
          <IconStar size={14} />
          <Text size="xs" weight={500} className="capitalize">
            {condition}
          </Text>
        </Group>
      </Group>
      <div>
        <Text weight={500} className="line-clamp-2 ">
          {`${brand} ${model}`}
        </Text>
        <Text size="sm" color="dimmed" className="line-clamp-3">
          {description}
        </Text>
      </div>
    </Stack>
  );
}
