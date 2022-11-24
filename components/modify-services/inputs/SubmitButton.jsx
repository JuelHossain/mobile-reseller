/* eslint-disable no-nested-ternary */
import { Button, Group } from "@mantine/core";
import { useServiceFormContext } from "../../../context/service-form-context/serviceFormContext";

export default function SubmitButton() {
  const { loading, uploading } = useServiceFormContext();
  return (
    <Group position="right">
      <Button loading={loading || uploading} type="submit">
        {uploading ? "Uploading File" : loading ? "Submitting Form" : "Submit"}
      </Button>
    </Group>
  );
}
