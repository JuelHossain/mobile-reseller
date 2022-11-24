import { useEffect } from "react";
import { useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useAuthContext } from "../../../../../context/authContext/authContext";
import auth from "../../../../../firebase";
import useAddUser from "../../../../../hooks/auth/useAddUser";

export default function useSocialLogin() {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [singInWithFacebook, facebookUser, facebookLoading, githubError] = useSignInWithFacebook(auth);

  const { setError } = useAuthContext();

  const { createUser, creatingUser, error: creatingError } = useAddUser();

  const loading = googleLoading || facebookLoading || createUser;

  const user = googleUser || facebookUser;
  const error = googleError || githubError || creatingError;
  const gLoading = googleLoading || creatingUser;
  const fLoading = facebookLoading || loading;

  useEffect(() => {
    if (user) {
      createUser(user);
    }
    if (error) {
      setError(error.message);
    }
  }, [user, error, setError, createUser]);

  return { signInWithGoogle, gLoading, singInWithFacebook, fLoading };
}
