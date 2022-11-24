import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase";

export default function useCreateUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUser = async (email, password) => {
    try {
      setLoading(true);
      // eslint-disable-next-line no-shadow
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(user);
      setUser(user);
      setLoading(false);
      return user;
    } catch (err) {
      setLoading(false);
      setError(err);
      return null;
    }
  };

  return [createUser, user, loading, error];
}
