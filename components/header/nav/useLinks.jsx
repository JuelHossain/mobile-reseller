import { IconAerialLift, IconBlockquote, IconDashboard, IconHome } from "@tabler/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../src/firebase";

const useLinks = () => {
  const links = [
    { name: "home", link: "/", Icon: IconHome },
    { name: "services", link: "services", Icon: IconBlockquote },
    { name: "blog", link: "blog", Icon: IconAerialLift },
  ];

  const privateLinks = [
    {
      name: "dashboard",
      link: "/dashboard",
      Icon: IconDashboard,
    },
  ];
  const [user] = useAuthState(auth);
  return user ? [...links, ...privateLinks] : links;
};

export default useLinks;
