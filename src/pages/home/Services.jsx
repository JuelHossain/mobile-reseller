import { Card, Container, createStyles, SimpleGrid, Text, Title } from "@mantine/core";
import { IconCertificate, IconCoin, IconTruck } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  feature: {
    position: "relative",
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: "absolute",
    height: 100,
    width: 160,
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
    zIndex: 1,
  },

  content: {
    position: "relative",
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

function Feature({ icon: Icon, title, description, className, ...others }) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={38} className={classes.icon} stroke={1.5} />
        <Text color="white" weight={700} size="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text color="white" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconTruck,
    title: "Free Worldwide shipping",
    description:
      "As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.",
  },
  {
    icon: IconCertificate,
    title: "Best Quality Product",
    description: "Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.",
  },
  {
    icon: IconCoin,
    title: "Very Affordable Pricing",
    description:
      "Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.",
  },
];

export default function Services() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Card
      withBorder
      shadow="md"
      className="p-6 sm:px-20 flex flex-col justify-center rounded-md py-20 shadow-md bg-service bg-bottom bg-no-repeat bg-cover "
    >
      <Container size="xl" className="bg-main-5/50 dark:bg-main-9/50 p-6 rounded-md">
        <Title color="white" mb={50} align="center">
          Services We also provide
        </Title>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]} spacing={50}>
          {items}
        </SimpleGrid>
      </Container>
    </Card>
  );
}
