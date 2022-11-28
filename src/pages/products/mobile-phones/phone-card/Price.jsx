import { Text } from "@mantine/core";

export default function Price({ price }) {
  return (
    <div className="line-clamp-1">
      <Text size="xl" span weight={500}>
        {price}
      </Text>
      <Text span size="sm" color="dimmed">
        / Taka
      </Text>
    </div>
  );
}
