import { createNewUser, UserData } from "@/services/auth";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { LoginHeader } from "./header";
import { RegisterForm } from "./registry-form";


const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export function Register() {
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

    const loginData = await createNewUser({ email, password });
    if (loginData.accessToken) {
      navigate("/")
    }
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
        <LoginHeader title="Realize seu cadastro"/>
        <RegisterForm onSubmit={onSubmit} />
      </Paper>
    </Container>
  );
}
