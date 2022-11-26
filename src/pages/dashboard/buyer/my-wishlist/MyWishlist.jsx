/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import { LoadingOverlay, Notification, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconDeviceMobileOff, IconTrash, IconX } from "@tabler/icons";
import { useQueryClient } from "@tanstack/react-query";
import { useUserContext } from "../../../../context/userContext";
import useUpdateCurrentUser from "../../../../hooks/auth/useUpdateCurrentUser";
import { getAProduct } from "../../../../hooks/phones/useGetAProduct";
import ChangeStatus from "../../admin/shared/ChangeStatus";
import DataTable from "../../seller/shared/table/DataTable";

export default function MyWishList() {
  const { removeFromWishList } = useUpdateCurrentUser();
  const { wishlist, userLoading, userError } = useUserContext();
  const queryClient = useQueryClient();
  const items = [];
  for (const id of wishlist) {
    queryClient.fetchQuery(["get-product", id], async () => {
      const product = await getAProduct(id);
      console.log(product);
      items.push(product);
    });
  }
  console.log(items);

  const data = {
    rows: items?.map((item) => {
      console.log(data);
      const { _id: id, brand, model, price, imageLinks, status } = item || {};

      return {
        id,
        title: brand + model,
        image: imageLinks?.length > 0 ? imageLinks[0] : <IconDeviceMobileOff size={16} />,
        cols: [<ChangeStatus size="xs" w={100} key={id} status={status} id={id} />, price],
      };
    }),
    headers: ["title", "status", "price", "Actions"],
    actions: [
      {
        fn: (id, title) =>
          openConfirmModal({
            title: `Do You Really Want To Delete ${title}`,
            children: <Text size="sm">You Cannot Undo This Action Later , Please consider think twice.</Text>,
            labels: { confirm: "Confirm", cancel: "Cancel" },
            onConfirm: () => removeFromWishList(id),
          }),
        icon: IconTrash,
        props: { color: "red", variant: "light" },
      },
    ],
  };
  if (userLoading) return <LoadingOverlay visible />;
  if (userError)
    return (
      <Notification title="Server Side Error" icon={<IconX size={18} />} color="red">
        Please Try again later.
      </Notification>
    );
  if (wishlist?.length === 0)
    return (
      <Notification closeButtonProps={{ color: "red", variant: "light" }} title="Please Add A Phone">
        You have not added any phone yet
      </Notification>
    );
  return <DataTable data={data} />;
}
