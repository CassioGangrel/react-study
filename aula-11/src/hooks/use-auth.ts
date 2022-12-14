import { LoginResultData } from "@/services/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

import * as jose from 'jose'

export const useAuth = () => {
  const [auth, setAuth] = React.useState<LoginResultData | null>(null);

  const navigation = useNavigate();
  
  const login = () => navigation("/publico/entrar");
  const isLogged = () => {
    const token = auth?.accessToken
    if (!token) return false
    const jwtDocoded = jose.decodeJwt(token)
    if (!jwtDocoded.exp) return false
    const exp: number = jwtDocoded.exp * 1000
    const now = Date.now()
    return now < exp
  }


  React.useEffect(() => {
    const auth: LoginResultData = JSON.parse(
      localStorage.getItem("auth") || "{}"
    );
    setAuth(auth);
  }, []);

  return {
    login,
    isLogged
  }
};
