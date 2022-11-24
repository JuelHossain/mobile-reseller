import { Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";

export default function SeeAllButton({ home }) {
  return (
    home && (
      <Group position="center" className="mt-5 sm:mt-10 ">
        <Button component={Link} to="services">
          See All Services
        </Button>
      </Group>
    )
  );
}
