import { LoadingOverlay } from "@mantine/core";
import useGetOrders from "../../../../hooks/orders/useGetOrders";
import NotFound from "../../shared/NotFound";
import ServerError from "../../shared/ServerError";

import DataTable from "../dataTable/DataTable";
import useOrderActions from "./useOrderActions";
import useOrderRows from "./useOrderRows";

export default function OrdersTable({ options }) {
  const { orders, ordersLoading, ordersError } = useGetOrders(options);
  const rows = useOrderRows(orders);
  const actions = useOrderActions();
  const headers = ["title", "booking Details", "payment", "price", "Actions"];

  const data = { rows, headers, actions };

  if (ordersLoading) return <LoadingOverlay visible />;
  if (ordersError) return <ServerError />;
  if (orders?.length === 0) return <NotFound title="No Orders Found" children="Please do order a phone" />;
  return <DataTable data={data} />;
}
