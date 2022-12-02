const baseURL = "http://localhost:3000";

export type UserData = {
  email: string;
  password: string;
};

export type User = {
  email: string;
  id: number;
}

type LoginResultData = {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
};

export function createNewUser(data: UserData): Promise<LoginResultData> {
  console.log(data)
  return fetch(`${baseURL}/register`, {
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    method: "post",
  }).then((response) => response.json());
}

export function doLogin(data: UserData): Promise<LoginResultData> {
  console.log(data)
  return fetch(`${baseURL}/login`, {
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    method: "post",
  }).then((response) => response.json());
}
