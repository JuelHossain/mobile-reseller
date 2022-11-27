import { Button } from "@mantine/core";
import { IconUserCheck } from "@tabler/icons";

export default function AdminButton(props) {
  return (
    <Button className="flex-1 " leftIcon={<IconUserCheck size={17} />} variant="outline" {...props}>
      Login As Admin
    </Button>
  );
}
