import { Center, Paper } from "@mantine/core";
import { useProfileContext } from "../../../../context/profile-context/profileContext";
import DisplayName from "./inputs/DisplayName";
import Email from "./inputs/Email";

export default function Profile() {
  const { submitHandler } = useProfileContext();
  return (
    <Center className="flex-1">
      <Paper
        onSubmit={submitHandler}
        component="form"
        className={`max-w-lg flex flex-col justify-center gap-4 w-full "p-4"`}
        withBorder
      >
        <DisplayName />
        <Email />
      </Paper>
    </Center>
  );
}
