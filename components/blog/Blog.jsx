import { Container, createStyles, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
import { IconExclamationMark } from "@tabler/icons";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";
import blogs from "./blogs";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  item: {
    display: "flex",
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },

  supTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
    letterSpacing: 0.5,
  },

  title: {
    lineHeight: 1,
    textAlign: "center",
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: "center",
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: "inline-block",
    color: theme.colorScheme === "dark" ? theme.white : "inherit",
  },
}));

export default function Blog() {
  const { classes } = useStyles();
  useSetPageTitle("Blog");

  const items = blogs.map((item) => (
    <div className={classes.item} key={item.question}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <IconExclamationMark />
      </ThemeIcon>

      <div>
        <Text weight={700} size="lg" className={classes.itemTitle}>
          {item.question} ?
        </Text>
        <Text color="dimmed">{item.answer}.</Text>
      </div>
    </div>
  ));

  return (
    <Container size="2xl" className={classes.wrapper}>
      <Text className={classes.supTitle}>blogs</Text>

      <Title className={classes.title} order={2}>
        The Most <span className={classes.highlight}>Valuable</span> Questions And Answers
      </Title>

      <Container size={660} p={0}>
        <Text color="dimmed" className={classes.description}>
          This section is for programming hero team to read this section will be removed after the assignment has been
          marked by the team. feel free to give me suggestion p hero team i am writing this for you.
        </Text>
      </Container>

      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: 1000, cols: 1, spacing: 40 }]}
        style={{ marginTop: 30 }}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
}
