import { Button } from "@mantine/core";
import FacebookIcon from "../icons/FacebookIcon";

export default function FacebookButton(props) {
  return (
    <Button
      className="flex-1 "
      leftIcon={<FacebookIcon />}
      sx={(theme) => ({
        backgroundColor: "#4267B2",
        color: "#fff",
        "&:hover": {
          backgroundColor: theme.fn.darken("#4267B2", 0.1),
        },
      })}
      {...props}
    >
      Sign in with facebook
    </Button>
  );
}
