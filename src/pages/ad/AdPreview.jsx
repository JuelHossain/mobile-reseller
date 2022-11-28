import { Button, createStyles, Group, Text, Title } from "@mantine/core";
import moment from "moment";
import { Link } from "react-router-dom";
import PhonePhotos from "../products/mobile-phones/phone-card/PhonePhotos";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]}`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export default function AdPreview({ product }) {
  const { imageLinks, brand, model, adWillEnd, description } = product || {};
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Your Ad Will End {moment(adWillEnd).endOf().fromNow()}</Title>
        <Text weight={500} size="lg" mb={5}>
          {`${brand} ${model}`}
        </Text>
        <Text size="sm" color="dimmed">
          {description}
        </Text>

        <Group className="mt-5">
          <Button component={Link} to="/#ad" variant="light">
            See Your Ad live On home page
          </Button>
          <Button component={Link} to="/dashboard/manage-ads" className={classes.control}>
            Manage Your Ads
          </Button>
        </Group>
      </div>
      <PhonePhotos imageLinks={imageLinks} />
    </div>
  );
}
