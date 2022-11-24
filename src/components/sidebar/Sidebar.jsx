import { Box, Card, NavLink, Text } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ navlinks, title, path }) {
  const { pathname } = useLocation();
  const items = navlinks.map((item, index) => {
    const { label, description, link } = item;

    const active = pathname === link || (index === 0 && pathname === path);

    return (
      <NavLink
        component={Link}
        to={link}
        key={label}
        label={label}
        description={description}
        icon={<item.icon size={16} stroke={1.5} />}
        active={active}
      />
    );
  });

  return (
    <Card
      sx={(theme) => ({
        borderRight: theme.colorScheme === "light" && `1px solid ${theme.colors.gray[3]}`,
      })}
      className="w-60 p-0 py-2 h-[92hv] rounded-none "
    >
      <Text className="font-bold p-4">{title}</Text>
      <Box> {items}</Box>
    </Card>
  );
}
