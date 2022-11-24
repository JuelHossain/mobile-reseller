import { Group, Stack } from "@mantine/core";
import { useServiceFormContext } from "../../context/service-form-context/serviceFormContext";
import Description from "./inputs/Description";
import Image from "./inputs/Image";
import Name from "./inputs/Name";
import Price from "./inputs/Price";
import ShortDescription from "./inputs/ShortDescription";
import SubmitButton from "./inputs/SubmitButton";

export default function ServiceForm() {
  const { submitHandler } = useServiceFormContext();
  return (
    <form onSubmit={submitHandler}>
      <Stack>
        <Group>
          <Name />
          <Price />
        </Group>
        <ShortDescription />
        <Image />
        <Description />
        <SubmitButton />
      </Stack>
    </form>
  );
}
