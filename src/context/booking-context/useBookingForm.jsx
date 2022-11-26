/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import useGetAUser from "../../hooks/auth/useGetUser";
import useGetAProduct from "../../hooks/phones/useGetAProduct";
import { useUserContext } from "../userContext";
import initialBookingForm from "./initialBookingForm";
import useBookingHandler from "./useBookingHandler";

export default function useBookingForm(id) {
  const form = useForm(initialBookingForm);
  const { setValues } = form || {};

  const { product, productLoading, productError } = useGetAProduct(id);

  const { user: seller, userLoading: sellerLoading, userError: sellerError } = useGetAUser(product?.createdBy);
  const { user: buyer, userLoading: buyerLoading, userError: buyerError } = useUserContext();
  console.log(product?.createdBy);
  const { submitHandler } = useBookingHandler(form);

  const loading = productLoading || sellerLoading || buyerLoading;
  const serverError = productError || sellerError || buyerError;

  useEffect(() => {
    if (product && seller && buyer) {
      const { brand, model, price, phoneNumber, location } = product ?? {};
      const { email: sellerEmail, displayName: sellerName } = seller ?? {};
      const {
        email: buyerEmail,
        displayName: buyerName,
        phoneNumber: buyerNumber,
        address: buyerAddress,
      } = buyer ?? {};

      setValues({
        brand,
        model,
        price,
        pickupLocation: location,
        seller: { phoneNumber, email: sellerEmail, name: sellerName },
        buyer: {
          email: buyerEmail,
          name: buyerName,
          phoneNumber: buyerNumber,
          address: buyerAddress || { holding: "", road: "", district: "", postal: "", area: "" },
        },
        bookedBy: buyerEmail,
        bookedAt: new Date(),
        productId: id,
        paid: false,
      });
    }
  }, [product, buyer, seller, id, setValues]);

  return { ...form, submitHandler, loading, serverError, id, product };
}
