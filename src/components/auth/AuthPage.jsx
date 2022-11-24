import { Divider } from "@mantine/core";
import { useAuthContext } from "../../context/authContext/authContext";
import Form from "./components/Form";
import SocialButtons from "./components/social-buttons/SocialButtons";

export default function AuthPage() {
  const { type } = useAuthContext();
  return (
    <>
      <Form />
      {type === "login" && (
        <>
          <Divider label="Or continue with Socials" labelPosition="center" my="lg" />
          <SocialButtons />
        </>
      )}
    </>
  );
}
