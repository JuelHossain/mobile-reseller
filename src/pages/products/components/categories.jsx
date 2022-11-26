import { IconArrowBounce, IconArrowDownSquare, IconArrowMoveRight, IconArrowUpSquare } from "@tabler/icons";

const categories = [
  { label: "Budget", icon: IconArrowDownSquare, description: "Lowest price phones", link: "/products", cat: "budget" },
  {
    label: "Mid Range",
    icon: IconArrowBounce,
    description: "Affordable price phones ",
    link: "/products/mid-range",
    cat: "mid-range",
  },
  {
    label: "Flagship Killer",
    icon: IconArrowMoveRight,
    description: "Worth To Buy Phones",
    link: "/products/flagship-killer",
    cat: "flagship-killer",
  },
  {
    label: "Flagship",
    icon: IconArrowUpSquare,
    description: "Best phones available",
    link: "/products/flagship",
    cat: "flagship",
  },
];
export default categories;
