import { Button, Col, Container, createStyles, Grid, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

const adPackage = [
  { days: 7, price: 100, icon: IconArrowUpRight, color: "green", progress: 100 },
  { days: 5, price: 75, icon: IconArrowUpRight, color: "blue", progress: 100 },
  { days: 3, price: 50, icon: IconArrowDownRight, color: "red", progress: 100 },
];

export default function Advertisement() {
  const { classes } = useStyles();

  const items = adPackage.map((feature) => (
    <div className="bg-main-2 dark:bg-main-8 p-4 rounded-md" key={feature.days}>
      <ThemeIcon size={44} radius="md" variant="gradient" gradient={{ deg: 133, from: "main.5", to: "main.7" }}>
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.days} days
      </Text>
      <Text color="dimmed">Only On Bdt {feature?.price}</Text>
    </div>
  ));

  return (
    <div className="p-6 flex justify-center border-solid border-main-5 rounded-md py-20 shadow-md">
      <Grid gutter={80} className="w-full">
        <Col span={12} md={5} className="text-center md:text-start">
          <Container size="sm">
            <Title className={classes.title} order={2}>
              Stand out from the crowd
            </Title>
            <Text color="dimmed" size="lg">
              Sell Your Phone By Adding them to the home page.that's how you can get more customer. and your phone will
              sell fast
            </Text>
            <Button variant="gradient" gradient={{ deg: 133, from: "blue", to: "cyan" }} size="lg" radius="md" mt="xl">
              Get started
            </Button>
          </Container>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid className="md:justify-items-end justify-items-center grid-cols-2 xs:grid-cols-3" spacing={30}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}
