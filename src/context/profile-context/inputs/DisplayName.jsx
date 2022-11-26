import { TextInput } from "@mantine/core";
import { useProfileContext } from "../profileContext";

export default function DisplayName() {
  const { getInputProps } = useProfileContext();
  return (
    <TextInput
      size="xl"
      variant="filled"
      classNames={{ input: "font-bold text-2xl capitalize " }}
      {...getInputProps("displayName")}
    />
  );
}
