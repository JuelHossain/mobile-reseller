import { TextInput } from "@mantine/core";
import { useProfileContext } from "../../../../../context/profile-context/profileContext";

export default function DisplayName() {
  const { getInputProps } = useProfileContext();
  return <TextInput {...getInputProps("displayName")} />;
}
