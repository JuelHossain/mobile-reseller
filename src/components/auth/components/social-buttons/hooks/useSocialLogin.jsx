import { useEffect } from "react";
import { useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useAuthContext } from "../../../../../context/authContext/authContext";
import auth from "../../../../../firebase";
import useToken from "../../../../../hooks/auth/useToken";

export default function useSocialLogin() {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [singInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);

  const { setError } = useAuthContext();

  const { generateToken, generatingToken, error: tokenError } = useToken();

  const { user } = gUser || fUser || {};
  const error = gError || fError || tokenError;

  useEffect(() => {
    if (user) {
      generateToken(user);
    }
    if (error) {
      setError(error.message);
    }
  }, [user, error, setError, generateToken]);

  return { signInWithGoogle, gLoading, singInWithFacebook, fLoading, generatingToken };
}
