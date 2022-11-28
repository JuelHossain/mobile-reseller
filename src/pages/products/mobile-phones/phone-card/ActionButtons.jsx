import { ActionIcon, Button, Group, Title } from "@mantine/core";
import { openContextModal } from "@mantine/modals";
import { IconCheck, IconHeart } from "@tabler/icons";
import { useUserContext } from "../../../../context/userContext";
import useUpdateCurrentUser from "../../../../hooks/auth/useUpdateCurrentUser";
import useGetOrders from "../../../../hooks/orders/useGetOrders";

export default function ActionButtons({ product, sellerLoading }) {
  const { createdBy, _id, brand, model } = product || {};
  const { email, userLoading, seller, admin } = useUserContext();
  const { orders, ordersLoading } = useGetOrders({ email, productId: _id });
  const alreadyBooked = orders?.length > 0;

  const { addToWishList, updatingUser } = useUpdateCurrentUser();
  const { wishlist } = useUserContext();
  const matched = wishlist?.filter((p) => p?._id === _id);
  const wishListed = matched?.length > 0;
  const myPhone = email === createdBy;
  const bookingHandler = () =>
    alreadyBooked ||
    myPhone ||
    seller ||
    admin ||
    openContextModal({
      modal: "bookingModal",
      title: (
        <Title order={3}>
          {brand} ${model}`
        </Title>
      ),
      innerProps: { productId: _id },
      centered: true,
      lockScroll: true,
      overflow: "inside",
      size: 500,
    });
  return (
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
        onClick={bookingHandler}
        radius="md"
      >
        {alreadyBooked ? "Booked" : myPhone ? "Your Phone" : "Book Now"}
      </Button>
    </Group>
  );
}
