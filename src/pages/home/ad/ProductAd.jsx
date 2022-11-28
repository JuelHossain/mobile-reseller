import { Box, SimpleGrid, Stack, Title } from "@mantine/core";
import useGetProducts from "../../../hooks/phones/useGetProducts";
import PhoneCard from "../../products/mobile-phones/PhoneCard";

export default function ProductAd() {
  const { products } = useGetProducts({ ad: true });

  const stats = products?.map((item) => <PhoneCard product={item} key={item._id} />);
  return (
    products?.length > 0 && (
      <Box id="ad" className="p-4 xs:p-10  bg-no-repeat bg-cover bg-main-6 dark:bg-main-9 rounded-xl  ">
        <Stack className="mb-5">
          <Title className="p-2 bg-gradient-to-r from-main-5 dark:from-main-8 rounded-md" order={2}>
            Featured Phones
          </Title>
        </Stack>
        <SimpleGrid className="xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5">{stats}</SimpleGrid>
      </Box>
    )
  );
}
