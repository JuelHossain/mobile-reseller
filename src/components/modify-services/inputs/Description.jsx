import { Text } from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import { useServiceFormContext } from "../../../context/service-form-context/serviceFormContext";

export default function Description() {
  const { getInputProps, errors, uploadImage } = useServiceFormContext();

  const editorProps = {
    ...getInputProps("description"),
    className: "max-h-96 overflow-auto",
    controls: [
      ["bold", "link", "image"],
      ["unorderedList", "orderedList", "h3", "h4"],
      ["alignLeft", "alignCenter", "alignRight"],
    ],
    onImageUpload: uploadImage,
  };
  return (
    <div>
      <Text className="font-semibold text-sm">Description</Text>
      <RichTextEditor {...editorProps} />
      <Text size="xs" color="red" mt={2}>
        {errors?.description}
      </Text>
    </div>
  );
}
