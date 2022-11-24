import { useDisclosure } from "@mantine/hooks";
import { createContext, useContext, useMemo } from "react";

export const modalContext = createContext();
export function ModalProvider({ children }) {
  const termsModal = useDisclosure();
  const privacyModal = useDisclosure();
  const authModal = useDisclosure();
  const addServiceModal = useDisclosure();
  const updateServiceModal = useDisclosure();
  const editReviewModal = useDisclosure();

  const context = useMemo(
    () => ({ termsModal, privacyModal, authModal, addServiceModal, updateServiceModal, editReviewModal }),
    [termsModal, privacyModal, authModal, addServiceModal, updateServiceModal, editReviewModal],
  );

  return <modalContext.Provider value={context}>{children}</modalContext.Provider>;
}
export const useModalContext = () => useContext(modalContext);
