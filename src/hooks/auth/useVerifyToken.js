import { signOut } from "firebase/auth";
import { useTokenContext } from "../../context/tokenContext";
import auth from "../../firebase";

export default function useVerifyToken() {
  const { removeToken } = useTokenContext();
  const verifyToken = (status) => {
    if (status === 401 || status === 403) {
      signOut(auth);
      removeToken();
    }
  };
  return verifyToken;
}
