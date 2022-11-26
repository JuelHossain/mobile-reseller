import { IconUser } from "@tabler/icons";
import { useUserContext } from "../../../context/userContext";
import Profile from "../shared/profile/Profile";
import adminLinks from "./adminlinks";
import buyerLinks from "./buyerlinks";
import sellerLinks from "./sellerlinks";

export default function useDashboardLinks() {
  const { admin, seller } = useUserContext();
  let links = buyerLinks;
  if (admin) links = adminLinks;
  else if (seller) links = sellerLinks;
  return [
    {
      label: "Profile",
      link: "/dashboard",
      description: "User Details",
      icon: IconUser,
      index: true,
      element: <Profile />,
    },
    ...links,
  ];
}
