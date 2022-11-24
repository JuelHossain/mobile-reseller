import { Container, Divider, Stack } from "@mantine/core";
import { useParams } from "react-router-dom";
import { ServiceProvider } from "../../../context/serviceContext";
import useSetPageTitle from "../../../hooks/shared/useSetPageTitle";

import Details from "./details/Details";
import Reviews from "./reviews/Reviews";
import Sidebar from "./sidebar/Sidebar";

export default function ServiceDetails() {
  const { id } = useParams();
  useSetPageTitle("Service Details");

  return (
    <ServiceProvider id={id}>
      <Container className="my-10 sm:my-20 ">
        <Stack spacing={75}>
          <div className="space-y-5 gap-10 sm:flex-row flex-col-reverse flex">
            <Sidebar />
            <Divider orientation="vertical" className="sm:flex hidden" />
            <Details />
          </div>
          <Reviews />
        </Stack>
      </Container>
    </ServiceProvider>
  );
}
