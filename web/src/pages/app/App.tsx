import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { useMemo } from "react";
import { routes } from "../../routes/App.routes";
import { theme } from "../../utils/constants/theme";

export const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const themeMemo = useMemo(
    () =>
      createTheme({
        palette: {
          ...theme.palette,
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <MaterialThemeProvider theme={themeMemo}>{routes}</MaterialThemeProvider>
  );
};
