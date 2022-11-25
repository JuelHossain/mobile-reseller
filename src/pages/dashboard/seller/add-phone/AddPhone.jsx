import { Center } from "@mantine/core";
import { PhoneFormProvider } from "../../../../context/phone-context/phoneFormcontext";
import PhoneForm from "../shared/phone-form/PhoneForm";

export default function AddPhone() {
  return (
    <PhoneFormProvider>
      <Center className="flex-1 justify-end">
        <PhoneForm />
      </Center>
    </PhoneFormProvider>
  );
}
