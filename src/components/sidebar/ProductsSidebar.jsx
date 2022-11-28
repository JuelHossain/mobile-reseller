import categories from "../../pages/products/components/categories";
import Sidebar from "./Sidebar";

export default function ProductsSidebar({ left }) {
  return <Sidebar navlinks={categories} title="Phone Categories" left={left} />;
}
