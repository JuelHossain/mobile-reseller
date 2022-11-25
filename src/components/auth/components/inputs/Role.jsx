import { Chip } from "@mantine/core";
import { useAuthContext } from "../../../../context/authContext/authContext";

export default function Role() {
  const { getInputProps, values, type } = useAuthContext();

  return (
    type === "register" && (
      <Chip size="sm" radius={4} {...getInputProps("seller")}>
        {values?.seller ? "Creating" : "Create"} Seller Account
      </Chip>
    )
  );
}
