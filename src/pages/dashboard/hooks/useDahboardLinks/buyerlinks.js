import {
  IconBrandProducthunt,
  IconBuildingSkyscraper,
  IconMenuOrder,
  IconSelect,
  IconSoccerField,
} from "@tabler/icons";

const buyerLinks = [
  {
    label: "All Seller",
    link: "/dashboard/all-seller",
    description: "Manage All Seller",
    icon: IconSelect,
  },
  {
    label: "All Buyer",
    link: "/dashboard/all-buyer",
    description: "Manage All buyers",
    icon: IconBuildingSkyscraper,
  },
  {
    label: "All Products",
    link: "/dashboard/all-products",
    description: "Manage All products",
    icon: IconBrandProducthunt,
  },
  {
    label: "All Orders",
    link: "/dashboard/all-orders",
    description: "Manage All orders",
    icon: IconMenuOrder,
  },
  {
    label: "Sold Products",
    link: "/dashboard/sold-products",
    description: "all products sold",
    icon: IconSoccerField,
  },
];

export default buyerLinks;
