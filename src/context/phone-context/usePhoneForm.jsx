/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import useGetAProduct from "../../hooks/phones/useGetAProduct";
import useImageUpload from "../../hooks/shared/useImageUpload";
import { useUserContext } from "../userContext";
import initialPhoneForm from "./initialPhoneForm";
import useFormHandler from "./useFormHandler";

export default function usePhoneForm(id) {
  const form = useForm(initialPhoneForm);
  const { phoneNumber, address } = useUserContext();

  const { setValues } = form || {};
  const { product } = useGetAProduct(id);
  const [uploadImage, uploading] = useImageUpload();

  const onDrop = async (files) => {
    const imageLinks = [];
    for (const file of files) {
      const imageLink = await uploadImage(file);
      imageLinks.push(imageLink);
    }
    setValues({ imageLinks });
  };

  useEffect(() => {
    if (product) {
      const { _id, ...rest } = product;
      setValues({ ...rest, exist: true });
    }
    if (phoneNumber) {
      setValues({ phoneNumber });
    }
    if (address) {
      setValues({ location: Object.values(address).reduce((acc, value) => `${acc}${acc ? "," : ""}${value}`, "") });
    }
  }, [product, setValues, phoneNumber, address]);

  const { submitHandler, loading, serverError } = useFormHandler(form, id);

  return { ...form, submitHandler, loading, serverError, onDrop, uploading, id };
}
