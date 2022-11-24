import { Button, Paper, Stack, TextInput } from "@mantine/core";
import FormError from "../alerts/FormError";
import usePasswordReset from "./usePasswordReset";

export default function ForgotPasswordForm() {
  const { getInputProps, sending, sendEmail } = usePasswordReset();

  return (
    <Paper withBorder shadow="md" p={20} radius="md">
      <Stack>
        <TextInput
          label="Your Email"
          description="Enter your email to get a password reset link"
          placeholder="dev@state.dev"
          {...getInputProps("email")}
        />
        <FormError />
        <Button loading={sending} onClick={sendEmail}>
          Reset password
        </Button>
      </Stack>
    </Paper>
  );
}
