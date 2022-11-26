import { Box, Input, SimpleGrid, Text } from "@mantine/core";
import ReactInputMask from "react-input-mask";
import { useProfileContext } from "../profileContext";

export default function Address() {
  const { getInputProps, errors } = useProfileContext();
  return (
    <Box className="w-full">
      <Text className="font-semibold text-sm"> Address</Text>
      <SimpleGrid className="xs:grid-cols-2">
        <Input.Wrapper description="Holding" error={errors["address.holding"]}>
          <Input variant="filled" {...getInputProps("address.holding")} />
        </Input.Wrapper>
        <Input.Wrapper description="Road Number" error={errors["address.road"]}>
          <Input variant="filled" {...getInputProps("address.road")} />
        </Input.Wrapper>
        <Input.Wrapper description="Area" error={errors["address.area"]}>
          <Input variant="filled" {...getInputProps("address.area")} />
        </Input.Wrapper>
        <Input.Wrapper description="District" error={errors["address.district"]}>
          <Input variant="filled" {...getInputProps("address.district")} />
        </Input.Wrapper>
        <Input.Wrapper description="Postal Code" error={errors["address.postal"]}>
          <Input component={ReactInputMask} mask="9999" variant="filled" {...getInputProps("address.postal")} />
        </Input.Wrapper>
      </SimpleGrid>
    </Box>
  );
}
