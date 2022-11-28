/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ScrollArea, Stack, Text } from "@mantine/core";
import { useState } from "react";

export default function Page1({ imageLinks }) {
  const [imgIndex, setImgIndex] = useState(0);
  const imagesButton = imageLinks?.map((image, index) => (
    <img
      onClick={() => setImgIndex(index)}
      key={image}
      src={image}
      alt="phone"
      className={`w-20 h-20 rounded-md object-cover  ${index === imgIndex ? "" : "opacity-50"}`}
    />
  ));

  return (
    <div>
      <Stack className="gap-2 rounded-xl  ">
        <div className="max-h-[40vh] overflow-hidden w-full h-full flex justify-center items-center bg-gray-200 p-4">
          <img src={imageLinks[imgIndex]} alt="phone" className="rounded-md " />
        </div>
        <ScrollArea>
          <div className="flex justify-center gap-2">{imagesButton}</div>
        </ScrollArea>
      </Stack>
      <Text className="font-bold  max-w-md mx-auto mt-4 text-neu-7 dark:text-neu-3">
        Please check the phone photos one more time , so that you can be so sure that you need this phone
      </Text>
    </div>
  );
}
