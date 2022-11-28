import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/sidebar/DashboardSidebar";

export default function Dashboard() {
  return (
    <Flex className=" gap-4  justify-between p-4 min-h-[92vh]">
      <Outlet />
      <div className="hidden md:flex sticky top-[8vh]">
        <DashboardSidebar />
      </div>
    </Flex>
  );
}
