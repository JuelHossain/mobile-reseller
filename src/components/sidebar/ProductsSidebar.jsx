import categories from "../../pages/products/components/categories";
import Sidebar from "./Sidebar";

export default function ProductsSidebar() {
  return <Sidebar navlinks={categories} title="Phone Categories" />;
}
