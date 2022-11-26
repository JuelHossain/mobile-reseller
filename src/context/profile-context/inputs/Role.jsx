/* eslint-disable no-nested-ternary */
import { Badge, Group } from "@mantine/core";
import ToggleRole from "../../../pages/dashboard/shared/ToggleRole";
import { useUserContext } from "../../userContext";

export default function Role() {
  const { admin, seller } = useUserContext();
  return (
    <Group className="absolute top-10 right-5 z-10">
      <Badge>{admin ? "Admin" : seller ? "Seller" : "Buyer"}</Badge>
      <ToggleRole />
    </Group>
  );
}
