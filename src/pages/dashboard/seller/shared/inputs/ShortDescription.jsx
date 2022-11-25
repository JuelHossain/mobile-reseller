import { Textarea } from "@mantine/core";
import { useServiceFormContext } from "../../../context/service-form-context/serviceFormContext";

export default function ShortDescription() {
  const { getInputProps } = useServiceFormContext();

  return <Textarea label="Short Description" placeholder="Short Description" {...getInputProps("short")} />;
}
