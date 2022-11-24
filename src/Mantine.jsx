import { useTheme, useThemeMode } from "@juel/hooks/theme";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import App from "./App";
import { darkColors, lightColors } from "./utils/colors";

function Mantine() {
  const { mode, toggleMode } = useThemeMode();
  const customTheme = {
    primaryColor: "main",
    colors: mode === "dark" ? darkColors : lightColors,
  };
  const theme = useTheme(customTheme);

  return (
    <ColorSchemeProvider colorScheme={mode} toggleColorScheme={toggleMode}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Mantine;
