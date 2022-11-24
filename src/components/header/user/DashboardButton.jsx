import { Button } from "@mantine/core";
import { Link, useMatch } from "react-router-dom";

export default function DashboardButton() {
  const match = useMatch("/dashboard");
  return (
    <Button variant={match ? "filled" : "outline"} className=" h-8" component={Link} to="dashboard">
      Dashboard
    </Button>
  );
}
