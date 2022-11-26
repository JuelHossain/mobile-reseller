/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { usePhoneFormContext } from "../phoneFormContext";

export default function Images() {
  const { errors, values, setFieldError, onDrop, uploading } = usePhoneFormContext();

  const previews = values?.imageLinks?.map((link) => (
    <img alt="preview" className="w-full h-full object-cover" key={Math.random()} src={link} />
  ));

  const placeholder = [0, 1, 2, 3].map((n) => (
    <img
      alt="preview"
      className="w-full h-full object-cover"
      key={n}
      src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
    />
  ));

  const selected = previews.length > 0;

  return (
    <div>
      <Dropzone
        loading={uploading}
        accept={IMAGE_MIME_TYPE}
        onDrop={onDrop}
        onReject={(files) => {
          if (files.length > 4) {
            setFieldError("images", "Maximum 4 Files Can be added");
          }
        }}
        maxFiles={4}
      >
        <Text className="mb-2" align="center">
          {selected ? "Uploaded" : "Upload"} Images Of Phone
        </Text>
        <div className="duration-500 grid grid-cols-4 gap-2 h-6 xs:h-9 md:h-12 lg:h-16 overflow-hidden">
          {selected ? previews : placeholder}
        </div>
      </Dropzone>
      <p className="text-xs m-0 mt-1 text-red-500">{errors.images}</p>
    </div>
  );
}
