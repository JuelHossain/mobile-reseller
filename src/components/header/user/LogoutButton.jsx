import { ActionIcon } from "@mantine/core";

import { IconLogout } from "@tabler/icons";
import { signOut } from "firebase/auth";
import { useTokenContext } from "../../../context/tokenContext";
import auth from "../../../firebase";

export default function LogoutButton() {
  const { removeToken } = useTokenContext();
  return (
    <ActionIcon
      className="w-8 h-8"
      variant="filled"
      onClick={() => {
        signOut(auth);
        removeToken();
      }}
    >
      <IconLogout size={20} />
    </ActionIcon>
  );
}
