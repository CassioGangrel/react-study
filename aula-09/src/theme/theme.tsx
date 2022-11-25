import { createTheme } from "@mui/material";
import palette from "./palette";
import components from "./components";
import { ptBR } from "@mui/material/locale";

export const theme = createTheme(
  {
    palette,
    components,
  },
  ptBR
);
