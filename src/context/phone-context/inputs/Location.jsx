import { TextInput } from "@mantine/core";
import { usePhoneFormContext } from "../phoneFormContext";

export default function Location() {
  const { getInputProps } = usePhoneFormContext();
  return <TextInput label="Location" placeholder="Location Please" {...getInputProps("location")} />;
}
