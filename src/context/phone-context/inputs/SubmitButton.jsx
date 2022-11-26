/* eslint-disable no-nested-ternary */
import { Button, Group } from "@mantine/core";
import ChangeStatus from "../../../pages/dashboard/shared/ChangeStatus";
import { usePhoneFormContext } from "../phoneFormContext";

export default function SubmitButton() {
  const { loading, uploading, values: { exist, status } = {}, id } = usePhoneFormContext();

  return (
    <Group position={exist ? "apart" : "right"}>
      {exist && <ChangeStatus status={status} id={id} />}
      <Button loading={loading || uploading} type="submit">
        {uploading ? "Uploading images" : loading ? "Submitting form" : "Submit"}
      </Button>
    </Group>
  );
}
