import { Container, Title } from "@mantine/core";
import { useAdFormContext } from "../../context/adFormContext/adFormContext";
import Package from "./Package";
import PayForAd from "./PayForAd";
import SellerProducts from "./SellerProducts";

export default function GiveAnAd() {
  const { values: { id } = {} } = useAdFormContext();
  return (
    <Container className="my-5 sm:my-10 space-y-8 ">
      <Title align="center" order={2}>
        Please Select An Ad Package For Your Product
      </Title>
      <Package />

      <SellerProducts />
      {id && <PayForAd />}
    </Container>
  );
}
