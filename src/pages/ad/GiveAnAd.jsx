import { Container, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { AdFormProvider } from "../../context/adFormContext/adFormContext";
import Package from "./Package";
import PayForAd from "./PayForAd";
import SellerProducts from "./SellerProducts";

export default function GiveAnAd() {
  const { id } = useParams();

  return (
    <AdFormProvider id={id}>
      <Container className="my-5 sm:my-10 space-y-4 ">
        <Title align="center" order={2}>
          Please Select An Ad Package For Your Product
        </Title>
        <Package />
        <Title align="center " order={2}>
          Please Select A Product To Ad
        </Title>
        <SellerProducts />
        <PayForAd />
      </Container>
    </AdFormProvider>
  );
}
