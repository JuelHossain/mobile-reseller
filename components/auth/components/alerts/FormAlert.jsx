import { Notification } from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import { useAuthContext } from "../../../../context/authContext/authContext";

export default function FormAlert() {
  const { alert, setAlert } = useAuthContext();
  return (
    alert && (
      <Notification
        onClose={() => setAlert("")}
        icon={<IconCheck size={18} />}
        color="teal"
        title={alert?.title ? alert.title : null}
      >
        {typeof alert === "object" ? alert.message : alert}
      </Notification>
    )
  );
}
