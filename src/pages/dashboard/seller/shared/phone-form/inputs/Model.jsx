import { TextInput } from "@mantine/core";
import { usePhoneFormContext } from "../../../../../../context/phone-context/phoneFormcontext";

export default function Model() {
  const { getInputProps } = usePhoneFormContext();

  return (
    <TextInput
      label="Model"
      placeholder="Phone Model"
      {...getInputProps("model")}
      className="flex-grow flex-shrink-0 basis-32"
    />
  );
}
