import { TextInput } from "@mantine/core";
import { usePhoneFormContext } from "../phoneFormContext";

export default function PhoneNumber() {
  const { getInputProps } = usePhoneFormContext();
  return <TextInput label="Phone Number" placeholder="Your Phone Number Please" {...getInputProps("phoneNumber")} />;
}
