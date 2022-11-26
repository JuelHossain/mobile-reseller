import { LoadingOverlay, Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import { useParams } from "react-router-dom";
import useGetAProduct from "../../../hooks/phones/useGetAProduct";
import ProductDetails from "./pages/ProductDetails";

export default function BookingPage() {
  const { id } = useParams();
  const { product, productError, productLoading } = useGetAProduct(id);

  if (productLoading) return <LoadingOverlay visible />;
  if (productError)
    return (
      <Notification icon={IconX} color="red" title="Server Side Error">
        Please Try Again Later
      </Notification>
    );

  return <ProductDetails {...product} />;
}
