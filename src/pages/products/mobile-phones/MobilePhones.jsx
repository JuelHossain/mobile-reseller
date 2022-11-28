import { LoadingOverlay, Paper } from "@mantine/core";
import useGetProducts from "../../../hooks/phones/useGetProducts";
import ServerError from "../../dashboard/shared/ServerError";
import PhoneCard from "./phone-card/PhoneCard";

export default function MobilePhones({ cat }) {
  const { products, productsLoading, productsError } = useGetProducts({ cat });
  const productsElement = products?.map((item) => <PhoneCard product={item} key={item?.model} />);
  if (productsError) return <ServerError />;
  return (
    <Paper className="flex-1 relative">
      <div className="grid xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 p-4 gap-4 relative ">
        {productsElement}
      </div>
      <LoadingOverlay visible={productsLoading} />
    </Paper>
  );
}
