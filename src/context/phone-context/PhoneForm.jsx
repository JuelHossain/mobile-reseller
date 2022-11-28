import { Group, Paper } from "@mantine/core";

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
import { usePhoneFormContext } from "./phoneFormContext";

export default function PhoneForm() {
  const { submitHandler, values: { exist } = {} } = usePhoneFormContext();

  const heading = exist
    ? { title: "Update Phone", text: "Please Update Your Phone" }
    : { title: "Add Phone", text: "Please Add Your Phone" };

  return (
    <Paper
      onSubmit={submitHandler}
      component="form"
      className={`max-w-3xl flex flex-col justify-center gap-4 w-full flex-1 ${!exist ? "p-6" : "pt-2"}`}
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
