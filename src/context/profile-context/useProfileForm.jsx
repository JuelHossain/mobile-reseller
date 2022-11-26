import { useForm } from "@mantine/form";
import { useEffect } from "react";
import useUser from "../../hooks/auth/useUser";
import usePhotoURL from "../authContext/usePhotoURL";
import initialProfile from "./initialProfile";
import useProfileHandler from "./useProfileHandler";

export default function useProfileForm() {
  const form = useForm(initialProfile);
  const { user, email, userLoading } = useUser();
  const { upload, uploading } = usePhotoURL();

  const { setValues } = form;

  const onSelect = async (file) => {
    const link = await upload(file[0], email);
    setValues({ photoURL: link });
  };
  useEffect(() => {
    if (user) {
      const { _id, phoneNumber, ...rest } = user;
      setValues({ ...rest, phoneNumber: phoneNumber || "" });
    }
  }, [user, setValues]);

  const { submitHandler, loading, serverError } = useProfileHandler(form);
  return { ...form, submitHandler, loading, serverError, onSelect, uploading, userLoading };
}
