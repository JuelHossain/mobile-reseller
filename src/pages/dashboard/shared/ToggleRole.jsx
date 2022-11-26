import { Switch } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";
import useUpdateCurrentUser from "../../../hooks/auth/useUpdateCurrentUser";

export default function ToggleRole() {
  const { admin, seller } = useUserContext();
  const { toggleSeller } = useUpdateCurrentUser();
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
