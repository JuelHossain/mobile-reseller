import { IconAd, IconBuildingSkyscraper, IconSelect } from "@tabler/icons";

import AddPhone from "../seller/AddPhone";
import ManageAds from "../seller/ManageAds";
import MyPhones from "../seller/MyPhones";

const sellerLinks = [
  {
    label: "Add Phone",
    link: "/dashboard/add-phone",
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
    icon: IconAd,
    element: <ManageAds />,
  },
];

export default sellerLinks;
