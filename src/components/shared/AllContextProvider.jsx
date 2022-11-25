import { AuthProvider } from "../../context/authContext/authContext";
import { HeaderProvider } from "../../context/headerContext";
import { ModalProvider } from "../../context/modalContext";

export default function AllContextProvider({ children }) {
  return (
    <ModalProvider>
      <AuthProvider>
        <HeaderProvider>{children}</HeaderProvider>
      </AuthProvider>
    </ModalProvider>
  );
}
