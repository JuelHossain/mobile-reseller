import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import ProductsSidebar from "../../components/sidebar/ProductsSidebar";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";

export default function Products() {
  useSetPageTitle("Products");

  return (
    <Flex className=" gap-4  justify-between p-4 min-h-[92vh] ">
      <div className="hidden md:flex sticky top-20">
        <ProductsSidebar />
      </div>
      <Outlet />
    </Flex>
  );
}
