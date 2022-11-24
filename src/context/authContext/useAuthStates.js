import { useForm } from "@mantine/form";
import { useDisclosure, useToggle } from "@mantine/hooks";
import { useEffect, useState } from "react";
import initialForm from "./initialForm";
import useAuthHandler from "./useAuthHandler";

export default function useAuthStates() {
  const [type, toggleType] = useToggle(["login", "register"]);
  const passwordResetDisclosure = useDisclosure();
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");

  const form = useForm(initialForm(type));
  const { terms } = form.errors ?? {};
  const { authHandler, loading, user } = useAuthHandler({ form, type, setError });
  useEffect(() => {
    setError(terms || "");
  }, [terms]);

  const states = {
    type,
    error,
    alert,
    user,
    loading,
    toggleType,
    setError,
    setAlert,
    authHandler,
    ...form,
    passwordResetDisclosure,
  };

  return states;
}
