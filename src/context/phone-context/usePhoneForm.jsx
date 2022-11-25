import { useForm } from "@mantine/form";
import { useEffect } from "react";
import useAddProduct from "../../hooks/phones/useAddProduct";
import useGetAProduct from "../../hooks/phones/useGetAProduct";
import useUpdateAProduct from "../../hooks/phones/useUpdateAProduct";
import initialPhoneForm from "./initialPhoneForm";

export default function usePhoneForm(id) {
  const form = useForm(initialPhoneForm);
  const { setValues, onSubmit } = form || {};
  const { product } = useGetAProduct(id);
  const { addProduct, addingProduct, addError } = useAddProduct();
  const { updateProduct, updatingProduct, updateError } = useUpdateAProduct();

  const loading = addingProduct || updatingProduct;
  const serverError = addError || updateError;

  useEffect(() => {
    if (product) {
      const { _id, ...rest } = product;
      setValues({ ...rest, exist: true });
    }
  }, [product, setValues]);

  const submitHandler = (e) => {
    onSubmit((data) => {
      if (data?.exist) {
        const { exist, ...patch } = data;
        updateProduct({ patch, id });
      }
      addProduct(data);
    })(e);
  };

  return { ...form, submitHandler, loading, serverError };
}
