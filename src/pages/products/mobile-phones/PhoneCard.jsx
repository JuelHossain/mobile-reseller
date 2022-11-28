import { ActionIcon, Badge, Button, Card, Chip, Group, Stack, Text } from "@mantine/core";
import { IconCheck, IconHeart, IconStar } from "@tabler/icons";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";
import useGetAUser from "../../../hooks/auth/useGetUser";
import useUpdateCurrentUser from "../../../hooks/auth/useUpdateCurrentUser";
import useGetOrders from "../../../hooks/orders/useGetOrders";
import PhonePhotos from "./PhonePhotos";

export default function PhoneCard({ product }) {
  const { imageLinks, brand, model, price, description, condition, _id, createdBy, createdAt } = product;
  const { email, userLoading } = useUserContext();
  const { user: seller, userLoading: sellerLoading } = useGetAUser(createdBy);
  const { orders, ordersLoading } = useGetOrders({ email, productId: _id });
  const alreadyBooked = orders?.length > 0;
  const navigate = useNavigate();

  const { addToWishList, updatingUser } = useUpdateCurrentUser();
  const { wishlist } = useUserContext();
  const matched = wishlist?.filter((p) => p?._id === _id);
  const wishListed = matched?.length > 0;
  const myPhone = email === createdBy;

  return (
    <Card radius="md" withBorder p="xl" className="flex-col flex justify-between">
      <Card.Section>
        <PhonePhotos imageLinks={imageLinks} />
        <Badge size="xs" className="text-xs mt-1 m-0 absolute top-0 right-0">
          {moment(createdAt).startOf("hour").fromNow()}
        </Badge>

        <Stack className="px-4 gap-2 mt-2">
          <Group className="justify-between w-full" noWrap>
            <Chip size="xs" radius={4} variant="filled" checked={seller?.verified} readOnly right>
              <p className="m-0  hidden sm:inline">Selling By</p> {seller?.displayName}
            </Chip>
            <Group spacing={5} className="2/5" noWrap>
              <IconStar size={14} />
              <Text size="xs" weight={500} className="capitalize">
                {condition}
              </Text>
            </Group>
          </Group>
          <div>
            <Text weight={500} className="line-clamp-2 ">
              {`${brand} ${model}`}
            </Text>
            <Text size="sm" color="dimmed" className="line-clamp-3">
              {description}
            </Text>
          </div>
        </Stack>
      </Card.Section>
      <Card.Section className="px-4 pb-4 mt-3">
        <Group position="apart">
          <div className="line-clamp-1">
            <Text size="xl" span weight={500}>
              {price}
            </Text>
            <Text span size="sm" color="dimmed">
              / Taka
            </Text>
          </div>

          <Group noWrap>
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
              loading={ordersLoading || userLoading || sellerLoading}
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
