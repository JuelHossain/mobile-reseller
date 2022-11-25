/* eslint-disable no-nested-ternary */
import { Button, Group } from "@mantine/core";
import { usePhoneFormContext } from "../../../../../context/phone-context/phoneFormcontext";

export default function SubmitButton() {
  const { loading } = usePhoneFormContext();
  return (
    <Group position="right">
      <Button loading={loading} type="submit">
        {loading ? "Adding Phone" : "Submit"}
      </Button>
    </Group>
  );
}
