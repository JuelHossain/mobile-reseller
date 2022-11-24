import axios from "axios";
import { signOut } from "firebase/auth";
import { useTokenContext } from "../../context/tokenContext";
import auth from "../../firebase";
import { url } from "../../utils/default";

export default function useAxiosSetup() {
  const { token, removeToken } = useTokenContext();

  axios.defaults.baseURL = url;
  axios.defaults.headers = {
    authorization: `Bearer ${token}`,
  };
  axios.interceptors.response.use(undefined, (err) => {
    const { status } = err.response;
    if (status === 401 || status === 403) {
      signOut(auth);
      removeToken();
    }
  });
}
