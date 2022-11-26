import { Carousel } from "@mantine/carousel";
import { ActionIcon, Button, Card, createStyles, Flex, Group, Image, Text } from "@mantine/core";
import { IconHeart, IconStar } from "@tabler/icons";
import { Link } from "react-router-dom";
import useUpdateCurrentUser from "../../../hooks/auth/useUpdateCurrentUser";

const useStyles = createStyles((theme, _params, getRef) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {
    "&:hover": {
      [`& .${getRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: 4,
    height: 4,
    transition: "width 250ms ease",

    "&[data-active]": {
      width: 16,
    },
  },
}));

export default function PhoneCard({ imageLinks, brand, model, price, description, condition, _id }) {
  const { classes } = useStyles();
  const { addToWishList, updatingUser } = useUpdateCurrentUser();

  const slides = imageLinks?.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder p="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Flex direction="column" justify="space-between">
        <Group align="start" position="apart" mt="lg">
          <Group className="w-3/5">
            <Text weight={500} size="lg" className="line-clamp-2">
              {`${brand} ${model}`}
            </Text>
          </Group>

          <Group spacing={5} className="2/5">
            <IconStar size={16} />
            <Text size="xs" weight={500} className="capitalize">
              {condition}
            </Text>
          </Group>
        </Group>
        <Text size="sm" color="dimmed" mt="sm">
          {description}
        </Text>
        <Group position="apart" mt="md" noWrap>
          <div className="line-clamp-1">
            <Text size="xl" span weight={500} className={classes.price}>
              {price}
            </Text>
            <Text span size="sm" color="dimmed">
              / Taka
            </Text>
          </div>

          <Group>
            <ActionIcon
              loading={updatingUser}
              onClick={() => addToWishList(_id)}
              radius="md"
              variant="light"
              color="red"
            >
              <IconHeart size={16} />
            </ActionIcon>
            <Button size="xs" component={Link} to={`/products/booking/${_id}`} radius="md">
              Book now
            </Button>
          </Group>
        </Group>
      </Flex>
    </Card>
  );
}
