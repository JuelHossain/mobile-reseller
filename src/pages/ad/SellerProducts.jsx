import { Notification, SimpleGrid } from "@mantine/core";
import { useUserContext } from "../../context/userContext";
import useGetProducts from "../../hooks/phones/useGetProducts";
import ProductCard from "./productCard";

export default function SellerProducts({ id, setId }) {
  const { email } = useUserContext();
  const { products, productsLoading, productsError } = useGetProducts({ createdBy: email });
  if (productsError) return <Notification title="Server side error">Please Try again later</Notification>;
  if (products?.length === 0)
    return (
      <Notification title="You Don't have any products">
        Please add a product first from you your dashboard
      </Notification>
    );
  const productsElement = products?.map((product) => <ProductCard product={product} key={product._id} />);
  return (
    <SimpleGrid  cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
      {productsElement}
    </SimpleGrid>
  );
}
