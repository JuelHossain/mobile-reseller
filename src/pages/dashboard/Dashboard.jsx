import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/sidebar/DashboardSidebar";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";

export default function Dashboard() {
  useSetPageTitle("Dashboard");
  // this is the dashboard where everyone cry. and now its my turn.
  return (
    <Flex className=" gap-4  justify-between p-4 min-h-[92vh]">
      <Outlet />
      <div className="hidden md:flex sticky top-[8vh]">
        <DashboardSidebar />
      </div>
    </Flex>
  );
}
