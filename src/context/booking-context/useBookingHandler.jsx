/* eslint-disable no-await-in-loop */

import { closeAllModals, openConfirmModal } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import useUpdateUser from "../../hooks/auth/useUpdateUser";
import useAddOrder from "../../hooks/orders/useAddOrder";
import useGetOrders from "../../hooks/orders/useGetOrders";
import useUpdateAProduct from "../../hooks/phones/useUpdateAProduct";
import { useUserContext } from "../userContext";

export default function useBookingHandler({ onSubmit }, id, product) {
  const navigate = useNavigate();
  const { email: userEmail, admin, seller } = useUserContext();
  const { updateUserAsync, updatingUser, updatingUserError } = useUpdateUser();
  const { addOrderAsync, addingOrder, addingOrderError } = useAddOrder();
  const { updateProductAsync, updatingProduct, updateError } = useUpdateAProduct(id);
  const { orders, ordersLoading } = useGetOrders({ email: userEmail, productId: id });

  const alreadyBooked = orders?.length > 0;
  const yourProduct = userEmail === product?.createdBy;

  const submitHandler = (e) => {
    const handler = async (data) => {
      const { email, name, ...userDetails } = data?.buyer ?? {};

      await updateUserAsync({ patch: userDetails, email });

      const finalData = { ...data, bookedBy: email, bookedAt: new Date(), productId: id, paid: false };

      if (alreadyBooked) {
        openConfirmModal({
          title: "Already Booked",
          children: "You Have Booked This Phone Already",
          labels: { confirm: "Go To My Orders", cancel: "Go To Products" },
          onConfirm: () => navigate("/dashboard/my-orders"),
          onCancel: () => navigate("/products"),
        });
      } else if (admin) {
        openConfirmModal({
          title: "You Are Admin",
          children: "You  Can Not Book An Order",
          labels: { confirm: "Dashboard", cancel: "Go To Home" },
          onConfirm: () => navigate("/dashboard"),
          onCancel: () => navigate("/"),
        });
      } else if (seller) {
        openConfirmModal({
          title: ` You Are a ${seller ? "seller" : "buyer"}`,
          children: " You Cannot Book An order Please Change Your Role to book an order",
          labels: { confirm: "Go To Profile", cancel: "Cancel" },
          onConfirm: () => navigate("/dashboard"),
        });
      } else if (yourProduct) {
        openConfirmModal({
          title: `You Have Listed This phone`,
          children: "You Cannot Order Your Own Phone . You already have it. Please choose another phone",
          labels: { confirm: "Go To Profile", cancel: "Cancel" },
          onConfirm: () => navigate("/dashboard"),
        });
      } else {
        await addOrderAsync(finalData, {
          onSuccess: () => {
            showNotification({
              title: "Your Booking Is Complete",
              message: "We are letting the seller know that you are interested in his phone",
            });
          },
        });
        await updateProductAsync({ patch: { status: "booked" }, id });
        navigate("/dashboard/my-orders");
        closeAllModals();
      }
    };
    onSubmit(handler)(e);
  };

  const submitting = updatingUser || addingOrder || ordersLoading || updatingProduct;
  const submitError = updatingUserError || addingOrderError || updateError;

  return { submitHandler, submitError, submitting, alreadyBooked };
}
