import { Avatar, createStyles, Group, Text, UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";

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
  const { user } = useUserContext();
  const { photoURL, displayName, email } = user ?? {};
  const navigate = useNavigate();

  return (
    <UnstyledButton onClick={() => navigate("/dashboard")} className={classes.user}>
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
