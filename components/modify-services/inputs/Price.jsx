import { NumberInput } from "@mantine/core";
import { IconMedal } from "@tabler/icons";
import { useServiceFormContext } from "../../../context/service-form-context/serviceFormContext";

export default function Price() {
  const { getInputProps } = useServiceFormContext();

  return (
    <NumberInput
      min={0}
      label="Service Cost"
      placeholder="Service Cost"
      {...getInputProps("cost")}
      icon={<IconMedal size={18} />}
    />
  );
}
