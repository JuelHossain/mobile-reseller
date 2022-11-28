import { Box, Card, Group, NavLink, Text } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { useHeaderContext } from "../../context/headerContext";

export default function Sidebar({ navlinks, title, extra, left }) {
  const { disclosure } = useHeaderContext();
  const [, { close }] = disclosure;

  const { pathname } = useLocation();
  const items = navlinks.map((item) => {
    const { label, description, link } = item;

    const active = pathname === link;

    return (
      <NavLink
        component={Link}
        to={link}
        key={label}
        label={label}
        description={description}
        icon={<item.icon size={16} stroke={1.5} />}
        onClick={close}
        active={active}
      />
    );
  });

  return (
    <Card
      sx={(theme) => ({
        borderLeft: left && theme.colorScheme === "light" && `1px solid ${theme.colors.gray[3]}`,
        borderRight: !left && theme.colorScheme === "light" && `1px solid ${theme.colors.gray[3]}`,
      })}
      className="w-60 p-0 py-2 rounded-none  "
    >
      <Group className=" p-4" justify="center">
        <Text className="font-bold">{title}</Text>
        {extra}
      </Group>
      <Box> {items}</Box>
    </Card>
  );
}
