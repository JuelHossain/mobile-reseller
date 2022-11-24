import { useMantineTheme } from "@mantine/core";
import { IconDentalBroken } from "@tabler/icons";
import { PhotoView } from "react-photo-view";

export default function ServiceImage({ imageLink }) {
  const theme = useMantineTheme();
  return (
    <div className="w-20 h-20 dark:bg-main-2/20 rounded-md">
      {imageLink ? (
        <PhotoView src={imageLink}>
          <img alt="service" className="object-cover w-full h-full" src={imageLink} />
        </PhotoView>
      ) : (
        <IconDentalBroken size={50} stroke={2} color={theme.fn.primaryColor()} />
      )}
    </div>
  );
}
