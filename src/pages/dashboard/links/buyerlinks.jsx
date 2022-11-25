import { IconBuildingSkyscraper, IconSelect } from "@tabler/icons";
import MyOrders from "../buyer/my-orders/MyOrders";
import MyWishlist from "../buyer/my-wishlist/MyWishlist";

const buyerLinks = [
  {
    label: "My Orders",
    link: "/dashboard",
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
