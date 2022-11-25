import { Image, SimpleGrid, Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { usePhoneFormContext } from "../../../../../context/phone-context/phoneFormcontext";

export default function Images() {
  const { errors, values, setFieldValue, setFieldError } = usePhoneFormContext();

  

  const previews = values.images.map((file) => {
    const imageUrl = window.URL.createObjectURL(file);
    return <Image key={Math.random()} src={imageUrl} />;
  });

  return (
    <div>
      <Dropzone
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          setFieldValue("images", files);
        }}
        onReject={(files) => {
          if (files.length > 4) {
            setFieldError("images", "Maximum 4 Files Can be added");
          }
        }}
        maxFiles={4}
      >
        <Text align="center">Upload Images Of Phone</Text>
      </Dropzone>
      <p className="text-xs text-red-500">{errors.images}</p>

      <SimpleGrid cols={4} mt={previews.length > 0 ? "xl" : 0}>
        {previews}
      </SimpleGrid>
    </div>
  );
}
