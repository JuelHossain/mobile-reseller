import { Switch } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useUpdateUser from "../../../hooks/auth/useUpdateUser";
import useUser from "../../../hooks/auth/useUser";

export default function ToggleRole() {
  const { admin, seller } = useUser();
  const { toggleSeller } = useUpdateUser();
  const navigate = useNavigate();

  return (
    !admin && (
      <Switch
        classNames={{ root: "items-center flex mt-1" }}
        size="xs"
        checked={seller}
        onClick={() => {
          toggleSeller();
          navigate("/dashboard");
        }}
      />
    )
  );
}
