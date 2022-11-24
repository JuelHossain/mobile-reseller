import { Button } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons";

export default function GithubButton({ ...props }) {
  return (
    <Button
      className="flex-1  "
      {...props}
      leftIcon={<IconBrandGithub size={16} />}
      sx={(theme) => ({
        backgroundColor: theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        color: "#fff",
        "&:hover": {
          backgroundColor: theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        },
      })}
    />
  );
}
