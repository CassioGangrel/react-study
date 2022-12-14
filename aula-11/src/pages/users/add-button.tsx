import { UserType, useUser } from "@/context/user-context";
import { Button } from "@mui/material";

export const AddButton = () => {
  const { dispatch } = useUser();

  async function onClick() {
    const data: UserType[] = await fetch(
      "https://randomuser.me/api?results=1&seed=" + Math.ceil(Math.random() * 100)
    )
      .then((r) => r.json())
      .then((r) => r.results);
    if (!dispatch) return;
    dispatch({ payload: { users: data }, type: "ADD" });
  }

  return <Button onClick={onClick}>Add Users</Button>
};
