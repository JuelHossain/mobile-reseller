import ProductsTable from "../tables/productsTable/ProductsTable";

export default function SoldProducts() {
  return (
    <ProductsTable
      notFound={{ info: "Oops,", message: "There is no product sold yet." }}
      options={{ status: "sold" }}
    />
  );
}
