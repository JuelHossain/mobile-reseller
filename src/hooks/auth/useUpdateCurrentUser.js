import { useUserContext } from "../../context/userContext";
import useUpdateUser from "./useUpdateUser";

export default function useUpdateCurrentUser() {
  const { updateUser } = useUpdateUser();
  const { email, seller } = useUserContext();

  const switchToSeller = () => updateUser({ patch: { seller: true, admin: false }, email });

  const switchToBuyer = () => updateUser({ patch: { seller: false, admin: false }, email });

  const switchToAdmin = () => updateUser({ patch: { seller: false, admin: true }, email });

  const toggleSeller = () => updateUser({ patch: { seller: !seller }, email });

  return { switchToAdmin, switchToBuyer, switchToSeller, toggleSeller };
}
