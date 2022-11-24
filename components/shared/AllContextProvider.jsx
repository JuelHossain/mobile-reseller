import { AuthProvider } from "../../src/context/authContext/authContext";
import { HeaderProvider } from "../../src/context/headerContext";

export default function AllContextProvider({ children }) {
  return (
    <AuthProvider>
      <HeaderProvider>{children}</HeaderProvider>
    </AuthProvider>
  );
}
