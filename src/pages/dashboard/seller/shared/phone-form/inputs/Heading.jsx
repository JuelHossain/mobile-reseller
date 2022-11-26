import { Text, Title } from "@mantine/core";

export default function Heading({ title, text }) {
  return (
    <div>
      <Title order={3}>{title}</Title>
      <Text className="text-sm">{text}</Text>
    </div>
  );
}
