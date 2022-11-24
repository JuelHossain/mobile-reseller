import { Divider } from "@mantine/core";
import Form from "./components/Form";
import { SocialButtons } from "./components/SocialButtons";

export default function AuthPage() {
  return (
    <>
      <Form />
      <Divider label="Or continue with Socials" labelPosition="center" my="lg" />
      <SocialButtons />
    </>
  );
}
