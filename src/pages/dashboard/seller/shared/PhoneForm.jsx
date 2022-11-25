import { Card, Group, Stack, Text, Title } from "@mantine/core";
import { usePhoneFormContext } from "../../../../context/phone-context/phoneFormcontext";
import Condition from "./inputs/Condition";
import Images from "./inputs/Image";
import Name from "./inputs/Name";
import Price from "./inputs/Price";

export default function PhoneForm() {
  const { values } = usePhoneFormContext();
  console.log(values);
  return (
    <Card component="form" className="max-w-lg flex flex-col justify-center gap-4" withBorder>
      <Stack className=" text-center gap-0">
        <Title>Add Your Phone</Title>
        <Text>Please Add Your Phone For Sell</Text>
      </Stack>
      <Group>
        <Name />
        <Price />
      </Group>
      <Condition />
      <Images />
    </Card>
  );
}
