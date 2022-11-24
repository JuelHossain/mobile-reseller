import { Box } from "@mantine/core";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";
import Banner from "./Banner";

export default function Home() {
  useSetPageTitle("Home");

  return (
    <Box className="space-y-10 md:space-y-20">
      <Banner />
    </Box>
  );
}
