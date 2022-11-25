/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable no-unsafe-optional-chaining */

import { closeAllModals } from "@mantine/modals";
import useUser from "../../hooks/auth/useUser";
import useAddProduct from "../../hooks/phones/useAddProduct";
import useUpdateAProduct from "../../hooks/phones/useUpdateAProduct";
import useImageUpload from "../../hooks/shared/useImageUpload";

export default function useFormHandler({ onSubmit, reset, values }, id) {
  const { email } = useUser();
  const { addProductAsync, addingProduct, addError } = useAddProduct();
  const { updateProductAsync, updatingProduct, updateError } = useUpdateAProduct();
  const [uploadImage, uploading] = useImageUpload();

  const loading = addingProduct || updatingProduct || uploading;
  const serverError = addError || updateError;

  const submitHandler = (e) => {
    const handler = async (data) => {
      const imageLinks = [];
      for (const file of values?.images) {
        const imageLink = await uploadImage(file);
        imageLinks.push(imageLink);
      }

      if (data?.exist) {
        const { exist, images, ...patch } = data;
        await updateProductAsync({ patch: { ...patch, imageLinks }, id });
        closeAllModals();
      } else {
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

        await addProductAsync(newPhone, {
          onSuccess: () => {
            reset();
          },
        });
      }
    };
    onSubmit(handler)(e);
  };

  return { submitHandler, loading, serverError };
}
