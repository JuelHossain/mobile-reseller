import { Notification, Paper } from "@mantine/core";

export default function NotFound(props) {
  return (
    <Paper p={50} withBorder className="flex justify-center items-center w-full">
      <Notification disallowClose closeButtonProps={{ color: "red", variant: "light" }} {...props} />
    </Paper>
  );
}
