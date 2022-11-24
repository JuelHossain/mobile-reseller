import { createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function Details({ name, short }) {
  const { classes, cx } = useStyles();
  return (
    <>
      <Text size="lg" weight={500} className={cx(classes.cardTitle, "uppercase")} mt="md">
        {name}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {short}
      </Text>
    </>
  );
}
