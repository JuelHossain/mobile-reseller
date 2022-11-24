import { Avatar, Group, Text } from "@mantine/core";
import moment from "moment";

export default function UserDetails({ userDetails, ratedAt }) {
  const { photoURL, displayName } = userDetails;
  const time = moment(ratedAt).fromNow();
  return (
    <Group>
      <Avatar src={photoURL} alt={displayName} radius="xl" />
      <div>
        <Text size="sm">{displayName}</Text>
        <Text size="xs" color="dimmed">
          {time}
        </Text>
      </div>
    </Group>
  );
}
