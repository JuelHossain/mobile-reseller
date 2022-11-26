import { Button, LoadingOverlay, Notification, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconDeviceMobileCharging, IconTrash, IconX } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";
import useDeleteOrder from "../../../hooks/orders/useDeleteOrder";
import useGetOrders from "../../../hooks/orders/useGetOrders";
import DataTable from "./table/DataTable";

export default function OrdersTable({ options }) {
  const { admin } = useUserContext();
  const { orders, ordersLoading, ordersError } = useGetOrders(options);

  const { mutate } = useDeleteOrder();
  const navigate = useNavigate();

  const data = {
    rows: orders?.map((item) => {
      const { _id: id, brand, model, price, paid } = item || {};
      return {
        id,
        title: `${brand} ${model}`,
        image: <IconDeviceMobileCharging size={16} />,
        cols: [
          <Button onClick={() => !paid && !admin && navigate(`/payment/${id}`)} compact variant="light" key={id}>
            {paid ? "paid" : admin ? "Unpaid" : "Pay now"}
          </Button>,
          price,
        ],
      };
    }),
    headers: ["title", "payment", "price", "Actions"],
    actions: [
      {
        fn: (id, title) =>
          openConfirmModal({
            title: `Do You Really Want To Delete ${title}`,
            children: <Text size="sm">You Cannot Undo This Action Later , Please consider think twice.</Text>,
            labels: { confirm: "Confirm", cancel: "Cancel" },
            onConfirm: () => mutate(id),
          }),
        icon: IconTrash,
        props: { color: "red", variant: "light" },
      },
    ],
  };
  if (ordersLoading) return <LoadingOverlay visible />;
  if (ordersError)
    return (
      <Notification title="Server Side Error" icon={<IconX size={18} />} color="red">
        Please Try again later.
      </Notification>
    );
  if (orders?.length === 0)
    return (
      <Notification closeButtonProps={{ color: "red", variant: "light" }} title="Please Add A Phone">
        You have not added any phone yet
      </Notification>
    );
  return <DataTable data={data} />;
}
