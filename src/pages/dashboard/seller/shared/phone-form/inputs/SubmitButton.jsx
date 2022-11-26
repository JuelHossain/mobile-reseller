/* eslint-disable no-nested-ternary */
import { Button, Group } from "@mantine/core";
import { usePhoneFormContext } from "../../../../../../context/phone-context/phoneFormcontext";
import ChangeStatus from "../../../../admin/shared/ChangeStatus";

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
