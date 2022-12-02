import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

export const BlankLayout = () => (
  <Box
    sx={{
      height: "100vh",
      width: "100vw",
      backgroundColor: 'rebeccapurple'
    }}
  >
    <Outlet />
  </Box>
);
