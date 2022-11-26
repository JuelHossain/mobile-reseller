import { AuthProvider } from "../../context/authContext/authContext";
import { HeaderProvider } from "../../context/headerContext";
import { ModalProvider } from "../../context/modalContext";
import { ProfileProvider } from "../../context/profile-context/profileContext";

export default function AllContextProvider({ children }) {
  return (
    <ModalProvider>
      <AuthProvider>
        <HeaderProvider>
          <ProfileProvider>{children}</ProfileProvider>
        </HeaderProvider>
      </AuthProvider>
    </ModalProvider>
  );
}
