import { Paper } from "@mantine/core";

export default function CardWrapper({ children }) {
  return (
    <Paper withBorder radius="md" className="p-4 h-full">
      {children}
    </Paper>
  );
}
