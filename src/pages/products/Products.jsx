import { Group } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import categories from "./components/categories";

export default function Products() {
  return (
    <Group className="items-start">
      <Sidebar navlinks={categories} title="Phone Categories" path="/products" />
      <Outlet />
    </Group>
  );
}
