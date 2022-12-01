import { ThemeOptions } from "@mui/material";

type ComponentsOption = ThemeOptions["components"]

export default {
  MuiButton: {
    defaultProps: {
      variant: "contained"
    }
  }
} as ComponentsOption