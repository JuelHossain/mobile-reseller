import useUser from "../../hooks/auth/useUser";
import useAddProduct from "../../hooks/phones/useAddProduct";
import useUpdateAProduct from "../../hooks/phones/useUpdateAProduct";
import useImageUpload from "../../hooks/shared/useImageUpload";

export default function useFormHandler({ onSubmit }, id) {
  const { email } = useUser();
  const { addProduct, addingProduct, addError } = useAddProduct();
  const { updateProduct, updatingProduct, updateError } = useUpdateAProduct();
  const [uploadImage, uploading] = useImageUpload();

  const loading = addingProduct || updatingProduct || uploading;
  const serverError = addError || updateError;

  const submitHandler = (e) => {
    const handler = (data) => {
      const imageLinks = [];
      data?.images?.forEach(async (file) => {
        const imageLink = await uploadImage(file);
        imageLinks.push(imageLink);
      });

      if (data?.exist) {
        const { exist, images, ...patch } = data;
        updateProduct({ patch: { ...patch, imageLinks }, id });
      }
      const { images, ...restData } = data || {};

      let cat = "";
      switch (true) {
        case data?.price < 10000:
          cat = "budget";
          break;
        case data?.price < 20000:
          cat = "mid-range";
          break;
        case data?.price < 40000:
          cat = "flagship-killer";
          break;
        default:
          cat = "flagship";
          break;
      }

      const newPhone = { ...restData, imageLinks, createdAt: new Date(), createdBy: email, cat };

      addProduct(newPhone);
    };

    onSubmit(handler)(e);
  };

  return { submitHandler, loading, serverError };
}
