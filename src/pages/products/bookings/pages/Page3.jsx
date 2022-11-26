import { Box, Card, Paper, SimpleGrid, TextInput, Title } from "@mantine/core";
import { useBookingFormContext } from "../../../../context/booking-context/bookingFormContext";

export default function Page3() {
  const { getInputProps, values } = useBookingFormContext();
  const {
    buyer: { address, ...buyer },
  } = values || {};

  const buyerInputs = Object.keys(buyer).map((key) => (
    <TextInput
      classNames={{ label: "capitalize" }}
      key={key}
      label={key}
      {...getInputProps(`buyer.${key}`)}
      readOnly={key === "email" || key=== "name"}
    />
  ));

  const addressInputs = Object.keys(address).map((key) => (
    <TextInput classNames={{ label: "capitalize" }} key={key} label={key} {...getInputProps(`buyer.address.${key}`)} />
  ));

  return (
    <Paper component="form" className="flex flex-col gap-4">
      <Title order={2}> Your Information</Title>
      <Box className="flex flex-col gap-4">
        <Card>
          <Title order={4}>Your Details</Title>
          <SimpleGrid cols={2}>{buyerInputs}</SimpleGrid>
        </Card>
        <Card>
          <Title order={4}>Your Address</Title>
          <SimpleGrid cols={2}>{addressInputs}</SimpleGrid>
        </Card>
      </Box>
    </Paper>
  );
}
