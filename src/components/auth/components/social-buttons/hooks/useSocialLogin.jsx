import { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useAuthContext } from "../../../../../context/authContext/authContext";
import auth from "../../../../../firebase";
import useToken from "../../../../../hooks/auth/useToken";

export default function useSocialLogin() {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [singInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
  const [signIn, admin, adminLogging, adminError] = useSignInWithEmailAndPassword(auth);

  const loginAsAdmin = async () => {
    await signIn("admin@admin.com", "admin1");
  };

  const { setError } = useAuthContext();

  const { generateToken, generatingToken, error: tokenError } = useToken();

  const { user } = gUser || fUser || admin || {};
  const error = gError || fError || tokenError || adminError;

  useEffect(() => {
    if (user) {
      generateToken(user);
    }
    if (error) {
      setError(error?.message);
    }
  }, [user, error, setError, generateToken]);

  return { signInWithGoogle, gLoading, singInWithFacebook, fLoading, generatingToken, loginAsAdmin, adminLogging };
}
