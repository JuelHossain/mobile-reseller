import { useForm } from "@mantine/form";
import { useEffect } from "react";
import usePhotoURL from "../authContext/usePhotoURL";
import { useUserContext } from "../userContext";
import initialProfile from "./initialProfile";
import useProfileHandler from "./useProfileHandler";

export default function useProfileForm() {
  const form = useForm(initialProfile);
  const { user, email, userLoading } = useUserContext();
  const { upload, uploading } = usePhotoURL();

  const { setValues, errors } = form;
  console.log(errors);

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
