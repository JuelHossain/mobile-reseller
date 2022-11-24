import { Badge, Group, Stack } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useMatch } from "react-router-dom";
import auth from "../../../../../../firebase";
import useGetService from "../../../../../../hooks/services/useGetService";
import DeleteRating from "./DeleteRating";
import UpdateRating from "./UpdateRating";

export default function RatingActions({ serviceId, _id }) {
  const { data: { name } = {} } = useGetService(serviceId);
  const [user] = useAuthState(auth);
  const inMyReviews = useMatch("/my-reviews");
  return (
    user &&
    inMyReviews && (
      <Stack className="absolute top-0 right-0 flex items-end">
        <Group>
          <UpdateRating id={_id} name={name} />
          <DeleteRating id={_id} name={name} />
        </Group>
        <Badge className="cursor-pointer" component={Link} to={`/services/${serviceId}`}>
          {name || "Doesn't Exist"}
        </Badge>
      </Stack>
    )
  );
}
