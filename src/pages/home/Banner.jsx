import { BackgroundImage, Button, Group, Overlay, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div style={{ height: `92vh` }} className="w-full  flex flex-col  relative">
      <Overlay zIndex={1} color="background" blur={2} />
      <BackgroundImage
        className="flex-1 flex items-center justify-center flex-col bg-opacity-50 "
        src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      >
        <Stack className="z-10 px-4 sm:px-8">
          <Title className="sm:text-center sm:text-6xl text-4xl font-black text-center xs:text-left  bg-main-6/10 px-6 py-1">
            Smile Like Never Before
          </Title>

          <Text className="sm:text-xl sm:text-center px-6 py-1 text-center xs:text-left  max-w-lg mx-auto bg-main-6/5">
            Please checkout our services before coming and book an appointment
          </Text>

          <Group className="flex sm:justify-center  xs:flex-row flex-col">
            <Button className="w-full xs:w-auto" component={Link} to="/services" variant="white" size="lg">
              Services
            </Button>
            <Button className="w-full xs:w-auto" component={Link} to="/blog" variant="light" size="lg">
              Blog
            </Button>
          </Group>
        </Stack>
      </BackgroundImage>
    </div>
  );
}
