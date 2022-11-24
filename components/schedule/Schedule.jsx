import { Card, Container, Group, Text, Title } from "@mantine/core";
import Logo from "../header/Logo";

export default function Schedule() {
  const hours = [
    { day: "saturday", time: "8:00 am to 4:00 pm" },
    { day: "sunday", time: "11:00 am to 4:00 pm" },
    { day: "monday", time: "8:00 am to 4:00 pm" },
    { day: "tuesday", time: "8:00 am to 4:00 pm" },
    { day: "wednesday", time: "8:00 am to 4:00 pm" },
    { day: "thursday", time: "8:00 am to 4:00 pm" },
    { day: "friday", time: "8:00 am to 4:00 pm" },
  ];
  const hoursList = hours.map((h) => {
    const { day, time } = h;
    return (
      <Group key={day} position="apart" className={`py-2 px-4 ${day === "sunday" ? "bg-main-5/10" : "bg-neu-5/10"} `}>
        <Text className="uppercase">{day} :</Text>
        <Text className="uppercase text-right">{time}</Text>
      </Group>
    );
  });
  return (
    <Container size="lg">
      <Card withBorder shadow="md">
        <Card.Section withBorder className="flex md:flex-row flex-col justify-evenly items-center gap-4 p-4">
          <Logo />
          <Container size="xs" className="text-center md:text-left">
            <Title color="dimmed" order={2} className="bg-main-2/10 pl-10">
              Our Schedule
            </Title>
            <Text color="dimmed">Visit us at your best time , please make an appointment by call before visit</Text>
          </Container>
        </Card.Section>
        <div className="grid md:grid-cols-2 gap-x-10 sm:gap-x-20 p-5 sm:p-10 gap-y-2 ">{hoursList}</div>
      </Card>
    </Container>
  );
}
