import { Group, LoadingOverlay } from "@mantine/core";
import AdminButton from "./buttons/AdminButton";
import GoogleButton from "./buttons/GoogleButton";
import useSocialLogin from "./hooks/useSocialLogin";

export default function SocialButtons() {
  const { generatingToken, gLoading, signInWithGoogle, adminLogging, loginAsAdmin } = useSocialLogin();

  return (
    <Group mb="md" mt="md">
      <GoogleButton loading={gLoading} onClick={() => signInWithGoogle()} />
      <AdminButton loading={adminLogging} onClick={() => loginAsAdmin()} />
      <LoadingOverlay visible={generatingToken} />
    </Group>
  );
}
