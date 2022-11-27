import { useUserContext } from "../../../context/userContext";
import ProductsTable from "../tables/productsTable/ProductsTable";

export default function MyPhones() {
  const { email } = useUserContext();
  return <ProductsTable options={{ createdBy: email }} />;
}
