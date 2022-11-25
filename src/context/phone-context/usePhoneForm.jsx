import { useForm } from "@mantine/form";
import { useEffect } from "react";
import useAddProduct from "../../hooks/phones/useAddProduct";
import useGetAProduct from "../../hooks/phones/useGetAProduct";
import useUpdateAProduct from "../../hooks/phones/useUpdateAProduct";
import useImageUpload from "../../hooks/shared/useImageUpload";
import initialPhoneForm from "./initialPhoneForm";

export default function usePhoneForm(id) {
  const form = useForm(initialPhoneForm);
  const { setValues, onSubmit } = form || {};
  const { product } = useGetAProduct(id);
  const { addProduct, addingProduct, addError } = useAddProduct();
  const { updateProduct, updatingProduct, updateError } = useUpdateAProduct();
  const [uploadImage] = useImageUpload();

  const loading = addingProduct || updatingProduct;
  const serverError = addError || updateError;

  useEffect(() => {
    if (product) {
      const { _id, images, ...rest } = product;
      setValues({ ...rest, exist: true });
    }
  }, [product, setValues]);

  const submitHandler = (e) => {
    const handler = (data) => {
      const imageLinks = data?.images?.map(async (file) => {
        console.log("image uploading");
        const imageLink = await uploadImage(file);
        return imageLink;
      });
      console.log("image upload finish");
      if (data?.exist) {
        const { exist, images, ...patch } = data;
        updateProduct({ patch: { ...patch, imageLinks }, id });
      }
      const { images, ...restData } = data || {};
      addProduct({ ...restData, imageLinks });
    };

    onSubmit(handler)(e);
  };

  return { ...form, submitHandler, loading, serverError };
}
