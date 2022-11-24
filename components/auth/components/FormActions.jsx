import { Anchor, Button, Group } from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import { useAuthContext } from "../../../context/authContext/authContext";

export default function FormActions(props) {
  const { type, toggleType, loading } = useAuthContext();
  return (
    <Group position="apart" mt="xl" {...props}>
      <Anchor component="button" type="button" color="dimmed" onClick={() => toggleType()} size="xs">
        {type === "register" ? "Already have an account? Login" : "Don't have an account? Register"}
      </Anchor>
      <Button loading={loading} className="flex-1 xs:flex-none" type="submit">
        {upperFirst(type)}
      </Button>
    </Group>
  );
}
