import { ThemeOptions, colors } from "@mui/material";
type PalleteOption = ThemeOptions["palette"];

export default {
  primary: {
    main: "#606060",
    dark: "#363636",
    light: "#8D8D8D",
    contrastText: "#FFF",
  },
  secondary: {
    main: "#43A047",
    dark: "#00701A",
    light: "#76D275",
    contrastText: "#FFF",
  },
} as PalleteOption;
