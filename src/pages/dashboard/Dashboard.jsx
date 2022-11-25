import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import PrivateRoute from "../../components/auth/PrivateRoute";
import Sidebar from "../../components/sidebar/Sidebar";
import useUser from "../../hooks/auth/useUser";
import useDashboardLinks from "./links/useDashboardLinks";
import ToggleRole from "./shared/ToggleRole";

export default function Dashboard() {
  const { admin, seller } = useUser();
  const links = useDashboardLinks();
  // eslint-disable-next-line no-nested-ternary
  const title = admin ? "Admin Dashboard" : seller ? "Seller Dashboard" : "Buyer Dashboard";
  return (
    <PrivateRoute>
      <Flex className=" gap-4 mt-5 sm:mt-10">
        <Sidebar navlinks={links} title={title} extra={<ToggleRole />} />
        <Outlet />
      </Flex>
    </PrivateRoute>
  );
}
