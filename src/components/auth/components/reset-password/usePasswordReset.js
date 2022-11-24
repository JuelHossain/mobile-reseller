import { useForm } from "@mantine/form";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useAuthContext } from "../../../../context/authContext/authContext";
import { validation } from "../../../../context/authContext/initialForm";
import auth from "../../../../firebase";

export default function usePasswordReset() {
  const [sending, setSending] = useState(false);
  const { values, setError, setAlert, passwordResetDisclosure, reset: resetAll } = useAuthContext();
  const [, { close }] = passwordResetDisclosure;

  const { getInputProps, onSubmit, reset } = useForm({
    initialValues: {
      email: values.email,
    },
    validate: {
      email: validation("login").email,
    },
  });

  const sendEmail = (e) => {
    onSubmit(async (data) => {
      setSending(true);
      const { email } = data;
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setSending(false);
          setAlert({ title: "Email Sent", message: "Please Check Your Email" });
          reset();
          close();
          resetAll();
          setTimeout(() => {
            setAlert("");
          }, 5000);
        })
        .catch((err) => {
          setSending(false);
          setError(err.code);
        });
    })(e);
  };

  return { sendEmail, getInputProps, sending };
}
