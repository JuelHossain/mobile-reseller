/* eslint-disable no-underscore-dangle */
import { Divider, Group } from "@mantine/core";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";
import Heading from "./components/Heading";
import SeeAllButton from "./components/SeeAllButton";
import ServiceList from "./components/ServiceList";

export default function Services(props) {
  useSetPageTitle("Services");

  return (
    <Group noWrap className={`xl:items-start p-2 xl:flex-row flex-col mt-[1vh] mb-5 `}>
      <Heading />
      <Divider orientation="vertical" />
      <ServiceList {...props} />
      <SeeAllButton {...props} />
    </Group>
  );
}
