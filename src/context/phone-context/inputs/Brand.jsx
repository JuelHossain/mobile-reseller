import { TextInput } from "@mantine/core";
import { usePhoneFormContext } from "../phoneFormContext";

export default function Brand() {
  const { getInputProps } = usePhoneFormContext();
  return (
    <TextInput
      label="Brand"
      placeholder="Brand Name"
      {...getInputProps("brand")}
      className="flex-grow flex-shrink-0 basis-32"
    />
  );
}
