import { IconAerialLift, IconBlockquote, IconDashboard, IconHome } from "@tabler/icons";

const useLinks = () => {
  const links = [
    { name: "home", link: "/", Icon: IconHome },
    { name: "products", link: "products", Icon: IconBlockquote },
    { name: "blog", link: "blog", Icon: IconAerialLift },
  ];

  const privateLinks = [
    {
      name: "dashboard",
      link: "/dashboard",
      Icon: IconDashboard,
    },
  ];

  return { links, privateLinks };
};

export default useLinks;
