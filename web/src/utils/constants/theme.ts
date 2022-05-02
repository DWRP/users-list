import { createTheme } from '@mui/material';
import { Colors } from './colors';

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: Colors.primaryLight,
      main: Colors.primary,
      dark: Colors.primaryDark,
    },
    secondary: {
      light: Colors.secondaryLight,
      main: Colors.secondary,
      dark: Colors.secondaryDark,
    },
    text: {
      primary: Colors.black,
      secondary: Colors.white,
    },
  },
});
