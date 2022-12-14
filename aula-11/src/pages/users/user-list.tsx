import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useUser } from "@/context/user-context";

export const UserList = () => {
  const { state } = useUser();

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {state?.users.map((user) => (
        <ListItem key={user.id.value}>
          <ListItemAvatar>
            <Avatar>
              <img
                src={user.picture.thumbnail}
                alt={user.name.title}
                loading="lazy"
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={user.name.first} secondary={user.name.title} />
        </ListItem>
      ))}
    </List>
  );
};
