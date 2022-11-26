import { IconBuildingSkyscraper, IconSelect } from "@tabler/icons";
import MyOrders from "../buyer/MyOrders";
import MyWishlist from "../buyer/MyWishlist";

const buyerLinks = [
  {
    label: "My Orders",
    link: "/dashboard/my-orders",
    description: "Manage Your Orders",
    icon: IconSelect,
    element: <MyOrders />,
  },
  {
    label: "My Wishlist",
    link: "/dashboard/wishlist",
    description: "Manage your wishlist",
    icon: IconBuildingSkyscraper,
    element: <MyWishlist />,
  },
];

export default buyerLinks;
