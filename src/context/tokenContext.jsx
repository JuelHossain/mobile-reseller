import { useLocalStorage } from "@mantine/hooks";
import { createContext, useContext, useMemo } from "react";

export const tokenContext = createContext();
export function TokenProvider({ children }) {
  const [token, setToken, removeToken] = useLocalStorage({
    key: "accessToken",
    defaultValue: null,
  });

  const value = useMemo(() => ({ token, setToken, removeToken }), [token, setToken, removeToken]);

  return <tokenContext.Provider value={value}>{children}</tokenContext.Provider>;
}
export const useTokenContext = () => useContext(tokenContext);
