import { Button, Group } from "@mantine/core";
import { useProfileContext } from "../profileContext";

export default function SubmitButton() {
  const { loading, uploading, userLoading } = useProfileContext();
  let buttonText = "Update Profile";
  if (loading) buttonText = "updating User";
  if (uploading) buttonText = "uploading Profile Picture";
  if (userLoading) buttonText = "Please Wait Loading User Data";

  return (
    <Group position="right" className="w-full">
      <Button className="w-full xs:w-auto" type="submit" loading={loading || uploading || userLoading}>
        {buttonText}
      </Button>
    </Group>
  );
}
