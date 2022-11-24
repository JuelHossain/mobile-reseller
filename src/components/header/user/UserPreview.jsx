import { Avatar, createStyles, Group, Text, UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase";

const useStyles = createStyles((theme) => ({
  user: {
    display: "block",
    width: "100%",
    padding: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  },
}));

export default function UserPreview() {
  const { classes } = useStyles();
  const [user] = useAuthState(auth);
  const { photoURL, displayName, email } = user ?? {};

  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar src={photoURL} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {displayName}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        <IconChevronRight size={14} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}
