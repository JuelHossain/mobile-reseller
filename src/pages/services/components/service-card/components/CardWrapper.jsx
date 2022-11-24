import { Card, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    cursor: "pointer",
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`,
  },
}));

export default function CardWrapper({ children }) {
  const { classes, cx } = useStyles();
  return (
    <Card shadow="md" radius="md" className={cx(classes.card, "relative")} p="xl">
      {children}
    </Card>
  );
}
