import { LoadingOverlay, SimpleGrid, Title } from "@mantine/core";
import { useUserContext } from "../../context/userContext";
import useGetProducts from "../../hooks/phones/useGetProducts";
import NotFound from "../dashboard/shared/NotFound";
import ServerError from "../dashboard/shared/ServerError";
import ProductCard from "./productCard";

export default function SellerProducts() {
  const { email } = useUserContext();
  const { products, productsLoading, productsError } = useGetProducts({ createdBy: email, ad: false });
  if (productsError) return <ServerError />;
  if (products?.length === 0)
    return <NotFound title="You Don't have any products" children=" Please add a product first from  your dashboard" />;
  const productsElement = products?.map((product) => <ProductCard product={product} key={product._id} />);
  return (
    <div>
      <Title align="center " order={2} mb={20}>
        Please Select A Product To Ad
      </Title>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {productsElement}
        <LoadingOverlay visible={productsLoading} />
      </SimpleGrid>
    </div>
  );
}
