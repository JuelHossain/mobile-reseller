import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function DashboardButton() {
  return (
    <Button variant="outline" className=" h-8" component={Link} to="dashboard">
      Dashboard
    </Button>
  );
}
