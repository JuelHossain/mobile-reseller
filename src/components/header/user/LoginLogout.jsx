import { Button, Group, LoadingOverlay } from "@mantine/core";

import { useAuthContext } from "../../../context/authContext/authContext";
import { useHeaderContext } from "../../../context/headerContext";
import { useModalContext } from "../../../context/modalContext";
import { useUserContext } from "../../../context/userContext";
import DashboardButton from "./DashboardButton";
import LogoutButton from "./LogoutButton";
import UserButton from "./UserButton";

export default function LoginLogout() {
  const { user, userLoading } = useUserContext();
  const { loading } = useAuthContext();
  const { disclosure } = useHeaderContext();
  const [, { close: closeMenu }] = disclosure;
  const { authModal } = useModalContext();
  const [, { open }] = authModal;
  return (
    <Group className="relative gap-2">
      <LoadingOverlay loaderProps={{ size: "sm" }} visible={loading || userLoading} />
      {user ? (
        <>
          <DashboardButton />
          <UserButton />
          <LogoutButton />
        </>
      ) : (
        <Button
          onClick={() => {
            closeMenu();
            open();
          }}
          className="h-8"
        >
          Log in
        </Button>
      )}
    </Group>
  );
}
