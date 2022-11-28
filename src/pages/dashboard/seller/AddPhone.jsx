import PhoneForm from "../../../context/phone-context/PhoneForm";
import { PhoneFormProvider } from "../../../context/phone-context/phoneFormContext";
import Wrapper from "../shared/Wrapper";

export default function AddPhone() {
  return (
    <PhoneFormProvider>
      <Wrapper image="https://cdn.dribbble.com/users/171004/screenshots/10942001/media/62009e565a7da1c3871e977e0b91c12d.png?compress=1&resize=1000x750&vertical=top">
        <PhoneForm />
      </Wrapper>
    </PhoneFormProvider>
  );
}
