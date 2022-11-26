import { Center } from "@mantine/core";
import PhoneForm from "../../../context/phone-context/PhoneForm";
import { PhoneFormProvider } from "../../../context/phone-context/phoneFormContext";

export default function AddPhone() {
  return (
    <PhoneFormProvider>
      <Center className="flex-1">
        <PhoneForm />
      </Center>
    </PhoneFormProvider>
  );
}
