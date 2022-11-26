/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ScrollArea, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";

export default function Page1(props) {
  const { imageLinks, brand, model } = props || {};
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
      <Title order={2} className="text-center mb-4">{`${brand} ${model}`}</Title>
      <Stack className="gap-2 rounded-xl">
        <img src={imageLinks[imgIndex]} alt="phone" className="max-h-[50vh] object-contain rounded-md" />
        <ScrollArea>
          <div className="flex justify-center gap-2">{imagesButton}</div>
        </ScrollArea>
      </Stack>
      <Text className="font-bold text-center max-w-md mx-auto mt-4 text-neu-7 dark:text-neu-3">
        Please check the phone photos one more time , so that you can be so sure that you need this phone
      </Text>
    </div>
  );
}
