import {
  IconBrandProducthunt,
  IconBuildingSkyscraper,
  IconMenuOrder,
  IconSelect,
  IconSoccerField,
} from "@tabler/icons";
import AllBuyer from "../admin/all-buyer/AllBuyer";
import AllOrders from "../admin/all-orders/AllOrders";
import AllProducts from "../admin/all-products/AllProducts";
import AllSeller from "../admin/all-seller/AllSeller";
import SoldProducts from "../admin/sold-prodcuts/SoldProducts";

const adminLinks = [
  {
    label: "All Seller",
    link: "/dashboard",
    description: "Manage All Seller",
    icon: IconSelect,
    element: <AllSeller />,
  },
  {
    label: "All Buyer",
    link: "/dashboard/all-buyer",
    description: "Manage All buyers",
    icon: IconBuildingSkyscraper,
    element: <AllBuyer />,
  },
  {
    label: "All Products",
    link: "/dashboard/all-products",
    description: "Manage All products",
    icon: IconBrandProducthunt,
    element: <AllProducts />,
  },
  {
    label: "All Orders",
    link: "/dashboard/all-orders",
    description: "Manage All orders",
    icon: IconMenuOrder,
    element: <AllOrders />,
  },
  {
    label: "Sold Products",
    link: "/dashboard/sold-products",
    description: "all products sold",
    icon: IconSoccerField,
    element: <SoldProducts />,
  },
];

export default adminLinks;
