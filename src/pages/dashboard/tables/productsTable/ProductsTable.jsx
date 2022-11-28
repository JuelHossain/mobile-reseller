import { LoadingOverlay } from "@mantine/core";
import useGetProducts from "../../../../hooks/phones/useGetProducts";
import NotFound from "../../shared/NotFound";
import ServerError from "../../shared/ServerError";

import DataTable from "../dataTable/DataTable";
import useProductActions from "./useProductActions";
import useProductRows from "./useProductRows";

export default function ProductsTable({ options, notFound }) {
  const { products, productsLoading, productsError } = useGetProducts(options);
  const { info, message } = notFound ?? {};

  const rows = useProductRows(products);
  const headers = ["title", "status", "price", "Actions"];
  const actions = useProductActions(products);

  const data = { rows, headers, actions };
  if (productsLoading) return <LoadingOverlay visible />;
  if (productsError) return <ServerError />;
  if (products?.length === 0)
    return <NotFound title={info || "Please Add A Phone"} children={message || "You have not added any phone yet"} />;

  return <DataTable data={data} />;
}
