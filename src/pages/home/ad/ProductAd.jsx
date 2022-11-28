import { Box, Container, SimpleGrid, Stack, Title } from "@mantine/core";
import useGetProducts from "../../../hooks/phones/useGetProducts";
import PhoneCard from "../../products/mobile-phones/PhoneCard";

export default function ProductAd() {
  const { products } = useGetProducts({ ad: true });

  const stats = products?.map((item) => <PhoneCard product={item} key={item._id} />);
  return (
    products?.length > 0 && (
      <Box id="ad" className="p-4 xs:p-10  bg-no-repeat bg-cover bg-main-6 dark:bg-main-9 rounded-xl bg-featured ">
        <Container size="xl" className="bg-main-5/50 p-6 rounded-md">
          <Stack className="mb-5">
            <Title color="white" className="" order={2}>
              Featured Phones
            </Title>
          </Stack>
          <SimpleGrid className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">{stats}</SimpleGrid>
        </Container>
      </Box>
    )
  );
}
