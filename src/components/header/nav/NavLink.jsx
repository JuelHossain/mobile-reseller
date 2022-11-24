/* eslint-disable react/display-name */
import { Button } from "@mantine/core";
import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = forwardRef(({ nav, ...props }, ref) => {
  const { link, name } = nav;
  const { pathname } = useLocation();
  const path = pathname.slice(1);

  const propsToPass = () => {
    if (typeof link === "function") {
      return { onClick: link };
    }
    return {
      to: link,
      component: Link,
    };
  };

  return (
    <Button
      {...props}
      {...propsToPass()}
      ref={ref}
      variant={(path.includes(link) && link !== "/") || (pathname === "/" && link === "/") ? "filled" : "light"}
      className="capitalize h-8"
    >
      {name}
    </Button>
  );
});

export default NavLink;
