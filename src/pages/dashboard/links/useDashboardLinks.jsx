import useUser from "../../../hooks/auth/useUser";
import adminLinks from "./adminlinks";
import buyerLinks from "./buyerlinks";
import sellerLinks from "./sellerlinks";

export default function useDashboardLinks() {
  const { admin, seller } = useUser();
  if (admin) return adminLinks;
  if (seller) return sellerLinks;
  return buyerLinks;
}
