/* eslint-disable no-nested-ternary */
import { Badge, Group } from "@mantine/core";
import { useUserContext } from "../../../../../context/userContext";
import ToggleRole from "../../ToggleRole";

export default function Role() {
  const { admin, seller } = useUserContext();
  return (
    <Group className="absolute top-10 right-5">
      <Badge>{admin ? "Admin" : seller ? "Seller" : "Buyer"}</Badge>
      <ToggleRole />
    </Group>
  );
}
