import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase";
import useToken from "../../hooks/auth/useToken";
import usePhotoURL from "./usePhotoURL";

export default function useRegister() {
  const [registeredUser, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setLoadingError] = useState(null);

  const { upload } = usePhotoURL();

  const { generateTokenAsync } = useToken();

  const register = async ({ email: userEmail, password, name, photo, seller }) => {
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(auth, userEmail, password);

      await sendEmailVerification(user);

      const url = await upload(photo, user?.uid);

      await updateProfile(user, { displayName: name, photoURL: url });

      await generateTokenAsync({ ...user, seller });

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
