import { ActionIcon, Button, Group, Title } from "@mantine/core";
import { openModal } from "@mantine/modals";
import { IconCheck, IconHeart } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import { BookingFormProvider } from "../../../../context/booking-context/bookingFormContext";
import { useUserContext } from "../../../../context/userContext";
import useUpdateCurrentUser from "../../../../hooks/auth/useUpdateCurrentUser";
import useGetOrders from "../../../../hooks/orders/useGetOrders";
import ProductDetails from "../../bookings/pages/ProductDetails";

export default function ActionButtons({ product, sellerLoading }) {
  const { createdBy, _id, brand, model } = product || {};
  const { email, userLoading, seller, admin } = useUserContext();
  const { orders, ordersLoading } = useGetOrders({ email, productId: _id });
  const alreadyBooked = orders?.length > 0;
  const navigate = useNavigate();

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
    openModal({
      title: (
        <Title order={3}>
          {brand} {model}
        </Title>
      ),
      children: (
        <BookingFormProvider id={_id}>
          <ProductDetails />
        </BookingFormProvider>
      ),
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
