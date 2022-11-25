import useUser from "../../hooks/auth/useUser";
import useDashboardLinks from "../../pages/dashboard/links/useDashboardLinks";
import ToggleRole from "../../pages/dashboard/shared/ToggleRole";
import Sidebar from "./Sidebar";

export default function DashboardSidebar() {
  const { admin, seller } = useUser();
  const links = useDashboardLinks();
  // eslint-disable-next-line no-nested-ternary
  const title = admin ? "Admin Dashboard" : seller ? "Seller Dashboard" : "Buyer Dashboard";

  return <Sidebar navlinks={links} title={title} extra={<ToggleRole />} />;
}
