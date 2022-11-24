import { useEffect } from "react";
import { useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useAuthContext } from "../../../../../context/authContext/authContext";
import auth from "../../../../../firebase";

export default function useSocialLogin() {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [singInWithFacebook, facebookUser, facebookLoading, githubError] = useSignInWithFacebook(auth);

  const { setError } = useAuthContext();

  const user = googleUser || facebookUser;
  const error = googleError || githubError;

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
  }, [user, error, setError]);

  return { signInWithGoogle, googleLoading, singInWithFacebook, facebookLoading };
}
