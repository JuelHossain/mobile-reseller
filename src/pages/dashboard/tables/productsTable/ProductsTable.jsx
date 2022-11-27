import { LoadingOverlay, Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import useGetProducts from "../../../../hooks/phones/useGetProducts";

import DataTable from "../dataTable/DataTable";
import useProductActions from "./useProductActions";
import useProductRows from "./useProductRows";

export default function ProductsTable({ options, notFound }) {
  const { products, productsLoading, productsError } = useGetProducts(options);
  const { info, message } = notFound ?? {};

  const rows = useProductRows(products);
  const headers = ["title", "status", "price", "Actions"];
  const actions = useProductActions();

  const data = { rows, headers, actions };
  if (productsLoading) return <LoadingOverlay visible />;
  if (productsError)
    return (
      <Notification title="Server Side Error" icon={<IconX size={18} />} color="red">
        Please Try again later.
      </Notification>
    );
  if (products?.length === 0)
    return (
      <Notification closeButtonProps={{ color: "red", variant: "light" }} title={info || "Please Add A Phone"}>
        {message || "You have not added any phone yet"}
      </Notification>
    );
  return <DataTable data={data} />;
}
