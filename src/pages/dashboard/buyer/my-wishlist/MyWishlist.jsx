/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import { LoadingOverlay, Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import useUpdateCurrentUser from "../../../../hooks/auth/useUpdateCurrentUser";
import useWisList from "../../admin/all-buyer/useWisList";

export default function MyWishList() {
  const { removeFromWishList } = useUpdateCurrentUser();
  const { getProducts, wishlistLoading, wishlistError } = useWisList();
  const products = getProducts();
  console.log(products);

  // const data = {
  //   rows: products?.map((item) => {
  //     const { _id: id, brand, model, price, imageLinks, status } = item || {};

  //     return {
  //       id,
  //       title: brand + model,
  //       image: imageLinks?.length > 0 ? imageLinks[0] : <IconDeviceMobileOff size={16} />,
  //       cols: [<ChangeStatus size="xs" w={100} key={id} status={status} id={id} />, price],
  //     };
  //   }),
  //   headers: ["title", "status", "price", "Actions"],
  //   actions: [
  //     {
  //       fn: (id, title) =>
  //         openConfirmModal({
  //           title: `Do You Really Want To Delete ${title}`,
  //           children: <Text size="sm">You Cannot Undo This Action Later , Please consider think twice.</Text>,
  //           labels: { confirm: "Confirm", cancel: "Cancel" },
  //           onConfirm: () => removeFromWishList(id),
  //         }),
  //       icon: IconTrash,
  //       props: { color: "red", variant: "light" },
  //     },
  //   ],
  // };
  if (wishlistLoading) return <LoadingOverlay visible />;
  if (wishlistError)
    return (
      <Notification title="Server Side Error" icon={<IconX size={18} />} color="red">
        Please Try again later.
      </Notification>
    );
  if (products?.length === 0)
    return (
      <Notification closeButtonProps={{ color: "red", variant: "light" }} title="Please Add A Phone">
        You have not added any phone yet
      </Notification>
    );
  // return <DataTable data={data} />;
  return <p>hello world </p>;
}
