import { Group, LoadingOverlay } from "@mantine/core";
import FacebookButton from "./buttons/FacebookButton";
import GoogleButton from "./buttons/GoogleButton";
import useSocialLogin from "./hooks/useSocialLogin";

export default function SocialButtons() {
  const { generatingToken, gLoading, signInWithGoogle, fLoading, singInWithFacebook } = useSocialLogin();

  return (
    <Group mb="md" mt="md">
      <GoogleButton loading={gLoading} onClick={() => signInWithGoogle()} />

      <FacebookButton loading={fLoading} onClick={() => singInWithFacebook()} />
      <LoadingOverlay visible={generatingToken} />
    </Group>
  );
}
