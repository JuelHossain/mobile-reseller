import { TextInput } from "@mantine/core";
import { usePhoneFormContext } from "../../../../../../context/phone-context/phoneFormcontext";

export default function Location() {
  const { getInputProps } = usePhoneFormContext();
  return <TextInput label="Location" placeholder="Location Please" {...getInputProps("location")} />;
}
