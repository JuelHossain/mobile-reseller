/* eslint-disable no-await-in-loop */

import { useNavigate } from "react-router-dom";
import useUpdateUser from "../../hooks/auth/useUpdateUser";
import useAddOrder from "../../hooks/orders/useAddOrder";

export default function useBookingHandler({ onSubmit }, id) {
  const navigate = useNavigate();
  const { updateUserAsync, updatingUser, updatingUserError } = useUpdateUser();
  const { addOrderAsync, addingOrder, addingOrderError } = useAddOrder();
  const submitHandler = (e) => {
    const handler = async (data) => {
      const { email, name, ...userDetails } = data?.buyer ?? {};

      await updateUserAsync({ patch: userDetails, email });

      const finalData = { ...data, bookedBy: email, bookedAt: new Date(), productId: id, paid: false };

      await addOrderAsync(finalData, {
        onSuccess: () => {
          navigate("/booking/success");
        },
      });
    };
    onSubmit(handler)(e);
  };

  const submitting = updatingUser || addingOrder;
  const submitError = updatingUserError || addingOrderError;

  return { submitHandler, submitError, submitting };
}
