import { Chip } from "@mantine/core";
import useUpdateUser from "../../../../hooks/auth/useUpdateUser";

export default function useUserRows(users) {
  const { updateUser } = useUpdateUser();
  const rows = users?.map((item) => {
    const { _id: id, displayName, email, photoURL, verified, seller, admin } = item || {};
    return {
      id,
      title: displayName,
      image: photoURL,
      cols: [
        seller ? "seller" : admin ? "admin" : "buyer",
        <Chip
          key={id}
          size="xs"
          radius="xs"
          checked={verified}
          onChange={(value) => {
            updateUser({ patch: { verified: value }, email });
          }}
          readOnly={verified}
        >
          {verified ? "Verified" : "Verify"}
        </Chip>,
        email,
      ],
    };
  });
  return rows;
}
