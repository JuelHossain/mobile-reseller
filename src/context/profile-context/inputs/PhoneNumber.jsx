import { Input } from "@mantine/core";
import { useId } from "@mantine/hooks";
import ReactInputMask from "react-input-mask";
import { useProfileContext } from "../profileContext";

export default function PhoneNumber() {
  const id = useId();
  const { getInputProps, errors: { phoneNumber } = {} } = useProfileContext();
  return (
    <Input.Wrapper error={phoneNumber} id={id} label="PhoneNumber" description="Your Phone Number">
      <Input
        component={ReactInputMask}
        mask="+8809999999999"
        id={id}
        placeholder="Your phone Number"
        alwaysShowMask
        {...getInputProps("phoneNumber")}
        variant="filled"
      />
    </Input.Wrapper>
  );
}
