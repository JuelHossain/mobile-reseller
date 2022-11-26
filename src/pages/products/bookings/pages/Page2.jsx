import { Box, Card, Paper, SimpleGrid, TextInput, Title } from "@mantine/core";
import { useBookingFormContext } from "../../../../context/booking-context/bookingFormContext";

export default function Page2() {
  const { getInputProps, values } = useBookingFormContext();
  const { buyer, seller, ...all } = values || {};
  console.log(values);

  const sellerInputs = Object.keys(seller).map((key) => (
    <TextInput classNames={{ label: "capitalize" }} key={key} label={key} {...getInputProps(key)} />
  ));

  const productInputs = Object.keys(all).map((key) => (
    <TextInput classNames={{ label: "capitalize" }} key={key} label={key} {...getInputProps(key)} />
  ));

  return (
    <Paper component="form" className="flex flex-col gap-4">
      <Title order={2}>Product And Seller Information</Title>
      <Box className="flex flex-col gap-4">
        <Card>
          <Title order={4}>Product Details</Title>
          <SimpleGrid cols={2}>{productInputs}</SimpleGrid>
        </Card>
        <Card>
          <Title order={4}>Seller Details</Title>
          <SimpleGrid cols={2}>{sellerInputs}</SimpleGrid>
        </Card>
      </Box>
    </Paper>
  );
}