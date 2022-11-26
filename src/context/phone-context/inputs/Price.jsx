import { NumberInput } from "@mantine/core";
import { IconMedal } from "@tabler/icons";
import { usePhoneFormContext } from "../phoneFormContext";

export default function Price() {
  const { getInputProps } = usePhoneFormContext();

  return (
    <NumberInput
      min={0}
      label="Price"
      placeholder="Phone Price"
      {...getInputProps("price")}
      icon={<IconMedal size={18} />}
      className="flex-grow flex-shrink-0 basis-32"
    />
  );
}
