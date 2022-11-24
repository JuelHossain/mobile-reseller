import { Button, Card, Center, LoadingOverlay, ThemeIcon, Title } from "@mantine/core";
import { IconLock } from "@tabler/icons";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useModalContext } from "../../context/modalContext";
import auth from "../../firebase";

export default function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  const { authModal } = useModalContext();
  const [, { open, close }] = authModal;

  useEffect(() => {
    if (user) {
      close();
    } else if (!loading) {
      open();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (loading) {
    return <LoadingOverlay visible />;
  }
  if (user) {
    return children;
  }
  return (
    <Center className="w-full h-full text-center flex-1 flex mt-10 ">
      <Card withBorder shadow="md " className="p-10 flex flex-col gap-4 items-center">
        <ThemeIcon size={100}>
          <IconLock size={80} />
        </ThemeIcon>
        <Title color="main">You Have To Login To View This Page</Title>
        <Title color="dimmed" order={3} className="bg-main-5/10 py-2 px-4">
          Please Login To View This Page
        </Title>

        <Button onClick={open}> Please Login</Button>
      </Card>
    </Center>
  );
}
