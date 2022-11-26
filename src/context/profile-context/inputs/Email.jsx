import { TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons";
import { useProfileContext } from "../profileContext";

export default function Email() {
  const { getInputProps } = useProfileContext();
  return (
    <TextInput
      icon={<IconAt size={14} />}
      description="Your Email Address"
      label="Email"
      variant="filled"
      {...getInputProps("email")}
      readOnly
    />
  );
}
