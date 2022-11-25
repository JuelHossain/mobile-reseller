import { Textarea } from "@mantine/core";
import { usePhoneFormContext } from "../../../../../context/phone-context/phoneFormcontext";

export default function Description() {
  const { getInputProps } = usePhoneFormContext();

  return (
    <Textarea label="Description" placeholder="say something about your phone" {...getInputProps("description")} />
  );
}
