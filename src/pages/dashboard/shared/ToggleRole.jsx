import { Switch } from "@mantine/core";
import useUpdateUser from "../../../hooks/auth/useUpdateUser";
import useUser from "../../../hooks/auth/useUser";

export default function ToggleRole() {
  const { seller } = useUser();
  const { toggleSeller } = useUpdateUser();
  return <Switch classNames={{ root: "items-center flex mt-1" }} size="xs" checked={seller} onClick={toggleSeller} />;
}
