import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import PrivateRoute from "../../components/auth/PrivateRoute";
import DashboardSidebar from "../../components/sidebar/DashboardSidebar";

export default function Dashboard() {
  return (
    <PrivateRoute>
      <Flex className=" gap-4 mt-5 sm:mt-10 max-w-4xl mx-auto justify-between p-4">
        <Outlet />
        <div className="hidden md:flex ">
          <DashboardSidebar />
        </div>
      </Flex>
    </PrivateRoute>
  );
}
