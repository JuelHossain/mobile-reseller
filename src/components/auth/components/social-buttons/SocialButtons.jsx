import { Group } from "@mantine/core";
import FacebookButton from "./buttons/FacebookButton";
import GoogleButton from "./buttons/GoogleButton";
import useSocialLogin from "./hooks/useSocialLogin";

export default function SocialButtons() {
  const { googleLoading, signInWithGoogle, facebookLoading, singInWithFacebook } = useSocialLogin();

  return (
    <Group mb="md" mt="md">
      <GoogleButton loading={googleLoading} onClick={() => signInWithGoogle()} />

      <FacebookButton loading={facebookLoading} onClick={() => singInWithFacebook()} />
    </Group>
  );
}
