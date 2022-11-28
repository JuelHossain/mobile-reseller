import { Carousel } from "@mantine/carousel";
import { createStyles, Image } from "@mantine/core";
import { PhotoProvider, PhotoView } from "react-photo-view";

const useStyles = createStyles((theme, _params, getRef) => ({
  carousel: {
    "&:hover": {
      [`& .${getRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: 4,
    height: 4,
    transition: "width 250ms ease",

    "&[data-active]": {
      width: 16,
    },
  },
}));

export default function PhonePhotos({ imageLinks }) {
  const { classes } = useStyles();

  const slides = imageLinks?.map((image) => (
    <Carousel.Slide key={image}>
      <PhotoView src={image}>
        <Image src={image} height={220} />
      </PhotoView>
    </Carousel.Slide>
  ));
  return (
    <PhotoProvider>
      <Carousel
        withIndicators
        loop
        classNames={{
          root: classes.carousel,
          controls: classes.carouselControls,
          indicator: classes.carouselIndicator,
        }}
      >
        {slides}
      </Carousel>
    </PhotoProvider>
  );
}
