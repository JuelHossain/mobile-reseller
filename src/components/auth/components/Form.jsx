/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Group, Stack } from "@mantine/core";
import { useAuthContext } from "../../../context/authContext/authContext";
import FormAlert from "./alerts/FormAlert";
import FormError from "./alerts/FormError";
import FormActions from "./FormActions";
import Email from "./inputs/Email";
import Name from "./inputs/Name";
import Password from "./inputs/Password";
import PhotoURL from "./inputs/PhotoURL";
import Role from "./inputs/Role";
import Terms from "./inputs/Terms";
import ForgotPassword from "./reset-password/ForgotPassword";

export default function Form() {
  const { authHandler } = useAuthContext();
  return (
    <form onSubmit={authHandler}>
      <Stack>
        <Name />
        <Email />
        <Password />
        <PhotoURL />
        <Group position="apart">
          <Terms />
          <Role />
        </Group>
        <FormError />
        <FormAlert />
        <ForgotPassword />
      </Stack>
      <FormActions />
    </form>
  );
}
