/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import { LoadingOverlay, Notification, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconHeart, IconTrash, IconX } from "@tabler/icons";
import { useUserContext } from "../../../context/userContext";
import useUpdateCurrentUser from "../../../hooks/auth/useUpdateCurrentUser";
import ChangeStatus from "../shared/ChangeStatus";
import DataTable from "../shared/table/DataTable";

export default function MyWishList() {
  const { wishlist, userLoading, userError } = useUserContext();
  const { removeFromWishList } = useUpdateCurrentUser();

  const data = {
    rows: wishlist?.map((item) => {
      const { _id: id, brand, model, price, imageLinks, status } = item || {};

      return {
        id,
        title: brand + model,
        image: imageLinks?.length > 0 ? imageLinks[0] : <IconHeart size={16} />,
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
  if (wishlist?.length === 0 || !wishlist)
    return (
      <Notification closeButtonProps={{ color: "red", variant: "light" }} title="No Wishlist">
        You have not wish listed any phone
      </Notification>
    );
  return <DataTable data={data} />;
}
