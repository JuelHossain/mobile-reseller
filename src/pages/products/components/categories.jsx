import { IconArrowBounce, IconArrowDownSquare, IconArrowMoveRight, IconArrowUpSquare } from "@tabler/icons";

const categories = [
  { label: "Budget", icon: IconArrowDownSquare, description: "Lowest price phones", link: "/products" },
  {
    label: "Mid Range",
    icon: IconArrowBounce,
    description: "Affordable price phones ",
    link: "/products/mid-range",
  },
  {
    label: "Flagship Killer",
    icon: IconArrowMoveRight,
    description: "Worth To Buy Phones",
    link: "/products/flagship-killer",
  },
  {
    label: "Flagship",
    icon: IconArrowUpSquare,
    description: "Best phones available",
    link: "/products/flagship",
  },
];
export default categories;
