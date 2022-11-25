import { Button } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

export default function DashboardButton() {
  const { pathname } = useLocation();
  const match = pathname.includes("dashboard");
  return (
    <Button variant={match ? "filled" : "outline"} className=" h-8" component={Link} to="dashboard">
      Dashboard
    </Button>
  );
}
