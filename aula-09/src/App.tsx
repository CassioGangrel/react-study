import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { fetchPokemon, fetchPokemons } from "./services/fetch-pokemons";
import { Pokemon, PokemonListItem } from "./types";
import { apiPokemonToPokemonListItem } from "./mappers";
import {
  Autocomplete,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Container, SxProps, width } from "@mui/system";

const columns: GridColumns<PokemonListItem> = [
  {
    field: "id",
    headerName: "Number",
    flex: 1,
  },
  {
    field: "name",
    headerName: "Pokemon",
    flex: 2,
  },
  {
    field: "img",
    headerName: "Image",
    flex: 2,
    renderCell: (params) => <img src={params.value}></img>,
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);

  const pokemonChosen = Boolean(pokemon);

  const isPokemon = (p: Pokemon | null): p is Pokemon => pokemonChosen;

  useEffect(() => {
    fetchPokemons()
      .then(apiPokemonToPokemonListItem)
      .then((pokemons) => setPokemonList(pokemons));
  }, []);

  useEffect(() => {
    if (!pokemonName) return;
    fetchPokemon(pokemonName).then((p) => {
      console.log(p);
      setPokemon(p);
    });
  }, [pokemonName]);
  return (
    <Container
      sx={{
        padding: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
      }}
    >
      {isPokemon(pokemon) && (
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
      )}
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexDirection="column"
        component="main"
        gap={5}
        className="App"
      >
        <Typography variant="h2">Pokemon</Typography>
        <Autocomplete
          id="select-pokemon"
          options={pokemonList}
          sx={{ width: 350 }}
          getOptionLabel={(option) => option.name}
          onChange={(_, newValue) => setPokemonName(newValue?.name || "")}
          renderInput={(params) => (
            <TextField {...params} label="Selecione seu pokemon"/>
          )}
        />
        <Box height={631} width="100%">
          <DataGrid
            rows={pokemonList}
            getRowId={(row) => row.id}
            onRowClick={(p) => setPokemonName(p.row.name || "")}
            columns={columns}
            pageSize={10}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
