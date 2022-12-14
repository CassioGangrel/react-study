import { createNewUser, doLogin, UserData } from "@/services/auth";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { LoginHeader } from "./header";
import { LoginForm } from "./login-form";


const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export function Login() {
  const navigate = useNavigate()
  async function onSubmit(data: UserData) {
    const { email, password } = data;
    const errors: string[] = [];
    if (!emailRegex.test(email)) {
      errors.push("Email invalido");
    }
    if (!password || password.length < 8) {
      errors.push("É necessario que a senha tenha pelo menos 8 caracteres");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    const loginData = await doLogin({ email, password });
    if (loginData.accessToken) {
      localStorage.setItem("auth", JSON.stringify(loginData))
      navigate("/")
      return
    }
    alert(loginData)
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Paper
        sx={{
          width: 500,
          height: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 6,
          alignItems: "center",
        }}
      >
        <LoginHeader title="Fazer login"/>
        <LoginForm onSubmit={onSubmit} />
        <Typography sx={{
          "&:hover": {
            cursor: "pointer",
            textDecoration: "underline"
          }
        }} onClick={() => navigate("/publico/registrar")} variant="subtitle2" >Não tem login? click aqui</Typography>
      </Paper>
    </Container>
  );
}
