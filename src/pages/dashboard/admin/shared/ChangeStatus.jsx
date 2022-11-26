import { Select } from "@mantine/core";
import useUpdateAProduct from "../../../../hooks/phones/useUpdateAProduct";

export default function ChangeStatus({ status, id, ...props }) {
  const { updateProduct } = useUpdateAProduct();

  return (
    <Select
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
