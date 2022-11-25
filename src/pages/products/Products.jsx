import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import ProductsSidebar from "../../components/sidebar/ProductsSidebar";

export default function Products() {
  return (
    <Flex className=" gap-4 mt-5 sm:mt-10 max-w-7xl mx-auto justify-between p-4">
      <Outlet />
      <div className="hidden md:flex">
        <ProductsSidebar />
      </div>
    </Flex>
  );
}
