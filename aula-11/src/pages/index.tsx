import { User } from "@/services/auth";
import { fetchUsers } from "@/services/list-users";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then((users) => setUsers(users))
  }, []);

  return (
    <Container>
      <Typography variant="h1">Home</Typography>
      {users.map(u => <Typography variant="h6">{u.email}</Typography>)}
    </Container>
  );
}
