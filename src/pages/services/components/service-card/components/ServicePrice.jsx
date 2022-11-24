import { Button, Stack } from "@mantine/core";
import { IconArrowUpRight, IconCurrencyDollar } from "@tabler/icons";
import { Link } from "react-router-dom";

export default function ServicePrice({ cost, id }) {
  return (
    <Stack className="absolute top-5 right-5 items-end ">
      <Button variant="light" compact rightIcon={<IconCurrencyDollar size={18} />}>
        {cost}
      </Button>
      <Button
        component={Link}
        to={`/services/${id}`}
        variant="light"
        compact
        rightIcon={<IconArrowUpRight size={18} />}
      >
        Details
      </Button>
    </Stack>
  );
}
