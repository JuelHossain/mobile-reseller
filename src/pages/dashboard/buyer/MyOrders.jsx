import { useUserContext } from "../../../context/userContext";
import OrdersTable from "../tables/ordersTable/OrdersTable";

export default function MyOrders() {
  const { email } = useUserContext();
  return <OrdersTable options={{ email }} />;
}
