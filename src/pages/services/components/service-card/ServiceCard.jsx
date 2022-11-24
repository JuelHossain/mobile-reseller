import CardWrapper from "./components/CardWrapper";
import Details from "./components/Details";
import ServiceImage from "./components/Image";
import ServicePrice from "./components/ServicePrice";

export default function ServiceCard({ name, short, _id, cost, imageLink }) {
  return (
    <CardWrapper id={_id}>
      <ServiceImage imageLink={imageLink} />
      <ServicePrice cost={cost} id={_id} />
      <Details name={name} short={short} />
    </CardWrapper>
  );
}
