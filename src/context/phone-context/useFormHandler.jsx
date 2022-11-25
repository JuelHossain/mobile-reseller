import useAddProduct from "../../hooks/phones/useAddProduct";
import useUpdateAProduct from "../../hooks/phones/useUpdateAProduct";
import useImageUpload from "../../hooks/shared/useImageUpload";

export default function useFormHandler({ onSubmit }, id) {
  const { addProduct, addingProduct, addError } = useAddProduct();
  const { updateProduct, updatingProduct, updateError } = useUpdateAProduct();
  const [uploadImage, uploading] = useImageUpload();

  const loading = addingProduct || updatingProduct || uploading;
  const serverError = addError || updateError;

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

  return { submitHandler, loading, serverError };
}
