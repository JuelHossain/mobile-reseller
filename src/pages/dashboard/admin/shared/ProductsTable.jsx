import { LoadingOverlay, Notification, Text, Title } from "@mantine/core";
import { openConfirmModal, openModal } from "@mantine/modals";
import { IconDeviceMobileOff, IconPencil, IconTrash, IconX } from "@tabler/icons";
import { PhoneFormProvider } from "../../../../context/phone-context/phoneFormcontext";
import useDeleteAProduct from "../../../../hooks/phones/useDeleteAProduct";
import useGetProducts from "../../../../hooks/phones/useGetProducts";
import PhoneForm from "../../seller/shared/phone-form/PhoneForm";
import DataTable from "../../seller/shared/table/DataTable";
import ChangeStatus from "./ChangeStatus";

export default function ProductsTable({ options }) {
  const { products, productsLoading, productsError } = useGetProducts(options);

  const { mutate } = useDeleteAProduct();

  const data = {
    rows: products?.map((item) => {
      const { _id: id, brand, model, price, imageLinks, status } = item || {};
      return {
        id,
        title: brand + model,
        image: imageLinks.length > 0 ? imageLinks[0] : <IconDeviceMobileOff size={16} />,
        cols: [<ChangeStatus size="xs" w={100} key={id} status={status} id={id} />, price],
      };
    }),
    headers: ["title", "status", "price", "Actions"],
    actions: [
      {
        fn: (id, title) =>
          openModal({
            title: (
              <>
                <Title order={4}>Edit {title}</Title>
                <Text>Please check everything Carefully</Text>
              </>
            ),
            classNames: { header: "items-start" },
            size: 500,
            children: (
              <PhoneFormProvider id={id}>
                <PhoneForm />
              </PhoneFormProvider>
            ),
          }),
        icon: IconPencil,
        props: { color: "green", variant: "light" },
      },
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
  if (productsLoading) return <LoadingOverlay visible />;
  if (productsError)
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
  return <DataTable data={data} />;
}
