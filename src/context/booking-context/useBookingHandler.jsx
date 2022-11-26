/* eslint-disable no-await-in-loop */

import useUpdateUser from "../../hooks/auth/useUpdateUser";

export default function useBookingHandler({ onSubmit }, id) {
  const { updateUserAsync, updatingUser, updatingUserError } = useUpdateUser();
  const submitHandler = (e) => {
    const handler = async (data) => {
      const { email, name, ...userDetails } = data?.buyer ?? {};
      await updateUserAsync({ patch: userDetails, email });
      const finalData = { ...data, bookedBy: data?.buyer?.email, bookedAt: new Date(), productId: id, paid: false };
      console.log(finalData);
    };
    onSubmit(handler)(e);
  };

  const submitting = updatingUser;
  const submitError = updatingUserError;

  return { submitHandler, submitError, submitting };
}
