import { LoadingOverlay, Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import useGetOrders from "../../../../hooks/orders/useGetOrders";

import DataTable from "../dataTable/DataTable";
import useOrderActions from "./useOrderActions";
import useOrderRows from "./useOrderRows";

export default function OrdersTable({ options }) {
  const { orders, ordersLoading, ordersError } = useGetOrders(options);
  const rows = useOrderRows(orders);
  const actions = useOrderActions();
  const headers = ["title", "payment", "price", "Actions"];

  const data = { rows, headers, actions };

  if (ordersLoading) return <LoadingOverlay visible />;
  if (ordersError)
    return (
      <Notification title="Server Side Error" icon={<IconX size={18} />} color="red">
        Please Try again later.
      </Notification>
    );
  if (orders?.length === 0)
    return (
      <Notification closeButtonProps={{ color: "red", variant: "light" }} title="Please Book A Phone">
        You have not done Any order
      </Notification>
    );
  return <DataTable data={data} />;
}
