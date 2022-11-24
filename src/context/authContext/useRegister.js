import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase";
import useAddUser from "../../hooks/auth/useAddUser";
import usePhotoURL from "./usePhotoURL";

export default function useRegister() {
  const [registeredUser, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setLoadingError] = useState(null);

  const { upload } = usePhotoURL();

  const { createUserAsync } = useAddUser();

  const register = async ({ email: userEmail, password, name, photo, role }) => {
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(auth, userEmail, password);

      await sendEmailVerification(user);

      const url = await upload(photo, user);

      await updateProfile(user, { displayName: name, photoURL: url });

      console.log(user);

      const { email, displayName, photoURL, phoneNumber, emailVerified, providerData, uid } = user || {};

      const newUser = { email, displayName, photoURL, phoneNumber, emailVerified, providerData, uid, role };

      await createUserAsync(newUser);

      setUser(user);
      setLoading(false);
      return user;
    } catch (err) {
      setLoading(false);
      setLoadingError(err);
      return null;
    }
  };

  return [register, registeredUser, loading, error];
}
