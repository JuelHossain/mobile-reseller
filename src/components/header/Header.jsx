/* eslint-disable react/display-name */
import { Group, Header } from "@mantine/core";
import { forwardRef } from "react";

import Logo from "./Logo";
import MobileLinks from "./mobile/MobileLinks";
import NavLinks from "./nav/NavLinks";
import UserSection from "./user/UserSection";

const AppHeader = forwardRef((props, ref) => (
  <Header ref={ref} className="fixed p-2 h-[8vh] flex  items-center">
    <Group className={`justify-between duration-500 w-full items-end `} noWrap>
      <NavLinks />
      <Logo />
      <UserSection />
      <MobileLinks />
    </Group>
  </Header>
));

export default AppHeader;
