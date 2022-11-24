import { TextInput } from "@mantine/core";
import { useAuthContext } from "../../../../context/authContext/authContext";

export default function Name(props) {
  const { type, getInputProps } = useAuthContext();
  return (
    type === "register" && <TextInput label="Name" placeholder="Your name" {...getInputProps("name")} {...props} />
  );
}
