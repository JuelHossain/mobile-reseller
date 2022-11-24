import { PasswordInput } from "@mantine/core";
import { useAuthContext } from "../../../../context/authContext/authContext";

export default function Password(props) {
  const { getInputProps } = useAuthContext();

  return <PasswordInput label="Password" placeholder="Your password" {...getInputProps("password")} {...props} />;
}
