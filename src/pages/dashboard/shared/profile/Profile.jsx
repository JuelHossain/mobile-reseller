import { Center, Paper, SimpleGrid, Stack } from "@mantine/core";
import { useProfileContext } from "../../../../context/profile-context/profileContext";

import Address from "./Address";
import DisplayName from "./inputs/DisplayName";
import Email from "./inputs/Email";
import PhoneNumber from "./inputs/PhoneNumber";
import PhotoUrl from "./inputs/PhotoUrl";
import Role from "./inputs/Role";
import SubmitButton from "./inputs/SubmitButton";

export default function Profile() {
  const { submitHandler } = useProfileContext();
  return (
    <Center className="flex-1">
      <Paper
        onSubmit={submitHandler}
        component="form"
        className="max-w-lg flex flex-col justify-center gap-4 w-full p-4 items-start relative"
      >
        <Role />
        <Stack>
          <PhotoUrl />
          <DisplayName />
        </Stack>

        <SimpleGrid className="w-full xs:grid-cols-2">
          <Email />
          <PhoneNumber />
        </SimpleGrid>
        <Address />
        <SubmitButton />
      </Paper>
    </Center>
  );
}
