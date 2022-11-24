import { LoadingOverlay, Stack, Title } from "@mantine/core";
import { useServiceContext } from "../../../../context/serviceContext";
import Description from "./Description";

export default function Details() {
  const { data, isLoading } = useServiceContext();
  const { name, description } = data ?? {};

  return (
    <Stack className="md:basis-2/3 sm:basis-1/2">
      <Title>{name}</Title>
      <Description des={description} />
      <LoadingOverlay visible={isLoading} />
    </Stack>
  );
}
