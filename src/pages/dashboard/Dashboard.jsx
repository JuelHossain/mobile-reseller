import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/sidebar/DashboardSidebar";

export default function Dashboard() {
  return (
    <Flex className=" gap-4 my-5 sm:my-10 max-w-6xl mx-auto justify-between p-4">
      <Outlet />
      <div className="hidden md:flex sticky top-[8vh]">
        <DashboardSidebar />
      </div>
    </Flex>
  );
}
