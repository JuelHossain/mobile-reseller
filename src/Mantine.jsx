import { useTheme, useThemeMode } from "@juel/hooks/theme";
import { Box, ColorSchemeProvider, LoadingOverlay, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import useAxiosSetup from "./hooks/auth/useAxiosSetup";
import router from "./router";
import { darkColors, lightColors } from "./utils/colors";

function Mantine() {
  const { mode, toggleMode } = useThemeMode();
  const customTheme = {
    primaryColor: "main",
    colors: mode === "dark" ? darkColors : lightColors,
  };
  const theme = useTheme(customTheme);
  const queryClient = new QueryClient();
  useAxiosSetup();
  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider colorScheme={mode} toggleColorScheme={toggleMode}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
          <NotificationsProvider>
            <ModalsProvider>
              <RouterProvider
                fallbackElement={
                  <Box>
                    <LoadingOverlay visible loaderProps={{ variant: "bars" }} />
                  </Box>
                }
                router={router}
              />
            </ModalsProvider>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  );
}

export default Mantine;
