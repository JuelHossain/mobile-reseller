/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import { LoadingOverlay, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconHeart, IconTrash } from "@tabler/icons";
import { useUserContext } from "../../../context/userContext";
import useUpdateCurrentUser from "../../../hooks/auth/useUpdateCurrentUser";

import ChangeStatus from "../shared/ChangeStatus";
import NotFound from "../shared/NotFound";
import ServerError from "../shared/ServerError";
import DataTable from "../tables/dataTable/DataTable";

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
  if (userError) return <ServerError />;
  if (wishlist?.length === 0 || !wishlist)
    return <NotFound title="NO Product Found" children="You have not wish listed any item yet" />;
  return <DataTable data={data} />;
}
