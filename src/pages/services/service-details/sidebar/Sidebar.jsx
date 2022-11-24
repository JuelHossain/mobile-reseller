import { Stack } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";
import ReviewForm from "../../../../components/modify-reviews/ReviewForm/ReviewForm";
import { ReviewFormProvider } from "../../../../context/review-form-context/reviewFormContext";
import { useServiceContext } from "../../../../context/serviceContext";
import auth from "../../../../firebase";
import OtherService from "./components/OtherService";
import ServiceActions from "./components/ServiceActions";

export default function Sidebar() {
  const { id } = useServiceContext();
  const [user] = useAuthState(auth);
  const { email } = user ?? {};
  return (
    <ReviewFormProvider id={id} email={email}>
      <Stack className="w-full sm:w-auto">
        <ServiceActions />
        <ReviewForm />
        <OtherService />
      </Stack>
    </ReviewFormProvider>
  );
}
