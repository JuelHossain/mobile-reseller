import AuthModal from "../auth/AuthModal";
import AddServiceModal from "../modify-services/AddServiceModal";
import PrivacyModal from "../privacy-policy/PrivacyModal";
import TermsModal from "../terms&conditions/TermsModal";

export default function AllModal() {
  return (
    <>
      <AuthModal />
      <AddServiceModal />
      <TermsModal />
      <PrivacyModal />
    </>
  );
}
