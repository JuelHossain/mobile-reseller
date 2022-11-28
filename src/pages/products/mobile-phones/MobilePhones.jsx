import { LoadingOverlay, Notification } from "@mantine/core";
import useGetProducts from "../../../hooks/phones/useGetProducts";
import PhoneCard from "./PhoneCard";

export default function MobilePhones({ cat }) {
  const { products, productsLoading, productsError } = useGetProducts({ cat });
  const productsElement = products?.map((item) => <PhoneCard product={item} key={item?.model} />);
  if (productsError) return <Notification title="Server Side Error">Please Try Again Later</Notification>;
  return (
    <div className="grid xs:grid-cols-2 lg:grid-cols-3  p-4 gap-4 relative flex-1">
      {productsElement}
      <LoadingOverlay visible={productsLoading} />
    </div>
  );
}
