import { Card, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconDeviceMobileVibration } from "@tabler/icons";
import { useAdFormContext } from "../../context/adFormContext/adFormContext";

export default function ProductCard({ product }) {
  const { brand, model, _id } = product || {};
  const { setValues, values: { id } = {} } = useAdFormContext();
  const selected = id === _id;
  return (
    <Card
      className="cursor-pointer flex flex-col justify-center items-center"
      onClick={() => setValues({ id: _id })}
      withBorder
      shadow="sm"
      sx={(theme) => ({
        borderColor: selected ? theme.fn.primaryColor() : "",
      })}
    >
      <Stack position="center" align="center">
        <ThemeIcon variant="light" size="xl">
          <IconDeviceMobileVibration />
        </ThemeIcon>
        <Text align="center" lineClamp={1}>{`${brand} ${model}`}</Text>
      </Stack>
    </Card>
  );
}
