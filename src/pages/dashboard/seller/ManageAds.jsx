import { useUserContext } from "../../../context/userContext";
import ProductsTable from "../tables/productsTable/ProductsTable";

export default function ManageAds() {
  const { email } = useUserContext();
  return <ProductsTable options={{ ad: true, createdBy: email }} />;
}
