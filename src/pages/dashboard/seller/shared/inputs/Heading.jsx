import { Text, Title } from "@mantine/core";

export default function Heading({ title, text }) {
  return (
    <div className=" text-center ">
      <Title>{title}</Title>
      <Text>{text}</Text>
    </div>
  );
}
