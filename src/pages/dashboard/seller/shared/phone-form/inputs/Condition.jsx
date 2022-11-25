import { Select } from "@mantine/core";
import { usePhoneFormContext } from "../../../../../../context/phone-context/phoneFormcontext";

export default function Condition() {
  const { getInputProps } = usePhoneFormContext();
  return (
    <Select
      {...getInputProps("condition")}
      label="Phone Condition"
      placeholder="Tell us about it"
      data={[
        { value: "fair", label: "Fair" },
        { value: "good", label: "Good" },
        { value: "excellent", label: "Excellent" },
      ]}
      className="flex-grow flex-shrink-0 basis-32"
    />
  );
}
