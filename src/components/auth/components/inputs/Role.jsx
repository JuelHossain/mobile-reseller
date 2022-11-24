import { Chip } from "@mantine/core";
import { useAuthContext } from "../../../../context/authContext/authContext";

export default function Role() {
  const { role, toggleRole, type } = useAuthContext();
  const seller = role === "seller";
  return (
    type === "register" && (
      <Chip size="sm" radius={4} onClick={toggleRole} checked={seller}>
        {seller ? "Creating" : "Create"} Seller Account
      </Chip>
    )
  );
}
