import { Paper, SimpleGrid, Stack } from "@mantine/core";
import { useProfileContext } from "./profileContext";

import Wrapper from "../../pages/dashboard/shared/Wrapper";
import Address from "./inputs/Address";
import DisplayName from "./inputs/DisplayName";
import Email from "./inputs/Email";
import PhoneNumber from "./inputs/PhoneNumber";
import PhotoUrl from "./inputs/PhotoUrl";
import Role from "./inputs/Role";
import SubmitButton from "./inputs/SubmitButton";

export default function ProfileForm() {
  const { submitHandler } = useProfileContext();
  return (
    <Wrapper image="https://e0.pxfuel.com/wallpapers/663/508/desktop-wallpaper-abstract-jared-nickerson-profile-purple-background-face-and-mobile-background.jpg">
      <Paper
        onSubmit={submitHandler}
        component="form"
        className="max-w-3xl flex flex-col justify-center gap-4 w-full p-6 items-start relative"
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
    </Wrapper>
  );
}
