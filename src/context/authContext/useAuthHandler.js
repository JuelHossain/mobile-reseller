import { useEffect } from "react";
import { useSignInWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import useToken from "../../hooks/auth/useToken";
import useCreateUser from "./useCreateUser";
import usePhotoURL from "./usePhotoURL";

export default function useAuthHandler({ form, type, setError }) {
  const [signInWithEmailAndPassword, signedInUser, singingIn, singingInError] = useSignInWithEmailAndPassword(auth);
  const [createUser, createdUser, creating, creatingError] = useCreateUser();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const { upload, uploading, uploadError } = usePhotoURL();

  const authError = singingInError || creatingError || updateError || uploadError;
  const user = signedInUser || createdUser;
  const loading = singingIn || creating || updating || uploading;

  const { onSubmit, reset } = form;

  const { mutate: generateToken } = useToken();

  const authHandler = (e) => {
    onSubmit(async (data) => {
      const { email, password, name, photo } = data;
      if (type === "login") {
        await signInWithEmailAndPassword(email, password);
      } else {
        // eslint-disable-next-line no-shadow
        const user = await createUser(email, password);
        if (user && photo) {
          const url = await upload(photo, user);
          await updateProfile({ displayName: name, photoURL: url });
          generateToken(signedInUser);
          reset();
        } else if (user) {
          await updateProfile({ displayName: name });
          generateToken(signedInUser);
          reset();
        }
      }
    })(e);
  };

  useEffect(() => {
    if (signedInUser) {
      generateToken(signedInUser);
      reset();
    }
    if (authError) {
      setError(authError.message);
    }
  }, [setError, user, authError, signedInUser, reset, generateToken]);

  return { authHandler, authError, user, loading };
}
