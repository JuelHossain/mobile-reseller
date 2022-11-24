import { Modal, Text, Title } from "@mantine/core";
import { useEffect } from "react";
import { useAuthContext } from "../../context/authContext/authContext";
import { useModalContext } from "../../context/modalContext";
import useUser from "../../hooks/auth/useUser";
import AuthPage from "./AuthPage";

export default function AuthModal() {
  const { authModal } = useModalContext();
  const { type, toggleType } = useAuthContext();
  const { user } = useUser();

  const [opened, { close }] = authModal;

  // closing the modal when user is logged in
  useEffect(() => {
    if (user) {
      close();
      toggleType("login");
    }
  }, [user, close, toggleType]);

  return (
    <Modal
      title={
        <>
          <Title order={4}>Welcome to Mobile Reseller,</Title>
          <Text>Please {type} with email</Text>
        </>
      }
      classNames={{ header: "items-start" }}
      centered
      size={500}
      opened={opened}
      onClose={() => {
        close();
        toggleType("login");
      }}
    >
      <AuthPage />
    </Modal>
  );
}
