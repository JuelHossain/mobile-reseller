import { useDisclosure } from "@mantine/hooks";
import { createContext, useContext, useMemo, useState } from "react";

export const headerContext = createContext();
export function HeaderProvider({ children }) {
  const disclosure = useDisclosure();
  const [active, setActive] = useState("/");
  const value = useMemo(() => ({ disclosure, active, setActive }), [disclosure, active, setActive]);
  return <headerContext.Provider value={value}>{children}</headerContext.Provider>;
}
export const useHeaderContext = () => useContext(headerContext);
