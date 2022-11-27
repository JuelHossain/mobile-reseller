import { Button, Container, createStyles, Group, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 120,
    backgroundColor: theme.fn.variant({ variant: "filled", color: theme.primaryColor }).background,
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][3],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,
    color: theme.white,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][1],
  },
}));

export default function PaymentSuccess() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>wow</div>
        <Title className={classes.title}>Your Payment Succeeded...</Title>
        <Text size="lg" align="center" className={classes.description}>
          Please Contact the seller and get your phone as soon as possible if you didn't already , congratulations.
        </Text>
        <Group position="center">
          <Button component={Link} to="/" variant="white" size="md">
            Go to Home
          </Button>
        </Group>
      </Container>
    </div>
  );
}
