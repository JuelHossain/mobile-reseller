import { TextInput } from "@mantine/core";
import { usePhoneFormContext } from "../../../../../context/phone-context/phoneFormcontext";

export default function Name() {
  const { getInputProps } = usePhoneFormContext();

  return <TextInput label="Service Name" placeholder="Service Name" {...getInputProps("name")} className="flex-1" />;
}
