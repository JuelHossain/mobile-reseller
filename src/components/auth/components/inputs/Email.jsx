import { TextInput } from "@mantine/core";
import { useAuthContext } from "../../../../context/authContext/authContext";

export default function Email(props) {
  const { getInputProps } = useAuthContext();

  return <TextInput label="Email" placeholder="your@email.com" {...getInputProps("email")} {...props} />;
}
