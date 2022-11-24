import { Group, Title } from "@mantine/core";
import { IconDeviceMobile } from "@tabler/icons";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Group
      noWrap
      component={Link}
      to="/"
      className=" basis-1/3 text-xl font-bold no-underline text-main-6 space-y-0 duration-500 gap-2 md:justify-center"
    >
      <Title className="text-xl sm:text-2xl uppercase truncate">
        Mobile <IconDeviceMobile className="w-7 h-7 sm:w-9 sm:h-9 duration-300" /> Reseller
      </Title>
    </Group>
  );
}
