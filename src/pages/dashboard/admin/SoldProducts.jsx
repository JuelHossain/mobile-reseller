import ProductsTable from "../shared/ProductsTable";

export default function SoldProducts() {
  return <ProductsTable options={{ status: "sold" }} />;
}
