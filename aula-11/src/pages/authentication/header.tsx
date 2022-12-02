import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const LoginHeader = (props: {title: string}) => (
  <Box width="100%" sx={{textAlign: "center"}}>
    {" "}
    <Typography variant="h4">{props.title}</Typography>
  </Box>
);
