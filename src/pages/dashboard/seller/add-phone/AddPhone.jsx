import { Center } from "@mantine/core";
import { PhoneFormProvider } from "../../../../context/phone-context/phoneFormcontext";
import PhoneForm from "../shared/PhoneForm";

export default function AddPhone() {
  return (
    <PhoneFormProvider>
      <Center className="flex-1">
        <PhoneForm />
      </Center>
    </PhoneFormProvider>
  );
}
