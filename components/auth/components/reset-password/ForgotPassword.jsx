import { Button, Group, Popover } from "@mantine/core";
import { useAuthContext } from "../../../../context/authContext/authContext";
import ForgotPasswordForm from "./ResetPasswordForm";

export default function ForgotPassword() {
  const { type, passwordResetDisclosure } = useAuthContext();

  const [opened, { close, open, toggle }] = passwordResetDisclosure;
  return (
    type === "login" && (
      <Group position="center">
        <Popover opened={opened} onClose={close} onOpen={open} withArrow position="top">
          <Popover.Target onClick={toggle}>
            <Button variant="light" compact className="text-center">
              Forgot Password ?
            </Button>
          </Popover.Target>
          <Popover.Dropdown className="p-0">
            <ForgotPasswordForm />
          </Popover.Dropdown>
        </Popover>
      </Group>
    )
  );
}
