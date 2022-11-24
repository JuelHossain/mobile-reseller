/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import useImageUpload from "../../hooks/shared/useImageUpload";
import { useServiceContext } from "../serviceContext";
import useSubmitHandler from "./useSubmitHandler";

export default function useServiceForm() {
  // form object
  const form = useForm({
    // initial form values
    initialValues: {
      name: "",
      cost: "",
      short: "",
      description: "",
      imageLink: "",
    },

    // form validation
    validate: {
      name: (value) => (value === "" ? "Service name is required" : null),
      cost: (value) => (value === "" ? "Service cost is Required" : null),
      short: (value) =>
        value === "" ? "short Description is Required" : value.length > 100 ? "Maximum 100 character please" : null,
      description: (value) => (value.length < 100 ? "Description should at least be 100 characters" : null),
      imageLink: (value) => (value === "" ? "Image Link is required" : null),
    },
  });

  // services
  const { data: service, refetch } = useServiceContext();

  const { setValues } = form;
  useEffect(() => {
    if (service) {
      const { _id, ...serviceData } = service;
      setValues(serviceData);
    }
  }, [service, setValues]);

  // image upload
  const [uploadImage, uploading] = useImageUpload();

  // submit handler function

  const handlerObj = useSubmitHandler({ ...form, refetch, service });

  return { ...form, ...handlerObj, uploadImage, uploading };
}
