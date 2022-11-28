import { Badge } from "@mantine/core";
import moment from "moment/moment";

export default function CreatedTime({ createdAt }) {
  return (
    <Badge size="xs" className="text-xs mt-1 m-0 absolute top-0 right-0">
      {moment(createdAt).startOf("hour").fromNow()}
    </Badge>
  );
}
