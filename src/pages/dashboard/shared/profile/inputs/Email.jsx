import { TextInput } from "@mantine/core";
import { useProfileContext } from "../../../../../context/profile-context/profileContext";

export default function Email() {
  const { getInputProps } = useProfileContext();
  return <TextInput {...getInputProps("email")} readOnly />;
}
