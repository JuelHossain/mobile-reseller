import useGetProducts from "../../../hooks/phones/useGetProducts";
import PhoneCard from "./PhoneCard";

export default function MobilePhones({ cat }) {
  const { products } = useGetProducts({ cat });
  const productsElement = products?.map((item) => <PhoneCard product={item} key={item?.model} />);
  return <div className="grid sm:grid-cols-2 lg:grid-cols-3  p-4 gap-4">{productsElement}</div>;
}
