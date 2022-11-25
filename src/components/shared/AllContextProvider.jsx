import { AuthProvider } from "../../context/authContext/authContext";
import { HeaderProvider } from "../../context/headerContext";
import { ModalProvider } from "../../context/modalContext";
import { PhoneFormProvider } from "../../context/phone-context/phoneFormcontext";

export default function AllContextProvider({ children }) {
  return (
    <ModalProvider>
      <AuthProvider>
        <HeaderProvider>
          <PhoneFormProvider>{children}</PhoneFormProvider>
        </HeaderProvider>
      </AuthProvider>
    </ModalProvider>
  );
}
