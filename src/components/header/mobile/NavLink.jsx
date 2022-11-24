/* eslint-disable react/display-name */
import { Button } from "@mantine/core";
import { forwardRef } from "react";

import { Link, useLocation } from "react-router-dom";
import { useHeaderContext } from "../../../context/headerContext";

const NavLink = forwardRef(({ nav, ...props }, ref) => {
  const { name, link, Icon } = nav;

  const { pathname } = useLocation();
  const { disclosure } = useHeaderContext();
  const [, { close: closeMenu }] = disclosure;

  const propsToPass = () => {
    if (typeof link === "function") {
      return {
        onClick: () => {
          closeMenu();
          link();
        },
      };
    }
    return {
      onClick: closeMenu,
      to: link,
      component: Link,
    };
  };

  return (
    <Button
      ref={ref}
      {...props}
      {...propsToPass()}
      fullWidth
      classNames={{ inner: "justify-start capitalize" }}
      leftIcon={<Icon size={18} />}
      variant={(pathname.includes(link) && link !== "/") || (pathname === "/" && link === "/") ? "filled" : "light"}
    >
      {name}
    </Button>
  );
});

export default NavLink;
