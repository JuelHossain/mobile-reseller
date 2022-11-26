import {
  IconBrandProducthunt,
  IconBuildingSkyscraper,
  IconMenuOrder,
  IconSelect,
  IconSoccerField,
} from "@tabler/icons";
import AllBuyer from "../admin/AllBuyer";
import AllOrders from "../admin/AllOrders";
import AllProducts from "../admin/AllProducts";
import AllSeller from "../admin/AllSeller";
import SoldProducts from "../admin/SoldProducts";

const adminLinks = [
  {
    label: "All Seller",
    link: "/dashboard/all-seller",
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
