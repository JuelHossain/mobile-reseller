import axios from "axios";
import { useTokenContext } from "../../context/tokenContext";
import { url } from "../../utils/default";
import useVerifyToken from "./useVerifyToken";

export default function useAxiosSetup() {
  const { token } = useTokenContext();
  const verifyToken = useVerifyToken();
  axios.defaults.baseURL = url;
  axios.defaults.headers = {
    authorization: `Bearer ${token}`,
  };
  axios.interceptors.response.use(undefined, (err) => {
    const { status } = err.response;
    verifyToken(status);
  });
}
