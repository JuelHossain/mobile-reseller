/* eslint-disable no-nested-ternary */
import { Button, Group } from "@mantine/core";
import { usePhoneFormContext } from "../../../../../../context/phone-context/phoneFormcontext";

export default function SubmitButton() {
  const { loading, uploading } = usePhoneFormContext();
  return (
    <Group position="right">
      <Button loading={loading || uploading} type="submit">
        {uploading ? "Uploading images" : loading ? "Submitting form" : "Submit"}
      </Button>
    </Group>
  );
}
