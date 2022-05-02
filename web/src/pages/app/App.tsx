import {
  ThemeProvider as MaterialThemeProvider,
} from "@mui/material";
import { routes } from "../../routes/App.routes";
import { theme } from "../../utils/constants/theme";

export const App = () => {
  return (
    <MaterialThemeProvider theme={theme}>{routes}</MaterialThemeProvider>
  );
};
