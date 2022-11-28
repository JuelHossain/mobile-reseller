import { useEffect } from "react";
import useLogin from "./useLogin";
import useCreateUser from "./useRegister";

export default function useAuthHandler({ form, type, setError }) {
  const [createUser, createdUser, creating, creatingError] = useCreateUser();

  const [login, loggedInUser, loggingIn, loginError] = useLogin();

  const authError = creatingError || loginError;

  const user = loggedInUser || createdUser;
  const loading = loggingIn || creating;

  const { onSubmit, reset } = form;

  const authHandler = (e) => {
    onSubmit(async (data) => {
      if (type === "login") {
        await login(data);
        reset();
      } else {
        await createUser(data);
        reset();
      }
    })(e);
  };

  useEffect(() => {
    if (authError) {
      setError(authError?.message);
    }
  }, [setError, user, authError]);

  return { authHandler, authError, user, loading };
}
