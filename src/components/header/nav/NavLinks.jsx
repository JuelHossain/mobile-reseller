import { Group } from "@mantine/core";
import useLinks from "./useLinks";

import NavLink from "./NavLink";

export default function NavLinks() {
  const {links} = useLinks();
  const navlinks = links.map((nav) => <NavLink key={nav.name} nav={nav} />);

  return <Group className="hidden md:flex gap-2 basis-1/3">{navlinks}</Group>;
}
