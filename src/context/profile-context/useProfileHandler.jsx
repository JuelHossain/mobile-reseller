import { showNotification } from "@mantine/notifications";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import useUpdateUser from "../../hooks/auth/useUpdateUser";
import { useUserContext } from "../userContext";

export default function useProfileHandler({ onSubmit }) {
  const { updateUserAsync, updatingUser, updatingUserError } = useUpdateUser();
  const [updateProfile, updatingProfile, updatingProfileError] = useUpdateProfile(auth);
  const { email } = useUserContext();

  const loading = updatingUser || updatingProfile;
  const serverError = updatingUserError || updatingProfileError;

  const handler = async (userData) => {
    const { displayName, photoURL } = userData ?? {};

    await updateProfile({
      displayName,
      photoURL,
    });

    await updateUserAsync(
      { patch: userData, email },
      {
        onSuccess: () => {
          showNotification({
            title: "Your Profile Updated Successfully",
          });
        },
      },
    );
  };

  const submitHandler = (e) => {
    onSubmit(handler)(e);
  };

  return { submitHandler, loading, serverError };
}
