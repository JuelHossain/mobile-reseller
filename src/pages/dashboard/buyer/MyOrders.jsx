import { useUserContext } from "../../../context/userContext";
import OrdersTable from "../shared/OrdersTable";

export default function MyOrders() {
  const { email } = useUserContext();
  return <OrdersTable options={{ email }} />;
}
