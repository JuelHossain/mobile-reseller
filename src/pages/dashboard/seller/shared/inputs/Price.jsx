import { NumberInput } from "@mantine/core";
import { IconMedal } from "@tabler/icons";
import { usePhoneFormContext } from "../../../../../context/phone-context/phoneFormcontext";

export default function Price() {
  const { getInputProps } = usePhoneFormContext();

  return (
    <NumberInput
      min={0}
      label="Service Cost"
      placeholder="Service Cost"
      {...getInputProps("price")}
      icon={<IconMedal size={18} />}
    />
  );
}
