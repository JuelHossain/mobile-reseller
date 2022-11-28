import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { AuthProvider } from "../../context/authContext/authContext";
import { HeaderProvider } from "../../context/headerContext";
import { ModalProvider } from "../../context/modalContext";
import { ProfileProvider } from "../../context/profile-context/profileContext";
import { TokenProvider } from "../../context/tokenContext";
import { UserProvider } from "../../context/userContext";

const queryClient = new QueryClient();

export default function AllContextProvider({ children }) {
  return (
    <TokenProvider>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ModalProvider>
            <AuthProvider>
              <HeaderProvider>
                <ProfileProvider>{children}</ProfileProvider>
              </HeaderProvider>
            </AuthProvider>
          </ModalProvider>
        </UserProvider>
      </QueryClientProvider>
    </TokenProvider>
  );
}
