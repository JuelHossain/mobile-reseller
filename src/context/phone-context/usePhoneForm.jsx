import { useForm } from "@mantine/form";
import { useEffect } from "react";
import useGetAProduct from "../../hooks/phones/useGetAProduct";
import initialPhoneForm from "./initialPhoneForm";
import useFormHandler from "./useFormHandler";

export default function usePhoneForm(id) {
  const form = useForm(initialPhoneForm);
  const { setValues } = form || {};
  const { product } = useGetAProduct(id);

  useEffect(() => {
    if (product) {
      const { _id, images, ...rest } = product;
      setValues({ ...rest, exist: true });
    }
  }, [product, setValues]);

  const { submitHandler, loading, serverError } = useFormHandler(form, id);

  return { ...form, submitHandler, loading, serverError };
}
