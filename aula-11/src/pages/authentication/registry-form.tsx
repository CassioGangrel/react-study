import { useRef } from "react";
import { SxProps } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { UserData } from "@/services/auth";

type Props = {
  onSubmit: (data: UserData) => void;
};

const formStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
  width: "70%",
};

export const RegisterForm = (props: Props) => {
  const formRef = useRef({} as HTMLFormElement);

  const onSubmit = () => {
    const email = formRef.current["Email"]?.value || "";
    const password = formRef.current["Senha"]?.value || "";

    props.onSubmit({ email, password });
  };

  return (
    <Box sx={formStyle} component="form" ref={formRef}>
      <TextField label="Email" name="Email" />
      <TextField label="Senha" name="Senha" type="password" />
      <Button onClick={onSubmit}>Registrar</Button>
    </Box>
  );
};
