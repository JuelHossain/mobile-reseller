import { ActionIcon, Avatar, HoverCard } from "@mantine/core";

import { IconUser } from "@tabler/icons";
import { useUserContext } from "../../../context/userContext";
import UserPreview from "./UserPreview";

export default function UserButton() {
  const { user } = useUserContext();

  return (
    <HoverCard>
      <HoverCard.Target>
        {user?.photoURL ? (
          <Avatar variant="outline" color="dark" className="w-8 h-8" src={user.photoURL} />
        ) : (
          <ActionIcon variant="filled" className="w-8 h-8">
            <IconUser />
          </ActionIcon>
        )}
      </HoverCard.Target>
      <HoverCard.Dropdown className="p-0">
        <UserPreview />
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
