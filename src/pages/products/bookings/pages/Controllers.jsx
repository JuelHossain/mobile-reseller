import { Button, Group } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";

export default function Controllers({ showNext, showPrev, prev, next, showConfirm }) {
  return (
    <Group position="right" className="p-4">
      {showPrev && (
        <Button onClick={prev} leftIcon={<IconArrowLeft />}>
          Prev
        </Button>
      )}
      {showNext && (
        <Button onClick={next} rightIcon={<IconArrowRight />}>
          {showConfirm ? "Confirm booking" : "Next"}
        </Button>
      )}
    </Group>
  );
}
