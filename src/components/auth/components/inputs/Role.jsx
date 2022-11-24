import { Chip } from "@mantine/core";
import { useAuthContext } from "../../../../context/authContext/authContext";

export default function Role() {
  const { setFieldValue, values, type } = useAuthContext();
  const seller = values.role === "seller";
  const toggleRole = () => setFieldValue("role", seller ? "buyer" : "seller");

  return (
    type === "register" && (
      <Chip size="sm" radius={4} onClick={toggleRole} checked={seller}>
        {seller ? "Create" : "Creating"} Seller Account
      </Chip>
    )
  );
}
