/* eslint-disable no-underscore-dangle */
import { showNotification } from "@mantine/notifications";
import useAddService from "../../hooks/products/useAddProduct";
import useUpdateService from "../../hooks/products/useUpdateAProduct";
import { useModalContext } from "../modalContext";

// submit handler
export default function useSubmitHandler({ onSubmit, reset, refetch, service }) {
  // add service hook
  const { mutate: addService, isLoading: adding } = useAddService();

  // update service hook
  const { mutate: updateService, isLoading: updating } = useUpdateService();

  // all loading states
  const loading = adding || updating;

  // add service modal context
  const { addServiceModal, updateServiceModal } = useModalContext();
  const [, { close: closeAdd }] = addServiceModal;
  const [, { close: closeUpdate }] = updateServiceModal;

  // success handler function
  const successHandler = (m) => {
    showNotification({ title: `Service has been ${m} successfully` });
    if (m === "added") reset();
    closeAdd();
    closeUpdate();
    refetch();
  };

  const submitHandler = (e) => {
    onSubmit((d) => {
      const data = { ...d, createdAt: new Date() };

      if (service) {
        // update service
        updateService({ patch: data, id: service._id }, { onSuccess: () => successHandler("updated") });
      } else {
        // add service
        addService(data, {
          onSuccess: () => successHandler("added"),
        });
      }
    })(e);
  };
  return { submitHandler, loading };
}
