import { useUserContext } from "../../../context/userContext";
import ProductsTable from "../shared/ProductsTable";

export default function MyPhones() {
  const { email } = useUserContext();
  return <ProductsTable options={{ email }} />;
}
