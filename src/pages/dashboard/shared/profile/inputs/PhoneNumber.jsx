import { Input } from "@mantine/core";
import { useId } from "@mantine/hooks";
import ReactInputMask from "react-input-mask";
import { useProfileContext } from "../../../../../context/profile-context/profileContext";

export default function PhoneNumber() {
  const id = useId();
  const { getInputProps } = useProfileContext();
  return (
    <Input.Wrapper id={id} label="PhoneNumber" description="Your Phone Number">
      <Input
        component={ReactInputMask}
        mask="+880 9999-999999"
        id={id}
        placeholder="Your phone Number"
        alwaysShowMask
        {...getInputProps("phoneNumber")}
        variant="filled"
      />
    </Input.Wrapper>
  );
}
