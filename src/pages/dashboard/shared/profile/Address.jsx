import { Box, Input, SimpleGrid, Text } from "@mantine/core";
import { useProfileContext } from "../../../../context/profile-context/profileContext";

export default function Address() {
  const { getInputProps } = useProfileContext();
  return (
    <Box className="w-full">
      <Text className="font-semibold text-sm"> Address</Text>
      <SimpleGrid className="xs:grid-cols-2">
        <Input.Wrapper description="Holding">
          <Input variant="filled" {...getInputProps("address.holding")} />
        </Input.Wrapper>
        <Input.Wrapper description="Road Number">
          <Input variant="filled" {...getInputProps("address.road")} />
        </Input.Wrapper>
        <Input.Wrapper description="District">
          <Input variant="filled" {...getInputProps("address.district")} />
        </Input.Wrapper>
        <Input.Wrapper description="Area">
          <Input variant="filled" {...getInputProps("address.area")} />
        </Input.Wrapper>
        <Input.Wrapper description="Postal Code">
          <Input variant="filled" {...getInputProps("address.postal")} />
        </Input.Wrapper>
      </SimpleGrid>
    </Box>
  );
}
