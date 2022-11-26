import { Box } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { IconUpload } from "@tabler/icons";
import { useProfileContext } from "../profileContext";

export default function PhotoUrl() {
  const { onSelect, uploading, values: { photoURL } = {} } = useProfileContext();
  return (
    <Box className="w-40 h-40 relative rounded-full overflow-hidden">
      <Dropzone
        loading={uploading}
        onDrop={onSelect}
        className={`w-full h-full absolute top-0 left-0 ${
          uploading ? "opacity-100" : "opacity-0 hover:opacity-50"
        } flex justify-center items-center`}
        multiple={false}
      >
        <IconUpload />
      </Dropzone>
      <img alt="profile" src={photoURL} className="w-full h-full object-cover" />
    </Box>
  );
}
