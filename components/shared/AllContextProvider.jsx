import { AuthProvider } from "../../context/authContext/authContext";
import { HeaderProvider } from "../../context/headerContext";
import { ModalProvider } from "../../context/modalContext";
import { ServiceProvider } from "../../context/serviceContext";

export default function AllContextProvider({ children }) {
  return (
    <ModalProvider>
      <AuthProvider>
        <HeaderProvider>
          <ServiceProvider>{children}</ServiceProvider>
        </HeaderProvider>
      </AuthProvider>
    </ModalProvider>
  );
}
