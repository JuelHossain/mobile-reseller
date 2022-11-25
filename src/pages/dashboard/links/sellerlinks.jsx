import { IconBrandProducthunt, IconBuildingSkyscraper, IconSelect } from "@tabler/icons";

import AddPhone from "../seller/add-phone/AddPhone";
import ManageAds from "../seller/manage-ads/ManageAds";
import MyPhones from "../seller/my-phones/MyPhones";

const sellerLinks = [
  {
    label: "Add Phone",
    link: "/dashboard",
    description: "Sell Your Phone",
    icon: IconSelect,
    element: <AddPhone />,
  },
  {
    label: "My Phones",
    link: "/dashboard/my-phones",
    description: "Manage Your Phones",
    icon: IconBuildingSkyscraper,
    element: <MyPhones />,
  },
  {
    label: "Manage Ads",
    link: "/dashboard/manage-ads",
    description: "Manage your ads",
    icon: IconBrandProducthunt,
    element: <ManageAds />,
  },
];

export default sellerLinks;
