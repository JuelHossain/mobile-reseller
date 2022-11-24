/* eslint-disable no-shadow */
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase";
import useToken from "../../hooks/auth/useToken";

export default function useLogin() {
  const [signedInUser, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { generateTokenAsync } = useToken();

  const login = async ({ email, password }) => {
    try {
      setLoading(true);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      await generateTokenAsync(user);
      setUser(user);
      setLoading(false);
      return user;
    } catch (err) {
      setLoading(false);
      setError(err);
      return null;
    }
  };

  return [login, signedInUser, loading, error];
}
