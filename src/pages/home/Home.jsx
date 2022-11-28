import { Box } from "@mantine/core";
import ProductAd from "./ad/ProductAd";
import Advertisement from "./Advertisement";
import Banner from "./Banner";
import Services from "./Services";

export default function Home() {
  return (
    <Box className="space-y-10 md:space-y-20 mb-10 sm:mb-20 p-2">
      <Banner />
      <ProductAd />
      <Advertisement />
      <Services />
    </Box>
  );
}
