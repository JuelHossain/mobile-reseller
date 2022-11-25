import { TextInput } from "@mantine/core";
import { usePhoneFormContext } from "../../../../../context/phone-context/phoneFormcontext";

export default function Name() {
  const { getInputProps } = usePhoneFormContext();

  return (
    <TextInput
      label="Name"
      placeholder="Phone Name"
      {...getInputProps("name")}
      className="flex-grow flex-shrink-0 basis-32"
    />
  );
}
