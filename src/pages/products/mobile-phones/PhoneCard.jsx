import { Carousel } from "@mantine/carousel";
import { ActionIcon, Badge, Button, Card, createStyles, Group, Image, Stack, Text } from "@mantine/core";
import { IconCheck, IconHeart, IconStar } from "@tabler/icons";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";
import useUpdateCurrentUser from "../../../hooks/auth/useUpdateCurrentUser";
import useGetOrders from "../../../hooks/orders/useGetOrders";

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

export default function PhoneCard({ product }) {
  const { imageLinks, brand, model, price, description, condition, _id, createdBy, createdAt } = product;
  const { email, userLoading } = useUserContext();
  const { orders, ordersLoading } = useGetOrders({ email, productId: _id });
  const alreadyBooked = orders?.length > 0;
  const navigate = useNavigate();

  const { classes } = useStyles();
  const { addToWishList, updatingUser } = useUpdateCurrentUser();
  const { wishlist } = useUserContext();
  const matched = wishlist?.filter((p) => p?._id === _id);
  const wishListed = matched?.length > 0;
  const myPhone = email === createdBy;

  const slides = imageLinks?.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder p="xl" className="flex-col flex justify-between">
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
        <Badge size="xs" className="text-xs mt-1 m-0 absolute top-0 right-0">
          {moment(createdAt).startOf("hour").fromNow()}
        </Badge>

        <Stack className="px-4 gap-0">
          <Group className="items-start w-full justify-between " mt="lg">
            <Group className="w-3/5">
              <Text weight={500} size="lg" className="line-clamp-2">
                {`${brand} ${model}`}
              </Text>
            </Group>

            <div>
              <Group spacing={5} className="2/5">
                <IconStar size={16} />
                <Text size="xs" weight={500} className="capitalize">
                  {condition}
                </Text>
              </Group>
            </div>
          </Group>
          <Text size="sm" color="dimmed" mt="sm" className="line-clamp-3">
            {description}
          </Text>
        </Stack>
      </Card.Section>
      <Card.Section className="px-4 pb-4 mt-3">
        <Group position="apart">
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
              onClick={() => addToWishList(product)}
              radius="md"
              variant="light"
              color={wishListed && "red"}
            >
              <IconHeart size={16} />
            </ActionIcon>
            <Button
              loading={ordersLoading || userLoading}
              rightIcon={alreadyBooked && <IconCheck size={18} />}
              size="xs"
              onClick={() => alreadyBooked || myPhone || navigate(`/products/booking/${_id}`)}
              radius="md"
            >
              {alreadyBooked ? "Booked" : myPhone ? "Your Phone" : "Book Now"}
            </Button>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}
