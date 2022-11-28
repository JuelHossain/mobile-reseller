import { Card, Group } from "@mantine/core";

import useGetAUser from "../../../../hooks/auth/useGetUser";
import ActionButtons from "./ActionButtons";
import CreatedTime from "./CreatedTime";
import Details from "./Details";
import PhonePhotos from "./PhonePhotos";
import Price from "./Price";

export default function PhoneCard({ product }) {
  const { imageLinks, price, createdBy, createdAt } = product || {};
  const { user: seller, userLoading: sellerLoading } = useGetAUser(createdBy);

  return (
    <Card radius="md" withBorder p="xl" className="flex-col flex justify-between">
      <Card.Section>
        <PhonePhotos imageLinks={imageLinks} />
        <CreatedTime createdAt={createdAt} />
        <Details {...product} seller={seller} />
      </Card.Section>
      <Card.Section className="px-4 pb-4 mt-3">
        <Group position="apart">
          <Price price={price} />
          <ActionButtons product={product} sellerLoading={sellerLoading} />
        </Group>
      </Card.Section>
    </Card>
  );
}
