import { FileInput } from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import { useAuthContext } from "../../../../context/authContext/authContext";

export default function PhotoURL() {
  const { type, getInputProps } = useAuthContext();
  return (
    type === "register" && (
      <FileInput
        accept="image/png , image/jpeg"
        label="Profile Picture"
        placeholder="Only png and jpg"
        icon={<IconUpload size={14} />}
        {...getInputProps("photo", { type: "file" })}
      />
    )
  );
}
