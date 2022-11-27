import { Select } from "@mantine/core";
import { useUserContext } from "../../../context/userContext";
import useUpdateAProduct from "../../../hooks/phones/useUpdateAProduct";

export default function ChangeStatus({ status, id, ...props }) {
  const { updateProduct } = useUpdateAProduct();
  const { admin, seller } = useUserContext();
  return (
    <Select
      readOnly={!admin && !seller}
      {...props}
      onChange={(value) => {
        updateProduct({ patch: { status: value }, id });
      }}
      classNames={{ input: "capitalize", root: "capitalize" }}
      value={status}
      data={["on-air", "booked", "sold"]}
    />
  );
}
