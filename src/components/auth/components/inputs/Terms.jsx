/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Checkbox } from "@mantine/core";
import { useAuthContext } from "../../../../context/authContext/authContext";
import { useModalContext } from "../../../../context/modalContext";

export default function Terms(props) {
  const { type, getInputProps } = useAuthContext();

  return (
    type === "register" && (
      <Checkbox
        {...props}
        label={<TermsLabel />}
        {...getInputProps("terms", {
          type: "checkbox",
        })}
      />
    )
  );
}

function TermsLabel() {
  const { termsModal } = useModalContext();
  const [, { toggle }] = termsModal;

  return (
    <p className="inline ">
      I accept{" "}
      <span onClick={toggle} className="underline underline-offset-2">
        terms and conditions
      </span>
    </p>
  );
}
