import { Group, Paper } from "@mantine/core";
import { usePhoneFormContext } from "../../../../../context/phone-context/phoneFormcontext";
import Brand from "./inputs/Brand";
import Condition from "./inputs/Condition";
import Description from "./inputs/Description";
import Heading from "./inputs/Heading";
import Images from "./inputs/Images";
import Location from "./inputs/Location";
import Model from "./inputs/Model";
import PhoneNumber from "./inputs/PhoneNumber";
import Price from "./inputs/Price";
import SubmitButton from "./inputs/SubmitButton";

export default function PhoneForm() {
  const { submitHandler, values: { exist } = {} } = usePhoneFormContext();

  const heading = exist
    ? { title: "Update Phone", text: "Please Update Your Phone" }
    : { title: "Add Phone", text: "Please Add Your Phone" };

  return (
    <Paper
      onSubmit={submitHandler}
      component="form"
      className={`max-w-lg flex flex-col justify-center gap-4 w-full ${!exist ? "p-4" : "pt-2"}`}
      withBorder={!exist}
    >
      {!exist && <Heading {...heading} />}
      <Group>
        <Brand />
        <Model />
      </Group>
      <Group>
        <Price />
        <Condition />
      </Group>
      <Images />
      <Description />
      <PhoneNumber />
      <Location />
      <SubmitButton />
    </Paper>
  );
}
