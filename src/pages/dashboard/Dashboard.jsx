import { Group } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import categories from "../products/components/categories";

export default function Dashboard() {
  return (
    <Group className="items-start">
      <Sidebar navlinks={categories} title="Phone Categories" path="/products" />
      <Outlet />
    </Group>
  );
}
