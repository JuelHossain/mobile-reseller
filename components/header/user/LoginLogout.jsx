import { Button, Group, LoadingOverlay } from "@mantine/core";

import { useAuthState } from "react-firebase-hooks/auth";
import { useAuthContext } from "../../../context/authContext/authContext";
import { useHeaderContext } from "../../../context/headerContext";
import { useModalContext } from "../../../context/modalContext";
import auth from "../../../firebase";
import LogoutButton from "./LogoutButton";
import UserButton from "./UserButton";

export default function LoginLogout() {
  const [user, userLoading] = useAuthState(auth);
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
