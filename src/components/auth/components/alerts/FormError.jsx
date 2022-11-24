import { Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import { useAuthContext } from "../../../../context/authContext/authContext";

export default function FormError() {
  const { error, setError } = useAuthContext();
  return (
    error && (
      <Notification onClose={() => setError("")} icon={<IconX size={18} />} color="red">
        {error}
      </Notification>
    )
  );
}
