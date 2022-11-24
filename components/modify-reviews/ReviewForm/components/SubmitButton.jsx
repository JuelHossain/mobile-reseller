/* eslint-disable no-nested-ternary */
import { Button, Group } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { useReviewFormContext } from "../../../../context/review-form-context/reviewFormContext";
import auth from "../../../../firebase";

export default function SubmitButton() {
  const [user] = useAuthState(auth);

  const {
    data: { data },
  } = useReviewFormContext();
  return (
    <Group position="right">
      <Button type="submit">{data ? "Update" : user ? "Submit" : "Please Login"}</Button>
    </Group>
  );
}
