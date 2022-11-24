import { Button } from "@mantine/core";
import GoogleIcon from "../icons/GoogleIcon";

export default function GoogleButton({ ...props }) {
  return (
    <Button className="flex-1 " leftIcon={<GoogleIcon />} variant="default" color="gray" {...props}>
      Continue with Google
    </Button>
  );
}
