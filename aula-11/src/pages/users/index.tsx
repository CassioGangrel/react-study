import { UsersProvider } from "@/context/user-context";
import { Container } from "@mui/material";
import { AddButton } from "./add-button";
import { UserList } from "./user-list";

export const UserPage = () => {
  return (
    <UsersProvider>
      <Container sx={{ display: "flex", gap: 10 }}>
        <UserList />
        <UserList />
      </Container>
      <AddButton />
    </UsersProvider>
  );
};
