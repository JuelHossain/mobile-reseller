/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import useGetAProduct from "../../hooks/phones/useGetAProduct";
import useImageUpload from "../../hooks/shared/useImageUpload";
import initialPhoneForm from "./initialPhoneForm";
import useFormHandler from "./useFormHandler";

export default function usePhoneForm(id) {
  const form = useForm(initialPhoneForm);
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
  }, [product, setValues]);

  const { submitHandler, loading, serverError } = useFormHandler(form, id);

  return { ...form, submitHandler, loading, serverError, onDrop, uploading };
}
