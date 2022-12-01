import { Pokemon } from "@/types";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useLoaderData } from "react-router-dom";

export const PokemonShow = () => {
  const pokemon = useLoaderData() as Pokemon

  if (!pokemon) return null;

  return (
    <Box>
      <Card sx={{ minWidth: 400 }}>
        <CardMedia
          sx={{ maxWidth: 400 }}
          component="img"
          alt={`Imgem do pokemon ${pokemon.name}`}
          height="100%"
          image={pokemon.img}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <List>
            {Object.keys(pokemon).map((k) => {
              if (k === "img") return null;
              const key = k as keyof Pokemon;
              return (
                <ListItem sx={{ textAlign: "left" }}>
                  <ListItemText primary={`${key}: `} />
                  <ListItemText primary={pokemon[key]} />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
